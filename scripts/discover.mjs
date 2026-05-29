import { computeFinalScore } from "./lib/blend.mjs";
import { routeDecision } from "./lib/decision.mjs";
import { assessGapFit, loadStackInventory } from "./lib/gap-fit.mjs";
import { ghGraphQL } from "./lib/gh-graphql.mjs";
import { assessProvenance } from "./lib/provenance.mjs";
import { scoreRepo } from "./score.mjs";

// M-1: Use secure ghGraphQL helper instead of shell-based executeGraphQL
const executeGraphQL = ghGraphQL;

/**
 * Appendix B.3: Search-by-topic GitHub GraphQL query
 * Returns candidates from GitHub with basic metadata
 */
async function githubGraphQLSearch(topic, limit = 25) {
  const query = `
    query Search($q: String!, $cursor: String) {
      search(query: $q, type: REPOSITORY, first: ${limit}, after: $cursor) {
        repositoryCount
        pageInfo { hasNextPage endCursor }
        nodes {
          ... on Repository {
            nameWithOwner
            stargazerCount
            pushedAt
            licenseInfo { spdxId }
            repositoryTopics(first: 5) { nodes { topic { name } } }
            description
          }
        }
      }
    }
  `;

  const q = `topic:${topic} stars:>50 pushed:>2025-11-28 archived:false`;
  const data = await executeGraphQL(query, { q });

  return (data.search.nodes || []).map((repo) => ({
    nameWithOwner: repo.nameWithOwner,
    sources: ["github-search"],
    hint: {
      stars: repo.stargazerCount,
      description: repo.description,
      pushedAt: repo.pushedAt,
      topics: (repo.repositoryTopics?.nodes || []).map((t) => t.topic.name),
    },
  }));
}

/**
 * Advanced GitHub GraphQL with contributors/dependents filtering
 * MCP_REQUIRED: This would benefit from mcp__github__search_repositories
 * For now, use GitHub GraphQL directly.
 */
async function githubGraphQLAdvanced(_query, _limit = 25) {
  // This requires multi-step GraphQL queries for dependents + contributors
  // Placeholder for now — advanced filtering requires additional gh API calls
  // MCP_REQUIRED: A dedicated MCP could batch these efficiently
  return [];
}

/**
 * MCP_REQUIRED: Firecrawl awesome-list scrape
 * Requires mcp__firecrawl__firecrawl_scrape
 */
async function awesomeListCrawl(_awesome_list_urls) {
  // TODO: Integrate mcp__firecrawl__firecrawl_scrape when MCP available
  // For now, return empty (MCP not available in bootstrap)
  return [];
}

/**
 * MCP_REQUIRED: Exa semantic search or deep research
 * Requires mcp__exa__web_search_exa or mcp__exa__deep_researcher
 */
async function exaSemanticSearch(_topic, _limit = 25) {
  // TODO: Integrate mcp__exa__web_search_exa or deep_researcher when available
  // MCP_REQUIRED: Exa MCP needed for semantic searches
  return [];
}

/**
 * MCP_REQUIRED: Tavily advanced research
 * Requires mcp__tavily__tavily_research
 */
async function tavilyResearch(_topic, _limit = 25) {
  // TODO: Integrate mcp__tavily__tavily_research when available
  // MCP_REQUIRED: Tavily MCP needed for multi-source research
  return [];
}

/**
 * MCP_REQUIRED: Brave news + web search
 * Requires mcp__brave-search (both news and web variants)
 */
async function braveTriage(_topic, _limit = 25) {
  // TODO: Integrate mcp__brave-search__brave_news_search and brave_web_search
  // MCP_REQUIRED: Brave Search MCP needed
  return [];
}

/**
 * MCP_REQUIRED: Jina recent web search
 * Requires mcp__jina__search_web
 */
async function jinaRecency(_topic, _limit = 25) {
  // TODO: Integrate mcp__jina__search_web with tbs='qdr:m' (last month)
  // MCP_REQUIRED: Jina MCP needed for time-scoped searches
  return [];
}

