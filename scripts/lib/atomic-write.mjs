/**
 * MAJOR M-2 FIX: Atomic file writes to prevent corruption on crash mid-write
 * Pattern: write to temp file, fsync, then atomic rename
 */

import { closeSync, fsyncSync, openSync, renameSync, unlinkSync, writeFileSync } from "node:fs";

/**
 * Atomically write content to a file
 * Writes to a temp file first, fsyncs, then renames to target
 * Prevents partial writes on process crash or I/O failure
 *
 * @param {string} path - Target file path
 * @param {string|Buffer} content - Content to write
 * @throws {Error} If write fails
 */
export function atomicWrite(path, content) {
  const tempPath = `${path}.tmp-${process.pid}-${Date.now()}`;

  try {
    // Write to temp file
    writeFileSync(tempPath, content, "utf-8");

    // Force fsync to disk
    const fd = openSync(tempPath, "r+");
    try {
      fsyncSync(fd);
    } finally {
      closeSync(fd);
    }

    // Atomic rename
    renameSync(tempPath, path);
  } catch (err) {
    // Clean up temp file if it exists
    try {
      unlinkSync(tempPath);
    } catch {
      // Ignore cleanup failures
    }
    throw new Error(`Atomic write failed for ${path}: ${err.message}`);
  }
}
