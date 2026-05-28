## Novel Techniques

- **Planner-seeded research decomposition:** `plan_research()` first performs a real search, then feeds those results into `plan_research_outline()` so sub-queries are grounded in live source material (`L55-L87`).
- **Source-agnostic execution funnel:** web, local docs, hybrid, Azure, LangChain docs, and vector-store paths all converge into context retrieval methods (`L135-L191`).
- **Configurable MCP cost/depth strategy:** MCP retrieval supports `disabled`, `fast`, and `deep` modes, with `fast` caching one MCP pass for reuse across sub-queries (`L279-L327`, `L367-L391`, `L482-L518`).
- **Concurrent sub-query fanout:** both web and vector-store flows use `asyncio.gather()` to process sub-queries in parallel (`L257-L264`, `L347-L354`).
- **Prefetched full-content bypass:** retrievers that return `raw_content` skip redundant scraping, while snippet-only results still go through the scraper (`L776-L789`, `L825-L829`).

## Patterns Worth Adopting

- **Keep orchestration state thin and explicit:** constructor stores the parent researcher, logger, JSON handler, and MCP cache without owning the whole system (`L40-L46`).
- **Normalize optional list args at method boundary:** `_get_context_by_web_search()` converts `None` to empty lists before use (`L274-L277`).
- **Lazy role selection:** agent choice happens only if missing, allowing callers to preconfigure role/agent behavior (`L118-L127`).
- **Use enum-driven source routing:** `ReportSource.*` branches make retrieval modes readable and extensible (`L149-L191`).
- **Deduplicate visited URLs before scraping:** `_get_new_urls()` mutates `visited_urls` once and emits progress telemetry (`L728-L749`).
- **Preserve provenance in combined context:** MCP results are formatted with source titles and URLs before joining (`L677-L695`).
- **Graceful degradation:** retriever and MCP failures are logged and return empty results rather than collapsing the whole research task (`L437-L445`, `L643-L652`, `L790-L791`).

## Anti-Patterns To Avoid

- **Avoid repeated expensive tool calls:** the MCP cache sidesteps running MCP for every sub-query in fast mode (`L307-L310`, `L482-L494`).
- **Avoid scraping content you already have:** `raw_content` pass-through prevents wasted browser work (`L780-L787`, `L825-L829`).
- **Avoid unbounded source revisits:** URL dedupe prevents duplicate scraping and repeated context loading (`L734-L749`, `L948-L959`).
- **Avoid silent long-running black boxes:** stream events and JSON logs expose planning, sub-query execution, MCP reuse, and final costs (`L91-L98`, `L199-L208`, `L451-L565`).
- **Do not copy the rough edges blindly:** `_process_sub_query()` uses mutable default args (`L449`), `non_mcp_retrievers` is computed but unused (`L468`), and some paths mix string/list return shapes (`L359-L362`, `L147-L148`).

## Dependencies & Call Graph

Inbound caller is not shown in this file, but the class docstring and constructor indicate it is owned by a parent `GPTResearcher` instance (`L29`, `L34-L40`). The expected external entrypoint is `ResearchConductor.conduct_research()`.

Main outbound dependencies:

- Agent/planning: `choose_agent`, `get_search_results`, `plan_research_outline`.
- Loading: `DocumentLoader`, `OnlineDocumentLoader`, `LangChainDocumentLoader`, lazy `AzureDocumentLoader`.
- Retrieval: classes in `self.researcher.retrievers`, including MCP retrievers detected by name.
- Processing: `scraper_manager.browse_urls()`, `context_manager.get_similar_content_by_query()`, vector-store `load()`.
- Observability: `stream_output()`, `logging`, `get_json_handler()`.

Core flow:

`conduct_research()` -> source branch -> `_get_context_by_web_search()` / `_get_context_by_urls()` / `_get_context_by_vectorstore()` -> `plan_research()` -> concurrent `_process_sub_query()` calls -> `_scrape_data_by_urls()` -> `_search_relevant_source_urls()` -> retriever search + scraper + context manager -> optional MCP merge via `_execute_mcp_research_for_queries()` -> `_combine_mcp_and_web_context()` -> optional source curation.

