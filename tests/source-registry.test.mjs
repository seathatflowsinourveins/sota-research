import { describe, expect, it } from "vitest";
import { phase2Convergence } from "../scripts/discover.mjs";
import {
  extractRepoIdentity,
  normalizeCandidate,
  SOURCE_REGISTRY,
  selectSources,
} from "../scripts/lib/source-registry.mjs";

// F1 (G1 live multi-source fan-out): selectSources is the DETERMINISTIC FLOOR of the two-tier
// routing gate (gpt-researcher MCPToolSelector + _fallback_tool_selection). It pattern-ranks the
// MCP sources by fit-to-(topic,category) so the workflow queries the relevant ones — and it is
// guaranteed non-empty (the github baseline always survives), so an LLM/provider outage upstream
// degrades SELECTIVITY rather than stalling or rejecting the scan. RAG-MCP / MCP-Zero: tool
// discovery = semantic retrieval+rank BEFORE the model sees them.

describe("SOURCE_REGISTRY", () => {
  it("describes every source with a name + an independent convergence family", () => {
    expect(SOURCE_REGISTRY.length).toBeGreaterThan(0);
    for (const s of SOURCE_REGISTRY) {
      expect(typeof s.name).toBe("string");
      expect(s.name.length).toBeGreaterThan(0);
      expect(typeof s.family).toBe("string");
      expect(s.family.length).toBeGreaterThan(0);
    }
  });
});

describe("selectSources (G1 — deterministic relevance floor; gpt-researcher MCPToolSelector fallback)", () => {
  it("always includes the github baseline (guaranteed non-empty floor) for an empty topic / unknown category", () => {
    const selected = selectSources("", null);
    expect(selected.length).toBeGreaterThan(0);
    expect(selected.some((s) => s.name === "github-search")).toBe(true);
  });

  it("ranks academic sources ahead of pure web-news for a research-with-code category", () => {
    const selected = selectSources("retrieval augmented generation", "research-with-code");
    const names = selected.map((s) => s.name);
    expect(names).toContain("semantic-scholar");
    expect(names).toContain("brave-search");
    expect(names.indexOf("semantic-scholar")).toBeLessThan(names.indexOf("brave-search"));
  });

  it("boosts a source's relevance when the topic matches its hints (arxiv/paper → academic)", () => {
    const withHint = selectSources("arxiv paper survey on agents", "research-with-code").find(
      (s) => s.name === "semantic-scholar",
    );
    const noHint = selectSources("dashboard ui kit", "research-with-code").find(
      (s) => s.name === "semantic-scholar",
    );
    expect(withHint).toBeDefined();
    expect(noHint).toBeDefined();
    expect(withHint.relevance).toBeGreaterThan(noHint.relevance);
  });

  it("caps to maxSources but never drops the github floor", () => {
    const selected = selectSources("eval harness", "research-with-code", { maxSources: 2 });
    expect(selected.length).toBe(2);
    expect(selected.some((s) => s.name === "github-search")).toBe(true);
  });

  it("is deterministic — identical inputs yield identical ordering", () => {
    const a = selectSources("mcp servers SOTA 2026", "mcp-server").map((s) => s.name);
    const b = selectSources("mcp servers SOTA 2026", "mcp-server").map((s) => s.name);
    expect(a).toEqual(b);
  });

  it("annotates each selected source with its convergence family (exa and github are independent)", () => {
    const selected = selectSources("agent orchestration patterns", "agent-orchestration-pattern");
    const exa = selected.find((s) => s.name === "exa");
    const gh = selected.find((s) => s.name === "github-search");
    expect(gh.family).toBe("github");
    if (exa) expect(exa.family).toBe("exa");
  });

  it("preserves the github floor even when topic hints push other sources above it under a small cap", () => {
    // Heavy academic intent ranks semantic-scholar/jina above the github baseline; a maxSources:2
    // cap must still keep github (the always-on backstop) — selectivity, never drop the floor.
    const selected = selectSources(
      "arxiv paper survey citation benchmark preprint",
      "research-with-code",
      { maxSources: 2 },
    );
    expect(selected.length).toBe(2);
    expect(selected[0].name).toBe("semantic-scholar"); // strongest academic source still leads
    expect(selected.some((s) => s.name === "github-search")).toBe(true);
  });
});

