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

## Discovery Workflow — Phase-1 Live Multi-Source Fan-out (G1)

**This is the live runtime.** The `.mjs` scripts are deterministic scaffolds; the real multi-source
discovery happens HERE, in this workflow, because the MCP sources exist only inside an interactive
Claude Code session. Run phase-1 as a two-tier routing gate (grounded in gpt-researcher's
`MCPToolSelector` + RAG-MCP / MCP-Zero relevance-routing — see
`patterns/assafelovic/gpt-researcher/sota-distill.md`):

1. **Rank the sources (deterministic floor).** Call `selectSources(topic, category, { maxSources })`
   (`scripts/lib/source-registry.mjs`) for the relevance-ranked phase-1 plan. This is the always-on
   backstop: `github-search` is guaranteed present even on a relevance miss, so the fan-out never
   empties. Each entry carries `{name, family, relevance, reason}`. `discover()` already returns this
   as `sourcePlan`.
2. **(Optional) LLM-rerank** the plan against the *specific* scan intent (the expensive tier). If you
   skip it, or it errors, the deterministic ranking from step 1 stands — never stall the scan.
3. **Query each selected source in priority order**, mapping the source name → its real MCP tool:
   - `github-search` → `mcp__github__search_repositories` (also the live in-script source)
   - `exa` → `mcp__exa__web_search_exa` / `mcp__exa__get_code_context_exa`
   - `tavily` → `mcp__tavily__tavily_search`
   - `brave-search` → `mcp__brave-search__brave_web_search`
   - `jina` → `mcp__jina__search_web` (recency) / `mcp__jina__search_arxiv` (academic)
   - `semantic-scholar` → `mcp__semantic-scholar__search_papers`
   - `awesome-list` → `mcp__firecrawl__firecrawl_scrape` (curated lists)

   Respect `maxSources` and the per-scan budget (deep-score at most Top-K per category; on a budget
   hit emit the best partial ranked shortlist + mark the remainder WATCH/backlog — never crash,
   never silently drop).
4. **Normalize every result** through `normalizeCandidate(result, source)`. It reduces a
   heterogeneous web/academic hit to the GitHub repo it references (`extractRepoIdentity`) and tags
   it `sources: [source]`; a result referencing no repo returns `null` → drop it (it cannot be
   scored as a repo). This is the gpt-researcher "normalize every tool result uniformly" discipline.
5. **Converge.** Pass the family-tagged candidate batches (one array per source) into
   `phase2Convergence` — it canonicalizes forks/mirrors (R9 `canonicalIdentity`), per-source
   Set-unions the `sources`, and counts INDEPENDENT families (`canonicalSourceFamily` folds a single
   engine's tool-variants — `exa-web`/`exa-code` — to ONE family, so one engine cannot fake
   convergence). A repo surfaced by `github-search` AND referenced by an Exa hit is a real 2-family
   signal the convergence action-cap rewards.
6. **Score + decide** the converged set exactly as the script does: `phase3HardFilter` →
   `phase4Score` → `routeDecision`, then **emit one decision-envelope per candidate** (below). The
   engine is authoritative; convergence is a CAP, not auto-eligibility; the soft-gate is sacred
   (low-star niche repos survive to STUDY/REFERENCE — selection orders breadth, it NEVER rejects).

A source an MCP outage makes unavailable is an evidence-availability gap, not a quality verdict:
record it `NOT_RUN` in the run-status channel (so a low `family_count` reads as "fewer sources ran",
not "low quality") and continue — the deterministic floor keeps the scan honest.

## Scoring & Thresholds — the decision engine is authoritative

**The recommendation for every candidate is the `action` returned by `routeDecision()`
(`scripts/lib/decision.mjs`) — never the score band alone, and never the workflow's own
judgment.** The table below is only the *base tier*; the engine then applies, in order:
override floors → evidence-coverage gate → D3 adoption-pathway veto → convergence action-cap
→ provenance overlay → late-security demotion → claim-freshness → objective-relevance /
marginal-value → fail-closed safety. A score of 92 can still resolve to STUDY (no runtime
pathway, thin evidence, duplicative of the installed stack, or unverified safety).

| Score | **Base tier** (pre-gates) | Ingestion *if the engine confirms* |
|---|---|---|
| ≥90 | INSTALL-FULL | L1+L2+L3, adversarial Codex pass |
| 80-89 | INSTALL-LITE (mcp/skill/hook) else STUDY | L1+L2, skill/MCP/hook extraction |
| 70-79 | STUDY | L1+L2, reference clone |
| 60-69 | REFERENCE | L1 only |
| 40-59 | WATCH | Re-eval in 90d / next major release |
| <40 | REJECT | Log reason, no re-eval |

**Convergence is a CAP, not auto-eligibility:** independent source *families* cap the action
(≤1 → STUDY ceiling; 2 → INSTALL-LITE + manual review; 3 → INSTALL-LITE; 4+ → up to
INSTALL-FULL). Reaching INSTALL *additionally* requires a real adoption pathway (D3),
demonstrated marginal value over the installed stack (gap-fit), verified safety, and human
review. Low stars never auto-reject (soft gate) — a low-star niche repo routes to
STUDY/REFERENCE for pattern study.

### Anti-improvisation contract (do NOT free-form the verdict)

Read `docs/protocols/decision.md` first. The scoring stage MUST call `routeDecision` (or, in
the multi-agent workflow, reproduce its inputs and **emit its decision-envelope verbatim**),
and write one fenced ```json decision-envelope block per candidate into
`inventory/scan-<ts>.md` (`{action, flags, review_required, override_applied, families,
servesObjective, marginalValue, adoptionPathway, trace}`). The recommendation presented to
the user IS that envelope's `action`. The workflow may gather more evidence and re-run the
engine; it may NEVER hand-edit the tier the engine produced. This is what keeps the codified
rigor from being bypassed by prose (the "codeg miss" root cause).

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
