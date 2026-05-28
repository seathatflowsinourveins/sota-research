# Self-Improvement Protocol

Event-driven outcome tracking and automated rubric weight tuning.

## Outcome tracking (continuous)

Every INSTALL / STUDY / REFERENCE decision logs to `inventory/decisions.jsonl`:

```json
{
  "ts": "2026-05-28T14:32:10Z",
  "repo": "owner/repo",
  "action": "INSTALL-FULL",
  "score": 91,
  "category": "mcp-server",
  "convergence_sources": 5,
  "codex_verdict": "KEEP",
  "dimension_scores": [8, 9, 7, 8, 8, 7, 9, 8],
  "rubric_score": 86,
  "convergence_factor": 1.0,
  "codex_score": 88
}
```

## Outcome events (re-eval triggers)

Track these events automatically:

1. **Package removed** — `.vein.json` or package.json removes MCP/skill/hook → "was INSTALL useful?"
2. **Artifact deleted** — agent/skill file deleted from runtime → "did install land?"
3. **Pattern unaccessed 90d** — `patterns/<repo>/` not read by convergence-cycle researchers → "still relevant?"
4. **Major release** — repo publishes vN.0 → re-validate against rubric
5. **User explicit eval** — `node scripts/outcome.mjs review <repo>` → manual assessment

On event, record outcome:

```json
{
  "ts": "2026-06-15T08:00:00Z",
  "repo": "owner/repo",
  "outcome_event": "package_removed",
  "original_decision": "INSTALL-FULL",
  "original_score": 91,
  "assessment": "low-value",
  "reason": "install worked but not compelling enough to keep in runtime",
  "dimension_regret": ["D6_adoption", "D8_community"]
}
```

## Weight tuning from outcomes (every 20 outcomes)

When `decisions.jsonl` reaches 20 lines:

```javascript
// Compute per-dimension accuracy: did this dimension predict usefulness?
const outcomes = parseJsonlFile("inventory/decisions.jsonl");
const recent20 = outcomes.slice(-20);
const grouped = groupByCategory(recent20);

grouped.forEach((categoryOutcomes, category) => {
  const weights = loadWeights(`docs/categories/${category}.md`);
  
  categoryOutcomes.forEach((outcome, idx) => {
    const wasUseful = outcome.assessment === "high-value";
    
    outcome.dimension_scores.forEach((dimScore, dimIdx) => {
      if (!accuracy[dimIdx]) accuracy[dimIdx] = { correct: 0, total: 0 };
      accuracy[dimIdx].total += 1;
      if ((dimScore >= 7 && wasUseful) || (dimScore < 5 && !wasUseful)) {
        accuracy[dimIdx].correct += 1;
      }
    });
  });
  
  // Adjust weights based on accuracy
  const adjustment = {};
  accuracy.forEach((acc, i) => {
    const ratio = acc.correct / acc.total;
    const drift = ratio >= 0.75 ? 1.05 : ratio < 0.50 ? 0.95 : 1.0; // ±5% per cycle
    adjustment[`D${i+1}`] = Math.max(0.70, Math.min(1.30, weights[`D${i+1}`] * drift)); // cap ±30% drift
  });
  
  // Re-normalize to sum=1.0
  const adjustmentSum = Object.values(adjustment).reduce((a,b) => a+b, 0);
  Object.keys(adjustment).forEach(k => adjustment[k] /= adjustmentSum);
  
  // Write back
  updateCategoryWeights(`docs/categories/${category}.md`, adjustment);
  logTuneEvent({
    ts: new Date().toISOString(),
    category,
    cycle: Math.floor(outcomes.length / 20),
    accuracy,
    adjustment,
    rationale: "auto-tuned per outcome accuracy"
  });
});
```

**Constraints (Codex-gated 2026-05-28 — outcome learning must not poison the rubric):**
- **Labels required:** tune only from outcomes with an explicit `assessment` label (high/low-value).
  Unlabeled outcomes are excluded — no survivorship bias from "still installed ⇒ good".
- **Minimum sample size:** ≥20 *labeled* outcomes per category before any drift; below that, freeze.
- **Backtest gate:** a proposed weight change must improve decision accuracy on held-out prior
  outcomes before it is written; otherwise discard it.