## Segment Verdict

Worth studying and selectively adopting for agentic research orchestration, especially its planner-grounded sub-query fanout and MCP strategy layer, but clean up return types and minor helper debt before copying it wholesale.

---

## SEGMENT 1: Prompts Engineering

## Role In Architecture

`gpt_researcher/prompts.py` is the prompt control plane for GPT Researcher. It centralizes LLM-facing instructions for search planning, MCP tool selection, source curation, summarization, report generation, subtopic expansion, introductions, conclusions, image prompts, and model-specific document formatting.

Architecturally, it sits between agent orchestration and model execution: planner/executor/publisher code can request a prompt by task or `ReportType`, while this module hides the exact wording, citation rules, report shape, tone, language, and provider-specific formatting.

## Novel Techniques

The strongest pattern is the `PromptFamily` abstraction. The default family defines the full prompt surface, while Granite-specific subclasses override only document formatting behavior. That keeps agent logic stable while allowing model-provider prompt adaptation.

The module also treats prompts as structured contracts, not loose text. Several methods demand exact JSON or list-only outputs, such as MCP tool selection, image analysis, source curation, and search query generation. This reduces parser fragility downstream.

A notable technique is dynamic prompt specialization: report prompts vary by `ReportSource`, `ReportType`, `Tone`, language, word count, current date, existing headers, existing content, and provider family. The same research pipeline can therefore produce multiple output products without branching heavily in agent code.

## Patterns Worth Adopting

- `PromptFamily` base class around lines 12-36: separate “prompt generators” tied to `ReportType` from ad hoc “prompt methods.” This gives contributors a clear extension model.
- MCP selection prompt around lines 38-88: force a strict JSON response with ranked tool selections, relevance scores, and reasoning. This is a useful pattern for LLM-mediated routing.
- Search query generation around lines 139-180: builds a dynamic example from `max_iterations`, making output shape match runtime constraints.
- Report prompt around lines 182-239: embeds citation, markdown structure, source reliability, tone, language, and date assumptions in one canonical report contract.
- Source curation prompt around lines 241-281: explicitly says not to rewrite or summarize source content, preserving evidence fidelity before synthesis.
- Subtopic report prompt around lines 406-481: passes existing headers and written content into the prompt to prevent duplicate sections in long-form reports.
- Granite subclasses around lines 539-602: isolate provider-specific document wrappers using class methods and small templates instead of spreading model checks across the app.
- Factory mapping around lines 606-660: `report_type_mapping` plus `get_prompt_by_report_type` gives a simple registry for prompt dispatch with fallback warnings.

## Anti-Patterns To Avoid

This module avoids scattering prompt strings throughout agent code. Centralization makes prompt behavior auditable and makes report quality changes less risky.

It avoids hard-coding one model’s context format into the whole system. Granite formatting is encapsulated in `Granite3PromptFamily` and `Granite33PromptFamily`, while default prompts remain provider-neutral.

It avoids silent invalid configuration. Both `get_prompt_by_report_type` and `get_prompt_family` warn before falling back to defaults.

It also avoids letting long reports drift into repetition by feeding previous headers/content into the subtopic prompt and explicitly banning overlap.

One weakness worth noting: `context: List[Dict[str, Any]] = []` in `generate_search_queries_prompt` uses a mutable default. It is not mutated here, but adopting `None` would be cleaner.

## Dependencies & Call Graph

Imports:

- `warnings` for fallback diagnostics.
- `date`, `datetime`, `timezone` for current-date grounding.
- `langchain_core.documents.Document` for document context formatting.
- `Config` for model/provider-aware prompt family selection.
- `ReportSource`, `ReportType`, `Tone`, `PromptFamilyEnum` for typed prompt behavior.
- `Callable`, `List`, `Dict`, `Any` for type annotations.

Called by:

- Research planning code needing search queries.
- Research execution code using MCP tools.
- Summarization and quick-answer flows.
- Report publishing flows selecting prompts by `ReportType`.
- Detailed-report/subtopic agents composing sectioned reports.
- Image-generation/report-illustration flows.
- Provider/model setup code calling `get_prompt_family`.

Calls or references:

- `datetime.now(timezone.utc)` and `date.today()` for temporal grounding.
- `json.dumps()` inside MCP tool-selection prompt formatting.
- `getattr()` in `get_prompt_by_report_type` for dynamic prompt dispatch.
- Enum `.value` fields to compare report source/type/family.
- `Document.metadata` and `Document.page_content` when compressing retrieved context.

## Segment Verdict

Worth studying and adopting: this module is a practical example of treating prompt engineering as a versioned, extensible architecture layer rather than incidental strings embedded in agent logic.
tokens used
## Novel Techniques

The strongest pattern is the `PromptFamily` abstraction. The default family defines the full prompt surface, while Granite-specific subclasses override only document formatting behavior. That keeps agent logic stable while allowing model-provider prompt adaptation.

The module also treats prompts as structured contracts, not loose text. Several methods demand exact JSON or list-only outputs, such as MCP tool selection, image analysis, source curation, and search query generation. This reduces parser fragility downstream.

A notable technique is dynamic prompt specialization: report prompts vary by `ReportSource`, `ReportType`, `Tone`, language, word count, current date, existing headers, existing content, and provider family. The same research pipeline can therefore produce multiple output products without branching heavily in agent code.

## Patterns Worth Adopting

- `PromptFamily` base class around lines 12-36: separate “prompt generators” tied to `ReportType` from ad hoc “prompt methods.” This gives contributors a clear extension model.
- MCP selection prompt around lines 38-88: force a strict JSON response with ranked tool selections, relevance scores, and reasoning. This is a useful pattern for LLM-mediated routing.
- Search query generation around lines 139-180: builds a dynamic example from `max_iterations`, making output shape match runtime constraints.
- Report prompt around lines 182-239: embeds citation, markdown structure, source reliability, tone, language, and date assumptions in one canonical report contract.
- Source curation prompt around lines 241-281: explicitly says not to rewrite or summarize source content, preserving evidence fidelity before synthesis.
- Subtopic report prompt around lines 406-481: passes existing headers and written content into the prompt to prevent duplicate sections in long-form reports.
- Granite subclasses around lines 539-602: isolate provider-specific document wrappers using class methods and small templates instead of spreading model checks across the app.
- Factory mapping around lines 606-660: `report_type_mapping` plus `get_prompt_by_report_type` gives a simple registry for prompt dispatch with fallback warnings.

## Anti-Patterns To Avoid

This module avoids scattering prompt strings throughout agent code. Centralization makes prompt behavior auditable and makes report quality changes less risky.

It avoids hard-coding one model’s context format into the whole system. Granite formatting is encapsulated in `Granite3PromptFamily` and `Granite33PromptFamily`, while default prompts remain provider-neutral.

It avoids silent invalid configuration. Both `get_prompt_by_report_type` and `get_prompt_family` warn before falling back to defaults.

It also avoids letting long reports drift into repetition by feeding previous headers/content into the subtopic prompt and explicitly banning overlap.

One weakness worth noting: `context: List[Dict[str, Any]] = []` in `generate_search_queries_prompt` uses a mutable default. It is not mutated here, but adopting `None` would be cleaner.

## Dependencies & Call Graph

Imports:

- `warnings` for fallback diagnostics.
- `date`, `datetime`, `timezone` for current-date grounding.
- `langchain_core.documents.Document` for document context formatting.
- `Config` for model/provider-aware prompt family selection.
- `ReportSource`, `ReportType`, `Tone`, `PromptFamilyEnum` for typed prompt behavior.
- `Callable`, `List`, `Dict`, `Any` for type annotations.

Called by:

- Research planning code needing search queries.
- Research execution code using MCP tools.
- Summarization and quick-answer flows.
- Report publishing flows selecting prompts by `ReportType`.
- Detailed-report/subtopic agents composing sectioned reports.
- Image-generation/report-illustration flows.
- Provider/model setup code calling `get_prompt_family`.

Calls or references:

- `datetime.now(timezone.utc)` and `date.today()` for temporal grounding.
- `json.dumps()` inside MCP tool-selection prompt formatting.
- `getattr()` in `get_prompt_by_report_type` for dynamic prompt dispatch.
- Enum `.value` fields to compare report source/type/family.
- `Document.metadata` and `Document.page_content` when compressing retrieved context.