describe("extractRepoIdentity (F2 — pull the GitHub repo a source result references)", () => {
  it("extracts owner/repo from a github.com URL", () => {
    expect(extractRepoIdentity({ url: "https://github.com/assafelovic/gpt-researcher" })).toBe(
      "assafelovic/gpt-researcher",
    );
  });

  it("extracts from a github URL embedded in free text and strips path / .git / query / hash", () => {
    expect(
      extractRepoIdentity({ text: "great tool: https://github.com/owner/repo/tree/main here" }),
    ).toBe("owner/repo");
    expect(extractRepoIdentity({ url: "http://www.github.com/owner/repo.git" })).toBe("owner/repo");
    expect(extractRepoIdentity({ snippet: "https://github.com/owner/repo?tab=readme" })).toBe(
      "owner/repo",
    );
    expect(extractRepoIdentity({ url: "https://github.com/owner/repo#install" })).toBe(
      "owner/repo",
    );
  });

  it("returns null when no github repo is referenced", () => {
    expect(extractRepoIdentity({ url: "https://example.com/blog", title: "x" })).toBeNull();
    expect(extractRepoIdentity({})).toBeNull();
  });

  it("ignores non-repo github paths (owner-only, sponsors, topics, gist)", () => {
    expect(extractRepoIdentity({ url: "https://github.com/sponsors/owner" })).toBeNull();
    expect(extractRepoIdentity({ url: "https://github.com/topics/mcp" })).toBeNull();
    expect(extractRepoIdentity({ url: "https://github.com/owner" })).toBeNull();
    expect(extractRepoIdentity({ url: "https://gist.github.com/owner/abc123" })).toBeNull();
  });
});

describe("normalizeCandidate (F2 — uniform shape for phase2Convergence, family-tagged by source)", () => {
  it("passes through an already-shaped github candidate, tagging the source", () => {
    const out = normalizeCandidate({ nameWithOwner: "o/r", hint: { stars: 100 } }, "github-search");
    expect(out.nameWithOwner).toBe("o/r");
    expect(out.sources).toEqual(["github-search"]);
  });

  it("normalizes a web result that references a github repo into the convergence shape", () => {
    const out = normalizeCandidate(
      {
        title: "gpt-researcher",
        url: "https://github.com/assafelovic/gpt-researcher",
        text: "LLM research agent",
      },
      "exa",
    );
    expect(out.nameWithOwner).toBe("assafelovic/gpt-researcher");
    expect(out.sources).toEqual(["exa"]);
    expect(out.hint.url).toBe("https://github.com/assafelovic/gpt-researcher");
    expect(out.hint.title).toBe("gpt-researcher");
  });

  it("returns null when the result references no github repo (workflow drops it pre-convergence)", () => {
    expect(
      normalizeCandidate({ title: "a blog", url: "https://example.com" }, "tavily"),
    ).toBeNull();
  });

  it("produces a shape phase2Convergence consumes — multi-source mention = real family convergence", () => {
    const a = normalizeCandidate({ url: "https://github.com/o/r" }, "exa");
    const b = normalizeCandidate({ nameWithOwner: "o/r", hint: {} }, "github-search");
    const merged = phase2Convergence([[a], [b]]);
    expect(merged).toHaveLength(1); // same repo, deduped by canonicalIdentity
    expect(merged[0].source_list.slice().sort()).toEqual(["exa", "github-search"]);
    expect(merged[0].source_trust.family_count).toBe(2); // exa + github = 2 independent families
  });

  it("never throws on null/undefined input — returns null so the workflow drops it (GPT-5.5 QC MAJOR)", () => {
    // The `= {}` default only covers undefined; a null MCP result must not crash the fan-out.
    expect(extractRepoIdentity(null)).toBeNull();
    expect(extractRepoIdentity(undefined)).toBeNull();
    expect(normalizeCandidate(null, "exa")).toBeNull();
    expect(normalizeCandidate(undefined, "exa")).toBeNull();
  });
});
