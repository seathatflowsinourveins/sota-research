# Category: Agent Orchestration Pattern

## Overview

Agent orchestration patterns are codebases that demonstrate a specific architectural approach to coordinating multiple agents (or multiple phases of a single agent) to solve complex tasks. Canonical patterns: ReAct, agentic RAG, handoff workflows, **plan-by-files**, evaluator-optimizer loops. These are often smaller, more focused repos than frameworks, teaching a pattern via reference implementation.

## When This Category Applies

- Repo is a reference implementation or tutorial for a specific multi-agent coordination approach
- Demonstrates one of: ReAct, agentic RAG, handoff/routing, plan-by-files, evaluator-optimizer
- Code is primary teaching artifact (vs. framework library)
- Includes orchestration logic (state machines, message passing, plan storage, consensus)
- Sub-type tags in metadata: `{react, agentic-rag, handoff, plan-by-files, evaluator-optimizer}`

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Early-stage patterns; stars noisy |
| D2: Maintenance | 0.10 | Patterns can go stale; modest velocity sufficient |
| D3: Claude Code fit | 0.05 | Not all patterns are Claude-specific |
| D4: Code quality | 0.10 | Clarity > test coverage for teaching code |
| D5: Ingestion | **0.25** | Pattern clarity = how easy to extract and reuse |
| D6: Adoption | 0.10 | Forks/clones of reference implementations |
| D7: Novelty | **0.25** | NEW orchestration patterns are rare and valuable |
| D8: Community | 0.10 | Blog posts, discussions, academic citations |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** Reference implementations often have <5k stars. Novelty (D7) is more important.

**D2 (Maintenance):** Pattern repos can be "stable" without frequent commits. Accept last commit ≤6 months if code is self-contained and doesn't depend on mutable APIs. Score moderate velocity (5–7/10) as sufficient.

**D3 (Claude Code fit):** Not required. Score high only if pattern is Claude-first (e.g., plan-by-files implemented specifically for Claude Code context + markdown). Generic patterns score lower here.

**D4 (Code quality):** Teaching code prioritizes clarity over completeness. Prefer:
- Clear variable names, short functions, comments explaining control flow
- Minimal dependencies; avoid framework bloat
- ≥1 runnable example (Jupyter, main.py, shell script)
- Type hints or JSDoc (optional for very short code)

**D5 (Ingestion):** Core question: can we extract this pattern in 30 min of reading?
- Well-organized file structure (not 1-file monolith)
- Clear separation of concerns (planner / executor / validator)
- README with architecture diagram or flow chart
- Concrete example walkthrough

Score 9–10 if code is <1 MB, <500 LOC, single-language, with a 5-min quickstart.

**D6 (Adoption):** How many teams have forked/cloned/adapted this pattern?
- GitHub "used by" / dependents
- Forks with substantive changes (not just stars)
- Citations in papers or blog posts

**D7 (Novelty):** HIGHEST WEIGHT. Is this a genuinely new coordination approach, or a re-implementation of ReAct?
- 9–10: Introduces new pattern (plan-by-files, novel consensus mechanism)
- 7–8: Improves on known pattern (ReAct variant with better state tracking)
- 5–6: Solid implementation of known pattern
- 3–4: Minor variation or tutorial of established approach
- 0–2: No discernible novel contribution

**D8 (Community):** Academic citations, Twitter threads, HN discussions, mentions in agent-architecture papers or blog posts. Medium weight; good signal of pattern utility.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Pattern | Status | Notes |
|---|---|---|---|
| `openai/swarm` | Handoff | Reference | Official OpenAI reference; starting point |
| `EvoMap/awesome-agent-swarm` | Swarm orchestration | Curated | Catalog of swarm implementations |
| `ComposioHQ/agent-orchestrator` | Parallel agents + handoffs | Active | Already EXPERIMENT-queued |
| `ruvnet/ruflo` | Swarm + consensus + self-learning | Active | Installed; demonstrates plan-by-files variant |
| (plan-by-files patterns) | Plan-by-files | Discovery | Across multiple repos; user-emphasized pattern |

