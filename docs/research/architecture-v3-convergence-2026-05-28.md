# Research Architecture v3.0 — Convergence Record & Implementation Spec

**Date:** 2026-05-28 · **Status:** LOCKED (post Phase-A convergence + Codex GPT-5.5 consensus)

## Provenance (how this design was reached)
- **Phase A:** 6-angle Claude convergence-research workflow (run `wf_a07df9d4-d4d`), ~558K subagent tokens, markdown synthesis delta.
- **Phase A.5:** Codex GPT-5.5 @ xhigh adversarial consensus (read-only sandbox). **Verdict: GO-WITH-CHANGES** — approve a cut-down V3.0, reject the full proposal as written.
- This record is the canonical v3.0 spec. The divergent memory note `sota-repo-assessment-rubric.md` ("v2") is superseded — the **repo is the single source of truth**; the memory note will be reduced to a pointer.

## Skeptical corrections (citations & thresholds — verified by Codex)
| Claim (from Phase-A research) | Status | Treatment |
|---|---|---|
| StarScout paper `arXiv:2412.13459` | **VERIFIED** — now titled "Six Million (Suspected) Fake Stars in GitHub", ICSE 2026, CMU | cite correctly |
| `CV<0.3` / `entropy<0.2` / `fork:star<0.03` / profile `age>30d,repos≥5,followers≥10` | **NOT the paper's thresholds** — StarScout actually uses: low-activity WatchEvent heuristic; ≥50 suspected fake stars; monthly spike >50 stars & >50%; all-time fake-star share >10%; lockstep `n=50,m=10,Δt=30d,ρ=0.5` | **configurable defaults needing calibration, NOT facts** |
| G-Eval | **VERIFIED** `arXiv:2303.16634` (research mis-cited `2406.07791`); original Spearman ρ=0.514 for summarization | method reference only |
| "Langfuse accuracy 0.71→0.84" | **FABRICATED / unsupported** | removed |

**Rule:** every numeric threshold/constant in v3 is a CONFIGURABLE DEFAULT, never asserted as empirical fact — this honors the engine's own evidence contract applied to itself.

## Risk resolutions (Codex GPT-5.5)
1. **D11 gap definition:** add strategic-priority ranking; priority source = user-declared scan intent → watchlists/inventory → conservative engine heuristics.
2. **Judge ensemble weighting:** variance-weighted ONLY after calibration; a provisional first calibration ships as ADVISORY evidence, never install-enabling score.
3. **Outcome ground truth:** qualitative value/regret labels are primary for tuning; usage logs are telemetry/triggers only, not ground truth.
4. **D10 threshold action:** escalate-to-human-review + cap tier; auto-reject ONLY on independently-confirmed fraud/malware/impersonation.
5. **D7 vs D11 overlap:** keep independent — D7 = novelty, D11 = local marginal utility; D11 GATES/caps installs, does NOT add score.

## LOCKED v3.0 design — OVERLAY + GATE, not new weighted dimensions
**Core correction (Codex):** weighted D10/D11 would double-count (D10 ⊂ D1/D6/D8 popularity-trust; D11 ⊂ D7 novelty). Reuse existing machinery instead.