/**
 * MCP_REQUIRED: Semantic Scholar academic search
 * Requires mcp__semantic-scholar__search_papers
 * Only applicable for research-with-code category
 */
async function semanticScholar(_topic, _limit = 25) {
  // TODO: Integrate mcp__semantic-scholar__search_papers
  // MCP_REQUIRED: Semantic Scholar MCP needed; only for research-with-code category
  return [];
}

/**
 * BUG C: Source-family canonicalization (2026-05-28). GitHub source variants
 * (github-search, github-advanced, github-topic, github-dependents) must collapse
 * to a single family else convergence inflates.
 */
const FAMILY_CANON = {
  "github-search": "github",
  "github-advanced": "github",
  "github-topic": "github",
  "github-dependents": "github",
  "github-graph": "github",
  // Exa variants
  "exa-web": "exa",
  "exa-code": "exa",
  "exa-deep": "exa",
  // Tavily variants
  "tavily-basic": "tavily",
  "tavily-advanced": "tavily",
  "tavily-research": "tavily",
  // Jina variants
  "jina-web": "jina",
  "jina-arxiv": "jina",
  "jina-research": "jina",
};

/**
 * NOVEL 1: Calculate source trust — structured object with diversity dimensions
 * Prevents gaming via multiple sources of the same family
 */
function calculateSourceTrust(sources) {
  if (!sources || sources.length === 0) {
    return {
      family_count: 0,
      shannon_entropy: 0,
      freshness: null,
      type_weight: 0,
    };
  }

  // Count independent source families (e.g., GitHub-derived sources count as 1 family).
  // Canonicalize variants so github-search/github-advanced/etc. all map to "github".
  const familyMap = new Map();
  sources.forEach((src) => {
    let family = src.family || src.sources?.[0] || "unknown";
    // Apply canonicalization: if the family is in FAMILY_CANON, use its canonical form
    if (FAMILY_CANON[family]) {
      family = FAMILY_CANON[family];
    }
    if (!familyMap.has(family)) familyMap.set(family, 0);
    familyMap.set(family, familyMap.get(family) + 1);
  });

  // Shannon entropy: distribution evenness across families
  let entropy = 0;
  const totalSources = sources.length;
  familyMap.forEach((count) => {
    const p = count / totalSources;
    entropy -= p * Math.log2(p);
  });

  // Freshness: ISO date of most recent source
  const dates = sources
    .map((src) => {
      if (src.discovered_at) return new Date(src.discovered_at);
      return new Date(0);
    })
    .sort((a, b) => b - a);
  const freshnessDate = dates[0]?.toISOString?.()?.split("T")[0] || null;

  // Type-weight: authority score based on source type
  const typeWeights = { community: 0.2, awesome: 0.5, search: 0.3, graph: 0.8 };
  const typeWeight =
    sources.reduce((sum, src) => sum + (typeWeights[src.type] || 0.3), 0) / sources.length;

  return {
    family_count: familyMap.size,
    shannon_entropy: parseFloat(entropy.toFixed(2)),
    freshness: freshnessDate,
    type_weight: parseFloat(typeWeight.toFixed(2)),
  };
}

/**
 * Phase 2: Convergence aggregation (in-process, no API)
 * Deduplicates candidates and counts sources per canonical name
 */
function phase2Convergence(allResults) {
  const canonicalMap = new Map();

  allResults.forEach((batch) => {
    batch.forEach((candidate) => {
      const key = candidate.nameWithOwner.toLowerCase();
      if (!canonicalMap.has(key)) {
        canonicalMap.set(key, {
          nameWithOwner: candidate.nameWithOwner,
          sources: [],
          hint: candidate.hint,
        });
      }
      const entry = canonicalMap.get(key);
      if (!entry.sources.includes(candidate.sources[0])) {
        entry.sources.push(...candidate.sources);
      }
    });
  });

  // Soft-gate aligned (Codex MAJOR): do NOT drop low-star single-source repos here — that
  // contradicts rubric §1 (a low-star niche repo can be best-in-area). The convergence
  // ACTION cap (single family → STUDY) + triage Top-K bound volume downstream instead.
  return Array.from(canonicalMap.values()).map((candidate) => ({
    ...candidate,
    source_count: candidate.sources.length,
    source_list: candidate.sources,
    source_trust: calculateSourceTrust(candidate.sources.map((s) => ({ sources: [s] }))),
  }));
}

