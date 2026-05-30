# Convergence Grounding — Research-Architecture Enhancement (2026-05-29)

> **Purpose.** Ground the next iteration of the discovery/scoring/decision architecture in *external SOTA convergence* (gap G7), not in priors. This is the durable source-of-truth artifact for the 2026-05-29 enhancement program. Design → [spec/plan](../superpowers/plans/2026-05-29-convergence-wiring-plan.md). Deferred decisions → [ADRs](./adr-2026-05-29-deferred-enhancements.md).

## Provenance

- **Method:** a 4-phase multi-agent convergence workflow (run `wf_a345ed04-297`): 6 *blind* research angles in parallel → convergence aggregation (independent-source-family counting) → repomix/deepwiki deep-ingest of the top 8 repos → synthesis + 3 adversarial skeptic lenses → **GPT-5.5 @ xhigh cross-model consensus gate**.
- **Scale:** 27 subagents (Opus 4.8), ~2.67M tokens, 407 tool calls, ~29 min. 73 raw candidates → **58 unique** after dedup.
- **Epistemic note:** the workflow deliberately mirrors the architecture's *own* convergence principle — each angle is an independent source family; a pattern surfacing across many angles is high-convergence, exactly how the rubric's `convergence_factor` treats repos. We researched the system using the system's epistemology.

## Top convergence candidates

