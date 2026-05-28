# Score-Tiered Ingestion Protocol

Three-level knowledge distillation based on final score and category.

## L1: All Stage-3 hard-filter passers (~$0.10/repo)

**Trigger:** any candidate with `final_score ≥ 40` that passes Stage-1 hard-filter.

**Actions:**

```bash
# Clone to reference/ (or symlink if user prefers ~/sota-repos/)
git clone https://github.com/<owner>/<repo> reference/<owner>/<repo>

# Run repomix (flattened codebase snapshot)
cd reference/<owner>/<repo>
npx repomix --output ../../patterns/<owner>/<repo>/repomix.md --style markdown

# Create metadata
cat > ../../patterns/<owner>/<repo>/meta.json <<EOF
{
  "repo": "<owner>/<repo>",
  "score": <final_score>,
  "decision": "<action from decision.md>",
  "source_count": <N>,
  "scanned_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "category": "<category>",
  "diversity_index": <entropy_0_1>
}
EOF
```

**L1.5 (if repo >10k files OR complex dependencies):**

Per A.5, also run GitNexus indexing:

```bash
# Requires gitnexus MCP already installed
gitnexus index --repo reference/<owner>/<repo> --output ../../patterns/<owner>/<repo>/gitnexus.json

# Then make available in context-mode:
# ctx_index(path: "patterns/<owner>/<repo>/gitnexus.json", source: "<owner>/<repo>-graph")
```

## L2: Score ≥80 (~$0.30/repo)

**Trigger:** decision = INSTALL-LITE, INSTALL-FULL, or STUDY.

**Actions:**

```bash
# Query DeepWiki MCP for architectural + technical questions
# (Appendix A.4 — must have 'deepwiki' MCP added to claude runtime)
mcp__deepwiki__query(<owner>/<repo>, [
  "What is the architecture and main design patterns?",
  "What are the novel techniques or algorithms?",
  "What does the typical adopter integrate or extend?",
  "What are common pitfalls or limitations?"
])

# Write output
cat > patterns/<owner>/<repo>/deepwiki.md <<EOF
# DeepWiki: <owner>/<repo>

[responses above, formatted as markdown sections]

---
Queried: $(date -u +%Y-%m-%dT%H:%M:%SZ)
EOF
```

## L3: Score ≥90 (~$1.50/repo)

**Trigger:** decision = INSTALL-FULL only.

**Actions:**

```bash
# Gather inputs: repomix + deepwiki + 5 highest-rated issues
gh api repos/<owner>/<repo>/issues --sort comments --direction desc --per-page 5 \
  --jq '.[] | "\(.title)\n\(.body)"' > top-issues.txt

# Codex distillation (ADR-style, using existing sota-distill prompt)
codex exec --effort xhigh "$(cat <<'PROMPT'
You are synthesizing SOTA knowledge for a Claude Code patterns library.

INPUT:
- Repomix: [from L1]
- DeepWiki analysis: [from L2]
- Top 5 GitHub issues: [above]

OUTPUT: ADR-style pattern document (plain markdown, no code blocks unless essential).

SECTIONS:
1. Novel techniques — with line refs to repomix sections
   Example: "GitNexus uses bidirectional context windows (line 145-160 repomix) to..."
2. Adoption targets — what Claude Code runtime can pull from this repo
3. Anti-patterns — what to avoid
4. Cross-repo references — connections to other repos in inventory/installed.md
5. Open questions — where this pattern might evolve

Be specific. Cite code. Avoid hype.
PROMPT
)"

# Write output
cat > patterns/<owner>/<repo>/sota-distill.md <<EOF
# SOTA Distillation: <owner>/<repo>

[codex output above]

---
Distilled by Codex GPT-5.5 xhigh: $(date -u +%Y-%m-%dT%H:%M:%SZ)
EOF
```

## Pattern decay + re-validation

**Trigger:** `patterns/<repo>/sota-distill.md` older than 90 days.

**Action:** fire discovery with topic = "<pattern topic>", tag survivor with "STALE — re-eval recommended in scan output".

Automatically append to `watching.md` with re-eval trigger = "90d decay" or "major release of <repo>".

## Directory conventions

```
patterns/
├── <owner>/
│   ├── <repo>/
│   │   ├── meta.json          # L1 metadata
│   │   ├── repomix.md         # L1 flattened code
│   │   ├── gitnexus.json      # L1.5 (if >10k files or complex deps)
│   │   ├── deepwiki.md        # L2 (if score ≥80)
│   │   └── sota-distill.md    # L3 (if score ≥90)
│   └── ...
└── ...

# Optional: symlink to global cache (user preference)
# ln -s ~/sota-repos/ reference
```

## Integration with ingestion decision side-effects

From [decision.md](./decision.md):

