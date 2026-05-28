# Scan: Workflow-Feature SOTA (debiased convergence) @ 2026-05-28

> **Question:** which SOTA repos should we INSTALL to maximize the quality of Claude Code's
> Workflow / multi-agent orchestration features — with *no bias*?
> **Method:** 53-agent debiased convergence workflow (`wf_c52941c0-317`): 7 multi-angle research →
> 62 pooled candidates → top 10 each judged by **3 independent lenses** (proponent / skeptic-forbidden-
> from-stale-claims / fit+maintenance) → **recency-weighted Reconciler** (discounts FIXED/stale claims,
> emits a `bias_check`) → per-area ranking → architecture synthesis. Then **Codex GPT-5.5 @ xhigh** as
> the final debias gate. Verdicts below are Codex-cut (it correctly cut the reconciler's 6–7 install
> calls down to 3 — the reconciler still over-anchored on stale issue numbers).

## How bias was resolved (the point of this run)

- The Reconciler self-corrected **both** directions: discounted a 43-day-old "unpatched" claim on
  `caveman`; surfaced the **current** Composio token-leak incident (5,241 keys revoked, 2026-05-27)
  the optimist missed; downgraded `crystal` because Claude Code v2.1.49+ ships native `isolation: worktree`.
- **Residual bias Codex caught:** even the debiased reconciler embedded specific issue numbers
  (`#3172`, `#47`) without re-verifying their *current* status this run. Fix shipped to the engine:
  `assessSecurityFromEvidence` (status-tagged + freshness-weighted; FIXED = 0 weight) + a
  **claim-freshness gate** (no INSTALL may rest on an unrefreshed issue/release/security claim) +
  **marginal-value-vs-stack** scoring. See `docs/rubric.md §4` + `scripts/lib/decision.mjs`.

---

## ✅ DECISION — INSTALL NOW (2 confirmed; `codeg` downgraded on live re-verification 2026-05-28)

| Repo | Pathway | Why it maximizes Workflow quality | Gate |
|---|---|---|---|
| **Yeachan-Heo/oh-my-claudecode** (35.2k★, active 2026-05-28) | plugin/skills | Teams-first orchestration (Team/Autopilot/Ralph modes), **HUD statusline** (live worker/token/queue visibility), skill-learning, cost-aware model routing — the single biggest direct lift to multi-agent workflow execution + observability | Track `#3172` (context-compaction) but it's an enhancement, not a Team-mode blocker |
| **levnikolaevich/claude-code-skills** (selective) | MCP (`hex-line`) + skills | **Hash-verified line editing** (FNV-1a per-line) eliminates silent stale-context Edit corruption — a real multi-turn workflow failure mode. Install **only** `hex-line` + audit/review skills | Skip the ~70-skill bundle (prompt-expansion + injection surface); audit before adding more |
| ~~xintaofei/codeg~~ → **DOWNGRADED → STUDY/SKIP** | — | Live re-verification (operator-challenged): a Tauri **desktop dashboard**, NOT a Workflow-feature lift; 3.5mo old, ~8 contributors (bus-factor), sponsor/commercial funnel, only *indirect* relevance to the objective. The new `objectiveRelevanceGate` (servesObjective=false) now caps it at STUDY automatically. | Optional STUDY only if you run Claude Code + Codex + Gemini and want a cross-agent session dashboard |

## 🚫 SKIP NOW (Codex cut these — debiasing in action)
- **JuliusBrussee/caveman** — token optimizer, but **marginal value ≈ 0**: your stack already has `context-mode` (98% reduction) + `RTK`. Overlap too high; open install/runtime regressions.
- **ComposioHQ/agent-orchestrator** — strong features (worktrees, autonomous CI/PR), **but** installing a GitHub-token-adjacent tool days after Composio's **confirmed token-leak incident** (2026-05-27) is a bad gate decision. Security incidents persist until postmortem + rotation verified.
- **stravu/crystal** — core differentiator (parallel worktrees) is **superseded by native Claude Code `isolation: worktree`** (v2.1.49+). Reference only.

## 📚 STUDY (adopt the pattern, don't install)
`NeoLabHQ/context-engineering-kit` (SADD `/do-and-judge` competitive-generation + independent judges) · `preset-io/agor` (session genealogy + multiplayer canvas; blocked on v0.20 breaking change) · `open-multi-agent` (TS goal→DAG orchestration) · `google-labs-code/stitch-skills` (design-to-code Agent Skills).

---

## Per-area winners (head-to-head)
- **Orchestration frameworks:** `codeg` (session aggregation) > oh-my-claudecode > ComposioHQ > agor
- **Durable/deterministic execution:** `levnikolaevich/claude-code-skills` (hash-verified editing) > open-multi-agent (deterministic DAG) > oh-my-claudecode
- **Eval / judge / structured-output:** `NeoLabHQ/context-engineering-kit` (only real eval-judge focus)
- **CC-native orchestration artifacts:** `oh-my-claudecode` (5 execution modes) > agor > ComposioHQ

---

## Architecture design — upgrade OUR workflow harness

### Patterns to adopt (STUDY → implement), grounded in the methodology lane
1. **ConfMAD confidence-weighted debate** (arxiv:2509.14034, +7.5% on HelpSteer) — agents emit calibrated confidence *during* the Codex consensus round, not just a final verdict. Breaks premature/incorrect consensus.
2. **Dual-perspective evidence retrieval** (arxiv:2602.18693) — retrieve FOR + AGAINST in parallel in discovery (we already do proponent/skeptic per-candidate; extend to discovery).
3. **Durable execution + deterministic replay** (Temporal/DBOS pattern) — checkpoint multi-stage workflows at step boundaries for crash-recovery replay.
4. **Reflexion loop** (arxiv:2303.11366, +8–21%) — self-critique step post-output on tasks with measurable success.
5. **Multi-layer consensus** (debate + voting + rubric) — converge only when all three agree; partial agreement gated by conflict-intensity.

### Bias-resolution shipped this session (code + docs, 114 tests green)
- `assessSecurityFromEvidence` — status-tagged, freshness-weighted findings; **FIXED issue = 0 weight** (the playwright bug, generalized; regression-tested).
- `claimFreshnessGate` — INSTALL verdicts require run-fresh issue/release/security claims, else cap at STUDY.
- **Marginal-value-vs-stack** rule documented (discount duplicative tools).

### Remaining P0/P1 (backlog) — from the methodology + Codex
- **P0** Source-of-truth status binding: every issue/release/security claim carries `{source_url, fetched_at, entity_type, current_state, mismatch_flag}` — *invalidate* evidence when the source object changes (Codex's upgrade to plain decay).
- **P0** Multi-layer consensus gate (debate + voting + rubric) in discovery→scoring.
- **P1** Credibility-weighted evidence fusion + conflict-intensity escalation routing; evidence audit log for re-convergence.

---

## Audit
- Workflow `wf_c52941c0-317` · 53 agents · ~4M tokens · 845 tool calls · ~20 min
- Codex GPT-5.5 final gate: "install top 3, study the rest — cut deeper than the reconciler did."
- Engine changes verified: `npx vitest run` → 114 passed; `biome check` → exit 0.
