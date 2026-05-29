# Live SOTA Scan + Dogfood — 2026-05-28

- **Scope:** Claude Code runtime + research-architecture categories (mcp-server, agent-framework, agent-orchestration-pattern, research-agent, skill-pack, hook-toolkit)
- **Sources (6 lanes):** GitHub topic/keyword search, GitHub frameworks search, Exa semantic, Tavily synthesis, Firecrawl awesome-lists/registries, Semantic Scholar
- **Pipeline:** discover → converge (independent source families) → hard-filter → score D1–D11 → routeDecision → deep-audit → **GPT-5.5 (xhigh) convergence consensus**
- **Result:** 48 candidates discovered, top 9 scored (listed below). **This run dogfooded the (just-fixed) engine — every gate fired correctly on real repos.**

## Convergence-consensus outcome (GPT-5.5)

**VERDICT: REVISE — no INSTALL recommendation is safe to ship as-is.** The scan's 3 INSTALL calls were all demoted on review; the 6 STUDY calls were all upheld. This is the intended **fail-closed** behavior.

| repo | category | scan action | GPT-5.5 verdict | **final** | pathway | fam | why |
|---|---|---|---|---|---|---|---|
| affaan-m/ECC | agent-framework | INSTALL-FULL | REVISE→STUDY | **STUDY (verify)** | npm+plugin | 1 | 88.5<90; single family → convergence cap; implausible 197K★ / D1 artifact; "internal artifact" override **not** justified |
| microsoft/autogen | orchestration-pattern | INSTALL-LITE | REVISE→STUDY | **STUDY (verify)** | python | 2 | category not INSTALL-LITE-eligible; explicit maintenance-mode/deprecation |
| crewAIInc/crewAI | orchestration-pattern | INSTALL-LITE | REVISE→STUDY | **STUDY (verify)** | skill | 3 | orchestration-pattern not INSTALL-LITE-eligible; verify whether its published SKILL makes it a skill-pack; star artifact |
| langchain-ai/langchain | agent-framework | STUDY | UPHOLD | **STUDY** | mcp | 1 | high score but 1 family + marginal gap-fit |
| langchain-ai/langgraph | agent-framework | STUDY | UPHOLD | **STUDY** | npm-js | 3 | surface-veto: no MCP/SKILL/plugin pathway |
| ruvnet/ruflo | orchestration-pattern | STUDY | UPHOLD | **STUDY** | mcp | 3 | provenance: unverified 22M-download / single-author claims |
| microsoft/agent-framework | orchestration-pattern | STUDY | UPHOLD | **STUDY** | python | 3 | gap-fit veto: build-not-install (a dependency, not a runtime extension) |
| langgenius/dify | orchestration-pattern | STUDY | UPHOLD | **STUDY** | cli | 2 | build-not-install platform; unverified MCP claim |
| FoundationAgents/MetaGPT | agent-framework | STUDY | UPHOLD | **STUDY** | cli | 4 | surface-veto: CLI-only research artifact, no runtime pathway |

## Ship outcome

- **INSTALL (auto): none.** The engine + consensus correctly refused to over-ship.
- **Human-verify before any install:** `affaan-m/ECC`, `crewAIInc/crewAI` (does its SKILL make it an eligible skill-pack?), `microsoft/autogen` (or its maintained successor `microsoft/agent-framework`).
- **STUDY (validated, safe to record):** langchain, langgraph, ruflo, microsoft/agent-framework, dify, MetaGPT.

## Dogfood validation — gates that fired correctly on real repos

- **surface-veto** demoted npm/CLI-only giants (langgraph, dify, MetaGPT) — no Claude Code adoption pathway.
- **gap-fit / build-not-install** vetoed dependency-frameworks + full platforms (agent-framework, dify) to STUDY.
- **convergence cap** held single/low-family candidates (ECC, langchain) below INSTALL-FULL.
- **provenance overlay** flagged ruflo's unverified adoption metrics + single-author risk.
- **category gate** (INSTALL-LITE only for mcp-server/skill-pack/hook-toolkit) caught the autogen/crewAI mis-tiering on consensus review.
- **honesty:** the engine flagged its *own* shakiest call (ECC INSTALL-FULL) for human review rather than over-claiming.

## Method notes

21-agent workflow (`wf_9b7dd072`); 1 score agent failed structured-output (handled as null by `parallel()`, run completed). GPT-5.5 consensus run independently (fresh context, neutral cwd). Counts/stars from discovery are volatile snapshots — treat as metadata, verify canonical values before any install.
