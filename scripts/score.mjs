import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { d3FromPathway } from "./lib/d3-pathway.mjs";
import { dimensionValue } from "./lib/evidence.mjs";
import { ghGraphQL } from "./lib/gh-graphql.mjs";

/**
 * NOVEL 3 + N-2 FIX: Strict owner/repo input validation with '..' protection
 * Prevents path traversal, injection, and invalid GitHub identifiers
 */
function validateOwnerRepo(owner, repo, baseDir = process.cwd()) {
  const OWNER_RE = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,38}$/; // GitHub owner rules
  const REPO_RE = /^[a-zA-Z0-9._-]{1,100}$/; // GitHub repo rules

  if (!OWNER_RE.test(owner)) {
    throw new Error(`Invalid owner: "${owner}" (must match [a-zA-Z0-9][a-zA-Z0-9-]{0,38})`);
  }
  if (!REPO_RE.test(repo)) {
    throw new Error(`Invalid repo: "${repo}" (must match [a-zA-Z0-9._-]{1,100})`);
  }

  // N-2: Explicitly reject '..' substrings in owner/repo (edge case beyond regex)
  if (owner.includes("..") || repo.includes("..")) {
    throw new Error(`Path traversal attempt detected: .. found in owner or repo`);
  }

  // Resolved-path containment: ensure constructed paths don't escape reference/ or patterns/
  const safePath = resolve(baseDir, "patterns", owner, repo);
  const baseResolved = resolve(baseDir);
  if (!safePath.startsWith(baseResolved)) {
    throw new Error(`Path traversal attempt detected: ${owner}/${repo}`);
  }

  return { owner, repo, safePath };
}

/**
 * Parse category markdown file and extract weight table
 * Table format:
 * | Dimension | Weight | ... |
 * |---|---|---|
 * | D1: Stars | 0.05 | ... |
 * etc.
 */
