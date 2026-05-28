# Discovery Protocol

Event-driven, multi-source convergent fan-out discovery of SOTA candidates.

## Triggers (7 event types — no cron)

1. **Explicit query** — `/sota-research:find <topic>` or `node scripts/discover.mjs --topic <t>`
2. **Session-start delta-check** — when `.sota-watch.json` present, scan watched topics for additions since `last_seen`
3. **Backlog SOTA-replaceable event** — `deep-audit-backlog.md` adds replacement candidate
4. **Awesome-list delta event** — starred awesome-* README hash changed
5. **Pattern-decay event** — `patterns/<repo>/sota-distill.md` >90 days old
6. **Major-release event** — starred repo publishes vN.0
7. **Meta-research event** — rubric weight drift or outcome-tracking signal

## 4-Phase Fan-Out (parallel, convergent)

### Phase 1: Parallel breadth (8 sources, ~30s, ~$0.50-1.50)

Run 8 sources in parallel via `ctx_batch_execute concurrency=8`:

| # | Source | Tool | Use |
|---|---|---|---|
| 1 | GitHub topic+keyword | `mcp__github__search_repositories` + `gh CLI` | `topic:<t> stars:>50 pushed:>2025-11-28` |
| 2 | GitHub GraphQL advanced | `gh api graphql` | Filter by contributors, dependents, marker files (per A.1) |
| 3 | Awesome-list crawl | `mcp__firecrawl__firecrawl_scrape` | punkpeye/awesome-mcp-servers, hesreallyhim/awesome-claude-code, ComposioHQ/awesome-claude-skills + user-starred awesome-* |
| 4 | Semantic web search | `mcp__exa__web_search_exa` + `deep_researcher_start` | Concept-search, cross-repo convergence |
| 5 | Multi-step research | `mcp__tavily__tavily_research` (advanced mode) | Cross-source convergence, synthesis |
| 6 | Fast triage | `mcp__brave-search__brave_news_search` + `brave_web_search` | Blog posts, last-90d announcements |
| 7 | Recency web deep | `mcp__jina__search_web` (tbs=qdr:m) | Last-month deep, emerging patterns |
| 8 | Academic | `mcp__semantic-scholar__search_papers` | Research-with-code category only |

**GraphQL-first preference (per A.1):** use GH GraphQL for repo metadata whenever possible; more efficient than REST.

**Cost & timing:** ~$0.50-1.50 total, ~30s wall time (parallel).

### Phase 1b: Comprehensiveness expansion (12+ sources)

**Added 2026-05-28** (Codex item 5 + discovery-methodology convergence research). The 8-source
breadth is extended with three recall-boosting phases (~$1-2/scan, +10-20% candidate yield on hidden
gems and low-star ecosystem dependents):

| Phase | Technique | Sources |
|---|---|---|
| **2b** | **Dependency-graph snowball** | GitHub Dependency-Graph GraphQL — traverse `dependents()` from anchor repos (Anthropic Agent SDK, MCP SDK, top frameworks) to surface downstream repos with low stars but real usage. |
| **2c** | **MCP registry aggregation** | Official `registry.modelcontextprotocol.io` + PulseMCP (~16k hand-reviewed) + Smithery (~7k) + mcp.so (~20k) + glama.ai (tool-level search) — cross-dedup + blend curation signals. |
| **2d** | **Awesome-list delta-tracking** | ecosyste.ms (400+ lists) — weekly markdown diffs detect new inclusions 2–4 weeks before registry indexing. |

Supporting signals: libraries.io (reverse-dependency / SourceRank), OSSInsight + Trendshift (velocity
before star-saturation), grep.app MCP (real-world usage validation for L3), BuilderPulse (HN/Reddit
momentum). **Caveat (Codex Q5):** more sources inflate raw counts — so convergence is counted in
INDEPENDENT FAMILIES (Phase 2), not raw hits; registry mirrors/derivatives canonicalize to one family.

### Phase 2: Convergence aggregation (in-process, no API)

