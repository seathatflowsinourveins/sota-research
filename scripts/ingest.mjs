import { spawn } from "node:child_process";
import { mkdir, stat, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { atomicWrite } from "./lib/atomic-write.mjs";

/**
 * NOVEL 3 + N-2 FIX: Strict owner/repo input validation
 */
function validateOwnerRepo(owner, repo, baseDir = process.cwd()) {
  const OWNER_RE = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,38}$/;
  const REPO_RE = /^[a-zA-Z0-9._-]{1,100}$/;

  if (!OWNER_RE.test(owner)) {
    throw new Error(`Invalid owner: "${owner}"`);
  }
  if (!REPO_RE.test(repo)) {
    throw new Error(`Invalid repo: "${repo}"`);
  }

  // N-2: Explicitly reject '..' substrings
  if (owner.includes("..") || repo.includes("..")) {
    throw new Error(`Path traversal attempt detected: .. found in owner or repo`);
  }

  const safePath = resolve(baseDir, "patterns", owner, repo);
  const baseResolved = resolve(baseDir);
  if (!safePath.startsWith(baseResolved)) {
    throw new Error(`Path traversal attempt detected: ${owner}/${repo}`);
  }

  return { owner, repo, safePath };
}

/**
 * MAJOR M-4 FIX: Schema validation for metadata before write
 */
function validateMetadata(metadata) {
  const required = ["owner", "repo", "scanned_at"];
  const _optional = [
    "score",
    "decision",
    "source_count",
    "depth_completed",
    "l1_completed_at",
    "l2_completed_at",
    "l3_completed_at",
    "l3_segments",
  ];

  // Check required fields
  for (const field of required) {
    if (!(field in metadata)) {
      throw new Error(`Invalid metadata: missing required field "${field}"`);
    }
  }

  // Validate field types
  if (
    typeof metadata.owner !== "string" ||
    !metadata.owner.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{0,38}$/)
  ) {
    throw new Error(`Invalid metadata: owner must be a valid GitHub identifier`);
  }

  if (typeof metadata.repo !== "string" || !metadata.repo.match(/^[a-zA-Z0-9._-]{1,100}$/)) {
    throw new Error(`Invalid metadata: repo must be a valid GitHub identifier`);
  }

  if (typeof metadata.scanned_at !== "string" || !new Date(metadata.scanned_at).getTime()) {
    throw new Error(`Invalid metadata: scanned_at must be a valid ISO date string`);
  }

  // Validate optional fields if present
  if (
    "score" in metadata &&
    (typeof metadata.score !== "number" || metadata.score < 0 || metadata.score > 100)
  ) {
    throw new Error(`Invalid metadata: score must be a number between 0 and 100`);
  }

  if (
    "source_count" in metadata &&
    (typeof metadata.source_count !== "number" || metadata.source_count < 0)
  ) {
    throw new Error(`Invalid metadata: source_count must be a non-negative number`);
  }

  return true;
}

/**
 * Execute shell command and return stdout/stderr
 */
function spawnPromise(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: ["pipe", "pipe", "pipe"],
      ...options,
    });

    let stdout = "";
    let stderr = "";

    if (child.stdout) {
      child.stdout.on("data", (data) => {
        stdout += data;
      });
    }

    if (child.stderr) {
      child.stderr.on("data", (data) => {
        stderr += data;
      });
    }

    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr, code });
      } else {
        reject(new Error(`Command failed with code ${code}: ${stderr || stdout}`));
      }
    });

    child.on("error", (err) => {
      reject(err);
    });
  });
}

/**
 * L1: git clone + repomix extraction
 */
async function l1Ingest(owner, repo, baseDir = process.cwd()) {
  // NOVEL 3: Validate inputs
  validateOwnerRepo(owner, repo, baseDir);

  const cloneDir = join(baseDir, "reference", owner, repo);
  const outputDir = join(baseDir, "patterns", owner, repo);

  // Ensure directories exist
  await mkdir(cloneDir, { recursive: true });
  await mkdir(outputDir, { recursive: true });

  // Check if repo already cloned
  let repoExists = false;
  try {
    await stat(join(cloneDir, ".git"));
    repoExists = true;
  } catch {
    repoExists = false;
  }

  if (!repoExists) {
    // Git clone
    const repoUrl = `https://github.com/${owner}/${repo}.git`;
    try {
      await spawnPromise("git", ["clone", repoUrl, cloneDir], {
        cwd: baseDir,
        timeout: 120000, // 2 minute timeout
      });
    } catch (err) {
      throw new Error(`Failed to clone ${repoUrl}: ${err.message}`);
    }
  }

  // Run repomix
  try {
    const repomixOutput = join(outputDir, "repomix.md");
    await spawnPromise("npx", ["repomix", "--output", repomixOutput, "--style", "markdown"], {
      cwd: cloneDir,
      timeout: 60000, // 1 minute timeout
    });

    return {
      repomix_written: true,
      repomix_path: repomixOutput,
      cloned: !repoExists,
    };
  } catch (err) {
    // Repomix failed; write placeholder but mark as partial
    const repomixPath = join(outputDir, "repomix.md");
    await writeFile(
      repomixPath,
      `# Repomix L1 Ingest (Failed)\n\nRepomix failed: ${err.message}\n`,
    );

    return {
      repomix_written: false,
      repomix_path: repomixPath,
      cloned: !repoExists,
      error: err.message,
    };
  }
}

/**
 * L1.5: If file count > 10000 OR complex deps detected, invoke gitnexus
 * MCP_REQUIRED: Requires gitnexus MCP for large codebases
 */
