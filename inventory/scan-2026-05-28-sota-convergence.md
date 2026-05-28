# Scan: SOTA Convergence (architecture-upgrade meta-scan) @ 2026-05-28

> Definitive SOTA recommendations from a 29-agent max-parallel convergence workflow
> (`wf_767a7ee0-02f`): 11 multi-angle research agents → 7 per-area comparative rankings →
> 10 adversarial verifiers + 1 methodology synthesizer. **166 candidate repos** surfaced across
> 7 areas; top picks adversarially re-verified with *live* search (today: 2026-05-28).

## Methodology & confidence

- **Multi-angle convergence:** every candidate seen by ≥2 independent angles (WebSearch + exa +
  tavily + github + semantic-scholar). Per-source families tracked to prevent single-family gaming.
- **Adversarial verification beat optimistic ranking.** The ranking lane scored several repos
  INSTALL 9.5–9.8; live-search verification then **downgraded** them on security/abandonment
  evidence the ranking lane lacked. **The verified verdict below is authoritative** where the two
  disagree — this is multi-factor decision-making in action (a late security finding overrides a
  high aggregate score).
- **Star counts** are from live verification 2026-05-28; where the research contested a number, the
  verified figure is used (e.g., LangGraph 33.2k actual vs 44k claimed).

---

## TL;DR — definitive verdicts

### ✅ INSTALL (verified, holds up)
| Repo | Area | CC pathway | Why SOTA vs alternatives | Caveat |
|---|---|---|---|---|
| **anthropics/claude-agent-sdk-python** | agent frameworks | SDK (pip) | Official; bundles CC CLI; guaranteed forward-compat. Beats LangGraph/Ruflo on *native fit*, not generality | Separate billing credit pool from **2026-06-15**; it spawns the CC CLI as a subprocess (not an integrated harness) |
| **mksglu/context-mode** | skills/infra | MCP + PreCompact hooks | 98% tool-output reduction (315 KB→5.4 KB), 66k+ users, 15 platforms. **Already installed in your runtime** | Bus factor = 1 (solo maintainer); Elastic License 2.0 |
| **rohitg00/agentmemory** | memory | MCP + hooks | **Purpose-built for coding agents** (Cursor/Codex/Claude); auto-capture hooks replace manual CLAUDE.md memory; trending #2 May 2026 | Newer; verify maintenance cadence before deep reliance |
| **anthropics/claude-plugins-official** | plugins | plugin marketplace | Official, auto-available, 55+ vetted plugins | — |
| **langgenius/dify** | platform | MCP (two-way) | 143k★, SOC2/ISO, genuine agent-native (RAG/reasoning/prompt-versioning), bidirectional MCP | License restricts SaaS/multi-tenant; CC pathway is *indirect* (MCP, not first-class plugin) |

### 📚 STUDY (strong pattern; ingest, don't necessarily install)
| Repo | Area | Pattern worth distilling | Why not INSTALL |
|---|---|---|---|
| **assafelovic/gpt-researcher** | research agents | Planner→Searcher→Publisher triad (the canonical deep-research arch) | Already in `patterns/`; framework not a CC artifact |
| **stanford-oval/storm** | research agents | Perspective-guided retrieval → multi-perspective dialogue → wiki report | Heavy; pattern > install |
| **aider-ai/aider** | coding harness | Git-first **atomic commits w/ Co-authored-by**, token-efficient repomap | Standalone CLI, not a CC pathway |
| **OpenHands/OpenHands** | coding harness | Event-sourcing (immutable append-only log, deterministic replay) | Heavy platform |
| **langchain-ai/langgraph** | orchestration | Graph state-machine, checkpoint/rollback, audit trails | **CVE-2025-68664 (CVSS 9.3) key-leak + CVE-2025-67644 SQLi — patch before any use** |
| **n8n-io/n8n** | automation | 400+ integration workflow patterns | **3 max-severity CVEs early 2026 (incl. CVSS 10.0 unauth RCE); SSE-only MCP; fair-code license** |
| **mem0ai/mem0** | memory | Vector+graph+KV universal memory layer | Heavier than agentmemory for CC use |
| **coleam00/Archon**, **confident-ai/deepeval** | harness / eval | Deterministic-workflow harness; pytest-native agent eval | Pattern study |