function loadCategoryProfile(category) {
  const categoryFile = join(process.cwd(), "docs", "categories", `${category}.md`);

  try {
    const content = readFileSync(categoryFile, "utf-8");

    // Extract weight table using regex
    // Look for lines like "| D1: ... | 0.05 |" or "| D3: ... | **0.30** |" (bolded dominant weights)
    // Strategy: parse-cell-then-clean — grab cell contents, strip markdown decorations.
    // BUGFIX 2026-05-28: prior regex `([\d.]+)` failed to match bolded weights (e.g. **0.30**)
    // which led to "Missing dimensions in hook-toolkit.md: D3, D4" and code-library.md: D1, D4, D6
    // (the bolded dominant weights in those categories). 26 tests previously failed because of this.
    const weights = {};
    const lines = content.split("\n");

    for (const line of lines) {
      // Match pattern: | D<N>: ... | <cell> |  (cell may contain bold markers, whitespace)
      const match = line.match(/\|\s*D(\d):\s*[^|]*\|\s*([^|]+?)\s*\|/);
      if (match) {
        const dimNum = parseInt(match[1], 10);
        // Strip bold (**), italic (*), backticks, underscores, and whitespace from the weight cell
        const weightStr = match[2].replace(/[*`_]/g, "").trim();
        const weight = parseFloat(weightStr);
        if (!Number.isNaN(weight) && weight >= 0 && weight <= 1) {
          weights[`D${dimNum}`] = weight;
        }
      }
    }

    // Validate all 8 dimensions present
    const expectedDims = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];
    const missingDims = expectedDims.filter((d) => !(d in weights));
    if (missingDims.length > 0) {
      throw new Error(`Missing dimensions in ${category}.md: ${missingDims.join(", ")}`);
    }

    // Validate weights sum to ~1.0
    const weightSum = Object.values(weights).reduce((a, b) => a + b, 0);
    if (Math.abs(weightSum - 1.0) > 0.01) {
      throw new Error(`Category weights sum to ${weightSum}, expected ~1.0 for ${category}`);
    }

    return weights;
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(`Category profile not found: ${categoryFile}`);
    }
    throw err;
  }
}

/**
 * M-1: Use secure GraphQL execution (no shell interpolation)
 */
const executeGraphQL = ghGraphQL;

/**
 * Appendix B.2: Stage-2 dimension query (per-candidate, 1 point each)
 * Returns raw dimension data from GitHub for 8-dimension scoring
 */
async function githubGraphQLDimensions(owner, repo) {
  if (!process.env.GH_TOKEN) {
    throw new Error("GH_TOKEN env var required");
  }

  const query = `
    query Dim($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        stargazerCount
        forkCount
        watchers { totalCount }
        issues(states: OPEN, first: 1) { totalCount }
        closedIssues: issues(states: CLOSED, first: 1) { totalCount }
        pullRequests(states: MERGED, first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
          totalCount
          nodes { mergedAt }
        }
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 30) {
                totalCount
                nodes { author { user { login } email } committedDate }
              }
            }
          }
        }
        languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
          edges { size node { name } }
        }
        repositoryTopics(first: 30) { nodes { topic { name } } }
        object(expression: "HEAD:") { ... on Tree { entries { name type } } }
        mentionableUsers(first: 1) { totalCount }
      }
    }
  `;

  const data = await executeGraphQL(query, { owner, name: repo });
  return data.repository;
}

/**
 * Compute dimensions from raw GitHub data + agent-supplied evidence.
 *
 * D1 (stars) and D2 (maintenance velocity) are computed here from GraphQL.
 * D3–D8 require LIVE MCP research (Claude-Code fit, OpenSSF/quality, ingestion,
 * adoption, novelty, community) and are supplied by the scoring subagent as
 * `providedDims`. When evidence is absent the dimension is `null` — NEVER a
 * fabricated constant. The old `D3..D8 = 5` placeholders produced "optimistic
 * scoring theater" (Codex review 2026-05-28): a rubric_score built on six fake
 * dimensions, which made every routed decision mostly fake precision.
 *
 * D9 (Niche Excellence) is a conditional OVERLAY, not part of the weighted sum;
 * it is returned separately for the decision engine's escape-hatch rules.
 *
 * @returns {{dims: object, D9: number|null}}
 */
function computeDimensions(rawData, providedDims = {}) {
  const D1 = Math.min(10, Math.log10((rawData.stargazerCount || 0) + 1));
  const commits = rawData.defaultBranchRef?.target?.history?.totalCount || 0;
  const prs = rawData.pullRequests?.totalCount || 0;
  const D2 = Math.min(10, (commits + prs) / 10);

  const dims = { D1, D2 };
  // D3-D8 accept either a bare number or a judge evidence object {value,source,...};
  // a missing/non-finite value stays null (evidence contract — never a fabricated constant).
  for (const k of ["D3", "D4", "D5", "D6", "D7", "D8"]) {
    dims[k] = dimensionValue(providedDims[k]);
  }
  // D3 (Claude-Code fit) fallback: if not supplied directly but a runtime pathway +
  // integration evidence are, derive the evidence-CAPPED pathway sub-score (the ladder
  // is a STARTING value capped by working-integration evidence — Codex 2026-05-28).
  if (dims.D3 == null && providedDims.D3pathway) {
    const { pathway, evidence } = providedDims.D3pathway;
    dims.D3 = d3FromPathway(pathway, evidence);
  }
  const D9 = dimensionValue(providedDims.D9);
  return { dims, D9 };
}

/**
 * Main scoring function
 */
export async function scoreRepo({
  owner,
  repo,
  category = "code-library",
  dims: providedDims = {},
  baseDir = process.cwd(),
}) {
  if (!owner || !repo) {
    throw new Error("owner and repo required");
  }

  // NOVEL 3: Validate owner/repo format and path containment
  validateOwnerRepo(owner, repo, baseDir);

  // Load category profile
  const weights = loadCategoryProfile(category);

  // Validate weights sum to ~1.0
  const weightSum = Object.values(weights).reduce((a, b) => a + b, 0);
  if (Math.abs(weightSum - 1.0) > 0.01) {
    throw new Error(`Category weights sum to ${weightSum}, expected ~1.0`);
  }

  // Call GraphQL dimension query
  const rawData = await githubGraphQLDimensions(owner, repo);

  // Compute dimensions (D1/D2 from GraphQL; D3–D8 from agent-supplied evidence)
  const { dims, D9 } = computeDimensions(rawData, providedDims);

  // Rubric score over EVIDENCED dimensions only (missing dims contribute 0).
  // `coverage` reports completeness so consumers can refuse to trust a partial
  // score: incomplete evidence yields a LOW score, never a fabricated one.
  let weightedSum = 0;
  let coverage = 0;
  for (const [key, value] of Object.entries(dims)) {
    const w = weights[key] || 0;
    if (value != null) {
      weightedSum += value * w;
      coverage += w;
    }
  }
  const rubric_score = Math.max(0, Math.min(100, weightedSum * 10));

  return {
    rubric_score,
    coverage: Number(coverage.toFixed(3)),
    partial: coverage < 0.999,
    dimensions: dims,
    niche_overlay_D9: D9,
    evidence: {
      stars: rawData.stargazerCount,
      forks: rawData.forkCount,
      pr_count: rawData.pullRequests?.totalCount ?? 0,
      commits_90d: rawData.defaultBranchRef?.target?.history?.totalCount ?? 0,
    },
    category,
  };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const repo = args[0]; // <owner/repo>
  const categoryIdx = args.indexOf("--category");
  const category = categoryIdx !== -1 ? args[categoryIdx + 1] : "code-library";

  if (!repo?.includes("/")) {
    console.error("Usage: node score.mjs <owner/repo> [--category <category>]");
    process.exit(1);
  }

  const [owner, repoName] = repo.split("/");

  scoreRepo({ owner, repo: repoName, category }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
