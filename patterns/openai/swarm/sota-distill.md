I’m using the `gitnexus-exploring` skill for the architecture/read path, then I’ll keep the final response to the requested pure Markdown.
I’m checking whether this repo is indexed locally so the refs can be tied to source instead of relying only on the flattened pack.
GitNexus has no indexed repositories here, so I’m falling back to local source/package inspection and the supplied Repomix layer for exact references.
I found an inventory record for `openai/swarm`; I’ll use that plus the supplied packed source to keep the final ADR grounded.
There is already a prior inventory verdict saying “pattern, not dependency”; I’m now extracting source-line anchors from the supplied file set where possible.
The local `reference/openai/swarm` checkout is available. I’ll cite those actual files and line numbers in the final instead of approximate Repomix positions.
# SOTA Distillation — openai/swarm

## Novel Techniques

1. **Explicit handoff as ordinary tool return**  
   Refs: `reference/openai/swarm/swarm/core.py:76`, `reference/openai/swarm/swarm/core.py:77`, `reference/openai/swarm/swarm/core.py:135`, `reference/openai/swarm/swarm/core.py:221`, `reference/openai/swarm/examples/basic/agent_handoff.py:16`, `reference/openai/swarm/examples/basic/agent_handoff.py:18`  
   Novel because routing is not a separate planner, graph DSL, or hidden classifier. A Python function returns another `Agent`; the run loop treats that as the active executor. This makes delegation inspectable and easy to unit-test.

2. **Tiny agent primitive: instructions + callable tools + model settings**  
   Refs: `reference/openai/swarm/swarm/types.py:14`, `reference/openai/swarm/swarm/types.py:18`, `reference/openai/swarm/swarm/types.py:20`, `reference/openai/swarm/swarm/core.py:41`, `reference/openai/swarm/swarm/core.py:50`  
   Novel because the core abstraction is deliberately small. An agent is just active instructions plus functions, and the active agent determines the system prompt and available tools. This is useful for Claude Code skills because it maps cleanly to “capability cards” instead of a heavyweight runtime.

3. **Stateless client-side orchestration loop**  
   Refs: `reference/openai/swarm/README.md:81`, `reference/openai/swarm/README.md:87`, `reference/openai/swarm/README.md:116`, `reference/openai/swarm/swarm/core.py:253`, `reference/openai/swarm/swarm/core.py:257`, `reference/openai/swarm/swarm/core.py:283`  
   Novel because state is not owned by a hosted thread service. The loop copies incoming history/context, appends assistant/tool messages, updates active agent, and returns the new state. This is a good pattern for deterministic Claude Code runtime traces.

4. **Tool schema generation from plain Python functions**  
   Refs: `reference/openai/swarm/swarm/util.py:31`, `reference/openai/swarm/swarm/util.py:63`, `reference/openai/swarm/swarm/util.py:68`, `reference/openai/swarm/swarm/util.py:70`, `reference/openai/swarm/swarm/util.py:80`  
   Novel as a low-boilerplate authoring model: ordinary functions become model-callable tool specs. For our runtime, the idea is worth adopting, but the implementation needs stronger schema typing and policy metadata.

5. **Eval-first tool-call verification**  
   Refs: `reference/openai/swarm/examples/weather_agent/evals.py:13`, `reference/openai/swarm/examples/weather_agent/evals.py:26`, `reference/openai/swarm/examples/triage_agent/evals.py:32`, `reference/openai/swarm/examples/triage_agent/evals.py:44`, `reference/openai/swarm/examples/airline/evals/eval_utils.py:28`, `reference/openai/swarm/examples/airline/evals/eval_utils.py:62`  
   Novel because examples evaluate routing/tool selection directly, including dry-run mode via `execute_tools=False`. This is the right test shape for handoff accuracy in a Claude Code skill router.

## Adoption Targets

- Pull `Agent`, `Response`, and `Result` concepts from `swarm/types.py` into a Claude Code “capability + handoff result” schema. Do not copy the Pydantic defaults directly.
- Pull `Swarm.run`, `handle_tool_calls`, and `handle_function_result` from `swarm/core.py` as a reference state machine for serial handoff routing.
- Pull `function_to_json` from `swarm/util.py` only as a sketch for generating tool manifests from code; replace with strict JSON Schema or MCP-compatible schemas.
- Pull `examples/airline/configs/agents.py` as the best domain-routing reference: triage agent, sub-intent router, and policy-specific traversal agents.
- Pull `examples/triage_agent/evals.py`, `examples/weather_agent/evals.py`, and `examples/airline/evals/eval_utils.py` as eval templates for “expected handoff/tool call” tests.
- Convert the pattern into a Claude Code skill such as `swarm-handoff-router`, not a dependency. The skill should route between existing skills like `gitnexus-exploring`, `gitnexus-debugging`, `gitnexus-refactoring`, `gitnexus-impact-analysis`, and plugin/MCP-backed tools.

