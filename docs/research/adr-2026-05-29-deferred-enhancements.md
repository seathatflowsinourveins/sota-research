# ADR — Deferred Enhancements (2026-05-29 convergence program)

> Status: **Accepted.** Companion to the [convergence grounding](./convergence-2026-05-29-research-arch-grounding.md) + [wiring plan](../superpowers/plans/2026-05-29-convergence-wiring-plan.md).
> Context: the 58-candidate convergence + 3 Claude skeptics + GPT-5.5 @ xhigh consensus found the repo's disease is **over-specification-vs-implementation**, not under-design. So Tier 1+2 *wired* what existed (R1,R2,R3,R6,R7,R9,R4-safe,R13); the items below are deliberately **deferred with a revive-precondition** rather than speculatively built. Recording them prevents both re-litigation and silent loss.

Each: **verdict · why · the precondition that revives it.**

---

## ADR-R15 — KEEP deterministic family-convergence (do NOT adopt ODR's LLM-compression for dedup)

**Verdict: KEEP (REJECT the replacement).** langchain-ai/open_deep_research deleted its legacy deterministic `deduplicate_and_format_sources`/`split_and_rerank` in favor of LLM compression (kept in `src/legacy/`). That is the right trade for a *narrative research agent*, but **wrong for a trust/audit system**: the anti-astroturf family-convergence accounting (R9) MUST be reproducible and explainable, and determinism is the strength there.
**Why:** an audit verdict that changes because an LLM summarized differently is not auditable. ODR's own `ParallelMuse INTEGRATE_PROMPT` ("agreement increases likelihood but is not guaranteed") supports *capped* convergence, not certainty.
**Boundary:** LLM compression is adopted only for the *evidence narrative* layer (see ADR-R10), never for family-counting or dedup.
**Revive:** never for dedup. Revisit the narrative-layer boundary only if evidence packs grow unwieldy.

## ADR-R5 — Comparative Top-N per-dimension matrix (build, deferred)

**Verdict: DEFER (build-not-borrow confirmed).** No surveyed deep-research agent (gpt-researcher, open_deep_research, Alibaba/DeepResearch) ships a head-to-head per-dimension comparison as a workflow node — their *absence* proves G4 is a genuine differentiator. Convergence supplies only rendering discipline (DavidZWZ/Awesome-Deep-Research's enum-column matrix; LibVulnWatch's leaderboard) + MCDA math (pymcdm/scikit-criteria), not a transplantable implementation. `docs/protocols/decision.md` already specs the matrix; the YAGNI skeptic + GPT-5.5 both said don't build the engine until it has inputs.
**Why now-deferred:** with 7/8 discovery sources still stubbed and gap-fit conservative, scans rarely yield ≥2 scored same-category candidates — the matrix would render mostly-empty rows.
**Revive when:** the live multi-source fan-out (workflow layer) routinely produces **≥2 scored candidates of the same category per scan**. Then ship ONLY the pure-projection table (rows × [D1–D8, final_score, Tier, AdoptionPathway, Families, Provenance, GapFit]) — a cheap render of fields `routeDecision`/`decision-log` already produce, columns enum-constrained from `decision.mjs`/`d3-pathway.mjs`/`provenance.mjs`.

## ADR-R10 — Per-candidate evidence compression at the scoring→decision seam (deferred)

**Verdict: DEFER (premature).** open_deep_research `compress_research`, DeepResearch `EXTRACTOR_PROMPT`, and the Anthropic multi-agent article all compress per-worker so only the conclusion returns — good context discipline. But the script currently returns small structured evidence and D3–D8 are `null` unless an agent supplies them, so there is little to compress yet.
**Revive when:** stage-2 scoring subagents routinely return *rich* per-dimension evidence (post live multi-source fan-out). Then codify in `scoring.md`/SKILL.md that each scoring subagent (under `isolation:worktree`) returns a compressed evidence-pack (the D1–D11 `{value,source,timestamp,confidence,probe_status}` + ≤200-word rationale), routing the read-then-compress to Haiku. Aligns with CLAUDE.md "push heavy work into subagents; only the conclusion returns."

