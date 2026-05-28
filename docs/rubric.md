# SOTA Research Rubric

Master evaluation framework for scoring and ranking SOTA candidates across 9 categories. All candidates passing stage-1 hard filter are scored on 8 dimensions (D1–D8), blended with Codex consensus, and routed to action (INSTALL-FULL / STUDY / WATCH / REJECT).

## 1. Stage-1 Gate — SAFETY (hard) vs QUALITY (soft)

Applied before dimension scoring. **Reconciled 2026-05-28** (Codex GPT-5.5 adversarial review): the
old "6 hard gates, any fail = REJECT" wrongly killed low-star, niche-but-excellent repos *before*
their novelty (D7), Claude-Code fit (D3), or niche-excellence (D9) was ever scored. The gate is now
split into SAFETY (hard) and QUALITY (soft). Implemented in `scripts/lib/decision.mjs`
(`safetyVeto`, `qualityFlags`) and applied in `scripts/discover.mjs` phase 3.

### SAFETY gates — HARD (any fail = immediate REJECT, non-negotiable)

| Gate | Criterion | Logic |
|---|---|---|
| **License** | Permissive OSS | MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC, MPL-2.0. LGPL/GPL only for `code-library`. REJECT if proprietary, Commons Clause, or SSPL. |
| **Not archived** | Active status | `isArchived=false` AND `isDisabled=false` AND `isMirror=false`. |
| **Malware / honeypot confirmed** | Supply-chain safety (per A.8) | REJECT only on **confirmed** indicators: verified-malicious package, honeypot fingerprint, megalodon-risk match. |

### QUALITY signals — SOFT (failures become audit flags, NEVER auto-REJECT)

Quality no longer gates. Each failure attaches a flag that feeds scoring + triage; a candidate
failing these can still route to STUDY/REFERENCE via the escape hatch (§4) when it scores high on
D7/D3/D9. This is the "a low-star repo can be best-in-area" rule, made operational.

| Signal | Criterion | On failure |
|---|---|---|
| **Recency** | last commit ≤6mo OR release ≤9mo (mature-utility exception: 2+yr stable + active issues) | flag `recency:stale` → informs D2 |
| **Substance** | ≥30 commits OR ≥3 **distinct commit-authors** OR ≥1 release | flag `substance:minimal` |
| **Category-fit** | ≥1 defining marker for the claimed category (e.g. `mcp.json`, `SKILL.md`) | flag `category-fit:weak` → informs D3 |
| **Bot-author dominance** | per A.8 (`/(build-bot\|ci-bot\|auto-ci\|pipeline-bot\|@cdn-cgi)/`) | flag `risk:bot-author-dominant` — a **risk SIGNAL, not a veto** (Codex: many healthy repos use automation; only confirmed bot-dominance + other indicators escalates to a safety review) |

**Volume bounding (Codex Q1):** because QUALITY no longer rejects, candidate volume is bounded by
**triage, not rejection** — SAFETY-pass candidates enter a priority queue ranked by preliminary
signal + source-family diversity + category need; only **Top-K per category/source-family per scan**
get deep scoring + ingestion. The remainder are `WATCH`/backlog — bounded, never silently dropped.

---

## 2. Eight Dimensions (D1–D8)

Each dimension scores 0–10 (no fractional scoring; round to nearest integer). Combine via weighted sum per category profile.

### D1: Stars (GitHub popularity signal)

**Definition:** Raw GitHub star count normalized to 0–10 scale via log₁₀.