/**
 * Check GitHub API rate limit before batch operations
 * Appendix B.4: Rate-limit awareness query
 */
async function checkRateLimit() {
  const query = `
    query {
      rateLimit { remaining resetAt cost nodeCount }
    }
  `;
  const data = await executeGraphQL(query);
  return data.rateLimit;
}

/**
 * Appendix B.1: Stage-1 hard-filter batch query (10 candidates per 1 point)
 * Filters by: license, recency, substance, not archived, no honeypot, category-fit
 */
async function phase3HardFilter(candidates, scanCategory = null, retries = 3, delayMs = 1000) {
  if (!process.env.GH_TOKEN) {
    throw new Error("GH_TOKEN env var required for hard-filter phase");
  }

  // Check rate limit first
  const rateLimit = await checkRateLimit();
  const costPerBatch = 5; // Estimated cost per 10-candidate batch
  if (rateLimit.remaining < costPerBatch * 5) {
    const resetTime = new Date(rateLimit.resetAt);
    throw new Error(
      `GitHub API rate limit approaching. Remaining: ${rateLimit.remaining}. Resets at: ${resetTime.toISOString()}`,
    );
  }

  // B-6 FIX: Use repository(owner: $owner, name: $name) instead of fabricated node IDs
  // GitHub doesn't support batching by owner/name in a single query; process with concurrency
  const survivors = [];
  const batchSize = 8; // Limit concurrency to respect rate limits

  // Process candidates in concurrent batches
  for (let i = 0; i < candidates.length; i += batchSize) {
    const batch = candidates.slice(i, i + batchSize);

    // Execute queries in parallel with concurrency limit
    const batchResults = await Promise.all(
      batch.map((candidate) =>
        hardFilterSingleRepo(candidate, scanCategory, retries, delayMs).catch(() => null),
      ),
    );

    batchResults.forEach((result) => {
      if (result) survivors.push(result);
    });
  }

  return survivors;
}

/**
 * Hard-filter a single repository via GraphQL repository() query
 * Returns enriched candidate or null if filtered out
 */
