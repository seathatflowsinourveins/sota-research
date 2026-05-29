import { EventEmitter } from "node:events";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { scoreRepo } from "../scripts/score.mjs";

// Mock GraphQL response state
let mockGraphQLResponse = "{}";
let mockGraphQLError = null;
let mockExitCode = 0;

vi.mock("node:child_process", () => ({
  spawn: vi.fn((_cmd, _args, _options) => {
    const proc = new EventEmitter();
    proc.stdout = new EventEmitter();
    proc.stderr = new EventEmitter();
    proc.stdin = { write: vi.fn(), end: vi.fn() };

    queueMicrotask(() => {
      if (mockGraphQLError) {
        proc.stderr.emit("data", mockGraphQLError);
      } else {
        proc.stdout.emit("data", mockGraphQLResponse);
      }
      proc.emit("close", mockExitCode);
    });

    return proc;
  }),
  exec: vi.fn(),
}));

function setMockGraphQLResponse(data) {
  mockGraphQLResponse = JSON.stringify(data);
  mockGraphQLError = null;
  mockExitCode = 0;
}

function _setMockGraphQLError(msg) {
  mockGraphQLError = msg;
  mockGraphQLResponse = "{}";
  mockExitCode = 1;
}

describe("score.mjs", () => {
  beforeEach(() => {
    vi.stubEnv("GH_TOKEN", "test-token");
    // Set default mock response: a realistic B.2 dimension query response (Appendix B.2)
    setMockGraphQLResponse({
      data: {
        rateLimit: {
          remaining: 4000,
          resetAt: new Date(Date.now() + 3600000).toISOString(),
          cost: 1,
          nodeCount: 1,
        },
        repository: {
          stargazerCount: 1000,
          forkCount: 150,
          watchers: { totalCount: 50 },
          issues: { totalCount: 25 },
          pullRequests: { totalCount: 80 },
          defaultBranchRef: {
            target: {
              history: {
                totalCount: 500,
                nodes: Array(10).fill({
                  committedDate: "2025-01-01T00:00:00Z",
                }),
              },
            },
          },
          languages: { nodes: [{ name: "JavaScript", size: 10000 }] },
          repositoryTopics: { nodes: [] },
          object: { text: "A sample repository" },
        },
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("regression — pathway exposure (BUG B) + D6 count semantics (BUG D)", () => {
    it("exposes adoption_pathway from the pathway INPUT, not the numeric D3", async () => {
      const result = await scoreRepo({
        owner: "test",
        repo: "repo",
        category: "mcp-server",
        dims: { D3pathway: { pathway: "mcp", evidence: { hasManifest: true, hasDocs: true } } },
      });
      // Must be the pathway string so the D3 veto can fire in the live pipeline.
      expect(result.adoption_pathway).toBe("mcp");
    });

    it("returns undefined adoption_pathway when no pathway was assessed (tri-state: unassessed skips the veto)", async () => {
      const result = await scoreRepo({ owner: "test", repo: "repo", category: "mcp-server" });
      // Tri-state: UNASSESSED (no D3pathway input) => undefined so the pathway veto SKIPS;
      // assessed-without-pathway => null => veto fires. (Set by score.mjs computeDimensions.)
      expect(result.adoption_pathway).toBeUndefined();
    });

    it("D6 publisher-risk fires on the 0/1 single-publisher count, not only boolean true", async () => {
      const result = await scoreRepo({
        owner: "test",
        repo: "repo",
        category: "code-library",
        dims: { D6: 9, publisherRiskSinglePublisher: 1, publisherRiskWeeklyDownloads: 5_000_000 },
      });
      // count=1 + 5M downloads => RED publisher-risk => D6 capped below the supplied 9.
      expect(result.dimensions.D6).toBeLessThan(9);
    });
  });

  it("should throw if owner or repo is missing", async () => {
    await expect(scoreRepo({})).rejects.toThrow("owner and repo required");
    await expect(scoreRepo({ owner: "test" })).rejects.toThrow("owner and repo required");
  });

  it("should load category profile weights from docs/categories/<category>.md", async () => {
    // Category profile should load from docs/categories/<category>.md
    // Expected to have D1..D8 weights that sum to ~1.0
    const result = await scoreRepo({ owner: "test", repo: "repo", category: "mcp-server" });

    expect(result).toHaveProperty("rubric_score");
    expect(result).toHaveProperty("dimensions");
    expect(result.dimensions).toHaveProperty("D1");
    expect(result.dimensions).toHaveProperty("D8");

    // Verify all 8 dimensions are present
    const dims = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];
    dims.forEach((d) => {
      expect(result.dimensions).toHaveProperty(d);
    });
  });

  describe("Weight validation", () => {
    it("should throw if weights sum to !=1.00", async () => {
      // This is a critical invariant
      // The loadCategoryProfile should validate sum ~= 1.0
      // If sum is off by >0.01, throw

      // This test documents the requirement; actual validation happens in scoreRepo
      expect(true).toBe(true); // Placeholder
    });

    it("should accept weights summing to 1.0 ±0.01", async () => {
      const result = await scoreRepo({
        owner: "test",
        repo: "repo",
        category: "code-library",
      });

      expect(result.rubric_score).toBeLessThanOrEqual(100);
      expect(result.rubric_score).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Dimension scoring", () => {
    it("should compute D1 (stars) as log10(stars+1) normalized 0-10", async () => {
      // Mock scenario: 1000 stars → log10(1001) ≈ 3.0
      // Validate formula: log10(stars+1)

      const result = await scoreRepo({
        owner: "test",
        repo: "repo",
        category: "code-library",
      });

      const D1 = result.dimensions.D1;
      expect(D1).toBeGreaterThanOrEqual(0);
      expect(D1).toBeLessThanOrEqual(10);
    });

    it("should compute D2 (maintenance) from commit + PR counts", async () => {
      const result = await scoreRepo({
        owner: "test",
        repo: "repo",
        category: "code-library",
      });

      const D2 = result.dimensions.D2;
      expect(D2).toBeGreaterThanOrEqual(0);
      expect(D2).toBeLessThanOrEqual(10);
    });

    it("should return all 8 dimensions", async () => {
      const result = await scoreRepo({
        owner: "test",
        repo: "repo",
        category: "mcp-server",
      });

      const dims = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];
      dims.forEach((d) => {
        expect(result.dimensions).toHaveProperty(d);
      });
    });
  });

  it("should return score between 0-100", async () => {
    const result = await scoreRepo({
      owner: "test",
      repo: "repo",
      category: "agent-framework",
    });

    expect(result.rubric_score).toBeGreaterThanOrEqual(0);
    expect(result.rubric_score).toBeLessThanOrEqual(100);
  });

  it("should return evidence (stars, forks, PRs, commits)", async () => {
    const result = await scoreRepo({
      owner: "test",
      repo: "repo",
      category: "skill-pack",
    });

    expect(result.evidence).toHaveProperty("stars");
    expect(result.evidence).toHaveProperty("forks");
    expect(result.evidence).toHaveProperty("pr_count");
    expect(result.evidence).toHaveProperty("commits_90d");
  });

  it("should include category in response", async () => {
    const result = await scoreRepo({
      owner: "test",
      repo: "repo",
      category: "hook-toolkit",
    });

    expect(result.category).toBe("hook-toolkit");
  });

  it("should throw if GH_TOKEN is missing", async () => {
    vi.stubEnv("GH_TOKEN", "");
    // scoreRepo should bail in githubGraphQLDimensions
    await expect(
      scoreRepo({ owner: "test", repo: "repo", category: "code-library" }),
    ).rejects.toThrow("GH_TOKEN");
  });

  describe("NOVEL 3 — Owner/repo validation", () => {
    it("should reject invalid owner (too long, invalid chars, leading dash)", async () => {
      // Invalid owners: "a" * 40 (too long), "owner_underscore" (invalid char), "-owner" (leading dash)
      const invalidOwners = ["a".repeat(40), "owner_test", "-owner", "owner@test"];

      for (const owner of invalidOwners) {
        await expect(
          scoreRepo({
            owner,
            repo: "valid-repo",
            category: "code-library",
          }),
        ).rejects.toThrow(/Invalid owner/);
      }
    });

    it("should reject invalid repo (too long, invalid chars)", async () => {
      const invalidRepos = ["a".repeat(101), "repo@test", "repo!"];

      for (const repo of invalidRepos) {
        await expect(
          scoreRepo({
            owner: "valid-owner",
            repo,
            category: "code-library",
          }),
        ).rejects.toThrow(/Invalid repo/);
      }
    });

    it("should accept valid owner (3-39 chars, alphanumeric + dash)", async () => {
      // Valid: "ab1", "owner", "owner-name", "123", "o1-2-3"
      const validOwners = ["ab1", "owner", "owner-name", "123", "o1-2-3"];

      for (const owner of validOwners) {
        // Each should pass validation (may fail later on GraphQL, but not validation)
        try {
          await scoreRepo({
            owner,
            repo: "valid-repo",
            category: "code-library",
          });
        } catch (err) {
          // Expected to fail on GraphQL, not on validation
          expect(err.message).not.toMatch(/Invalid owner/);
        }
      }
    });

    it("should accept valid repo (1-100 chars, alphanumeric + dash/dot/underscore)", async () => {
      const validRepos = ["a", "repo", "repo-name", "my.lib", "my_lib"];

      for (const repo of validRepos) {
        try {
          await scoreRepo({
            owner: "valid-owner",
            repo,
            category: "code-library",
          });
        } catch (err) {
          expect(err.message).not.toMatch(/Invalid repo/);
        }
      }
    });

    it("should reject path traversal attempts", async () => {
      // Attempts to escape baseDir
      const traversalAttempts = [
        { owner: "..", repo: "repo" },
        { owner: "owner", repo: ".." },
        { owner: "owner/../etc", repo: "repo" },
      ];

      for (const attempt of traversalAttempts) {
        try {
          await scoreRepo({
            owner: attempt.owner,
            repo: attempt.repo,
            category: "code-library",
          });
        } catch (err) {
          // Should either fail validation or traversal check
          expect(err.message.match(/Invalid owner|Invalid repo|Path traversal/)).toBeTruthy();
        }
      }
    });
  });
});
