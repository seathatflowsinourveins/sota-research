import { describe, expect, it } from "vitest";
import {
  assessSecurityFromEvidence,
  baseTier,
  capTier,
  claimFreshnessGate,
  convergenceActionCap,
  d3PathwayVeto,
  floorTier,
  objectiveRelevanceGate,
  routeDecision,
  safetyVeto,
  TIERS,
  tierRank,
} from "../scripts/lib/decision.mjs";

describe("decision.mjs — tier helpers", () => {
  it("orders tiers weakest→strongest", () => {
    expect(TIERS).toEqual([
      "REJECT",
      "WATCH",
      "REFERENCE",
      "STUDY",
      "INSTALL-LITE",
      "INSTALL-FULL",
    ]);
    expect(tierRank("STUDY")).toBeGreaterThan(tierRank("REFERENCE"));
    expect(tierRank("INSTALL-FULL")).toBeGreaterThan(tierRank("INSTALL-LITE"));
  });
  it("floorTier raises but never lowers; capTier lowers but never raises", () => {
    expect(floorTier("WATCH", "STUDY")).toBe("STUDY");
    expect(floorTier("INSTALL-FULL", "STUDY")).toBe("INSTALL-FULL");
    expect(capTier("INSTALL-FULL", "STUDY")).toBe("STUDY");
    expect(capTier("WATCH", "STUDY")).toBe("WATCH");
  });
  it("tierRank throws on unknown tier", () => {
    expect(() => tierRank("NOPE")).toThrow(/Unknown tier/);
  });
});

describe("decision.mjs — safetyVeto (HARD gates)", () => {
  it("vetoes non-permissive / missing license", () => {
    expect(safetyVeto({ license: "SSPL" }).vetoed).toBe(true);
    expect(safetyVeto({ license: undefined }).vetoed).toBe(true);
    expect(safetyVeto({ license: "MIT" }).vetoed).toBe(false);
  });
  it("allows GPL only for code-library", () => {
    expect(safetyVeto({ license: "GPL-3.0", category: "code-library" }).vetoed).toBe(false);
    expect(safetyVeto({ license: "GPL-3.0", category: "mcp-server" }).vetoed).toBe(true);
  });
  it("vetoes archived / disabled / mirror / confirmed malware", () => {
    expect(safetyVeto({ license: "MIT", isArchived: true }).vetoed).toBe(true);
    expect(safetyVeto({ license: "MIT", isDisabled: true }).vetoed).toBe(true);
    expect(safetyVeto({ license: "MIT", isMirror: true }).vetoed).toBe(true);
    expect(safetyVeto({ license: "MIT", malwareConfirmed: true }).vetoed).toBe(true);
  });
});

describe("decision.mjs — baseTier (score bands)", () => {
  it("maps score bands to tiers (category-aware at 80-89)", () => {
    expect(baseTier(92, "code-library")).toBe("INSTALL-FULL");
    expect(baseTier(85, "mcp-server")).toBe("INSTALL-LITE");
    expect(baseTier(85, "code-library")).toBe("STUDY");
    expect(baseTier(75, "mcp-server")).toBe("STUDY");
    expect(baseTier(65, "mcp-server")).toBe("REFERENCE");
    expect(baseTier(50, "mcp-server")).toBe("WATCH");
    expect(baseTier(30, "mcp-server")).toBe("REJECT");
  });
});

describe("decision.mjs — convergenceActionCap (independent families)", () => {
  it("caps install tiers by independent family count (Codex Q4)", () => {
    expect(convergenceActionCap(4).cap).toBe("INSTALL-FULL");
    expect(convergenceActionCap(3).cap).toBe("INSTALL-LITE");
    expect(convergenceActionCap(2)).toEqual({ cap: "INSTALL-LITE", review: true });
    expect(convergenceActionCap(1).cap).toBe("STUDY");
    expect(convergenceActionCap(0).cap).toBe("STUDY");
  });
});

