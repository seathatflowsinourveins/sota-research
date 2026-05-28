import { describe, expect, it } from "vitest";
import { computeFinalScore } from "../scripts/lib/blend.mjs";

describe("blend.mjs - computeFinalScore", () => {
  it("B-4: applies post-blend cap of 80 when source_count == 1", () => {
    const result = computeFinalScore({
      rubric_score: 100,
      codex_score: 100,
      source_count: 1,
    });
    expect(result).toBe(80); // Capped at 80, not 100
  });

  it("B-4: applies post-blend cap of 90 when source_count == 2", () => {
    const result = computeFinalScore({
      rubric_score: 100,
      codex_score: 100,
      source_count: 2,
    });
    expect(result).toBe(90); // Capped at 90, not 100
  });

  it("B-4: applies no cap when source_count >= 3", () => {
    const result = computeFinalScore({
      rubric_score: 100,
      codex_score: 100,
      source_count: 3,
    });
    expect(result).toBeGreaterThan(90); // Should be close to 100
  });

  it("higher Codex consensus raises the blended score", () => {
    const result1 = computeFinalScore({
      rubric_score: 80,
      codex_score: 80,
      source_count: 3,
    });
    const result2 = computeFinalScore({
      rubric_score: 80,
      codex_score: 20,
      source_count: 3,
    });
    expect(result1).toBeGreaterThan(result2);
  });

  it("counts INDEPENDENT families, not raw source hits (mirrors can't inflate trust)", () => {
    // 5 raw hits but only 1 independent family → still single-source capped at 80
    const inflated = computeFinalScore({
      rubric_score: 100,
      codex_score: 100,
      source_count: 5,
      sourceTrust: { family_count: 1, shannon_entropy: 0, type_weight: 0.3 },
    });
    expect(inflated).toBe(80);
    // genuine 4-family convergence → no cap
    const genuine = computeFinalScore({
      rubric_score: 100,
      codex_score: 100,
      source_count: 5,
      sourceTrust: { family_count: 4, shannon_entropy: 1.0, type_weight: 0.8 },
    });
    expect(genuine).toBeGreaterThan(90);
  });

  it("clamps result to [0, 100]", () => {
    const result = computeFinalScore({
      rubric_score: 200,
      codex_score: 200,
      source_count: 3,
    });
    expect(result).toBeLessThanOrEqual(100);
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
