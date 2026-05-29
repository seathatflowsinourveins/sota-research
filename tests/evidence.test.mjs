import { describe, expect, it } from "vitest";
import {
  dimensionValue,
  evidenceCoverageGate,
  validateJudgeEvidence,
} from "../scripts/lib/evidence.mjs";

describe("evidence.mjs — dimensionValue", () => {
  it("accepts a bare number or an evidence object; else null", () => {
    expect(dimensionValue(7)).toBe(7);
    expect(dimensionValue({ value: 7 })).toBe(7);
    expect(dimensionValue({ value: null })).toBeNull();
    expect(dimensionValue(null)).toBeNull();
    expect(dimensionValue("x")).toBeNull();
    expect(dimensionValue({ nope: 1 })).toBeNull();
  });
});

describe("evidence.mjs — validateJudgeEvidence (judge-output schema)", () => {
  it("accepts a well-formed evidenced value with a source", () => {
    const { ok, clean } = validateJudgeEvidence({
      value: 7,
      source: "github.com/o/r",
      confidence: 0.8,
      rationale: "active MCP server with tests",
    });
    expect(ok).toBe(true);
    expect(clean.value).toBe(7);
    expect(clean.source).toBe("github.com/o/r");
  });

  it("an evidenced value MUST carry a source ref", () => {
    const { ok, errors } = validateJudgeEvidence({ value: 7 });
    expect(ok).toBe(false);
    expect(errors.join(" ")).toMatch(/missing source/);
  });

  it("out-of-range values become null with an error (never fabricated)", () => {
    const { ok, clean } = validateJudgeEvidence({ value: 15, source: "x" });
    expect(ok).toBe(false);
    expect(clean.value).toBeNull();
  });

  it("confidence is clamped to [0,1]", () => {
    expect(validateJudgeEvidence({ value: 5, source: "x", confidence: 2 }).clean.confidence).toBe(
      1,
    );
    expect(validateJudgeEvidence({ value: 5, source: "x", confidence: -3 }).clean.confidence).toBe(
      0,
    );
  });

  it("strips chain-of-thought fields (never persisted) and flags them", () => {
    const { ok, errors, clean } = validateJudgeEvidence({
      value: 5,
      source: "x",
      reasoning: "long private chain of thought...",
    });
    expect(ok).toBe(false);
    expect(errors.join(" ")).toMatch(/chain-of-thought/);
    expect("reasoning" in clean).toBe(false);
  });

  it("trims an over-long rationale to a short summary", () => {
    const { clean } = validateJudgeEvidence({ value: 5, source: "x", rationale: "a".repeat(500) });
    expect(clean.rationale.length).toBe(280);
  });
});

describe("evidence.mjs — evidenceCoverageGate", () => {
  it("passes when coverage >= threshold (default 0.7)", () => {
    const dims = { D1: 5, D2: 6, D3: 7, D4: null, D5: null, D6: null, D7: null, D8: null };
    const { passedGate, coverage } = evidenceCoverageGate(dims);
    // 3 evidenced / 8 total = 0.375 < 0.7, so gate fails
    expect(passedGate).toBe(false);
    expect(coverage).toBe(0.375);
  });

  it("passes when fully evidenced", () => {
    const dims = { D1: 5, D2: 6, D3: 7, D4: 8, D5: 6, D6: 5, D7: 4, D8: 9 };
    const { passedGate, coverage } = evidenceCoverageGate(dims);
    expect(passedGate).toBe(true);
    expect(coverage).toBe(1.0);
  });

  it("applies a custom threshold", () => {
    const dims = { D1: 5, D2: 6, D3: 7, D4: null, D5: null, D6: null, D7: null, D8: null };
    // 3/8 = 0.375, fails at 0.7, passes at 0.3
    expect(evidenceCoverageGate(dims, { minCoverage: 0.3 }).passedGate).toBe(true);
    expect(evidenceCoverageGate(dims, { minCoverage: 0.4 }).passedGate).toBe(false);
  });

  it("returns a descriptive note on gate failure", () => {
    const dims = { D1: null, D2: null, D3: null, D4: null, D5: null, D6: null, D7: null, D8: null };
    const { note } = evidenceCoverageGate(dims);
    expect(note).toMatch(/evidence-coverage-gate/);
    expect(note).toMatch(/0\/8/);
  });
});
