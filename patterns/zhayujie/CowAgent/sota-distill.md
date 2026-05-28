# SOTA Distillation — zhayujie/CowAgent

## Novel Techniques (3-5 ideas with line refs + why novel)

> Note: Layer 1 has file paths and section structure but no line numbers, so refs use `file :: heading`.

1. **Channel-first agent harness**
   - Refs: `docs/en/intro/architecture.mdx :: System Architecture`, `docs/en/channels/index.mdx :: Capability Matrix`, DeepWiki `Architecture :: Channel System`
   - CowAgent treats Web, WeChat, Feishu, DingTalk, WeCom, QQ, Official Account, and Telegram as interchangeable ingress/egress layers over a shared Agent core. Novelty is not any single adapter, but the explicit separation between channel protocol quirks and reusable planning/memory/tool behavior.

2. **Three-tier memory lifecycle with async distillation**
   - Refs: `docs/en/memory/index.mdx :: Automatic Writing`, `docs/en/memory/context.mdx :: Compression Strategy`, `docs/en/memory/deep-dream.mdx :: Memory Flow`
   - Memory flows from conversation context → daily memory → `MEMORY.md`, with async summarization on trim and nightly Deep Dream consolidation. This is a strong runtime pattern for Claude Code: preserve task continuity without stuffing all historical context into every prompt.

3. **Knowledge base distinct from memory**
   - Refs: `docs/en/knowledge/index.mdx :: Knowledge vs Memory`, `docs/en/skills/knowledge-wiki.mdx :: Three Core Operations`
   - CowAgent separates timeline memory from topic-organized Markdown knowledge. This avoids turning durable project knowledge into a chronological chat log and gives the agent an explicit “wiki maintenance” behavior: ingest, synthesize, query.

4. **Skills as portable instruction packages, tools as primitives**
   - Refs: `docs/en/skills/index.mdx :: Skills Overview`, `docs/en/skills/skill-creator.mdx :: Three-Level Loading`, `docs/en/tools/index.mdx :: Tools Overview`
   - The clean distinction is valuable: tools are atomic capabilities; skills are higher-order workflows with `SKILL.md`, optional scripts, and optional resources. The three-level loading model maps directly to Claude Code skill design: metadata always available, body loaded on activation, resources loaded on demand.

5. **MCP as late-bound external tool plane**
   - Refs: `docs/en/tools/mcp.mdx :: How It Works`, `docs/en/releases/v2.0.9.mdx :: MCP Protocol Support`
   - CowAgent adds MCP without replacing built-ins. MCP servers are loaded asynchronously, hot-reloaded, and flattened into normal tools. This is the right adoption pattern: MCP expands capability surface while preserving the core planner/tool contract.

## Adoption Targets (specific files/symbols/skills to pull into our Claude Code runtime)

- Pull the **skill packaging model** from `docs/en/skills/skill-creator.mdx`: `SKILL.md` frontmatter, dependency gates, three-level loading, `scripts/`, `references/`, `assets/`.
- Pull the **knowledge-wiki workflow** from `docs/en/skills/knowledge-wiki.mdx`: `knowledge/index.md`, `knowledge/log.md`, one-topic pages, cross-links, ingest/synthesize/query.
- Pull the **memory tools contract** from `docs/en/tools/memory.mdx`: `memory_search(query)` and `memory_get(path, start_line, end_line)` as stable runtime primitives.
- Pull the **context compression policy** from `docs/en/memory/context.mdx`: truncate old tool results, trim complete turns, summarize discarded turns, inject summaries into retained context.
- Pull the **MCP config convention** from `docs/en/tools/mcp.mdx`: `~/cow/mcp.json`-style `mcpServers`, `stdio`/`sse`/`streamable-http`, async load, hot reload.
- Pull the **browser persistent profile pattern** from `docs/en/tools/browser.mdx`: persistent browser profile by default, optional CDP attach mode for real Chrome.
- Pull the **scheduler session injection idea** from `docs/en/tools/scheduler.mdx`: scheduled task outputs can be injected into the user’s real session for follow-up, while excluding high-frequency scheduler context from long-term memory.

## Anti-Patterns (what NOT to replicate, with refs)

