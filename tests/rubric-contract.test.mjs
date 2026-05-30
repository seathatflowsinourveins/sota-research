import { describe, expect, it } from "vitest";
import {
  assertRubricContract,
  checkRubricContract,
  DECLARED_CONTRACT,
  KNOWN_BACKLOG,
  RUBRIC_PRODUCERS,
} from "../scripts/lib/rubric-contract.mjs";

describe("rubric-contract — declared==wired (scoped, backlog-allowlisted)", () => {
  it("passes on the current tree: every declared producer is wired (minus KNOWN_BACKLOG)", () => {
    const { ok, missing } = checkRubricContract();
    expect(missing).toEqual([]);
    expect(ok).toBe(true);
  });

  it("assertRubricContract() does not throw on the current tree", () => {
    expect(() => assertRubricContract()).not.toThrow();
  });

  it("covers every core dimension/overlay/gate the rubric declares (D1–D11 + decision gates)", () => {
    // Sanity: the declared contract is non-trivial and includes the keystone items.
    for (const key of ["D1", "D2", "D3", "D4", "D9", "D10", "D11", "convergence-action-cap"]) {
      expect(DECLARED_CONTRACT).toContain(key);
    }
  });

  it("KNOWN_BACKLOG items are NOT required (they are the explicit allowlist)", () => {
    // The backlog items must not appear in the required declared contract — otherwise the
    // contract would fail on known-unwired work (the R13 scoping rule).
    for (const b of KNOWN_BACKLOG) {
      expect(DECLARED_CONTRACT).not.toContain(b);
    }
    // And the allowlist names the expected deferred work.
    expect(KNOWN_BACKLOG).toContain("honeypot-active-malware");
  });

  it("BITES: removing a declared producer (D10) makes the contract fail with that item missing", () => {
    const broken = { ...RUBRIC_PRODUCERS, D10: undefined };
    const { ok, missing } = checkRubricContract({ producers: broken });
    expect(ok).toBe(false);
    expect(missing).toContain("D10");
  });

  it("BITES on KEY DELETION too: an omitted producer entry is caught (required-set is decoupled)", () => {
    // C1 hardening: the required surface is a frozen literal, NOT Object.keys(producers) — so
    // dropping a producer ENTRY (not just nulling it) is still demanded and flagged missing.
    const { D10: _omitted, ...withoutD10 } = RUBRIC_PRODUCERS;
    const { ok, missing } = checkRubricContract({ producers: withoutD10 });
    expect(ok).toBe(false);
    expect(missing).toContain("D10");
  });

  it("BITES: assertRubricContract throws when a declared gate producer is removed", () => {
    const broken = { ...RUBRIC_PRODUCERS, "convergence-action-cap": null };
    expect(() => assertRubricContract({ producers: broken })).toThrow(/convergence-action-cap/);
  });

  it("does NOT read or parse markdown (asserts against a curated in-code map only)", () => {
    // The producer map is plain function references — checkRubricContract must work with a
    // fully synthetic map and never touch the filesystem / docs.
    const synthetic = Object.fromEntries(DECLARED_CONTRACT.map((k) => [k, () => {}]));
    const { ok, missing } = checkRubricContract({ producers: synthetic });
    expect(ok).toBe(true);
    expect(missing).toEqual([]);
  });

  it("F4: live-multi-source-fanout is now WIRED (selectSources) — moved out of the backlog", () => {
    // The fan-out's deterministic producer (relevance-ranked source selection) is wired into
    // discover(); the contract now REQUIRES it, so deleting it would bite in CI.
    expect(KNOWN_BACKLOG).not.toContain("live-multi-source-fanout");
    expect(DECLARED_CONTRACT).toContain("live-multi-source-fanout");
    expect(typeof RUBRIC_PRODUCERS["live-multi-source-fanout"]).toBe("function");
  });
});
