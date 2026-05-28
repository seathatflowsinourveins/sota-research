## Role In Architecture

`ResearchConductor` is the research execution layer for `GPTResearcher`: it turns a user query into curated context for later report generation. It sits between the planner/agent layer and source systems: retrievers, scrapers, document loaders, vector stores, MCP tools, context compression, and source curation.

Architecturally, `conduct_research()` is the main entrypoint (`L89-L211`). It selects or reuses an agent (`L118-L127`), dispatches by report source (`L135-L191`), stores the resulting context on `self.researcher.context` (`L193-L197`), and returns that context to the broader publishing pipeline.

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
