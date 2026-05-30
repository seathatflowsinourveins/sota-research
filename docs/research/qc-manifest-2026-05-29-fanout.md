# QC Manifest — Live Multi-Source Fan-out (G1) + Convergence Merge (2026-05-29, session 2)

> **Verdict: PASS (ship-ready).** GPT-5.5 @ xhigh found 2 MAJOR + 1 MINOR (all real), fixed via TDD (`e07d175`), then **re-confirmed PASS** on the post-fix state. Companion to the prior
> v3.1 sign-off ([qc-manifest-2026-05-29.md](./qc-manifest-2026-05-29.md)) and the
> [convergence grounding](./convergence-2026-05-29-research-arch-grounding.md) · [ADRs](./adr-2026-05-29-deferred-enhancements.md) · [plan](../superpowers/plans/2026-05-29-convergence-wiring-plan.md).

## Scope

Two bodies of work on `claude/gifted-shannon-d8930c` (PR #11 → `main`), beyond the prior v3.1 program:

1. **Convergence merge `5a02ceb`** — `origin/main` advanced 7 commits via PR#10 (D3/D6 production
   wiring, ship-gate, fail-closed inventory) after the v3.1 handoff, leaving PR #11 `CONFLICTING`.
   Merged `origin/main` in (took the v3.1 superset for the 9 `discover.mjs` + 2 `bootstrap.mjs`
   conflicts; KEPT main's reviewed fail-closed inventory; removed a silent auto-merge
   duplicate-`inventory` declaration; reconciled 3 test divergences — BUG E `build_not_install`→
   `servesObjective:false`, and seeded `config/stack-inventory.json` in 2 R1 tests). 229→233 green.

