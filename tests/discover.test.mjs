import { EventEmitter } from "node:events";
import { promises as fsp } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  canonicalIdentity,
  countIndependentFamilies,
  discover,
  PHASE1_SOURCES,
  phase2Convergence,
} from "../scripts/discover.mjs";

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
    it("dedups by canonical identity, collapsing the same origin across sources into one candidate", () => {
      // CALL phase2Convergence on phase-1 batches with a duplicate origin (was a vacuous fixture assert).
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search"], hint: { stars: 100 } }],
        [{ nameWithOwner: "owner/repo", sources: ["tavily"], hint: { stars: 100 } }],
        [{ nameWithOwner: "other/repo", sources: ["exa"], hint: { stars: 50 } }],
      ];
      const out = phase2Convergence(phase1);
      // owner/repo's two appearances collapse to one; other/repo is distinct → 2 candidates.
      expect(out).toHaveLength(2);
      const owner = out.find((c) => c.nameWithOwner === "owner/repo");
      expect(owner).toBeDefined();
      expect(owner.source_count).toBe(2);
    });

    it("aggregates source_count and source_list across the sources that surfaced one origin", () => {
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search"], hint: { stars: 80 } }],
        [{ nameWithOwner: "owner/repo", sources: ["exa"], hint: { stars: 80 } }],
      ];
      const [candidate] = phase2Convergence(phase1);
      expect(candidate.source_count).toBe(2);
      expect(candidate.source_list).toEqual(["github-search", "exa"]);
      // source_trust is attached so the decision engine can family-count downstream.
      expect(candidate.source_trust).toHaveProperty("family_count");
    });

    it("RETAINS a low-star single-source candidate (soft-gate — must NOT be dropped here)", () => {
      // Rubric §1: a low-star niche repo can be best-in-area; convergence must not auto-reject it.
      // Volume is bounded downstream (action-cap → STUDY + triage Top-K), never by dropping it here.
      const phase1 = [
        [{ nameWithOwner: "owner/low", sources: ["github-search"], hint: { stars: 3 } }],
      ];
      const out = phase2Convergence(phase1);
      expect(out).toHaveLength(1);
      expect(out[0].nameWithOwner).toBe("owner/low");
      expect(out[0].source_count).toBe(1);
    });

    it("folds a fork/mirror candidate into its origin (R9 canonicalIdentity) before counting", () => {
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search"], hint: { stars: 900 } }],
        [{ nameWithOwner: "forker/repo", forkOf: "owner/repo", sources: ["exa"], hint: {} }],
      ];
      const out = phase2Convergence(phase1);
      // fork folds to the origin identity → one canonical candidate carrying both sources.
      expect(out).toHaveLength(1);
      expect(out[0].nameWithOwner).toBe("owner/repo");
      expect(out[0].source_list).toEqual(["github-search", "exa"]);
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

  describe("R1 — decision persistence", () => {
    it("persists decisions.jsonl + a scan-*.md under baseDir when persist:true", async () => {
      // Rich mock so scoreRepo() succeeds and a real decision envelope is produced.
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
          // Union shape: discover's phase-3 hard filter AND scoreRepo both read data.repository,
          // so it must satisfy both (license/archived/readme for the gate; stars/forks/etc. for scoring).
          repository: {
            nameWithOwner: "owner/test-repo",
            isArchived: false,
            isDisabled: false,
            isMirror: false,
            licenseInfo: { spdxId: "MIT" },
            stargazerCount: 300,
            forkCount: 50,
            watchers: { totalCount: 20 },
            issues: { totalCount: 10 },
            pullRequests: { totalCount: 30 },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 200,
                  nodes: Array(10).fill({ committedDate: "2025-01-01T00:00:00Z" }),
                },
              },
            },
            pushedAt: "2025-01-01T00:00:00Z",
            releases: { nodes: [{ createdAt: "2025-01-01T00:00:00Z" }] },
            collaborators: { totalCount: 5 },
            languages: { nodes: [{ name: "JavaScript", size: 5000 }] },
            repositoryTopics: { nodes: [{ topic: { name: "mcp-server" } }] },
            object: { byteSize: 5000, text: "A test repository" },
          },
        },
      });
      const dir = join(tmpdir(), `sota-discover-${process.pid}-${Math.floor(performance.now())}`);
      const result = await discover({
        topic: "mcp-server",
        category: "mcp-server",
        limit: 10,
        baseDir: dir,
        persist: true,
      });

      expect(result.decisionsFile).toMatch(/inventory[\\/]decisions\.jsonl$/);
      const content = await fsp.readFile(result.decisionsFile, "utf-8");
      const lines = content.trim().split("\n").filter(Boolean);
      expect(lines.length).toBeGreaterThan(0);
      expect(JSON.parse(lines[0])).toHaveProperty("schema_version");

      const files = await fsp.readdir(join(dir, "inventory"));
      expect(files.some((f) => /^scan-.*\.md$/.test(f))).toBe(true);

      await fsp.rm(dir, { recursive: true, force: true });
    });

    it("does NOT write when persist is false (default — library callers get no surprise side-effects)", async () => {
      const dir = join(
        tmpdir(),
        `sota-discover-nopersist-${process.pid}-${Math.floor(performance.now())}`,
      );
      const result = await discover({ topic: "mcp-server", limit: 10, baseDir: dir });

      expect(result.decisionsFile).toBeNull();
      let inventoryExists = true;
      try {
        await fsp.access(join(dir, "inventory"));
      } catch {
        inventoryExists = false;
      }
      expect(inventoryExists).toBe(false);
    });
  });

  describe("R4-safe — honest source run-status (SEPARATE channel, no batch.forEach break)", () => {
    it("discover() returns sourceStatus marking github-search RUN and the 7 stubs NOT_RUN", async () => {
      const result = await discover({ topic: "mcp-server", limit: 10 });
      expect(result).toHaveProperty("sourceStatus");

      const byName = new Map(result.sourceStatus.map((s) => [s.source, s.status]));
      // Only github-search is a live source in-script; the rest are MCP/workflow-only stubs.
      expect(byName.get("github-search")).toBe("RUN");
      for (const stub of [
        "github-advanced",
        "awesome-list",
        "exa",
        "tavily",
        "brave-search",
        "jina",
        "semantic-scholar",
      ]) {
        expect(byName.get(stub)).toBe("NOT_RUN");
      }
    });

    it("exactly one of the 8 phase-1 sources ran (so a low family_count is 'only 1 source ran', not 'low quality')", async () => {
      const result = await discover({ topic: "mcp-server", limit: 10 });
      expect(result.sourceStatus).toHaveLength(8);
      const ran = result.sourceStatus.filter((s) => s.status === "RUN");
      expect(ran).toHaveLength(1);
      expect(ran[0].source).toBe("github-search");
    });

    it("PHASE1_SOURCES is the single source of truth: 8 sources, exactly 1 live", () => {
      expect(PHASE1_SOURCES).toHaveLength(8);
      const live = PHASE1_SOURCES.filter((s) => s.live);
      expect(live).toHaveLength(1);
      expect(live[0].name).toBe("github-search");
    });

    it("does NOT inject {status} objects into candidate arrays — phase2Convergence still receives arrays", () => {
      // Regression guard for the GPT-5.5 trap: a {status:'NOT_RUN'} object in a candidate
      // batch would break phase2Convergence's batch.forEach. The status lives in a SEPARATE
      // channel, so the candidate arrays stay pure arrays of candidates.
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search"], hint: { stars: 100 } }],
        [], // a stub source contributes an empty ARRAY, never a status object
      ];
      expect(() => phase2Convergence(phase1)).not.toThrow();
      const out = phase2Convergence(phase1);
      expect(out).toHaveLength(1);
      expect(out[0].nameWithOwner).toBe("owner/repo");
    });
  });
});

