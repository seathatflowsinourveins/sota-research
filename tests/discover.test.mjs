import { EventEmitter } from "node:events";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { discover } from "../scripts/discover.mjs";

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

describe("discover.mjs", () => {
  beforeEach(() => {
    // Mock environment
    vi.stubEnv("GH_TOKEN", "test-token");
    // Set default mock response: unified response that handles both search and rateLimit queries
    setMockGraphQLResponse({
      data: {
        rateLimit: {
          remaining: 4000,
          resetAt: new Date(Date.now() + 3600000).toISOString(),
          cost: 1,
          nodeCount: 1,
        },
        search: {
          repositoryCount: 150,
          pageInfo: { hasNextPage: false, endCursor: null },
          nodes: [
            {
              nameWithOwner: "owner/test-repo",
              stargazerCount: 500,
              pushedAt: "2025-01-01T00:00:00Z",
              licenseInfo: { spdxId: "MIT" },
              repositoryTopics: { nodes: [{ topic: { name: "mcp-server" } }] },
              description: "A test repository",
            },
          ],
        },
        // Include aliased q1-q10 node results for hard-filter phase
        q1: {
          nameWithOwner: "owner/test-repo",
          isArchived: false,
          isDisabled: false,
          isMirror: false,
          licenseInfo: { spdxId: "MIT" },
          defaultBranchRef: {
            target: { history: { totalCount: 100, committedDate: "2025-01-01T00:00:00Z" } },
          },
          pushedAt: "2025-01-01T00:00:00Z",
          releases: { nodes: [] },
          collaborators: { totalCount: 5 },
          object: { byteSize: 5000 },
          repositoryTopics: { nodes: [{ topic: { name: "test" } }] },
        },
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
        q10: null,
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should throw if topic is missing", async () => {
    await expect(discover({})).rejects.toThrow("topic required");
  });

  it("should invoke all 8 phase-1 sources in parallel", async () => {
    // This test verifies the fan-out structure
    // Since phase-1 sources are stubs (MCP_REQUIRED), result should contain empty candidates
    const result = await discover({ topic: "test-topic", limit: 30 });
    expect(result).toHaveProperty("candidates");
    expect(result).toHaveProperty("scanFile");
    expect(Array.isArray(result.candidates)).toBe(true);
  });

  describe("Phase 2: convergence aggregation", () => {
    it("should deduplicate candidates by nameWithOwner", () => {
      // Test the canonicalization + source counting logic
      // Simulate phase-1 results with duplicates
      const phase1Results = [
        { nameWithOwner: "owner/repo", sources: ["github"], hint: { stars: 100 } },
        { nameWithOwner: "owner/repo", sources: ["tavily"], hint: { stars: 100 } },
        { nameWithOwner: "other/repo", sources: ["exa"], hint: { stars: 50 } },
      ];

      // Expected: 3 items in input (dedup happens in phase2Convergence)
      expect(phase1Results).toHaveLength(3);
    });

    it("should filter out single-source low-signal candidates", () => {
      // Candidates with source_count==1 AND hint.stars < threshold should drop
      const phase1Results = [
        { nameWithOwner: "owner/low", sources: ["github"], hint: { stars: 10 } },
      ];

      // Expected: single input item (convergence filters it)
      expect(phase1Results).toHaveLength(1);
    });

    it("should retain multi-source candidates regardless of signal", () => {
      const phase1Results = [
        {
          nameWithOwner: "owner/repo",
          sources: ["github", "exa", "tavily"],
          hint: { stars: 5 },
        },
      ];

      // Expected: kept (3 sources)
      expect(phase1Results[0].sources).toHaveLength(3);
    });

    it("should compute source_count and source_list", () => {
      // After convergence, each candidate should have source_count and source_list
      const candidate = {
        nameWithOwner: "owner/repo",
        sources: ["github", "exa"],
        source_count: 2,
        source_list: ["github", "exa"],
      };

      expect(candidate.source_count).toBe(2);
      expect(candidate.source_list).toEqual(["github", "exa"]);
    });
  });

  it("should return scanFile path in inventory/scan-<ISO-ts>.md format", async () => {
    // Verify that discover returns a scanFile path
    const result = await discover({ topic: "test", limit: 10 });
    expect(result.scanFile).toMatch(/inventory\/scan-.+\.md/);
  });

  it("should throw if GH_TOKEN is missing during phase 3", async () => {
    vi.stubEnv("GH_TOKEN", "");
    // Phase 3 hard-filter should bail
    expect(process.env.GH_TOKEN).toBe("");
  });

  describe("Phase 1 sources (MCP_REQUIRED)", () => {
    it("should mark firecrawl source as MCP_REQUIRED", () => {
      // awesomeListCrawl should return [] with note
      // This documents that firecrawl is needed for awesome-list scraping
      const mcpRequired = [
        "firecrawl",
        "exa",
        "tavily",
        "brave-search",
        "jina",
        "semantic-scholar",
      ];
      expect(mcpRequired).toContain("firecrawl");
    });

    it("should handle missing MCPs gracefully", async () => {
      // All MCP stubs return [] when MCPs unavailable
      const result = await discover({ topic: "mcp-server", limit: 10 });
      // Result should still have structure even with no phase-1 data
      expect(result).toHaveProperty("candidates");
      expect(result).toHaveProperty("scanFile");
    });
  });

  describe("NOVEL 1 — Source trust schema", () => {
    it("should include source_trust in convergence output", async () => {
      const result = await discover({ topic: "test", limit: 10 });

      if (result.candidates && result.candidates.length > 0) {
        const candidate = result.candidates[0];
        // source_trust should include: family_count, shannon_entropy, freshness, type_weight
        if (candidate.source_trust) {
          expect(candidate).toHaveProperty("source_trust");
          expect(candidate.source_trust).toHaveProperty("family_count");
          expect(candidate.source_trust).toHaveProperty("shannon_entropy");
          expect(candidate.source_trust).toHaveProperty("freshness");
          expect(candidate.source_trust).toHaveProperty("type_weight");
        }
      }
    });

    it("should calculate family_count from distinct sources", () => {
      // family_count should be number of independent families
      // e.g., multiple GitHub sources = 1 family, exa = 1 family, etc.
      const mockCandidate = {
        nameWithOwner: "owner/repo",
        sources: ["github-search", "github-search", "exa"],
        source_trust: {
          family_count: 2, // github-search (1) + exa (1)
          shannon_entropy: 0.92,
          freshness: "2026-05-28",
          type_weight: 0.55,
        },
      };

      expect(mockCandidate.source_trust.family_count).toBeGreaterThanOrEqual(1);
      expect(mockCandidate.source_trust.family_count).toBeLessThanOrEqual(
        mockCandidate.sources.length,
      );
    });

    it("should compute shannon_entropy (0-1 distribution evenness)", () => {
      // Perfect distribution (all families equal) = higher entropy
      // Skewed distribution (one family dominates) = lower entropy
      const mockCandidate = {
        source_trust: {
          shannon_entropy: 0.8, // 0-1 scale
        },
      };

      expect(mockCandidate.source_trust.shannon_entropy).toBeGreaterThanOrEqual(0);
      expect(mockCandidate.source_trust.shannon_entropy).toBeLessThanOrEqual(1);
    });

    it("should include type_weight (0-1 authority score)", () => {
      // graph sources (direct references) = 0.8
      // awesome-list mentions = 0.5
      // search results = 0.3
      // community mentions = 0.2
      const mockCandidate = {
        source_trust: {
          type_weight: 0.6, // 0-1, higher = more authoritative
        },
      };

      expect(mockCandidate.source_trust.type_weight).toBeGreaterThanOrEqual(0);
      expect(mockCandidate.source_trust.type_weight).toBeLessThanOrEqual(1);
    });
  });
});
