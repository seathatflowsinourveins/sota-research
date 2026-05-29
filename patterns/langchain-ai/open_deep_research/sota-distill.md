# SOTA distillation — langchain-ai/open_deep_research

> Reference pattern for the sota-research architecture. Ingested 2026-05-29 via the grounding workflow (run `wvsbmfd1e`, repomix + deepwiki). Disposition: **REFERENCE/STUDY** — research-agent/MCDA class, no direct Claude-Code runtime surface (study the pattern, do not install). Convergence context: `docs/research/convergence-2026-05-29-research-arch-grounding.md`.

- **URL:** https://github.com/langchain-ai/open_deep_research
- **Citation:** https://github.com/langchain-ai/open_deep_research
- **Ingested via:** mcp__repomix__pack_remote_repository (compress=true, includePatterns src/**/*.py,**/*.md); Grep (ripgrep) over the packed repomix-output.xml on disk; Read of exact line ranges in repomix-output.xml (deep_researcher.py active source)
- **Evidence quality:** strong
- **Grounds:** R2, R3, R10, R1

## Architecture
LangGraph deep-research agent. Linear top graph: clarify_with_user -> write_research_brief -> research_supervisor subgraph -> final_report_generation. Two nested subgraphs. Supervisor (supervisor<->supervisor_tools) plans via think_tool and delegates with ConductResearch tool-calls, fanning out researcher subgraphs in parallel under a hard max_concurrent_research_units cap (overflow returns explicit error tool-messages, never dropped); exits on max_researcher_iterations, no_tool_calls, or ResearchComplete. Each researcher (researcher<->researcher_tools->compress_research) gathers via tools then LLM-synthesizes its own findings into {compressed_research, raw_notes} with token-limit retry. State uses override_reducer-annotated note lists reduced into the final report. Legacy embedding/deterministic-dedup path retained only under src/legacy.

## Transferable pattern (the reference)
Typed-Command node routing with an upfront admission gate plus capped map-reduce: every node returns Command[Literal[next_nodes]] so control flow is declared in the type, not improvised. clarify_with_user is a cheap scope/admission gate that routes to __end__ (ask) or write_research_brief (proceed) BEFORE any expensive fan-out, governed by an allow_clarification flag. The supervisor fans research out with a hard max_concurrent_research_units split (allowed[:N] run via asyncio.gather; overflow[N:] returns explicit error tool-messages, never silently dropped) and terminates on explicit multi-condition exit criteria. Each worker ends in a dedicated compression node that LLM-synthesizes only its own evidence (with token-limit retry) before results merge upward — a clean worker->aggregation compression seam, replacing the deleted deterministic dedup.

## How it grounds our enhancements
- R2: typed Command[Literal[...]] routing + allow_clarification gate = control flow declared by the engine, not improvised — grounds binding the live workflow to a decision-envelope/anti-improvisation contract
- R3: clarify_with_user as a cheap admission/scope gate before expensive fan-out, and explicit supervisor exit criteria, ground relevance/gap-fit + adoption-pathway gates that route work before committing cost
- R10: compress_research is a dedicated per-worker LLM synthesis node at the worker->aggregation seam (returns compressed_research + raw_notes with retry) — direct ground for per-worker evidence compression at the scoring->decision seam, and the deleted-deterministic-dedup-kept-in-legacy move validates choosing LLM compression while retaining the legacy path
- R1: override_reducer-annotated notes/raw_notes/supervisor_messages reduced into the final report = accumulated notes as the authoritative system-of-record, grounding persist-decisions-as-system-of-record
