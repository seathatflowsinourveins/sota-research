import { describe, expect, it } from "vitest";
import { assessProvenance, PROVENANCE_DEFAULTS } from "../scripts/lib/provenance.mjs";

describe("provenance.mjs — assessProvenance (D10 trust overlay)", () => {
  it("independently-confirmed fraud/malware/impersonation → fraud tier + REJECT cap", () => {
    expect(assessProvenance({ fraudConfirmed: true }).trustTier).toBe("fraud");
    expect(assessProvenance({ malwareConfirmed: true }).actionCap).toBe("REJECT");
    const r = assessProvenance({ impersonationConfirmed: true });
    expect(r.trustTier).toBe("fraud");
    expect(r.scoreConfidenceCap).toBe(0);
    expect(r.flags.join(" ")).toMatch(/confirmed-impersonation/);
  });

  it("MemPalace pattern (high stars, near-zero activity, low fork:star) → suspect, cap STUDY", () => {
    const r = assessProvenance({ stars: 42000, forks: 50, commits90d: 1 });
    expect(r.trustTier).toBe("suspect");
    expect(r.actionCap).toBe("STUDY");
    expect(r.suspicion).toBeGreaterThanOrEqual(PROVENANCE_DEFAULTS.suspectThreshold);
    expect(r.scoreConfidenceCap).toBe(0.5);
    expect(r.flags.join(" ")).toMatch(/low-fork-star/);
    expect(r.flags.join(" ")).toMatch(/high-stars-low-activity/);
  });

  it("a genuinely popular, active repo is OK (no astroturf signals)", () => {
    const r = assessProvenance({ stars: 5000, forks: 800, commits90d: 50, contributors: 12 });
    expect(r.trustTier).toBe("ok");
    expect(r.actionCap).toBeNull();
    expect(r.scoreConfidenceCap).toBe(1);
  });

  it("does NOT scrutinize low-star repos (protects niche brilliance)", () => {
    const r = assessProvenance({ stars: 100, forks: 0, commits90d: 0 });
    expect(r.trustTier).toBe("ok");
    expect(r.scoreConfidenceCap).toBe(1);
    expect(r.rationale).toMatch(/below scrutiny/);
  });

  it("a single soft signal is noted (watch) but never caps on its own", () => {
    const r = assessProvenance({ stars: 5000, forks: 10, commits90d: 50 });
    expect(r.trustTier).toBe("ok");
    expect(r.suspicion).toBe(1);
    expect(r.actionCap).toBeNull();
    expect(r.flags).toContain("provenance:watch");
  });

  it("thresholds are configurable (not hard-coded facts)", () => {
    const strict = assessProvenance({
      stars: 5000,
      forks: 10,
      commits90d: 50,
      config: { forkStarMin: 0.5, lowActivityCommits: 100 },
    });
    expect(strict.trustTier).toBe("suspect"); // both signals now trip under stricter config
  });
});