- **Do not copy model/version docs as truth without verification.**
  - Refs: `docs/en/models/openai.mdx`, `docs/en/models/claude.mdx`, `docs/en/models/gemini.mdx`
  - These docs list future-looking model IDs relative to many public APIs. Treat model catalogs as config examples, not authoritative runtime assumptions.

- **Do not let channel abstraction hide platform limits.**
  - Refs: `docs/en/channels/qq.mdx :: Notes`, `docs/en/channels/wechatmp.mdx :: Personal Subscription Account`, DeepWiki `Integration Pitfalls :: Channel-Specific Quirks`
  - QQ reply windows, WeChat Official Account delayed responses, and group trigger rules prove abstraction leaks. Claude Code integrations should expose channel constraints explicitly.

- **Do not blindly grant OS/browser/tool access.**
  - Refs: `README.md :: Disclaimer`, `docs/en/tools/bash.mdx`, `docs/en/tools/browser.mdx`
  - CowAgent is powerful because it can run shell/browser/file tools. Claude Code should preserve stronger approval, sandbox, and path-scope rules than a chat assistant runtime.

- **Do not over-inject every skill.**
  - Refs: `docs/en/skills/skill-creator.mdx :: Three-Level Loading`
  - The repo itself argues against bulk-loading skills. Keep metadata cheap, load bodies only when triggered, and keep large references out of default context.

- **Do not merge memory and knowledge stores.**
  - Refs: `docs/en/knowledge/index.mdx :: Knowledge vs Memory`
  - Timeline summaries and durable conceptual docs have different access patterns. Combining them causes noisy retrieval and weaker project knowledge.

## Integration Points (how this connects to ruflo / agent-orchestrator / existing skills)

- **ruflo**
  - Use CowAgent’s channel abstraction as a reference for external event ingress. ruflo should normalize incoming messages into a typed runtime context before handing work to Claude Code.
  - Adopt the scheduler injection pattern if ruflo owns recurring workflows: task result pairs become follow-up context, not permanent memory by default.

- **agent-orchestrator**
  - Map CowAgent’s “Agent Core + tools + skills + memory” split into orchestrator responsibilities: route task, load relevant skill metadata/body, expose tools, persist memory summaries.
  - Use `memory_search` / `memory_get` as orchestrator-level interfaces rather than allowing each skill to invent its own memory retrieval path.

- **existing skills**
  - Normalize existing skills toward CowAgent’s `SKILL.md` contract: concise description, dependency metadata, scripts only for repeatable deterministic operations, references only for large docs.
  - Add a `knowledge-wiki`-style skill for project facts, ADRs, API contracts, repo-specific conventions, and cross-repo links.
  - Add MCP configuration as a runtime-level capability, not a skill-specific hack.

## Cross-Repo Refs (related SOTA — build a small graph)

```text
CowAgent
├─ resembles openai/swarm
│  └─ shared pattern: lightweight tool/function composition
├─ resembles assafelovic/gpt-researcher
│  └─ shared pattern: modular retrieval/search abstraction
├─ complements open-multi-agent/open-multi-agent
│  └─ CowAgent supplies channel/tool/skill harness; OMA supplies multi-agent orchestration
├─ complements Claude Code skills
│  └─ CowAgent’s SKILL.md loading discipline is directly portable
└─ connects to MCP ecosystem
   └─ external tools become hot-reloadable runtime capabilities
```

## Open Questions (for future investigation)

- What are the actual source-level interfaces for `Context`, `Reply`, channel adapters, and bot factory? Layer 1 mostly contains docs, not implementation.
- How does CowAgent enforce filesystem boundaries and destructive command safety in code, beyond documentation?
- How are skill dependency gates implemented and refreshed at runtime?
- How are vector indexes rebuilt, invalidated, and versioned for memory and knowledge?
- How does multi-channel identity mapping work across a single user present in Web, WeChat, Feishu, and Telegram?
- What tests exist for context compression, memory distillation, and scheduler injection?

## Final Verdict (ADOPT-PATTERN-X / STUDY-MORE / SKIP + rationale)

**ADOPT-PATTERN-X** for the runtime architecture patterns: channel normalization, three-tier memory, separate knowledge wiki, skill packaging, and MCP hot reload are directly useful for a Claude Code runtime knowledge base.

**STUDY-MORE** before copying implementation details. The provided Layer 1 is documentation-heavy, so source-level safety, concurrency, persistence, and adapter code need inspection before adopting mechanics wholesale.