## Segment Verdict


---

## SEGMENT 2: Image Generator

## Role in architecture

`ImageGenerator` is an optional visual synthesis skill attached to a parent `GPTResearcher` instance. It turns research context or finished markdown reports into inline AI-generated images, then returns markdown-ready image embeds.

Architecturally, it sits between the research/report pipeline and image-generation providers. It uses the researcher config for provider/model selection, LLM planning, verbosity, websocket streaming, cost tracking, and report-level limits. This makes image generation a plug-in enhancement rather than a mandatory core dependency.

## Novel techniques

The strongest pattern is two-stage visual planning: `_plan_image_concepts` first asks a fast LLM to identify useful visualization opportunities, then `plan_and_generate_images` generates those images before report writing begins.

It supports three insertion modes:

- Pre-generation from research context via `plan_and_generate_images`
- Post-report analysis via `generate_images_for_report`
- Explicit author control via `[IMAGE: ...]` placeholders in `process_image_placeholders`

The module also cleanly separates provider availability from feature enablement. `_init_provider` degrades to `None` when config or credentials are missing, allowing the rest of the report pipeline to continue.

## Patterns worth adopting

- Lines 31-40: keep feature state local: `cfg`, `image_provider`, `max_images`, and `generated_images` are initialized once from the parent researcher.
- Lines 43-65: feature-gate external services behind config and provider availability checks.
- Lines 67-72: expose a tiny `is_enabled()` guard and use it consistently before doing expensive work.
- Lines 101-144: define an inner async worker for one image, then run concepts with `asyncio.gather` for parallel generation.
- Lines 168-220: constrain LLM output to JSON, strip accidental markdown fences, validate shape, and cap results to `max_images`.
- Lines 236-278: extract report sections structurally from markdown headers before asking the LLM where images belong.
- Lines 359-394: embed generated images by matching section headers instead of brittle byte offsets.
- Lines 430-503: support explicit placeholders, remove failed placeholders, and avoid leaving broken report artifacts.

## Anti-patterns to avoid

This module avoids making image generation a hard dependency. If credentials, provider setup, JSON parsing, or individual image calls fail, it logs the failure and returns the original report or a cleaned report.

It also avoids generating images blindly. The LLM planner is asked to prefer diagrams, workflows, comparisons, data visuals, and conceptual illustrations instead of decorative images.

One weakness to watch: section matching in `_embed_images_in_report` depends on exact header text. Duplicate or slightly rewritten headers could place images incorrectly. Placeholder-based insertion is more deterministic.

## Dependencies & call graph

Imports:

- `asyncio` for concurrent image generation
- `json` and `re` for LLM response parsing and markdown/placeholder processing
- `stream_output` for websocket progress events
- `ImageGeneratorProvider` and `ModelsLabImageGeneratorProvider` for backend image generation
- `create_chat_completion` for concept planning and report analysis

Likely callers:

- The parent `GPTResearcher` report workflow instantiates `ImageGenerator`
- Report generation code can call `plan_and_generate_images`, `generate_images_for_report`, or `process_image_placeholders`
- UI/websocket clients receive progress and generated image payloads through `stream_output`

Calls outward:

- `create_chat_completion(...)` for deciding what should be visualized
- `self.image_provider.generate_image(...)` for actual image creation
- `self.researcher.add_costs` for LLM cost tracking during planning
- `stream_output(...)` for user-visible status and generated image events

## Segment verdict

Worth studying and adopting: it is a pragmatic optional-skill pattern for adding multimodal output to an agent pipeline without destabilizing the core research/report flow.
tokens used
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


---

## SEGMENT 4: Deep Research

## Role In Architecture

`DeepResearchSkill` is an orchestration layer for iterative research inside the `GPTResearcher` agent. It does not retrieve, scrape, or write final reports directly; instead it coordinates query planning, nested research runs, learning extraction, citation tracking, context assembly, and final mutation of the parent `researcher.context`.

It fits between the main agent and lower-level search/retrieval tools:

- `run()` starts the deep research workflow for the parent query.
- `generate_research_plan()` asks the strategic LLM for clarifying research questions using initial web results.
- `deep_research()` recursively fans out into generated search queries.
- Each query creates a nested `GPTResearcher` instance and calls `conduct_research()`.
- `process_research_results()` extracts learnings, citations, and follow-up questions.
- Final context, visited URLs, and sources are written back to the parent researcher for later report generation.

## Novel Techniques

- **Repair-first structured parsing**: LLM outputs are requested as JSON, parsed with `json_repair`, then recovered from fenced blocks, arrays, objects, and finally line-based fallbacks.
- **Recursive breadth/depth research**: The module implements bounded recursive exploration where each result can spawn deeper research using follow-up questions and prior research goals.
- **Diminishing breadth**: Deeper levels reduce breadth via `max(2, breadth // 2)`, limiting combinatorial growth while preserving exploration.
- **Citation ledger**: Citations are tracked as `learning -> sourceUrl`, then reattached to final context as `[Source: ...]`.
- **Context budget trimming**: `trim_context_to_word_limit()` preserves most recent context while enforcing a 25k-word cap.
- **Async fan-out with backpressure**: Query branches run concurrently but are capped by `asyncio.Semaphore`.
- **Nested agent propagation**: Child researchers inherit tone, websocket, headers, config path, visited URLs, and MCP configuration.

## Patterns Worth Adopting

- Keep LLM response parsing in pure helper functions like `parse_search_queries_response()`, `parse_follow_up_questions_response()`, and `parse_research_results_response()`.
- Combine strict prompting with tolerant parsing; the code asks for exact JSON but assumes the model may still return malformed or fenced output.
- Use explicit accumulators for `learnings`, `citations`, `visited_urls`, `context`, and `sources` instead of hiding research state inside prompt text.
- Bound recursive agent workflows with both `depth` and `breadth`.
- Use a semaphore around expensive async branches to avoid overloading providers, retrievers, or rate limits.
- Preserve source-level metadata separately from synthesized learnings.
- Emit progress through a small state object rather than coupling UI/websocket logic directly into the research loop.
- Trim context before assigning it back to the main researcher to protect downstream report generation.

## Anti-Patterns To Avoid

- Relying on perfect JSON from LLMs without repair and fallback parsing.
- Allowing recursive research to expand without explicit breadth, depth, and concurrency limits.
- Mixing report generation into the research collection phase; this module returns context and leaves writing to the main agent.
- Dropping citations during summarization; this code carries source URLs forward with extracted learnings.
- Passing unbounded raw context into the final agent step.
- Treating duplicate visited URLs as independent discoveries; URLs are accumulated through sets.
- Blocking all queries sequentially when branches are independent.
- Rebuilding child-agent configuration manually without propagating important parent settings such as MCP strategy, headers, tone, and websocket.

## Dependencies & Call Graph

Main classes and functions:

- `DeepResearchSkill`
  - `run()`
  - `deep_research()`
  - `generate_research_plan()`
  - `generate_search_queries()`
  - `process_research_results()`

Parsing and utility helpers:

- `_extract_json_payloads()`
- `_load_repaired_json()`
- `parse_search_queries_response()`
- `parse_follow_up_questions_response()`
- `parse_research_results_response()`
- `count_words()`
- `trim_context_to_word_limit()`
- `ResearchProgress`

External dependencies:

- `json_repair.loads()` for tolerant JSON parsing.
- `create_chat_completion()` for strategic LLM calls.
- `get_search_results()` for initial search-plan grounding.
- `GPTResearcher.conduct_research()` for nested research execution.
- `ReportType.ResearchReport`, `ReportSource.Web`, `Tone`, and `ReasoningEfforts`.

High-level call graph:

```text
run()
  -> generate_research_plan()
       -> get_search_results()
       -> create_chat_completion()
       -> parse_follow_up_questions_response()
  -> deep_research()
       -> generate_search_queries()
            -> create_chat_completion()
            -> parse_search_queries_response()
       -> process_query() for each SERP query
            -> GPTResearcher(...)
            -> researcher.conduct_research()
            -> process_research_results()
                 -> create_chat_completion()
                 -> parse_research_results_response()
       -> deep_research() recursively when depth > 1
       -> trim_context_to_word_limit()
  -> attach citations/context/sources to parent researcher
```

