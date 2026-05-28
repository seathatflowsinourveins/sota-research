# Integration Protocol

Wiring sota-research discovery + scoring into parent project architecture.

## Data flow: discovery output → convergence-cycle

**Trigger:** candidate reaches `final_score ≥ 90` (INSTALL-FULL decision).

**Action:**

1. sota-research decision output appends to the parent project's deep-audit-backlog:

```markdown
## Next planned convergence (auto-populated by sota-research)

- **<owner/repo>** (score: 91, decision: INSTALL-FULL, scanned: 2026-05-28)
  - Category: mcp-server
  - Why: Novel MCP implementation, strong community signal (5 sources), Codex consensus: KEEP
  - Expected convergence: 2026-05-30
  - Phase-1 researchers: (auto-assigned)
  - Link: inventory/scan-2026-05-28.md (scan details)
```

2. Invoke `convergence-cycle-protocol.md` **Phase 1** automatically (if not already running):
   - Assign 2 independent researchers (using Agent tool, model=sonnet)
   - Input: repomix (L1) + deepwiki (L2) from `patterns/<owner>/<repo>/`
   - Scope: "Validate <owner/repo> as INSTALL-FULL candidate; recommend post-install integration points"
   - Output: Phase-1 verdict (PROCEED / HOLD / REJECT)

3. If Phase-1 yields PROCEED: continue convergence cycle Phases 2-5 (Codex consensus, cross-dimensional audit, final recommendation)

## Deep-audit-backlog linkage

Pattern: discovery fills backlog, parent project convergence researchers read it.

**Location:** Parent project memory directory: `~/.claude/projects/<p>/memory/deep-audit-backlog.md`

**Sections:**
- "Completed convergences" — Phase 1-5 done, voted to INSTALL or REJECT
- "In progress" — Phase 1-2 underway
- **"Next planned convergence"** — populated by sota-research, sorted by score desc, auto-timestamp
- "Candidate archive" — old scans >90 days, kept for audit

---

## patterns/ corpus as searchable context

**For convergence researchers:** `patterns/` repo is ctx_search-able during Phase 1.

```javascript
// In convergence-cycle Phase 1 researcher subagent:
const existingPatterns = await ctx_search({
  queries: [
    "what are the existing MCP implementations we've installed?",
    "what architectural patterns do we already use?",
    "how do novel techniques in <new-repo> differ from what we have?"
  ],
  source: "patterns/", // filter to patterns/ artifacts
  sort: "relevance"
});

// Use existingPatterns to guide Phase 1 recommendations
```

**Indexing:** each `patterns/<owner>/<repo>/meta.json`, `repomix.md`, `deepwiki.md`, `sota-distill.md` is auto-indexed into context-mode's FTS5 on creation.

---

## inventory/installed.md as source of truth

**Authoritative:** `inventory/installed.md` in this project

Format:
```markdown
# SOTA Installed (source of truth)

Last updated: 2026-05-28

## MCPs (by decision date)
- **deepwiki** (INSTALL-FULL, score: 92, 2026-05-28)
  - Reason: Essential for L2 ingestion (Appendix A.4)
  - Status: installed (`claude mcp add deepwiki`)
  - Integration: used in ingestion.md L2
  
- **repomix-mcp** (INSTALL-LITE, score: 85, 2026-05-27)
  - Status: experimental, needs artifact-pull
  
## Agents
- [Agent entries]

## Skills
- [Skill entries]

## Hooks
- [Hook entries]

## Libraries (reference)
- [Library entries — cloned to patterns/ or reference/, not runtime-installed]
```

**Used by:** parent project to validate MCPs match runtime state.

---

## sota-recency-gate.md rule → stage-1 filter gate #2

**Pattern:** Parent project may have a rule file defining "acceptable project age."

**Integration:** gate #2 in [scoring.md](./scoring.md) (Stage-1 hard filter) encodes this rule:

```
Gate 2: Recency — last commit ≤6mo OR last release ≤9mo 
         (mature-utility exception: 2+yr stable with issue activity)
```

**Source:** Check parent project `.claude/rules/sota-recency-gate.md` (if it exists)

If parent project modifies that rule, sota-research **must re-sync** gate #2 logic. Tracked in `inventory/meta.json`:

```json
{
  "stage1_gates": {
    "gate_2_recency": {
      "last_synced_from": "~/.claude/projects/<p>/.claude/rules/sota-recency-gate.md",
      "hash": "abc123def456",
      "logic": "last commit ≤6mo OR last release ≤9mo OR (2+yr stable AND active issues)"
    }
  }
}
```

---

## Memory directory structure

Sota-research persists outcomes to:

```
~/.claude/projects/<p>/memory/
├── MEMORY.md                           # existing parent project memory
├── convergence-cycle-protocol.md       # existing protocol (read by sota-research)
├── deep-audit-backlog.md               # existing backlog (populated by sota-research)
├── sota-research/                      # new subdirectory (created on first run)
│   ├── outcomes.jsonl                  # copy of inventory/decisions.jsonl
│   ├── weight-tuning-log.jsonl         # weight adjustment history
│   └── meta-research-log.jsonl         # meta-research cycles
```

Symlink or copy `inventory/decisions.jsonl` to parent project memory for cross-project visibility.

---

## Invoking discovery

If user runs sota-research discovery:

```bash
npm run discover -- --topic "agent orchestration patterns"
```

This will:
1. Execute discovery workflow
2. Output results to `inventory/scan-<ts>.md`
3. Append INSTALL-FULL candidates to parent project's backlog (if configured)
4. Trigger convergence researchers if ≥90 score

---

## Cost tracking

Sota-research costs accumulate in `inventory/scan-<ts>.md`:

```markdown
## Cost summary
- Phase 1 (discovery): $0.85 (MCP calls, ChatGPT web search, firecrawl awesome-list)
- Phase 3 (hard-filter batch GH GraphQL): $0.02 (efficient batching)
- Phase 4 (stage-2 rubric + Codex consensus, 12 candidates): $6.40
- **Total**: $7.27
```

These roll up to parent project cost-tracking system (if enabled) via a hook that reads `inventory/scan-<ts>.md` cost summary.

---

**Cross-references:**
- [discovery.md](./discovery.md) — how candidates are discovered
- [decision.md](./decision.md) — score-to-action + side-effects
- [self-improvement.md](./self-improvement.md) — outcome tracking → meta-research
- Parent project convergence-cycle-protocol (external)
- Parent project deep-audit-backlog (external)
