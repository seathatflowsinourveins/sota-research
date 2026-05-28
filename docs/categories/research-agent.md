# Category: Research Agent

## Overview

Research agents are autonomous systems that conduct multi-step information gathering, synthesis, and report generation — often mimicking academic research workflows. Three schools of thought: depth/breadth control (dzhng), planner-execute-verify (gpt-researcher), self-evolving multi-agent (DeepResearchAgent). All aim to reduce human supervision in research tasks.

## When This Category Applies

- Agent is designed to autonomously research a topic (not general-purpose coding/reasoning)
- Includes phases like query expansion, source collection, content extraction, synthesis
- Outputs a research report, synthesis doc, or structured findings
- Explicitly mentions "research" or "deep research" in README or description
- Supports iterative refinement, multi-source aggregation, or fact-checking loops

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Research tools have niche audiences; stars underweight |
| D2: Maintenance | 0.15 | Health matters; research patterns change fast |
| D3: Claude Code fit | 0.10 | Must work with Claude's capabilities (tool-calling, extended context) |
| D4: Code quality | 0.10 | Research flows are brittle; tests prevent silent failures |
| D5: Ingestion | **0.20** | Codebases are larger; architecture understanding is mid-effort |
| D6: Adoption | 0.10 | Research agents are specialized; lower absolute adoption expected |
| D7: Novelty | **0.20** | New research patterns (depth control, self-evolution) are highly valuable |
| D8: Community | 0.10 | Papers, blog posts, GitHub discussions in research community |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** Research agents are newer (most <3 years). gpt-researcher is an exception (26k stars). Most others <10k. Low weight justified.

**D2 (Maintenance):** Research paradigms shift; agents must adapt to:
- New LLM capabilities (longer context, better reasoning, tool-calling)
- Search API changes (Jina, Firecrawl, Brave, Exa updates)
- Synthesis techniques (from simple concatenation to RAG to in-context retrieval)

Last commit ≤4 months required for active weight. Stable repos can be 6+ months if issue activity is present.

**D3 (Claude Code fit):** Does the agent use Claude's native tool-calling? Extended context windows? Batch API? MCP servers?
- High score (8–10): Claude-first, uses recent SDK features
- Medium (5–7): Works with Claude but generic multi-LLM design
- Low (3–4): Primarily OpenAI; Claude support is afterthought
- 0–2: No Claude support

**D4 (Code quality):** Research flows have failure modes (bad sources, hallucination, loops). Test coverage should include:
- Query expansion logic tests
- Synthesis/deduplication tests
- Error handling for rate-limited / dead sources
- End-to-end research flow tests (even if fixtures)

**D5 (Ingestion):** Research agent codebases are 15–200 MB. Score readability of core loop:
- How modular is the research workflow?
- Can we understand query→source collection→extraction→synthesis as distinct phases?
- Does README explain architecture?

Score 9–10 if well-documented architecture with clear phase separation.

**D6 (Adoption):** Research agents have small but dedicated audiences. Check:
- Papers citing or extending this agent
- Forks with domain-specific adaptations (legal research, medical lit review, etc.)
- Blog posts about using it in production
- GitHub dependents (rare for agents; lower weight justified)

**D7 (Novelty):** HIGHEST WEIGHT. Are they introducing a new paradigm for research orchestration?
- 9–10: Novel method (self-evolving agents, new depth/breadth control strategy)
- 7–8: Improves on gpt-researcher pattern (better synthesis, faster execution)
- 5–6: Solid implementation of known approach (ReAct-based research)
- 3–4: Wrapper around existing tools with minimal logic
- 0–2: Dead clone of gpt-researcher with no changes

Reference: per A.6, three schools exist. Novel agents introduce new school or significant synthesis within one.

**D8 (Community):** Academic citations, HN discussion threads, Twitter/X mentions in AI research community, Reddit /r/LocalLLM discussions, collaboration with research labs.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Stars | School | Notes |
|---|---|---|---|
| `assafelovic/gpt-researcher` | 26.4k | Planner-execute-verify | OG; 20+ sources per report; strong community |
| `dzhng/deep-research` | 18.7k | Depth/breadth control | Minimal (<500 LOC); elegant simplicity |
| `langchain-ai/open_deep_research` | 11k | Multi-provider + LangGraph | LangChain-native; no-code UI |
| `DeepResearchAgent` (unconfirmed) | TBD | Self-evolving multi-agent | Autogenesis pattern; cutting-edge |
| `ByteDance/DeerFlow` | TBD | Multi-agent planning/execution | Recent; RL-trained; SOTA benchmarks |

