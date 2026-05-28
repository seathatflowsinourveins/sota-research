## Role In Architecture

`GPTResearcher` is the top-level orchestration facade for the agent system. It owns session state, configuration, retrievers, memory, source collections, cost tracking, and specialist skills, then routes work into lower-level components.

Architecturally, it sits above the planner/executor/publisher split described in the README:

- Planner/agent selection: `choose_agent(...)` selects the agent and role when not preconfigured, lines 354-368.
- Execution/research: `ResearchConductor(self)` performs the normal research workflow, lines 185 and 378-379.
- Deep execution path: `DeepResearchSkill(self)` is conditionally enabled for deep research reports, lines 190-192 and 349-352.
- Publishing/report generation: `ReportGenerator(self)` handles body, introduction, conclusion, subtopics, and section drafting, lines 186, 479-485, 502-515, 552-569.
- Supporting skills: context, browser, source curation, image generation, and memory are all composed around the same agent instance, lines 175-197.

The module is effectively the “research session kernel”: it does not scrape, write, search, or summarize everything itself, but coordinates those capabilities through injected state and shared configuration.

## Novel Techniques

- Session-scoped capability wiring: skills are initialized with `self`, giving each subsystem access to shared query, config, context, URLs, costs, and logging without passing dozens of arguments through every call, lines 184-197.
- Strategy compatibility layer: MCP strategy is normalized across new names, deprecated names, legacy iteration counts, config values, and defaults, lines 216-280.
- Config-local MCP mutation: `_process_mcp_configs` adds `mcp` to `self.cfg.retrievers` instead of mutating `os.environ`, explicitly avoiding process-wide pollution in concurrent sessions, lines 282-308.
- Cost attribution by workflow phase: `_current_step` is set before major operations, then `add_costs` attributes model spend into `step_costs`, lines 166, 351, 355, 378, 471, 717-738.
- Pre-generation of report images: images are planned after research but before writing, so report generation can embed already available assets instead of blocking mid-write, lines 385-398 and 468-485.
- Dual-path research orchestration: normal research and deep research are cleanly separated at the top of `conduct_research`, lines 349-352 and 402-448.

## Patterns Worth Adopting

- Normalize constructor inputs immediately: `query_domains or []`, `visited_urls or set()`, `context or []`, and `headers or {}` create predictable internal shapes, lines 149-163.
- Wrap optional integrations at the boundary: `VectorStoreWrapper(vector_store) if vector_store else None` isolates vector-store variability, line 153.
- Remove unsupported pass-through kwargs early: `encoding` is consumed and popped so it cannot leak into LLM API calls, lines 180-182.
- Use facade methods for utility functions: `add_references`, `extract_headers`, `extract_sections`, and `table_of_contents` expose report helpers through the agent interface while delegating to pure functions, lines 632-675.
- Log structured lifecycle events around every major phase: start, agent selection, research completion, image planning, report writing, and completion are all emitted with metadata, lines 342-347, 369-383, 396-398, 472-490.
- Keep fast-path search separate from full orchestration: `quick_search` reuses retrievers and prompts without invoking the full research workflow, lines 518-550.
- Make deep workflows observable: `_handle_deep_research` logs breadth, depth, concurrency, context length, visited URLs, and costs, lines 411-445.

## Anti-Patterns To Avoid

- Avoid process-global configuration for request-local behavior. This module sidesteps that by modifying `self.cfg.retrievers` instead of environment variables for MCP setup, lines 294-305.
- Avoid monolithic agent methods that directly implement every skill. The class delegates research, report writing, context matching, browsing, curation, and image generation to specialized classes, lines 184-197.
- Avoid hidden cost accumulation. Costs are validated, accumulated, and attributed to the active step, lines 728-732.
- Avoid forcing every run through the same pipeline. Deep research exits early into its own handler, lines 349-352.
- Avoid report-time asset generation stalls. Images are prepared after research and passed into writing, lines 385-398 and 479-485.
- Caution: `add_costs` is synchronous but calls async `_log_event` without `await` or task scheduling, lines 733-738. That pattern should be audited before copying.

## Dependencies & Call Graph

Inbound callers are external entrypoints that instantiate `GPTResearcher` and call public methods such as `conduct_research`, `write_report`, `quick_search`, `get_subtopics`, and report helper methods. Exact upstream files are not present in the supplied segment, but the class shape marks this as the public orchestration API.

Primary outbound calls:

- Configuration and prompt setup: `Config`, `get_prompt_family`, lines 140-168.
- Retriever setup: `get_retrievers`, lines 171-175.
- Memory setup: `Memory`, lines 176-178.
- Normal research: `ResearchConductor.conduct_research`, lines 185 and 378-379.
- Deep research: `DeepResearchSkill.run`, lines 190-192 and 427-428.
- Report generation: `ReportGenerator.write_report`, `write_report_conclusion`, `write_introduction`, `get_subtopics`, `get_draft_section_titles`, lines 479-485, 503-514, 558-569.
- Context reuse: `ContextManager.get_similar_written_contents_by_draft_section_titles`, lines 589-594.
- Search: `get_search_results`, line 529.
- Summary LLM call: `create_chat_completion`, lines 541-548.
- Image planning: `ImageGenerator.plan_and_generate_images`, lines 387-395.
- Markdown utilities: `add_references`, `extract_headers`, `extract_sections`, `table_of_contents`, lines 642-675.

## Segment Verdict