| Candidate | Kind | Families | Gaps | Note |
|-----------|------|:-------:|------|------|
| Deep Research Agents: Systematic Examination & Roadmap — arXiv:2506.18096 | paper | **4** | G7,G1,G4 | Highest convergence; the external reference design G7 was never validated against. |
| OpenSSF Scorecard (`ossf/scorecard`) | tool | 3 | G6,G4 | 18 checks 0–10, public API/BigQuery. Named in rubric, never wired. |
| A Survey on LLM-as-a-Judge — arXiv:2411.15594 | paper | 3 | G2,G6,G7 | Judge-debiasing taxonomy; the calibration literature scoring never validated against. |
| RAG-MCP — arXiv:2505.03275 | paper | 2 | G1,G3,G6 | Tool discovery = semantic retrieval+rank (43.1% vs 13.6% selection acc). Direct G1/G3 answer. |
| MCP-Zero — arXiv:2506.01056 | paper | 2 | G3,G1 | Active capability-gap-driven tool request → IS the `servesObjective` framing. |
| CALM (Justice or Prejudice?) — arXiv:2410.02736 (ICLR'25) | paper | 2 | G7,G6,G2 | 12-bias judge harness; **Authority-bias: judges trust fake citations** → validates D10 at judge layer. |
| `ossf/criticality_score` | tool | 2 | G6 | Popularity-*debiased* importance; OpenSSF's own warning "measures activity, not criticality" validates the soft-gate. |
| ScaleMCP — arXiv:2505.06416 | paper | 2 | G1,G5,G6 | MCP servers as single source of truth, auto-sync index. |
| `langchain-ai/open_deep_research` | repo | 2 | G1,G7,G5 | `clarify_with_user` gate; `compress_research` per-worker; pairwise eval; deleted deterministic dedup (see R15). |
| `Alibaba-NLP/DeepResearch` (Tongyi) | repo | 2 | G7,G5,G1 | IterResearch evolving-report memory; `WebWeaver url2id` citation ledger; budget caps. |
| Anthropic — multi-agent research system (article) | article | 1 | G1,G2,G5 | First-party orchestrator-worker; lead persists plan to Memory; CitationAgent. |
| PAJAMA — arXiv:2506.10403 | paper | 1 | G2,G6 | LLM *synthesizes a deterministic scoring program* from the rubric (consistency 48%→64%, ~$0.05 vs ~$133/60K). |
| `assafelovic/gpt-researcher` | repo | 1 | G1,G6,G7 | `MCPToolSelector` LLM-router + deterministic top-k fallback; `tool_selector` ranks by relevance not frequency. |
| `HKUDS/CLI-Anything` | repo | 1 | G3,G5 | `HARNESS.md` "read first, do not improvise"; escalating 4-layer evidence ladder; fail-closed truthfulness. |
| `pymcdm` / `scikit-criteria` | repo | 1–1 | G4,G8 | MCDA libs (TOPSIS/PROMETHEE/VIKOR; entropy/CRITIC/MEREC objective weighting; RanksComparator rank-correlation). |

## Cross-source patterns (where the angles agreed)

1. **MCP/tool discovery is a semantic retrieval+ranking problem** (RAG-MCP, MCP-Zero, ScaleMCP, Dynamic-ReAct) — index, retrieve top-k by relevance *before* the LLM sees them. The per-query relevance score **is** the orphaned `servesObjective`. → G1+G3+G6.
2. **LLM-as-judge needs calibration + bias-auditing** (CALM, CJE, PAJAMA, reporting-CIs) — a raw weighted-sum×10 single-judge score is statistically unsound; biases include length/position/authority/concreteness. → G2+G7.
3. **MCDA is the citable replacement for the hand-rolled weighted sum** (pymcdm/scikit-criteria) — and gives objective weighting + rank-correlation agreement. → G4+G6.
4. **OSS-trust is a standardized automatable stack** (Scorecard + Criticality Score + CHAOSS) — *and* OpenSSF's own "activity ≠ criticality" caveat independently validates the project's core soft-gate principle (low popularity must never auto-reject). → G6.
5. **Persistence-as-system-of-record is the dominant lever** (File-as-Bus, Anthropic plan-to-Memory, gpt-researcher typed state, DeepResearch evolving report) — rigor in transient prompts is inert; durable inspectable files must be what later agents and the gate engine read. → G2+G5.

## Tensions (kept deliberately unresolved → choice, not default)

- **Multi-agent debate** (MAD, ChatEval) vs **"Rethinking the Bounds of LLM Reasoning"** (debate often does *not* beat a single strong agent). → apply consensus only where it earns its cost (ties to marginal-value).
- **Program-as-judge** (PAJAMA: determinize the rubric) vs **agentic/debate judge** (enrich the judge). Two opposite routes to G2. Both high-value; pick deliberately. *(This program reframes G2 as "wire the existing deterministic engine into the workflow" — closer to the PAJAMA pole, which suits an audit system.)*

## Coverage holes (no external pattern — itself a finding)

- **G4 comparative Top-N matrix:** *no surveyed agent ships one* (gpt-researcher/ODR/DeepResearch all lack it). Absence proves G4 is a **build-not-borrow differentiator**; convergence supplies only rendering discipline (enum columns) + MCDA math, not a transplantable impl.
- **Weight auto-calibration (2nd half of G5):** no validated external mechanism for a discovery system; the project's own "tuning OFF until labeled `value_labels` + holdout" is *more* conservative than any precedent. Convergence reinforces keeping it manual-gated — persist now (R1), tune later.
- **Judge calibration (G7 sub-gap):** strong *theory* (isotonic calibration, CJE, PAJAMA) but every recipe needs a labeled oracle corpus the project doesn't have — blocked on R1 persistence.
- **"Degree of adaptness" (INSTALL keyed to verified runtime surface):** only CLI-Anything's evidence ladder partially fits; tying INSTALL to a real runtime-surface probe (mcp.json parsed / SKILL frontmatter valid / npm bin on PATH / Windows-runnable) is a project-specific build.
- **Honeypot/supply-chain malware detection** (HARD SAFETY gate, Appendix A.8): all surfaced security signals are health/quality (Scorecard/CHAOSS), none is active-malware/typosquat detection.

## Recommendations & verdicts

15 recs from synthesis, filtered by 3 skeptic lenses (YAGNI / evidence-fidelity / integration) then GPT-5.5 @ xhigh. **GPT-5.5 returned every Tier-1 item as ADJUST (zero CUT)** and caught breakage risks the Claude skeptics missed.

| Rec | Proposal | Gap | Skeptic outcome | GPT-5.5 | Decision |
|-----|----------|-----|-----------------|---------|----------|
| R1 persist `decisions.jsonl` + `scan-<ts>.md` | ADOPT | G5 | HELD ×3 | ADJUST (atomic+baseDir; cover bootstrap; fix filename drift) | **Tier 1** |
| R3 feed gap-fit + adoption-pathway into `phase4Score` | ADOPT | G3 | HELD ×3 | ADJUST | **Tier 1** |
| R2 bind workflow to `routeDecision` decision-envelope + anti-improvisation | ADOPT | G2 | HELD ×3 | ADJUST (low risk) | **Tier 1** |
| R6 rank by relevance×evidenced-quality, forbid appearance-count | ADOPT | G6 | HELD ×3 | ADJUST (after R3; update 2 bootstrap tests) | **Tier 1** |
| R7 OpenSSF Scorecard real probe + `probe_status` | ADOPT | G6/G4 | HELD ×3 | ADJUST (**cap confidence, NOT fail-closed-reject**) | **Tier 2** |
| R9 canonicalize forks/mirrors before family-count | ADAPT | G6 | HELD ×3 | KEEP | **Tier 2** |
| R13 rubric-contract self-test | ADAPT | x-cut | HELD (Y-high) | ADJUST (**scoped CI test + backlog allowlist, not load-time hard-fail; land last**) | **Tier 2** |
| R4 SourceAdapter fan-out | ADAPT | G1 | YAGNI-refuted→med | ADJUST (**status in separate channel — `{status:'NOT_RUN'}` breaks `batch.forEach`**; wire 1 source; defer factory) | **Tier 2 (safe form)** |
| R5 comparative Top-N matrix engine | ADAPT | G4 | YAGNI-refuted→med | defer engine | **Tier 3 / ADR** |
| R10 evidence compression at scoring seam | ADAPT | x-cut | mixed | premature (D3–D8 null unless supplied) | **Tier 3 / ADR** |
| R8 convergence-agreement scalar | ADAPT | G7 | YAGNI-refuted→low | defer (needs ≥2 live reviewers) | **Tier 3 / ADR** |
| R11 forced-reflection / groundedness | ADAPT | x-cut | skeptic conflict | **groundedness via *extending* `evidenceCoverageGate`, no module/prose** | **Tier 3 / ADR** |
| R12 budget ceilings | ADAPT | x-cut | YAGNI-refuted→low | 1 sentence (no live unbounded process) | **Tier 3 / ADR** |
| R14 dimension-registry refactor | ADAPT | x-cut | YAGNI-refuted→low | reject for now | **Tier 3 / ADR** |
| R15 keep deterministic dedup (vs ODR LLM-compression) | REJECT-the-replacement | G7 | HELD correct | KEEP as 1 ADR line | **Tier 3 / ADR** |

### GPT-5.5 factual corrections (folded in)
- **CI is `workflow_dispatch` (manual), not cron.** The only cron is `scorecard.yml`. (Runtime face B = bootstrap.mjs still executes for real on dispatch.)
- **Output-naming drift bug:** `bootstrap.mjs` writes `inventory/bootstrap-<date>.md` but the PR body points reviewers to `inventory/scan-*.md`. R1 reconciles this.
- **R7 "fail-closed" too strong** for an OpenSSF outage — produce `probe_status` + cap confidence, never auto-reject (protects the soft-gate).
- **R6** breaks tests asserting `rubric_score` sort (`tests/bootstrap.test.mjs:216-223`) — the test update is part of the slice.
- **R13 sequencing:** strict "every declared producer exists" would fail *before* R1/R3/R7 land → scope + allowlist + land last.

## Citation discipline

The architecture's history includes a fabricated-citation incident (SourceBroken 2409.16342). Several high-fit papers carry **future-format/unverified arXiv IDs** flagged by the research angles as seen-in-tool-but-unconfirmed: `2604.13018` (File-as-Bus), `2601.15808` (DeepVerifier), `2602.13855` (claim-auditability), `2512.11150` (CJE), `2605.24660` (BoR), `2601.05111`, `2603.05912`. **Rule:** cite the *mechanism* (which maps 1:1 onto gaps); do **not** write any of these IDs into rubric/protocol docs until an independent resolve-check confirms them. **Safe to cite now:** `2506.18096`, `2505.03275`, `2411.15594`, `2410.02736`, `2506.01056`, `2505.06416`, `2506.10403`, `ossf/scorecard`, `ossf/criticality_score`, the Anthropic article, and all ingested repos.
