# Convergence-Wiring Plan — Research-Architecture Enhancement v3.1 (2026-05-29)

> **Design source-of-truth:** [convergence grounding](../../research/convergence-2026-05-29-research-arch-grounding.md) (58-candidate convergence + 3 skeptics + GPT-5.5 @ xhigh). **Deferred decisions:** [ADRs](../../research/adr-2026-05-29-deferred-enhancements.md).
> **Theme:** the repo's disease is *over-specification-vs-implementation* — wire what's already designed; do not design more. Every slice hits a real runtime face (script for `bootstrap.mjs`/CI-dispatch, prompt for the interactive `SKILL.md` workflow). Preserve the soft-gate philosophy (low-star niche repos survive to STUDY/REFERENCE, never auto-reject).
> **Method:** TDD per slice — failing test → impl → `npm test` + `npm run lint` green → commit → update RESUME-HERE. Sub-skill: superpowers:test-driven-development.

## ⏯️ RESUME HERE — update after every verified slice

- **Branch:** `claude/gifted-shannon-d8930c` (isolated worktree; continues `feature/research-arch-v3`).
- **Baseline:** 169 tests pass, Biome clean (verified at session start).
- **Last completed:** docs (convergence grounding + this plan) written.
- **Next slice:** S1 (R1 — persist decisions.jsonl).
- **Resume protocol:** read this header → `git -C <repo> log --oneline -5` → `npm test` (confirm green) → continue from first unchecked slice → commit each verified slice + update this header in the same commit.

## Sequencing (GPT-5.5-validated dependency order)

`S1(R1) → S2(R3) → S3(R2) → S4(R6)` then `S5(R7) → S6(R9) → S8(R4-safe) → S7(R13 last)`.
Hard deps: R3 before R6 (relevance not rankable until phase4 supplies it); R1 before R13 (contract test checks durable outputs); R7 before strict R13 (or R13 allowlists Scorecard); R4 status-shape must not break `phase2Convergence.batch.forEach`.

---

## TIER 1 — keystone wiring

### S1 — R1: persist `decisions.jsonl` + `scan-<ts>.md` (G5)
- [ ] Read `scripts/discover.mjs` (~440–490), `scripts/bootstrap.mjs` (~140–205), `scripts/lib/atomic-write.mjs`, `scripts/outcome.mjs` (~20–34), `docs/protocols/decision.md` (decisions.jsonl schema ~144-149).
- [ ] **Failing test** (`tests/persist-decisions.test.mjs` or extend `tests/discover.test.mjs`): calling the persist step appends ONE JSON line per candidate with the decision envelope `{ts, repo, category, final_score, action, families, dims, coverage, override_applied, trace, review_required, servesObjective, marginalValue, adoptionPathway, provenance_trustTier, schema_version, rubric_version}`; idempotent atomic append; `outcome.mjs` can read it.
- [ ] Impl: replace `discover.mjs` TODO (~:481) with atomic append via `atomic-write.mjs`; same in `bootstrap.mjs`; write human-readable `scan-<ts>.md`. **Reconcile filename drift:** make bootstrap's output + the PR-body reference agree (write the `inventory/scan-*.md` the PR expects, or update the workflow body). `baseDir` param so tests write to tmp.
- [ ] Verify green + commit `feat(persist): R1 write decisions.jsonl + scan markdown (un-starve outcome loop)`.

