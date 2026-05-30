# SOTA Handoff — Research-Architecture v3.1 · session 2 → next session (2026-05-29)

## Status at a glance
- **Branch:** `claude/gifted-shannon-d8930c` (pushed to `origin`, tip `3f34e8e`). **PR: [#11](https://github.com/seathatflowsinourveins/sota-research/pull/11) → `main`** — now **`MERGEABLE`** (was `CONFLICTING`; the merge below reconciled it). `mergeStateStatus: BLOCKED` = the branch-protection gate (required checks/review), not a conflict.
- **State:** **267 tests pass, `biome check .` clean (49 files), tree clean.** 8 new commits `5a02ceb..3f34e8e` on top of the v3.1 program (20 commits `ef02772..4ca12a7`).
- **QC:** GPT-5.5 @ xhigh convergence gate → CHANGES-REQUIRED (2 MAJOR + 1 MINOR) → fixed via TDD (`e07d175`) → **RECONFIRM: PASS** ([qc-manifest-2026-05-29-fanout.md](./qc-manifest-2026-05-29-fanout.md)). Model telemetry-confirmed `gpt-5.5`/`xhigh`.
- **Shipped this session:**
  1. **Convergence merge `5a02ceb`** — `origin/main` had advanced 7 commits via PR#10 (D3/D6 production wiring, ship-gate, fail-closed inventory) AFTER the v3.1 handoff, so PR #11 went `CONFLICTING`. Merged `main` in (v3.1 superset for the 11 conflicts; KEPT main's fail-closed inventory; removed a silent auto-merge duplicate-`let inventory`; reconciled 3 test divergences incl. main's BUG-E `build_not_install`→`servesObjective:false`). No production fix from either branch dropped.
  2. **Deferred item #1 — LIVE multi-source discovery fan-out (G1), 5 TDD slices `ba466e9..549fa3d`:** F1 `selectSources` (deterministic relevance floor) · F2 `normalizeCandidate`/`extractRepoIdentity` · F3 `canonicalSourceFamily` engine-fold · F4 `discover()` wiring + `SKILL.md` live phase-1 workflow + R13 contract (live-fan-out backlog→wired) · F5 `renderTopNMatrix` (**R5 un-deferred**).
  3. **QC fixes `e07d175`** — underscore family-fold gap (JS `\b` treats `_` as a word char), null-crash in normalize/extract, an over-claiming JSDoc.

## Where everything lives (read these first next session)
- **This session's QC + decision record:** [qc-manifest-2026-05-29-fanout.md](./qc-manifest-2026-05-29-fanout.md)
- **Slice tracker (RESUME-HERE):** [plan](../superpowers/plans/2026-05-29-convergence-wiring-plan.md) — F1–F5 + QC checked; "Deferred #1" section documents the fan-out design + grounding.
- **Design source-of-truth (unchanged):** [convergence grounding](./convergence-2026-05-29-research-arch-grounding.md) · **deferred decisions:** [ADRs](./adr-2026-05-29-deferred-enhancements.md) · **prior v3.1 sign-off:** [qc-manifest-2026-05-29.md](./qc-manifest-2026-05-29.md) · **prior handoff:** [HANDOFF-2026-05-29.md](./HANDOFF-2026-05-29.md)
- **The fan-out runtime:** `.claude/skills/sota-research/SKILL.md` "Discovery Workflow — Phase-1 Live Multi-Source Fan-out (G1)" (steps 1–7). The pure scaffold: `scripts/lib/source-registry.mjs` (`selectSources`/`normalizeCandidate`/`extractRepoIdentity`) + `scripts/lib/top-n-matrix.mjs` (`renderTopNMatrix`) + `canonicalSourceFamily` in `scripts/discover.mjs`.
- **Memory:** `architecture-v3.1-convergence-wiring.md` (session-2 block) + `MEMORY.md`.

## Deferred backlog — priority-ordered, each with its revive-precondition
1. **DOGFOOD the live fan-out end-to-end (highest value now).** F1–F5 wired the deterministic scaffold + the SKILL.md workflow prose, but no REAL scan has exercised the 6 MCP sources live. Run `/sota-research find <topic>` for a real category (e.g. "mcp-server"), have the workflow call the actual MCPs (github/exa/tavily/brave/jina/semantic-scholar), normalize → `phase2Convergence` → engine → decision-envelopes, and **emit a real R5 Top-N matrix** (it should now show ≥2 scored same-category candidates). This validates the design against reality and produces the first multi-family convergence evidence. Revive: immediately — everything it needs is wired.
2. **Honeypot / active-malware detection (HARD-SAFETY, A.8).** Still a stub; no external convergence source found. `KNOWN_BACKLOG` in `rubric-contract.mjs`. Revive: when an active-malware/typosquat detector with ≥3 independent source families surfaces.
3. **Weight auto-tuning / judge calibration (G5 second half).** Blocked on a labeled outcome corpus — which R1's `decisions.jsonl` accumulates (and the dogfood scan in #1 feeds). Keep `outcome.mjs computeDimensionAccuracy` at `calibrated:false` until labeled `value_label`s + holdout exist; then add `run_id`-based cross-run dedup (C2 laid the keys).
4. **R8 agreement-scalar / R10 evidence-compression / R11 groundedness / R14 registry** — ADR-documented, each with a revive trigger (R10/R8 need the rich per-dimension evidence the live scoring subagents will produce post-dogfood).
5. **Tiny:** `npm run discover` CLI exposes `--topic/--category/--limit/--budget` but not `--maxSources` (library/workflow callers pass it). One-line addition if wanted — not a bug.

## Gotchas for the next session
- **PR can go stale under you.** `main` advanced via PR#10 *after* the v3.1 handoff and silently flipped PR #11 to `CONFLICTING`. **First move each session: `gh pr view 11 --json mergeable,mergeStateStatus` + `git fetch` + check `origin/main` hasn't moved** before building on the branch. Reconcile (merge `origin/main`) before continuing.
- **Worktree:** you're sole writer on `claude/gifted-shannon-d8930c` in its worktree. `.git` is a file → write commit messages to a temp file + `git commit -F` (avoid backticks in `-m`). The harness may launch you in a DIFFERENT auto-worktree (this session was launched in `fervent-chatelet-042684` but the work belongs on the gifted-shannon branch/PR — confirm which branch the PR tracks before writing).
- **`npm install` is blocked by the SOTA-gate hook** (false positive on the existing devDeps) → re-run with `SOTA_GATE_OK=1 npm install`. It's restoring already-vetted deps, not adopting new ones.
- **Lint output gets garbled by a stop-hook** when piped through `tail`/`grep` (an injected "ESLint output (JSON parse failed)" line). Ground truth: `npm run lint > file 2>&1; cat file` and read biome's own "Checked N files" + exit code.
- **Codex model:** `~/.codex/config.toml` pins `gpt-5.5 @ xhigh`; confirm per-run via `~/.codex/sessions/<date>/rollout-*.jsonl` (`model`/`effort`). The model self-describes as "GPT-5" — trust config + telemetry, not the self-report. Run a review with `codex exec -c sandbox_mode="read-only" -c approval_policy="never" < prompt.txt` (read-only so it can't edit; prompt via stdin to avoid shell-interpreting backticks).
- **Test discipline that bit us (GPT-5.5 catch):** when a pure function has a boundary (regex anchors, separators, null/empty), test BOTH delimiters/edges. The underscore family-fold gap survived because the F3 tests used only hyphens — sharing the implementation's blind spot. A fresh-model review on the FINAL state is the antidote.
- **Sacred invariants (do not regress):** the soft-gate (only SAFETY hard-rejects; selection/relevance only order/cap, never drop) and the engine being authoritative (emit/honor the `routeDecision` decision-envelope; never hand-edit the tier). The R13 rubric-contract test enforces declared==wired — keep `KNOWN_BACKLOG` honest.

## ▶ Ready-to-paste NEXT-SESSION PROMPT

```
Continue the sota-research program. First check PR #11 isn't stale:
`gh pr view 11 --json mergeable,mergeStateStatus` + `git -C C:/SEA/src/sota-research/.claude/worktrees/gifted-shannon-d8930c fetch origin`
and confirm origin/main hasn't advanced again (reconcile if it has). Read
docs/research/HANDOFF-2026-05-29-session2.md + the plan's RESUME-HERE, then `npm test`
(confirm 267 green) before changing anything.

Goal: DOGFOOD the live multi-source fan-out (deferred backlog #1). Run a real discovery scan
via the SKILL.md workflow — selectSources(topic, category) → call the 6 real MCP sources
(github/exa/tavily/brave/jina/semantic-scholar) → normalizeCandidate → phase2Convergence →
phase4Score → routeDecision → emit one decision-envelope per candidate into inventory/scan-<ts>.md,
and emit the R5 renderTopNMatrix when ≥2 same-category scored candidates result. Keep the soft-gate
sacred + the engine authoritative. Record the scan + a GPT-5.5 @ xhigh QC in docs/research/.
This produces the first real multi-family convergence evidence and begins feeding the
decisions.jsonl corpus that unblocks weight-calibration (backlog #3).

Stay single-thread unless a genuine parallel/discovery need arises. Append to PR #11 when green.
```