## Segment Verdict

Worth studying and selectively adopting: it is a practical blueprint for bounded recursive research, resilient LLM parsing, citation preservation, and context-budgeted synthesis in agent systems.
17,874
## Role In Architecture

`DeepResearchSkill` is an orchestration layer for iterative research inside the `GPTResearcher` agent. It does not retrieve, scrape, or write final reports directly; instead it coordinates query planning, nested research runs, learning extraction, citation tracking, context assembly, and final mutation of the parent `researcher.context`.

It fits between the main agent and lower-level search/retrieval tools:

- `run()` starts the deep research workflow for the parent query.
- `generate_research_plan()` asks the strategic LLM for clarifying research questions using initial web results.
- `deep_research()` recursively fans out into generated search queries.
- Each query creates a nested `GPTResearcher` instance and calls `conduct_research()`.
- `process_research_results()` extracts learnings, citations, and follow-up questions.
- Final context, visited URLs, and sources are written back to the parent researcher for later report generation.

## Novel Techniques

- **Repair-first structured parsing**: LLM outputs are requested as JSON, parsed with `json_repair`, then recovered from fenced blocks, arrays, objects, and finally line-based fallbacks.
- **Recursive breadth/depth research**: The module implements bounded recursive exploration where each result can spawn deeper research using follow-up questions and prior research goals.
- **Diminishing breadth**: Deeper levels reduce breadth via `max(2, breadth // 2)`, limiting combinatorial growth while preserving exploration.
- **Citation ledger**: Citations are tracked as `learning -> sourceUrl`, then reattached to final context as `[Source: ...]`.
- **Context budget trimming**: `trim_context_to_word_limit()` preserves most recent context while enforcing a 25k-word cap.
- **Async fan-out with backpressure**: Query branches run concurrently but are capped by `asyncio.Semaphore`.
- **Nested agent propagation**: Child researchers inherit tone, websocket, headers, config path, visited URLs, and MCP configuration.

## Patterns Worth Adopting

- Keep LLM response parsing in pure helper functions like `parse_search_queries_response()`, `parse_follow_up_questions_response()`, and `parse_research_results_response()`.
- Combine strict prompting with tolerant parsing; the code asks for exact JSON but assumes the model may still return malformed or fenced output.
- Use explicit accumulators for `learnings`, `citations`, `visited_urls`, `context`, and `sources` instead of hiding research state inside prompt text.
- Bound recursive agent workflows with both `depth` and `breadth`.
- Use a semaphore around expensive async branches to avoid overloading providers, retrievers, or rate limits.
- Preserve source-level metadata separately from synthesized learnings.
- Emit progress through a small state object rather than coupling UI/websocket logic directly into the research loop.
- Trim context before assigning it back to the main researcher to protect downstream report generation.

## Anti-Patterns To Avoid

- Relying on perfect JSON from LLMs without repair and fallback parsing.
- Allowing recursive research to expand without explicit breadth, depth, and concurrency limits.
- Mixing report generation into the research collection phase; this module returns context and leaves writing to the main agent.
- Dropping citations during summarization; this code carries source URLs forward with extracted learnings.
- Passing unbounded raw context into the final agent step.
- Treating duplicate visited URLs as independent discoveries; URLs are accumulated through sets.
- Blocking all queries sequentially when branches are independent.
- Rebuilding child-agent configuration manually without propagating important parent settings such as MCP strategy, headers, tone, and websocket.

## Dependencies & Call Graph

Main classes and functions:

- `DeepResearchSkill`
  - `run()`
  - `deep_research()`
  - `generate_research_plan()`
  - `generate_search_queries()`
  - `process_research_results()`

Parsing and utility helpers:

- `_extract_json_payloads()`
- `_load_repaired_json()`
- `parse_search_queries_response()`
- `parse_follow_up_questions_response()`
- `parse_research_results_response()`
- `count_words()`
- `trim_context_to_word_limit()`
- `ResearchProgress`