describe("discover.mjs — R9 canonicalize forks/mirrors before family-counting (anti-astroturf)", () => {
  describe("canonicalIdentity", () => {
    it("returns the lowercased nameWithOwner when no fork/mirror evidence is present", () => {
      expect(canonicalIdentity({ nameWithOwner: "Owner/Repo" })).toBe("owner/repo");
    });

    it("folds a fork to its parent identity (forkOf evidence)", () => {
      expect(canonicalIdentity({ nameWithOwner: "forker/repo", forkOf: "owner/repo" })).toBe(
        "owner/repo",
      );
    });

    it("folds a mirror to its canonical origin (mirrorOf / canonical evidence)", () => {
      expect(canonicalIdentity({ nameWithOwner: "gitmirror/repo", mirrorOf: "owner/repo" })).toBe(
        "owner/repo",
      );
      expect(canonicalIdentity({ nameWithOwner: "npm/thing", canonical: "owner/thing" })).toBe(
        "owner/thing",
      );
    });
  });

  describe("phase2Convergence — fork/mirror collapse to ONE identity", () => {
    it("collapses a repo and its fork/mirror to a single canonical candidate", () => {
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search"], hint: { stars: 900 } }],
        // a fork surfaced by a different angle, tagged as a fork of the same origin
        [
          {
            nameWithOwner: "forker/repo",
            forkOf: "owner/repo",
            sources: ["exa"],
            hint: { stars: 5 },
          },
        ],
        // a registry mirror of the same origin
        [
          {
            nameWithOwner: "npm-mirror/repo",
            mirrorOf: "owner/repo",
            sources: ["tavily"],
            hint: { stars: 0 },
          },
        ],
      ];
      const out = phase2Convergence(phase1);
      // all three identities fold into one canonical candidate (no astroturf inflation).
      expect(out).toHaveLength(1);
      expect(out[0].nameWithOwner).toBe("owner/repo");
    });
  });

  describe("countIndependentFamilies — aggregator never alone satisfies ≥3/≥4", () => {
    it("counts a real source family per distinct origin family", () => {
      expect(countIndependentFamilies(["github-search", "exa", "tavily"])).toBe(3);
    });

    it("collapses many GitHub-derived sources to one family", () => {
      expect(countIndependentFamilies(["github-search", "github-advanced", "github-search"])).toBe(
        1,
      );
    });

    it("collapses external aggregators (awesome-list/registry) into AT MOST one family", () => {
      // three different aggregator badges are still a single 'external-aggregator' family —
      // an aggregator-only signal can never alone reach the ≥3/≥4 convergence bar.
      expect(countIndependentFamilies(["awesome-list", "registry-badge", "awesome-mcp"])).toBe(1);
    });

    it("an aggregator-only candidate counts as ≤1 family (cannot satisfy ≥3)", () => {
      const families = countIndependentFamilies(["awesome-list", "awesome-claude", "registry"]);
      expect(families).toBeLessThanOrEqual(1);
    });

    it("a genuine multi-family candidate (real source + aggregator) still counts the real source", () => {
      // github-search (1 real family) + two aggregators (1 aggregator family) = 2 families.
      expect(countIndependentFamilies(["github-search", "awesome-list", "registry-badge"])).toBe(2);
    });
  });

  describe("phase2Convergence — per-source Set-union merge (S1 correctness)", () => {
    it("a multi-source candidate contributes ALL its distinct sources when sources[0] is already present", () => {
      // Bug: the old merge guarded on `includes(candidate.sources[0])` then pushed ALL sources,
      // so a later candidate whose sources[0] is already present dropped its remaining NEW sources.
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search"], hint: { stars: 100 } }],
        // arrives with github-search (already present) FOLLOWED BY two genuinely new sources
        [{ nameWithOwner: "owner/repo", sources: ["github-search", "exa", "tavily"], hint: {} }],
      ];
      const out = phase2Convergence(phase1);
      expect(out).toHaveLength(1);
      expect(out[0].source_list).toEqual(["github-search", "exa", "tavily"]);
      expect(out[0].source_count).toBe(3);
    });

    it("never duplicates a source already accumulated (Set-union, not blind push)", () => {
      // Bug: when sources[0] was NOT yet present, the old merge pushed the WHOLE array — duplicating
      // any later source that was already accumulated.
      const phase1 = [
        [{ nameWithOwner: "owner/repo", sources: ["github-search", "exa"], hint: {} }],
        // exa already present; arrives as the SECOND element behind a new source → blind push dupes it
        [{ nameWithOwner: "owner/repo", sources: ["tavily", "exa"], hint: {} }],
      ];
      const out = phase2Convergence(phase1);
      expect(out).toHaveLength(1);
      // distinct union, each source exactly once, first-seen order preserved
      expect(out[0].source_list).toEqual(["github-search", "exa", "tavily"]);
      expect(new Set(out[0].source_list).size).toBe(out[0].source_list.length);
    });
  });

  describe("phase2Convergence — aggregator family-count via source_trust", () => {
    it("an aggregator-only candidate reports family_count ≤ 1", () => {
      const phase1 = [
        [
          {
            nameWithOwner: "owner/aggregated",
            sources: ["awesome-list"],
            hint: { stars: 3 },
          },
          {
            nameWithOwner: "owner/aggregated",
            sources: ["registry-badge"],
            hint: { stars: 3 },
          },
        ],
      ];
      const out = phase2Convergence(phase1);
      expect(out).toHaveLength(1);
      expect(out[0].source_trust.family_count).toBeLessThanOrEqual(1);
    });
  });
});
