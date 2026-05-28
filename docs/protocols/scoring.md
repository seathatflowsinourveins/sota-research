# Scoring Protocol

Two-stage rubric: Stage-1 hard filter → Stage-2 8-dimension scoring + OpenSSF Scorecard.

## Stage-1 Hard Filter (6 gates — no API calls)

Applied in [discovery.md](./discovery.md) Phase 3. Any gate failure → REJECT.

1. **License** — MIT/Apache-2.0/BSD-2/BSD-3/ISC/MPL-2.0 (LGPL/GPL only for code-library)
2. **Recency** — last commit ≤6mo OR last release ≤9mo (mature-utility exception: 2+yr stable with issue activity)
3. **Substance** — ≥30 lifetime commits OR ≥3 contributors OR ≥1 release
4. **Not archived/deprecated/read-only** — `isArchived=false`, `isMirror=false`, `isDisabled=false`
5. **Honeypot/bot-author detection (per A.8)** — reject if:
   - Star spike >50k/48h without commits
   - Commit author email matches `/(build-bot|ci-bot|auto-ci|pipeline-bot|@cdn-cgi)/i`
6. **Category-fit pre-check** — has ≥1 type-specific marker:
   - MCP: `mcp.json` OR stdio transport file
   - Skill: `skill.md` OR Claude plugin artifact
   - Agent: agent entry point + orchestration pattern
   - etc.

## Stage-2: 8 Dimensions (each 0-10, scored in parallel)

| # | Dimension | What it measures | Primary source | Backup |
|---|---|---|---|---|
| D1 | Stars (log10) | log10(stars+1) normalized to 0-10. 100★→2.0, 1k→3.0, 10k→4.0, 100k→5.0 | `mcp__github` stargazerCount | gh CLI |
| D2 | Maintenance velocity | 90d commits + merged PRs, median issue response time, contributor diversity | `mcp__github` history + PR stats | gh CLI |
| D3 | Claude Code runtime fit | MCP/skill/agent/hook/plugin artifacts; `claude-code` topic; mentions in README/docs | `mcp__github__search_code` + repomix | grep on clone |
| D4 | Code quality (50% our signals + 50% OpenSSF Scorecard per A.2) | CI workflows, tests, coverage badge, linter, dependabot, README depth, type defs | `mcp__github` tree + file contents; `api.scorecard.dev` | file inspection |
| D5 | Ingestion friendliness | Size (1-50MB sweet spot), repomix token estimate, markdown/wiki presence | `npx repomix --dry-run` | `mcp__github` object size |
| D6 | Adoption signal | Fork-to-star ratio (~0.10-0.20 healthy), dependents, "used by", npm/pypi downloads, publisher concentration risk (per A.3) | `mcp__github` + npm/pypi APIs | WebFetch registry pages |
| D7 | Conceptual novelty | New pattern vs reimplementation. Cross-ref `inventory/installed.md` + `patterns/` via ctx_search | Local `ctx_search` | grep inventory |
| D8 | Community consensus | HN+Reddit+X mentions 90d, awesome-list cross-mentions, star velocity 30d | `brave_news_search` + `jina qdr:m` + firecrawl + exa | tavily research |

### MCP routing table (where to fetch each dimension)

```javascript
const dimensionSources = {
  D1: { primary: "mcp__github", field: "stargazerCount", backup: "gh CLI" },
  D2: { primary: "mcp__github", queries: ["history", "pullRequests", "issues"], backup: "gh CLI" },
  D3: { primary: "mcp__github__search_code + repomix", query: "claude-code OR mcp OR skill OR agent", backup: "filesystem grep" },
  D4: {
    primary: "mcp__github (tree + file contents) + api.scorecard.dev",
    scorecard: "gh api /repos/{owner}/{repo}/scorecard OR fetch api.scorecard.dev/repos/github.com/{owner}/{repo}",
    backup: "WebFetch README"
  },
  D5: { primary: "npx repomix --dry-run (token estimate)", backup: "mcp__github object size" },
  D6: { primary: "mcp__github (forks, dependents) + npm/pypi registries", backup: "WebFetch package page" },
  D7: { primary: "ctx_search(inventory/installed.md, patterns/)", backup: "grep" },
  D8: { primary: "brave_news_search + jina + firecrawl + exa", backup: "tavily_research" }
};
```

