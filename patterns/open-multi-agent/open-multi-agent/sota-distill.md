I’ll use the GitNexus exploring workflow for the architecture distillation, but I’ll keep the final output as the requested pure markdown.
# SOTA Distillation — open-multi-agent/open-multi-agent

_Ref style: `file::symbol`, because the supplied Repomix layer omitted original line numbers._

## Novel Techniques

1. **Goal-to-DAG runtime instead of chat-only agents**  
   Ref: `src/orchestrator/orchestrator.ts::OpenMultiAgent.runTeam`, `runTasks`, `src/task/queue.ts`, `src/orchestrator/scheduler.ts`, `src/cli/oma.ts::run/task`  
   Novel because the framework treats a natural-language goal as an executable dependency graph: coordinator plans tasks, queue resolves dependencies, scheduler assigns agents, and CLI/SDK both expose the same run model.

2. **Protocol-safe context compaction for tool-using agents**  
   Ref: `src/agent/runner.ts::groupIntoTurns`, `truncateToSlidingWindow`, `summarizeMessages`, `compactMessages`, `compressConsumedToolResults`  
   Novel because compaction preserves `tool_use`/`tool_result` atomicity, strips image payloads before summary, preserves delegation outputs, and avoids provider-invalid orphaned tool references.

3. **Delegation with deadlock and cycle guards**  
   Ref: `src/agent/pool.ts::AgentPool`, `Semaphore`, `runEphemeral`, `availableRunSlots`; `src/tool/built-in/delegate.ts`; `src/agent/runner.ts::buildToolContext`  
   Novel because nested agent delegation is treated as a resource-scheduling problem: same-agent state is locked, delegation runs ephemerally, depth/cycle/self-delegation are guarded, and nested token usage is surfaced back to the parent.

4. **Provider/tool portability behind a small core**  
   Ref: `src/llm/adapter.ts::createAdapter`, `src/llm/ai-sdk.ts::AISdkAdapter`, `src/mcp.ts`, `src/tool/mcp.ts`, `src/tool/text-tool-extractor.ts`  
   Novel because the core keeps minimal runtime deps while lazily bridging Anthropic/OpenAI-compatible providers, AI SDK, MCP tools, Bedrock/Gemini optional peers, and text-format tool-call extraction for local models.

5. **Post-run DAG observability as a pure artifact**  
   Ref: `src/dashboard/render-team-run-dashboard.ts`, `src/dashboard/layout-tasks.ts`, `src/utils/trace.ts`, `src/cli/oma.ts::--dashboard`  
   Novel because traces, task metrics, dependency layout, and static HTML dashboard are generated without a hosted service, making it useful for Claude Code-style local runtime debugging.

## Adoption Targets

- Pull `TaskQueue`, `Scheduler`, and `runTasks` semantics into the Claude Code runtime as the default explicit DAG execution substrate.
- Adopt `runTeam` only with guardrails: bounded task count, validated assignees, deterministic task IDs, max depth, and optional human approval for destructive tool plans.
- Port `AgentRunner` context strategies, especially atomic turn grouping and consumed tool-result compression, into long-running Claude sessions.
- Reuse the tool access resolution model: preset → allowlist → denylist → framework rails.  
  Ref: `src/agent/runner.ts::resolveTools`, `docs/tool-configuration.md`.
- Adopt `delegate_to_agent` as the handoff primitive, not direct recursive agent calls.
- Use `MemoryStore` / `SharedMemory` as the minimum viable shared-memory interface, but back it with a durable runtime store for production.
- Reuse `TraceEvent`, `onTrace`, `onProgress`, and static dashboard rendering for local postmortems.
- Copy the CLI posture: JSON input/output, explicit exit codes, noninteractive shell/CI behavior.  
  Ref: `src/cli/oma.ts::EXIT`, `serializeTeamRunResult`.

## Anti-Patterns

- **Do not treat built-in `bash` as sandboxed.**  
  Ref: `docs/tool-configuration.md`, `src/tool/built-in/bash.ts`. Filesystem tools are path-scoped; shell execution still needs process/container isolation.

- **Do not overclaim capability-based routing.**  
  DeepWiki describes rich adaptive capability routing, but L1 evidence shows a coordinator/planner plus scheduler, not a fully learned capability registry. Adopt as “planned/partial,” not as a guaranteed design property.

