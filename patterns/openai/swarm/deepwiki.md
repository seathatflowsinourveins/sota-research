# DeepWiki L2 Extract — openai/swarm

**Source:** mcp.deepwiki.com (official Cognition Labs)
**Extracted:** 2026-05-28
**Category:** agent-orchestration-pattern
**Decision Score:** 64.1

## Architecture

Swarm is built on two primary abstractions: **Agents** and **Handoffs**. The architecture bridges natural language space (instructions) and code entity space (Python functions) through the Swarm client.

**Core Primitives:**
1. **Agents**: Encapsulate `instructions` (natural language rules) and `tools` (Python functions)
2. **Handoffs**: Agent can hand off conversation to another agent by returning that agent from a function call
3. **Stateless Design**: Unlike Assistants API, Swarm doesn't store threads/messages on server; all state managed client-side

**Run Loop (Core Execution):**
1. Get completion from OpenAI (with current messages, agent instructions, available tools)
2. Handle tool calls returned by model
3. Execute Python functions locally
4. Process handoffs (if tool returns another Agent, switch to that agent)
5. Update context variables and continue

**System Components:**
- Swarm Client: Orchestrates run loop and conversation flow
- Agent Registry: Stores agent definitions with instructions and tools
- Tool Executor: Handles function invocation and result marshaling
- Handoff Router: Manages agent transitions and context sharing

## Novel Techniques

- **Explicit Handoff Model**: First-class handoff abstraction enabling clean agent transitions (vs. implicit routing or capability-based selection)
- **Stateless Orchestration**: Client-side state management eliminates server-side session storage; simpler deployment and debugging
- **Instruction-Based Agent Definition**: Agents defined by natural language instructions + Python functions (minimal boilerplate)
- **Direct Function Execution**: Tools are plain Python functions; no DSL, no registration ceremony (Pythonic and flexible)
- **Streaming Support**: Built-in streaming for real-time response handling (`Swarm.run(..., stream=True)`)
- **Minimal Dependencies**: Lightweight library requiring only OpenAI SDK; easy to integrate into existing systems

## Adoption Targets

Swarm is ideal for:
- **Multi-agent routing systems** where explicit handoff patterns map naturally to domain logic (triage, escalation, delegation)
- **Real-time conversational AI** benefiting from streaming and low overhead
- **Python-first agent development** where function-based tools feel more natural than declarative approaches
- **Embedded agent orchestration** (integrate Swarm into larger Python applications)
- **Agent handoff patterns** — reference implementation demonstrating clean agent transition design
- **Lightweight agent frameworks** for prototyping and production use without heavy frameworks

## Integration Pitfalls

- **Client-Side State Management**: All conversation state managed client-side; requires careful serialization/persistence if durability needed
- **Handoff Overhead**: Each handoff resets model context; deep handoff chains may lose information or require explicit context passing
- **Tool Function Debugging**: Python functions must handle errors gracefully; exceptions interrupt orchestration
- **Context Variable Passing**: No automatic context inheritance; explicit `context_variables` parameter required for agent-to-agent data flow
- **Streaming vs. Batch Trade-off**: Streaming enables real-time UX but complicates error handling and retry logic
- **Limited State Durability**: Stateless design means no server-side persistence; recovery from client failures requires application-level checkpointing

## Cross-references

- **assafelovic/gpt-researcher**: Both manage multi-step AI workflows; Swarm uses explicit handoffs while gpt-researcher uses implicit multi-agent patterns
- **openai/codex**: Both are orchestration frameworks; Codex uses Rust with sandboxed tool execution while Swarm is lightweight Python
- **open-multi-agent/open-multi-agent**: Contrasts in orchestration model: Swarm uses explicit handoffs vs. open-multi-agent's capability-based routing
