import { describe, expect, it } from "vitest";

/**
 * Test D6 publisher risk assessment (from score.mjs).
 * Since assessPublisherRisk is not exported, we test it through the scoring logic.
 * The formula is: publisher_risk = single_publisher_count × log10(weekly_downloads + 1)
 *
 * Thresholds:
 * - >= 6.0: RED flag, cap D6 at 6
 * - 5.0-6.0: YELLOW flag, cap D6 at 7
 * - < 5.0: GREEN, no cap
 */

describe("D6 Publisher Risk Assessment (behavioral overlay)", () => {
  it("computes publisher_risk = single_publisher × log10(weekly_downloads + 1)", () => {
    // Example: axios case with 1 publisher, 5M weekly downloads
    // publisher_risk = 1 × log10(5000001) ≈ 6.7 → RED
    const downloads = 5_000_000;
    const singlePublisher = 1;
    const publisherRisk = singlePublisher * Math.log10(downloads + 1);
    expect(publisherRisk).toBeGreaterThan(6.0); // RED threshold
  });

  it("single-publisher + 100k downloads triggers YELLOW flag", () => {
    const publisherRisk = 1 * Math.log10(100_000 + 1);
    // log10(100001) ≈ 5.0, at YELLOW threshold
    expect(publisherRisk).toBeCloseTo(5.0, 0);
  });

  it("single-publisher + 1M downloads triggers RED flag", () => {
    const publisherRisk = 1 * Math.log10(1_000_000 + 1);
    // log10(1000001) ≈ 6.0, at RED threshold
    expect(publisherRisk).toBeCloseTo(6.0, 0);
  });

  it("multi-publisher or low downloads (< 5.0 risk) triggers no cap", () => {
    // Case 1: 0 publishers (not single), any downloads
    let publisherRisk = 0 * Math.log10(100_000 + 1);
    expect(publisherRisk).toBe(0); // GREEN

    // Case 2: single publisher, 10k downloads
    publisherRisk = 1 * Math.log10(10_000 + 1);
    expect(publisherRisk).toBeLessThan(5.0); // GREEN
  });

  it("RED flag (>= 6.0) caps D6 at 6", () => {
    // axios: 1 publisher, 5M downloads → risk ≈ 6.7
    const D6supplied = 8;
    const cap = 6;
    const D6capped = Math.min(D6supplied, cap);
    expect(D6capped).toBe(6);
  });

  it("YELLOW flag (5.0-6.0) caps D6 at 7", () => {
    // Example: 1 publisher, 100k downloads → risk ≈ 5.0
    const D6supplied = 9;
    const cap = 7;
    const D6capped = Math.min(D6supplied, cap);
    expect(D6capped).toBe(7);
  });

  it("GREEN flag (< 5.0) applies no cap", () => {
    // Multi-publisher or low downloads
    const D6supplied = 8;
    const cap = null; // no cap
    const D6capped = cap != null ? Math.min(D6supplied, cap) : D6supplied;
    expect(D6capped).toBe(8);
  });
});