async function l15CheckAndIngest(_owner, _repo, _baseDir) {
  // MCP_REQUIRED: gitnexus MCP needed for large repo indexing (>10k files)
  // TODO: When gitnexus MCP available, check file count and invoke if needed
  // For now, return stub indicating this step requires MCP

  return {
    gitnexus_invoked: false,
    note: "MCP_REQUIRED: gitnexus MCP needed for large codebases",
  };
}

/**
 * L2: DeepWiki MCP query (requires mcp.deepwiki.com installed)
 * MCP_REQUIRED: deepwiki MCP not yet integrated
 */
async function l2Ingest(owner, repo, baseDir) {
  // MCP_REQUIRED: deepwiki MCP server (mcp.deepwiki.com) needed
  // TODO: Integrate mcp__deepwiki__query when MCP available
  // deepwiki_result = await mcp__deepwiki__query(owner + '/' + repo, [
  //   "what is this project's architecture",
  //   "what are its novel techniques",
  //   "what does the typical user adopt",
  //   "what are common pitfalls"
  // ])
  // write patterns/<owner>/<repo>/deepwiki.md

  const outputDir = join(baseDir, "patterns", owner, repo);
  await mkdir(outputDir, { recursive: true });

  const placeholder = `# DeepWiki L2 Ingest

**Status:** MCP_REQUIRED — deepwiki MCP not available in current runtime.

To enable:
\`\`\`bash
claude mcp add deepwiki
\`\`\`

When available, this file will contain:
- Project architecture
- Novel techniques
- Typical user adoption patterns
- Common pitfalls
`;

  await writeFile(join(outputDir, "deepwiki.md"), placeholder);

  return {
    deepwiki_written: true,
    deepwiki_path: join(outputDir, "deepwiki.md"),
    mcp_required: true,
  };
}

/**
 * L3: Codex xhigh distillation
 * MCP_REQUIRED: Requires codex CLI available
 */
async function l3Ingest(owner, repo, baseDir) {
  // MCP_REQUIRED: Codex CLI required for xhigh-effort distillation
  // TODO: Implement codex exec --effort xhigh with prompt template from spec Section 5
  // Input: repomix.md + deepwiki.md + 5 highest-rated issues
  // Output: ADR-style document with:
  //   - Novel techniques (with line references to repomix)
  //   - Adoption targets
  //   - Anti-patterns
  //   - Cross-repo refs

  const outputDir = join(baseDir, "patterns", owner, repo);
  await mkdir(outputDir, { recursive: true });

  const placeholder = `# SOTA Distillation L3

**Status:** MCP_REQUIRED — Codex CLI required for xhigh-effort distillation.

When available, this document will contain:
- Novel techniques and patterns (with references to repomix.md)
- Recommended adoption targets for Claude Code runtime
- Anti-patterns to avoid
- Cross-repository connections and references
`;

  await writeFile(join(outputDir, "sota-distill.md"), placeholder);

  return {
    distill_written: true,
    distill_path: join(outputDir, "sota-distill.md"),
    mcp_required: true,
  };
}

/**
 * Main ingest function
 */
export async function ingest({
  owner,
  repo,
  depth = "L1",
  force = false,
  baseDir = process.cwd(),
}) {
  if (!owner || !repo) {
    throw new Error("owner and repo required");
  }

  const validDepths = ["L1", "L2", "L3"];
  if (!validDepths.includes(depth)) {
    throw new Error(`depth must be one of: ${validDepths.join(", ")}`);
  }

  const outputDir = join(baseDir, "patterns", owner, repo);
  const metaPath = join(outputDir, "meta.json");

  // Check if already ingested
  // TODO: Check if meta.json exists; bail unless force=true

  const results = {};
  const depthLevel = depth;

  // Execute ingest phases
  if (depthLevel === "L1" || depthLevel === "L2" || depthLevel === "L3") {
    results.l1 = await l1Ingest(owner, repo, baseDir);
    results.l15 = await l15CheckAndIngest(owner, repo, baseDir);
  }

  if (depthLevel === "L2" || depthLevel === "L3") {
    results.l2 = await l2Ingest(owner, repo, baseDir);
  }

  if (depthLevel === "L3") {
    results.l3 = await l3Ingest(owner, repo, baseDir);
  }

  // Write meta.json with validation (M-4) and atomic write (M-2)
  const metadata = {
    owner,
    repo,
    score: 0, // TODO: Will be populated by score.mjs
    decision: "STUDY", // TODO: Set from discover phase decision
    source_count: 0, // TODO: Set from convergence
    scanned_at: new Date().toISOString(),
    depth_completed: depthLevel,
  };

  // Validate before write (M-4)
  validateMetadata(metadata);

  await mkdir(outputDir, { recursive: true });

  // Use atomic write (M-2) instead of direct writeFile
  atomicWrite(metaPath, JSON.stringify(metadata, null, 2));

  return {
    meta: metadata,
    ingest_results: results,
    meta_path: metaPath,
  };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const repo = args[0]; // <owner/repo>
  const depthIdx = args.indexOf("--depth");
  const forceIdx = args.indexOf("--force");

  const depth = depthIdx !== -1 ? args[depthIdx + 1] : "L1";
  const force = forceIdx !== -1;

  if (!repo?.includes("/")) {
    console.error("Usage: node ingest.mjs <owner/repo> --depth L1|L2|L3 [--force]");
    process.exit(1);
  }

  const [owner, repoName] = repo.split("/");

  ingest({ owner, repo: repoName, depth, force }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
