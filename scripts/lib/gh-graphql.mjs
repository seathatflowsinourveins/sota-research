/**
 * MAJOR M-1 FIX: Secure GraphQL execution without shell interpolation
 * Used by discover.mjs and score.mjs
 *
 * Issues fixed:
 * - No shell-layer command building (direct spawn without 'sh')
 * - Stderr sanitization to redact GH_TOKEN and auth headers
 * - Timeout support with AbortController
 */

import { spawn } from "node:child_process";

/**
 * Redact sensitive information from text
 * Removes: ghp_*, gho_*, github_pat_*, Bearer tokens, Authorization headers
 */
function redactSecrets(text) {
  return (text || "")
    .replace(/ghp_[A-Za-z0-9_]+/g, "ghp_***")
    .replace(/gho_[A-Za-z0-9_]+/g, "gho_***")
    .replace(/github_pat_[A-Za-z0-9_]+/g, "github_pat_***")
    .replace(/Bearer\s+[A-Za-z0-9._-]+/gi, "Bearer ***")
    .replace(/Authorization:\s*[^\n]*/gi, "Authorization: ***");
}

/**
 * Execute GraphQL query via gh CLI with security hardening
 *
 * @param {string} query - GraphQL query string
 * @param {Object} variables - Query variables (will be passed via -f flags)
 * @param {Object} options - Configuration options
 * @param {number} options.timeout - Timeout in milliseconds (default: 30000)
 * @returns {Promise<Object>} Parsed GraphQL response
 * @throws {Error} If execution fails or times out
 */
export async function ghGraphQL(query, variables = {}, { timeout = 30000 } = {}) {
  if (!process.env.GH_TOKEN) {
    throw new Error("GH_TOKEN env var required for GitHub GraphQL calls");
  }

  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timeoutHandle = setTimeout(() => controller.abort(), timeout);

    // Build args directly (no shell)
    const args = ["api", "graphql", "-f", `query=${query}`];

    // Add variables as -f flags (one per variable)
    for (const [key, value] of Object.entries(variables)) {
      const stringValue = typeof value === "string" ? value : JSON.stringify(value);
      args.push("-f", `${key}=${stringValue}`);
    }

    const child = spawn("gh", args, {
      stdio: ["pipe", "pipe", "pipe"],
      signal: controller.signal,
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data) => {
      stdout += data;
    });

    child.stderr.on("data", (data) => {
      stderr += data;
    });

    child.on("close", (code) => {
      clearTimeout(timeoutHandle);

      if (code === 0) {
        try {
          const result = JSON.parse(stdout);
          if (result.errors) {
            const errorMsg = result.errors.map((e) => e.message).join(", ");
            reject(new Error(`GraphQL error: ${errorMsg}`));
          } else {
            resolve(result.data);
          }
        } catch (e) {
          reject(new Error(`Failed to parse GraphQL response: ${e.message}`));
        }
      } else {
        // Redact stderr before rejecting
        const safeStderr = redactSecrets(stderr);
        reject(new Error(`gh cli failed: ${safeStderr}`));
      }
    });

    child.on("error", (err) => {
      clearTimeout(timeoutHandle);
      reject(new Error(`gh spawn failed: ${err.message}`));
    });

    child.on("abort", () => {
      clearTimeout(timeoutHandle);
      reject(new Error(`GraphQL execution timeout after ${timeout}ms`));
    });
  });
}