describe("decision.mjs — routeDecision base routing + convergence caps", () => {
  it("INSTALL-FULL requires score>=90 AND >=4 independent families", () => {
    const v = { verified: true };
    expect(
      routeDecision({ score: 92, families: 4, category: "code-library", safety: v }).action,
    ).toBe("INSTALL-FULL");
    // same score, only 3 families → capped to INSTALL-LITE
    expect(
      routeDecision({ score: 92, families: 3, category: "code-library", safety: v }).action,
    ).toBe("INSTALL-LITE");
    // same score, single family → capped to STUDY
    expect(
      routeDecision({ score: 92, families: 1, category: "code-library", safety: v }).action,
    ).toBe("STUDY");
  });
  it("INSTALL-LITE for mcp/skill/hook at 80-89 with >=3 families", () => {
    expect(
      routeDecision({ score: 84, families: 3, category: "mcp-server", safety: { verified: true } })
        .action,
    ).toBe("INSTALL-LITE");
    expect(routeDecision({ score: 84, families: 3, category: "code-library" }).action).toBe(
      "STUDY",
    );
  });
  it("marks review_required for 2-family install candidates and all install tiers", () => {
    expect(
      routeDecision({ score: 84, families: 2, category: "mcp-server", safety: { verified: true } })
        .review_required,
    ).toBe(true);
    expect(
      routeDecision({ score: 92, families: 4, category: "mcp-server", safety: { verified: true } })
        .review_required,
    ).toBe(true);
    expect(routeDecision({ score: 65, families: 1, category: "mcp-server" }).review_required).toBe(
      false,
    );
  });
});

describe("decision.mjs — soft gate + override FLOORS (escape hatch)", () => {
  it("low-star high-novelty+fit repo floors to STUDY instead of REJECT", () => {
    // base would be REJECT (score 30), but D7/D3 high + low D1 → STUDY floor
    const r = routeDecision({
      score: 30,
      families: 2,
      category: "mcp-server",
      dims: { D1: 2, D3: 8, D7: 8, D4: 6 },
    });
    expect(r.action).toBe("STUDY");
    expect(r.override_applied).toContain("novelty+fit>low-stars");
  });
  it("weak code quality (D4<5) drops the escape-hatch floor to REFERENCE", () => {
    const r = routeDecision({
      score: 30,
      families: 2,
      category: "mcp-server",
      dims: { D1: 2, D3: 8, D7: 8, D4: 3 },
    });
    expect(r.action).toBe("REFERENCE");
  });
  it("D9 niche-excellence overlay is an escape hatch, never a weighted INSTALL", () => {
    // even with maxed overlays + 4 families, a near-zero score never reaches INSTALL
    const r = routeDecision({
      score: 10,
      families: 4,
      category: "mcp-server",
      dims: { D9: 10, D7: 10, D3: 10, D1: 0, D4: 9 },
    });
    expect(tierRank(r.action)).toBeLessThanOrEqual(tierRank("STUDY"));
  });
});

describe("decision.mjs — late security demotion (scoped, not blanket)", () => {
  it("open critical security caps action at REFERENCE regardless of score", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      security: { openCritical: true },
    });
    expect(r.action).toBe("REFERENCE");
  });
  it("playwright-mcp case: mitigated opt-in risk demotes INSTALL-FULL→INSTALL-LITE (config-gated)", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      security: { mitigatedOptInRisk: true },
      safety: { verified: true },
    });
    expect(r.action).toBe("INSTALL-LITE");
    expect(r.trace.join(" ")).toMatch(/mitigated-opt-in-risk/);
  });
});

describe("decision.mjs — REJECT", () => {
  it("rejects on raw safety data when provided", () => {
    const r = routeDecision({ score: 95, families: 4, safety: { license: "SSPL" } });
    expect(r.action).toBe("REJECT");
    expect(r.reason).toBe("safety-veto");
  });
  it("low score with no redeeming dims → REJECT/WATCH", () => {
    expect(routeDecision({ score: 20, families: 3, category: "code-library" }).action).toBe(
      "REJECT",
    );
  });
});

