# Convergence-Wiring Plan — Research-Architecture Enhancement v3.1 (2026-05-29)

> **Design source-of-truth:** [convergence grounding](../../research/convergence-2026-05-29-research-arch-grounding.md) (58-candidate convergence + 3 skeptics + GPT-5.5 @ xhigh). **Deferred decisions:** [ADRs](../../research/adr-2026-05-29-deferred-enhancements.md).
> **Theme:** the repo's disease is *over-specification-vs-implementation* — wire what's already designed; do not design more. Every slice hits a real runtime face (script for `bootstrap.mjs`/CI-dispatch, prompt for the interactive `SKILL.md` workflow). Preserve the soft-gate philosophy (low-star niche repos survive to STUDY/REFERENCE, never auto-reject).
> **Method:** TDD per slice — failing test → impl → `npm test` + `npm run lint` green → commit → update RESUME-HERE. Sub-skill: superpowers:test-driven-development.

## ⏯️ RESUME HERE — update after every verified slice

- **Branch:** `claude/gifted-shannon-d8930c` (isolated worktree; PR #11 → `main`).
- **Baseline:** **233 tests pass, Biome clean (45 files)** — after converging `origin/main` (PR#10) into this branch.
- **Last completed (2026-05-29 session 2):** **CONVERGENCE MERGE `5a02ceb`.** `origin/main` advanced 7 commits via PR#10 (D3/D6 production wiring, ship-gate, fail-closed inventory) after the v3.1 handoff, leaving PR #11 `CONFLICTING`. Merged `origin/main` in (`-X ours` for the 9 discover.mjs + 2 bootstrap.mjs conflicts — every one was the v3.1 superset of main's earlier independent fix), KEPT main's reviewed fail-closed inventory + removed a silent auto-merge duplicate-`inventory` hazard, and reconciled 3 test divergences (BUG E `build_not_install`→`servesObjective:false` canonical; seed `config/stack-inventory.json` in 2 R1 tests). 229→233 green, no production fix dropped. (Prior v3.1 program complete: 20 commits `ef02772..4ca12a7`, GPT-5.5 QC PASS.)
- **Next slice:** F2 — `normalizeCandidate` (see "Deferred #1: LIVE multi-source fan-out" section below). F1 done `[pending-commit]` (241 green).
- **Resume protocol:** read this header → `git -C <repo> log --oneline -5` → `npm test` (confirm green) → continue from first unchecked slice → commit each verified slice + update this header in the same commit.

## Deferred #1 — LIVE multi-source discovery fan-out (gap G1) — un-defers R5

> **Ground:** gpt-researcher `MCPToolSelector` = two-tier routing gate with a DETERMINISTIC FLOOR (LLM relevance-rank → falls through to a pattern-scored top-k, guaranteed non-empty) [patterns/assafelovic/gpt-researcher/sota-distill.md]; RAG-MCP / MCP-Zero = tool discovery is semantic retrieval+rank BEFORE the LLM sees them [convergence doc §Cross-source-patterns]. **Runtime split (architecture-runtime-model):** `.mjs` = pure testable scaffold; the live MCP calls (exa/tavily/jina/brave/semantic-scholar/github) are the `SKILL.md` WORKFLOW's job. Engine stays authoritative; soft-gate sacred.

- [x] **F1** — `scripts/lib/source-registry.mjs`: `SOURCE_REGISTRY` (descriptors: name, family, kind, categories, topicHints) + `selectSources(topic, category, {maxSources})` — deterministic relevance-ranked selection with a guaranteed `github` floor (the gpt-researcher fallback). **8 tests; 241 green; Biome clean.** Floor-preservation-under-cap was RED-verified before adding the swap.
- [ ] **F2** — `normalizeCandidate(result, source)` + `extractRepoIdentity(result)`: uniform `{nameWithOwner, sources:[source], hint}` shape (extract the GitHub repo a web/academic result references; null if none) → feeds `phase2Convergence`. TDD.
- [ ] **F3** — extend `canonicalSourceFamily` (discover.mjs) to fold engine variants (`exa-*`/`tavily-*`/`jina-*`/`brave*`/`semantic-scholar`) → one family each (absorbs main's deferred `FAMILY_CANON` intent). TDD.
- [ ] **F4** — wire into `discover()` fan-out (selectSources orders PHASE1_SOURCES; honest sourceStatus) + `SKILL.md` phase-1 workflow prose (selected sources → MCP calls → normalizeCandidate → phase2Convergence → engine → decision-envelope). Move live-fan-out from R13 `KNOWN_BACKLOG` to a wired producer. TDD .mjs.
- [ ] **F5 (conditional)** — R5 Top-N matrix pure-projection renderer, IF the fan-out makes ≥2 scored same-category candidates per scan routine (ADR-R5 revive precondition). TDD.
- [ ] **QC** — GPT-5.5 @ xhigh convergence QC (codex exec, confirm model from telemetry) → append `docs/research/qc-manifest-*`. Then push → PR #11.

## Sequencing (GPT-5.5-validated dependency order)

`S1(R1) → S2(R3) → S3(R2) → S4(R6)` then `S5(R7) → S6(R9) → S8(R4-safe) → S7(R13 last)`.
Hard deps: R3 before R6 (relevance not rankable until phase4 supplies it); R1 before R13 (contract test checks durable outputs); R7 before strict R13 (or R13 allowlists Scorecard); R4 status-shape must not break `phase2Convergence.batch.forEach`.

---

## TIER 1 — keystone wiring

### S1 — R1: persist `decisions.jsonl` + `scan-<ts>.md` (G5) ✅ DONE
- [x] Read discover/bootstrap/atomic-write/outcome + decision.md schema.
- [x] Failing test → `tests/decision-log.test.mjs` (7 unit) + integration assertions in discover/bootstrap tests.
- [x] Impl: new `scripts/lib/decision-log.mjs` (`buildDecisionRecord`/`appendDecisions`/`renderScanMarkdown`/`writeScanMarkdown`); wired into `discover.mjs` (`baseDir`+`persist`, CLI opts in) + `bootstrap.mjs` (`decideCandidate` once for table+log; `persist:false` on its discover calls to log once). The `scan-*.md` write reconciles the PR-body drift.
- [x] Verified: **180 tests pass, Biome clean.** Record = backward-compatible superset of the documented schema.

### S2 — R3: feed gap-fit (D11) + adoption-pathway (D3) into `phase4Score` (G3) ✅ DONE
- [x] Read phase4Score + gap-fit + d3-pathway + stack-inventory.
- [x] Failing test → `tests/decision-inputs.test.mjs` (8: `pathwayFromCategory` + `deriveDecisionInputs`).
- [x] Impl: `pathwayFromCategory` (category→runtime surface; null=study-not-install, preserving soft-gate) in d3-pathway.mjs; exported `deriveDecisionInputs` (gap-fit + pathway) in discover.mjs; wired into `phase4Score` + bootstrap `decideCandidate`; values flow into `routeDecision` AND the persisted record.
- [x] Verified: **188 tests pass, Biome clean.** Conservative default: no gap evidence → `marginalValue:"low"` → INSTALL caps to STUDY (the codeg-miss fix, live).

### S3 — R2: bind live workflow to the `routeDecision` decision-envelope + anti-improvisation contract (G2) ✅ DONE
- [x] Read SKILL.md + decision.md + scoring.md.
- [x] SKILL.md: replaced the bare score-band table + "4+ sources auto-eligible" with "**the engine is authoritative**" (base tier → ordered gates), convergence-is-a-CAP, and the **anti-improvisation contract** (emit/honor the envelope; never hand-edit the engine's tier).
- [x] decision.md: added the canonical **decision-envelope** contract section. scoring.md: Stage-1 reconciled to SAFETY-hard / QUALITY-soft (was "6 hard gates → reject", which contradicted the soft gate + the operator's core ask).
- [x] Envelope emission already exercised by `renderScanMarkdown` (S1). Doc-only; **188 tests pass.**

### S4 — R6: rank by the engine verdict, not appearance-count (G6) ✅ DONE
- [x] Failing test → `tests/decision-rank.test.mjs` (5: tier-primary, score, coverage, marginal-value tie-breaks, SCORE_FAILED-safe).
- [x] Impl: `decisionRankKey` + `compareByDecision` + `MARGINAL_VALUE_RANK` in decision.mjs (action tier → final score → coverage → marginal value; unknown action → -1, last). bootstrap decides-then-ranks; discover sorts phase4 by the verdict; recommendations annotated with action/final_score.
- [x] Updated the bootstrap sort test (was rubric_score → now verdict tier then final_score). **193 tests pass, Biome clean.**

---

## TIER 2 — evidenced quality + trust

### S5 — R7: OpenSSF Scorecard real D4 probe + `probe_status` (G6/G4) — confidence-cap on outage, NOT reject ✅ DONE
- [x] Read `scripts/lib/evidence.mjs` (`validateJudgeEvidence`), `docs/rubric.md` (evidence contract ~118-121), `docs/protocols/scoring.md` (~54-67).
- [x] **Failing test** (`tests/evidence.test.mjs`, 8 new): `probe_status:'unavailable'`/`'stale'`/unknown caps confidence ≤0.5 (does NOT reject / does NOT null the value); `'ok'`/absent leaves it; a present Scorecard score still flows through.
- [x] Impl: extended the evidence schema with `probe_status` (`ok|unavailable|stale`, default `ok`) + `capConfidenceForProbe` + `DEGRADED_PROBE_CONFIDENCE_CAP` in `evidence.mjs`; unknown status is flagged AND treated like `unavailable`. scoring.md documents outage→`probe_status:'unavailable'`+cap, never reject. NO network call added to the script (fetch is workflow/agent-side).
- [x] Verified: **200 tests pass, Biome clean.** Commit `feat(quality): R7 OpenSSF Scorecard probe_status (confidence-cap, not fail-closed)`.

### S6 — R9: canonicalize forks/mirrors/registry-derivatives before family-counting (G6 anti-astroturf) ✅ DONE
- [x] Read `scripts/discover.mjs` `phase2Convergence` + `calculateSourceTrust`.
- [x] **Failing test** (`tests/discover.test.mjs`, 10 new): a repo + its fork/mirror collapse to ONE canonical identity (via `forkOf`/`mirrorOf`/`canonical` evidence) before `family_count`; external aggregators fold to AT MOST one `external-aggregator` family (aggregator-only can never alone satisfy ≥3/≥4).
- [x] Impl: pure `canonicalIdentity` (folds fork/mirror evidence to the origin, lowercase) as the `phase2Convergence` dedup key; `canonicalSourceFamily` + `countIndependentFamilies` collapse GitHub angles → one family and aggregators → one family; `calculateSourceTrust` family-count uses the same canonicalization. Soft-gate comment preserved. NO per-candidate GraphQL redirect call (deep resolve noted as workflow-side).
- [x] Verified: **210 tests pass, Biome clean.** Commit `feat(trust): R9 canonicalize forks/mirrors before family-convergence`.

### S8 — R4-safe: honest source run-status (separate channel) + wire one real source (G1) ✅ DONE
- [x] Read `scripts/discover.mjs` (stub sources, fan-out, `phase2Convergence` `batch.forEach`).
- [x] **Failing test** (`tests/discover.test.mjs`, 4 new): `discover()` returns `sourceStatus` marking github-search RUN + the 7 stubs NOT_RUN (exactly 1 of 8 ran); `PHASE1_SOURCES` is the single source of truth (8 sources, 1 live); a stub contributes an empty ARRAY (never a `{status}` object) so `phase2Convergence` does not throw.
- [x] Impl: `PHASE1_SOURCES` descriptor (`{name, live, fn}`) drives the fan-out via `Promise.all(map)`; stubs keep returning `[]`; run-status recorded in a SEPARATE `sourceStatus` array (`RUN`|`NOT_RUN`) surfaced on the return. `github-search` is the one live in-script source; live multi-source fan-out (Exa/Tavily/Brave/Jina/Semantic-Scholar — MCP-only) is documented as the workflow layer's job; adapter factory deferred (ADR).
- [x] Verified: **214 tests pass, Biome clean.** Commit `feat(discovery): R4 honest source run-status channel (no silent family undercount)`.

### S7 — R13-scoped: rubric-contract test with backlog allowlist (structural antidote) — LAND LAST ✅ DONE
- [x] Read `scripts/score.mjs` (weight check + producers), `docs/rubric.md` (declared dims/overlays/gates), the live producer modules (d3-pathway/evidence/provenance/gap-fit/decision).
- [x] **Failing test** (`tests/rubric-contract.test.mjs`, 7): every declared dim/overlay/gate has a live producer (D1/D2→`scoreRepo`, D3→`d3FromPathway`/`pathwayFromCategory`, D4→`validateJudgeEvidence` incl. R7 probe, D5–D8→`scoreRepo`, D9→`overrideFloor`, D10→`assessProvenance`, D11→`assessGapFit`, + the decision.mjs gates) EXCEPT `KNOWN_BACKLOG`; the BITES tests prove removing D10 / `convergence-action-cap` fails the contract. No markdown parsed.
- [x] Impl: `scripts/lib/rubric-contract.mjs` — `RUBRIC_PRODUCERS` (curated in-code map of real function refs), `DECLARED_CONTRACT`, `KNOWN_BACKLOG` (honeypot active-malware / weight auto-tuning / live multi-source fan-out), `checkRubricContract({producers})` → `{ok,missing,checked}`, `assertRubricContract()` throws on unwired. CI wire = the Vitest test under `npm test`; NOT a load-time hard-fail in `discover.mjs` (advisory/CI only).
- [x] Verified: **221 tests pass, Biome clean.** Commit `feat(contract): R13 scoped rubric-contract test (declared==wired, backlog-allowlisted)`.

---

## TIER 3 — record as ADRs (no speculative code) ✅ DONE
- [x] Wrote `docs/research/adr-2026-05-29-deferred-enhancements.md`: R15 KEEP (deterministic family-convergence) + R5/R8/R10/R11/R12/R14 deferred — each with verdict · why · the precondition that revives it + a cross-cutting still-open backlog (honeypot, live fan-out, weight-tuning).

## Close-out
- [x] Updated `memory/deep-audit-backlog.md` (resolved Wave-1/2/3 items via R1/R2/R3/R6/R7/R9/R13; recorded the workflow_dispatch + filename-drift corrections).
- [x] Update `MEMORY.md` + write a memory entry for the convergence program.
- [x] Final: **221 tests pass, `biome check .` clean (45 files)**. (`/codex:review` is user-triggered; the GPT-5.5 consensus gate already ran pre-build.)
