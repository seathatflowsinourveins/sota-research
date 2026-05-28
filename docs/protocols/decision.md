# Decision Protocol

Score-to-action mapping, side-effects, and audit trail.

## Score-continuous output

From Phase-4 (or Phase-1 if pre-screened fast-track), output `inventory/scan-<timestamp>.md`:

```markdown
# Scan: <topic> @ <ISO-8601 timestamp>

## Summary
- **Topic:** <topic>
- **Category:** <category>
- **Min-score threshold (override if any):** <score>
- **Cost (phase-1 + phase-3 + phase-4):** $X.XX

## Results (sorted by final_score desc)

| Repo | Score | Action | Sources | D1-D8 | Codex | Rationale |
|---|---|---|---|---|---|---|
| owner/repo | 91 | INSTALL-FULL | 5 | [8,9,7,8,8,7,9,8] | 88 | First impl of MCP in category, strong community |
| owner/repo | 84 | STUDY | 4 | [6,8,8,7,7,8,7,6] | 82 | Solid but needs deeper eval before install |
| ... | ... | ... | ... | ... | ... | ... |

## Cost summary
- Phase 1 (discovery): $X.XX
- Phase 3 (hard-filter batch): $X.XX
- Phase 4 (stage-2 + codex, N candidates): $X.XX
- **Total:** $XX.XX

## Source diversity index
Shannon entropy: 0.85 (0-1 scale, 1 = perfectly distributed across 8 sources)

## Codex consensus conflicts (if any)
| Repo | Rubric | Codex | Diff | Rescue verdict |
|---|---|---|---|---|
| ... | 88 | 62 | -26 | STUDY (agreed with Codex) |
```

## Decision model: base tier → multi-factor pipeline → action

> **2026-05-28:** routing is no longer the single linear threshold below. The table gives the **base
> tier** from the blended score; the final action is produced by the ordered pipeline in
> `scripts/lib/decision.mjs` `routeDecision` (SAFETY veto → base tier → override FLOORS → convergence
> ACTION cap → late security demotion). Full rules: [rubric.md §4](../rubric.md). Soft QUALITY gates +
> the D9 niche escape hatch can FLOOR a low-score repo up to STUDY; convergence caps + security
> findings can LOWER it; INSTALL tiers always require human review.

### Base tier (from blended score)

| Score | Base tier | Action | Side-effects |
|---|---|---|---|
| ≥90 | INSTALL-FULL | Approve for full install + L3 distillation | Append to inventory/installed.md; trigger convergence-cycle-protocol Phase 1 (per integration.md); queue install action (add MCP, skill, hook, etc.) |
| 80-89 | INSTALL-LITE OR STUDY | Artifact-pull (skill/MCP only) OR deferred eval (frameworks/libs) | Append to inventory/installed.md (INSTALL-LITE) OR trigger L1+L2 ingestion (STUDY); queue artifact pull |
| 70-79 | STUDY | Deferred evaluation, schedule convergence cycle | Trigger L1+L1.5 ingestion; append to deep-audit-backlog.md "Next planned convergence" |
| 60-69 | REFERENCE | Clone to reference/ only, no distillation | Trigger L1 ingestion only |
| 40-59 | WATCH | Re-eval trigger registered | Append to inventory/watching.md with re-eval condition (90d OR next major release) |
| <40 | REJECT | Log and skip | Append to inventory/rejected.md with rejection reason; do not re-eval |

## Comparative ranking (justify INSTALL vs alternatives)