describe("decision.mjs — assessSecurityFromEvidence (stale-evidence debias)", () => {
  const asOf = new Date("2026-05-28T00:00:00Z");
  it("a FIXED/closed/deprecated finding counts ZERO weight (no stale veto — the playwright generalization)", () => {
    const r = assessSecurityFromEvidence(
      [{ id: "#1495", severity: "critical", status: "fixed", date: "2026-03-30" }],
      { asOfDate: asOf },
    );
    expect(r.openCritical).toBe(false);
    expect(r.discounted.join(" ")).toMatch(/#1495.*0 weight/);
  });
  it("an OPEN critical/high finding sets openCritical", () => {
    expect(
      assessSecurityFromEvidence([{ severity: "critical", status: "open" }], { asOfDate: asOf })
        .openCritical,
    ).toBe(true);
    expect(
      assessSecurityFromEvidence([{ severity: "high", status: "open" }], { asOfDate: asOf })
        .openCritical,
    ).toBe(true);
  });
  it("a mitigated / opt-in risk sets mitigatedOptInRisk (not openCritical)", () => {
    const r = assessSecurityFromEvidence([{ severity: "critical", status: "open", optIn: true }], {
      asOfDate: asOf,
    });
    expect(r.mitigatedOptInRisk).toBe(true);
    expect(r.openCritical).toBe(false);
  });
  it("discounts a stale unconfirmed claim but keeps a confirmed one", () => {
    const stale = assessSecurityFromEvidence(
      [{ claim: "old RCE", severity: "critical", status: "open", date: "2025-09-01" }],
      { asOfDate: asOf },
    );
    expect(stale.openCritical).toBe(false);
    expect(stale.discounted.length).toBe(1);
    const confirmed = assessSecurityFromEvidence(
      [{ claim: "verified", severity: "critical", status: "confirmed", date: "2025-09-01" }],
      { asOfDate: asOf },
    );
    expect(confirmed.openCritical).toBe(true);
  });
});

describe("decision.mjs — routeDecision with securityFindings (systemic debias)", () => {
  it("a FIXED critical finding does NOT demote a strong install (playwright-mcp, generalized)", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      securityFindings: [{ id: "RCE", severity: "critical", status: "fixed", date: "2026-03-30" }],
      safety: { verified: true },
    });
    expect(r.action).toBe("INSTALL-FULL");
  });
  it("an OPEN critical finding caps at REFERENCE", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      securityFindings: [{ severity: "critical", status: "open" }],
    });
    expect(r.action).toBe("REFERENCE");
  });
  it("an opt-in mitigated risk demotes INSTALL-FULL → INSTALL-LITE", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      securityFindings: [{ severity: "critical", status: "open", optIn: true }],
      safety: { verified: true },
    });
    expect(r.action).toBe("INSTALL-LITE");
  });
});

describe("decision.mjs — claimFreshnessGate (Codex live-binding fix)", () => {
  it("caps install at STUDY when install-affecting claims were not refreshed this run", () => {
    expect(claimFreshnessGate("INSTALL-FULL", { installClaimsRefreshed: false }).tier).toBe(
      "STUDY",
    );
    expect(claimFreshnessGate("INSTALL-LITE", { installClaimsRefreshed: false }).tier).toBe(
      "STUDY",
    );
    expect(claimFreshnessGate("REFERENCE", { installClaimsRefreshed: false }).tier).toBe(
      "REFERENCE",
    );
  });
  it("does not affect verdicts when claims are fresh (default)", () => {
    expect(claimFreshnessGate("INSTALL-FULL", {}).tier).toBe("INSTALL-FULL");
  });
  it("routeDecision caps to STUDY when installClaimsRefreshed=false", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      installClaimsRefreshed: false,
    });
    expect(r.action).toBe("STUDY");
  });
});

describe("decision.mjs — objectiveRelevanceGate (the codeg fix)", () => {
  it("caps a high-scoring repo to STUDY when it does NOT serve the objective (codeg: a dashboard, not a workflow-feature lift)", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      servesObjective: false,
    });
    expect(r.action).toBe("STUDY");
    expect(r.trace.join(" ")).toMatch(/objective-relevance-gate/);
  });
  it("caps a duplicative repo to STUDY (caveman vs an already-installed token optimizer)", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      marginalValue: "duplicate",
    });
    expect(r.action).toBe("STUDY");
  });
  it("does not touch relevant, non-duplicative installs (default)", () => {
    expect(
      routeDecision({ score: 95, families: 4, category: "mcp-server", safety: { verified: true } })
        .action,
    ).toBe("INSTALL-FULL");
  });
  it("only constrains INSTALL tiers; never blocks STUDY/REFERENCE", () => {
    expect(objectiveRelevanceGate("STUDY", { servesObjective: false }).tier).toBe("STUDY");
    expect(objectiveRelevanceGate("REFERENCE", { marginalValue: "duplicate" }).tier).toBe(
      "REFERENCE",
    );
  });
});

