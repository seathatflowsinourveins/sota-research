# SOTA distillation — assafelovic/gpt-researcher

> Reference pattern for the sota-research architecture. Ingested 2026-05-29 via the grounding workflow (run `wvsbmfd1e`, repomix + deepwiki). Disposition: **REFERENCE/STUDY** — research-agent/MCDA class, no direct Claude-Code runtime surface (study the pattern, do not install). Convergence context: `docs/research/convergence-2026-05-29-research-arch-grounding.md`.

- **URL:** https://github.com/assafelovic/gpt-researcher
- **Citation:** https://github.com/assafelovic/gpt-researcher (files read: gpt_researcher/mcp/tool_selector.py, gpt_researcher/mcp/research.py, gpt_researcher/retrievers/mcp/retriever.py)
- **Ingested via:** repomix.pack_remote_repository (compress=true, full directory scan, 88 files / 50k tokens); repomix.pack_remote_repository (compress=false, targeted: tool_selector.py + research.py + researcher.py + mcp/retriever.py, 4 files / 15k tokens); Read + Grep on on-disk repomix XML (function bodies)
- **Evidence quality:** strong
- **Grounds:** R3, R6, R7

## Architecture
gpt-researcher runs MCP-backed research as an explicit 3-stage pipeline (retrievers/mcp/retriever.py). Stage 1 enumerates all tools from MCP servers (_get_all_tools). Stage 2 MCPToolSelector.select_relevant_tools LLM-ranks them to a top-k (max_tools=3, temperature 0.0) returning index+name+relevance_score+reason+selection_reasoning. Stage 3 MCPResearchSkill binds only the selected tools to the LLM (bind_tools) and executes, normalizing every tool result into a uniform {title,href,body} record. Selection is structurally fail-safe: no LLM response, unparseable JSON, zero selections, or any exception all route to _fallback_tool_selection — a deterministic pattern-scored (research-verb) top-k. Components are constructed once and threaded by reference (cfg, researcher) for cost tracking, not re-improvised per call.

## Transferable pattern (the reference)
Two-tier routing gate with a deterministic floor: an LLM relevance-ranker picks a top-k of candidates by fit-to-query (scored, with reasons), but EVERY failure mode — empty response, unparseable JSON, zero picks, exception — falls through to a deterministic pattern-scored top-k guaranteed non-empty when any candidate matches. Expensive judgment never gates the pipeline open/shut alone; a cheap reproducible ranker is the always-on backstop, so an LLM/provider outage degrades selectivity rather than rejecting or stalling. Selectivity cap (max_tools) and the ranking criterion (fit-to-query, not appearance count) are explicit params, and only the selected subset is bound/executed downstream.

## How it grounds our enhancements
- R3
- R6
- R7
