# QC Manifest — Research-Architecture v3.1 (2026-05-29)

> **Verdict: PASS (ship-ready).** Multi-angle convergence + 3 Claude skeptic lenses + GPT-5.5 @ xhigh cross-model consensus, with a TDD implementation and a final QC convergence pass that caught + fixed one real bug. Companion: [convergence grounding](./convergence-2026-05-29-research-arch-grounding.md) · [deferred ADRs](./adr-2026-05-29-deferred-enhancements.md) · [references](../../inventory/references.md) · [plan](../superpowers/plans/2026-05-29-convergence-wiring-plan.md).

## Scope
The v3.1 "convergence-wiring" program: **19 commits `ef02772..d18180a`** on branch `claude/gifted-shannon-d8930c`. Wired 8 designed-but-inert capabilities into the discovery/scoring/decision pipeline (R1,R3,R2,R6 + R7,R9,R4-safe,R13), recorded deferred work as ADRs, resolved a code review, and grounded the architecture in ingested SOTA references.

## Method (the convergence chain)
1. **Discovery** — 27-agent multi-angle convergence workflow (`wf_a345ed04-297`, 58 candidates, 6 blind angles).
2. **Design gate** — 3 adversarial skeptic lenses + GPT-5.5 @ xhigh consensus → prioritized ADOPT/ADAPT/REJECT (all Tier-1 = ADJUST, zero CUT).
3. **Implementation** — TDD per slice (failing test → minimal code → green → Biome → commit).
4. **Code review** — GPT-5.5 cross-model pass → C1 hardened, S2/S3 hardened; C2/C3 adjudicated (one deferred, one a non-bug).
5. **Resolution** — S1/S4/C2 fixed; architecture grounded (4 SOTA repos ingested via repomix+deepwiki → `inventory/references.md` + `patterns/`).
6. **QC convergence gate** — GPT-5.5 @ xhigh → found **1 real bug** (bootstrap safety-forwarding); fixed (`d18180a`) + regression-tested; **re-confirmed PASS**.

## Model confirmation (the "advanced GPT-5.5" requirement)
Codex session telemetry (`~/.codex/sessions/rollout-2026-05-29T16-50-06-*.jsonl`) records `turn_context.model = "gpt-5.5"`, `effort = "xhigh"`, matching `~/.codex/config.toml` (`model = "gpt-5.5"`, `model_reasoning_effort = "xhigh"`). The earlier "GPT-5" report was the model's own (unreliable) self-description, **not** the wrong model. **Confirmed: the consensus gate ran GPT-5.5 @ xhigh.**

## QC dimensions — final verdicts
| Dimension | Verdict | Evidence |
|---|---|---|
| Correctness | **PASS** (after `d18180a`) | The one bug — bootstrap not forwarding `candidate.safety` → fail-closed silently capping safety-verified discovery candidates to STUDY — is fixed + regression-tested. |
| Soft-gate invariant | **PASS** | Only SAFETY (license/archived/confirmed-malware/fraud) hard-rejects; quality/relevance/pathway only CAP to STUDY/REFERENCE; low-star niche repos never auto-reject. |
| Security | **PASS** | `limit` clamped before GraphQL interpolation; GraphQL uses variables for user/repo; `writeScanMarkdown` path-containment via `relative()` (FS-root edge fixed); `git diff --check` clean. |
| Evidence contract | **PASS** | Missing dimension = `null`, never fabricated; coverage gate caps rather than invents; chain-of-thought stripped. |
| Tests | **PASS** | 229 tests, meaningful (the vacuous Phase-2 tests were de-vacuumed in S4); the safety bug now has a regression test. |
| Maintainability | **PASS** | engine↔workflow binding coherent; docs↔code reconciled; the false "route identically" comment corrected with the fix. |

## Bugs found & fixed during QC
| Found by | Issue | Fix |
|---|---|---|
| GPT-5.5 code review | C1 — R13 contract required-set derived from the producer map (couldn't detect removal) | `d124c4d` — frozen `REQUIRED_PRODUCER_KEYS` + key-deletion test |
| GPT-5.5 code review | S2/S3 — unclamped GraphQL `limit`; unbounded scan-file path | `d124c4d` |
| GPT-5.5 QC gate | FS-root path-containment edge | `9edd47c` — `relative()`-based check |
| GPT-5.5 QC gate | **bootstrap dropped `candidate.safety`** → fail-closed wrongly capped safety-verified discovery candidates | `d18180a` — forward `safety` + regression test |
| self-review | S1 phase2 source-merge drop/dup; S4 vacuous tests; C2 no provenance | `07892a9` / `b76afc0` / `0875447` |

## Evidence
- **Tests:** 229 pass / 0 fail (18 files) — `npm test`.
- **Lint:** `biome check .` clean (45 files).
- **Tree:** clean. Branch pushed to `origin/claude/gifted-shannon-d8930c`.

## Residual nits (non-blocking — explicitly accepted)
- `tests/decision-routing.test.mjs` — one tautological assertion; tighten opportunistically.
- `decision-log.mjs renderScanMarkdown` — markdown table cells not `|`-escaped. **Accepted:** repo names / enum categories / fixed flags cannot contain `|`; escaping impossible input is the over-build anti-pattern this program fought. Revisit only if a free-text cell is ever added.

## Sign-off
- **GPT-5.5 @ xhigh (Codex):** PASS — "v3.1 is ship-ready; no new logic regression, type error, or silent swallow."
- **Claude Opus 4.8:** PASS — verified 229 tests + Biome clean + tree clean independently; soft-gate invariant + evidence contract hold.
- **Deferred work** (not in scope, revive-preconditions in the ADR): honeypot/active-malware detection, live multi-source fan-out, weight auto-tuning, R5/R8/R10/R11/R12/R14.
