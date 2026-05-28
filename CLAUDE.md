# sota-research

SOTA discovery, scoring, and ingestion methodology + artifact repository. Produces a growing knowledge base of high-signal repos/MCPs for Claude Code runtime installation, cross-referenced by category and scored via multi-angle convergence.

## Architecture

**This is a methodology + artifact repo, NOT a daemon or MCP server.** No PM2 entry, no stdio server, no Agent SDK headless harness. All execution flows through Claude Code during normal sessions using existing MCP infrastructure (14 MCPs) + Codex GPT-5.5 xhigh consensus.

Three execution layers:
- **Discovery phase (4-phase fan-out):** parallel breadth across 8 MCPs → convergence aggregation → stage-1 hard filter → stage-2 scoring + Codex consensus
- **Ingestion phase (score-tiered):** L1 (repomix), L2 (deepwiki MCP), L3 (Codex distillation) written to `patterns/<owner>/<repo>/`
- **Decision phase (event-driven):** score → action (INSTALL-FULL/STUDY/REFERENCE/WATCH/REJECT) → side-effect (append inventory, queue install, open PR)

No scheduled batches. No cron. Triggers: explicit query, session-start delta-check, backlog SOTA-replaceable event, awesome-list delta, pattern decay (≥90d), major release, meta-research event.

## Key Components

- **scripts/discover.mjs** — 4-phase fan-out; discovery.md protocol
- **scripts/score.mjs** — stage-2 rubric scoring; scoring.md protocol
- **scripts/ingest.mjs** — L1/L2/L3 tiered ingestion; ingestion.md protocol
- **scripts/bootstrap.mjs** — first-run multi-topic discovery (6 parallel topics)
- **scripts/outcome.mjs** — 30/60/90-day audit; self-improvement.md protocol
- **scripts/lib/decision.mjs** — THE single decision engine (added 2026-05-28): soft SAFETY/QUALITY gate, multi-factor override floors (capped at STUDY), convergence ACTION caps by independent source families, scoped late-security demotion. Used by discover.mjs + bootstrap.mjs.
- **scripts/lib/blend.mjs** — score blend; `convergence_factor` = source-family convergence (reconciled to rubric §3)
- **docs/rubric.md** — 8-dimension scoring + D9 niche overlay + soft SAFETY/QUALITY gate (§1) + evidence contract + multi-factor decision model (§4) + category weights
- **docs/protocols/** — discovery, scoring, codex-consensus, ingestion, decision, self-improvement, integration
- **docs/categories/** — 9 category weight profiles (mcp-server, agent-framework, agent-orchestration-pattern, research-agent, skill-pack, hook-toolkit, awesome-list, code-library, research-with-code)
- **inventory/** — installed.md, watching.md, rejected.md, scan-<ts>.md (decision outputs)
- **patterns/<owner>/<repo>/** — meta.json (score + decision), repomix.md (L1), deepwiki.md (L2), sota-distill.md (L3)
- **.claude/skills/sota-research/SKILL.md** — Claude Code skill file for discover/score/ingest commands

## Module Contract

Every script in `scripts/` exports ESM named functions:

```js
export async function main(options) {
  // options = { topic?, category?, owner?, repo?, depth?, help? }
  // returns { success, output, cost, audit_trail }
}

export const meta = {
  name: "discover|score|ingest|bootstrap|outcome",
  description: "...",
  modes: ["discover", "score", "ingest", "bootstrap", "outcome"],
  defaultCategory: "mcp-server"
};
```

Each script parses CLI args and invokes `main(options)`.

## Operating Principles

1. **Full-depth always.** Every passing candidate scores all 8 dimensions. No cheap-skips.
2. **Max parallel.** Discovery: ≥6 MCPs concurrently. Stage-2 scoring: N subagents with `isolation: worktree`. Codex: parallel to stage-2.
3. **Multi-angle convergence required.** Score ≥80 needs ≥3 independent sources. INSTALL needs ≥4.
4. **Event-driven, not cron.** Execution on explicit query, delta-check, pattern decay, major release, meta-research event.

## Code Conventions

- ESM only (`type: "module"`, `.mjs` extensions)
- Biome 2.x for lint + format
- Vitest for tests (80% coverage threshold)
- Named exports only — no default exports
- Errors: throw with context, never silently swallow
- Match project style conventions for consistency

## Design Spec Reference

Full architecture, protocols, and build order: see the companion project architecture documentation

Key sections:
- Overview: methodology + artifact repo (no daemon)
- Principles: full-depth, max parallel, multi-angle convergence, event-driven
- Rubric: stage-1 hard filter (6 gates) + stage-2 8-dimension scoring
- Discovery protocol: 4-phase fan-out, 8 MCP sources, ~$0.50-1.50 per scan
- Codex consensus: per-candidate GPT-5.5 xhigh review
- Ingestion: L1/L2/L3 score-tiered (repomix → deepwiki → distillation)
- Integration: flows into deep-audit-backlog, convergence-cycle-protocol, installed.md inventory
- Security: Megalodon honeypot gate (Appendix A.8), OpenSSF Scorecard (A.2), behavioral + process security (A.3)

## Quality Chain

Prechecks → Discovery (8-MCP fan-out) → Stage-1 hard-filter → Stage-2 scoring
→ Codex consensus (parallel) → Ingestion (L1/L2/L3) → Decision output
→ Codex distillation (L3 only) → Inventory/pattern side-effects