**Scoring:** 
- 0–10 stars → 0
- 10–100 stars → 1 + (log₁₀(stars) − 1) × 0.5 ≈ 1–2
- 100–1k stars → 2–3
- 1k–10k stars → 3–4
- 10k–100k stars → 4–5
- 100k–1M stars → 5–6
- 1M+ stars → 6–10 (rare; GitHub's scale maxes near 400k)

**Primary source:** `mcp__github:get_repository_metadata(stars)` or `gh api repos/:owner/:repo --jq '.stargazers_count'`

**Backup source:** GitHub GraphQL `stargazerCount` field

**Notes:** Stars are a **lagging indicator** of trust but noisy for new repos and astroturfed projects. D1 is weighted lowest in most categories (0.05–0.10) to avoid over-trusting popularity.

---

### D2: Maintenance Velocity

**Definition:** Activity rate + responsiveness indicators. How active is the repo right now?

**Scoring criteria (0–10):**
- **0–2:** No commits in 6+ months, or only automated commits (dependabot, renovate).
- **3–4:** Commits every 3–6 months, slow PR merge times (30+ days), no issue triage.
- **5–6:** Monthly commits, PRs merged in 2–3 weeks, issue response ≥1 per month.
- **7–8:** Weekly commits, PRs merged in days, issues triaged within week.
- **9–10:** Daily+ commits, immediate PR reviews, proactive issue engagement.

**Composite calculation (0–10 scale):**
```
v = (0.4 × commits_90d_normalized) 
  + (0.3 × median_pr_merge_days_reciprocal) 
  + (0.2 × issue_response_rate) 
  + (0.1 × contributor_diversity)
```

**Primary source:** `mcp__github` GraphQL: `defaultBranchRef.target.history(first:100)`, `pullRequests(states:MERGED, first:30)`, `issues(states:OPEN|CLOSED, first:20)`

**Backup source:** `gh CLI` with `gh api repos/:owner/:repo/commits/--paginate --limit=100`

**Notes:** D2 is weighted high (0.15–0.30) because maintenance velocity is the strongest predictor of usability.

---

### D3: Claude Code Runtime Fit

**Definition:** Compatibility with Claude Code's runtime (MCP plugins, skills, hooks, agents, orchestration patterns).

**Scoring criteria (0–10):**
- **0–2:** No Claude Code integration points; unrelated to AI agents or developer tools.
- **3–4:** Mentioned once in context of Claude or has vague MCP compatibility.
- **5–6:** Native Claude Code skill / hook / MCP, OR agent that works with Claude, OR clear bridge.
- **7–8:** Actively maintained Claude Code artifact (skill pack, hook toolkit) with documentation.
- **9–10:** Official or reference implementation for Claude Code ecosystem feature.

**Primary source:** `mcp__github:search_code("claude-code" OR "mcp" OR "claude skill", repo=candidate)` + README parse for markers + `repomix` text search

**Backup source:** Filesystem grep on cloned repo for `mcp.json`, `SKILL.md`, hook references, Claude mentions.

**Notes:** D3 is **category-specific weighted** — highest for MCP servers (0.30), skill packs (0.30), hook toolkits (0.30); lowest for awesome-lists (0.05), code-libraries (0.05).

---

### D4: Code Quality

**Definition:** Internal code hygiene: testing, linting, types, documentation, CI/CD maturity.

**Sub-scoring (split 50/50):**

**A) OpenSSF Scorecard (50% of D4):** 
- Query `api.scorecard.dev/projects/github.com/:owner/:repo` (free, public API).
- Returns 18 automated security checks (branch protection, fuzzing, pinned-deps, signed-releases, token-permissions, dependency-check, etc.).
- Raw score 0–10. Caveat (per A.2): Scorecard measures GitHub process features, not guarantees security. Use as one signal.

**B) Our own signals (50% of D4):**
| Metric | 0–2 pts | 3–5 pts | 6–8 pts | 9–10 pts |
|---|---|---|---|---|
| CI/CD workflow | None | Basic (one job) | Comprehensive (lint+test+build) | Matrix + coverage reporting |
| Test coverage | <30% OR none | 30–60% | 60–80% | >80% + coverage badge |
| Dependency mgmt | Manual OR outdated | Dependabot/Renovate active | Security alerts on | Proactive patch lane |
| Types/contracts | Untyped OR minimal | JSDoc / type hints | Full TypeScript OR native types | Types + strict mode + tests |
| README depth | Minimal (1 paragraph) | Basic (setup + one example) | Full (architecture + examples) | Excellent (linked docs + ADR) |

**Aggregation:** 
```
d4_score = 0.5 × (openssf_raw / 10) + 0.5 × (our_signals_sum / 10)
```

**Primary sources:**
- `api.scorecard.dev` (OpenSSF direct)
- `mcp__github:get_repository_tree + get_file_contents` for CI workflow, README depth, language files
- `mcp__github:search_code("coverage" OR "test" OR "spec")` for test marker files
- `dependabot.yml` or renovate config presence

**Backup source:** Filesystem inspection post-clone.

