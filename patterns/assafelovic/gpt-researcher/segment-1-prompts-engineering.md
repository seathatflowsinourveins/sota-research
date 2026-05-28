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

