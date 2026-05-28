# Category: Awesome-List

## Overview

Awesome-lists are curated, community-maintained collections of links and brief descriptions organized by topic. Examples: awesome-mcp-servers, awesome-claude-code, awesome-claude-skills, awesome-claude-plugins. Quality depends on curator activity, cross-mention density, and practical organization.

## When This Category Applies

- Repo is a curated list (usually in README format with markdown sections)
- Follows awesome-list conventions (badge, well-organized categories, contributor guidelines)
- Has ≥50 quality links (not a stub)
- Active curation (responds to submissions, audits for dead links, removes spam)
- Serves as a reference for discovering tools in the category

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Stars on lists are driven by category popularity, not curation quality |
| D2: Maintenance | **0.30** | Active curation is EVERYTHING; stale lists become useless |
| D3: Claude Code fit | 0.05 | Not all awesome-lists are Claude-specific |
| D4: Code quality | 0.05 | Lists are data, not code; structure and clarity matter, not tests |
| D5: Ingestion | 0.05 | Lists are trivial to ingest; focus elsewhere |
| D6: Adoption | 0.10 | Cross-mentions in other awesome-lists, references in blogs/papers |
| D7: Novelty | 0.05 | Lists don't introduce novelty; curation target does |
| D8: Community | **0.35** | Community trust = curator activity, subscriber growth, engagement |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** List popularity is driven by category hype, not curation quality. 100k stars on an awesome-list ≠ better curation than 5k. Tiny weight.

**D2 (Maintenance):** CRITICAL. Stale lists fill with dead links and spam.
- Last update ≤1 month (weekly ideal for active lists)
- Responds to PRs/issues within 1 week
- Removes dead links (automated checker + manual audits)
- Updates to add recently launched tools

Score 9–10 if list is updated weekly with active submission queue. Score 3–4 if no updates in 3+ months despite starred.

**D3 (Claude Code fit):** Only matters if list is explicitly "Claude Code tools" or similar. Generic awesome-lists score low (3/10). Claude-specific lists score high (8–9/10) if they focus on Claude ecosystem.

**D4 (Code quality):** Lists are markdown. Quality signals:
- Well-structured sections (not one long list)
- Consistent entry format (name | description | link)
- Badges showing maintained/updated status
- No broken markdown or formatting errors

Less important than maintenance; structure alone doesn't compensate for staleness.

**D5 (Ingestion):** Trivial. Parsing a markdown list takes 5 min. Score 9–10 always.

**D6 (Adoption):** How many other awesome-lists cross-mention this one? How many projects link to it as "official curator"?
- Cross-mentions in 3+ other awesome-lists → 7/10
- Referenced in 5+ major projects/tools → 8/10
- Linked from awesome-awesomeness (meta-list curator) → 9/10

**D7 (Novelty):** Lists don't invent; they curate. Low weight. Only score high (7+) if the list introduces a NEW category that didn't exist before (e.g., first awesome-llm-applications list in 2023).

**D8 (Community):** SECOND-HIGHEST WEIGHT. Community signals = list quality.
- Submission rate (PRs/issues per month asking to add new tools)
- Engagement (comments on PRs, community discussions, Discord votes on additions)
- Contributor diversity (how many unique submitters)
- Growth trajectory (did subscriber count grow in past 90d)

High submission rate + fast triage = healthy community trust.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Links | Status | Notes |
|---|---|---|---|
| `punkpeye/awesome-mcp-servers` | 100+ | Very active | Official de-facto standard; weekly updates |
| `hesreallyhim/awesome-claude-code` | 80+ | Active | Claude Code tools + tutorials |
| `ComposioHQ/awesome-claude-skills` | 150+ | Active | Largest; community-driven curation |
| `modelcontextprotocol/servers` | Registry | Official | GitHub official registry (complementary) |
| `quemsah/awesome-claude-plugins` | 60+ | Moderate | Good coverage; slower updates |

---

## Anti-Patterns (Demote Score)

- **Stale curator:** Last update 6+ months ago; PRs sit unanswered for weeks
- **Spam links:** Dead links (404, redirects) still in list; no automated or manual audits
- **No contributor guidelines:** Unclear submission process; list feels closed to community
- **Broken markdown:** Lists don't render properly in GitHub; links are malformed
- **Duplicate entries:** Same tool listed twice with different names/links
- **Vague descriptions:** Entries lack info about what each tool does; must click to learn
- **No breadth filtering:** List includes every tangentially-related project (loses signal)

---

## Scored Example Walkthrough

**Candidate:** `curators-collective/awesome-research-agents` (hypothetical, 95 entries)

**Stage-1 hardfilter:** PASS (CC0, README-based, 40+ commits, 8 contributors, last commit 1 week ago, 95 links)

**D1 (Stars):** 8,900 stars → log₁₀(8901) ≈ 3.95 ≈ **4/10**

**D2 (Maintenance):** 
- Last commit 1 week ago (weekly updates)
- Issues responded to in 2–3 days
- Automated link checker (finds 404s weekly)
- PRs merged in 5 days average
→ **9/10**

**D3 (Claude Code fit):** List is "research agents," not Claude-specific. No special Claude focus → **3/10**

**D4 (Code quality):** 
- Well-structured markdown (6 categories, 95 links)
- Consistent format (tool | description | stars link)
- README explains curation criteria
- No broken markdown
→ **7/10**

**D5 (Ingestion):** 150 KB markdown file, easy parse → **9/10**

**D6 (Adoption):**
- 4 cross-mentions in other awesome-lists
- Referenced by 2 AI research blogs
- ~50 tools link back to "featured in awesome-research-agents"
→ **7/10**

**D7 (Novelty):** First focused awesome-list on research agents (category launched ~2024) → **6/10** (modest novelty)

**D8 (Community)**:
- 8–12 PR submissions per month
- Active Discord (#awesome-research-agents, 150+ members)
- 7 distinct monthly contributors
- Growth: 800→8900 stars in 12 months
→ **9/10**

**Rubric score:**
```
= (4×0.05 + 9×0.30 + 3×0.05 + 7×0.05 + 9×0.05 + 7×0.10 + 6×0.05 + 9×0.35) × 10
= (0.2 + 2.7 + 0.15 + 0.35 + 0.45 + 0.7 + 0.3 + 3.15) × 10
= 8.0 × 10 = 80
```

**Convergence:** Found by 4 sources (GitHub search, blog mentions, other lists, Discord) → convergence_factor = 0.95

**Adjusted rubric:** 80 × 0.95 = 76

**Codex review:** "Excellent curation and community engagement. Well-maintained. Strong reference for research-agent discovery. Recommend STUDY → INSTALL-LITE as reference tool if users adopt it as primary research-agent registry." → codex_score = 78

**Final score:**
```
= 0.6 × 76 + 0.4 × 78 = 45.6 + 31.2 = 76.8 ≈ 77
```

**Action:** **STUDY** (L1+L2 ingestion; monitor for ecosystem adoption. If list becomes de-facto standard for research-agent discovery, can promote to INSTALL-LITE as reference + ingest into `inventory/` for periodic curation audits)
