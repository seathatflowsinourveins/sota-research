# Category: Skill Pack

## Overview

Skill packs are collections of reusable Claude Code skills — composable prompt templates, tool-use patterns, and workflows that users can import and apply to their own projects. Examples: agent-skills, scientific-agent-skills, academic-research-skills. Pack structure: skills/`, `skills/<skill-name>/<SKILL.md + context/reference files>`, optionally with README registry.

## When This Category Applies

- Repo is explicitly a collection of Claude Code skills (not a single skill in isolation)
- Has directory structure like `skills/`, `packs/`, or equivalent organizing ≥3 discrete skills
- README documents how to import/install skills (usually `claude skill import ...`)
- Skills are standalone enough to be used independently or in combination
- Metadata or manifest lists available skills with descriptions

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Pack discoverability is not primary; niche audiences |
| D2: Maintenance | 0.15 | Skills must stay compatible with Claude Code versions |
| D3: Claude Code fit | **0.30** | Directly measures Claude Code integration + skill usability |
| D4: Code quality | 0.10 | Skills are prompts + context; clarity is key quality signal |
| D5: Ingestion | 0.05 | Skills are lightweight; fast to understand |
| D6: Adoption | **0.20** | Usage in real projects is strongest signal for skill utility |
| D7: Novelty | 0.05 | Skills remix known techniques; novelty is rare |
| D8: Community | 0.10 | Blog posts, tutorials, Discord discussions on skill use |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** Skill packs are discovery-heavy (not typical GitHub repos). Stars are lagging. Low weight justified.

**D2 (Maintenance):** Skills must track Claude Code capability updates:
- New model versions (Haiku 4.6 vs 4.5 behavioral changes)
- MCP availability (new MCP servers available in runtime)
- Prompt format changes (Codex consensus verbiage, format improvements)

Require last commit ≤3 months or clear "maintained, no recent changes needed" statement.

**D3 (Claude Code fit):** HIGHEST WEIGHT. This directly measures whether the pack is designed FOR Claude Code.
- Does README explain how to use skills in Claude Code?
- Are `SKILL.md` files present with proper frontmatter (description, effort, triggers)?
- Do skills reference Claude Code-specific features (MCP tools, Codex, context-mode)?
- Can users import and immediately use them?

Score 10/10 if every skill has a self-contained SKILL.md + example walkthrough.

**D4 (Code quality):** Skills are prompts + context files. Quality = clarity.
- Prompts are concise and specific (not vague or overly complex)
- Context files are well-structured (markdown with clear sections)
- Examples are runnable (copy-paste the prompt into Claude, get expected output)
- Error handling documented (what to do if skill fails)

No tests required; clarity dominates.

**D5 (Ingestion):** Skills are small artifacts. Fast to understand. Expect 9–10/10 for well-organized packs.

**D6 (Adoption):** How many Claude Code users import and use these skills?
- GitHub stars / forks of reference implementations
- ComposioHQ or Vercel ecosystem cross-mentions
- Blog posts showing skill usage in real projects
- Skills pinned in awesome-claude-code or awesome-claude-skills

This is the strongest trust signal. High adoption = skill reliably solves problems.

**D7 (Novelty):** Skills remix known techniques; genuine novelty is rare.
- 7–8: Introduces new skill type (e.g., first skill pack for X domain)
- 5–6: Solid collection of known-useful skills
- 3–4: Repackaging of existing patterns
- 0–2: Duplicate of skills in another pack

**D8 (Community):** Skill usage discussions, blog posts showing integrations, mentions in Reddit/Discord Claude communities, tutorials on skill composition.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Skills | Status | Notes |
|---|---|---|---|
| `addyosmani/agent-skills` | 12+ agent scaffolds | Active | Well-maintained reference set |
| `vercel-labs/agent-skills` | 8+ web/API skills | Active | Vercel ecosystem aligned |
| `ComposioHQ/awesome-claude-skills` | 50+ curated | Active | Largest pack; community-driven |
| `K-Dense-AI/scientific-agent-skills` | 15+ research-focused | Active | Domain-specific (science/academia) |
| `Imbad0202/academic-research-skills` | 8+ literature review | Active | Focused on academic workflows |

---

## Anti-Patterns (Demote Score)

- **No SKILL.md frontmatter:** Skills lack metadata (description, trigger conditions, effort level)
- **Copy-paste bloat:** Same prompt repeated across 5 skills with minor tweaks
- **Broken context references:** Skills reference files that don't exist or are outdated
- **No examples:** Skill listed but no example of how to invoke or what output to expect
- **Outdated Claude references:** Mentions "gpt-4-turbo" or Claude model versions that are no longer recommended
- **No maintainer:** README doesn't list contact or contribution guidelines; repo feels abandoned despite recent commits
- **Overly complex prompts:** Skill prompt is 1000+ lines; users can't adapt it without rewriting

---

## Scored Example Walkthrough

**Candidate:** `skillforge/research-analysis-pack` (hypothetical, 6 skills)

**Stage-1 hardfilter:** PASS (MIT, 35 commits, 3 contributors, last commit 2 weeks ago, includes `skills/` dirs)

**D1 (Stars):** 3,200 stars → log₁₀(3201) ≈ 3.50 ≈ **3/10**

**D2 (Maintenance):** Last 6 commits in 90d (bi-monthly), issues closed in 1 week, acknowledged Claude Code v1.2 launch → **7/10**

**D3 (Claude Code fit):** 
- All 6 skills have SKILL.md with frontmatter
- README explains "Install via `claude skill import`"
- 4 skills reference MCP tools or context-mode
- Each has 1–2 example walkthroughs
→ **9/10**

**D4 (Code quality):** 
- Prompts are 150–300 words (concise)
- All context files use markdown sections
- No broken references detected
- Error cases documented
→ **8/10**

**D5 (Ingestion):** 2.5 MB pack, 6 skills in nested dirs, clear README → **9/10**

**D6 (Adoption):** 12 GitHub forks, 2 blog posts showing usage, 1 awesome-claude-code mention → **7/10**

**D7 (Novelty):** Combines known research patterns (literature review, synthesis, fact-checking) into a unified pack; not novel, but well-executed → **5/10**

**D8 (Community):** 1 HN mention, 2 blog posts, 1 Discord discussion thread → **6/10**

**Rubric score:**
```
= (3×0.05 + 7×0.15 + 9×0.30 + 8×0.10 + 9×0.05 + 7×0.20 + 5×0.05 + 6×0.10) × 10
= (0.15 + 1.05 + 2.7 + 0.8 + 0.45 + 1.4 + 0.25 + 0.6) × 10
= 7.4 × 10 = 74
```

**Convergence:** Found by 3 sources (GitHub search, awesome-list, blog mention) → convergence_factor = 0.90

**Adjusted rubric:** 74 × 0.90 = 66.6

**Codex review:** "Solid skill collection; well-documented, Claude-native. Good adoption signal. Recommend STUDY; if adoption grows or D7 novelty improves (e.g., adds new domain-specific skill), candidate for INSTALL-LITE." → codex_score = 72

**Final score:**
```
= 0.6 × 66.6 + 0.4 × 72 = 39.96 + 28.8 = 68.76 ≈ 69
```

**Action:** **STUDY** (L1+L2 ingestion; monitor for adoption growth and new skill contributions; strong candidate for INSTALL-LITE if D6 / D8 spike)
