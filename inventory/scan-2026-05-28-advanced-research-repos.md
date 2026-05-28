# Scan: Advanced Research Repos — Definitive-Evidence Convergence @ 2026-05-28

> **Method:** 48-agent debiased workflow (`wf_d6daf2a0-fb2`) — 59 candidates pooled across 5 areas
> (deep-research agents · multi-agent research · research-with-code/autonomous-scientist · RAG/knowledge-
> synthesis · research-eval/grounding). Top candidates judged by **3 independent lenses** (proponent /
> skeptic-forbidden-from-stale-claims / fit) → a **recency-weighted reconciler** that only lets a verdict
> stand on **≥2 independent, dated, cited sources**, with a forced `bias_check`. No optimism/skepticism
> by default — only fresh convergent evidence.

## Headline (debiased)

**There is no clean INSTALL-NOW.** The strongest candidate is a STUDY→install-candidate; the famous
names are **security-gated**. This modest, evidence-grounded result is the debiasing working as designed.

| Repo | Verdict | Conf | Decisive dated evidence | Caveat |
|---|---|---|---|---|
| **LearningCircuit/local-deep-research** | **STUDY** → install-candidate | 0.84 | 95.7% SimpleQA (HF leaderboard, verified 2026-05-27, n=300); native MCP server, 7 research tools; CVE-2025-67743 fixed v1.3.9+ | benchmark sample-size (n=300); validate before INSTALL |
| aiming-lab/AutoResearchClaw | STUDY | 0.76 | +54.7% over AI Scientist v2 on ARC-Bench (arXiv:2605.20025, 2026-05-19); multi-agent debate + 4-layer citation verify | autonomy over-claimed; pattern-study |
| microsoft/graphrag | STUDY | 0.76 | GraphRAG-Bench ICLR 2026 (1,018 expert-annotated Qs); **−13.4% vs vanilla RAG on fact lookup**, +4.5% multi-hop, 2.3× latency (arXiv:2506.05690) | not a universal win — task-dependent |
| stanford-oval/storm | STUDY | 0.76 | NAACL 2024 + EMNLP 2024 peer-reviewed; citation accuracy 65–94% | **TLS bypass** `verify=False` (CWE-295, live 2026-05-28) → fix before use |
| assafelovic/gpt-researcher | STUDY | 0.72 | v3.5.0 (2026-05-28) fixed Haiku-4.5 deep-research; MCP-native | **CVE-2026-5632 (missing auth) + CVE-2026-5633 (SSRF) unpatched 49–52 days** |
| infiniflow/ragflow | STUDY | 0.68 | v0.25.6 (2026-05-27) active; CVE-2026-24770 Zip-Slip patched | CVE-2026-28797 (SSTI) patch status unconfirmed |
| langchain-ai/open_deep_research | REFERENCE | 0.74 | #6 Deep Research Bench (RACE 0.4344, 2025-08); MIT, MCP-native | **last human commit 2025-08-27** — effectively frozen |
| arXiv:2603.07379 (SoK: Agentic RAG) | REFERENCE | 0.72 | POMDP formalization + failure-mode taxonomy | Singh et al. (2501.09136) predates + dominates citations |
| DEEP-PolyU/Awesome-GraphRAG | REFERENCE | 0.92 | 150+ papers, 8-dim taxonomy; weekly commits (2026-05-21) | awesome-list → capped REFERENCE per rubric |

## Per-area winners
- **deep-research agents:** LearningCircuit/local-deep-research (LangGraph adaptive engine, 95% SimpleQA, AES-256 privacy)
- **multi-agent research:** LearningCircuit/local-deep-research > gpt-researcher (security-gated) > AutoResearchClaw
- **research-with-code:** stanford-oval/storm (peer-reviewed novelty; STUDY post-TLS-fix)
- **RAG/knowledge-synthesis:** microsoft/graphrag (GraphRAG-Bench + LazyGraphRAG 0.1% cost)
- **research-eval/grounding:** **GraphRAG-Bench (ICLR 2026)** — the evaluation artifact itself

## Patterns to adopt into our pipeline (study → L2/L3)
1. **Multi-agent debate** (AutoResearchClaw: innovator/pragmatist/contrarian roles) → strengthen `decision.mjs` reconciler.
2. **4-layer citation verification** (AutoResearchClaw) + STORM's 65–94% accuracy band → harden the evidence contract.
3. **GraphRAG-Bench** (ICLR 2026, 1,018 expert Qs) → adopt as a research-quality eval artifact.
4. **Deep-research tree-exploration + planning→research→compression→report** (gpt-researcher, LangChain ODR) → research-pipeline reference.

## Bias-resolution evidence (the `bias_check` trail)
- **Discounted (skeptic over-reach):** `local-deep-research` "5 unresolved security issues" — verified **CLOSED/false**; `gpt-researcher` issue #1772 cited as unpatched — **fixed in v3.5.0 (13 days stale)**.
- **Kept (current, evidenced):** `gpt-researcher` CVE-2026-5632/5633 unpatched (NVD, 2026-05-28); `storm` TLS `verify=False` (live file inspection, 2026-05-28).
- **Discounted (proponent over-reach):** `langchain-ai/open_deep_research` "triple-angle convergence" ignored that it's frozen since 2025-08; `AutoResearchClaw` end-to-end autonomy claim contradicted by its own release notes.

## Audit
- Workflow `wf_d6daf2a0-fb2` · 48 agents · 7.5M tokens · 580 tool calls · ~16 min.
- 59 candidates → 9 reconciled with ≥2 dated sources each. Convergence counted in independent source families.
- Shipped via gated PR (CI · CodeQL · Dependency-Review · branch protection) + GPT-5.5 consensus.
