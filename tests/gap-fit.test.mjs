import { describe, expect, it } from "vitest";
import { assessGapFit, loadStackInventory } from "../scripts/lib/gap-fit.mjs";

const INV = {
  layers: {
    "durable-memory": { installed: ["agentdb"], saturated: true },
    observability: { installed: [], saturated: false },
  },
  gaps: [
    { id: "eval-harness", priority: "high", build_not_install: true },
    { id: "llm-observability", priority: "medium", build_not_install: false },
  ],
  strategic_priorities: ["eval-harness", "llm-observability"],
};

describe("gap-fit.mjs — assessGapFit (D11 marginal-lift gate input)", () => {
  it("out-of-scope → does not serve objective, no lift", () => {
    const r = assessGapFit({ outOfScope: true }, INV);
    expect(r.servesObjective).toBe(false);
    expect(r.marginalValue).toBe("none");
  });

  it("explicit duplicate of installed capability → duplicate (gate will cap to STUDY)", () => {
    const r = assessGapFit({ duplicatesOf: "agentdb" }, INV);
    expect(r.servesObjective).toBe(false);
    expect(r.marginalValue).toBe("duplicate");
  });

  it("fills a BUILD-not-install gap → servesObjective:false (gate caps to STUDY)", () => {
    // BUG E: build_not_install gaps return servesObjective:false so the
    // objectiveRelevanceGate caps any INSTALL tier to STUDY. The rationale is
    // "study the pattern, don't install an external" (Codex 2026-05-28).
    const r = assessGapFit({ fillsGapId: "eval-harness" }, INV);
    expect(r.servesObjective).toBe(false);
    expect(r.marginalValue).toBe("medium");
    expect(r.gapFilled).toBe("eval-harness");
    expect(r.flags).toContain("gap-fit:build-not-install");
  });

  it("fills a strategic-priority gap → high marginal value", () => {
    const r = assessGapFit({ fillsGapId: "llm-observability" }, INV);
    expect(r.marginalValue).toBe("high");
    expect(r.flags).toContain("gap-fit:strategic-priority");
  });

  it("enhances a saturated layer only counts if demonstrably better", () => {
    const better = assessGapFit(
      { enhancesLayer: "durable-memory", betterThanInstalled: true },
      INV,
    );
    expect(better.marginalValue).toBe("medium");
    expect(better.servesObjective).toBe(true);
    const notBetter = assessGapFit({ enhancesLayer: "durable-memory" }, INV);
    expect(notBetter.marginalValue).toBe("duplicate");
    expect(notBetter.servesObjective).toBe(false);
  });

  it("matches a gap from CANDIDATE evidence; scan-intent alone never rubber-stamps", () => {
    // candidate's OWN keyword matches the gap -> matched + (strategic priority) high
    const matched = assessGapFit({ name: "langfuse", keywords: ["observability"] }, INV, {
      scanIntent: "find observability tooling",
    });
    expect(matched.gapFilled).toBe("llm-observability");
    expect(matched.marginalValue).toBe("high");
    // scan-intent ALONE must NOT classify an unrelated candidate as filling the gap
    const unrelated = assessGapFit({ name: "some-cli-tool" }, INV, {
      scanIntent: "find llm-observability tooling",
    });
    expect(unrelated.gapFilled).toBeNull();
    expect(unrelated.marginalValue).toBe("low");
  });

  it("no clear gap-fit → conservative low marginal value", () => {
    const r = assessGapFit({ name: "some-random-tool" }, INV);
    expect(r.marginalValue).toBe("low");
    expect(r.flags).toContain("gap-fit:unclear");
  });

  it("loadStackInventory reads the real config and exposes gaps + priorities", () => {
    const inv = loadStackInventory();
    expect(Array.isArray(inv.gaps)).toBe(true);
    expect(inv.gaps.some((g) => g.id === "eval-harness")).toBe(true);
    expect(inv.strategic_priorities).toContain("eval-harness");
  });
});

/**
 * BUG A Integration: gap-fit overlay wiring live path.
 * Verify that a duplicate/out-of-scope candidate is capped to STUDY through the REAL
 * routeDecision path when passed through assess GapFit and its outputs.
 */
describe("integration: BUG A — gap-fit overlay live wiring", () => {
  it("a duplicate in a saturated layer + high score cap to STUDY via objective gate", () => {
    // Candidate targeting saturated durable-memory layer, not better than installed
    const gapFit = assessGapFit(
      { enhancesLayer: "durable-memory", betterThanInstalled: false },
      INV,
    );
    expect(gapFit.servesObjective).toBe(false);
    expect(gapFit.marginalValue).toBe("duplicate");
  });
});

/**
 * BUG D Integration: publisher-risk count semantics (0/1 vs boolean).
 * Verify that the scoring path normalizes singlePublisher as numeric 1 OR boolean true.
 */
// D6 publisher-risk count semantics (numeric 1 vs boolean true) are covered by a REAL
// scoreRepo-path assertion in tests/score.test.mjs (regression for the fail-open bug).
// The prior placeholder block here asserted only JS literals (1 === 1, true === true)
// and was removed (CodeRabbit minor): a test that can pass while the real normalization
// is broken is worse than no test.