**Notes:** D4 is weighted medium-to-high (0.15–0.25) as code quality predicts long-term maintainability.

---

### D5: Ingestion Friendliness

**Definition:** How easily can we consume this repo's knowledge? Size, structure, documentation density.

**Scoring criteria (0–10):**
- **0–2:** Immense (>500 MB), no docs, binary-heavy, minified.
- **3–4:** Large (100–500 MB), sparse README, multi-language.
- **5–6:** Medium (20–100 MB), decent README, one or two primary languages.
- **7–8:** Small (1–20 MB), rich markdown/docs, clear code structure.
- **9–10:** Tiny (<1 MB) OR beautifully documented with architecture guides.

**Composite (0–10 scale):**
```
v = (0.5 × size_score) + (0.3 × markdown_density) + (0.2 × code_clarity)
```

**Primary source:** `npx repomix --dry-run <repo>` returns byte estimate + file tree; parse for markdown files + code comments.

**Backup source:** GitHub API file tree + size metadata.

**Notes:** D5 is weighted high for **research-agent** (0.20) and **agent-orchestration-pattern** (0.25) because codebase readability is critical for learning; low for **awesome-lists** (0.05) since they are metadata, not code.

---

### D6: Adoption Signal

**Definition:** Real-world usage: dependents, "used by" claims, fork-to-star ratio, package-registry downloads.

**Scoring criteria (0–10):**
- **0–2:** No dependents, zero downloads, fork-to-star ratio <0.01 (hoarded).
- **3–4:** <5 dependents, <100 downloads/month, fork ratio 0.01–0.03 (niche).
- **5–6:** 5–20 dependents, 100–1k downloads/month, fork ratio 0.05–0.15 (healthy).
- **7–8:** 20–50 dependents, 1k–10k downloads/month, fork ratio 0.15–0.25 (strong).
- **9–10:** 50+ dependents, 10k+ downloads/month, fork ratio 0.20–0.35, cited in papers (mainstream).

**Composite (0–10 scale):**
```
v = (0.4 × dependents_normalized) 
  + (0.4 × downloads_normalized) 
  + (0.2 × fork_ratio_score)
```

**Publisher concentration risk (behavioral overlay for npm/pypi candidates):**
Single-publisher concentration + high downloads = supply-chain risk (per A.3: axios case).
If `publisher_count==1` AND `weekly_downloads > 100k`: flag in audit trail; cap adoption score at 6.

**Primary sources:**
- `mcp__github:get_repository_metadata(forkCount, watchers, mentionableUsers)`
- npm: `https://api.npmjs.org/downloads/point/last-month/:package` OR `https://registry.npmjs.org/:package` → `downloads` field
- PyPI: `https://pypistats.org/api/packages/:package/recent` → `data.last_day`
- "used by" search via GitHub GraphQL `repositoryDependencies(first:50)`

**Backup source:** firecrawl or jina on npm/pypi pages.

**Notes:** D6 is weighted high for **agent-framework** (0.20) and **skill-pack** (0.20) — proven adoption is a trust signal. For research-with-code, D6 is lower (0.10) because academic novelty beats user count.

---

### D7: Conceptual Novelty

**Definition:** Does this repo present a genuinely new technique, pattern, or approach vs. reimplementing known work?

**Scoring criteria (0–10):**
- **0–2:** Strict clone or minor fork of established tool (e.g., tenth gpt-researcher port).
- **3–4:** Reimplementation with marginal tweaks or additional UI layer.
- **5–6:** Addresses known problem with slightly different approach; clear improvement over prior art.
- **7–8:** Novel technique or synthesis of existing techniques in a new way; cited or forked by follow-ups.
- **9–10:** Genuinely new pattern / breakthrough / first-of-kind; shapes subsequent work in the field.

**Evaluation steps:**
1. Check local `inventory/installed.md` for existing candidate in same category.
2. `ctx_search` local `patterns/` corpus for similar approaches.
3. GitHub GraphQL `mentionedIn(first:10)` for forks and external references.
4. Codex verdict on novelty (combined with stage-2 review).

**Primary source:** Local context search + GitHub fork/reference graph

**Backup source:** Manual archival research (academic citations, Twitter/HN mention threads).

**Notes:** D7 is **highest-weighted for plan-by-files** (0.25), research-agents (0.20), research-with-code (0.25) — truly novel patterns are rare and valuable. Low for awesome-lists (0.05) since curation ≠ novelty.