2. **Deferred item #1 — LIVE multi-source discovery fan-out (gap G1)**, 5 TDD slices:
   - **F1** `ba466e9` — `selectSources` deterministic relevance floor + `SOURCE_REGISTRY` (gpt-researcher `MCPToolSelector` fallback).
   - **F2** `84030b9` — `normalizeCandidate` + `extractRepoIdentity` (uniform shape; reserved-owner guard).
   - **F3** `8cfc6c6` — `canonicalSourceFamily` engine-variant fold (anti-astroturf; absorbs main's deferred `FAMILY_CANON`).
   - **F4** `429095f` — wire `selectSources` into `discover()` + `SKILL.md` live phase-1 workflow (6 real MCPs mapped) + R13 contract (live-fan-out backlog→wired).
   - **F5** `549fa3d` — R5 `renderTopNMatrix` pure-projection comparative matrix (un-deferred by the fan-out, ADR-R5 precondition met).

## Convergence-path decision (recorded per the operator's "decide with qc manifest")

**Decision: continue on `claude/gifted-shannon-d8930c` in its worktree and append to PR #11.** The
prior session's branch was the QC-PASSED v3.1 line and the head of the open PR into `main`;
reconciling with the advanced `main` was required to unblock PR #11 regardless. Working on that
branch (sole writer — the prior session handed off) is the cleanest execution of "append to the PR"
(no force-push, no PR replacement). The isolation rule was honored: a single writer per tree.

## Method (the convergence chain)

1. **Ground-truth recovery** — read the handoff/ADR/plan/QC; mapped the divergent git topology;
   confirmed the 229-green baseline before changing anything.
2. **Convergence merge** — `git merge -X ours` for the per-hunk-verified "take v3.1 superset"
   conflicts + manual fix of the auto-merge duplicate-`inventory` semantic hazard; the suite
   (incl. main's auto-merged tests) was the acceptance oracle.
3. **TDD per slice** — failing test → minimal impl → `npm test` + `npm run lint` green → commit →
   RESUME-HERE. The safety-critical guarantees (floor-preservation-under-cap, family-fold, the R13
   contract bite) were RED-verified before the fix.
4. **Cross-model QC** — this gate (GPT-5.5 @ xhigh, below).

## Model confirmation (the "advanced GPT-5.5" requirement)

This QC run's Codex session telemetry
(`~/.codex/sessions/2026/05/29/rollout-2026-05-29T18-23-09-*.jsonl`) records `model = "gpt-5.5"`,
`effort = "xhigh"` — matching `~/.codex/config.toml`. **Confirmed: the gate ran GPT-5.5 @ xhigh**
(resolving the prior session's caveat that it could not confirm the model was honored).

## Evidence

- **Tests:** 267 pass / 0 fail (20 files) — `npm test` (was 229 at the v3.1 baseline; +4 merge
  reconciliation, +34 feature/QC: F1×8, F2×8, F3×5, F4×5, F5×6, +2 QC-fix regression).
- **Lint:** `biome check .` clean (49 files).
- **Tree:** clean; 6 commits `5a02ceb..549fa3d`. No production fix from either branch dropped.
- **Stale-ref check:** every function the SKILL.md workflow names (`selectSources`,
  `normalizeCandidate`, `extractRepoIdentity`, `renderTopNMatrix`) is exported and wired.

## QC dimensions — verdicts

<!-- QC-FINDINGS-START -->
GPT-5.5 @ xhigh returned **CHANGES-REQUIRED** — 2 MAJOR + 1 MINOR, all real, all fixed via TDD
(RED reproduced each, then GREEN) in commit `e07d175`:

| # | Sev | Finding | Fix |
|---|---|---|---|
| 1 | **MAJOR** | `canonicalSourceFamily` under-folded UNDERSCORE tool-variants — JS `\b` treats `_` as a word char, so `^exa\b` matched `exa-web` but NOT `exa_web`; MCP names are underscore-heavy (`brave_web_search`, `semantic_scholar`, `s2_search`), so one engine could fake multi-source convergence. | Anchor → `^engine(?:[-_]\|$)` (explicit `-`/`_`/end). Closes the gap; keeps `example` un-folded. Added underscore coverage — my F3 tests used only hyphens (sharing the impl's blind spot). |
| 2 | **MAJOR** | `normalizeCandidate`/`extractRepoIdentity` crashed on `null` (the `= {}` default only covers `undefined`), so a null MCP result threw instead of being dropped as unscorable. | Both coalesce `result ?? {}` → return `null` on null/undefined. Regression test added. |
| 3 | MINOR | `renderTopNMatrix` JSDoc claimed it accepts "decision-shaped records" but only handles the phase4 candidate shape. | Corrected the doc to the actual contract. |

**Confirmed clean by the gate:** the github floor survives `maxSources` caps incl. 1; the
reserved-owner/gist guards block phantom candidates; the fail-closed inventory load is a scan
precondition (NOT a candidate verdict); no `origin/main` production fix dropped in the merge
surface; no conflict markers.

**Value of the fresh model:** MAJOR-1 (underscore folding) was an anti-astroturf gap the
implementation's own tests were blind to — exactly the class of bug a same-context author cannot see.

Re-confirm (GPT-5.5 @ xhigh) on the post-fix state (commit `e07d175`): **RECONFIRM: PASS** — all 3 fixes verified correct and complete (underscore fold + hyphen fold + no-false-fold; null/undefined→null no-throw; the JSDoc now matches the phase4-candidate contract).
<!-- QC-FINDINGS-END -->

## Sign-off

- **GPT-5.5 @ xhigh (Codex):** PASS — CHANGES-REQUIRED on the first pass (2 MAJOR + 1 MINOR, all
  fixed in `e07d175`), **RECONFIRM: PASS** on the post-fix state. Telemetry-confirmed `gpt-5.5`/`xhigh`.
- **Claude Opus 4.8:** verified 267 tests + Biome clean + tree clean independently; the soft-gate
  invariant holds (selection orders breadth, never rejects), the engine stays authoritative, and the
  fan-out's deterministic floor guarantees a non-empty source set.
