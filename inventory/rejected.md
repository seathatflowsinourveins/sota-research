# SOTA Rejected Candidates — Decision Log

**Purpose:** Log explicit rejections + reason codes to avoid redundant evaluations.  
**Last Updated:** 2026-05-28  
**Scope:** Candidates scoring <40 AND all explicit REJECT decisions from discovery scans.

---

## Rejected Candidates

| Name | Category | Date Rejected | Score | Reason Code | Notes |
|------|----------|---|-------|---|---|
| `regenrek/deepwiki-mcp` | mcp-server | 2026-05-28 | 39.3 | **SUPERSEDED-BY-X** | Codex GPT-5.5 xhigh REJECT verdict (36): "use official `mcp.deepwiki.com` from Cognition Labs instead — wrapper adds no value over canonical endpoint." Install action redirected to `claude mcp add deepwiki` pointing to the official endpoint. Re-eligibility: only if the official endpoint is removed AND regenrek wrapper adds novel features. |

---

## Reason Codes

_Standardized rejection reasons for filtering + re-eligibility decisions._

| Code | Full Name | Definition | Re-Eligibility Condition |
|------|-----------|-----------|---|
| **STALE** | Stale Repository | >6 months no commits AND no releases AND <3 open issues in past 90d | New commit OR release, then re-evaluate |
| **LICENSE** | Incompatible License | Non-approved license (GPL-only, proprietary, custom restrictive) for target category | License change to MIT/Apache/BSD, then re-evaluate |
| **HONEYPOT** | Bot Author or Astroturfing | Author email matches bot patterns (build-bot, ci-bot, @cdn-cgi) OR star spike >50k/48h without commits | Author reputation recovery OR bot-pattern stops, then case-by-case review |
| **ARCHIVED** | Repository Archived | GitHub `isArchived=true` flag set | Unarchived + activity shown, then re-evaluate |
| **ABANDONED** | Abandoned by Maintainer | Single-author repo, author deleted, no successor maintainer OR "looking for maintainers" issue 3+ months old | New maintainer takes over + shows activity, then re-evaluate |
| **SUPERSEDED-BY-X** | Superseded by Another | Official README or GH issue states "use X instead" | Original candidate recovers (X is removed) OR original shows novel differentiation, then re-evaluate |
| **INSUFFICIENT-SUBSTANCE** | Does Not Meet Substance Gate | <30 lifetime commits AND <3 contributors AND <1 release | Reaches substance threshold (≥30 commits OR ≥3 contributors OR ≥1 release), then re-evaluate |
| **REIMPLEMENTS-EXISTING** | Reimplements Installed Artifact | Candidate is a thin clone/fork of already-installed repo with no novel additions | Candidate adds novel technique not in installed version, then re-evaluate |

---

## Re-Eligibility Rules

_When a REJECT candidate can re-enter evaluation pipeline._

### Automatic Re-Entry Conditions

| Reason Code | Re-Entry Trigger | Timeline |
|---|---|---|
| STALE | Repository shows ≥1 commit within past 30d | Check on next discovery scan (~7d latency) |
| LICENSE | Official license file changes to approved list | Manual verification + re-evaluate (priority) |
| HONEYPOT | Author email stops matching bot pattern OR author account deleted + new maintainer | Case-by-case, at least 3 months of clean history |
| ARCHIVED | Repository is unarchived AND ≥2 commits in past 30d | Automatic re-queue to WATCH tier (start 40–59 minimum) |
| ABANDONED | New maintainer identified + shows ≥5 commits in past 30d | Re-evaluate from scratch |
| SUPERSEDED-BY-X | Original candidate publishes differentiation OR superseding candidate (X) is itself REJECTED | Re-evaluate original if X is rejected; otherwise remains superseded |
| INSUFFICIENT-SUBSTANCE | Repository reaches ≥30 commits OR ≥3 contributors OR ≥1 release | Automatic re-queue to WATCH tier |
| REIMPLEMENTS-EXISTING | Candidate publishes novel feature/architecture not in incumbent | Case-by-case evaluation of novel substance |

### Manual Review Cases

- **HONEYPOT + author reputation recovery:** Review 3+ months of clean commit history + verified author identity before re-entry.
- **SUPERSEDED-BY-X + both rejected:** Evaluate original against current SOTA (not against superseded version) if ≥90d elapsed.
- **LICENSE change:** Prioritize re-evaluation; may be eligible for STUDY tier immediately.

---

## Bootstrap State (2026-05-28)

_Placeholder pending Wave 2 discovery output._

**No initial REJECT entries.** Bootstrap scans will produce stage-1 hard-filter failures:

- **License incompatible:** flagged for REJECTED(LICENSE)
- **Stale (>6mo):** flagged for REJECTED(STALE)
- **Insufficient substance:** flagged for REJECTED(INSUFFICIENT-SUBSTANCE)
- **Honeypot:** flagged for REJECTED(HONEYPOT)
- **Archived:** flagged for REJECTED(ARCHIVED)

Output: `inventory/bootstrap-2026-05-28.md` will include rejected-candidate summary with reason codes.

---

## Monitoring Hooks (Event-Driven Re-Entry)

_Passive signals that trigger re-eligibility checks._

1. **GitHub webhook on push** (if configured): Check for STALE candidates showing new activity → auto-promote to WATCH backlog
2. **Awesome-list delta scan** (session-start): Check if REJECTED candidates appear in new awesome-lists → trigger case review
3. **Dependency scan** (quarterly): Check npm/pypi for REJECTED candidates as dependents of active projects → re-evaluate novelty
4. **License monitoring** (npm/GitHub API): Flag when REJECTED(LICENSE) candidate publishes new license file → queue priority re-eval

---

## Related Documents

- `inventory/installed.md` — currently adopted SOTA (source of truth)
- `inventory/watching.md` — WATCH-tier candidates with re-eval triggers
- `inventory/scan-<ts>.md` — per-session discovery output (includes reject reasons)
- `docs/rubric.md` — scoring thresholds (<40 = REJECT zone)
- `docs/protocols/discovery.md` — stage-1 hard-filter gate definitions
