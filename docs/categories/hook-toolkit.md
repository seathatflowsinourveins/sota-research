# Category: Hook Toolkit

## Overview

Hook toolkits are collections of Claude Code hooks — automation scripts that run at specific lifecycle points (pre-commit, post-commit, pre-tool-use, etc.). They extend Claude Code's behavior without modifying the core runtime. Examples: commit-message formatters, safety validators, auto-test runners, cost trackers.

## When This Category Applies

- Repo contains ≥3 reusable Claude Code hooks (Python scripts following hook interface)
- Hooks are documented as individual, composable pieces (can install subset)
- README explains hook registry or installation method (e.g., `~/.claude/hooks/`)
- Hooks handle common automation needs (linting, testing, security, cost tracking)
- Examples show hook invocation or integration with `.claude/settings.json`

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Toolkits are automation-focused, niche audiences |
| D2: Maintenance | 0.15 | Hooks must stay compatible with Claude Code versions |
| D3: Claude Code fit | **0.30** | Hooks are Claude Code-specific; fit is the whole category |
| D4: Code quality | **0.20** | Hook reliability is critical; errors break workflows |
| D5: Ingestion | 0.05 | Hooks are small scripts; fast to understand |
| D6: Adoption | 0.10 | Usage in community projects |
| D7: Novelty | 0.10 | New hook patterns or automation targets are valuable |
| D8: Community | 0.05 | Hook discussions in Claude Code forums |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** Hooks are infrastructure tools. Discovery is low; stars are noise. Tiny weight.

**D2 (Maintenance):** Hooks are tightly coupled to Claude Code hooks API. Required:
- Track Claude Code version updates (hooks API changes periodically)
- Respond to issues about hook failures or incompatibilities
- Update hook signatures if Claude Code hooks interface evolves

Last commit ≤3 months OR clear "stable, no recent changes needed" statement.

**D3 (Claude Code fit):** HIGHEST WEIGHT. This is the whole category.
- Do hooks implement correct interface (event, context, return signature)?
- Are hooks registered in settings.json examples?
- Do README examples show how to enable/disable hooks?
- Can users copy hooks to ~/.claude/hooks/ and immediately use them?

Score 10/10 if all hooks are drop-in-ready with no configuration needed.

**D4 (Code quality):** SECOND-HIGHEST WEIGHT. Hook failures can block workflows.
- Robust error handling (never silently fail; log or re-raise)
- Type hints (Python 3.10+) or strict mypy checks
- Input validation (hook receives expected context)
- Atomic operations (no partial/corrupted state on failure)
- ≥80% test coverage including error paths

**D5 (Ingestion):** Hooks are typically 50–500 lines each. Fast to understand. Expect 9–10/10.

**D6 (Adoption):** How many Claude Code users have integrated these hooks?
- GitHub forks + dependents
- Issues/discussions showing usage in real projects
- References in .claude-code.ai blog or official tutorials

**D7 (Novelty):** New automation targets (e.g., "cost-tracking hook for MCP calls") score high. Reimplementations of common hooks (pre-commit linter) score lower.
- 8–10: New hook target or novel integration pattern
- 6–7: Solid implementation of useful automation
- 4–5: Minor variant of existing hooks
- 0–3: Duplicate of existing toolkit with no improvements

**D8 (Community):** Discussions in Claude Code Discord, mentions in blogs about Claude Code automation, GitHub issues asking "how do I implement X hook?"

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Hooks | Status | Notes |
|---|---|---|---|
| `disler/claude-code-hooks-mastery` | 8+ comprehensive | Active | Reference implementation |
| `parcadei/Continuous-Claude-v3` | 6+ automation | Active | Cost tracking + testing |
| `GowayLee/cchooks` | 5+ workflow | Active | Pre/post commit integrations |
| `starbaser/ccproxy` | 3+ proxy-aware | Active | Environment + credential hooks |

---

## Anti-Patterns (Demote Score)

- **Silent failures:** Hook catches exception and continues without logging
- **Hardcoded paths:** Hooks assume project structure (e.g., `~/projects/myproject/...`); fail in other contexts
- **No type hints:** Python hooks with zero type annotations; mypy would fail
- **Missing context validation:** Hook assumes context fields exist; crashes on missing fields
- **Breaking changes undocumented:** Hooks API changes but README doesn't explain migration path
- **No settings.json integration:** Hooks can't be toggled in settings; must be manually edited
- **Infinite loops:** Hook calls Claude → receives hook trigger again → deadlock

---

## Scored Example Walkthrough

**Candidate:** `devops-labs/smart-hook-pack` (hypothetical, 7 hooks)

**Stage-1 hardfilter:** PASS (MIT, 50 commits, 4 contributors, last commit 1 week ago)

**D1 (Stars):** 2,100 stars → log₁₀(2101) ≈ 3.32 ≈ **3/10**

**D2 (Maintenance):** Last 8 commits in 90d (monthly), issues closed in 3–5 days, updated for Claude Code v1.2 release → **8/10**

**D3 (Claude Code fit)**:
- All 7 hooks have correct interface signatures
- README shows settings.json examples for each
- Hooks are drop-in to ~/.claude/hooks/ (no config needed)
- Works with latest Claude Code version
→ **9/10**

**D4 (Code quality)**:
- OpenSSF Scorecard: 7.0/10 (good CI, code review, signed releases)
- Our signals: 82% test coverage, full Python 3.10+ type hints, mypy strict, pre-commit linting, Dependabot active
- Combined: 0.5×7.0 + 0.5×9 = **8.0/10**

**D5 (Ingestion):** 1.8 MB, 7 hooks in separate files (pre-commit.py, post-commit.py, etc.), README with walkthrough → **9/10**

**D6 (Adoption):** 5 GitHub dependents, 1 awesome-claude-code mention, 2 blog posts on hook usage → **6/10**

**D7 (Novelty):** Implements "parallel-test-execution hook" (runs tests in background while Claude continues) + "cost-tracker hook per-session" (aggregates MCP call costs); both novel → **8/10**

**D8 (Community):** 1 Discord discussion about hook testing, 1 HN mention → **5/10**

**Rubric score:**
```
= (3×0.05 + 8×0.15 + 9×0.30 + 8×0.20 + 9×0.05 + 6×0.10 + 8×0.10 + 5×0.05) × 10
= (0.15 + 1.2 + 2.7 + 1.6 + 0.45 + 0.6 + 0.8 + 0.25) × 10
= 7.75 × 10 = 77.5
```

**Convergence:** Found by 3 sources (GitHub search, awesome-list, blog mention) → convergence_factor = 0.90

**Adjusted rubric:** 77.5 × 0.90 = 69.75

**Codex review:** "Excellent hook quality. Novel automation targets (parallel test execution, per-session cost tracking). Well-tested. Recommend STUDY → INSTALL-LITE if adoption grows or hooks are featured in Claude Code official docs." → codex_score = 78

**Final score:**
```
= 0.6 × 69.75 + 0.4 × 78 = 41.85 + 31.2 = 73.05 ≈ 73
```

**Action:** **STUDY** (L1+L2 ingestion; strong candidate for INSTALL-LITE if D7 novelty or D6 adoption increase; monitor for official Claude Code feature adoption)
