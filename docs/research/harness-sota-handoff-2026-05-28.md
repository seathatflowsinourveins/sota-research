# Handoff — Harness-SOTA session (start fresh, isolated worktree)

- **Date:** 2026-05-28
- **For:** the next Claude Code session (zero prior conversation context — this doc is self-contained)
- **Mandate:** make the Claude Code runtime + its ecosystem "fully unleashed with SOTA harness, set up with 2026-05 best practice."

## ⛓️ MANDATORY first move — run this session race-free

Do NOT edit the shared working tree directly. This repo just hit a two-session race (see `docs/research/multi-agent-git-convergence-workflow-2026-05-28.md`). Before any change:
1. `cd C:/SEA/src/sota-research`
2. Create an isolated worktree + branch: `git -c diff.colormovedws=ignore-all-space worktree add ../sota-harness -b feature/harness-sota` (the global gitconfig has an invalid `diff.colormovedws=allspace` — a repo-local override is set, but prefix `-c diff.colormovedws=ignore-all-space` if any git cmd fatals).
3. Work in `../sota-harness`. Verify `npm ci && npm test` (expect green) + `npm run lint` before edits.
4. Converge via PR → (enable + use) GitHub merge queue → Codex GPT-5.5 ship-gate. Commit per verified slice; never `git add -A` over another session's WIP.

## ✅ What this session already shipped (do not redo)

- **PR #10** (`feature/research-arch-v3` → `main`): decision-engine gates now fire end-to-end (D3 pathway-veto, gap-fit, provenance, D6 publisher-risk), session-race converged, 173 tests pass, Biome clean, all CodeRabbit threads resolved.
- **Engine dogfood-validated** on 48 real repos; GPT-5.5 consensus → fail-closed (0 auto-INSTALL). Results: `inventory/scan-2026-05-28-live-dogfood.md`.
- **Convergence-workflow ADR** shipped: `docs/research/multi-agent-git-convergence-workflow-2026-05-28.md`.
- Memory: `multi-agent-worktree-isolation`, `research-arch-enhancement-progress` (auto-load via `~/.claude/projects/.../MEMORY.md`).

## 🎯 Scope (phased — gate each with tests + Codex review)

- **H1 — Operationalize isolation:** add a root `.worktreeinclude` (copy `.env`/`config/` into new worktrees); document the worktree+merge-queue+ship-gate workflow in `CLAUDE.md`; enable the GitHub **merge queue** in branch-protection on `main`.
- **H2 — Act on the validated scan** (`inventory/scan-2026-05-28-live-dogfood.md`): the 3 "human-verify" candidates — verify whether **crewAI**'s published SKILL makes it an eligible skill-pack; confirm **autogen**'s maintained successor (`microsoft/agent-framework`); verify **ECC** provenance/real metrics. Record the 6 validated STUDY repos in `inventory/watching.md`. **No auto-install** — fail-closed per the consensus.
- **H3 — Fresh convergence research** (multi-angle, GPT-5.5 consensus) on **2026-05 SOTA Claude Code harness practice**: settings.json, hooks, plugin/MCP roster, output-styles, agent-teams, context-mode, model routing. Reconcile against the user's current setup (`~/.claude/`), produce an enhancement plan, gate with the user before applying.
- **H4 — Wire the engine as an operational loop:** confirm the event-driven triggers (session-start delta-check, pattern decay, awesome-list delta) are live; ensure `inventory/decisions.jsonl` + `outcome.jsonl` accumulate so the self-improvement loop has data.

## Discipline

- **Dual-model gate:** after non-trivial changes, `codex exec --skip-git-repo-check` (GPT-5.5 xhigh) review from a neutral dir; fix BLOCKERs, re-verify. Scope Codex tightly (inline content, forbid repo-crawl) to avoid runaway.
- Evidence before claims; no silent fallbacks (fail closed); tests green + Biome clean before every commit; verify a file/flag exists before citing it.
- Commit only when the work is verified; the user commits/merges on request.

## Resume protocol
Read this doc → `git -c diff.colormovedws=ignore-all-space -C C:/SEA/src/sota-research log --oneline -8` → create the isolated worktree → `npm test` → start H1.
