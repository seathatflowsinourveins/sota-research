# Design Spec — SOTA Research Architecture Enhancement

- **Date:** 2026-05-28
- **Status:** DRAFT for review (awaiting user approval before implementation)
- **Author:** Claude (Opus) + GPT-5.5 (Codex) adversarial consensus
- **Scope:** Enhance the discovery / scoring / decision architecture of `sota-research`, grounded in external SOTA practice rather than internal priors.

---

## 1. Context & Goal

`sota-research` discovers, scores, and decides on GitHub repos / MCP servers / Claude Code extensions for **installation** or **pattern-study**. Its 2026-05-28 upgrades already shipped a sophisticated base: soft SAFETY/QUALITY gate, 8-dimension rubric (D1–D8) + D9 overlay, a multi-factor decision engine (`decision.mjs`), independent-source-family convergence, and L1/L2/L3 ingestion.

**The gap this spec closes:** the architecture had never been validated against the external literature of its *own* domain (multi-criteria decision analysis, OSS supply-chain trust scoring, systematic-review recall methodology, LLM-judge calibration, MCP registry/discovery practice). This spec is the output of subjecting the architecture to that convergence — the same discipline it applies to other repos.

**Goal:** make discovery more *comprehensive*, scoring more *evidence-grounded and multi-dimensional*, and decisions more *transparent and correctly-tiered* (install vs. study) — without over-engineering for a single-user, event-driven tool.

---

## 2. How this spec was derived (method)

1. **10-angle convergence research** (parallel Sonnet agents): MCDA theory, OSS supply-chain trust scoring, systematic-review recall methodology, eval-harness rubric design, MCP registry signals, Claude-Code-native repos, agent frameworks/patterns, discovery meta-tooling, perplexity-class deep synthesis (exa `deep_researcher` + tavily `research`), and CC runtime-pathway taxonomy.
2. **Adversarial per-area verification** (Sonnet): every proposed change challenged for SOTA-validity + applicability to a single-user system + redundancy with what already exists.
3. **Independent GPT-5.5 (xhigh) consensus**: a fresh second model re-judged all 18 distilled recommendations, audited every citation (incl. web verification), answered 11 open questions, and produced a prioritized build set.
4. **Convergence verdict:** 2 ADOPT, 11 ADAPT, 4 contested (resolved below). The two models agreed on the high-leverage core; the consensus *sharpened* it.

---

## 3. Evidence base (corrected by the citation audit)

The GPT-5.5 citation audit corrected the research agents' sourcing. **The spec uses only corroborated evidence:**

| Claim | Status | Used for |
|---|---|---|
| MCPCrawler `arXiv:2509.25292` | CORROBORATED (corrected: 17,630 raw / ~8,401 valid; "41.9%" = cross-market **overlap**, not "placeholders") | registry fragmentation → adapter + dedup need (E3/E4) |
| Skilldex `arXiv:2604.16911` | CORROBORATED | manifest/format-conformance pre-vetting (E5) |
| DRACO `arXiv:2602.11685` | CORROBORATED (supports deep-research *evaluation*, not a summed dimension) | D11 design (phase 2) |
| pyDecision `arXiv:2404.06370` | CORROBORATED (MCDA methods exist; heavy outranking machinery NOT required) | comparative ranking (E8) |
| RULERS `arXiv:2601.08654` | CORROBORATED | evidence-contract + rubric versioning (E1) |
| Socket.dev, OpenSSF Scorecard, CHAOSS, deps.dev, OSV, Snyk | CORROBORATED | security depth (E7) |
| OWASP MCP Top-10 / SCVS + **CVE-2025-59536** (Check Point: RCE + token exfiltration via Claude Code project files) | CORROBORATED | install-time attack-surface gate (E7) |
| PRISMA-S / Campbell / capture-recapture | CORROBORATED (supports *optional audit*, not auto ranking changes) | recall audit (E9) |
| **SourceBroken `arXiv:2409.16342`** | **FABRICATED / MISATTRIBUTED** (that ID is a solar-PV paper; real SourceBroken `2512.24400` is about PyPI SourceRank, not AST behavior) | **DROPPED** — behavioral-risk rests on Socket.dev + OWASP + CVE instead |
| Registry counts (PulseMCP ~15.9K, Smithery, Glama, buildwithclaude stars) | VOLATILE | treated as runtime metadata snapshots — **never hardcoded** |
| eval.qa | EXISTS but weak authority | not used as normative evidence |
| Sourcegraph SCIP "free 2.8M, always-first" | UNVERIFIED / fragile | **DROPPED as a core path** |