| Decision | L1 | L1.5 | L2 | L3 |
|---|---|---|---|---|
| INSTALL-FULL | X | if >10k | X | X |
| INSTALL-LITE | X | if >10k | X | — |
| STUDY | X | if >10k | X | — |
| REFERENCE | X | — | — | — |
| WATCH | — | — | — | — |
| REJECT | — | — | — | — |

## L3 Segmented Distillation (for >1M-token repomix)

**Trigger:** L3 analysis requested AND repomix token count > 1M (exceeds Claude context limit).

**Algorithm:**

1. **Identify top-5 signal files** — search for the 5 files with highest code signal density:
   - Filter by file type (e.g., `.py`, `.rs`, `.ts`)
   - Exclude `__init__.py`, `test_*.py`, config files, and boilerplate
   - Sort by line count (excluding data files)
   - Select the 5 with the most orchestration, business logic, or novel pattern density

2. **Extract each file as a focused L3 segment** — for each of the 5 files:
   ```bash
   # Create segment extraction prompt
   cat > segment_N_prompt.txt << 'EOF'
   You are GPT-5.5 producing a focused L3 distillation segment.
   
   REPO: <owner>/<repo>
   SEGMENT: <file path + role description>
   
   FILE CONTENTS:
   <file contents, ≤200K tokens>
   
   SURROUNDING CONTEXT:
   <project README + L2 deepwiki summary if available>
   
   DISTILL INSTRUCTION:
   Synthesize a markdown segment covering:
   1. Role in architecture
   2. Novel techniques (with line refs)
   3. Patterns worth adopting (concrete, code-specific)
   4. Anti-patterns to avoid
   5. Dependencies & call graph
   6. Segment verdict (one sentence)
   
   PRODUCE ONLY MARKDOWN (h2 sections, no intro preamble):
   EOF
   
   # Invoke in parallel (up to 5 concurrent codex sessions)
   cat segment_N_prompt.txt | codex exec -c 'model="gpt-5.5"' > segment_N_output.txt &
   ```

3. **Extract markdown from each segment**:
   ```bash
   # Remove codex metadata header and extract markdown
   sed -n '/^## Role in architecture/,/^tokens used$/p' segment_N_output.txt | head -n -1 > segment-N-<filename>.md
   ```

4. **Synthesize meta-distillation** — final pass combining all 5 segments:
   ```bash
   cat > meta_synthesis_prompt.txt << 'EOF'
   You are GPT-5.5 synthesizing a meta-distillation from 5 L3 segments.
   
   TASK: Read all 5 segments and synthesize a unified ADR-style sota-distill.md with:
   1. Novel Techniques (synthesis with segment citations)
   2. Adoption Targets
   3. Anti-Patterns to Avoid
   4. Integration Points
   5. Cross-Repo References
   6. Open Questions
   7. Final Verdict (identify the SINGLE most adopt-worthy pattern)
   
   [Include all 5 segment distillations]
   
   PRODUCE ONLY MARKDOWN (7 h2 sections):
   EOF
   
   cat meta_synthesis_prompt.txt | codex exec -c 'model="gpt-5.5"' > sota-distill.txt
   sed -n '/^## Novel Techniques/,/^tokens used$/p' sota-distill.txt | head -n -1 > sota-distill.md
   ```

5. **Update meta.json**:
   ```json
   {
     "l3_completed_at": "<ISO timestamp>",
     "l3_segments": ["segment-0-...", ..., "segment-4-..."],
     "l3_synthesis_path": "sota-distill.md",
     "l3_top_pattern": "<string from Final Verdict>",
     "l3_cost_tokens": <total tokens used across all 6 codex invocations>,
     "l3_segmentation_method": "parallel-5"
   }
   ```

**Cost estimate:** ~2.5K tokens per segment × 6 passes (5 parallel + 1 meta-synthesis) = ~15K tokens (~$0.45 at Codex rates).

**Wall time:** ~5 min for 5 parallel codex sessions (~4min each) + ~1min meta-synthesis = ~6 minutes total.

**Advantages:**
- Each segment ≤200K tokens, well within Codex's context limit
- Parallel execution cuts wall time to max(5 segment times) + synthesis time
- Segment boundaries let GPT-5.5 reason about each module independently, then synthesize relationships
- Per-segment markdown is reusable (e.g., for deep-dives or architecture docs)

**When to use:**
- Repomix > 1M tokens (checked at L3 trigger)
- Repo has 5+ architecturally distinct modules or layers
- User wants both high-level synthesis AND per-module technical depth

---

**See also:** [decision.md](./decision.md) (how action triggers ingestion), [discovery.md](./discovery.md) (how candidates reach scoring), [scoring.md](./scoring.md) (score thresholds)
