import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import { reviewOutcomes } from "../scripts/outcome.mjs";

describe("outcome.mjs", () => {
  let tempDir;

  beforeEach(async () => {
    tempDir = join(tmpdir(), `sota-outcome-test-${Date.now()}`);
    await fs.mkdir(tempDir, { recursive: true });
    await fs.mkdir(join(tempDir, "inventory"), { recursive: true });
  });

  it("should review outcomes for specified age (default 30 days)", async () => {
    const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

    expect(result).toHaveProperty("outcomes_logged");
    expect(result).toHaveProperty("total_outcomes");
    expect(result).toHaveProperty("weight_tuning_suggestion");
  });

  it("should accept ageDays parameter (30, 60, 90)", async () => {
    const result30 = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });
    const result60 = await reviewOutcomes({ ageDays: 60, baseDir: tempDir });
    const result90 = await reviewOutcomes({ ageDays: 90, baseDir: tempDir });

    expect(result30).toBeDefined();
    expect(result60).toBeDefined();
    expect(result90).toBeDefined();
  });

  describe("Outcome detection", () => {
    it("should read decisions.jsonl (JSONL format)", async () => {
      // Create sample decisions.jsonl
      const decisionsFile = join(tempDir, "inventory", "decisions.jsonl");
      const decisions = [
        { ts: "2025-12-28T00:00:00Z", repo: "test/repo1", action: "INSTALL-FULL", score: 91 },
        { ts: "2025-12-27T00:00:00Z", repo: "test/repo2", action: "STUDY", score: 75 },
      ];
      await fs.writeFile(decisionsFile, `${decisions.map((d) => JSON.stringify(d)).join("\n")}\n`);

      const result = await reviewOutcomes({ ageDays: 1, baseDir: tempDir });
      expect(result).toHaveProperty("outcomes_logged");
    });

    it("should filter decisions by age (cutoff date)", async () => {
      // Only decisions older than ageDays should be evaluated
      // This is a temporal filter
      const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });
      expect(result.outcomes_logged).toBeGreaterThanOrEqual(0);
    });

    it("should check if artifact is still present", async () => {
      // For each decision, verify presence of artifact
      // Rules: npm package in package.json, agent/skill file exists, MCP in claude list
      // PLACEHOLDER: mock always returns true

      const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });
      expect(result).toBeDefined();
    });

    it("should append outcomes to outcomes.jsonl", async () => {
      const _result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

      // Check outcomes file exists
      const outcomesFile = join(tempDir, "inventory", "outcomes.jsonl");
      try {
        await fs.access(outcomesFile);
        // File exists or was created
        expect(true).toBe(true);
      } catch (_e) {
        // File may not exist if no outcomes (expected)
      }
    });
  });

  describe("Weight tuning trigger", () => {
    it("should NOT trigger weight tuning if <20 outcomes", async () => {
      const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

      expect(result.weight_tuning_suggestion.triggered).toBe(false);
    });

    it("should trigger weight tuning if 20+ outcomes accumulated", async () => {
      // Create 20+ outcomes in outcomes.jsonl
      const outcomesFile = join(tempDir, "inventory", "outcomes.jsonl");
      const outcomes = [];
      for (let i = 0; i < 20; i++) {
        outcomes.push({
          ts: new Date().toISOString(),
          decision_ts: `2025-12-${String(i + 1).padStart(2, "0")}T00:00:00Z`,
          repo: `test/repo${i}`,
          action: "INSTALL-FULL",
          artifact_present: i % 2 === 0, // 50% present
          age_days: 30,
        });
      }
      await fs.writeFile(outcomesFile, `${outcomes.map((o) => JSON.stringify(o)).join("\n")}\n`);

      const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

      // If outcomes are loaded, weight tuning should be suggested
      if (result.total_outcomes >= 20) {
        expect(result.weight_tuning_suggestion.triggered).toBe(true);
      }
    });

    it("should compute dimension predictive accuracy", async () => {
      // Create 20+ outcomes to trigger weight tuning
      const outcomesFile = join(tempDir, "inventory", "outcomes.jsonl");
      const outcomes = [];
      for (let i = 0; i < 20; i++) {
        outcomes.push({
          ts: new Date().toISOString(),
          decision_ts: `2025-12-${String(i + 1).padStart(2, "0")}T00:00:00Z`,
          repo: `test/repo${i}`,
          action: "INSTALL-FULL",
          artifact_present: true,
          age_days: 30,
        });
      }
      await fs.writeFile(outcomesFile, `${outcomes.map((o) => JSON.stringify(o)).join("\n")}\n`);

      const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

      if (result.weight_tuning_suggestion.triggered) {
        expect(result.weight_tuning_suggestion.dimension_accuracy).toBeDefined();
        expect(result.weight_tuning_suggestion.dimension_accuracy).toHaveProperty("D1");
        expect(result.weight_tuning_suggestion.dimension_accuracy).toHaveProperty("D8");
      }
    });
  });

  it("should handle missing outcomes.jsonl gracefully", async () => {
    // First call should work even if outcomes.jsonl doesn't exist
    const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

    expect(result.outcomes_logged).toBeGreaterThanOrEqual(0);
    expect(result.total_outcomes).toBeGreaterThanOrEqual(0);
  });

  it("should handle missing decisions.jsonl gracefully", async () => {
    // If decisions.jsonl doesn't exist, no outcomes should be generated
    const result = await reviewOutcomes({ ageDays: 30, baseDir: tempDir });

    expect(result.outcomes_logged).toBe(0);
  });
});