### OpenSSF Scorecard integration (D4 sub-signal)

**Per A.2:** D4 = 0.5 × our internal quality signals + 0.5 × OpenSSF Scorecard (0-100).

Query Scorecard:
```bash
# Option A: via gh CLI (requires repo access)
gh api /repos/{owner}/{repo}/scorecard

# Option B: direct API (public repos only)
curl https://api.scorecard.dev/projects/github.com/{owner}/{repo}
```

Scorecard includes 18+ checks (CI, dependabot, signed-commits, code-review, etc.). **Caveat (per A.2, A.9):** Goodhart-prone — some checks measure feature adoption, not actual security. Use as ONE signal only.

## Score blending formula

```javascript
// Compute category-specific rubric score
rubric_score = Σ (D_i * w_i_for_category) * 10;  // 0-100

// Convergence trust modulation (per spec Section 2)
convergence_factor = 0.80 + Math.min(0.05 * source_count, 0.20);
// 1 source → 0.80
// 2 sources → 0.85
// 3 sources → 0.90
// 4+ sources → 1.00

// Codex consensus score (0-100, from codex-consensus.md)
codex_score = codex_verdict_0_100;

// Final score (blend rubric + codex)
const final_raw = 0.6 * (rubric_score * convergence_factor) + 0.4 * codex_score;

// Post-blend convergence-trust caps (BLOCKER 3 fix per Codex review 2026-05-28).
// Authoritative formula lives in rubric.md Step D.
// Without these caps, a strong codex_score can push single-source candidates past 80,
// violating the "single-source caps at 80" rule.
let final_score = final_raw;
if (source_count === 1) final_score = Math.min(final_raw, 80);       // demotes to STUDY tier
else if (source_count === 2) final_score = Math.min(final_raw, 90);  // demotes to INSTALL-LITE/STUDY tier
final_score = Math.max(0, Math.min(100, final_score));               // clamp to [0,100]
```

## Default thresholds (per-query override allowed)

| Score range | Default action | Ingestion |
|---|---|---|
| ≥90 | INSTALL-FULL | L1 + L1.5 (if >10k files) + L2 + L3 |
| 80-89 | INSTALL-LITE (skill/MCP) OR STUDY (frameworks/libs) | L1 + L1.5 (if >10k files) + L2 |
| 70-79 | STUDY | L1 + L1.5 (if >10k files) |
| 60-69 | REFERENCE | L1 only |
| 40-59 | WATCH (re-eval in 90d OR on next major release) | — |
| <40 | REJECT (logged with reason) | — |

**Per-query override example:**
```bash
node scripts/discover.mjs --topic "trading-stack" --min-score 85 --min-sources 3
# Raises bar: ≥85 AND ≥3 sources required for INSTALL
```

## Logging format (inventory/scan-<ts>.md)

```markdown
# Scan: <topic> @ <ISO-8601 timestamp>

## Metadata
- Sources fired: 8 (skipped: <list if any>)
- Phase-1 candidates: N
- Phase-2 after convergence: N
- Phase-3 hard-filter yield: N
- Phase-4 scored: N
- Cost: $X.XX phase-1 + $X.XX phase-3 + $X.XX phase-4 = $XX.XX total

## Recommendations (sorted by final_score desc)
| Score | Action | Repo | Sources | D1-D8 breakdown | Codex | Rationale |
|---|---|---|---|---|---|---|
| 91 | INSTALL-FULL | owner/repo | 5 | [8,9,7,8,8,7,9,8] | 88 | Novel MCP impl, strong community signal |
| 84 | STUDY | owner/repo | 4 | [6,8,8,7,7,8,7,6] | 82 | Solid framework, needs deeper eval |
...

## Source diversity index (per A.9)
Shannon entropy: 0.82 (range 0-1, 1 = uniform distribution across all 8 sources)
Interpretation: discovery reached high source diversity; low risk of single-source bias.
```

---

**See also:** [discovery.md](./discovery.md) (how dimensions are gathered), [codex-consensus.md](./codex-consensus.md) (codex_score computation), [decision.md](./decision.md) (score-to-action mapping)