### 📎 REFERENCE (clone/track; discovery inputs)
- **registry.modelcontextprotocol.io** — authoritative MCP registry (Anthropic/GitHub/Microsoft-backed). **Add as a discovery source.**
- **punkpeye/awesome-mcp-servers** (88k★) — broad MCP index, but an April 2026 audit found **52% of listed servers abandoned** → use only with per-server health checks.
- **glama.ai** (26k+ servers, tool-level search), **ecosyste.ms** (400+ awesome lists), **PulseMCP** (15.9k hand-reviewed), **Smithery** (7.3k) — discovery aggregators.
- **hesreallyhim/awesome-claude-code** (45.1k★) — de-facto CC hub, but **CC-BY-NC-ND** (non-commercial) + automated/stale commits → reference, not install.
- **ComposioHQ/awesome-claude-skills** (1000+ portable skills) — browse for skill candidates.
- **yamadashy/repomix** — already used for L1 ingestion; reference implementation.

### ⏳ WATCH
- **rohitg00/awesome-claude-code-toolkit** — huge breadth (136 agents / 222 plugins) but **3 days old** with inflated/miscounted claims → re-eval in 90d once it proves stability.
- **getmaxim/mastra** — best-in-class TS agent DX, $13M Series A, 1.0 (Jan 2026); watch CC-pathway maturity.

