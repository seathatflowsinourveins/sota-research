# SOTA Runtime Inventory — Installed Artifacts

**Source of Truth:** Current state of Claude Code runtime artifacts (MCPs, plugins, tools, reference repos).
**Last Updated:** 2026-05-28  
**Maintained By:** sota-research bootstrap + session discovery scans  
**Scope:** Includes MCPs, Claude plugins, global npm tools, and decision provenance.

---

## Installed MCPs (14 total, verified 2026-05-27)

| Name | Version | Install Path | Purpose | Adopted Date | Decision Source | Status |
|------|---------|---------------|---------|--------------|-----------------|--------|
| github | v1.0.5 | `~/.claude/mcp/github` | GH API search, metadata, code search, PR/issue ops | 2026-05+ | ECC default | Active |
| brave-search | current | `~/.claude/mcp/brave-search` | Web search, news, image search | 2026-05+ | ECC default | Active |
| exa | current | `~/.claude/mcp/exa` | Semantic web search, deep researcher, code context | 2026-05+ | ECC default + CLAUDE.md | Active |
| tavily | current | `~/.claude/mcp/tavily` | Research, crawl, extract, map, search | 2026-05+ | ECC default | Active |
| firecrawl | current | `~/.claude/mcp/firecrawl` | Scrape, crawl, extract, parse, monitor, map | 2026-05+ | ECC default | Active |
| jina | current | `~/.claude/mcp/jina` | read_url, search_arxiv, search_web, extract_pdf, classify, deduplicate | 2026-05+ | CLAUDE.md research routing | Active |
| semantic-scholar | current | `~/.claude/mcp/semantic-scholar` | Paper search, author info, citations, references | 2026-05+ | CLAUDE.md research routing | Active |
| gitnexus | current | `~/.claude/mcp/gitnexus` | Query codebase, impact analysis, rename, symbol context | 2026-05+ | Integrated in this repo | Active |
| context-mode | current | `~/.claude/mcp/context-mode` | ctx_batch_execute, ctx_search, ctx_execute, ctx_fetch_and_index | 2026-05+ | Plugin installed | Active |
| memory (mcp) | current | `~/.claude/mcp/memory` | Knowledge graph: create/search/open entities, relations, observations | 2026-05+ | ECC default | Active |
| filesystem | current | `~/.claude/mcp/filesystem` | Directory tree, list, read_text_file, search_files, write_file | 2026-05+ | ECC default | Active |
| sequential-thinking | current | `~/.claude/mcp/sequential-thinking` | Structured chain-of-thought via sequentialthinking tool | 2026-05+ | ECC default | Active |
| playwright | current | `~/.claude/mcp/playwright` | Browser automation, screenshot, navigate, click, fill forms | 2026-05+ | ECC default + CLAUDE.md | Active |
| linear (http transport) | current | `~/.claude/mcp/linear` | Issue tracking via HTTP transport; requires `/mcp` auth | 2026-05+ | ECC default | Active |

---

## Claude Plugins (5 installed, verified 2026-05-27)

| Name | Version | Install Path | Purpose | Adopted Date | Status |
|------|---------|---------------|---------|--------------|--------|
| ECC | current | `~/.claude/plugins/ecc` | Multi-language code review, build, test, deploy orchestration | 2026-05 | Active |
| ruflo | current | `~/.claude/plugins/ruflo` | Swarm coordination, self-learning loops, multi-language test/build | 2026-05 | Active |
| context-mode | current | `~/.claude/plugins/context-mode` | Tool output sandboxing, auto-indexing, ctx_search, ctx_execute | 2026-05 | Active |
| claude-hud | current | `~/.claude/plugins/claude-hud` | Status line HUD, statusLine field in settings.json | 2026-05 | Active |
| codex (openai-codex) | current | `~/.claude/plugins/codex@openai-codex` | GPT-5.5 Codex access via `codex exec --effort xhigh`, gpt-5.5 consensus reviews | 2026-05 | Active |

---

## Global npm Tools (4 installed, verified 2026-05-27)

| Name | Version | Binary | Purpose | Adopted Date | Decision Source | Status |
|------|---------|--------|---------|--------------|-----------------|--------|
| Agent Orchestrator (AO) | 0.9.2 | `ao` | Parallel agent spawning, git worktree isolation, CI loops, dashboard | 2026-05-27 | sota-tools-installed.md | Active |
| Claude-Code-Workflow (CCW) | 7.3.14 | `ccw` | JSON-driven multi-agent, skill-based workflows, multi-CLI orchestration | 2026-05-27 | sota-tools-installed.md | Active |
| ccusage | 20.0.5 | `ccusage` | Per-session cost analytics from JSONL transcripts, burn rate, 7-day trend | 2026-05-27 | sota-tools-installed.md | Active |
| repomix | current | `npx repomix` | L1 ingestion: flattened codebase markdown for scoring | 2026-05-28 | spec section 5 | Active |

---

## Reference Repos (cloned for pattern study, not runtime plugins)