---

### D8: Community Consensus

**Definition:** External signals: discussions, endorsements, news coverage, cross-mentions, velocity of adoption in the wild.

**Scoring criteria (0–10):**
- **0–2:** No external mentions; zero discussion.
- **3–4:** Mentioned once or twice in blogs/tweets; small community.
- **5–6:** Regular mentions (5–10 in past 90d), 1–2 awesome-list inclusions, modest HN/Reddit activity.
- **7–8:** Active discussion (10+ mentions in 90d), 3–5 awesome-list inclusions, trending on HN or featured in major publication.
- **9–10:** Viral adoption signal (trending 30d+), 5+ awesome-list inclusions, sustained media/analyst coverage.

**Composite (0–10 scale):**
```
v = (0.4 × awesome_list_mentions) 
  + (0.3 × last_90d_web_mentions) 
  + (0.2 × star_velocity_30d) 
  + (0.1 × avg_sentiment_if_available)
```

**Primary sources:**
- Awesome-list crawl: `mcp__firecrawl` on punkpeye/awesome-mcp-servers, hesreallyhim/awesome-claude-code, ComposioHQ/awesome-claude-skills, etc.
- Web mentions (90d): `mcp__brave-search:brave_news_search(candidate repo name, tbs=qdr:m)` + `mcp__jina:search_web(tbs=qdr:m)`
- Star velocity: GitHub GraphQL `stargazers(first:100, orderBy:{field:STARRED_AT, direction:DESC})` → count from 30d ago.

**Backup source:** `mcp__tavily:tavily_research` for multi-angle convergence; `mcp__exa:web_search_exa` for semantic mention detection.

**Notes:** D8 is **lowest-weighted for most categories** (0.05–0.10) **EXCEPT awesome-lists (0.35)**, because community signals can be gamed. However, complete absence of mention is a yellow flag.

---

### D9: Niche Excellence — CONDITIONAL OVERLAY (not a weighted dimension)

**Added 2026-05-28.** Per Codex review (Q3), D9 is **not** part of the 8-dimension weighted sum — it
overlaps D4/D5 and would dilute D3 (which must dominate for MCP/skill). Instead it is a bounded
**overlay** powering the decision escape hatch (§4): it lets a low-star, high-craft repo reach STUDY
for pattern study even when its aggregate score is low.

**Definition (0–10):** specialized engineering rigor of a focused repo —
ADR/RFC/`ARCHITECTURE.md` present (+2); type coverage >80% (+2); test coverage >80% (+2); focused
single-purpose scope + actionable errors (+2); low technical debt / zero unowned TODOs (+2).

**Use (NOT a weight):** `D9 ≥ 8` (+ SAFETY pass) floors the action to **STUDY** (REFERENCE if D4<5).
It never raises a tier to INSTALL — only score + convergence + human review can. Implemented in
`scripts/lib/decision.mjs` `overrideFloor`. Marker/tree-sitter automation is a P2 backlog item; until
then D9 is supplied as agent evidence.

---

### Evidence contract (decision-grade scoring)

**Added 2026-05-28** (Codex P0: scoring was "optimistic theater" while D3–D8 were faked `=5`). Every
dimension score MUST carry evidence; absent evidence the dimension is **`null`, never a fabricated
constant**. `scripts/score.mjs` computes D1 (stars) and D2 (velocity) from GraphQL and takes D3–D9 as
agent-supplied evidence; the rubric score is computed **only over evidenced dimensions** and reported
with a `coverage` fraction. Low coverage → low score (not fake precision) → cannot reach an INSTALL
tier. Each evidence item should record `{value, source, timestamp, confidence}`.

**Status-tagged, freshness-weighted findings (debias — added 2026-05-28).** Negative/security findings
additionally carry `status` (`open`|`fixed`|`closed`|`deprecated`|`confirmed`) and a `date`. A
**FIXED/closed/deprecated finding counts ZERO weight** — a since-fixed issue must never veto a verdict
(the systemic generalization of the `playwright-mcp` over-rejection bias). An unconfirmed claim older
than ~90 days is discounted unless high-authority (OpenSSF, official audit). Implemented in
`scripts/lib/decision.mjs` `assessSecurityFromEvidence` → consumed by `routeDecision`. This makes the
"freshness wins; neither optimism nor skepticism by default" rule executable, not aspirational.