### S2 — R3: feed gap-fit (D11) + adoption-pathway (D3) into `phase4Score` (G3)
- [ ] Read `scripts/discover.mjs` `phase4Score` (~364–440), `scripts/lib/gap-fit.mjs` (`assessGapFit`, `loadStackInventory`), `scripts/lib/d3-pathway.mjs` (`normalizePathway`), `config/stack-inventory.json`.
- [ ] **Failing test** (`tests/discover.test.mjs` / `tests/decision-routing.test.mjs`): a duplicative candidate (`marginalValue` low) with tier>STUDY is capped to STUDY by `objectiveRelevanceGate`; a candidate with no adoption pathway + INSTALL tier is capped by `d3PathwayVeto` — i.e. the gates are no longer no-ops.
- [ ] Impl: in `phase4Score`, call `assessGapFit(candidate, loadStackInventory(baseDir), {scanIntent: topic})`; derive `adoptionPathway` from structured signals already fetched (category + manifest/skill markers via `normalizePathway`); pass `{servesObjective, marginalValue, adoptionPathway}` into `routeDecision`. Honor the null/evidence contract (unknown pathway → undefined, not fabricated).
- [ ] Verify green + commit `feat(decision): R3 wire gap-fit + adoption-pathway into phase4 (flip inert gates live)`.