| Name | Location | Purpose | Status |
|------|----------|---------|--------|
| wshobson/agents | Reference archive | 83 plugins, 191 agents, 155 skills — reference for plugin-eval quality framework, model tier strategy | Active |
| sota-repos/ | `~/sota-repos/` (symlinks permitted) | Archive of scored SOTA candidates (L1, L2, L3 ingestion) | Bootstrap-pending |

---

## Pending Adoption (Bootstrap 2026-05-28)

_Queued by spec Appendix C. Actions pending first-run discovery + scoring._

| Name | Category | Target Version | Reason | Priority |
|------|----------|-----------------|--------|----------|
| **deepwiki (official Cognition Labs)** | MCP server | current | L2 ingestion enabler. Install via `claude mcp add deepwiki` → mcp.deepwiki.com. **Codex 2026-05-28 confirmed: install OFFICIAL endpoint, NOT `regenrek/deepwiki-mcp` wrapper (rejected, SUPERSEDED-BY-X)** | **High** |
| octocode OR codepathfinder | MCP server | current | Symbol-level code search (code-intelligence tier per spec A.5) | Medium |
| repomix-mcp | MCP server | current | Verify existence; programmatic repomix invocation if available | Medium |
| code-graph-context | MCP server | current | Alternative knowledge graph (EXPERIMENT-tier vs gitnexus) | Low |

---

## MCP Install Actions Queued

_From spec Appendix C. Bootstrap will validate and execute._

```bash
# High priority (blocking L2 ingestion)
claude mcp add deepwiki

# Medium priority (code intelligence gap)
claude mcp add octocode          # OR
claude mcp add codepathfinder

# Experimental (conditional on `repomix-mcp` existence)
claude mcp add repomix-mcp       # VERIFY first

# Experimental (knowledge graph evaluation)
claude mcp add code-graph-context
```

---

## Installation Notes

- **deepwiki**: Free for public repos, 50k+ repos indexed, 4B+ lines. Official MCP server. Per spec A.4, replaces deepwiki HTTP scrape in L2 protocol (Section 5).
- **octocode/codepathfinder**: Per spec A.5 (Ry Walker code-intelligence taxonomy), MCP code search tier; complements gitnexus (already installed) for small repos.
- **repomix-mcp**: If exists, avoids shell invocation of `npx repomix` in scripts/ingest.mjs; L1 stage becomes `mcp__repomix__...` call.
- **code-graph-context**: Experiment vs gitnexus (already installed). Per spec A.5, knowledge-graph tier for repos >10k files or complex deps.

---

## Convergence & Evidence Trail

- **Agent Orchestrator (AO) v0.9.2** — via sota-tools-installed.md (Convergence 1.5 ADOPT, 2026-05-27)
- **Claude-Code-Workflow (CCW) v7.3.14** — via sota-tools-installed.md (workflow automation decision)
- **ccusage v20.0.5** — via sota-tools-installed.md (cost attribution gap, Convergence 1.5 ADOPT)
- **deepwiki** — spec Appendix A.4 (Cognition Labs research), spec Appendix C (MCP install list)
- **14 MCPs base set** — inherited from CLAUDE.md infrastructure audit (2026-05-26), verified active
- **5 Claude plugins** — spec review (CLAUDE.md Section "Infrastructure")

---

## Ingestion Log

L1/L2/L3 ingestion outcomes per spec Section 5. Source of truth is `patterns/<owner>/<repo>/meta.json` — this log indexes status.

### 2026-05-28 — Full ingestion pipeline complete (top-5 STUDY candidates)

| Repo | Tokens | L1 | L2 | L3 | Verdict | Top Adopt-Pattern |
|---|---|---|---|---|---|---|
| assafelovic/gpt-researcher | 3.06M | ✅ | ✅ deepwiki | ✅ **Segmented (5 seg + meta)** | ADOPT-PATTERN | **Bounded Provenance-Preserving Fanout** (plan-from-evidence → concurrent fanout under depth/breadth/cost limits → dedupe + cite + trim) |
| open-multi-agent/open-multi-agent | 343K | ✅ | ✅ | ✅ single-pass | ADOPT-PATTERN-GOAL-DAG-RUNTIME | TaskQueue + Scheduler + runTasks semantics — explicit runnable substrate |
| zhayujie/CowAgent | 227K | ✅ | ✅ | ✅ single-pass | ADOPT-PATTERN-X | SKILL.md frontmatter + three-tier memory + channel normalization |
| openai/swarm | 140K | ✅ | ✅ | ✅ single-pass | ADOPT-PATTERN-EXPLICIT-HANDOFF | Agent + Response + Result schema; stateless orchestration loop (pattern only, skip as dependency) |
| openai/codex | 8K | ✅ minimal | ✅ | (Skip L3) | (Already in use via Codex consensus) | Zero-dependency Rust + sandboxed tool execution |