## Anti-Patterns

- **Do not adopt Swarm as a maintained runtime dependency.**  
  Refs: `reference/openai/swarm/README.md:3`, `reference/openai/swarm/README.md:6`, `reference/openai/swarm/README.md:8`  
  The project itself says it is experimental/educational and replaced by the OpenAI Agents SDK for production.

- **Do not copy mutable defaults.**  
  Refs: `reference/openai/swarm/swarm/types.py:18`, `reference/openai/swarm/swarm/types.py:24`, `reference/openai/swarm/swarm/types.py:26`, `reference/openai/swarm/swarm/types.py:41`, `reference/openai/swarm/swarm/core.py:143`, `reference/openai/swarm/swarm/core.py:235`  
  Shared list/dict defaults are poor runtime hygiene. Use factories and explicit context objects.

- **Do not execute local functions as tools without Claude Code permissions, sandboxing, and audit hooks.**  
  Refs: `reference/openai/swarm/swarm/core.py:114`, `reference/openai/swarm/swarm/core.py:122`  
  Swarm directly parses model arguments and calls Python functions. Our runtime must route through MCP/tools with permission checks, allowlists, and typed validation.

- **Do not let handoff replace global guardrails.**  
  Refs: `reference/openai/swarm/README.md:167`  
  Swarm swaps active instructions on handoff while retaining chat history. Claude Code needs persistent runtime policy, safety constraints, and workspace rules outside the active “agent” prompt.

- **Do not rely on docstrings as complete tool contracts.**  
  Refs: `reference/openai/swarm/swarm/util.py:63`, `reference/openai/swarm/swarm/util.py:68`, `reference/openai/swarm/swarm/util.py:80`  
  Docstrings are useful hints, not enough for secure tool execution, required approvals, filesystem scope, or side-effect classification.

## Integration Points

- **ruflo:** Treat Swarm as the explicit-handoff mental model for ruflo’s coordination layer. Local inventory already identifies ruflo as active for “Swarm coordination, self-learning loops, multi-language test/build” at `inventory/installed.md:36`. Use Swarm-style routing to decide which ruflo flow or skill owns the next step.
- **Agent Orchestrator:** Use AO for parallel worktree-isolated execution and CI loops, not as a Swarm replacement. Inventory marks AO as parallel agent spawning with worktree isolation at `inventory/installed.md:47`. Swarm’s pattern should sit above AO as a serial router that can delegate a branch to AO.
- **Existing skills:** Represent each skill as an `Agent`-like capability: instructions, triggers, allowed tools, and handoff targets. The handoff function becomes a routing rule, not executable Python.
- **MCP/tools:** Replace Swarm’s direct function calls with MCP tool invocations or existing Codex tool calls. Preserve Swarm’s “tool result can update context or route” idea, but enforce schemas and approvals.
- **Eval harness:** Add handoff evals to the runtime knowledge base: input task, expected skill/tool, expected no-tool cases, and max-turn routing budget.

## Cross-Repo Refs

```text
openai/swarm
  -> OpenAI Agents SDK: production successor; use SDK for OpenAI-native production, Swarm for pattern study.
  -> ruvnet/ruflo: candidate host for explicit handoff routing plus self-learning/test loops.
  -> Agent Orchestrator: complementary parallel executor; Swarm handles serial delegation semantics.
  -> open-multi-agent/open-multi-agent: contrast explicit handoff routing vs capability-based routing.
  -> assafelovic/gpt-researcher: contrast lightweight handoff loop vs research-specific multi-step workflow.
  -> openai/codex: target runtime; Swarm ideas must pass through Codex sandbox/tool/permission model.
  -> zhayujie/CowAgent: heavier agent harness/channel system; compare for skill/memory/channel patterns, not for minimal handoff core.
```

## Open Questions

- What is the canonical Claude Code representation of an agent: skill frontmatter, plugin manifest, MCP resource, or runtime-only router config?
- Which context variables should survive a handoff, and which should be scrubbed to prevent prompt/policy leakage?
- Should ruflo own the handoff router, or should this live as a separate skill that can call ruflo and AO?
- Can AO expose a dry-run routing mode equivalent to Swarm’s `execute_tools=False` for evals?
- What metrics should gate adoption: handoff accuracy, unnecessary handoff rate, tool-call false positives, context growth, and recovery after failed tool execution?

## Final Verdict

**ADOPT-PATTERN-EXPLICIT-HANDOFF-RUNLOOP; SKIP as dependency.**

Swarm’s SOTA value is the minimal, testable handoff pattern: active capability + tool calls + context update + possible route change. That should be distilled into Claude Code’s skill/plugin/MCP runtime. Do not install or depend on Swarm itself: it is officially superseded, lacks Claude/MCP-native integration, and its direct Python execution model is too weak for a secure runtime.