- **Human review:** weight/threshold changes are *proposed* (logged to `tuning-log.jsonl`) and applied
  only after review — never silent auto-mutation.
- Each weight can drift max ±30% from original (prevent divergence).
- After 10 tuning cycles, do meta-research (see below) to validate rubric assumptions.

## Meta-research trigger (the "research-the-researcher" event)

Auto-fire when:

1. **5+ "high score but not useful" outcomes** — rubric is over-optimistic; needs revision
   ```javascript
   const falsePositives = recent20.filter(o => o.original_score >= 80 && o.assessment === "low-value");
   if (falsePositives.length >= 5) triggerMetaResearch("over-optimistic rubric");
   ```

2. **New category emerges** — 3+ candidates in last 30d don't fit existing 9 categories
   ```javascript
   const recent30 = outcomes.filter(o => Date.now() - o.ts < 30*24*3600*1000);
   const orphans = recent30.filter(o => o.category === "unknown");
   if (orphans.length >= 3) triggerMetaResearch("new category emerging");
   ```

3. **New research MCP announced** — e.g., Perplexity MCP, new firecrawl feature, Karpathy autoresearch
   - Trigger: manual via `node scripts/meta-research.mjs`
   - Or: subscribe to GitHub releases of key repos + auto-trigger on new MCP releases

4. **User-explicit** — `node scripts/meta-research.mjs --trigger "custom reason"`

### Meta-research = special convergence cycle

Meta-research invokes existing `convergence-cycle-protocol.md` with **scope limited to the research architecture itself:**

```javascript
const metaResearchConfig = {
  topic: "Current SOTA for AI agent research/discovery architectures",
  phase1Researchers: 2,
  goal: "Validate + evolve discovery protocol, scoring rubric, ingestion depth, self-improvement loop",
  inputs: [
    "Existing SOTA-research repo (this one)",
    "Outcome tracking log (inventory/decisions.jsonl)",
    "Weight tuning history (docs/meta-research/tuning-log.jsonl)",
    "Deep-research agent market map (Appendix A.6)",
    "Karpathy autoresearch pattern (Appendix A.10)"
  ],
  outputs: [
    "Verdict: KEEP (rubric sound) | EVOLVE (refine weights) | REPLACE (rewrite discovery) | RETIRE (abandon architecture)",
    "Updated docs/rubric.md (if any)",
    "Updated docs/categories/*.md (if weights need reset)",
    "New MCP candidates to add (per Appendix C)"
  ]
};
```

Per A.10 (Karpathy autoresearch): the experiment loop here is **outcome tracking IS the loop.** Track "did INSTALL actually compound?", tune weights from it, measure convergence.

## Example: outcome tuning flow

1. **Decision 2026-05-28**: MCP repo scores 85, INSTALL-LITE → D3 (CC-fit) weighted 0.30
2. **Outcome 2026-06-20**: MCP installed but barely used → "low-value"
3. **Outcome 2026-07-10**: Similar MCP (different repo) scores 82, D3=6 → also "low-value"
4. **Cycle completes (20 outcomes collected)**: D3 accuracy = 2 correct / 15 total = 13% → drift = 0.95
5. **Weight adjustment**: D3: 0.30 * 0.95 = 0.285 → normalize across category
6. **Next discovery run**: same repos now score lower due to lower D3 weight

## Recording meta-research outcomes

```json
{
  "ts": "2026-07-28T10:00:00Z",
  "meta_research_event": "tuning_cycle_10",
  "trigger": "5+ false positives in outcome tracking",
  "convergence_verdict": "EVOLVE",
  "changes": {
    "D3_weight_reduced": "0.30 → 0.285 (CC-fit overweighted)",
    "D7_novelty_increased": "0.10 → 0.105 (undervalued innovation)",
    "new_mcp_targets": ["deepwiki", "code-graph-context"]
  },
  "researchers": ["sonnet-1", "sonnet-2"],
  "codex_consensus": "KEEP (rubric refinements are sound, no foundational change needed)"
}
```

---

**See also:** [decision.md](./decision.md) (outcome events flow from decisions), [discovery.md](./discovery.md) (how new discovery triggers from meta-research), [integration.md](./integration.md) (linkage to convergence-cycle-protocol)