External dependencies:

- `json_repair.loads()` for tolerant JSON parsing.
- `create_chat_completion()` for strategic LLM calls.
- `get_search_results()` for initial search-plan grounding.
- `GPTResearcher.conduct_research()` for nested research execution.
- `ReportType.ResearchReport`, `ReportSource.Web`, `Tone`, and `ReasoningEfforts`.

High-level call graph:

```text
run()
  -> generate_research_plan()
       -> get_search_results()
       -> create_chat_completion()
       -> parse_follow_up_questions_response()
  -> deep_research()
       -> generate_search_queries()
            -> create_chat_completion()
            -> parse_search_queries_response()
       -> process_query() for each SERP query
            -> GPTResearcher(...)
            -> researcher.conduct_research()
            -> process_research_results()
                 -> create_chat_completion()
                 -> parse_research_results_response()
       -> deep_research() recursively when depth > 1
       -> trim_context_to_word_limit()
  -> attach citations/context/sources to parent researcher
```

## Segment Verdict

Worth studying and selectively adopting: it is a practical blueprint for bounded recursive research, resilient LLM parsing, citation preservation, and context-budgeted synthesis in agent systems.

---

PRODUCE ONLY MARKDOWN (7 h2 sections, no intro preamble):

codex
## 1. Novel Techniques

> **Most adopt-worthy pattern: Bounded Provenance-Preserving Fanout** — plan from live evidence, fan out concurrently under explicit depth/breadth/cost limits, dedupe sources, preserve citations, and trim context before synthesis.

**Decision:** adopt GPT Researcher’s agent architecture selectively as a research-session pattern, not as a wholesale implementation.

GPT Researcher’s strongest technique is separating research into staged orchestration: top-level session facade, source-specific research conductor, prompt contract layer, optional image skill, and deep recursive research path. The facade owns session state and delegates specialized work rather than becoming a monolith (S3).

The research path is plan-first and evidence-grounded. `ResearchConductor.plan_research()` performs an initial search before generating sub-queries, so decomposition is based on live source material rather than only the user query (S0). Deep research extends this into bounded recursive exploration, where follow-up questions generate deeper searches but depth, breadth, concurrency, and context limits keep the run controlled (S4).

The prompt layer treats prompts as contracts. `PromptFamily` centralizes task prompts and model-specific formatting, while JSON/list-only prompt outputs reduce downstream parsing ambiguity (S1). Deep research correctly pairs strict structured prompts with tolerant repair-first parsing, using `json_repair` and fallbacks when models violate the requested shape (S4).

The system also makes optional capabilities first-class. MCP has `disabled`, `fast`, and `deep` strategies, including cache reuse in fast mode (S0). Image generation is feature-gated, provider-optional, and planned in two stages before or after report generation (S2). This allows richer outputs without making the core research pipeline fragile.

## 2. Adoption Targets

Teams building **agentic research systems** should study this repo because it shows how to move beyond one-shot search-and-summarize flows into staged, observable research orchestration (S0, S3, S4).

Teams building **LLM product infrastructure** should adopt the prompt-family pattern because it gives prompts a maintainable extension surface for report types, model providers, tone, language, source policy, and citation behavior (S1).

Teams building **deep research or analyst agents** should adopt bounded recursive fanout, citation ledgers, URL dedupe, context trimming, and semaphore-limited concurrency (S4).

Teams adding **optional multimodal output** should copy the image skill’s boundary design: feature flags, provider initialization checks, graceful failure, JSON-planned image concepts, and explicit placeholders for deterministic insertion (S2).

Teams operating **multi-user or concurrent agent services** should pay attention to request-local config mutation and cost attribution. GPT Researcher avoids process-global MCP configuration and tracks spend by workflow phase (S3).

## 3. Anti-Patterns to Avoid

Avoid monolithic “agent does everything” classes. GPT Researcher’s facade delegates research, writing, image generation, context matching, browsing, and curation to specialized components (S3).

Avoid unbounded fanout. Recursive research needs depth, breadth, concurrency, URL dedupe, and context-budget limits (S0, S4).

Avoid treating LLM JSON as reliable. Use strict prompt contracts, but parse defensively with repair and fallbacks (S1, S4).