**Added 2026-05-28.** No candidate is decided in isolation. For each category, emit a **Top-N
side-by-side D1–D9 matrix** with an explicit beats-rationale (e.g. "repo A beats repo B on D3 [+2],
D4 [+1]; trade-off: lower D7") via MCDA/AHP pairwise comparison. Every INSTALL must name the specific
alternatives it outranked and why. CLI: `--compare-top-3-in-category`. Comparative ranking NEVER
bypasses SAFETY or convergence caps (Codex item 4). See `inventory/scan-*-sota-convergence.md` for a
worked example (7 areas, head-to-head).

## Triage (volume bounding for the soft gate)

Because QUALITY gates no longer REJECT (rubric §1), SAFETY-pass candidates are bounded by **triage,
not rejection**: rank by preliminary signal + source-family diversity + category need; deep-score +
ingest only **Top-K per category/source-family per scan**. The remainder → WATCH/backlog — never
silently dropped (log what was deferred).

## Per-query threshold override

```bash
# Example: trading-system project requires higher bar
node scripts/discover.mjs --topic "trading-stack" --category "code-library" \
  --min-score 85 --min-sources 3 --min-community 0.70

# Result: only candidates with score ≥85 AND ≥3 sources AND D8 ≥7 advance to INSTALL
```

## Side-effects by action

### INSTALL-FULL
1. Append to `inventory/installed.md`:
   ```markdown
   - **<repo>** (score: 91, decision: INSTALL-FULL, scanned: 2026-05-28)
     - Category: <category>
     - Status: INSTALLED (v1.2.3)
     - Novel techniques: <from codex>
     - Link: https://github.com/<owner>/<repo>
   ```
2. Trigger `convergence-cycle-protocol.md` Phase 1 (assign 2 researchers to validate)
3. Queue install action → install MCP / plugin / skill / hook into runtime
4. Create `patterns/<owner>/<repo>/` with L1+L1.5+L2+L3 artifacts

### INSTALL-LITE
1. Append to `inventory/installed.md` with status: ARTIFACT-PULLED
2. Queue artifact pull (e.g., `claude plugin add <repo>`)
3. Create `patterns/<owner>/<repo>/` with L1+L1.5+L2

### STUDY
1. **NO** append to installed.md
2. Append to `deep-audit-backlog.md`, section "Next planned convergence":
   ```markdown
   - **<repo>** (score: 74, ready for Phase 1 convergence cycle)
     - Reason: strong novelty signal, needs architectural review
     - Assign: 2 researchers
   ```
3. Create `patterns/<owner>/<repo>/` with L1+L1.5 artifacts

### REFERENCE
1. **NO** append to inventories
2. Create `patterns/<owner>/<repo>/` with L1 artifact only
3. Log in scan output under "REFERENCE candidates (for future study)"

### WATCH
1. Append to `inventory/watching.md`:
   ```markdown
   - **<repo>** (score: 52, last scanned: 2026-05-28)
     - Re-eval trigger: 90d elapsed OR next major release (e.g., v2.0)
     - Reason: promising signal, needs maturation
     - Expected re-eval: 2026-08-26
   ```
2. Set calendar reminder (if automation available)
3. **NO** ingestion

### REJECT
1. Append to `inventory/rejected.md`:
   ```markdown
   - **<repo>** (score: 32, rejected: 2026-05-28)
     - Reason: archived project; maintainer email in bot-detection list
     - Do not re-eval
   ```
2. Skip ingestion

## Audit trail

All decisions logged to `inventory/decisions.jsonl` (one JSON object per line):

```json
{"ts": "2026-05-28T14:32:10Z", "repo": "owner/repo", "action": "INSTALL-FULL", "score": 91, "category": "mcp-server", "convergence_sources": 5, "codex_verdict": "KEEP"}
{"ts": "2026-05-28T14:35:22Z", "repo": "owner/repo", "action": "STUDY", "score": 74, "category": "agent-framework", "convergence_sources": 3, "codex_verdict": "EXPERIMENT"}
```

Used by [self-improvement.md](./self-improvement.md) to track outcomes + tune weights.

## Integration with convergence-cycle protocol

Scores ≥90 automatically trigger convergence-cycle protocol Phase 1:
- Follow the convergence-cycle protocol guidelines
- Append to protocol: "Phase 1a: 2-researcher consensus on <repo> (score 91)"

Details in [integration.md](./integration.md).

---

**See also:** [scoring.md](./scoring.md) (how final_score is computed), [ingestion.md](./ingestion.md) (what L1/L2/L3 entails), [integration.md](./integration.md) (wiring to convergence-cycle + deep-audit-backlog)
