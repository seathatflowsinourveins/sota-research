# SOTA distillation — Alibaba-NLP/DeepResearch

> Reference pattern for the sota-research architecture. Ingested 2026-05-29 via the grounding workflow (run `wvsbmfd1e`, repomix + deepwiki). Disposition: **REFERENCE/STUDY** — research-agent/MCDA class, no direct Claude-Code runtime surface (study the pattern, do not install). Convergence context: `docs/research/convergence-2026-05-29-research-arch-grounding.md`.

- **URL:** https://github.com/Alibaba-NLP/DeepResearch
- **Citation:** https://github.com/Alibaba-NLP/DeepResearch (inference/react_agent.py, WebAgent/WebWeaver/tool/tool_retrieve.py, WebAgent/WebResummer/src/react_agent.py, README.md)
- **Ingested via:** mcp__repomix__pack_remote_repository (compress, scoped includePatterns: react_agent/inference/agent/prompt/tool .py); mcp__repomix__grep_repomix_output (budget-cap + citation/memory patterns); mcp__repomix__read_repomix_output (react_agent control loop + WebResummer summarize loop); context-mode ctx_fetch_and_index + ctx_search (README, IterResearch framing)
- **Evidence quality:** strong
- **Grounds:** R2, R1, R7

## Architecture
Tongyi DeepResearch is a long-horizon agentic-search model with two inference paradigms (README-confirmed): a ReAct loop and an IterResearch "Heavy" test-time-scaling mode. The ReAct controller (inference/react_agent.py) drives think->tool_call->tool_response rounds against THREE independent termination caps — an LLM-call budget (MAX_LLM_CALL_PER_RUN, env-tunable: 100/60/40 across variants), a wall-clock cap (150min), and a token cap (~110K). Each exit writes a structured result with a discrete termination reason. WebWeaver keeps a url2id ledger so citations bind to stable ids, not raw URLs. WebResummer compacts history into one evolving summary on a round/token trigger as the reasoning system-of-record.

## Transferable pattern (the reference)
Bounded-agent control loop with a structured termination envelope + graceful forced-answer degradation. The loop is governed by multiple independent budget caps (call-count, wall-clock, token) checked every round; NO cap is a crash — on the token cap it salvages a partial <answer> and, failing that, emits termination='format error: generate an answer as token limit reached', while budget exhaustion emits termination='exceed available llm calls'. Every exit path — answer, degraded, exhausted — writes one structured result carrying an explicit discrete termination reason. This makes "why did the agent stop and what did it produce" a first-class, machine-readable field rather than an inferred side effect: the engine's verdict, not improvisation, decides the outcome.

## How it grounds our enhancements
- R2
- R1
- R7