---

## 3. Score Blending Formula

Combine rubric score (0–100), convergence trust factor, and Codex consensus (0–100) into final score (0–100).

### Step A: Calculate Rubric Score

```
rubric_score = Σ(D_i * w_i) × 10    [0–100]
```

Where:
- `D_i` = dimension i score (0–10)
- `w_i` = weight for dimension i in the candidate's category (sum to 1.00)
- `× 10` normalizes (0–1) sum to (0–100) range

Example: MCP server with D1=2, D2=7, D3=9, D4=6, D5=5, D6=4, D7=6, D8=3:
```
= (2×0.05 + 7×0.20 + 9×0.30 + 6×0.15 + 5×0.05 + 4×0.10 + 6×0.10 + 3×0.05) × 10
= (0.1 + 1.4 + 2.7 + 0.9 + 0.25 + 0.4 + 0.6 + 0.15) × 10
= 6.5 × 10 = 65
```

### Step B: Calculate Convergence Trust Factor

**Counted in INDEPENDENT SOURCE FAMILIES, not raw source hits** (Codex Q5): registry mirrors and
awesome-list derivatives of one origin canonicalize to a single family, so they cannot inflate trust.
Computed by `calculateSourceTrust` (→ `family_count`) in `scripts/discover.mjs`; consumed by
`scripts/lib/blend.mjs`. (Authoritative implementation lives in `blend.mjs`; this is its spec.)

```
families = |{independent source FAMILIES that named this candidate}|
convergence_factor = 0.80 + min(0.05 × families, 0.20)

  families = 1 → 0.85
  families = 2 → 0.90
  families = 3 → 0.95
  families ≥ 4 → 1.00
```

### Step C: Get Codex Consensus Score

Codex GPT-5.5 xhigh reviews the candidate (parallel to stage-2 rubric scoring) and returns `codex_score` (0–100).

### Step D: Blend

```
final_score_raw = 0.6 × (rubric_score × convergence_factor) + 0.4 × codex_score

# Apply convergence-trust SCORE caps (post-blend) — by INDEPENDENT families.
# Belt-and-suspenders with the ACTION cap in decision.mjs (Codex Q4: caps apply to
# BOTH score and final action, so a strong codex_score cannot smuggle a single-family
# candidate into an install tier).
IF families <= 1: final_score = min(final_score_raw, 80)
ELIF families == 2: final_score = min(final_score_raw, 90)
ELSE:              final_score = final_score_raw

# Clamp to [0,100]
final_score = max(0, min(100, final_score))
```

This weights the rubric-derived score at 60% and Codex at 40%, with convergence trust applied at two layers:
- **Inline** as `convergence_factor` multiplier on the rubric half (rewards multi-source via the gradient)
- **Post-blend cap** preventing high single-source scores from sneaking past the trust gate via a strong Codex verdict alone

Without the post-blend cap, `rubric=100, codex=100, src=1` would yield `0.6×(100×0.80) + 0.4×100 = 88` — which would violate the "single-source caps at 80" rule. With the cap, that combo correctly returns 80, demoting the candidate to STUDY tier where the convergence weakness can be flagged.

### Conflict Resolution

If `|codex_score − rubric_score| > 25`: Auto-fire `codex:codex-rescue` at xhigh effort with both scores as input. Record both verdicts in scan output for auditability.

---

## 4. Decision Model — multi-factor routing (not a single linear threshold)

**Upgraded 2026-05-28** (Codex EVOLVE verdict). The base tier comes from the blended score, but the
final action is produced by an ordered pipeline implemented in `scripts/lib/decision.mjs`
(`routeDecision`). Per-query threshold override still allowed.

**Base tier (from final score):**

| Final Score | Base tier | Notes |
|---|---|---|
| ≥90 | INSTALL-FULL | requires ≥4 families + human review (caps below) |
| 80–89 | INSTALL-LITE (mcp/skill/hook) OR STUDY (else) | category-aware |
| 70–79 | STUDY | L1+L2 ingest, re-eval 60d |
| 60–69 | REFERENCE | L1 only |
| 40–59 | WATCH | re-eval 90d / next major release |
| <40 | REJECT | log reason; no re-eval 6mo |

