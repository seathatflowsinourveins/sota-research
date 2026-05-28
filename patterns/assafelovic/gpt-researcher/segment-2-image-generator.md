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