## ADR-R8 — Convergence-AGREEMENT scalar (rank-correlation) atop family-COUNT (deferred)

**Verdict: DEFER (sophistication ahead of need).** Today convergence is count-based (`blend.mjs` families → `convergenceActionCap`); nothing measures whether independent reviewers *agree* (weighted-Spearman / tier-Hamming, per scikit-criteria `RanksComparator` / pymcdm `correlations.py`). Valuable, but it needs ≥2 independent reviewers producing dimension vectors at runtime — which don't exist yet (Codex consensus isn't wired in-script; only 1 source family is live). The MAD/ChatEval debate literature is also countered by "Rethinking the Bounds of LLM Reasoning" (debate ≠ always better) — so apply only where it earns its cost.
**Revive when:** Codex consensus is wired AND real source families produce ≥2 independent dimension vectors per candidate. Start with the cheapest signal (does Codex agree with the rubric tier?) before full rank-correlation. Wire as a NEW soft gate (review-only, never reject).

## ADR-R11 — Groundedness gate (deferred; if built, EXTEND existing checks — no new ritual module)

**Verdict: DEFER.** Skeptics split: YAGNI said keep only a logged reflection prompt and drop a `groundedness.mjs` module; the integration lens said the reflection prose is unenforceable (same G2 rot pathology) and the *enforceable* piece is the gate. **GPT-5.5 broke the tie: build the gate by EXTENDING `evidenceCoverageGate` + the existing `evidence.mjs` source-requirement + `claimFreshnessGate` — do NOT add a standalone reflection ritual or a new module.**
**Revive when:** evidence packs carry per-claim source links (post-R10) such that a grounded-claims fraction is computable; then extend `evidenceCoverageGate` to also require a minimum grounded-claim ratio for INSTALL. No prose-only reflection step (it rots).

## ADR-R12 — Per-scan budget ceilings (reduced to a one-liner; per-candidate caps deferred)

**Verdict: DEFER the machinery (no live unbounded process).** `discover`/`bootstrap` are already bounded by `--limit`/`--budget`/`maxCost`; the "unbounded scan" scenario only exists in the autonomous multi-agent harness, which isn't this repo. GPT-5.5: reduce to one rule, don't build per-candidate iteration caps.
**Action taken:** the rule is captured in `discovery.md`/SKILL.md intent — "deep-score at most Top-K per category; on budget hit, emit the best partial ranked shortlist + mark the remainder WATCH/backlog; never crash, never silently drop." 
**Revive when:** an autonomous always-on scan harness is built (DeepResearch `react_agent` triple-caps + ODR dual-ceilings are the reference).

## ADR-R14 — Dimension-registry template-method refactor (rejected for now)

**Verdict: REJECT for now (gold-plating by its own admission).** `routeDecision` is already a clean ordered-gate template-method; refactoring `computeDimensions` (score.mjs) into a pymcdm-style registry is "structural, not a new capability" and touches the core scoring path for no behavior change. The full-depth invariant ("score all 8 dims, no cheap-skip") is already enforced by the evidence coverage gate + the `null`-not-fabricated contract + the R13 rubric-contract test.
**Revive when:** a SECOND live expert scorer beyond Codex appears, OR genuinely pluggable per-category weighting strategies are needed — then do the minimal registry, not the full framework.

---

## Cross-cutting: still-open backlog (tracked, not in this program)

- **Honeypot / active-malware detection** for the HARD SAFETY gate (Megalodon, Appendix A.8) — still a stub; no convergence source surfaced active-malware/typosquat detection (only health metrics). Allowlisted in `rubric-contract.mjs KNOWN_BACKLOG`.
- **Live multi-source fan-out** — 7/8 sources are workflow-layer (MCP) stubs in-script; R4-safe made the run-status honest. The real fan-out belongs to the SKILL.md workflow (RAG-MCP relevance-routing is the reference design). Allowlisted.
- **Weight auto-tuning / judge calibration** — blocked on a labeled outcome corpus, which R1 (decisions.jsonl persistence) now begins to accumulate. Keep tuning manual-gated (`outcome.mjs` `computeDimensionAccuracy` stays `calibrated:false`) until labeled `value_label`s + holdout exist. Allowlisted.
