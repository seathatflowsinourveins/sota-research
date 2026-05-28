import { existsSync, readdirSync, readFileSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { atomicWrite } from "../scripts/lib/atomic-write.mjs";

describe("atomic-write.mjs - atomicWrite", () => {
  let testFile;
  let testDir;

  beforeEach(() => {
    testDir = tmpdir();
    testFile = join(
      testDir,
      `test-atomic-${Date.now()}-${Math.random().toString(36).substring(7)}.txt`,
    );
  });

  afterEach(() => {
    if (existsSync(testFile)) {
      unlinkSync(testFile);
    }
  });

  it("M-2: writes content to file atomically", () => {
    const content = "Test content for M-2 fix";
    atomicWrite(testFile, content);
    const result = readFileSync(testFile, "utf-8");
    expect(result).toBe(content);
  });

  it("M-2: overwrites existing file atomically", () => {
    atomicWrite(testFile, "First write");
    atomicWrite(testFile, "Second write");
    const result = readFileSync(testFile, "utf-8");
    expect(result).toBe("Second write");
  });

  it("M-2: cleans up temp file on success", () => {
    const fileName = `test-atomic-cleanup-${Date.now()}-${Math.random().toString(36).substring(7)}.txt`;
    const cleanupTestFile = join(testDir, fileName);
    atomicWrite(cleanupTestFile, "Content");
    const tempFiles = readdirSync(testDir).filter(
      (f) => f.includes(".tmp") && f.includes("cleanup"),
    );
    expect(tempFiles.length).toBe(0); // No temp files left
    unlinkSync(cleanupTestFile);
  });
});
