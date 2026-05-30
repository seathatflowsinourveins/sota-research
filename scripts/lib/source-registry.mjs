/**
 * scripts/lib/source-registry.mjs
 *
 * Phase-1 source registry + deterministic source selection for the LIVE multi-source discovery
 * fan-out (gap G1).
 *
 * Grounding (docs/research/convergence-2026-05-29-research-arch-grounding.md §Cross-source-patterns):
 *   - gpt-researcher `MCPToolSelector` is a TWO-TIER routing gate — an LLM relevance-ranker picks a
 *     top-k of tools by fit-to-query, but EVERY failure mode (no response, unparseable JSON, zero
 *     picks, exception) falls through to a DETERMINISTIC pattern-scored top-k
 *     (`_fallback_tool_selection`), guaranteed non-empty when any candidate matches.
 *     `selectSources()` IS that deterministic floor: the always-on backstop, so an LLM/provider
 *     outage upstream degrades SELECTIVITY rather than stalling or rejecting the scan.
 *   - RAG-MCP / MCP-Zero: tool discovery is semantic retrieval+RANK *before* the model sees them.
 *
 * Runtime split (architecture-runtime-model): this module is the PURE, testable scaffold. The
 * actual MCP calls (exa/tavily/jina/brave/semantic-scholar/github) are the `SKILL.md` WORKFLOW's
 * job — those MCPs exist only inside an interactive Claude Code session, not in a headless script.
 * The workflow runs `selectSources()` (deterministic floor), MAY LLM-rerank on top, queries the
 * selected sources, and normalizes every result through `normalizeCandidate()` (added in F2) into
 * the uniform candidate shape `phase2Convergence()` consumes. The engine stays authoritative; the
 * soft-gate is untouched (selection orders breadth, it never rejects a candidate).
 */

/** Relevance weights — deterministic and explainable (no learned/opaque scoring). */
const CATEGORY_WEIGHT = 2;
const TOPIC_HINT_WEIGHT = 1;
const BASELINE_FLOOR = 0.5; // github is the always-present non-empty floor

const ALL_CATEGORIES = [
  "mcp-server",
  "agent-framework",
  "agent-orchestration-pattern",
  "research-agent",
  "skill-pack",
  "hook-toolkit",
  "awesome-list",
  "code-library",
  "research-with-code",
];

/**
 * The phase-1 source registry — METADATA only (no `fn`/liveness; that lives in discover.mjs's
 * PHASE1_SOURCES, the headless-script surface). Each source maps to ONE independent convergence
 * `family` (engine variants fold to it — see canonicalSourceFamily), the `categories` it is strong
 * for, and `topicHints` that boost it. `baseline:true` marks the guaranteed selection floor.
 *
 * Names align 1:1 with discover.mjs PHASE1_SOURCES so the workflow can map a selected source to
 * its in-script stub / live MCP call.
 */
export const SOURCE_REGISTRY = [
  {
    name: "github-search",
    family: "github",
    kind: "code",
    baseline: true,
    categories: ALL_CATEGORIES,
    topicHints: [],
  },
  {
    name: "github-advanced",
    family: "github",
    kind: "code",
    categories: ["mcp-server", "agent-framework", "code-library", "hook-toolkit", "skill-pack"],
    topicHints: ["dependents", "contributors", "ecosystem"],
  },
  {
    name: "exa",
    family: "exa",
    kind: "web-semantic",
    categories: [
      "mcp-server",
      "agent-framework",
      "agent-orchestration-pattern",
      "research-agent",
      "code-library",
      "skill-pack",
      "hook-toolkit",
    ],
    topicHints: ["semantic", "pattern", "framework", "concept", "technique"],
  },
  {
    name: "tavily",
    family: "tavily",
    kind: "web-research",
    categories: ALL_CATEGORIES,
    topicHints: ["research", "compare", "overview", "guide", "survey"],
  },
  {
    name: "brave-search",
    family: "brave",
    kind: "web-news",
    categories: ["mcp-server", "agent-framework", "code-library"],
    topicHints: ["news", "latest", "release", "2026", "recent"],
  },
  {
    name: "jina",
    family: "jina",
    kind: "web-academic",
    categories: ["research-with-code", "research-agent", "agent-orchestration-pattern"],
    topicHints: ["arxiv", "paper", "recent", "preprint"],
  },
  {
    name: "semantic-scholar",
    family: "semantic-scholar",
    kind: "academic",
    categories: ["research-with-code", "research-agent"],
    topicHints: ["paper", "citation", "arxiv", "survey", "research", "benchmark"],
  },
  {
    name: "awesome-list",
    family: "external-aggregator",
    kind: "aggregator",
    categories: ["awesome-list"],
    topicHints: ["awesome", "curated", "list", "catalog"],
  },
];

/**
 * Score one source's relevance to (topic, category): category fit + matched topic hints + the
 * baseline floor. Deterministic and explainable — `reason` records why it ranked where it did
 * (the workflow logs this, mirroring gpt-researcher's selection_reasoning).
 * @returns {{relevance:number, reason:string}}
 */
function scoreSource(source, topicLc, category) {
  let relevance = source.baseline ? BASELINE_FLOOR : 0;
  const reasons = [];
  if (source.baseline) reasons.push("baseline-floor");
  if (category && source.categories.includes(category)) {
    relevance += CATEGORY_WEIGHT;
    reasons.push(`category:${category}`);
  }
  const hits = source.topicHints.filter((h) => topicLc.includes(h));
  if (hits.length > 0) {
    relevance += hits.length * TOPIC_HINT_WEIGHT;
    reasons.push(`hints:${hits.join(",")}`);
  }
  return { relevance, reason: reasons.join("; ") || "no-direct-fit" };
}

/**
 * Deterministically rank the phase-1 sources by fit-to-(topic, category) and return them in
 * priority order. `maxSources` caps breadth (budget) — the gpt-researcher selectivity cap.
 *
 * @param {string} topic
 * @param {string|null} [category]
 * @param {{maxSources?:number, registry?:object[]}} [opts]
 * @returns {{name:string, family:string, relevance:number, reason:string}[]}
 */
export function selectSources(
  topic,
  category = null,
  { maxSources, registry = SOURCE_REGISTRY } = {},
) {
  const topicLc = String(topic || "").toLowerCase();

  const ranked = registry
    .map((source, index) => {
      const { relevance, reason } = scoreSource(source, topicLc, category);
      return {
        name: source.name,
        family: source.family,
        baseline: !!source.baseline,
        relevance,
        reason,
        index,
      };
    })
    // Stable sort: relevance desc, ties broken by registry order (fully deterministic).
    .sort((a, b) => b.relevance - a.relevance || a.index - b.index);

  let selected = ranked;
  if (Number.isInteger(maxSources) && maxSources > 0 && maxSources < ranked.length) {
    const head = ranked.slice(0, maxSources);
    // Floor guarantee: if the cap excluded every baseline source, swap the lowest-ranked head slot
    // for the highest-ranked baseline. Selectivity must never drop the always-on backstop — that is
    // the whole point of the deterministic floor (an outage degrades breadth, never empties it).
    if (!head.some((s) => s.baseline)) {
      const floor = ranked.find((s) => s.baseline);
      if (floor) head[head.length - 1] = floor;
    }
    selected = head;
  }

  // Strip internal fields (baseline/index) from the public shape.
  return selected.map(({ name, family, relevance, reason }) => ({
    name,
    family,
    relevance,
    reason,
  }));
}
