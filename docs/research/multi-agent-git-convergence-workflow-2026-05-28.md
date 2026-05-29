# Multi-Agent Git Convergence Workflow (race-free)

- **Date:** 2026-05-28
- **Status:** ADOPTED design (grounded in a 5-lane SOTA research convergence)
- **Trigger:** A live session race — two concurrent Claude/Codex sessions edited the **same working tree** (`C:/SEA/src/sota-research`, no per-session git isolation), producing intermixed uncommitted changes (`score.mjs`/`rubric.md`/`blend.mjs` from a ship-gate session; `bootstrap.mjs`/`discover.mjs`/tests from a CodeRabbit-fix session) and a red suite. Root cause: **no workspace isolation + no convergence protocol** for concurrent agents.

## Decision

Concurrent Claude/Codex sessions and parallel write-agents MUST work in **isolated git worktrees** (one branch each), and converge through a **GitHub merge queue** with a final **Codex (GPT-5.5) ship-gate**. Never two writers on one working tree.

## Why (research convergence)

`git worktree` gives each session its own working directory, **index**, and `HEAD` while sharing one `.git/objects` + refs — eliminating `.git/index.lock` contention and silent file overwrites (the exact failure we hit). Git structurally blocks the same branch being checked out in two worktrees, so divergence is caught at creation, not at merge. Convergence is then a *serialized* problem: the GitHub merge queue (FIFO, parallel CI on temporary `merge_group` branches) guarantees every PR is validated against all prior merges, killing the "passes locally, fails on main" class. A fresh-context Codex ship-gate adds architectural-coherence review (decision-pipeline soundness, rubric stability) that per-PR CI can't see.

## The workflow (per session / write-agent)

1. **Isolate:** `git worktree add .claude/worktrees/<task> -b feature/<task> origin/HEAD` (or `claude --worktree <task>`). Separate dir/index/HEAD; shared history.
2. **Baseline:** `npm ci && npm test` in the new worktree to confirm a clean starting suite.
3. **Work scoped:** edit only that task's file domain. No shared tree ⇒ no `index.lock` contention, no overwrites.
4. **Verify locally:** `npm test && npm run lint` before committing (deterministic vs the branch state).
5. **Commit:** one logical change per commit, clear message.
6. **Rebase on `origin/main`:** `git rebase origin/main` — surfaces cross-session conflicts as standard 3-way diffs *before* merge; resolve manually.
7. **PR:** `git push -u origin feature/<task>` + `gh pr create`.
8. **Merge queue converges:** branch protection on `main` enables the merge queue; it validates each PR against the queued set and merges atomically in order (failing PRs drop out, group revalidates).
9. **Codex ship-gate:** after merge, GPT-5.5 (xhigh, fresh context) reviews coherence; blocks on SAFETY/QUALITY regressions, else approves.
10. **Cleanup:** `git worktree remove .claude/worktrees/<task>` (or auto via `ExitWorktree`).

## Mechanisms + tooling

- **Isolation:** `git worktree` (native) — per-worktree `HEAD`/index, shared objects/refs; branch-exclusivity as a structural guard. `.worktreeinclude` (gitignore syntax at repo root) auto-copies `.env`/secrets/`config/` into each new worktree. Optional: Claude Code agent-teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`) for a file-locked shared task list + inter-session mailbox above git isolation.
- **Convergence:** GitHub **merge queue** (branch-protection rule on `main`); `git rebase origin/main` for pre-merge conflict surfacing; Codex GPT-5.5 ship-gate as the final coherence gate.
- **For write-fan-out workflows:** the Workflow/Agent tools' `isolation: "worktree"` already implements per-agent throwaway worktrees — use it for any agent that mutates files.

## Immediate-untangle recipe (what we did, generalized)

When a shared tree is already contested with two sessions' uncommitted work: **do not `git add -A` (clobbers authorship) and do not `git stash` (rips the other session's WIP out).** Instead: (1) `git diff` to capture the full state; (2) confirm the other session is idle (mtimes/quiet window); (3) verify each change is consistent (keep the superior version — e.g., the tri-state pathway); (4) fix any tests the combined change broke; (5) `npm test && npm run lint` green; (6) commit the **convergence** with a message crediting both lines; (7) push. (Applied 2026-05-28 → commit `333492a`.)

## Open questions

- Adopt **Jujutsu (`jj`)** (first-class concurrent/conflict handling, colocated git) for the agent layer, or stay on `git worktree` + merge queue? (jj's automatic conflict materialization may suit many parallel AI edits better.)
- Should the ship-gate run per-PR (pre-merge) or post-merge on `main`? Pre-merge is safer but serializes; post-merge is faster but can land a coherence regression briefly.