### ⚠️ INSTALL ONLY WITH SAFETY CONFIG (scoped security — NOT a blanket reject)
- **microsoft/playwright-mcp** — **INSTALL the safe tool subset; leave `browser_run_code_unsafe` disabled.** It IS SOTA (Microsoft-official, ~33k★, best cross-browser MCP, `v0.0.75` 2026-05-07, actively maintained). The critical RCE (Issue #1495, `vm.runInContext` prototype-chain escape) was **closed/mitigated 2026-03-30** by renaming the code-execution tool to `..._unsafe` (opt-in, OFF by default) rather than a full vm sandbox fix — **no open RCE issues as of 2026-05-28** (verified via `gh api`). The default tools (navigate/click/fill/snapshot/accessibility-tree) carry no code-execution risk. Install the **official** `@playwright/mcp` (watch for typosquats); only enable the `_unsafe` tool inside an isolated network if you truly need in-page JS execution. **Net: a legitimate INSTALL with one config flag, not a reject.**
- **modelcontextprotocol/servers** (as a *bulk* install) — OX Security (April 2026) systemic **RCE in the STDIO transport** affecting all official SDKs (~200k vulnerable instances; transport fix pending). Governance moved to AAIF/Linux Foundation (Dec 2025) — institutionally healthy, but **install individual vetted servers, not the bundle**, and monitor for the transport fix.

---

## Per-area comparative rankings (head-to-head)

### 1. Agent frameworks & orchestration (18 candidates) — winner: `anthropics/claude-agent-sdk-python`
1. **claude-agent-sdk-python (9.8, INSTALL)** — wins on native CC integration + forward-compat, *not* generality.
2. langchain-ai/langgraph (9.5→STUDY) — enterprise-grade graph state machines; **CVEs gate it to STUDY**.
3. ruvnet/ruflo (9.2) — 55.9k★ (highest in dataset), purpose-built CC+Codex, swarm intelligence. **Already in your runtime** (kept intentionally per trading stack).
4. joaomdmoura/crewai (8.8) — role-based "agents as employees"; 4+ yr maturity.
5. getmaxim/mastra (8.5) — best TS DX, YC W25.

### 2. MCP servers (42 candidates) — nominal winner: `modelcontextprotocol/servers` → **STUDY/REFERENCE (security)**
1. modelcontextprotocol/servers (9.8→STUDY) — official, 86.4k★; **STDIO RCE downgrades it**.
2. **langgenius/dify (9.7→INSTALL)** — true bidirectional MCP, production compliance.
3. n8n-io/n8n (9.6→STUDY) — 190k★ but **CVSS 10.0 RCE**.
4. microsoft/playwright-mcp (9.5→INSTALL-LITE, safe subset) — critical RCE (#1495) **closed/mitigated 2026-03-30** via opt-in `_unsafe` rename; default tools safe.
5. rohitg00/agentmemory (9.4→INSTALL) — #1 by real-world agent benchmarks, 53 tools.

### 3. Skills / hooks / plugins (22 candidates) — winner: `mksglu/context-mode`
1. **context-mode (9.8, INSTALL)** — extended-session infrastructure; already installed.
2. hesreallyhim/awesome-claude-code (9.6→REFERENCE) — discovery hub; NC license.
3. ComposioHQ/awesome-claude-skills (9.2→REFERENCE) — 1000+ portable skills.
4. anthropics/claude-plugins-official (8.9→INSTALL) — official pathway.
5. jeremylongshore/claude-code-plugins-plus-skills (8.5→WATCH) — largest community scale; verify quality.

### 4. Research agents / deep research (19 candidates) — winner: `assafelovic/gpt-researcher`
1. **gpt-researcher (9.2, STUDY)** — most mature OSS deep-research; canonical Plan→Search→Report.
2. langchain-ai/open_deep_research (8.1) — lightweight, multi-model, ecosystem-integrated.
3. btahir/open-deep-research (7.9) — TS/Firecrawl alternative.
4. stanford-oval/storm (8.8, STUDY) — knowledge-curation paradigm, 28.3k★.
5. ItzCrazyKns/Perplexica/Vane (8.5, STUDY) — privacy-first, local-LLM.

### 5. Discovery meta-resources (28 candidates) — winner: `rohitg00/awesome-claude-code-toolkit` → **WATCH (too new)**
1. rohitg00/awesome-claude-code-toolkit (9.8→WATCH) — biggest aggregator but 3 days old.
2. punkpeye/awesome-mcp-servers (9.6→REFERENCE) — 88k★; 52% abandonment caveat.
3. **registry.modelcontextprotocol.io (9.4→REFERENCE/add-as-source)** — authoritative.
4. hesreallyhim/awesome-claude-code (9.2→REFERENCE).
5. glama.ai (9.0→REFERENCE) — tool-level search, 26k+ servers.

### 6. Agentic coding harnesses (16 candidates) — winner: `aider-ai/aider`
1. **aider (9.2, STUDY)** — git-first atomic commits beat higher-star Cline (58k) / OpenHands (64k) on architectural depth.
2. OpenHands (9.0, STUDY) — event-sourcing foundation.
3. yamadashy/repomix (8.7) — tree-sitter compression (~70% token savings); already used.
4. coleam00/Archon (8.5, STUDY) — deterministic harness.
5. roo-hq/roo-code (8.2, STUDY) — mode-scoped prompts/permissions.

### 7. Context / memory / eval / observability (21 candidates) — winner: `rohitg00/agentmemory`
1. **agentmemory (9.2, INSTALL)** — purpose-built CC memory beats mem0 (56k★) on CC fit.
2. mem0ai/mem0 (8.8, STUDY) — universal memory layer.
3. langfuse/langfuse (8.6) — MIT, self-host observability, OpenTelemetry.
4. langchain-ai/langgraph (8.5) — built-in audit/rollback.
5. confident-ai/deepeval (8.4) — pytest-native eval; Decision-Graph logic (v4.0.3).

---

## New discovery sources to wire into the pipeline (comprehensiveness)

These feed the upgraded discovery protocol (Phases 2b/2c/2d):
- **MCP registries:** registry.modelcontextprotocol.io, PulseMCP, Smithery, mcp.so, glama.ai (cross-dedup).
- **Ecosystem graph:** GitHub Dependency-Graph GraphQL (snowball dependents of the Anthropic SDK / MCP SDK), libraries.io, ecosyste.ms (400+ awesome lists w/ delta-tracking).
- **Velocity:** OSSInsight / Trendshift (trending before star saturation), BuilderPulse (HN+Reddit+PH+Trends).
- **Code-pattern:** grep.app MCP (real-world usage validation for L3 distillation).

---

## Coverage stats
- Candidates surfaced: **166** (frameworks 18 · MCP 42 · skills/hooks/plugins 22 · research 19 · discovery 28 · harnesses 16 · memory/eval 21)
- Areas ranked head-to-head: 7 · Adversarially verified: 10 · Research agents: 11 (multi-angle)
- Source diversity: ≥2 independent angles required per surfaced candidate.

## Audit trail
- Workflow: `wf_767a7ee0-02f` · 29 agents · 2.3M tokens · 532 tool calls · ~13 min
- Full structured result indexed in context-mode KB (query: "verified top SOTA repos install study").
- Architecture-design adversarial review (Codex GPT-5.5 @ xhigh): in progress at time of writing.