**Pipeline order** (each step strictly after the previous):

```
hard SAFETY veto → blended score (family-score-capped) → base tier
  → override FLOOR (raise, capped at STUDY) → convergence ACTION cap (lower)
  → late security demotion (lower) → claim-freshness gate → objective-relevance gate
  → FAIL-CLOSED safety (no INSTALL tier without verified safety)
```

**(a) Override FLOORS** — monotonic, capped at STUDY, **never produce an INSTALL tier** (Codex Q2):
- `D7≥7 AND D3≥7 AND D1<3` → floor **STUDY** (novelty + Claude-Code fit beat low popularity)
- `D9≥8` (niche overlay) → floor **STUDY** (high-craft niche repo)
- `D2<5 AND D4≥8 AND D7≥7` → floor **REFERENCE** (stale but valuable static pattern)
- **Conflict rule:** if `D4<5` or an open critical security finding, novelty/niche floors drop to
  REFERENCE (not STUDY) — weak quality must not be promoted by novelty alone.

**(b) Convergence ACTION cap** by independent families (Codex Q4 — applies to the *action*, not just
the score):
- families ≥4 → INSTALL-FULL allowed | =3 → max INSTALL-LITE
- families =2 → max INSTALL-LITE (manual review required) | ≤1 → max STUDY

**(c) Late security demotion** — SCOPED, not blanket (the `playwright-mcp` lesson):
- open critical vuln → cap at REFERENCE regardless of score
- mitigated, opt-in risk (e.g. an off-by-default RCE tool) → INSTALL-FULL → **INSTALL-LITE
  (config-gated)**, not REJECT
- driven by `assessSecurityFromEvidence` (status-tagged, freshness-weighted): a FIXED/closed finding
  counts ZERO weight; a stale unconfirmed claim is discounted.

**(d) Claim-freshness gate** (Codex 2026-05-28) — an INSTALL verdict may NOT rest on an issue / release
/ security claim that wasn't refreshed against its source object THIS run. Stale-but-embedded issue
numbers are the residual bias even a *debiased* reconciler carries; if install-affecting claims are
unrefreshed, cap at STUDY (`claimFreshnessGate`). **Marginal-value rule:** discount a candidate that
merely duplicates an already-installed tool — score on marginal lift vs the existing stack, not
absolute features (prevents shiny-but-redundant installs, e.g. a token-optimizer when `context-mode` +
`RTK` are already installed).

All INSTALL tiers set `review_required=true` (convergence-cycle Phase 1 human gate before any runtime
install).

---

## 5. Convergence-Trust Modulation

**Single-source cap:** Candidates named by only 1 discovery source cannot exceed 80 final score, regardless of dimension quality. Demote one action tier.

**Example:** A candidate scores 85 on rubric + 82 on Codex, but was only found by GitHub topic search (1 source):
```
convergence_factor = 0.80
final = 0.6 × (85 × 0.80) + 0.4 × 82 = 0.6 × 68 + 0.4 × 82 = 40.8 + 32.8 = 73.6
Action: STUDY (not 80-89 tier)
```

**Source diversity bonus:** If `source_count ≥ 5`, optionally promote one tier after Codex review.

**Audit metric:** Track `source_diversity_index` (Shannon entropy across 8 discovery sources) in scan output. Encourages multi-angle discovery.

---

## 6. D4 Code Quality Sub-Scoring Detail

### OpenSSF Scorecard Integration

**Query method:**
```bash
curl https://api.scorecard.dev/projects/github.com/<owner>/<repo>/scorecard.json
```

Returns 18 checks with scores 0–10 each:
- `Binary-Artifacts`, `Branch-Protection`, `CI-Tests`, `CII-Best-Practices`, `Code-Review`, `Contributors`, `Dangerous-Workflow`, `Dependency-Check-By-Tool`, `Fuzzing`, `License`, `Maintained`, `Packaging`, `Pinned-Dependencies`, `SAST`, `Secret-Scanning`, `Signed-Releases`, `Token-Permissions`, `Vulnerabilities`

**Clamping:** 
- Scorecard uses 0–10 scale internally but may return up to 10 via aggregation.
- For D4A, cap at 10 and normalize: `d4_scorecard = min(raw / 10, 1.0) × 10`.

### Our Own Signals (D4B)

