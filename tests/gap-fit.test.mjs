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

  it("fills a BUILD-not-install gap → medium (study the pattern, don't install)", () => {
    const r = assessGapFit({ fillsGapId: "eval-harness" }, INV);
    expect(r.servesObjective).toBe(true);
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

  it("scan-intent steers gap matching (highest-priority source)", () => {
    const r = assessGapFit({ name: "langfuse" }, INV, {
      scanIntent: "find llm-observability tooling",
    });
    expect(r.gapFilled).toBe("llm-observability");
    expect(r.marginalValue).toBe("high");
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