- **Do not summarize tool conversations naively.**  
  Dropping one half of a `tool_use`/`tool_result` pair will break Anthropic/OpenAI replay. Use `groupIntoTurns`.

- **Do not let LLM-generated DAGs run unbounded.**  
  Coordinator output needs validation, max task counts, cycle checks, assignee checks, retry caps, timeout policy, and tool policy enforcement.

- **Do not embed raw run payloads in dashboards.**  
  Ref: `src/dashboard/render-team-run-dashboard.ts::redactSensitiveObject`, `escapeJsonForHtmlScript`. Preserve both redaction and script escaping.

- **Do not accept SDK-only runtime objects through JSON config.**  
  Ref: `src/cli/oma.ts::asTeamConfig`. `sharedMemoryStore` is correctly rejected because it cannot survive JSON round-tripping.

- **Do not assume fan-out latency is free.**  
  Slowest branch blocks aggregation unless timeout, partial-result, and fallback policies are explicit.

## Integration Points

- **ruflo:** map ruflo jobs to OMA-style task records: `id`, `title`, `dependsOn`, `assignee`, `status`, `metrics`. Use the dashboard renderer as a local run artifact and back `MemoryStore` with ruflo’s durable state layer.

- **agent-orchestrator:** use OMA’s coordinator schema as the planner front end, then execute via explicit `runTasks`-style DAG semantics. Keep agent-orchestrator as the policy and approval layer around task creation.

- **Existing Claude Code skills:** model each skill either as a restricted tool bundle or as a specialized agent. Enforce `allowedTools`/`disallowedTools` per skill, and pass skill outputs through shared memory rather than implicit transcript scraping.

- **MCP connectors:** use `connectMCPTools` as the bridge pattern, but keep MCP optional and lazy-loaded so the runtime stays small.

- **Observability stack:** translate `TraceEvent` into local logs, OpenTelemetry spans, or Langfuse-style traces. Preserve run/task/agent IDs for correlation.

## Cross-Repo Refs

- `open-multi-agent` → `LangGraph`: both are DAG-oriented; OMA is lighter and goal-first, LangGraph is stronger on durable graph state and checkpointing.
- `open-multi-agent` → `OpenAI Swarm`: Swarm emphasizes explicit handoffs; OMA generalizes handoff through `delegate_to_agent` plus task DAGs.
- `open-multi-agent` → `CrewAI`: similar specialist-team framing; OMA is TypeScript-first and more SDK/CLI friendly.
- `open-multi-agent` → `Vercel AI SDK`: OMA can sit above AI SDK as orchestration/runtime while AI SDK handles model/provider integration.
- `open-multi-agent` → `gpt-researcher`: similar research-specialist decomposition; OMA provides a generic DAG and shared-memory substrate.
- `open-multi-agent` → `CowAgent`: CowAgent-style richer communication channels could extend OMA’s simpler `MessageBus`.
- `ruflo` / `agent-orchestrator` → `open-multi-agent`: adopt task DAG, delegation guards, context compaction, and local dashboard; keep stronger runtime policy outside OMA.

## Open Questions

- How strong is `capability-match` in `Scheduler` beyond simple metadata matching?
- What exact coordinator prompt/schema is used, and how robust is it against malformed plans?
- Is there durable checkpoint/resume support, or only in-memory task execution?
- How should partial fan-out failures be aggregated for production workflows?
- What conflict-resolution semantics should replace simple shared-memory KV for concurrent agents?
- How safe is text-format tool-call extraction around malformed `<think>` or leaked JSON outputs?
- Should Claude Code runtime expose `bash` at all, or only a narrower command tool with approvals?
- Which provider/model assumptions in docs are volatile and need runtime capability probing?

## Final Verdict

**ADOPT-PATTERN-GOAL-DAG-RUNTIME**, with security and validation guardrails.

Adopt the explicit task DAG, dependency queue, delegation guard model, context compaction, trace events, and static dashboard. Study more before adopting the claimed adaptive capability-routing layer, because the evidence shows useful scheduling primitives but not a mature capability registry. Skip the built-in shell security posture unless wrapped by stronger Claude Code runtime isolation and approval policy.