async function hardFilterSingleRepo(candidate, scanCategory = null, retries = 3, delayMs = 1000) {
  const [owner, repo] = candidate.nameWithOwner.split("/");

  const query = `
    query HardFilterRepo($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        nameWithOwner
        isArchived
        isDisabled
        isMirror
        licenseInfo { spdxId }
        defaultBranchRef { target { ... on Commit { history(first:1) { totalCount } } } }
        pushedAt
        releases(first:1, orderBy:{field:CREATED_AT, direction:DESC}) { nodes { createdAt } }
        collaborators(first:1) { totalCount }
        object(expression:"HEAD:README.md") { ... on Blob { byteSize } }
        repositoryTopics(first:20) { nodes { topic { name } } }
      }
    }
  `;

  let nodeData;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const data = await executeGraphQL(query, { owner, name: repo });
      nodeData = data.repository;
      break;
    } catch (err) {
      if (attempt < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delayMs * 2 ** attempt));
      } else {
        throw err;
      }
    }
  }

  if (!nodeData) return null; // Repository not found

  // ===== SAFETY gates (HARD — any fail = REJECT, non-negotiable) =====
  // Gate S1: License (MIT/Apache-2.0/BSD-2/BSD-3/ISC/MPL-2.0; GPL only for code-library)
  const validLicenses = ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "MPL-2.0"];
  const spdxId = nodeData.licenseInfo?.spdxId || null;
  const category = candidate.category || candidate.score?.category || scanCategory || null;
  const gplOkForCodeLib = category === "code-library" && /^(?:L?GPL)/i.test(spdxId || "");
  if (!spdxId || (!validLicenses.includes(spdxId) && !gplOkForCodeLib)) {
    return null; // SAFETY REJECT: non-permissive license
  }
  // Gate S2: Not archived / disabled / mirror
  if (nodeData.isArchived || nodeData.isDisabled || nodeData.isMirror) {
    return null; // SAFETY REJECT: archived/disabled/mirror
  }

  // ===== QUALITY gates (SOFT — failures become flags, NEVER rejection) =====
  // Soft-gate change (2026-05-28): low-star niche repos with high engineering rigor
  // are valuable for pattern study; they must reach scoring, not die here. Quality
  // failures attach audit flags the decision engine weighs (and triage bounds volume).
  const now = new Date();
  const sixMonthsAgo = new Date(now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000);
  const nineMonthsAgo = new Date(now.getTime() - 9 * 30 * 24 * 60 * 60 * 1000);
  const pushedAt = nodeData.pushedAt ? new Date(nodeData.pushedAt) : null;
  const lastReleaseAt = nodeData.releases?.nodes?.[0]?.createdAt
    ? new Date(nodeData.releases.nodes[0].createdAt)
    : null;
  const stale = !(
    (pushedAt && pushedAt >= sixMonthsAgo) ||
    (lastReleaseAt && lastReleaseAt >= nineMonthsAgo)
  );

  const commitCount = nodeData.defaultBranchRef?.target?.history?.totalCount || 0;
  const contributorCount = nodeData.collaborators?.totalCount || 0;
  const releaseCount = nodeData.releases?.nodes?.length || 0;
  const minimalSubstance = !(commitCount >= 30 || contributorCount >= 3 || releaseCount >= 1);

  const weakCategoryFit = (nodeData.object?.byteSize || 0) === 0; // no README marker

  // SAFETY passed — keep candidate with QUALITY flags for the decision engine.
  return {
    ...candidate,
    safety: { passedUpstream: true, license: spdxId },
    quality: { stale, minimalSubstance, weakCategoryFit },
    hard_filter_metadata: {
      license: spdxId,
      commitCount,
      contributorCount,
      pushedAt,
    },
  };
}

/**
 * BLOCKER B-5 FIX: Phase 4: Score candidates using scoreRepo helper
 * Implements stage-2 rubric + dimension scoring
 * NOTE: Codex consensus and subagent dispatch deferred (requires MCP)
 */