---

## Anti-Patterns (Demote Score)

- **Shallow research:** Only does single-source lookup or web search without synthesis
- **Hallucination-prone:** Synthesizes without fact-checking or source attribution
- **Single API dependency:** Only works with OpenAI/Anthropic; no fallbacks or multi-provider setup
- **No streaming or timeout handling:** Gets stuck on slow sources or hangs indefinitely
- **Blind aggregation:** Concatenates sources without deduplication or conflict resolution
- **No evaluation loop:** Cannot assess research quality or identify gaps autonomously
- **Outdated dependencies:** Pinned to Claude SDK v0.x, Langchain v0.0.x, dead MCP servers

---

## Three Schools

**School 1: Depth/Breadth Control** (`dzhng/deep-research`)
- User specifies max sources, depth, breadth per step
- Simple iterative loop: query → fetch → extract → decide next query OR stop
- Minimal agent logic; human or LLM makes go/stop decision
- Best for: focused research, constrained budgets, transparency

**School 2: Planner-Execute-Verify** (`assafelovic/gpt-researcher`)
- Agent generates research plan upfront (subquestions, source types)
- Executes plan (parallel source collection, extraction)
- Verifies findings, identifies gaps, loops if needed
- Best for: comprehensive reports, web-scale research, quality over speed

**School 3: Self-Evolving Multi-Agent** (`DeepResearchAgent`, `ByteDance/DeerFlow`)
- Agents learn from research outcomes (successful sources, synthesis patterns)
- Adapt strategy mid-research based on signal quality
- Multi-agent specialization (planner, researcher, synthesizer, critic)
- Best for: adaptive research, complex domains, long-running tasks

---

## Scored Example Walkthrough

**Candidate:** `research-labs/autonomous-scholar` (hypothetical, School 2 variant)

**Stage-1 hardfilter:** PASS (Apache-2.0, 80 commits, 5 contributors, last commit 2 weeks ago)

**D1 (Stars):** 6,500 stars → log₁₀(6501) ≈ 3.81 ≈ **4/10**

**D2 (Maintenance):** Last 12 commits in 90d (monthly), responds to issues in 1 week, tracks Claude/Anthropic SDK updates → **7/10**

**D3 (Claude Code fit):** Uses Claude API for planning and synthesis; examples with `max_tokens` for long context; mentions extended thinking support → **7/10**

**D4 (Code quality)**:
- OpenSSF Scorecard: 6.5/10
- Our signals: 65% test coverage, Python type hints, CI on push, no Dependabot yet
- Combined: 0.5×6.5 + 0.5×7 = **6.75 ≈ 7/10**

**D5 (Ingestion):** 45 MB, 5 main modules (planner.py, researcher.py, synthesizer.py, evaluator.py, main.py), architecture doc with diagram → **8/10**

**D6 (Adoption):** 8 GitHub dependents (small), 2 papers citing this approach, 3 forks with domain adaptations → **6/10**

**D7 (Novelty):** Improves on gpt-researcher with **adaptive source quality scoring** (doesn't fetch bad sources after N failures) and **incremental synthesis** (updates report as sources arrive, not after). Solid improvement → **7/10**

**D8 (Community):** 2 HN discussions, 1 blog post on NeurIPS workshop site, mentioned in 1 awesome-llm-apps → **6/10**

**Rubric score:**
```
= (4×0.05 + 7×0.15 + 7×0.10 + 7×0.10 + 8×0.20 + 6×0.10 + 7×0.20 + 6×0.10) × 10
= (0.2 + 1.05 + 0.7 + 0.7 + 1.6 + 0.6 + 1.4 + 0.6) × 10
= 6.85 × 10 = 68.5
```

**Convergence:** Found by 3 sources (GitHub search, awesome-list, paper citation) → convergence_factor = 0.90

**Adjusted rubric:** 68.5 × 0.90 = 61.65

**Codex review:** "Well-implemented planner-execute-verify loop. Adaptive source filtering is valuable. Good Claude integration. Recommend STUDY; if D7 novelty improves (e.g., adds self-evolution), candidate for INSTALL." → codex_score = 70

**Final score:**
```
= 0.6 × 61.65 + 0.4 × 70 = 36.99 + 28 = 64.99 ≈ 65
```

**Action:** **STUDY** (L1+L2 ingestion; monitor for adaptive multi-agent evolution that would boost D7; strong candidate for research-agent skill export)
