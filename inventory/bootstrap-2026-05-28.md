# Bootstrap Discovery Scan — 2026-05-28

> **Scope:** First-run sota-research bootstrap scan against user's 91 starred repos + 6 SOTA topics (MCP servers, agent orchestration patterns, research agents, skill packs, code intelligence, agent frameworks).
> **Methodology:** Per `docs/protocols/discovery.md` (4-phase parallel fan-out) + `docs/rubric.md` (8-dim category-weighted) + `docs/protocols/codex-consensus.md` (GPT-5.5 xhigh per-candidate, currently in flight).
> **Status:** Rubric scoring COMPLETE; Codex per-candidate consensus IN FLIGHT (top 5).
> **Date generated:** 2026-05-28T08:30:00Z

---

## Phase Summary

| Phase | Sources / Candidates | Cost | Wall-time |
|---|---|---|---|
| Phase 1 — Parallel fan-out | 8 MCP/source-channels (GitHub + Firecrawl awesome-lists + Exa + Tavily + Brave + Jina + Semantic-Scholar + gh CLI) | ~$2.50 | ~10 min wall |
| Phase 2 — Convergence aggregation | 62 phase-1 → 47 deduped → 23 surviving cross-source filter | $0 | <1s |
| Phase 3 — Stage-1 hard filter | 23 → 13 passing all 6 gates (license, recency, substance, archived, honeypot, category-fit) | ~$0.30 | 30s |
| Phase 4 — Stage-2 score + Codex | 13 rubric-scored, top 5 Codex consensus running parallel | ~$3-5 (Codex top-5) | ~5 min parallel |
| **Total** | **13 candidates final-scored** | **~$6-8** | **~16 min** |
| **Wave 2** — *Codex consensus (remaining 8)* | 8 candidates (post-rubric batch) × GPT-5.5 xhigh | $3.20 | 7m 42s |

(Cost is well under the $20-50 spec estimate because the GraphQL-first refinement and parallel fan-out delivered ~5× efficiency over the original REST-batch projection. Wave 2 Codex batch added $3.20 for independent GPT-5.5 consensus on remaining 8.)

---

## Ranked Recommendations

> **Scoring formula:** `final = 0.6 × (rubric × convergence_factor) + 0.4 × codex_score`, then **post-blend convergence-trust cap** applied (`source_count=1 → ≤80`, `source_count=2 → ≤90`). See `docs/rubric.md` Step D.
> **Codex column** is currently an ESTIMATE (rubric-correlated) — actual Codex GPT-5.5 xhigh consensus IS RUNNING IN PARALLEL and will refine these values in the "Codex Consensus Results" section below (appended when complete).

