# sota-research

SOTA discovery, scoring, and ingestion engine for Claude Code runtime. Discovers high-signal MCPs, repos, and patterns via multi-source convergent fan-out, scores via 8-dimension rubric + Codex GPT-5.5 consensus, and ingests at score-tiered depths (L1 repomix → L2 deepwiki → L3 distillation).

**Status:** SPEC COMPLETE (2026-05-28). See the companion architecture documentation for full design.

## Installation

```bash
npm install
```

Requires Node ≥22 (see `.nvmrc`).

## Quick Start

### Discover candidates for a topic

```bash
node scripts/discover.mjs --topic "mcp servers" --category mcp-server
# or
npm run discover -- --topic "agent frameworks"
```

Outputs: `inventory/scan-<timestamp>.md` with ranked candidates, costs, audit trail.

### Score a specific repo

```bash
node scripts/score.mjs owner/repo --category mcp-server
# or
npm run score -- owner/repo --category mcp-server
```

Outputs: `patterns/owner/repo/meta.json` + rubric score + dimension evidence.

### Ingest a repo at a specific depth

```bash
# L1: repomix only
node scripts/ingest.mjs owner/repo --depth L1

# L2: repomix + deepwiki MCP
node scripts/ingest.mjs owner/repo --depth L2

# L3: L1 + L2 + Codex distillation
node scripts/ingest.mjs owner/repo --depth L3
```

Outputs: `patterns/owner/repo/repomix.md`, `deepwiki.md`, `sota-distill.md` (per depth).

### Bootstrap discovery (first run, 6 parallel topics)

```bash
node scripts/bootstrap.mjs
```

Scans: MCP servers SOTA 2026, agent orchestration patterns, research agents, skill packs, code intelligence tools, user's 91 starred repos.

Outputs: `inventory/bootstrap-2026-05-28.md` with all stage-2 survivors ranked by final score.

### Review outcomes (30/60/90-day audit)

```bash
node scripts/outcome.mjs --window 30
```

Analyzes: decisions made, actual usage (package.json tracking, pattern access), re-evaluation triggers.

## Folder Structure

```
sota-research/
├── CLAUDE.md, README.md, package.json, biome.json, vitest.config.mjs
├── .nvmrc, .gitignore
├── scripts/
│   ├── discover.mjs
│   ├── score.mjs
│   ├── ingest.mjs
│   ├── bootstrap.mjs
│   └── outcome.mjs
├── tests/
├── docs/
│   ├── rubric.md (8-dim definitions, stage-1 hard filter)
│   ├── protocols/
│   │   ├── discovery.md, scoring.md, codex-consensus.md, ingestion.md,
│   │   ├── decision.md, self-improvement.md, integration.md
│   ├── categories/
│   │   ├── mcp-server.md, agent-framework.md, agent-orchestration-pattern.md,
│   │   ├── research-agent.md, skill-pack.md, hook-toolkit.md,
│   │   ├── awesome-list.md, code-library.md, research-with-code.md
├── inventory/
│   ├── installed.md (MCPs/plugins/repos installed + decisions)
│   ├── watching.md (WATCH candidates + re-eval triggers)
│   ├── rejected.md (REJECT with reasons)
│   └── scan-<timestamp>.md (per-scan output)
├── patterns/<owner>/<repo>/
│   ├── meta.json (score, decision, source_count)
│   ├── repomix.md (L1)
│   ├── deepwiki.md (L2)
│   └── sota-distill.md (L3)
├── reference/ (cloned repos for analysis)
├── watchlists/
│   ├── global.json (cross-project SOTA topics)
│   └── schema.json (.sota-watch.json schema)
├── .github/workflows/
│   ├── ci.yml (lint + test on push/PR)
│   ├── codeql.yml (security on push main + PR + weekly)
│   ├── dependency-review.yml (vuln dep check on PR)
│   ├── release.yml (GH Release on tag v*.*.*)
│   ├── sota-scan.yml (workflow_dispatch only, opens PR with scan)
│   └── dependabot.yml
└── .claude/skills/sota-research/
    ├── SKILL.md
    └── references/
```

## Design & Protocols

- **Rubric & Scoring:** `docs/rubric.md` — 8-dimension definitions, stage-1 hard filter (6 gates), category weights, score blending formula, decision thresholds
- **Discovery:** `docs/protocols/discovery.md` — 4-phase fan-out (breadth, convergence, hard-filter, scoring + Codex consensus)
- **Codex Consensus:** `docs/protocols/codex-consensus.md` — GPT-5.5 xhigh review, per-candidate verdict
- **Ingestion:** `docs/protocols/ingestion.md` — L1/L2/L3 score-tiered, decision side-effects
- **Self-Improvement:** `docs/protocols/self-improvement.md` — outcome tracking, weight tuning, meta-research triggers
- **Integration:** `docs/protocols/integration.md` — flows into deep-audit-backlog, convergence-cycle-protocol, installed.md

**Architecture spec:** See the companion project architecture documentation

## Development

```bash
# Lint
npm run lint
npm run lint:fix

# Format
npm run format

# Test
npm run test
npm run test:watch
```

Biome for format/lint; Vitest for tests (80% coverage threshold).

## License

MIT
