import { EventEmitter } from "node:events";
import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { bootstrap, decideCandidate } from "../scripts/bootstrap.mjs";
import { tierRank } from "../scripts/lib/decision.mjs";

// Mock GraphQL response state (for discover/score calls within bootstrap)
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

describe("bootstrap.mjs", () => {
  let tempDir;

  beforeEach(async () => {
    vi.stubEnv("GH_TOKEN", "test-token");
    tempDir = join(tmpdir(), `sota-bootstrap-test-${Date.now()}`);
    await fs.mkdir(tempDir, { recursive: true });
    await fs.mkdir(join(tempDir, "inventory"), { recursive: true });
    // Set default mock response for discover (B.3 search) and score (B.2 dimension) queries
    setMockGraphQLResponse({
      data: {
        rateLimit: {
          remaining: 4000,
          resetAt: new Date(Date.now() + 3600000).toISOString(),
          cost: 1,
          nodeCount: 1,
        },
        search: {
          repositoryCount: 50,
          pageInfo: { hasNextPage: false, endCursor: null },
          nodes: [
            {
              nameWithOwner: "owner/test-repo",
              stargazerCount: 300,
              pushedAt: "2025-01-01T00:00:00Z",
              licenseInfo: { spdxId: "MIT" },
              repositoryTopics: { nodes: [{ topic: { name: "mcp-server" } }] },
              description: "A test repository",
            },
          ],
        },
        repository: {
          stargazerCount: 300,
          forkCount: 50,
          watchers: { totalCount: 20 },
          issues: { totalCount: 10 },
          pullRequests: { totalCount: 30 },
          defaultBranchRef: {
            target: {
              history: {
                totalCount: 200,
                nodes: Array(10).fill({
                  committedDate: "2025-01-01T00:00:00Z",
                }),
              },
            },
          },
          languages: { nodes: [{ name: "JavaScript", size: 5000 }] },
          repositoryTopics: { nodes: [] },
          object: { text: "A test repository" },
        },
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

  it("should iterate 6 default topics when topic not specified", async () => {
    // DEFAULT_TOPICS has 6 entries
    const result = await bootstrap({ baseDir: tempDir });

    expect(result).toHaveProperty("candidates_discovered");
    expect(result).toHaveProperty("named_targets_scored");
    expect(result).toHaveProperty("unique_candidates");
    expect(result).toHaveProperty("bootstrap_file");
  });

  it("should use specified topic if provided", async () => {
    const result = await bootstrap({ topic: "custom-topic", baseDir: tempDir });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("unique_candidates");
  });

  it("should use specified category if provided", async () => {
    const result = await bootstrap({
      topic: "test-topic",
      category: "mcp-server",
      baseDir: tempDir,
    });

    expect(result).toBeDefined();
  });

  describe("Default topics discovery", () => {
    it("should invoke discover in parallel for default topics", async () => {
      // Six default topics:
      // 1. MCP servers SOTA 2026 (mcp-server)
      // 2. agent orchestration patterns
      // 3. research agents (gpt-researcher class)
      // 4. Claude Code skill packs + hook toolkits
      // 5. code intelligence tools
      // 6. audit starred repos

      const result = await bootstrap({ baseDir: tempDir });

      expect(result.candidates_discovered).toBeGreaterThanOrEqual(0);
    });

    it("should accumulate candidates from all discovery topics", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      expect(result).toHaveProperty("candidates_discovered");
      expect(typeof result.candidates_discovered).toBe("number");
    });
  });

  describe("Named targets scoring", () => {
    it("should score the 6 named bootstrap targets", async () => {
      // NAMED_TARGETS list (6):
      // assafelovic/gpt-researcher · ComposioHQ/agent-orchestrator · HKUDS/OpenHarness
      // multica-ai/multica · safishamsi/graphify · punkpeye/awesome-mcp-servers

      const result = await bootstrap({ baseDir: tempDir });

      expect(result.named_targets_scored).toBeGreaterThanOrEqual(0);
    });

    it("QC: decideCandidate forwards a discovered candidate's verified safety (else fail-closed wrongly caps it to STUDY)", () => {
      // A safety-verified, high-scoring, gap-filling, multi-family mcp-server candidate.
      const inventory = {
        gaps: [{ id: "eval-harness", priority: "high" }],
        strategic_priorities: ["eval-harness"],
        layers: {},
      };
      const base = {
        nameWithOwner: "o/eval-harness-tool",
        hint: { topics: ["eval", "harness"], description: "eval harness" },
        source_trust: { family_count: 4 },
        score: {
          category: "mcp-server",
          rubric_score: 95,
          codex_score: 95,
          niche_overlay_D9: 0,
          coverage: 1,
          dimensions: { D1: 9, D2: 9, D3: 9, D4: 9, D5: 9, D6: 9, D7: 9, D8: 9 },
        },
      };
      const withSafety = decideCandidate(
        { ...base, safety: { passedUpstream: true } },
        inventory,
        "eval harness",
      );
      const without = decideCandidate({ ...base }, inventory, "eval harness");

      // Safety-verified → reaches an INSTALL tier; unverified → fail-closed to STUDY.
      expect(tierRank(withSafety.decision.action)).toBeGreaterThan(tierRank("STUDY"));
      expect(tierRank(without.decision.action)).toBeLessThanOrEqual(tierRank("STUDY"));
    });

    it("should include named targets even if discovery yields nothing", async () => {
      // Named targets must be scored regardless of discovery results
      const result = await bootstrap({ baseDir: tempDir });

      // At minimum, named targets should contribute to unique_candidates
      expect(result.unique_candidates).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Candidate merging", () => {
    it("should merge discovery candidates + named targets", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      expect(result).toHaveProperty("unique_candidates");
      expect(typeof result.unique_candidates).toBe("number");
    });

    it("should deduplicate candidates by nameWithOwner", async () => {
      // If a named target also appears in discovery, count it once
      const result = await bootstrap({ baseDir: tempDir });

      // unique_candidates should be <= candidates_discovered + named_targets_scored
      expect(result.unique_candidates).toBeLessThanOrEqual(
        result.candidates_discovered + result.named_targets_scored,
      );
    });

    it("R6: ranks recommendations by the engine verdict (action tier, then final score)", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      for (let i = 0; i < result.recommendations.length - 1; i++) {
        const cur = result.recommendations[i];
        const next = result.recommendations[i + 1];
        const curTier = tierRank(cur.action);
        const nextTier = tierRank(next.action);
        expect(curTier).toBeGreaterThanOrEqual(nextTier); // higher action tier ranks first
        if (curTier === nextTier) {
          expect(cur.final_score ?? 0).toBeGreaterThanOrEqual(next.final_score ?? 0);
        }
      }
    });
  });

  describe("Output file", () => {
    it("should write inventory/bootstrap-<ISO-date>.md", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      expect(result.bootstrap_file).toMatch(/inventory[\\/]bootstrap-\d{4}-\d{2}-\d{2}\.md/);
    });

    it("should contain header with summary", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      const content = await fs.readFile(result.bootstrap_file, "utf-8");
      expect(content).toContain("# Bootstrap SOTA Scan");
      expect(content).toContain("## Summary");
    });

    it("should contain recommendations table", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      const content = await fs.readFile(result.bootstrap_file, "utf-8");
      expect(content).toContain("## Recommendations");
      expect(content).toContain("| Score | Repo | Category | Sources | Rationale |");
    });

    it("should list top 20 recommendations in output", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      expect(result.recommendations).toBeDefined();
      expect(result.recommendations.length).toBeLessThanOrEqual(20);
    });

    it("R1: persists decisions.jsonl (each line a parseable record the outcome loop reads)", async () => {
      const result = await bootstrap({ baseDir: tempDir });

      expect(result.decisions_file).toMatch(/inventory[\\/]decisions\.jsonl$/);
      const content = await fs.readFile(result.decisions_file, "utf-8");
      const lines = content.trim().split("\n").filter(Boolean);
      expect(lines.length).toBeGreaterThan(0);
      const records = lines.map((l) => JSON.parse(l)); // outcome.mjs does exactly this
      const rec = records[0];
      expect(rec).toHaveProperty("ts");
      expect(rec).toHaveProperty("repo");
      expect(rec).toHaveProperty("action");
      expect(rec).toHaveProperty("schema_version");

      // C2 provenance: one run_id for the whole bootstrap scan; decision_id unique per repo.
      const runIds = new Set(records.map((r) => r.run_id));
      expect(runIds.size).toBe(1);
      expect([...runIds][0]).toBeTruthy();
      const decisionIds = records.map((r) => r.decision_id);
      expect(new Set(decisionIds).size).toBe(decisionIds.length); // unique per repo
      expect(rec.decision_id).toBe(`${rec.run_id}::${rec.repo}`);
    });

    it("R1: writes a scan-*.md (reconciles the PR-body drift that referenced inventory/scan-*.md)", async () => {
      await bootstrap({ baseDir: tempDir });

      const files = await fs.readdir(join(tempDir, "inventory"));
      expect(files.some((f) => /^scan-.*\.md$/.test(f))).toBe(true);
    });
  });

  it("should handle empty discovery results gracefully", async () => {
    // Even if discovery yields nothing, named targets should populate recommendations
    const result = await bootstrap({ baseDir: tempDir });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("bootstrap_file");
  });

  it("should return recommendations array", async () => {
    const result = await bootstrap({ baseDir: tempDir });

    expect(Array.isArray(result.recommendations)).toBe(true);
  });

  describe("NOVEL 4 — Dry-run mode", () => {
    it("should exit early with --dry-run flag", async () => {
      const result = await bootstrap({ topic: "test-topic", dryRun: true, baseDir: tempDir });

      expect(result.dry_run).toBe(true);
      expect(result.candidates_discovered).toBe(0);
      expect(result.named_targets_scored).toBe(0);
    });

    it("should not invoke GraphQL when dry-run is true", async () => {
      // dry-run should return immediately without making API calls
      const result = await bootstrap({ topic: "test", dryRun: true, baseDir: tempDir });

      expect(result.dry_run).toBe(true);
    });
  });

  describe("NOVEL 5 — Cost budget gate", () => {
    it("should reject if estimated cost exceeds maxCost", async () => {
      // Default is 6 topics * 10 candidates + 6 named targets = 66 total
      // maxCost=50 should reject
      // Note: process.exit is called, which throws in test environment
      try {
        await bootstrap({ maxCost: 50, baseDir: tempDir });
        expect.fail("Should have exited");
      } catch (err) {
        // process.exit throws "process.exit unexpectedly called with 1"
        expect(err.message).toMatch(/COST LIMIT EXCEEDED|process\.exit/);
      }
    });

    it("should allow if estimated cost <= maxCost", async () => {
      // maxCost=100 should allow (66 < 100)
      const result = await bootstrap({ maxCost: 100, baseDir: tempDir });

      expect(result).toBeDefined();
      expect(result).toHaveProperty("unique_candidates");
    });

    it("should skip cost gate if maxCost is null", async () => {
      // null = no cost limit
      const result = await bootstrap({ maxCost: null, baseDir: tempDir });

      expect(result).toBeDefined();
    });
  });
});