Sum the following (each 0–2):
- **CI/CD maturity** (2 pts) — GitHub workflow files present, multi-job matrix, coverage reporting
- **Test coverage** (2 pts) — 80%+ measured coverage + badge, OR >60% if badge-less
- **Dependency management** (2 pts) — Dependabot or Renovate active, <30 day outdated deps
- **Types / contracts** (2 pts) — Full TypeScript OR native types + strict mode
- **README quality** (2 pts) — Architecture section + multiple examples + linked documentation

**Aggregation:**
```
d4_our_signals_score = min(sum_of_5_signals, 10)
d4_final = 0.5 × (scorecard_raw / 10 × 10) + 0.5 × (our_signals_score / 10 × 10)
```

Simplifies to: `d4_final = 0.5 × scorecard_score + 0.5 × our_signals_score` (both on 0–10 scale).

---

## 7. Behavioral Risk Overlay (D6 Supplement)

For package-ecosystem candidates (npm, PyPI), overlay a supply-chain risk check per Appendix A.3 (axios case).

**Formula:**
```
publisher_risk = single_publisher_count × log10(weekly_downloads + 1)
```

**Thresholds:**
- publisher_risk > 50,000 → **RED flag**, cap D6 at 6, note in scan output
- publisher_risk 20,000–50,000 → **YELLOW flag**, cap D6 at 7, monitor
- publisher_risk < 20,000 → **GREEN**, no cap

**Example:** npm package with 1 publisher, 100k weekly downloads:
```
risk = 1 × log10(100001) = 1 × 5.0 = 5.0 (GREEN)
```

axios case (compromised): 1 publisher, 5M weekly downloads:
```
risk = 1 × log10(5000001) = 1 × 6.7 = 6.7 (RED) → cap D6 at 6, WATCH recommendation
```

---

## Weight Profiles by Category

See `docs/categories/*.md` for full details per category. Each category has its own profile table showing D1–D8 weights (must sum to 1.00).

Summary table (all profiles):

| Category | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | Example seed |
|---|---|---|---|---|---|---|---|---|---|
| **MCP server** | 0.05 | 0.20 | **0.30** | 0.15 | 0.05 | 0.10 | 0.10 | 0.05 | gitnexus |
| **Agent framework** | 0.05 | **0.25** | 0.15 | 0.10 | 0.10 | **0.20** | 0.05 | 0.10 | ruvnet/ruflo |
| **Agent orch. pattern** | 0.05 | 0.10 | 0.05 | 0.10 | **0.25** | 0.10 | **0.25** | 0.10 | openai/swarm |
| **Research agent** | 0.05 | 0.15 | 0.10 | 0.10 | **0.20** | 0.10 | **0.20** | 0.10 | assafelovic/gpt-researcher |
| **Skill pack** | 0.05 | 0.15 | **0.30** | 0.10 | 0.05 | **0.20** | 0.05 | 0.10 | addyosmani/agent-skills |
| **Hook toolkit** | 0.05 | 0.15 | **0.30** | **0.20** | 0.05 | 0.10 | 0.10 | 0.05 | disler/claude-code-hooks |
| **Awesome-list** | 0.05 | **0.30** | 0.05 | 0.05 | 0.05 | 0.10 | 0.05 | **0.35** | punkpeye/awesome-mcp-servers |
| **Code library** | **0.10** | 0.20 | 0.05 | **0.25** | 0.05 | **0.20** | 0.10 | 0.05 | yamadashy/repomix |
| **Research-with-code** | 0.05 | 0.10 | 0.05 | 0.15 | **0.20** | 0.10 | **0.25** | 0.10 | DeerFlow (ByteDance) |

---

## Summary

- **Stage-1 filter** protects against low-quality, abandoned, or unsafe candidates.
- **8 dimensions** assess popularity, health, fit, quality, ingestion cost, usage, novelty, and consensus.
- **Category-specific weights** reflect strategic priorities (e.g., code-quality for hooks, ingestion-ease for research agents).
- **Convergence trust** ensures multi-source validation; single-source candidates top out at 80.
- **Codex consensus** provides independent review and conflict resolution.
- **Final score** blends rubric + Codex with explicit formula.
- **Behavioral overlays** flag supply-chain risks for package-ecosystem candidates.

See individual category docs for application examples and anti-patterns.