describe("decision.mjs — fail-closed safety + OR-combine (Codex BLOCKER/MAJOR)", () => {
  it("no INSTALL tier without verified safety; verified safety allows it", () => {
    // unverified (e.g. a bootstrap named target with no safety check) → capped to STUDY
    expect(routeDecision({ score: 95, families: 4, category: "mcp-server" }).action).toBe("STUDY");
    expect(
      routeDecision({ score: 95, families: 4, category: "mcp-server", safety: { verified: true } })
        .action,
    ).toBe("INSTALL-FULL");
    expect(
      routeDecision({
        score: 95,
        families: 4,
        category: "mcp-server",
        safety: { passedUpstream: true },
      }).action,
    ).toBe("INSTALL-FULL");
  });
  it("explicit security cannot CANCEL an evidenced finding (OR-combine)", () => {
    const r = routeDecision({
      score: 95,
      families: 4,
      category: "mcp-server",
      safety: { verified: true },
      securityFindings: [{ severity: "critical", status: "open" }],
      security: { openCritical: false },
    });
    expect(r.action).toBe("REFERENCE"); // evidenced open-critical wins over explicit false
  });
});

describe("decision.mjs — d3PathwayVeto (adoption-pathway cap)", () => {
  it("caps INSTALL-level tiers to STUDY when pathway is unknown/null", () => {
    expect(d3PathwayVeto("INSTALL-FULL", { pathway: null }).tier).toBe("STUDY");
    expect(d3PathwayVeto("INSTALL-LITE", { pathway: "unknown-pathway" }).tier).toBe("STUDY");
  });

  it("allows INSTALL tiers when pathway is known and valid", () => {
    expect(d3PathwayVeto("INSTALL-FULL", { pathway: "mcp" }).tier).toBe("INSTALL-FULL");
    expect(d3PathwayVeto("INSTALL-LITE", { pathway: "skill" }).tier).toBe("INSTALL-LITE");
  });

  it("does not cap non-INSTALL tiers", () => {
    expect(d3PathwayVeto("STUDY", { pathway: null }).tier).toBe("STUDY");
    expect(d3PathwayVeto("REFERENCE", { pathway: undefined }).tier).toBe("REFERENCE");
  });

  it("returns a descriptive note on cap", () => {
    const { note } = d3PathwayVeto("INSTALL-FULL", { pathway: null });
    expect(note).toMatch(/d3-pathway-veto/);
    expect(note).toMatch(/STUDY/);
  });
});

describe("decision.mjs — evidence-coverage gate in routeDecision", () => {
  it("caps sparse evidence (low-coverage candidate) to STUDY despite high score", () => {
    const r = routeDecision({
      score: 92,
      families: 4,
      category: "code-library",
      safety: { verified: true },
      dims: { D1: 9, D2: null, D3: null, D4: null, D5: null, D6: null, D7: null, D8: null },
    });
    // 1/8 dims evidenced (12.5% < 70%), so despite score=92 + families=4, caps to STUDY
    expect(r.action).toBe("STUDY");
    expect(r.trace.some((t) => t.includes("evidence-coverage-gate"))).toBe(true);
  });

  it("passes high-coverage even with moderate score", () => {
    const r = routeDecision({
      score: 72,
      families: 3,
      category: "mcp-server",
      safety: { verified: true },
      dims: { D1: 7, D2: 6, D3: 7, D4: 8, D5: null, D6: 6, D7: 8, D8: null },
    });
    // 6/8 dims evidenced (75% >= 70%), gate passes; score=72 for mcp-server → base tier STUDY
    // Evidence is sufficient, so the gate does NOT demote; action depends on base tier routing
    // BUG F: Fixed tautological test (old: "A || !A always true"). Now correctly asserts
    // that the evidence gate passes (no evidence-coverage demotion in trace) and the
    // score+category route to STUDY (not artificially capped by sparse evidence).
    expect(r.action).toBe("STUDY");
    expect(r.trace.some((t) => t.includes("evidence-coverage-gate"))).toBe(false);
  });
});