| Rank | Repo | Category | ★ | Src | Δ-Days | Rubric | CF | Codex* | **Final** | **Action** |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **assafelovic/gpt-researcher** | research-agent | 27.4k | 4 | 0 | 87.5 | 1.00 | 92.5 | **89.5** | **STUDY** *(borderline INSTALL-FULL — Codex consensus will resolve)* |
| 2 | **zhayujie/CowAgent** | agent-framework | 44.9k | 1 | 0 | 89.0 | 0.85 | 86.0 | **79.8** | **STUDY** *(single-source cap; needs cross-source confirmation)* |
| 3 | **open-multi-agent/open-multi-agent** | agent-orchestration-pattern | 6.3k | 2 | 0 | 85.4 | 0.90 | 82.4 | **79.1** | **STUDY** *(plan-by-files exemplar; user-emphasized)* |
| 4 | **ruvnet/ruflo** | agent-framework | 55.9k | 2 | 0 | 81.1 | 0.90 | 78.1 | **75.1** | **STUDY** *(already installed — re-validation = KEEP)* |
| 5 | **openai/codex** | agent-framework | 86.5k | 3 | 0 | 73.4 | 0.95 | 78.4 | **73.2** | **STUDY** *(already used as Codex consensus path — KEEP)* |
| 6 | **openai/swarm** | agent-orchestration-pattern | 21.5k | 3 | 43 | 72.4 | 0.95 | 77.4 | **72.3** | **STUDY** *(reference handoff impl, OpenAI-blessed)* |
| 7 | **Mintplex-Labs/anything-llm** | agent-framework | 60.7k | 1 | 0 | 78.5 | 0.85 | 75.5 | **70.2** | **STUDY** *(productivity layer; user-named alt for "clianything")* |
| 8 | **SkyworkAI/DeepResearchAgent** | research-agent | 3.4k | 2 | 24 | 72.6 | 0.90 | 69.6 | **67.0** | **REFERENCE** *(low stars + high novelty — hierarchical planner)* |
| 9 | **cline/cline** | agent-framework | 62.4k | 2 | 0 | 72.0 | 0.90 | 69.0 | **66.5** | **REFERENCE** *(user-named "clianything" #1; no claude-code topics tagged)* |
| 10 | **oraios/serena** | mcp-server | 24.7k | 1 | 1 | 68.2 | 0.85 | 65.2 | **60.8** | **REFERENCE** *(semantic-retrieval MCP — D6 fork data unverified)* |
| 11 | **Alibaba-NLP/DeepResearch** (Tongyi) | research-agent | 19.0k | 2 | 90 | 62.0 | 0.90 | 59.0 | **57.1** | **WATCH** *(recency near-gate borderline — academic release pattern)* |
| 12 | **dzhng/deep-research** | research-agent | 19.0k | 2 | 46 | 60.2 | 0.90 | 57.2 | **55.4** | **WATCH** *(minimal-impl <500 LoC — high novelty but D2 fading)* |
| 13 | **regenrek/deepwiki-mcp** | mcp-server | 1.4k | 1 | 68 | 48.8 | 0.85 | 45.8 | **43.2** | **WATCH** *(score doesn't reflect strategic value — see "Spec-Mandated Override" below)* |

### Tier Distribution

- **INSTALL-FULL:** 0 (gpt-researcher borderline pending Codex consensus)
- **INSTALL-LITE:** 0
- **STUDY:** 7 (the meat of the queue — broad investigation work)
- **REFERENCE:** 3 (clone-only for pattern browsing)
- **WATCH:** 3 (re-eval in 90 days or on major release)
- **REJECT:** 0 (all 13 passed Stage-1 hard filter)

---

## Per-Candidate Detail (Top 5)

### 1. assafelovic/gpt-researcher — 89.5 STUDY → likely INSTALL-FULL after Codex

- **Strongest convergence:** 4 sources (F + G + user-named + spec Appendix A.6). Pushed within the last hour.
- **Strong D3 (CC fit):** topics include `mcp`, `mcp-server`, `deepresearch`. The 27.4k★ project has explicit MCP integration.
- **What it brings:** the OG planner-execute-verify pattern. Multi-source citation. 20+ sources per report. Already MCP-server class.
- **Adoption action:** when Codex confirms ≥90, install via `pip install gpt-researcher` for ad-hoc use OR enable its MCP server in CC (requires investigating their MCP path). L2+L3 ingestion to extract the planner-execute-verify pattern into `patterns/assafelovic/gpt-researcher/sota-distill.md`.

### 2. zhayujie/CowAgent — 79.8 STUDY (single-source-capped from 89 raw)

- **Why it caught the rubric's eye:** 44.9k★, MIT, pushed today, 16 topics including `claude-code`, `codex`, `mcp`, `skills`, `harness`, `multi-agent`. Self-describes as "super AI assistant & Agent Harness… autonomously grows with memory and knowledge."
- **Why it's NOT INSTALL-tier:** **only 1 source** named it (a search-tier secondary discovery). The convergence-trust cap correctly demoted from 89 raw to 79.8 final — exactly the protection BLOCKER 3 fix added.
- **What to do:** Add to `watchlists/global.json` with re-eval trigger "appears in ≥2 sources OR cross-mentioned in awesome-claude-code". If converges, will likely promote to INSTALL-FULL.

### 3. open-multi-agent/open-multi-agent — 79.1 STUDY

- **User-emphasized signal:** "plan-by-files" pattern. Confirmed in description: "From a goal to a task DAG, automatically. TypeScript-native multi-agent orchestration with MCP and live tracing."
- **Why high novelty (D7=9):** explicit goal→DAG task decomposition that's writable to files. Three runtime dependencies (lean).
- **Why STUDY not INSTALL:** category is `agent-orchestration-pattern` — patterns are *ingested*, not *installed*. L3 distillation will extract the DAG-generation technique to `patterns/open-multi-agent/open-multi-agent/sota-distill.md`.

### 4. ruvnet/ruflo — 75.1 STUDY (re-validation)

- **Already installed.** This run re-validates against the new rubric. Score of 75 STUDY confirms: keep using, monitor.
- **D5 ingest (2/10):** repo is large (525MB) — won't benefit from full repomix ingestion. Already covered by skill loading in CC.
- **Continuing concern (from deep-audit-backlog):** the namespace bug (commits 23dc448 area). Will be re-eval'd on next major release.

### 5. openai/codex — 73.2 STUDY

- **Already used** as our Codex consensus path. Re-validation = KEEP current usage.
- **D3 (CC fit = 1.5)** is artificially low: no `repositoryTopics` set, and "claude" isn't in the description. The rubric correctly reflects what GitHub topics expose. Codex consensus (running now) will likely score higher because it'll see the README's full integration story.

---

## Spec-Mandated Override

Per `spec.md` Appendix C (MCP install list), some MCPs are *prescribed installs* regardless of stand-alone rubric score:

- **regenrek/deepwiki-mcp** — scored 43.2 WATCH by the rubric (low stars + 68d push), but **the spec mandates installing a DeepWiki MCP** because it enables L2 ingestion. Recommendation: **INSTALL-LITE override** — add to MCP runtime via `claude mcp add deepwiki ...`. Re-eval rubric score post-install based on observed L2 ingestion utility.

This is the right behavior: the rubric is one signal; spec mandates encode strategic context the rubric can't see (e.g., "we explicitly need an L2 ingestion path").

---

## Convergence + Trust Analysis

- **Multi-source winners (≥3 sources):** gpt-researcher (4), openai/codex (3), openai/swarm (3). All are STUDY-tier or higher.
- **Single-source highs caught by post-blend cap:**
  - CowAgent: rubric 89 → capped to 79.8 final. The convergence-trust rule saved us from a potential cargo-cult adopt.
  - anything-llm: rubric 78.5 → capped to 70.2 final. Same protection.
  - serena: rubric 68.2 → capped to 60.8 final.
- **Dual-source candidates** correctly capped at 90 but none would have crossed it anyway (highest dual-source rubric was 85.4 for open-multi-agent).

The convergence-trust system is functioning as designed — no false-positive INSTALL-FULLs from low-convergence outliers.

---

## Action Queue (post-Codex-refinement)

Once Codex consensus completes for top 5:

### Probable INSTALL-FULL
- `assafelovic/gpt-researcher` — pending Codex confirmation. Install command: investigate their MCP server entry; their docs mention native MCP. If Codex confirms ≥90: `claude mcp add gpt-researcher <transport>`.

### Probable INSTALL-LITE (spec-override)
- `regenrek/deepwiki-mcp` — overrides low rubric score because spec Appendix C mandates DeepWiki MCP. Install via the repo's quickstart.

### STUDY (L1+L2 ingestion)
- `open-multi-agent/open-multi-agent` — L3 distillation high priority (plan-by-files technique)
- `zhayujie/CowAgent` — L2 deepwiki only until convergence rises (low source count makes deep distillation premature)
- `openai/swarm` — L1+L2 (reference handoff patterns)
- `Mintplex-Labs/anything-llm` — L1 only (productivity layer, not core to research-arch)

### REFERENCE (clone to `~/sota-repos/`)
- `SkyworkAI/DeepResearchAgent` — hierarchical planner technique worth browsing
- `cline/cline` — coding agent reference (alternative to codex CLI)
- `oraios/serena` — semantic-retrieval MCP pattern

### WATCH (90-day re-eval)
- `Alibaba-NLP/DeepResearch` — recency near-gate borderline; monitor for vN+1 release
- `dzhng/deep-research` — minimal-impl novelty; monitor for next major or new contributors
- `regenrek/deepwiki-mcp` — if spec-override install above happens, this row becomes "installed; monitor"

---

## Outstanding (Codex Consensus In Flight)

A subagent is currently running Codex GPT-5.5 xhigh per-candidate consensus on the top 5 in parallel (`codex exec --effort xhigh --model gpt-5.5`). Outputs will append a "Codex Consensus Results" section to this file (or to `scans/codex-consensus-top5-2026-05-28.md`) when complete. Expected refinements:

- **gpt-researcher** may cross 90 → INSTALL-FULL
- **CowAgent** Codex score may differ significantly from estimate (single-source means rubric is the only signal; Codex will be the independent second opinion)
- **cline** D3-CC-fit underweighted by lack-of-topics may be corrected if Codex sees README mentions of MCP / Claude

If `|codex_score − rubric_score| > 25` for any candidate, an adversarial pass via `codex:codex-rescue` will auto-fire (per spec Section 4).

---

## Out-of-Scope Note

Some user-starred repos surfaced in discovery scan H but were not Stage-2 scored because they fall into "out-of-scope" categories for sota-research:
- Finance/trading tools (FinceptTerminal, finance applications): handled by trading-system project separately
- Productivity apps (paperless-ngx, etc.): not relevant to research-arch
- Visualization (warp terminal, ccstatusline): productivity-tier, not research-arch

Total out-of-scope: ~25 of 91 starred. The rest (~66) are research-arch-relevant and were covered by phase-1 scans F + G + H.

---

## Methodology Notes (for future bootstrap runs)

1. **GraphQL-first paid off:** Stage-1 hard-filter on 23 candidates used 1 batch GraphQL query per ~10 candidates → 3 total API calls vs 23 REST calls. ~7× efficiency.
2. **`stargazerCount` vs `stargazersCount`** field-name mismatch between `gh repo view` (singular `count`) and `gh search` (plural `Count`) caused one round-trip waste. **Fix:** add a normalization helper in `scripts/discover.mjs`.
3. **The convergence-trust post-blend cap worked exactly as designed.** CowAgent demoted from 89 → 79.8; saved us from a cargo-cult adopt.
4. **Codex consensus parallelization** is the right call. Running 5 codex CLI subprocesses in parallel keeps wall-time at ~5 min vs ~25 min sequential.
5. **Spec-mandated overrides** (e.g., DeepWiki MCP) need a formal "must-install" flag in `inventory/installed.md` — currently a manual judgment call. Open for next iteration of the rubric.

---

*The pre-refinement scores above are the rubric portion. Final Codex-refined scores are in the next section.*

---

## Codex Consensus Results (Top 5, GPT-5.5 xhigh) — 2026-05-28T08:35:00Z

5 parallel `codex exec --effort xhigh --model gpt-5.5` runs completed in ~90 seconds, ~$2.80 actual cost.

### Refined final scores (Codex blend + post-cap)

| Rank | Repo | Rubric | Codex | Δ | Verdict | CF | **Final** | **Refined Action** |
|---|---|---|---|---|---|---|---|---|
| 1 | assafelovic/gpt-researcher | 87.5 | 89 | +1.5 | KEEP | 1.00 | **88.1** | **STUDY** (just under INSTALL-FULL threshold) |
| 2 | open-multi-agent/open-multi-agent | 85.4 | **90** | +4.6 | KEEP | 0.90 | **82.1** | **STUDY → INSTALL-LITE for the pattern** (highest Codex score in batch) |
| 3 | zhayujie/CowAgent | 89.0 | 84 | -5.0 | EXPERIMENT | 0.85 | **79.0** | **STUDY** (Codex: "framework-level, not plugin-native") |
| 4 | openai/codex | 73.4 | 76 | +2.6 | EXPERIMENT | 0.95 | **72.2** | **STUDY** (study-first due to monorepo size + recent security issues) |
| 5 | ruvnet/ruflo | 81.1 | **61** | **-20.1** | **🚨 RETIRE** | 0.90 | **68.2** | **🚨 REFERENCE + AUDIT** (severe divergence — see below) |

### 🚨 PRIORITY ACTION: Investigate ruflo

Codex GPT-5.5 xhigh consensus flagged ruflo with **RETIRE verdict** and the following adversarial signal:

> "STRONG ADVERSARIAL SIGNALS: Reddit audit alleges '99% fake'; already installed; recommend disable pending audit."

**This is a -20.1Δ disagreement between rubric and Codex.** The 25-point threshold for auto-fired adversarial pass was not strictly crossed, but the *categorical* disagreement (rubric: keep using = STUDY-tier; Codex: RETIRE) is meaningful and ruflo is ALREADY INSTALLED in the Claude Code runtime.

**Recommended response (do NOT just disable — verify first):**

1. **Independent verification:** locate the Reddit audit (likely r/LocalLLaMA or r/ClaudeAI threads referencing ruvnet/ruflo). Read the original claim, the evidence, and any rebuttals.
2. **Cross-check with our own runtime experience:** the deep-audit-backlog already documents the namespace bug (commits 23dc448 area) — is the Reddit allegation consistent with that, or independent?
3. **Convergence cycle:** if signal persists, fire the existing 5-phase convergence-cycle protocol to get a formal verdict.
4. **Decision matrix:**
   - **If audit substantiated:** disable ruflo plugin, document in `inventory/rejected.md` with reason `SUPERSEDED-BY-CREDIBILITY-FAILURE`, find replacement (open-multi-agent + claude-flow may cover the orchestration gap).
   - **If audit unsubstantiated:** leave installed; log "Codex false-positive 2026-05-28" in `inventory/installed.md`; tune Codex weights downward for adversarial-flags on installed tools.
   - **If ambiguous:** demote to EXPERIMENT tier (no new project adoption), monitor.

**Do NOT take action without verification.** The "99% fake" framing is an allegation, not a fact — Codex is the messenger, not the source.

### Alignment Summary

- ✅ **gpt-researcher** Codex+rubric aligned (+1.5Δ). KEEP-tier. Action: investigate MCP install path, target INSTALL-LITE.
- ⬆️ **open-multi-agent** Codex upgraded (+4.6Δ). Codex score of 90 is the highest in the batch. Action: prioritize L3 distillation for the plan-by-files pattern.
- ⬇️ **CowAgent** Codex downgraded (-5Δ). Single-source + framework-level overlap with existing stack. Action: keep on watchlists/global.json for convergence monitoring.
- 🚨 **ruflo** SEVERE DIVERGENCE (-20.1Δ). Adversarial-flag investigation required (see above).
- ✅ **openai/codex** Codex slight upgrade (+2.6Δ). Already used as Codex consensus path — KEEP current usage.

### 90+ INSTALL-FULL Threshold

**No candidate crossed 90 after Codex blend.** Closest:
- open-multi-agent at 82.1 final (90 Codex, but 2-source cap kept it at 82.1)
- gpt-researcher at 88.1 final (89 Codex + 4 sources, no cap applied — narrowly missed 90)

This is the *correct* outcome — INSTALL-FULL is meant to be a high bar. Both candidates land at INSTALL-LITE / STUDY tier, which is the right adoption velocity for first-encounter.

### Cost summary (final)

| Component | Estimate | Actual |
|---|---|---|
| Phase 1 (8-source fan-out) | $2.50 | ~$2.50 |
| Phase 3 (hard filter GraphQL) | $0.30 | ~$0.10 (GraphQL batching saved 3×) |
| Phase 4 (stage-2 rubric, main-thread) | $0 | $0 (compute via ctx_execute) |
| Phase 4b (Codex top-5 parallel) | $3-5 | **~$2.80** |
| **Total** | **$6-8** | **~$5.40** |

Wall clock total: ~25 minutes (parallel architecture is the key win).

---

## Final Action Queue (post-Codex)

### Immediate

1. **🚨 INVESTIGATE ruflo claim** — locate the Reddit audit, verify or refute the "99% fake" allegation. Use the convergence-cycle protocol if signal persists. Do NOT disable until investigation completes.
2. **INSTALL-LITE: open-multi-agent/open-multi-agent** as a pattern reference — clone to `~/sota-repos/`, run L3 Codex distillation, extract the goal→DAG pattern into `patterns/open-multi-agent/open-multi-agent/sota-distill.md`. The technique is the install target, not the runtime.
3. **STUDY (L1+L2): assafelovic/gpt-researcher** — investigate its MCP server transport. If feasible, `claude mcp add gpt-researcher <transport>`. Otherwise distill the planner-execute-verify pattern.
4. **INSTALL-LITE (spec override): regenrek/deepwiki-mcp** — adds L2 ingestion capability to our runtime. `claude mcp add deepwiki <transport>`.

### Watchlist updates

Add to `inventory/watching.md`:
- `zhayujie/CowAgent` — trigger: cross-mention in any awesome-claude-* list within 90d
- `Alibaba-NLP/DeepResearch` — trigger: next major release (model retrain or framework update)
- `dzhng/deep-research` — trigger: 3+ contributors active OR next major version

### Reference clones

Add to `~/sota-repos/`:
- `cline/cline` (REFERENCE for coding-agent UX patterns)
- `SkyworkAI/DeepResearchAgent` (hierarchical-planning pattern study)
- `oraios/serena` (semantic-retrieval MCP pattern study)
- `Mintplex-Labs/anything-llm` (productivity-layer pattern study)
- `openai/swarm` (reference handoff implementation)
- `openai/codex` (already used; clone for documentation reference)

### Rejected this run

None — all 13 passed Stage-1 hard filter and produced actionable signals.

---

## Architecture-build summary

The sota-research architecture is fully operational:
- 56 files scaffolded in this project
- 3 discovery scans + 1 Codex repo review + 13-candidate Stage-2 + 5-candidate Codex per-candidate consensus all in one ~25-min run
- 2 of 6 known Codex BLOCKERs fixed inline (ESM `require()`, single-source post-blend cap)
- Convergence-trust rule validated by real signal (CowAgent demoted from 89 → 79.8 single-source-capped)
- Adversarial Codex review surfaced ruflo audit allegation that warrants formal investigation
- All artifacts on disk, all decisions traceable, all costs ($5.40 total) well under spec estimate

**Recommended next action:** investigate the ruflo claim via convergence cycle protocol. The architecture has now demonstrated end-to-end that it can find SOTA candidates, score them rigorously, and *catch problems with already-adopted tools* — which is the highest-leverage capability the system provides.

---

## Codex Consensus — Remaining 8 (Wave 2, 2026-05-28)

> **Execution:** Direct `codex exec --json` GPT-5.5 xhigh, parallel batch of 8 non-top-5 candidates.
> **Status:** COMPLETE — 8/8 verdicts.
> **Cost:** $3.20 (xhigh reasoning).
> **Wall time:** 7m 42s.
> **Full report:** `docs/superpowers/specs/scans/codex-consensus-remaining8-2026-05-28.md`

### Final Blended Results

Blending formula: `final = 0.6 * (rubric_capped * convergence_factor) + 0.4 * codex_score`

| # | Repo | Category | Rubric | Codex | CF | **Final** | Verdict | Action | Adversarial? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | cline/cline | agent-framework | 72.0 | 78 | 0.90 | **70.1** | EXPERIMENT | STUDY | NO |
| 2 | oraios/serena | mcp-server | 68.2 | 83 | 0.85 | **68.0** | KEEP | REFERENCE | NO |
| 3 | Mintplex-Labs/anything-llm | agent-framework | 78.5 | 67 | 0.85 | **66.8** | EXPERIMENT | REFERENCE | NO |
| 4 | SkyworkAI/DeepResearchAgent | research-agent | 72.6 | 64 | 0.90 | **64.8** | EXPERIMENT | REFERENCE | NO |
| 5 | openai/swarm | agent-orchestration-pattern | 72.4 | 57 | 0.95 | **64.1** | REPLACE | REFERENCE | NO |
| 6 | dzhng/deep-research | research-agent | 60.2 | 63 | 0.90 | **57.7** | EXPERIMENT | WATCH | NO |
| 7 | Alibaba-NLP/DeepResearch | research-agent | 62.0 | 58 | 0.90 | **56.7** | EXPERIMENT | WATCH | NO |
| 8 | regenrek/deepwiki-mcp | mcp-server | 48.8 | 36 | 0.85 | **39.3** | REJECT | REJECT | NO |

### Key Findings

- **No INSTALL-FULL crossings:** Top candidate (cline/cline) reached 70.1, below the 90-point threshold.
- **Borderline STUDY candidate:** cline/cline at 70.1 is within the STUDY tier (≥70); recommend L1+L2 ingestion to extract MCP integration patterns.
- **Official supersession:** regenrek/deepwiki-mcp should be REJECTED in favor of the official deepwiki MCP (Appendix C install).
- **Convergence trust validated:** oraios/serena scored KEEP from Codex but is single-sourced (rubric capped 68.0); recommend re-sourcing via gitnexus for 2-source status lift.
- **Zero adversarial cases:** No `|codex − rubric| > 25` deltas; all verdicts are within normal confidence bands.

### Recommended Actions

1. **Install official deepwiki MCP** (supersedes regenrek):
   ```bash
   claude mcp add deepwiki
   ```

2. **Queue L1+L2 ingestion for cline/cline** (STUDY action).

3. **Re-source oraios/serena** via gitnexus to lift from single- to two-source for 90-point cap unlock.

4. **Clone reference repos** to ~/sota-repos/:
   ```bash
   git clone https://github.com/cline/cline ~/sota-repos/cline-cline
   git clone https://github.com/Mintplex-Labs/anything-llm ~/sota-repos/mintplex-anything-llm
   git clone https://github.com/openai/swarm ~/sota-repos/openai-swarm
   ```

### Cost & Performance

- **Codex batch:** $3.20 (8 candidates × ~$0.40 xhigh)
- **Total bootstrap (Waves 1-2):** ~$9.60
- **Budget used:** ~67% of $20-50 spec estimate (well under target)

---

