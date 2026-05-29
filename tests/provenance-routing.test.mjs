import { describe, expect, it } from "vitest";
import { routeDecision } from "../scripts/lib/decision.mjs";
import { assessGapFit } from "../scripts/lib/gap-fit.mjs";
import { assessProvenance } from "../scripts/lib/provenance.mjs";

const VERIFIED = { verified: true };

describe("decision.mjs — D10 provenance overlay wiring", () => {
  it("confirmed-fraud provenance → REJECT even on a top score (the MemPalace lesson)", () => {
    const provenance = assessProvenance({
      stars: 42000,
      forks: 50,
      commits90d: 1,
      fraudConfirmed: true,
    });
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      safety: VERIFIED,
      provenance,
    });
    expect(r.action).toBe("REJECT");
    expect(r.reason).toBe("provenance-fraud");
  });

  it("suspect provenance (astroturf signals, NOT confirmed) caps to STUDY + human review — never auto-rejects", () => {
    const provenance = assessProvenance({ stars: 42000, forks: 50, commits90d: 1 });
    expect(provenance.trustTier).toBe("suspect");
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      safety: VERIFIED,
      provenance,
    });
    expect(r.action).toBe("STUDY");
    expect(r.review_required).toBe(true);
    expect(r.flags.join(" ")).toMatch(/provenance:/);
    expect(r.trace.join(" ")).toMatch(/provenance-cap/);
  });

  it("clean provenance leaves a strong install untouched", () => {
    const provenance = assessProvenance({
      stars: 5000,
      forks: 800,
      commits90d: 50,
      contributors: 12,
    });
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      safety: VERIFIED,
      provenance,
    });
    expect(r.action).toBe("INSTALL-FULL");
  });
});

describe("decision.mjs — D11 gap-fit feeds the existing objective-relevance gate", () => {
  const INV = {
    layers: { "durable-memory": { saturated: true } },
    gaps: [{ id: "llm-observability", priority: "medium", build_not_install: false }],
    strategic_priorities: ["llm-observability"],
  };

  it("a duplicate-of-installed candidate is capped to STUDY despite a top score", () => {
    const gf = assessGapFit({ duplicatesOf: "agentdb" }, INV);
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      safety: VERIFIED,
      servesObjective: gf.servesObjective,
      marginalValue: gf.marginalValue,
    });
    expect(r.action).toBe("STUDY");
    expect(r.trace.join(" ")).toMatch(/objective-relevance-gate/);
  });

  it("a strategic gap-filler keeps its install tier", () => {
    const gf = assessGapFit({ fillsGapId: "llm-observability" }, INV);
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      safety: VERIFIED,
      servesObjective: gf.servesObjective,
      marginalValue: gf.marginalValue,
    });
    expect(r.action).toBe("INSTALL-FULL");
  });
});