---

## 4. Decisions locked (converged answers to the 11 open questions)

1. **Registry family:** PulseMCP + Smithery + Glama + mcp.so + official registry count as **ONE** "mcp-registry/marketplace" family for `convergence_families`; per-registry presence is recorded as metadata. (Consistent with the existing "registry mirrors = 1 family" rule.)
2. **MTTR demotion:** reachable open **critical** CVE unpatched **>30d** with no mitigation → demote to REFERENCE; **>90d** for high-severity or non-reachable/transitive.
3. **Behavioral flags:** **soft-cap** by default; **hard-veto only** for confirmed: malware, credential exfiltration, obfuscation + network/secrets access, destructive postinstall, or unpinned remote code execution.
4. **Org diversity** (kept as D8 metadata, not a split dimension): high = top org <50% AND top-2 <75% AND EF50 ≥3; low = one org ≥70% OR EF50 = 1.
5. **Orchestration (D10):** reward clear *primary* pattern fit; credit breadth only when documented + tested; penalize vague "supports everything."
6. **Recall seeds:** ~70% easy-to-miss niche winners / 30% obvious winners (sanity set).
7. **Manifest <70 repos:** re-score quarterly or on source/release change; **never** permanent WATCH from preliminary evidence.
8. **Registry diversity:** boosts confidence/D8 but does **NOT** auto-floor INSTALL — install stays score + surface + safety driven.
9. **Discovery budget:** gap-driven with a minimum per source; reallocate by unique-valid-yield-per-cost + false-positive rate.
10. **D11:** **KEPT as a scored dimension** per user decision (diverges from Codex "overlay") — mitigated by category-weighting (0 outside research-agent/agent-framework) + heuristic-first scoring to bound cost.
11. **Weight-tuning cadence:** defer auto-tuning until ≥30–50 **labeled** outcomes per relevant category exist; quarterly/on-demand, **not** "every 20 globally."

---

## 5. The enhancement program

Dependency-ordered. **Phase 1 (this session): E1, E2, E3, E6, E7.** Phase 2 (designed here, built next): E4, E5, E8, E9, E10 (D10/D11).

### Phase 1 — foundation + security