```javascript
// For each candidate name in union(phase-1 results):
const candidates = new Map(); // canonical → {sources: Set, score: number}

for (const result of phase1Results) {
  const canonical = resolveCanonical(result.repo); // follow redirects, find non-fork
  if (!candidates.has(canonical)) {
    candidates.set(canonical, { sources: new Set(), score: 0 });
  }
  candidates.get(canonical).sources.add(result.source);
}

// Drop weak signals: single-source candidates below threshold
const survivors = Array.from(candidates.entries())
  .filter(([canonical, data]) => {
    const sourceCount = data.sources.size;
    return sourceCount >= 2 || (sourceCount === 1 && preliminarySignal >= 70);
  })
  .map(([canonical, data]) => ({ repo: canonical, source_count: data.sources.size, sources: Array.from(data.sources) }));

// Calculate source_diversity_index (Shannon entropy per A.9):
const sourceFreq = new Map();
survivors.forEach(c => {
  c.sources.forEach(s => sourceFreq.set(s, (sourceFreq.get(s) || 0) + 1));
});
const totalMentions = survivors.reduce((sum, c) => sum + c.source_count, 0);
const entropy = Array.from(sourceFreq.values())
  .map(freq => {
    const p = freq / totalMentions;
    return -p * Math.log2(p);
  })
  .reduce((sum, e) => sum + e, 0);
const sourceDiv = entropy / Math.log2(8); // normalize to 0-1 across 8 sources
```

### Phase 3: Stage-1 hard filter (parallel GH metadata, ~15s, ~$0.10)

Fetch GH metadata in parallel (8 concurrent) for each phase-2 survivor:

**6 hard-filter gates** (per spec Section 2):
1. **License** — MIT/Apache-2.0/BSD-2/BSD-3/ISC/MPL-2.0 (GPL/LGPL only if category=code-library)
2. **Recency** — last commit ≤6mo OR last release ≤9mo (mature-utility exception: 2+yr stable with issue activity)
3. **Substance** — ≥30 lifetime commits OR ≥3 contributors OR ≥1 release
4. **Not archived/deprecated/read-only**
5. **Honeypot detection** (per A.8) — flag star spikes >50k/48h without commits; bot-author `(build-bot|ci-bot|auto-ci|pipeline-bot|@cdn-cgi)`
6. **Category-fit pre-check** — has ≥1 marker matching claimed category (MCP needs `mcp.json`, skill needs artifact, etc.)

Use GraphQL batch query (Appendix B.1) to fetch all 6 signals in one API call per ~10 candidates.

**Typical yield:** 20-30% of phase-2 survivors pass hard filter.

### Phase 4: Stage-2 score + parallel Codex consensus (~3-5 min for 10 candidates)

**Parallel subagents (sonnet, isolation=worktree, concurrency=5):**

Each subagent scores one candidate across 8 dimensions (D1-D8 per spec Section 2):
- Gather dimension evidence from authoritative sources
- Compute rubric_score = Σ (D_i * w_i) * 10 for category
- Return dimension_breakdown + evidence + sources used

**Parallel Codex consensus (simultaneous, NOT after stage-2):**

For each candidate: `codex exec --effort xhigh` (per [codex-consensus.md](./codex-consensus.md))
- Input: repomix(repo, ≤50KB) + README + last-10-commits + top-3-issues + source_list
- Output: codex_score (0-100) + verdict + novel_techniques + anti_patterns + adversarial_flags

**Conflict resolution:** if |codex_score - rubric_score| > 25, auto-fire `codex:codex-rescue` at xhigh effort with disagreement as input.

**Aggregate per candidate:**
```javascript
const convergenceFactor = 0.80 + Math.min(0.05 * sourceCount, 0.20); // 0.80 (1 src) → 1.00 (4+ srcs)
const finalRaw = 0.6 * (rubricScore * convergenceFactor) + 0.4 * codexScore;
// Post-blend convergence-trust caps (BLOCKER 3 fix). Authoritative formula in rubric.md Step D.
let final = finalRaw;
if (sourceCount === 1) final = Math.min(finalRaw, 80);
else if (sourceCount === 2) final = Math.min(finalRaw, 90);
final = Math.max(0, Math.min(100, final));
const decision = decisionThreshold(final, category, sourceCount);
```

## Output: inventory/scan-<timestamp>.md

Markdown with ranked recommendations, cost summary, and audit trail.

See [decision.md](./decision.md) for output format and side-effects.

## Example invocation

```bash
# Bootstrap discovery for MCP servers
node scripts/discover.mjs --topic "mcp-server" --category "mcp-server"

# Explicit query from CLI
/sota-research:find agent orchestration patterns

# Session-start delta check (if .sota-watch.json exists)
node scripts/discover.mjs --delta --watch-file .sota-watch.json
```

---

**See also:** [scoring.md](./scoring.md) (Stage-1/Stage-2 dimension details), [codex-consensus.md](./codex-consensus.md) (per-candidate review), [decision.md](./decision.md) (score-to-action routing)
