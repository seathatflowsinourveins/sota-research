import { describe, expect, it } from "vitest";
import { compareByDecision, decisionRankKey } from "../scripts/lib/decision.mjs";

// compareByDecision is a descending comparator: a negative result means `a` ranks FIRST.
describe("R6 ranking — by the engine verdict, not a raw score or appearance-count", () => {
  it("ranks a higher ACTION tier above a higher score in a lower tier", () => {
    const installLowScore = { action: "INSTALL-LITE", score: 80 };
    const studyHighScore = { action: "STUDY", score: 99 };
    expect(compareByDecision(installLowScore, studyHighScore)).toBeLessThan(0);
  });

  it("within the same action, ranks the higher final score first", () => {
    expect(
      compareByDecision({ action: "STUDY", score: 78 }, { action: "STUDY", score: 72 }),
    ).toBeLessThan(0);
  });

  it("breaks score ties by coverage, then by marginal value", () => {
    expect(
      compareByDecision(
        { action: "STUDY", score: 75, coverage: 0.9 },
        { action: "STUDY", score: 75, coverage: 0.5 },
      ),
    ).toBeLessThan(0);
    expect(
      compareByDecision(
        { action: "STUDY", score: 75, coverage: 0.8, marginalValue: "high" },
        { action: "STUDY", score: 75, coverage: 0.8, marginalValue: "low" },
      ),
    ).toBeLessThan(0);
  });

  it("sorts unknown/failed actions last (never crashes on a SCORE_FAILED candidate)", () => {
    expect(
      compareByDecision({ action: "WATCH", score: 50 }, { action: undefined, score: 0 }),
    ).toBeLessThan(0);
    expect(decisionRankKey({ action: "nonsense" })[0]).toBe(-1);
  });

  it("Array.sort(compareByDecision) yields tier-descending order", () => {
    const arr = [
      { action: "STUDY", score: 75 },
      { action: "INSTALL-FULL", score: 91 },
      { action: "WATCH", score: 50 },
      { action: "REFERENCE", score: 65 },
    ];
    arr.sort(compareByDecision);
    expect(arr.map((x) => x.action)).toEqual(["INSTALL-FULL", "STUDY", "REFERENCE", "WATCH"]);
  });
});