---

## Anti-Patterns (Demote Score)

- **Incomplete implementation:** Claims a pattern but code is unfinished, missing key phases (e.g., "evaluator" is a stub)
- **Undocumented control flow:** No explanation of how agents coordinate; must reverse-engineer from code
- **One-off hack:** Pattern is too specific to one domain; doesn't generalize
- **No examples:** Code but no runnable walkthrough; users can't validate understanding
- **Tied to deprecated framework:** Uses old versions of LangChain, AutoGen, Claude SDK without migration path
- **Architectural brittleness:** Small input changes cause orchestration failures; no error handling in coordination logic

---

## Sub-Type Tags

When scoring, record which pattern(s) are demonstrated:

- **react** — Reason+Act cycles: LLM thinks, then executes tool, then observes, loop
- **agentic-rag** — Agent decides what to retrieve, when, and how (not retrieval + LLM in sequence)
- **handoff** — One agent delegates to another; routing logic or explicit handoff mechanism
- **plan-by-files** — Agent writes plans/state to files for coordination; human-readable intermediate artifacts
- **evaluator-optimizer** — Generator produces solution, evaluator scores it, optimizer refines (loop)

---

## Scored Example Walkthrough

**Candidate:** `agentlab/orchestration-zoo` (hypothetical, implements handoff + plan-by-files)

**Stage-1 hardfilter:** PASS (MIT, 45 commits, 2 contributors, last commit 1 month ago)

**D1 (Stars):** 4,200 stars → log₁₀(4201) ≈ 3.62 ≈ **4/10**

**D2 (Maintenance):** Last 8 commits in 90d (monthly), issues responded to in 2 weeks, no breaking changes → **6/10** (modest)

**D3 (Claude Code fit):** Supports Claude API natively; example with tool-calling for Claude → **5/10** (nice but not core)

**D4 (Code quality):** 
- ~800 LOC total, 40% test coverage (teaching code, not library)
- Python type hints present, clear variable names
- No OpenSSF Scorecard (too small), but readable: **6/10**

**D5 (Ingestion):** 600 KB, 3 files (orchestrator.py, evaluator.py, example.py), README with ASCII flow chart → **9/10** (excellent clarity)

**D6 (Adoption):** 23 forks with modifications (teams adapting to their domains), 2 blog post adaptations, 0 npm-style dependents → **6/10** (decent fork activity)

**D7 (Novelty):** Combines **handoff** (agent A → B routing) + **plan-by-files** (agents write JSON plan snapshots) in one small, clear example. Highly novel synthesis → **9/10**

**D8 (Community):** 1 awesome-agent-swarm mention, 2 blog posts describing adaptations, HN discussion with 150+ upvotes → **7/10**

**Rubric score:**
```
= (4×0.05 + 6×0.10 + 5×0.05 + 6×0.10 + 9×0.25 + 6×0.10 + 9×0.25 + 7×0.10) × 10
= (0.2 + 0.6 + 0.25 + 0.6 + 2.25 + 0.6 + 2.25 + 0.7) × 10
= 7.55 × 10 = 75.5
```

**Convergence:** Found by 4 sources (GitHub search, awesome-list, HN, blog mention) → convergence_factor = 0.95

**Adjusted rubric:** 75.5 × 0.95 = 71.7

**Codex review:** "Brilliant clarity. Combines two valuable patterns in minimal, teachable code. Recommend STUDY and consider for skills library to export as reusable pattern." → codex_score = 78

**Final score:**
```
= 0.6 × 71.7 + 0.4 × 78 = 43.02 + 31.2 = 74.22 ≈ 74
```

**Action:** **STUDY** (L1+L2 ingestion; strong candidate for pattern distillation + skills export; watch for adoption uptick that would justify INSTALL)
