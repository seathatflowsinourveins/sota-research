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

describe("evidence.mjs — validateJudgeEvidence (R7 probe_status — confidence-cap, NOT reject)", () => {
  it("defaults probe_status to 'ok' when absent and leaves confidence untouched", () => {
    const { ok, clean } = validateJudgeEvidence({
      value: 8,
      source: "api.scorecard.dev",
      confidence: 0.9,
    });
    expect(ok).toBe(true);
    expect(clean.probe_status).toBe("ok");
    expect(clean.confidence).toBe(0.9);
    expect(clean.value).toBe(8);
  });

  it("probe_status:'ok' leaves a high confidence as-is", () => {
    const { ok, clean } = validateJudgeEvidence({
      value: 8,
      source: "api.scorecard.dev",
      confidence: 0.9,
      probe_status: "ok",
    });
    expect(ok).toBe(true);
    expect(clean.probe_status).toBe("ok");
    expect(clean.confidence).toBe(0.9);
  });

  it("probe_status:'unavailable' CAPS confidence (≤0.5) but does NOT null the value and does NOT reject (soft-gate)", () => {
    const { ok, clean } = validateJudgeEvidence({
      value: 7,
      source: "api.scorecard.dev",
      confidence: 0.95,
      probe_status: "unavailable",
    });
    // soft-gate: an OpenSSF outage caps confidence, never rejects and never zeroes D4.
    expect(ok).toBe(true);
    expect(clean.probe_status).toBe("unavailable");
    expect(clean.confidence).toBeLessThanOrEqual(0.5);
    expect(clean.value).toBe(7);
  });

  it("probe_status:'stale' also caps confidence (≤0.5), value flows through", () => {
    const { ok, clean } = validateJudgeEvidence({
      value: 6,
      source: "api.scorecard.dev",
      confidence: 0.8,
      probe_status: "stale",
    });
    expect(ok).toBe(true);
    expect(clean.probe_status).toBe("stale");
    expect(clean.confidence).toBeLessThanOrEqual(0.5);
    expect(clean.value).toBe(6);
  });

  it("a present Scorecard value still flows through with probe_status:'ok'", () => {
    const { ok, clean } = validateJudgeEvidence({
      value: 9,
      source: "api.scorecard.dev/projects/github.com/o/r",
      confidence: 0.7,
      probe_status: "ok",
    });
    expect(ok).toBe(true);
    expect(clean.value).toBe(9);
    expect(clean.confidence).toBe(0.7);
  });

  it("an unknown probe_status value is flagged and treated conservatively (capped, not trusted)", () => {
    const { ok, errors, clean } = validateJudgeEvidence({
      value: 5,
      source: "x",
      confidence: 0.9,
      probe_status: "bogus",
    });
    expect(ok).toBe(false);
    expect(errors.join(" ")).toMatch(/probe_status/);
    // unknown status must NOT pass through at full confidence (treated like unavailable)
    expect(clean.confidence).toBeLessThanOrEqual(0.5);
  });

  it("caps a null confidence to the ceiling when probe is unavailable (no fabricated number)", () => {
    const { clean } = validateJudgeEvidence({
      value: 7,
      source: "x",
      probe_status: "unavailable",
    });
    // confidence was absent (null); an unavailable probe means we cannot claim high confidence,
    // so it is set to the cap ceiling — still a real bound, never invented precision above it.
    expect(clean.confidence).toBeLessThanOrEqual(0.5);
    expect(clean.value).toBe(7);
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