### Provenance/Trust → OVERLAY (same pattern as D9 niche-excellence)
- **New `scripts/lib/provenance.mjs`:** `assessProvenance(signals) → { trustTier: 'ok'|'suspect'|'fraud', flags[], confidenceCap, actionCap, rationale }`.
- **v3.0 signals** (computable from data already fetched): fork:star ratio, low-repo-activity correlation (StarScout's strongest signal), monthly star-spike if available, contributor diversity.
- **Effect in `decision.mjs`:** `suspect` → cap action tier + attach flag; `fraud` (independently confirmed) → safety-veto path. Never auto-reject on a single soft signal.
- **BACKLOG:** deep detector (GHArchive star-history, account entropy, Poisson/lockstep, star-giver profile validation) — needs bulk data + calibration.

### Gap-Fit/Marginal-Lift → GATE (reuse existing `objectiveRelevanceGate`)
- **New `config/stack-inventory.json`:** ruflo-native stack by layer + named gaps + strategic priorities.
- **New `scripts/lib/gap-fit.mjs`:** `assessGapFit(candidate, inventory, { scanIntent }) → { servesObjective, marginalValue, gapFilled?, rationale }`. gap-fill→high; enhance-existing→medium; duplicate→none; out-of-scope→none.
- **Effect:** feeds the EXISTING `routeDecision` → `objectiveRelevanceGate` (`decision.mjs:240`) `servesObjective`/`marginalValue` params. No new dimension, no category-profile renormalization.

### D3 runtime-pathway ladder → configurable, evidence-capped
- Constants (configurable): `MCP=10, plugin=9.5, skill=8, hook=6, npm-JS=5, CLI=3, Python=2`.
- Artifact type = STARTING value, **CAPPED by working-integration evidence** (mcp.json/SKILL.md present, docs, tests, install path). Gameable otherwise (Codex).

### Judge evidence schema → contract only (NOT LLM-judge wiring)
- Evidence item: `{ dimension, value, source, timestamp, confidence, rationale(short) }`. Missing = `null` (never fabricated). **NO chain-of-thought persisted** (short rationale + evidence refs only).
- Judges fill ONLY interpretive gaps; GitHub/OpenSSF/registry structured evidence stays authoritative. Full LLM-judge/ensemble = BACKLOG.

### Outcome logging → fields only (no auto-tuning)
- `outcome.mjs`: 30/60/90d fields (human value/regret labels + usage telemetry). Placeholder accuracy NEVER influences tuning. Weight-retraining = BACKLOG.

### Bug fix (Codex caught)
- **D6 publisher-risk** (`rubric.md §7`): `publisher_risk = single_publisher × log10(weekly_downloads+1)` can never reach thresholds 20k/50k (log10 maxes ~7). Fix formula + thresholds to be dimensionally consistent; add a test (axios→RED, normal→GREEN).

## V3.0-CORE (ship now — testable, no labeled data)
1. `provenance.mjs` overlay + `decision.mjs` wiring + tests
2. `gap-fit.mjs` + `config/stack-inventory.json` + `objectiveRelevanceGate` wiring + tests
3. D3 pathway ladder (configurable, evidence-capped) + tests
4. judge evidence schema + validation in `score.mjs` + tests
5. `outcome.mjs` 30/60/90d logging fields (no auto-tune)
6. D6 formula fix + test
7. `rubric.md` + `docs/dimensions/{D10-provenance,D11-gap-fit}.md` (overlay/gate spec, citation corrections, defaults-not-facts disclosure)

## BACKLOG (needs labeled/historical data — deferred, not dropped)
- Full StarScout/CopyCatch/GHArchive provenance detector + Poisson/CV/entropy/profile calibration
- LLM judges replacing deterministic heuristics; Claude+Codex 3-run ensemble, variance weighting, Platt scaling, ECE, 50-repo hand-labeled calibration
- Exa answer-engine as a SCORED discovery angle — **requires source-family canonicalization first** so Exa summaries can't inflate convergence (Codex: "Exa is a discovery provider, not automatically an independent source family")
- Spearman weight-retraining from outcomes (needs labeled outcomes per category + holdout + human approval)
- D10/D11 → weighted-dimension migration (explicitly rejected as double-counting)

## Dogfood gate (Phase D)
Run the engine on the memory-stack set (agentdb, mem0, zep, cognee, letta/MemGPT, **MemPalace**). **Pass criteria:** provenance overlay flags MemPalace (purchased stars + ChromaDB wrapper) → caps/rejects; gap-fit demotes agentdb-redundant candidates to STUDY; ranking is sensible. Then Codex consensus on verdicts → human gate.
