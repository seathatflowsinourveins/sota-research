# Category: Agent Framework

## Overview

Agent frameworks provide orchestration, planning, memory, and tool-use patterns for building autonomous or semi-autonomous agents. Examples: LangChain, AutoGen, LlamaIndex with agentic features, custom frameworks built on Claude API.

## When This Category Applies

- Framework explicitly supports "agent" or "autonomous" workflows (agentic RAG, multi-step reasoning)
- Exports agent classes, planning components, or orchestration abstractions
- Handles tool-calling, state management, memory, or multi-turn reasoning
- Documentation emphasizes integration with Claude or multi-LLM agentic patterns
- Used as a base to build research agents, coding agents, or other autonomous systems

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Popularity alone doesn't predict framework quality |
| D2: Maintenance | **0.25** | Framework health = API stability + community trust |
| D3: Claude Code fit | 0.15 | Supports Claude + agentic patterns (not all frameworks do) |
| D4: Code quality | 0.10 | Tests important; framework code must be reliable |
| D5: Ingestion | 0.10 | Frameworks are typically 10–100 MB; moderate complexity |
| D6: Adoption | **0.20** | Proven adoption = ecosystem maturity + learning resources |
| D7: Novelty | 0.05 | Most frameworks remix known patterns; novelty is rare |
| D8: Community | 0.10 | Active community, tutorials, integrations, Discord/Slack |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** Many forks, few genuine innovations. Use stars as tie-breaker only.

**D2 (Maintenance):** Must remain compatible with Claude API, model versions, and OpenAI/Anthropic SDK changes.
- Last commit ≤2 months (frameworks move fast)
- Responds to "Claude API change" issues immediately
- Publishes releases tracking Claude API updates

**D3 (Claude Code fit):** Check README for Claude examples. Does the framework make Claude-first agent patterns easy, or is it multi-LLM generic?
- +1 for "Claude-first" examples
- +1 for built-in tool-calling for Claude
- +1 for skill/hook/MCP integration examples
- -1 if only OpenAI examples and Claude is an afterthought

**D4 (Code quality):** Frameworks with ≤50% test coverage break easily. Require:
- ≥70% test coverage
- Full type hints (Python) OR TypeScript
- Dependency security scanning active

**D5 (Ingestion):** Frameworks are complex; repository understanding is mid-effort. Score readability, modularity, and docs.

**D6 (Adoption):** Crucial signal. Check:
- npm/PyPI weekly downloads
- GitHub "used by" (via GraphQL dependents)
- Tutorials, courses, books using this framework
- Sponsored by company (LangChain via LangSmith, etc.)

**D7 (Novelty):** Framework innovation is rare post-2024. ReAct, multi-agent workflows, RAG are well-known. Score +2 for novel planning/memory/orchestration approach.

**D8 (Community):** Discord/Slack activity, tutorial density, conference talks, blog posts. Evidence of active discussion and learning.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Stars | Primary feature | Notes |
|---|---|---|---|
| `ruvnet/ruflo` | 8.2k | Swarm coordination + consensus | Already installed; maintained |
| `ComposioHQ/agent-orchestrator` | 5.1k | Parallel agent coding | EXPERIMENT queue; Codex review pending |
| `multica-ai/multica` | 3.8k | Multi-agent conversation | Active; Claude-aware |
| `HKUDS/OpenHarness` | 2.4k | Agent evaluation harness | Benchmarks agent performance |
| `langchain-ai/langchain` | 91k | Broad ecosystem | Agentic features present but not primary |

---

## Anti-Patterns (Demote Score)

- **Framework abandonment:** Last commit >6 months; no response to Claude API version bumps
- **Weak testing:** <50% coverage, tests skip on CI, no integration tests
- **Opaque abstractions:** Hard to understand agent state machine or planning logic
- **No Claude examples:** Claims Claude support but examples are OpenAI-only
- **Dependency bloat:** Requires 50+ transitive deps; hard to isolate and debug
- **Breaking changes without migration guide:** Major version breaks existing code with no upgrade path documented

---

## Scored Example Walkthrough

**Candidate:** `multiagent-labs/orchestra` (hypothetical)

**Stage-1 hardfilter:** PASS (Apache-2.0, 150 commits, 8 contributors, last commit 3 weeks ago)

**D1 (Stars):** 8,900 stars → log₁₀(8901) ≈ 3.95 ≈ **4/10**

**D2 (Maintenance):** Last 15 commits in 90d (bi-weekly), issues closed within 10 days, tracked Claude API v1.3 release → **7/10**

**D3 (Claude Code fit):** README has 2 Claude examples, skill-integration docs, mentions Claude-first design → **6/10** (good but not best-in-class)

**D4 (Code quality)**:
- OpenSSF Scorecard: 6.8/10 (good CI, code review, but no fuzzing)
- Our signals: pytest with 72% coverage, full Python typing, Dependabot → 7/10
- Combined: 0.5×6.8 + 0.5×7 = **6.9 ≈ 7/10**

**D5 (Ingestion):** 25 MB, well-structured dirs (agents/, memory/, planning/), good README + architecture doc → **7/10**

**D6 (Adoption):** 18k PyPI downloads/month, 12 GitHub dependents, used in 3 tutorials → **8/10** (strong)

**D7 (Novelty):** Implements known multi-agent patterns (handoffs, consensus). Not novel → **3/10**

**D8 (Community):** 2 awesome-agent-swarm mentions, HN discussion, Discord with 200+ members → **7/10**

**Rubric score:**
```
= (4×0.05 + 7×0.25 + 6×0.15 + 7×0.10 + 7×0.10 + 8×0.20 + 3×0.05 + 7×0.10) × 10
= (0.2 + 1.75 + 0.9 + 0.7 + 0.7 + 1.6 + 0.15 + 0.7) × 10
= 6.7 × 10 = 67
```

**Convergence:** Found by 3 sources (GitHub search, awesome-list, blog mention) → convergence_factor = 0.90

**Adjusted rubric:** 67 × 0.90 = 60.3

**Codex review:** "Solid orchestration framework. Good Claude integration, active maintenance. Recommend for STUDY; strong candidate for deeper integration if multi-agent is a priority." → codex_score = 72

**Final score:**
```
= 0.6 × 60.3 + 0.4 × 72 = 36.18 + 28.8 = 64.98 ≈ 65
```

**Action:** **STUDY** (L1+L2 ingestion; re-eval for INSTALL-LITE in 60d if novelty or Claude fit improves)
