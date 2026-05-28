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