#### E1 — Enforce the evidence contract in code  `[decision.mjs, rubric.md]`
The evidence contract lives in `rubric.md §2` but `decision.mjs` never enforces it.
- **Add `coverageGate(tier, { coverage, minCoverage = 0.70 })`** → caps tier at STUDY when evidenced-dimension coverage < `minCoverage`. Applied in the **cap phase** of `routeDecision` (after override floors, alongside the convergence ACTION cap — caps lower only, never raise).
- **Enforce `rubricVersion`:** `routeDecision` gains `expectedRubricVersion`; on mismatch → push `flags: "rubric-version-mismatch"` + force `review_required = true` (surface drift; do not silently score against a stale rubric).
- **Coverage input:** `routeDecision` accepts `coverage` (0–1 = #evidenced dims / #expected dims for the category). Computed by the scorer; absent dims are `null` (never fabricated), per the existing contract.
- **rubric.md §2 "Evidence contract":** document the 0.70 coverage threshold + the version-hash semantics.
- **Tests:** coverage < 0.70 caps INSTALL→STUDY; version mismatch flags + forces review; full-coverage passes unchanged.

#### E2 — Make the self-improvement loop real  `[new lib/decisionlog.mjs, discover.mjs, outcome.mjs]`
`inventory/decisions.jsonl` is referenced everywhere but **never written** → the loop is inert.
- **New `lib/decisionlog.mjs`:** `appendDecision(record, { baseDir })` and `appendOutcome(record, { baseDir })` — atomic append of one validated JSON object per line to `inventory/decisions.jsonl` / `inventory/outcomes.jsonl`.
- **`discover.mjs` Phase 4:** after `routeDecision`, append `{ ts, repo, action, score, category, families, dims, coverage, rubricVersion, codex_verdict, trace, provenance }`.
- **Run-level metadata:** write `inventory/scan-<ts>.meta.json` `{ sources_used, query, result_count_by_source, dedup_method, date_range, top_source_families }` (PRISMA-S-style, run-level — see E9).
- **`outcome.mjs`:** read the now-real `decisions.jsonl`.
- **Tests:** `appendDecision` writes valid parseable JSONL; malformed record throws (no silent drop); `outcome.mjs` reads N records.

#### E3 — Canonical identity / source-family model  `[new lib/identity.mjs, discover.mjs, blend.mjs]`
Prerequisite for correctly counting `families` once we add many overlapping registries (E4).
- **New `lib/identity.mjs`:**
  - `canonicalId(candidate)` → stable key from repo URL ∪ package id ∪ registry entry ∪ fork/mirror lineage ∪ marketplace alias.
  - `sourceFamily(source)` → maps a source to its independence family (all MCP registries → `mcp-registry`; awesome-list derivatives → their origin; GitHub-search vs GraphQL → `github`).
  - `countFamilies(sources)` → independent family count feeding `sourceTrust.family_count`.
- **`discover.mjs` Phase 2:** dedup + family-count via the identity model (augments today's `nameWithOwner` match).
- **`blend.mjs`:** unchanged formula; now fed a trustworthy `family_count`.
- **Tests:** registry mirrors collapse to 1 family; a fork resolves to its origin; 3 genuinely-independent origins count as 3.

#### E6 — Runtime-surface model + surface-veto gate  `[decision.mjs, rubric.md, lib/surfaces.mjs]`
**This is the "degree of adaptness" model.** A high-scoring research repo with no runtime surface must not reach INSTALL.
- **New `lib/surfaces.mjs` `detectSurfaces(repoFiles)`** → returns `{ surface: confidence }` over the taxonomy: `mcp-server` (server manifest / `mcp.json`), `skill` (`SKILL.md`), `hook` (hooks config), `plugin` (`.claude-plugin/plugin.json` / marketplace), `subagent` (agent frontmatter), `output-style`, `slash-command` (`.claude/commands/`), `statusline`.
- **Add `surfaceVetoGate(tier, { category, surfaces })`** in `decision.mjs` → cap-phase step (with the convergence cap). Scoped to the **install-capable categories** (`mcp-server`→`mcp-server`, `skill-pack`→`skill`, `hook-toolkit`→`hook`); pattern-study categories (`agent-orchestration-pattern`, `research-with-code`, `code-library`, `awesome-list`) are unaffected (they don't reach an INSTALL tier via `baseTier` anyway). Rule: if `tier ≥ INSTALL-LITE` and the category's expected surface is **not** present in `surfaces` → cap at STUDY. `agent-framework`/`research-agent` accept any runtime surface.
- **Adaptness output:** the detected surfaces + confidence become the explicit *adoption pathway* (install-as-MCP vs skill vs hook vs … vs study-only) carried in the decision record.
- **rubric.md §D3 (Claude Code Runtime Fit):** add the surface taxonomy + detection-signal table + the veto rule.
- **Tests:** score-90 repo with no surface → STUDY; `mcp.json` present + mcp-server category → INSTALL allowed; surface/category mismatch → STUDY.

#### E7 — Security depth (soft-cap, evidence-based)  `[decision.mjs, rubric.md §7]`
- **Extend `assessSecurityFromEvidence`** to handle new finding types:
  - `behavioral` (install scripts / `eval` / network/fs/shell/crypto APIs) → soft `behavioralRisk` flag.
  - `install-surface` (repo-controlled hooks/settings/MCP-config that execute code on adoption — the **CVE-2025-59536** class) → soft-cap pending review.
  - **temporal MTTR:** open critical with a date → apply the 30d/90d rule (Decision #2).
- **Extend `lateSecurityDemotion`** to honor `behavioralRisk` (cap REFERENCE when D8 < 5) and `install-surface` (cap REFERENCE + `review_required`).
- **Hard-veto (confirmed only)** via `safetyVeto` extension or a `behavioralVeto`: malware / credential exfiltration / obfuscation+network+secrets / destructive postinstall / unpinned RCE (Decision #3).
- **Provenance & pinning:** decision record (E2) gains `provenance = { sourceUrl, commitSha, version, digest?, rollback }`.
- **rubric.md §7:** extend the "Behavioral Risk Overlay" from D6-publisher-concentration to code-behavior + install-surface + temporal aging.
- **Tests:** behavioral soft-cap; confirmed-malicious hard-veto → REJECT; MTTR>30d critical → REFERENCE; install-surface → REFERENCE + review; fixed/stale findings still 0-weight (existing behavior preserved).

### Phase 2 — designed, built next session

- **E4 — Registry + marketplace + manifest discovery** `[discover.mjs]`: adapters for PulseMCP / Smithery / Glama / official MCP registry / plugin marketplaces (buildwithclaude, claude-night-market, awesome-claude-code) + GitHub manifest search (`mcp.json`/`SKILL.md`/`plugin.json`/hooks). Counted as **one** registry family (Decision #1); counts are metadata. Hosted (Smithery/Glama) connectors carry separate trust evidence vs local stdio servers.
- **E5 — Manifest-first triage fast-path** `[discover.mjs, ingest.mjs]`: cheap pre-L1 manifest extraction to prioritize/avoid wasted repomix; never permanent downrank (Decision #7).
- **E8 — Comparative-ranking output** `[decision.mjs, decision.md]`: emit the Top-N D1–D9 matrix + concise "why this beat alternatives" rationale (full Pareto only for close calls). Closes the decision.md-promises-but-code-doesn't-emit gap.
- **E9 — Recall audit + golden set** `[outcome.mjs, watchlists/]`: known-item seeded set (70/30 niche/obvious), event-driven `--audit-recall`, drift report; a hand-labeled golden set must exist before any weight-tuning.
- **E10 — D10 + D11 scored dimensions** `[rubric.md, docs/categories/*]`: **category-weighted** (0 weight outside their categories). D10 Orchestration-Pattern Alignment (agent-orchestration-pattern 0.20, agent-framework 0.10); D11 Deep-Research-Readiness (research-agent 0.20, agent-framework 0.05). Weights re-normalized within affected categories only. D11 scored heuristic-first, escalating to a single Codex call only for close research-agent calls (cost control). *Note: kept per user decision; diverges from the Codex "overlay" recommendation — mitigation is the category-scoped weighting.*

---

## 6. Explicit DROPs (converged)

- **D8 org-diversity split** → keep org diversity/backing as **metadata/evidence inside D8** (thresholds in Decision #4), not a new dimension.
- **Sourcegraph SCIP as a core ingestion path** → too fragile / unverified coverage; repomix stays default. May revisit as an *optional* enrichment.
- **Registry-presence auto-INSTALL floor** → registry diversity informs confidence only (Decision #8).
- **Automatic "every-20-outcomes" weight-tuning** → deferred until durable labeled outcomes exist (Decision #11).
- **KEPT against Codex advice (user override):** D10/D11 as scored dimensions (category-weighted) — see E10.

---

## 7. Test & verification plan

- **Unit tests (Vitest, 80% coverage threshold):** every new pure function (`coverageGate`, `surfaceVetoGate`, `detectSurfaces`, `canonicalId`/`sourceFamily`/`countFamilies`, `appendDecision`, extended `assessSecurityFromEvidence`/`lateSecurityDemotion`). New tests live beside existing `tests/`.
- **Integration:** a `routeDecision` table-test matrix exercising the full ordered pipeline incl. the two new gates.
- **Lint/format:** Biome must be clean. **Fold in the two pre-existing items** the TaskCompleted hook flags: `scripts/ingest.mjs:298` unused `force` param (decide wire-up vs remove — likely wire as force-re-ingest with E5) and `.sota-watch.example.json` CRLF→LF.
- **Dual-model gate:** `/codex:review` on the diff before declaring done; fix BLOCKERs, re-verify.

---

## 8. Implementation environment (caveats)

- The session worktree `goofy-engelbart-a000d4` was reset mid-session; **all repo content is intact in the main repo `C:/SEA/src/sota-research` (branch `main`, clean)**. Implementation will target files there.
- **Branch first:** create `feature/research-arch-sota-enhancement` before the first commit (do not commit on `main`). Per the user's rule, commit only when asked.
- Global gitconfig has invalid `diff.colormovedws = allspace` (fatals some git commands) → set repo-local override `git config --local diff.colormovedws ignore-all-space` (or fix global).

---

## 9. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Adding 30K+ registry candidates (E4) amplifies noise | E3 identity/dedup + E1 evidence enforcement land **first** (dependency order) |
| Install-time RCE/exfiltration (CVE-2025-59536 class) | E7 install-surface gate + provenance/pinning + human review on all INSTALL |
| Rubric creep from D10/D11 | category-weighted (0 outside their categories); heuristic-first D11 scoring |
| Over-fitting weights to thin data | no auto-tuning until ≥30–50 labeled outcomes/category; golden set first (E9) |
| Volatile registry counts hardcoded | counts are runtime metadata snapshots only |

---

## 10. Build order (this session)

`E1 (evidence enforcement)` → `E2 (durable logs)` → `E3 (identity/families)` → `E6 (surface model + veto)` → `E7 (security depth)`. Each is a vertical slice: implement → unit tests → integrate into `routeDecision`/`discover.mjs` → Biome/Vitest green. Then `/codex:review` the full diff.
