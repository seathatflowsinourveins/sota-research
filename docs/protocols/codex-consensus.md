# Codex Per-Candidate Consensus Protocol

GPT-5.5 xhigh adversarial review of each scored candidate, **parallel to Stage-2 scoring** (not after).

## Codex CLI invocation

```bash
codex exec --effort xhigh --model gpt-5.5 "$(cat <<'PROMPT'
<SYSTEM PROMPT FROM BELOW>
PROMPT
)"
```

Alternative (if codex CLI unavailable): embed into `src/scripts/score.mjs` and call via Claude API with Codex routing.

## System + task prompt template

```
SYSTEM:
You are GPT-5.5 reviewing a SOTA candidate for installation into a Claude Code 
runtime. Be rigorous. Penalize hype. Reward genuine technique. You have access 
to:
- The 8-dimension rubric (D1-D8 definitions below)
- Category-specific weight profile
- Repomix (flattened codebase, ≤50KB)
- README.md
- Last 10 commits (commit titles + first line of message)
- Top 3 open issues and top 3 closed issues
- Source list (which discovery sources named this candidate)
- Cross-mention count (how many awesome-lists / communities mentioned it)

Output strict JSON ONLY. No explanation before the JSON.

---

TASK:
Evaluate <owner/repo> as <category> SOTA candidate for Claude Code.

CATEGORY WEIGHT PROFILE (example — actual from docs/categories/<category>.md):
- D1 Stars: 0.05
- D2 Maintenance: 0.20
- D3 CC-fit: 0.30
- D4 Code quality: 0.15
- D5 Ingestion friendliness: 0.05
- D6 Adoption signal: 0.10
- D7 Conceptual novelty: 0.10
- D8 Community consensus: 0.05

RUBRIC DEFINITIONS:
D1: log10(stars+1) normalized 0-10. 100★→2, 1k→3, 10k→4, 100k→5.
D2: 90d commits + merged PRs, median issue response time, contributor diversity.
D3: MCP/skill/agent/hook/plugin artifacts; `claude-code` topic; mentions in README/code.
D4: CI workflows, tests, coverage, linter, dependabot, README depth, types. 
     (50% OpenSSF Scorecard + 50% our internal signals)
D5: Size (1-50MB sweet spot), repomix token estimate, markdown/wiki presence.
D6: Fork-to-star ratio, dependents, npm/pypi downloads, publisher concentration risk.
D7: New pattern vs reimplementation. Cross-ref inventory/installed.md.
D8: HN/Reddit/X mentions 90d, awesome-list cross-mentions, star velocity 30d.

INPUT DATA (provided below):
[repomix output]
[README]
[commits]
[issues]
[source_list]
[cross_mention_count]

OUTPUT: JSON only, no markdown, no explanations before JSON.
```

## Output JSON schema (strict format)

```json
{
  "codex_score": <0-100 integer>,
  "verdict": "KEEP" | "REPLACE" | "EXPERIMENT" | "RETIRE" | "REJECT",
  "rationale": "<2-3 sentence summary of the verdict>",
  "dimensions_assessment": {
    "D1_stars": "<brief assessment>",
    "D2_maintenance": "<brief assessment>",
    "D3_cc_fit": "<brief assessment>",
    "D4_code_quality": "<brief assessment>",
    "D5_ingestion_friendly": "<brief assessment>",
    "D6_adoption": "<brief assessment>",
    "D7_novelty": "<brief assessment>",
    "D8_community": "<brief assessment>"
  },
  "novel_techniques": [
    "<technique 1 — what's genuinely new here>",
    "<technique 2>",
    ...
  ],
  "anti_patterns": [
    "<pattern 1 — what NOT to replicate>",
    "<pattern 2>",
    ...
  ],
  "adversarial_flags": [
    "hype-driven README (claims not backed by code)",
    "unmaintained (last commit >1yr)",
    "bait-and-switch (advertises as X, is really Y)",
    "single-maintainer burnout risk",
    "tight coupling to specific LLM provider",
    ...
  ],
  "comparison_notes": "How this compares to existing candidates in inventory/installed.md (if relevant)"
}
```

## Conflict resolution

**If |codex_score − rubric_score| > 25 points:**

1. Auto-fire `codex:codex-rescue --effort xhigh` with:
   - Both scores + dimension breakdowns
   - Explicit disagreement summary
   - Request for tiebreaker verdict

2. Record tiebreaker outcome in `inventory/scan-<ts>.md` under "Codex consensus conflicts"

3. Final score uses tiebreaker if provided; otherwise weighted average.

**Example:**
- Rubric score: 88 (INSTALL-LITE)
- Codex score: 62 (STUDY)
- Difference: 26 > 25 → escalate

Codex-rescue might resolve: "Rubric overweighted adoption signals; genuine novelty is low. Use STUDY."

## Parallel execution

Codex consensus runs **simultaneously with Stage-2 dimension scoring**, not after:

```javascript
// In discovery.mjs Phase 4:
const rubricPromise = Promise.all(
  candidates.map(c => scoreCandidate(c, subagents))
);
const codexPromise = Promise.all(
  candidates.map(c => codexConsensus(c))
);

const [rubricResults, codexResults] = await Promise.all([rubricPromise, codexPromise]);

// Merge results
candidates.forEach((c, i) => {
  c.rubric_score = rubricResults[i].score;
  c.codex_score = codexResults[i].codex_score;
  c.codex_verdict = codexResults[i].verdict;
  if (Math.abs(c.codex_score - c.rubric_score) > 25) {
    c.needs_rescue = true; // flag for conflict resolution
  }
});
```

## Cost

- Per candidate at xhigh effort: ~$0.30-0.80
- Batch of 10 candidates: ~$5-8 total (includes error budgets + retries)

## Inputs (how to gather repomix, commits, issues)

```bash
# Repomix: flattened codebase (≤50KB target)
npx repomix --output candidate-repomix.md --style markdown <owner/repo>
head -c 51200 candidate-repomix.md  # enforce 50KB cap

# README (first 5KB)
gh api repos/{owner}/{repo}/contents/README.md --jq '.content' | base64 -d | head -c 5120

# Last 10 commits
gh api repos/{owner}/{repo}/commits --jq '.[] | "\(.commit.message)"' -L 10

# Top 3 open + top 3 closed issues
gh api repos/{owner}/{repo}/issues --state open --per-page 3 --jq '.[] | "OPEN: \(.title)\n\(.body)"'
gh api repos/{owner}/{repo}/issues --state closed --per-page 3 --jq '.[] | "CLOSED: \(.title)"'

# Source list (from discovery.md Phase 2)
echo "Sources: GitHub search, awesome-list scrape, Exa web_search, ..."

# Cross-mention count (from awesome-list crawl)
echo "Cross-mentions: 2 (awesome-mcp-servers, awesome-claude-code)"
```

---

**See also:** [scoring.md](./scoring.md) (Stage-2 rubric dimensions), [discovery.md](./discovery.md) (how candidates are discovered), [decision.md](./decision.md) (final action per score + verdict)
