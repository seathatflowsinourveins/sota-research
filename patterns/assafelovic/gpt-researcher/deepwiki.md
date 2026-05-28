# DeepWiki L2 Extract — assafelovic/gpt-researcher

**Source:** mcp.deepwiki.com (official Cognition Labs)
**Extracted:** 2026-05-28
**Category:** research-agent
**Decision Score:** 88.1

## Architecture

GPT Researcher utilizes a "planner" and "execution" agent pattern. The system is highly modular, supporting 25+ LLM providers, multiple search retrievers, and various document formats.

**High-Level Components:**
- **GPTResearcher Agent Class**: Core orchestration entity managing research lifecycle
- **ResearchConductor**: Workflow engine handling multi-step research execution
- **Skill Managers**: Modular skill system for research capabilities (retrieval, analysis, synthesis)
- **Prompt Management System**: Dynamic prompt generation and template management
- **Configuration System**: Unified config interface supporting 25+ LLM provider integrations

**Core Research Workflow:**
1. Research planning phase (semantic decomposition)
2. Parallel search execution across multiple sources
3. Information aggregation and deduplication
4. Multi-stage synthesis and report generation

## Novel Techniques

- **Multi-Agent Orchestration**: ChiefEditorAgent pattern with specialized agents for research subtasks (researcher, writer, reviewer)
- **Research Modes**: Standard, Detailed Report, and Deep Research modes enabling variable precision/cost trade-offs
- **Prompt Synthesis Pipeline**: Dynamic prompt generation optimized per LLM provider and research context
- **Multi-Source Retrieval**: Abstracted search interface supporting web search, academic databases, document stores
- **Review-Revision Workflow**: Automated quality gate using agent-driven review and revision cycles

## Adoption Targets

Typical adopters:
- **Research automation platforms** needing flexible, multi-source information gathering
- **AI-powered content generation** (reports, whitepapers, knowledge synthesis)
- **Multi-agent orchestration examples** — the ChiefEditorAgent pattern demonstrates structured agent coordination
- **LLM provider abstraction** — key pattern for supporting multiple model backends transparently
- **Dynamic prompt management** — techniques for context-aware prompt generation and optimization

## Integration Pitfalls

- **LLM Provider Configuration**: Requires explicit API key setup for each provider; shared key management is critical
- **Search Rate Limiting**: Multiple search retrievers can hit rate limits; budgeting and caching essential
- **Context Window Management**: Large research tasks require careful prompt/response chunking for long-context models
- **Retrieval Quality Variance**: Search result quality directly impacts synthesis quality; source filtering and validation important
- **Multi-Agent Overhead**: Orchestrating multiple specialized agents increases latency; suitable for async/background tasks, not real-time

## Cross-references

- **openai/swarm**: Agent handoff patterns complement gpt-researcher's multi-agent coordination
- **zhayujie/CowAgent**: Communication channel abstraction patterns similar to gpt-researcher's search retriever abstraction
- **open-multi-agent/open-multi-agent**: Parallel orchestration patterns for specialized agent teams
