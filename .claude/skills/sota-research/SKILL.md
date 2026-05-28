---
name: sota-research
description: "Discover, score, and ingest SOTA repos/MCPs into Claude Code runtime via multi-source convergent fan-out, GPT-5.5 consensus, and score-tiered ingestion."
user-invocable: true
paths:
  - scripts/
  - docs/
  - inventory/
  - patterns/
---

# SOTA Research Skill

Discover and evaluate high-signal SOTA repos and MCPs for Claude Code runtime installation. Multi-angle convergence (8 MCP sources) + 8-dimension rubric scoring + Codex GPT-5.5 xhigh consensus + score-tiered ingestion (L1/L2/L3).

## When to Use

- Finding new MCP servers, agent frameworks, or orchestration patterns for the Claude Code runtime
- Evaluating whether a repo/tool is SOTA-worthy (score ≥80 → study/install, score ≥90 → full ingestion)
- Auditing your starred repos for high-signal candidates with low visibility
- Continuous SOTA scanning on a topic (agent research frameworks, plan-by-files patterns, etc.)
- Reviewing ingested knowledge (patterns/) to understand adoption paths and anti-patterns

## Commands

```bash
# Discover SOTA candidates for a topic
npm run discover -- --topic "agent orchestration patterns" --category agent-orchestration-pattern

# Score a specific repo against 8-dimension rubric
npm run score -- owner/repo --category mcp-server

# Ingest at L1 (repomix only), L2 (+ deepwiki), or L3 (+ Codex distillation)
npm run ingest -- owner/repo --depth L1
npm run ingest -- owner/repo --depth L2
npm run ingest -- owner/repo --depth L3

# First-run bootstrap: 6 parallel discovery scans
npm run bootstrap

# Audit decisions: 30/60/90-day outcome review
npm run outcome -- --window 30
```

## Output Files

- **`inventory/scan-<timestamp>.md`** — discovery output: ranked candidates, scores, rationale, cost summary
- **`inventory/installed.md`** — decisions log (INSTALL-FULL, STUDY, REFERENCE, WATCH, REJECT)
- **`patterns/<owner>/<repo>/meta.json`** — score, decision, source_count, scanned_at
- **`patterns/<owner>/<repo>/repomix.md`** — L1: full-codebase flattened summary (repomix)
- **`patterns/<owner>/<repo>/deepwiki.md`** — L2: semantic architecture/techniques/pitfalls (DeepWiki MCP)
- **`patterns/<owner>/<repo>/sota-distill.md`** — L3: ADR-style distillation with novel techniques + adoption targets (Codex)

## Scoring & Thresholds

| Score | Action | Next |
|---|---|---|
| ≥90 | INSTALL-FULL | L1+L2+L3 ingestion, adversarial Codex pass |
| 80-89 | INSTALL-LITE / STUDY | L1+L2 ingestion, skill/MCP/hook extraction |
| 70-79 | STUDY | L1+L2 ingestion, reference clone |
| 60-69 | REFERENCE | L1 only, clone to ~/sota-repos/ |
| 40-59 | WATCH | Re-eval in 90d or on next major release |
| <40 | REJECT | Log reason, no re-eval |

Multi-source convergence modulates score: single-source ≤80 (auto-demote); 3+ sources ≥80; 4+ sources auto-eligible for INSTALL.

## Rubric & Protocols

- **Full rubric:** `docs/rubric.md` — 8 dimensions (stars, maintenance, CC-fit, quality, ingestion, adoption, novelty, community)
- **Category weights:** `docs/categories/*.md` — 9 profiles (MCP server, agent framework, etc.)
- **Discovery protocol:** `docs/protocols/discovery.md` — 4-phase fan-out (breadth → convergence → hard-filter → scoring + Codex)
- **Codex consensus:** `docs/protocols/codex-consensus.md` — GPT-5.5 xhigh review template + conflict resolution
- **Ingestion:** `docs/protocols/ingestion.md` — L1/L2/L3 side-effects (append inventory, queue installs)
- **Self-improvement:** `docs/protocols/self-improvement.md` — outcome tracking + weight tuning from 30/60/90-day audits

## Architecture & Integration

This is a **methodology + artifact repo**, not a daemon or MCP server. Execution flows through Claude Code sessions using 14 existing MCPs (GitHub, Exa, Tavily, Firecrawl, Jina, Brave-Search, Semantic-Scholar, DeepWiki, Gitnexus, Sequential-Thinking, Filesystem, Memory, Playwright, Context-Mode).

**Integration points:**
- Discovery output → `~/.claude/projects/<p>/memory/deep-audit-backlog.md` "Next planned convergence"
- Score ≥90 → triggers convergence-cycle protocol (2 researchers + Codex consensus)
- `patterns/` corpus → searchable by convergence-cycle Phase 1 researchers
- `inventory/installed.md` → source of truth for "what's deployed" in Claude Code runtime

**Reference:** Design specification in the companion architecture documentation

## Cost Model

| Phase | Component | Est |
|---|---|---|
| Discovery | 8-MCP fan-out (breadth + convergence + hard-filter) | $0.50-1.50 |
| Scoring | Stage-2 rubric (1 candidate) | $0.30-0.80 |
| Codex consensus | Per-candidate GPT-5.5 xhigh | $0.30-0.80 |
| Ingestion L1 | Repomix (1 repo) | $0.10 |
| Ingestion L2 | DeepWiki MCP (1 repo) | $0.30 |
| Ingestion L3 | Codex distillation (1 repo) | $1.50 |

Typical bootstrap (6 topics, 10 survivors each): $20-50.
Steady-state weekly (delta + watched topics): $10-20.

## Trigger Events (Event-Driven, No Cron)

1. Explicit query — `/sota-research find <topic>`
2. Session-start delta-check — `.sota-watch.json` entries checked for additions
3. Backlog SOTA-replaceable — deep-audit-backlog.md add candidate
4. Awesome-list delta — star count or README hash changed
5. Pattern decay — `patterns/<repo>/sota-distill.md` >90d old
6. Major release — starred repo publishes vN.0
7. Meta-research — rubric weight drift or outcome-tracking signal

**NO CRON. NO SCHEDULED BATCHES.** Discovery fires on explicit query or above event triggers.