async function phase4Score(candidates, category = "code-library", baseDir = process.cwd()) {
  const batchSize = 5; // Limit concurrency to respect API rate limits

  const scoredCandidates = [];

  // BUG A: Load inventory once to avoid repeated file I/O
  // Fail CLOSED — an empty fallback would silently disable objective gating in live
  // scans. config/stack-inventory.json is tracked; a load failure is real misconfig,
  // so stop loudly instead of mis-routing (CodeRabbit major).
  let inventory;
  try {
    inventory = loadStackInventory(baseDir);
  } catch (err) {
    throw new Error(
      `Cannot run scan: failed to load config/stack-inventory.json (required for gap-fit objective gating): ${err.message}`,
    );
  }

  // Process candidates in concurrent batches
  for (let i = 0; i < candidates.length; i += batchSize) {
    const batch = candidates.slice(i, i + batchSize);

    const batchScores = await Promise.all(
      batch.map(async (candidate) => {
        try {
          const [owner, repo] = candidate.nameWithOwner.split("/");
          const scoreResult = await scoreRepo({
            owner,
            repo,
            category: candidate.score?.category || category,
          });

          // Compute final score using blending helper
          const finalScore = computeFinalScore({
            rubric_score: scoreResult.rubric_score || 0,
            codex_score: scoreResult.codex_score || 0,
            source_count: candidate.source_count || 1,
            sourceTrust: candidate.source_trust || null,
          });

          // D10 provenance/trust overlay — computed from the GraphQL evidence scoreRepo
          // already fetched (stars/forks/commits), so the astroturf/fake-star gate fires in
          // the LIVE pipeline, not only in unit tests (Codex 2026-05-28).
          const provenance = assessProvenance({
            stars: scoreResult.evidence?.stars,
            forks: scoreResult.evidence?.forks,
            commits90d: scoreResult.evidence?.commits_90d,
          });

          // BUG A & B: Assess gap-fit (D11) and extract adoption_pathway (D3) for the
          // decision engine's objective-relevance gate and pathway veto.
          const gapFit = assessGapFit(candidate, inventory, { scanIntent: category });
          // Preserve the tri-state: undefined (unassessed) must NOT collapse to null, else
          // the D3 pathway veto wrongly caps every candidate in a real run (Codex ship-gate).
          const adoptionPathway = scoreResult.adoption_pathway;

          // Route to an action via the single decision engine. SAFETY was applied
          // in phase 3; quality flags + independent families feed the routing.
          const decision = routeDecision({
            score: finalScore,
            families: candidate.source_trust?.family_count ?? candidate.source_count ?? 1,
            category: scoreResult.category || category,
            dims: { ...(scoreResult.dimensions || {}), D9: scoreResult.niche_overlay_D9 },
            quality: candidate.quality || {},
            // SAFETY was verified in phase 3 (hard filter); pass it so routeDecision's
            // fail-closed INSTALL gate is satisfied for legitimately-filtered candidates.
            safety: candidate.safety || {},
            provenance,
            // BUG A: Gap-fit overlay wiring
            servesObjective: gapFit.servesObjective,
            marginalValue: gapFit.marginalValue,
            // BUG B: Adoption pathway (D3) veto
            adoptionPathway,
          });

          return {
            ...candidate,
            score: scoreResult,
            final_score: finalScore,
            action: decision.action,
            decision,
            phase4_status: "SCORED",
          };
        } catch (err) {
          // If scoring fails, mark as failed but continue
          console.warn(`Failed to score ${candidate.nameWithOwner}: ${err.message}`);
          return {
            ...candidate,
            phase4_status: "SCORE_FAILED",
            score_error: err.message,
            final_score: 0,
          };
        }
      }),
    );

    scoredCandidates.push(...batchScores);
  }

  return scoredCandidates;
}

/**
 * Main discovery function
 */
export async function discover({
  topic,
  category,
  limit = 30,
  budget: _budget = 10,
  sources: _sources = [],
  baseDir = process.cwd(),
}) {
  if (!topic) {
    throw new Error("topic required");
  }

  // Phase 1: Parallel fan-out
  const phase1 = await Promise.all([
    githubGraphQLSearch(topic, limit),
    githubGraphQLAdvanced(topic, limit),
    awesomeListCrawl([]),
    exaSemanticSearch(topic, limit),
    tavilyResearch(topic, limit),
    braveTriage(topic, limit),
    jinaRecency(topic, limit),
    semanticScholar(topic, limit),
  ]);

  // Phase 2: Convergence aggregation
  const phase2 = phase2Convergence(phase1);

  // Phase 3: Hard-filter batch
  const phase3 = await phase3HardFilter(phase2, category);

  // Phase 4: Stage-2 score + Codex consensus
  const phase4 = await phase4Score(phase3, category, baseDir);

  // Write inventory/scan-<ISO-ts>.md
  const timestamp = new Date().toISOString();
  const scanFileName = `inventory/scan-${timestamp.split("T")[0]}-${timestamp.split("T")[1].split(".")[0].replace(/:/g, "")}.md`;

  // TODO: Write scan output file with ranked recommendations

  return {
    candidates: phase4,
    scanFile: scanFileName,
  };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const topicIdx = args.indexOf("--topic");
  const categoryIdx = args.indexOf("--category");
  const limitIdx = args.indexOf("--limit");
  const budgetIdx = args.indexOf("--budget");

  const topic = topicIdx !== -1 ? args[topicIdx + 1] : null;
  const category = categoryIdx !== -1 ? args[categoryIdx + 1] : null;
  const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : 30;
  const budget = budgetIdx !== -1 ? parseInt(args[budgetIdx + 1], 10) : 10;

  if (!topic) {
    console.error(
      'Usage: node discover.mjs --topic "<topic>" [--category <category>] [--limit 30] [--budget 10]',
    );
    process.exit(1);
  }

  discover({ topic, category, limit, budget }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
