import { EventEmitter } from "node:events";
import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ingest } from "../scripts/ingest.mjs";

// Mock spawn for git and npx commands
let mockSpawnError = null;
let mockSpawnExitCode = 0;

vi.mock("child_process", () => ({
  spawn: vi.fn((cmd, _args, _options) => {
    const proc = new EventEmitter();
    proc.stdout = new EventEmitter();
    proc.stderr = new EventEmitter();
    proc.stdin = { write: vi.fn(), end: vi.fn() };

    queueMicrotask(() => {
      if (mockSpawnError) {
        proc.stderr.emit("data", mockSpawnError);
      }
      // Emit success stdout for git clone and repomix
      if ((cmd === "git" || cmd === "npx") && mockSpawnExitCode === 0) {
        proc.stdout.emit("data", "");
      }
      proc.emit("close", mockSpawnExitCode);
    });

    return proc;
  }),
}));

function setMockSpawnSuccess() {
  mockSpawnError = null;
  mockSpawnExitCode = 0;
}

function _setMockSpawnError(msg) {
  mockSpawnError = msg;
  mockSpawnExitCode = 128;
}

describe("ingest.mjs", () => {
  let tempDir;

  beforeEach(async () => {
    // Create temporary directory for test
    tempDir = join(tmpdir(), `sota-test-${Date.now()}`);
    await fs.mkdir(tempDir, { recursive: true });
    // Default: mocks succeed
    setMockSpawnSuccess();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should throw if owner or repo is missing", async () => {
    await expect(ingest({})).rejects.toThrow("owner and repo required");
    await expect(ingest({ owner: "test" })).rejects.toThrow("owner and repo required");
  });

  it("should throw if depth is invalid", async () => {
    await expect(
      ingest({ owner: "test", repo: "repo", depth: "INVALID", baseDir: tempDir }),
    ).rejects.toThrow("depth must be one of: L1, L2, L3");
  });

  describe("Ingest paths", () => {
    it("should accept depth=L1", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      expect(result.meta.depth_completed).toBe("L1");
      expect(result.ingest_results).toHaveProperty("l1");
    });

    it("should accept depth=L2", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L2",
        baseDir: tempDir,
      });

      expect(result.meta.depth_completed).toBe("L2");
      expect(result.ingest_results).toHaveProperty("l1");
      expect(result.ingest_results).toHaveProperty("l2");
    });

    it("should accept depth=L3", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L3",
        baseDir: tempDir,
      });

      expect(result.meta.depth_completed).toBe("L3");
      expect(result.ingest_results).toHaveProperty("l1");
      expect(result.ingest_results).toHaveProperty("l2");
      expect(result.ingest_results).toHaveProperty("l3");
    });
  });

  describe("L1 output", () => {
    it("should create repomix.md file", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      expect(result.ingest_results.l1).toHaveProperty("repomix_written");
      expect(result.ingest_results.l1.repomix_written).toBe(true);
    });

    it("should return repomix path", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      expect(result.ingest_results.l1.repomix_path).toMatch(/repomix\.md$/);
    });
  });

  describe("L2 output", () => {
    it("should create deepwiki.md file at L2", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L2",
        baseDir: tempDir,
      });

      expect(result.ingest_results.l2).toHaveProperty("deepwiki_written");
      expect(result.ingest_results.l2.deepwiki_written).toBe(true);
    });

    it("should return deepwiki path", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L2",
        baseDir: tempDir,
      });

      expect(result.ingest_results.l2.deepwiki_path).toMatch(/deepwiki\.md$/);
    });
  });

  describe("L3 output", () => {
    it("should create sota-distill.md file at L3", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L3",
        baseDir: tempDir,
      });

      expect(result.ingest_results.l3).toHaveProperty("distill_written");
      expect(result.ingest_results.l3.distill_written).toBe(true);
    });

    it("should return distill path", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L3",
        baseDir: tempDir,
      });

      expect(result.ingest_results.l3.distill_path).toMatch(/sota-distill\.md$/);
    });
  });

  describe("meta.json", () => {
    it("should write meta.json with correct shape", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      expect(result.meta).toHaveProperty("owner", "test");
      expect(result.meta).toHaveProperty("repo", "repo");
      expect(result.meta).toHaveProperty("score");
      expect(result.meta).toHaveProperty("decision");
      expect(result.meta).toHaveProperty("source_count");
      expect(result.meta).toHaveProperty("scanned_at");
      expect(result.meta).toHaveProperty("depth_completed", "L1");
    });

    it("should use ISO timestamp for scanned_at", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      expect(result.meta.scanned_at).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });

    it("should write meta.json file", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      expect(result.meta_path).toMatch(/meta\.json$/);
      // Verify file was written
      const content = await fs.readFile(result.meta_path, "utf-8");
      const parsed = JSON.parse(content);
      expect(parsed.owner).toBe("test");
    });
  });

  describe("L1.5: Complex dependency detection", () => {
    it("should check file count and trigger gitnexus if >10000", async () => {
      const result = await ingest({
        owner: "test",
        repo: "repo",
        depth: "L1",
        baseDir: tempDir,
      });

      // L1.5 should run but not invoke gitnexus (mock file count < 10000)
      expect(result.ingest_results.l15).toHaveProperty("gitnexus_invoked");
      expect(result.ingest_results.l15.gitnexus_invoked).toBe(false);
    });
  });
});