Worth studying and selectively adopting: this is a strong orchestration facade for multi-skill research agents, especially its session-scoped configuration, lifecycle logging, strategy normalization, and cost attribution patterns.
tokens used
## Role In Architecture

`GPTResearcher` is the top-level orchestration facade for the agent system. It owns session state, configuration, retrievers, memory, source collections, cost tracking, and specialist skills, then routes work into lower-level components.

Architecturally, it sits above the planner/executor/publisher split described in the README:

- Planner/agent selection: `choose_agent(...)` selects the agent and role when not preconfigured, lines 354-368.
- Execution/research: `ResearchConductor(self)` performs the normal research workflow, lines 185 and 378-379.
- Deep execution path: `DeepResearchSkill(self)` is conditionally enabled for deep research reports, lines 190-192 and 349-352.
- Publishing/report generation: `ReportGenerator(self)` handles body, introduction, conclusion, subtopics, and section drafting, lines 186, 479-485, 502-515, 552-569.
- Supporting skills: context, browser, source curation, image generation, and memory are all composed around the same agent instance, lines 175-197.

The module is effectively the “research session kernel”: it does not scrape, write, search, or summarize everything itself, but coordinates those capabilities through injected state and shared configuration.

## Novel Techniques

- Session-scoped capability wiring: skills are initialized with `self`, giving each subsystem access to shared query, config, context, URLs, costs, and logging without passing dozens of arguments through every call, lines 184-197.
- Strategy compatibility layer: MCP strategy is normalized across new names, deprecated names, legacy iteration counts, config values, and defaults, lines 216-280.
- Config-local MCP mutation: `_process_mcp_configs` adds `mcp` to `self.cfg.retrievers` instead of mutating `os.environ`, explicitly avoiding process-wide pollution in concurrent sessions, lines 282-308.
- Cost attribution by workflow phase: `_current_step` is set before major operations, then `add_costs` attributes model spend into `step_costs`, lines 166, 351, 355, 378, 471, 717-738.
- Pre-generation of report images: images are planned after research but before writing, so report generation can embed already available assets instead of blocking mid-write, lines 385-398 and 468-485.
- Dual-path research orchestration: normal research and deep research are cleanly separated at the top of `conduct_research`, lines 349-352 and 402-448.

## Patterns Worth Adopting

- Normalize constructor inputs immediately: `query_domains or []`, `visited_urls or set()`, `context or []`, and `headers or {}` create predictable internal shapes, lines 149-163.
- Wrap optional integrations at the boundary: `VectorStoreWrapper(vector_store) if vector_store else None` isolates vector-store variability, line 153.
- Remove unsupported pass-through kwargs early: `encoding` is consumed and popped so it cannot leak into LLM API calls, lines 180-182.
- Use facade methods for utility functions: `add_references`, `extract_headers`, `extract_sections`, and `table_of_contents` expose report helpers through the agent interface while delegating to pure functions, lines 632-675.
- Log structured lifecycle events around every major phase: start, agent selection, research completion, image planning, report writing, and completion are all emitted with metadata, lines 342-347, 369-383, 396-398, 472-490.
- Keep fast-path search separate from full orchestration: `quick_search` reuses retrievers and prompts without invoking the full research workflow, lines 518-550.
- Make deep workflows observable: `_handle_deep_research` logs breadth, depth, concurrency, context length, visited URLs, and costs, lines 411-445.

## Anti-Patterns To Avoid

- Avoid process-global configuration for request-local behavior. This module sidesteps that by modifying `self.cfg.retrievers` instead of environment variables for MCP setup, lines 294-305.
- Avoid monolithic agent methods that directly implement every skill. The class delegates research, report writing, context matching, browsing, curation, and image generation to specialized classes, lines 184-197.
- Avoid hidden cost accumulation. Costs are validated, accumulated, and attributed to the active step, lines 728-732.
- Avoid forcing every run through the same pipeline. Deep research exits early into its own handler, lines 349-352.
- Avoid report-time asset generation stalls. Images are prepared after research and passed into writing, lines 385-398 and 479-485.
- Caution: `add_costs` is synchronous but calls async `_log_event` without `await` or task scheduling, lines 733-738. That pattern should be audited before copying.

## Dependencies & Call Graph

Inbound callers are external entrypoints that instantiate `GPTResearcher` and call public methods such as `conduct_research`, `write_report`, `quick_search`, `get_subtopics`, and report helper methods. Exact upstream files are not present in the supplied segment, but the class shape marks this as the public orchestration API.

Primary outbound calls:

- Configuration and prompt setup: `Config`, `get_prompt_family`, lines 140-168.
- Retriever setup: `get_retrievers`, lines 171-175.
- Memory setup: `Memory`, lines 176-178.
- Normal research: `ResearchConductor.conduct_research`, lines 185 and 378-379.
- Deep research: `DeepResearchSkill.run`, lines 190-192 and 427-428.
- Report generation: `ReportGenerator.write_report`, `write_report_conclusion`, `write_introduction`, `get_subtopics`, `get_draft_section_titles`, lines 479-485, 503-514, 558-569.
- Context reuse: `ContextManager.get_similar_written_contents_by_draft_section_titles`, lines 589-594.
- Search: `get_search_results`, line 529.
- Summary LLM call: `create_chat_completion`, lines 541-548.
- Image planning: `ImageGenerator.plan_and_generate_images`, lines 387-395.
- Markdown utilities: `add_references`, `extract_headers`, `extract_sections`, `table_of_contents`, lines 642-675.

## Segment Verdict

