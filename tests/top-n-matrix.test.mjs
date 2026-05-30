import { describe, expect, it } from "vitest";
import { renderTopNMatrix } from "../scripts/lib/top-n-matrix.mjs";

// R5 (un-deferred by the live multi-source fan-out, F1-F4): a PURE-PROJECTION comparative Top-N
// matrix — rows × [D1-D8, final_score, Tier, AdoptionPathway, Families, Provenance, GapFit], a cheap
// render of fields routeDecision/decision-log already produce. ADR-R5: ship ONLY the projection;
// the deferral reason was "mostly-empty rows", so it renders NOTHING below 2 same-category candidates.

function cand(name, opts = {}) {
  const {
    category = "mcp-server",
    final = 80,
    action = "STUDY",
    dims = {},
    families = 1,
    pathway = null,
    provenance = null,
    marginalValue = "low",
  } = opts;
  return {
    nameWithOwner: name,
    score: {
      category,
      dimensions: { D1: 5, D2: 5, D3: 5, D4: 5, D5: 5, D6: 5, D7: 5, D8: 5, ...dims },
    },
    final_score: final,
    action,
    adoptionPathway: pathway,
    source_trust: { family_count: families },
    provenance_trustTier: provenance,
    marginalValue,
  };
}

describe("renderTopNMatrix (R5 — pure-projection comparative Top-N)", () => {
  it("returns null for fewer than 2 same-category scored candidates (no mostly-empty rows)", () => {
    expect(renderTopNMatrix([cand("o/a")], { category: "mcp-server" })).toBeNull();
    expect(renderTopNMatrix([], { category: "mcp-server" })).toBeNull();
  });

  it("renders a markdown table with a header + one row per same-category candidate (>=2)", () => {
    const out = renderTopNMatrix([cand("o/a"), cand("o/b")], { category: "mcp-server" });
    expect(out).toContain("| Repo |");
    expect(out).toContain("o/a");
    expect(out).toContain("o/b");
    for (const col of [
      "D1",
      "D8",
      "Score",
      "Tier",
      "Pathway",
      "Families",
      "Provenance",
      "GapFit",
    ]) {
      expect(out).toContain(col);
    }
  });

  it("orders rows by decision verdict (best action tier first), not input order", () => {
    const study = cand("o/study", { action: "STUDY", final: 95 });
    const install = cand("o/install", { action: "INSTALL-LITE", final: 70 });
    const out = renderTopNMatrix([study, install], { category: "mcp-server" });
    // INSTALL-LITE outranks STUDY despite a lower score (verdict-primary, R6)
    expect(out.indexOf("o/install")).toBeLessThan(out.indexOf("o/study"));
  });

  it("only includes candidates of the requested category", () => {
    const out = renderTopNMatrix(
      [
        cand("o/mcp", { category: "mcp-server" }),
        cand("o/lib", { category: "code-library" }),
        cand("o/mcp2", { category: "mcp-server" }),
      ],
      { category: "mcp-server" },
    );
    expect(out).toContain("o/mcp");
    expect(out).toContain("o/mcp2");
    expect(out).not.toContain("o/lib");
  });

  it("caps rows to topN", () => {
    const cands = ["a", "b", "c", "d"].map((n) => cand(`o/${n}`));
    const out = renderTopNMatrix(cands, { category: "mcp-server", topN: 2 });
    const rows = out.split("\n").filter((l) => l.startsWith("| o/"));
    expect(rows).toHaveLength(2);
  });

  it("is a pure projection — cell values come straight from the candidate fields", () => {
    const out = renderTopNMatrix(
      [
        cand("o/a", {
          dims: { D1: 9 },
          final: 88.5,
          action: "INSTALL-LITE",
          pathway: "mcp",
          families: 3,
          provenance: "verified",
          marginalValue: "high",
        }),
        cand("o/b"),
      ],
      { category: "mcp-server" },
    );
    const row = out.split("\n").find((l) => l.startsWith("| o/a"));
    expect(row).toContain("9"); // D1
    expect(row).toContain("88.5"); // final_score
    expect(row).toContain("INSTALL-LITE"); // tier
    expect(row).toContain("mcp"); // pathway
    expect(row).toContain("verified"); // provenance
    expect(row).toContain("high"); // gapfit (marginalValue)
  });
});
