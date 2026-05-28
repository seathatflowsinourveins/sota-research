# SOTA Watching List — Re-Evaluation Candidates

**Purpose:** Track promising candidates scoring 40–59 OR immature-but-valuable repos requiring re-evaluation on trigger events.  
**Last Updated:** 2026-05-28  
**Re-eval Triggers:** See section below for definitions and schedule.

---

## Watching Candidates

| Name | Category | First Seen | Score | Re-Eval Trigger | Re-Eval Date | Notes |
|------|----------|-----------|-------|-----------------|--------------|-------|
| `dzhng/deep-research` | research-agent | 2026-05-28 | 57.7 | 90d-elapsed OR next-major-release OR community-velocity-spike | 2026-08-26 | Codex EXPERIMENT verdict (63). Minimal-impl pattern under 500 LoC — high novelty signal but small contributor base (1.9k forks / 19k stars). Watch for v1.0 release or RL-trained variant landing. |
| `Alibaba-NLP/DeepResearch` (Tongyi) | research-agent | 2026-05-28 | 56.7 | next-major-release OR maintained-signal | 2026-08-26 | Codex EXPERIMENT verdict (58). 90d stale (last push 2026-02-27) hurts D2; RL-trained Qwen3-30B SOTA-benchmark winner. Mature-utility exception NOT granted because LLM-research category is fast-moving. Watch for Tongyi v2 release. |

---

## Re-Eval Triggers Reference

_When a candidate in WATCH tier should be re-scored._

### Trigger Types

| Trigger Type | Definition | Re-Eval Window | Signal |
|---|---|---|---|
| **next-major-release** | Upstream publishes vN.0 (semantic versioning bump) | Within 2 weeks of release | GitHub releases webhook or manual scan |
| **90d-elapsed** | 90 calendar days since last re-eval score | Auto-fire on schedule | `watching.md` scan-date field |
| **awesome-list-cross-mention** | Candidate appears in 2+ awesome-list repos (not starred before) | Within 1 week of discovery | Phase 1 awesome-crawl or external mention alert |
| **community-velocity-spike** | GitHub star velocity >100 stars/month OR HN frontpage OR Reddit r/programming top 10 | Within 72 hours | brave_news + tavily research tracking |
| **maintained-signal** | Repository shows activity after 6m quiet period (new commits, releases, or merged PRs) | Within 1 week of activity | GH webhook or manual delta scan |
| **dependency-adoption** | Score candidate in 2+ `package.json` of active projects we track | Within 2 weeks of discovery | npm-registry or repo scan |
| **architecture-fit** | New project architecture document or major refactor published | Within 2 weeks of publication | GitHub PRs or releases scan |
| **SOTA-category-shift** | Rubric weight profile changes for candidate's category | On next rubric update | `docs/categories/*.md` version change |

### Re-Eval Schedule (Passive, no cron)

1. Session-start: Check `watching.md` for any 90d-elapsed entries → queue re-eval on explicit `/sota-research:rewatch` command
2. Major-release event: Upstream repo publishes vN.0 → add to backlog, process on next discovery session
3. Awesome-list delta: Cross-mention detected → add trigger, re-eval within 1 week
4. Community spike: Mentioned in news/HN/X → add trigger, re-eval within 72 hours

---

## Re-Eligibility Rules

_When a WATCH candidate graduates or gets REJECTED, and under what conditions it re-enters WATCH._

| From State | Event | Action | New State |
|---|---|---|---|
| WATCH (40–59) | Score rises above 60 after re-eval | Promote to STUDY | STUDY |
| WATCH | Score falls below 40 after re-eval | Demote + log reason | REJECTED |
| WATCH | next-major-release trigger fires with no score change | Requeue re-eval trigger for 90d | WATCH (trigger updated) |
| WATCH | 180d+ no activity, no trigger fires | Archive to rejected (reason: STALE) | REJECTED |
| REJECTED (STALE) | Repo shows activity after 6m quiet | Re-evaluate from scratch | WATCH (starting 40–59) |
| REJECTED (SUPERSEDED-BY-X) | Superseded-by candidate gets REJECTED | Re-open original for evaluation | WATCH |
| REJECTED (LICENSE) | License changes to acceptable (MIT/Apache/BSD) | Re-evaluate from scratch | WATCH |
| REJECTED (HONEYPOT) | Author reputation recovers OR bot-commit pattern stops | Case-by-case review, may re-enter | WATCH OR remain REJECTED |

---

## Bootstrap State (2026-05-28)

_Placeholder pending Wave 2 discovery output._

**No initial WATCH entries.** Bootstrap scans (Wave 2, Section 8) will produce:

1. **MCP servers SOTA 2026** — candidates scoring 40–59 in MCP category
2. **Agent orchestration patterns** — promising plan-by-files OR swarm implementations
3. **Research agents** — deep-research alternatives to gpt-researcher (score-rank)
4. **Claude Code skill packs + hook toolkits** — beyond installed (ECC, ruflo, context-mode, claude-hud)
5. **Code intelligence tools** — repomix-class or deepwiki competitors
6. **Audit: 91 starred repos** — pattern-mine for 40–59 tier repos with community signal

Output: `inventory/bootstrap-2026-05-28.md` will populate WATCH candidates from these scans.

---

## Related Documents

- `inventory/installed.md` — currently adopted SOTA artifacts (source of truth)
- `inventory/rejected.md` — REJECT log with reason codes (avoid duplicate evaluation)
- `inventory/scan-<ts>.md` — per-session discovery output (ranked recommendations + cost)
- `docs/protocols/discovery.md` — re-eval protocol execution details
- `docs/rubric.md` — scoring thresholds (40–59 = WATCH zone)
