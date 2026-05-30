import { randomUUID } from "node:crypto";
import { computeFinalScore } from "./lib/blend.mjs";
import { pathwayFromCategory } from "./lib/d3-pathway.mjs";
import { compareByDecision, routeDecision } from "./lib/decision.mjs";
import { appendDecisions, buildDecisionRecord, writeScanMarkdown } from "./lib/decision-log.mjs";
import { assessGapFit, loadStackInventory } from "./lib/gap-fit.mjs";
import { ghGraphQL } from "./lib/gh-graphql.mjs";
import { assessProvenance } from "./lib/provenance.mjs";
import { selectSources } from "./lib/source-registry.mjs";
import { scoreRepo } from "./score.mjs";

// M-1: Use secure ghGraphQL helper instead of shell-based executeGraphQL
const executeGraphQL = ghGraphQL;

/**
 * Appendix B.3: Search-by-topic GitHub GraphQL query
 * Returns candidates from GitHub with basic metadata
 */
async function githubGraphQLSearch(topic, limit = 25) {
  // Clamp `limit` to a bounded int before interpolating it into the GraphQL document (GitHub
  // search caps `first` at 100). Defense-in-depth: never interpolate an unbounded/non-numeric
  // value into a query string (code-review S2).
  const first = Math.max(1, Math.min(100, Number.parseInt(limit, 10) || 25));
  const query = `
    query Search($q: String!, $cursor: String) {
      search(query: $q, type: REPOSITORY, first: ${first}, after: $cursor) {
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
 * R9 (anti-astroturf): canonicalize a candidate's IDENTITY before convergence counting.
 *
 * A repo and its forks / mirrors / registry-derivatives are the SAME origin and must NOT
 * each contribute an independent identity (or family) — otherwise a single project mirrored
 * across registries fakes multi-source convergence. We fold to the canonical origin using
 * CANDIDATE-SUPPLIED evidence (`canonical` > `forkOf` > `mirrorOf`), normalized lowercase.
 *
 * Deeper resolution (a GitHub redirect-follow / parent-of-fork GraphQL lookup) is a
 * WORKFLOW-SIDE concern — this stays a pure, cheap normalization (no network call).
 *
 * @param {{nameWithOwner:string, canonical?:string, forkOf?:string, mirrorOf?:string}} candidate
 * @returns {string} the lowercased canonical "owner/repo" key
 */
export function canonicalIdentity(candidate = {}) {
  const origin =
    candidate.canonical || candidate.forkOf || candidate.mirrorOf || candidate.nameWithOwner || "";
  return String(origin).toLowerCase();
}

/**
 * Source families that all derive from the SAME upstream origin and therefore must collapse
 * to ONE independent family (Codex Q5 / rubric §3): GitHub-derived angles are one family;
 * external AGGREGATORS (awesome-lists, registry badges) are a single `external-aggregator`
 * family that can never ALONE satisfy the ≥3/≥4 convergence bar.
 */
const GITHUB_FAMILY = new Set(["github-search", "github-advanced", "github", "github-graphql"]);
const AGGREGATOR_FAMILY_PATTERN = /awesome|registry|badge|curated-list|mcp-list/i;

// F3 (live multi-source fan-out): fold a search ENGINE's tool-variants (e.g. exa-web/exa-code,
// tavily-basic, jina-arxiv, brave-news) to ONE independent family, so a single engine queried via
// multiple tools cannot fake multi-source convergence (R9 anti-astroturf — the pattern-based
// counterpart to main's deferred FAMILY_CANON map). Anchored `^engine\b` (start + word boundary)
// so a similarly-prefixed unrelated source (e.g. "example") never false-folds to "exa".
const ENGINE_FAMILIES = [
  { family: "exa", pattern: /^exa\b/ },
  { family: "tavily", pattern: /^tavily\b/ },
  { family: "jina", pattern: /^jina\b/ },
  { family: "brave", pattern: /^brave\b/ },
  { family: "semantic-scholar", pattern: /^(?:semantic-?scholar|s2)\b/ },
];

/** Map a raw source label to its canonical INDEPENDENT family. */
export function canonicalSourceFamily(source) {
  const s = String(source || "unknown").toLowerCase();
  if (GITHUB_FAMILY.has(s)) return "github";
  if (AGGREGATOR_FAMILY_PATTERN.test(s)) return "external-aggregator";
  for (const { family, pattern } of ENGINE_FAMILIES) {
    if (pattern.test(s)) return family;
  }
  return s;
}

/**
 * R9: count INDEPENDENT source families from raw source labels — GitHub-derived angles fold
 * to one family, and ALL external aggregators fold to a single `external-aggregator` family
 * (so an aggregator-only candidate can never alone reach ≥3/≥4). This is the family count the
 * decision engine's convergence ACTION cap consumes.
 *
 * @param {string[]} sources
 * @returns {number}
 */
export function countIndependentFamilies(sources = []) {
  const families = new Set();
  for (const src of sources) families.add(canonicalSourceFamily(src));
  return families.size;
}

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

  // Count independent source families. R9: fold GitHub-derived angles to one family and ALL
  // external aggregators to a single `external-aggregator` family (canonicalSourceFamily), so
  // mirrors/registry badges of one origin can never inflate the convergence count.
  const familyMap = new Map();
  sources.forEach((src) => {
    const raw = src.family || src.sources?.[0] || "unknown";
    const family = canonicalSourceFamily(raw);
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
 * Deduplicates candidates and counts sources per CANONICAL identity.
 *
 * R9 (anti-astroturf): the dedup key is the CANONICAL ORIGIN (canonicalIdentity), so a repo
 * and its forks/mirrors/registry-derivatives collapse to ONE candidate before family-counting
 * — a single project mirrored across registries can no longer fake multi-source convergence.
 * Family counting itself folds GitHub-derived angles to one family and all aggregators to a
 * single `external-aggregator` family (calculateSourceTrust → canonicalSourceFamily).
 */
export function phase2Convergence(allResults) {
  const canonicalMap = new Map();

  allResults.forEach((batch) => {
    batch.forEach((candidate) => {
      const key = canonicalIdentity(candidate);
      if (!canonicalMap.has(key)) {
        // Preserve the original casing when NO fold happened (key == lowercased self); only
        // switch the displayed identity to the canonical origin when a fork/mirror folded in.
        const folded = key !== String(candidate.nameWithOwner || "").toLowerCase();
        canonicalMap.set(key, {
          nameWithOwner: folded ? key : candidate.nameWithOwner,
          sources: [],
          hint: candidate.hint,
        });
      }
      const entry = canonicalMap.get(key);
      // Per-source Set-union (S1 correctness): add EACH source the candidate carries that isn't
      // already accumulated. The prior guard keyed only on sources[0] then pushed the whole array,
      // which (a) dropped the rest when sources[0] was already present and (b) duplicated a later
      // source when sources[0] was new. Iterating per-source folds in every distinct source once.
      for (const src of candidate.sources || []) {
        if (!entry.sources.includes(src)) entry.sources.push(src);
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
 * R3: derive the objective-relevance + adoption-pathway inputs the decision engine already
 * consumes but never received in the live pipeline. Maps a candidate against the stack
 * inventory (gap-fit → servesObjective / marginalValue) and its category → adoption pathway.
 * Pure + exported so bootstrap.mjs gates identically (no engine<->workflow drift).
 *
 * @param {object} candidate - { nameWithOwner, hint?, category?, score?, fillsGapId?, duplicatesOf?, ... }
 * @param {object} inventory - parsed config/stack-inventory.json (or {} when unavailable)
 * @param {object} [opts] - { scanIntent?, category? }
 * @returns {{servesObjective:boolean, marginalValue:string, adoptionPathway:(string|null), gapFit:object}}
 */
export function deriveDecisionInputs(
  candidate = {},
  inventory = {},
  { scanIntent = "", category = null } = {},
) {
  const keywords = [
    ...(candidate.hint?.topics || []),
    ...String(candidate.hint?.description || "")
      .split(/\s+/)
      .filter(Boolean),
  ];
  const gapFit = assessGapFit(
    {
      name: candidate.nameWithOwner,
      keywords,
      fillsGapId: candidate.fillsGapId,
      duplicatesOf: candidate.duplicatesOf,
      outOfScope: candidate.outOfScope,
      enhancesLayer: candidate.enhancesLayer,
      betterThanInstalled: candidate.betterThanInstalled,
    },
    inventory,
    { scanIntent },
  );
  const adoptionPathway = pathwayFromCategory(
    category || candidate.category || candidate.score?.category,
  );
  return {
    servesObjective: gapFit.servesObjective,
    marginalValue: gapFit.marginalValue,
    adoptionPathway,
    gapFit,
  };
}

/**
 * BLOCKER B-5 FIX: Phase 4: Score candidates using scoreRepo helper
 * Implements stage-2 rubric + dimension scoring
 * NOTE: Codex consensus and subagent dispatch deferred (requires MCP)
 */
async function phase4Score(
  candidates,
  category = "code-library",
  { baseDir = process.cwd(), scanIntent = "" } = {},
) {
  const batchSize = 5; // Limit concurrency to respect API rate limits

  const scoredCandidates = [];

  // Load the stack inventory ONCE. Fail CLOSED — config/stack-inventory.json is tracked, so a
  // load failure is real misconfig; an empty {} fallback would silently disable objective gating
  // in a live scan (CodeRabbit major / ship-gate). R3: this feeds gap-fit (D11) →
  // objectiveRelevanceGate. Guards the scan precondition, NOT a candidate verdict (soft-gate intact).
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

          // R3: derive the objective-relevance + adoption-pathway inputs the engine already
          // consumes but never received — flipping objectiveRelevanceGate (gap-fit / marginal
          // value) and d3PathwayVeto ("degree of adaptness") from no-ops to live gates.
          const di = deriveDecisionInputs(candidate, inventory, {
            scanIntent,
            category: scoreResult.category || category,
          });

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
            servesObjective: di.servesObjective,
            marginalValue: di.marginalValue,
            adoptionPathway: di.adoptionPathway,
          });

          return {
            ...candidate,
            score: scoreResult,
            final_score: finalScore,
            action: decision.action,
            decision,
            provenance_trustTier: provenance?.trustTier ?? null,
            servesObjective: di.servesObjective,
            marginalValue: di.marginalValue,
            adoptionPathway: di.adoptionPathway,
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
 * R4-safe (honest source run-status): the SINGLE source of truth for the 8 phase-1 angles.
 *
 * Each descriptor pairs a stable family `name` with `live` (does the IN-SCRIPT function
 * actually query its source this run?) and the `fn` itself. ONLY `github-search` is live
 * in-script today; the other 7 are MCP/workflow-only stubs that return `[]`. Live multi-source
 * fan-out (Exa/Tavily/Brave/Jina/Firecrawl/Semantic-Scholar) is the WORKFLOW LAYER's job — the
 * MCPs exist only inside an interactive Claude Code session, not in this headless script.
 *
 * CRITICAL (GPT-5.5 trap): stubs MUST keep returning `[]` (NOT `{status:'NOT_RUN'}`) — a
 * status object inside a candidate batch would break `phase2Convergence`'s `batch.forEach`.
 * Run-status is therefore recorded in a SEPARATE `sourceStatus` channel (see `discover()`),
 * so a reader knows a low `family_count` means "only 1 source ran", not "low quality".
 */
export const PHASE1_SOURCES = [
  { name: "github-search", live: true, fn: githubGraphQLSearch },
  { name: "github-advanced", live: false, fn: githubGraphQLAdvanced },
  { name: "awesome-list", live: false, fn: awesomeListCrawl },
  { name: "exa", live: false, fn: exaSemanticSearch },
  { name: "tavily", live: false, fn: tavilyResearch },
  { name: "brave-search", live: false, fn: braveTriage },
  { name: "jina", live: false, fn: jinaRecency },
  { name: "semantic-scholar", live: false, fn: semanticScholar },
];

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
  persist = false, // explicit opt-in: the CLI entrypoint persists; library callers don't write by default
  maxSources, // optional cap on phase-1 source breadth (budget); the github floor always survives
}) {
  if (!topic) {
    throw new Error("topic required");
  }

  // F4: rank the phase-1 sources by fit-to-(topic, category) BEFORE querying (RAG-MCP / MCP-Zero:
  // retrieve+rank before the model sees them). selectSources is the deterministic FLOOR — github
  // always survives, so the fan-out never empties even on a relevance miss. The SKILL.md WORKFLOW
  // follows this same plan to call the REAL MCP sources (exa/tavily/jina/brave/semantic-scholar);
  // in this headless script only the `live` in-script fns produce data (the rest return []).
  const sourcePlan = selectSources(topic, category, { maxSources });
  const plannedNames = new Set(sourcePlan.map((s) => s.name));

  // Phase 1: Parallel fan-out over the SELECTED sources (relevance-ranked, budget-bounded). Every
  // source returns an ARRAY of candidates (stubs return []) — never a status object — so
  // phase2Convergence's batch.forEach is safe (GPT-5.5 trap). Run-status is tracked SEPARATELY.
  const phase1 = await Promise.all(
    PHASE1_SOURCES.filter((s) => plannedNames.has(s.name)).map((s) => s.fn(topic, limit)),
  );

  // R4-safe: honest source run-status in a SEPARATE channel (NOT inside the candidate arrays).
  // A source RAN only if it is a `live` in-script source AND was selected this scan; the rest are
  // NOT_RUN (a stub, or de-selected by relevance). This tells a reader that a low family_count
  // reflects "only 1 source ran" (currently just github-search), not low quality. The real
  // non-GitHub MCP calls are the WORKFLOW layer's job — surfaced via sourcePlan on the return.
  const sourceStatus = PHASE1_SOURCES.map((s) => ({
    source: s.name,
    status: s.live && plannedNames.has(s.name) ? "RUN" : "NOT_RUN",
  }));

  // Phase 2: Convergence aggregation
  const phase2 = phase2Convergence(phase1);

  // Phase 3: Hard-filter batch
  const phase3 = await phase3HardFilter(phase2, category);

  // Phase 4: Stage-2 score + Codex consensus (R3: pass baseDir for the stack inventory +
  // the topic as scanIntent so gap-fit prioritizes against the user's stated objective).
  const phase4 = await phase4Score(phase3, category, { baseDir, scanIntent: topic });

  // R6: rank by the engine verdict so scan-<ts>.md, decisions.jsonl, and the returned list are
  // ordered by what the pipeline DECIDED (action → score → coverage → marginal value), not by
  // batch order or source appearance-count. SCORE_FAILED candidates (no action) sort last.
  phase4.sort((a, b) =>
    compareByDecision(
      {
        action: a.action,
        score: a.final_score,
        coverage: a.score?.coverage,
        marginalValue: a.marginalValue,
      },
      {
        action: b.action,
        score: b.final_score,
        coverage: b.score?.coverage,
        marginalValue: b.marginalValue,
      },
    ),
  );

  // R1 (2026-05-29 convergence wiring): persist the decision envelopes + a human-readable
  // scan markdown so the self-improvement loop (outcome.mjs), audit trail, and comparison
  // corpus stop being data-starved. The SAFETY/QUALITY soft-gate verdict already lives on
  // each candidate.decision; this just makes it durable. baseDir keeps tests + CI isolated.
  const timestamp = new Date().toISOString();
  const scanFileName = `inventory/scan-${timestamp.split("T")[0]}-${timestamp.split("T")[1].split(".")[0].replace(/:/g, "")}.md`;

  // C2 provenance: ONE run_id per scan (ISO timestamp + a short random suffix) so every
  // decisions.jsonl record from this run shares it; decision_id (runId::repo) is unique per repo.
  // Cross-run dedup is the consumer's job (deferred calibration) — this just stamps the lineage.
  const runId = `${timestamp}-${randomUUID().slice(0, 8)}`;

  const decisions = phase4
    .filter((c) => c?.decision?.action)
    .map((c) =>
      buildDecisionRecord({
        repo: c.nameWithOwner,
        category: c.score?.category || category,
        finalScore: c.final_score,
        decision: c.decision,
        dims: { ...(c.score?.dimensions || {}), D9: c.score?.niche_overlay_D9 },
        coverage: c.score?.coverage ?? null,
        provenanceTrustTier: c.provenance_trustTier ?? null,
        servesObjective: c.servesObjective ?? null,
        marginalValue: c.marginalValue ?? null,
        adoptionPathway: c.adoptionPathway ?? null,
        runId,
      }),
    );

  let decisionsFile = null;
  if (persist) {
    decisionsFile = appendDecisions(decisions, { baseDir }).file;
    writeScanMarkdown(decisions, { baseDir, scanFile: scanFileName, topic });
  }

  return {
    candidates: phase4,
    scanFile: scanFileName,
    decisionsFile,
    decisions,
    sourceStatus,
    sourcePlan,
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

  discover({ topic, category, limit, budget, persist: true }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