Avoid silent expensive calls. Cache reusable MCP work, skip scraping when `raw_content` already exists, stream progress events, and attribute costs by phase (S0, S3).

Avoid process-global configuration for request-local behavior. Mutating environment variables for per-session MCP setup would be risky in concurrent systems; local config mutation is the better default (S3).

Avoid brittle report asset insertion. Header matching works but can fail with duplicate or rewritten headings; explicit `[IMAGE: ...]` placeholders are more deterministic (S2).

Avoid copying rough edges: mutable default arguments appear in research and prompt helpers, some return shapes mix strings/lists, and one synchronous cost method appears to call async logging without awaiting or scheduling it (S0, S1, S3).

## 4. Integration Points

The pieces fit together as a layered research pipeline.

`GPTResearcher` acts as the session kernel: it normalizes constructor inputs, wires config, retrievers, memory, prompt family, skills, costs, and lifecycle logging (S3).

`ResearchConductor` handles normal research execution: choose or reuse agent role, route by `ReportSource`, plan sub-queries, retrieve/search/scrape, merge MCP and web context, dedupe URLs, and assign final context (S0).

`DeepResearchSkill` is an alternate execution path for high-effort research: generate a strategic plan, recursively spawn child researchers, extract learnings, maintain citations, trim context, and write results back to the parent session (S4).

`PromptFamily` is the stable LLM contract layer consumed by planning, MCP routing, source curation, summaries, reports, subtopics, images, and provider-specific document formatting (S1).

`ImageGenerator` hangs off the report pipeline as an optional enhancement: it plans useful visuals from context or completed markdown, generates them concurrently, and returns markdown-ready embeds without blocking core research when unavailable (S2).

The pragmatic middle ground: use strict contracts at orchestration boundaries, but tolerant parsing and graceful degradation at LLM/provider boundaries. That resolves the apparent contradiction between “demand exact JSON” and “do not trust exact JSON.”

## 5. Cross-Repo References

Compared with simple LangChain-style chains, GPT Researcher is more session-oriented: it keeps costs, URLs, sources, context, memory, retrievers, and skills under one facade rather than passing loose state through a chain (S3).

Compared with AutoGPT-like autonomous loops, it is more bounded and report-oriented: explicit source routing, sub-query planning, citation preservation, and report generation keep the task grounded (S0, S4).

Compared with generic deep-research agents, its notable advantage is the split between normal research and deep research. Deep recursion is not the default path; it is selected deliberately for report types that need it (S3, S4).

Compared with multimodal agents that generate visuals inline during writing, GPT Researcher’s pre-generation path is cleaner: images can be planned after research and passed into report generation instead of stalling mid-report (S2, S3).

No supplied segment gives a direct file-level comparison to other named research-agent repos, so these are architectural comparisons rather than audited cross-repo claims.

## 6. Open Questions

Can return shapes be normalized across research paths so callers always receive the same context type? Segment 0 notes mixed string/list behavior.

Should all mutable default arguments be replaced with `None` defaults? Multiple segments flag this as low-risk cleanup (S0, S1).

Should async logging in `add_costs` be audited and converted to an awaited call or scheduled task? The current pattern may silently drop lifecycle events (S3).

Can image placement move from exact heading matching to stable section IDs or explicit placeholders by default? That would reduce misplacement risk in long reports (S2).

Should MCP strategy selection be represented as a typed config object instead of compatibility-normalized strings? The current compatibility layer is useful, but it may hide invalid states (S0, S3).

Can citation handling be unified across normal and deep research so every extracted context chunk carries structured provenance, not just formatted source text or learning-to-URL mappings (S0, S4)?

## 7. Final Verdict

GPT Researcher is worth adopting as an architectural reference for production research agents: its best idea is **Bounded Provenance-Preserving Fanout**, combining evidence-grounded planning, concurrent sub-query execution, optional deep recursion, source dedupe, citation retention, context trimming, cost tracking, and graceful degradation. Adopt the orchestration and prompt-contract patterns, but clean up mutable defaults, async logging, mixed return types, and brittle image insertion before copying the implementation directly.