**Storage:** `reference/` = 121M, `patterns/` = ~62M (14M L1 + L2 ~5M + L3 ~43M). Wall time: L1 45s; L2 4min; L3 single-pass 10min parallel; L3 segmented 20min (5 parallel + 1 synthesis).

**Protocol extension durably committed:** `docs/protocols/ingestion.md` now documents the *Segmented L3* algorithm for >1M-token repomix corpora. Algorithm: pick top-5 signal files → distill each at Codex xhigh in parallel → final meta-synthesis pass reads all 5 + L2 + README → produces unified ADR-style distill. Cost ~$0.45 per segmented run.

### 2026-05-28 — Cross-Pattern Signals (synthesis from L3 distillations)

**Tier 1 — universal vocabulary** (appears in all 3 single-pass distillations + the segmented gpt-researcher meta):
`dependency` · `skill` · `agent` · `channel` · `memory` · `runtime` · `orchestration` · `capability`

**Tier 2 — emerging vocabulary** (appears in 2-of-3):
`handoff` · `delegation` · `schema` · `validation` · `guard`

**Architectural implications:**
- Any future agent-architecture work should treat Tier-1 concepts as first-class — they are now canonized across SOTA-2026.
- Tier-2 concepts are pre-canonical — likely Tier-1 within 90 days; watch for them in next discovery scan.
- The convergence-cycle protocol researcher dispatch could be reshaped using `Agent + Response + Result` schema (from swarm) for cleaner researcher contracts.
- Parent project tier orchestration could adopt the `TaskQueue + Scheduler` pattern (from open-multi-agent) for inter-tier dependency resolution.

---

## Verification Log

Adversarial findings investigated + adjudicated. Future scans should consult this before re-investigating already-cleared allegations.

### 2026-05-28 — ruflo RETIRE allegation **REFUTED**

| Field | Value |
|---|---|
| Trigger | Codex GPT-5.5 xhigh consensus, Stage-2 bootstrap (top-5 round) |
| Allegation | "Reddit audit alleges '99% fake'" — verdict RETIRE, codex_score 61, Δ -20.1 vs rubric |
| Status | **REFUTED** (no Reddit thread located; allegation unverifiable) |
| Investigation report | `inventory/ruflo-investigation-2026-05-28.md` |
| Evidence | Healthy fork ratio 0.114 (bot farms show 0.03-0.08); 10 distinct contributors; ruvnet 13yr account / 8,719 followers / 175 repos with consistent quality track record (RuView 67k★, ruflo 56k★, RuVector 4k★); 2026-05-26 CLAUDE.md already documents deliberate KEEP decision on trading stack |
| Updated final score | 79.4 (was 68.2 with Codex penalty) |
| Recommended action | **KEEP** — no disable, no audit-pending status |
| Lesson learned | Single-source adversarial signals must be investigated, not auto-actioned. The architecture's value is *adjudication between subsystems*, not raw output from any single one. |

**Re-investigation trigger:** if a similar allegation surfaces with concrete evidence (specific Reddit URL, named auditor, reproducible technical issue), escalate to quarterly KEEP-WITH-MONITORING for 90 days.

### 2026-05-28 — Docs-vs-Runtime drift detected on BLOCKER 3 fix (post-blend caps)

| Field | Value |
|---|---|
| Trigger | Codex GPT-5.5 xhigh fresh review (post-NOVELs), B-4 finding |
| Symptom | Earlier "BLOCKER 3 fixed" claim was true only for `docs/rubric.md`, `docs/protocols/scoring.md`, `docs/protocols/discovery.md` — but the *runtime decision logic* in `scripts/bootstrap.mjs` decision function NEVER applied the caps |
| How it slipped | Tests passed because they exercised category-profile loading + dimension math, not the score-to-action mapping |
| Codex catch | Quality score dropped from "likely 80+" (rubric-only impression) to **35/100** in the runtime review |
| Resolution path | Extract shared `computeFinalScore()` helper in `scripts/lib/blend.mjs`; all paths route through it; add unit tests proving `{rubric:100, codex:100, src:1}` → 80 not 88 |
| Lesson | **Every protocol claim needs a runtime test that fails if the claim is violated.** Docs are not enforcement. If `protocols/scoring.md` says "single-source caps at 80", there should be a unit test `expect(score({src:1, rubric:100, codex:100})).toBe(80)` — without it, drift is silent. |
| Pattern name | "docs-as-aspiration drift" |
| Re-occurrence prevention | Add a verification step in the convergence-cycle protocol: for every spec section that prescribes runtime behavior, confirm a corresponding test exists. Make this a stage-1 hard filter in self-improvement protocol — if a doc change ships without a matching test, the change is rejected. |

---

## Related Documents

- `inventory/watching.md` — WATCH-tier candidates with re-eval triggers
- `inventory/rejected.md` — REJECT log (avoid re-evaluation)
- `watchlists/global.json` — cross-project SOTA topics for discovery scans
- `docs/protocols/discovery.md` — multi-source convergent fan-out
- `docs/rubric.md` — 8-dimension score + stage-1 hard filter