### S3 — R2: bind live workflow to the `routeDecision` decision-envelope + anti-improvisation contract (G2)
- [ ] Read `.claude/skills/sota-research/SKILL.md` (Scoring & Thresholds ~54–65, Architecture), `docs/protocols/decision.md`, `docs/protocols/scoring.md`.
- [ ] Impl (docs/prompts — the runtime): in `SKILL.md` replace the prose thresholds + "4+ sources auto-eligible" with: the scoring stage MUST call/emit the `routeDecision` **decision-envelope** as a fenced ```json block per candidate (action, flags, trace[], families, override_applied, rubricVersion) and the recommendation MUST be the envelope's `action` (no free-form override). Add an explicit **anti-improvisation contract** ("read decision.md; the engine decides the tier; the workflow may add evidence, never override the gate"). Standardize the envelope shape in `decision.md`.
- [ ] **Verification** (envelope emission is exercised by S1's scan-md test): assert `scan-<ts>.md` contains a decision-envelope json block per candidate; manual check that SKILL.md no longer contains a tier rule that contradicts `routeDecision`.
- [ ] Commit `feat(workflow): R2 bind SKILL.md to routeDecision decision-envelope + anti-improvisation (close engine<->workflow gap)`.

### S4 — R6: rank Top-K by `(action, final_score, coverage, objective-relevance)`, forbid appearance-count (G6)
- [ ] Read `scripts/bootstrap.mjs` (~145–194 sort), `scripts/discover.mjs` (phase2 triage / topK), `tests/bootstrap.test.mjs` (~216–223 sort assertions).
- [ ] **Failing test:** a high-`rubric_score` but duplicative/low-relevance candidate ranks BELOW a relevant evidenced one; appearance-count/`family_count` is only a tie-breaker, never primary.
- [ ] Impl: replace the `rubric_score` sort key with the tuple; **update the 2 bootstrap tests** that assert the old order; forbid `source_count`/`families` as primary key in `discover.mjs` + note in `decision.md` Triage + `SKILL.md`.
- [ ] Verify green + commit `feat(rank): R6 rank by relevance x evidenced-quality, not appearance-count`.

---

## TIER 2 — evidenced quality + trust

### S5 — R7: OpenSSF Scorecard real D4 probe + `probe_status` (G6/G4) — confidence-cap on outage, NOT reject
- [ ] Read `scripts/lib/evidence.mjs` (`validateJudgeEvidence`), `docs/rubric.md` (evidence contract ~118-121), `docs/protocols/scoring.md` (~54-67).
- [ ] **Failing test:** evidence object with `probe_status:'unavailable'` caps confidence (does NOT reject / does NOT zero D4); a present Scorecard score flows into D4 with `probe_status:'ok'`.
- [ ] Impl: extend the evidence schema with `probe_status` (`ok|unavailable|stale`); the live workflow (scoring.md/SKILL.md) fetches `scorecard.dev` API JSON for D4 + records `score` + per-check signals; outage → `probe_status:'unavailable'` + confidence cap (soft-gate preserved).
- [ ] Verify green + commit `feat(quality): R7 OpenSSF Scorecard probe + probe_status (confidence-cap, not fail-closed)`.

### S6 — R9: canonicalize forks/mirrors/registry-derivatives before family-counting (G6 anti-astroturf)
- [ ] Read `scripts/discover.mjs` `phase2Convergence` (~178–207) + `calculateSourceTrust` (~126–172); `docs/protocols/discovery.md` (resolveCanonical prose).
- [ ] **Failing test:** a repo and its fork/mirror collapse to ONE canonical identity before `family_count`; an external-aggregator badge contributes at most ONE family (can never alone satisfy ≥3/≥4).
- [ ] Impl: `resolveCanonical` (GitHub redirect-follow + parent-of-fork) folding derivatives to one identity before counting; tag aggregators as a single `external-aggregator` family.
- [ ] Verify green + commit `feat(trust): R9 canonicalize forks/mirrors before family-convergence`.

### S8 — R4-safe: honest source run-status (separate channel) + wire one real source (G1)
- [ ] Read `scripts/discover.mjs` (stub sources ~54–120; fan-out ~457–466; `phase2Convergence` `batch.forEach` ~178–181).
- [ ] **Failing test:** family_count is computed only from sources that actually RAN; a NOT_RUN source does not silently understate convergence; `phase2Convergence` still receives arrays (no shape break).
- [ ] Impl: keep each source returning an array, but record run-status in a SEPARATE `sourceStatus` map (`RUN|NOT_RUN|ERROR`) — never inject `{status}` objects into the candidate arrays (would break `batch.forEach`). Wire ONE real source end-to-end (the live workflow already has the MCP; pick the cheapest, e.g. GitHub advanced or one web angle). Defer the adapter factory (ADR).
- [ ] Verify green + commit `feat(discovery): R4 honest source run-status channel + one live source (no silent family undercount)`.

### S7 — R13-scoped: rubric-contract test with backlog allowlist (structural antidote) — LAND LAST
- [ ] Read `scripts/score.mjs` (~74–85 weight check), `docs/rubric.md` (declared dims/overlays/gates).
- [ ] **Failing test** (`tests/rubric-contract.test.mjs`): every dimension/overlay/gate `rubric.md` DECLARES has a live producer wired into the path — D1/D2 (GraphQL), D3 (d3-pathway, S2), D4 (Scorecard, S5), D9/D10/D11 — EXCEPT an explicit `KNOWN_BACKLOG` allowlist; removing a producer makes it fail. Do NOT parse aspirational/future-expansion docs; assert against a curated declared-producer map.
- [ ] Impl: `scripts/lib/rubric-contract.mjs` + CI wire (`assertRubricContract`); allowlist documents remaining backlog (honeypot, weight-tuning). NOT a load-time hard-fail in `discover.mjs` (advisory/CI only).
- [ ] Verify green + commit `feat(contract): R13 scoped rubric-contract test (declared==wired, backlog-allowlisted)`.

---

## TIER 3 — record as ADRs (no speculative code)
- [ ] Write `docs/research/adr-2026-05-29-deferred-enhancements.md`: R15 (KEEP deterministic family-convergence), R5 (Top-N matrix — build-not-borrow, deferred + revive-precondition: ≥2 same-category scored candidates routinely produced), R10 (evidence compression — revive when D3–D8 carry rich evidence), R8 (agreement scalar — revive when ≥2 live reviewers emit dimension vectors), R11 (groundedness via extending `evidenceCoverageGate`, not a module/prose), R12 (budget one-liner), R14 (registry refactor — revive on a 2nd live expert scorer). Each: verdict + why + the precondition that revives it.

## Close-out
- [ ] Update `memory/deep-audit-backlog.md` (mark R1/R3/R6/R9 wiring as resolving the open Wave-1/2/3 items; note the workflow_dispatch + filename-drift corrections).
- [ ] Update `MEMORY.md` + write a memory entry for the convergence program.
- [ ] Final: `npm test` + `npm run lint` green; summarize diff; optional `/codex:review` on the shipped slices.
