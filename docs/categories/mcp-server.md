# Category: MCP Server

## Overview

MCP servers are executable programs that expose the Model Context Protocol — a standard interface for Claude to invoke tools, access resources, and integrate with external systems. Categories: local file ops, web/search, GitHub APIs, code intelligence, data/knowledge bases, specialized domain services.

## When This Category Applies

- Repo contains `mcp.json` (manifest) or references `@modelcontextprotocol/sdk`
- README mentions "Model Context Protocol" or "Claude MCP"
- Implements stdio-based request/response transport (common for Node/Python/Go MCPs)
- Appears in `modelcontextprotocol/servers` registry or similar authoritative MCP list
- Has CLI command to register/install (e.g., `claude mcp add <server>`)

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | MCP ecosystems early; star count not predictive yet |
| D2: Maintenance | **0.20** | Active maintenance = reliability + API stability |
| D3: Claude Code fit | **0.30** | Directly measures MCP compatibility + integration maturity |
| D4: Code quality | 0.15 | Tests + types + CI matter for protocol-level stability |
| D5: Ingestion | 0.05 | Small surface; shallow codebase; easy to understand |
| D6: Adoption | 0.10 | Dependents on npm/PyPI + "used in" GitHub searches |
| D7: Novelty | 0.10 | New protocol bridge (e.g., database, code-intelligence) scores high |
| D8: Community | 0.05 | Mentioned in awesome-mcp-servers + forum discussions |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** MCP servers are newer (most <2 years old). GitHub stars alone don't predict quality; favor maintenance velocity (D2) and adoption (D6) signals instead.

**D2 (Maintenance):** Critical. Stale MCPs break easily when protocol updates or SDK changes. Check:
- Last commit ≤3 months
- Responds to issues within 2 weeks
- Updates on SDK major-version releases

**D3 (Claude Code fit):** Search `mcp.json` for resource schema, verify transport (stdio, HTTP), check README for "Claude Code" or `claude mcp add` install instructions. Cross-check in [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) registry.

**D4 (Code quality):** MCP servers must handle request/response serialization reliably.
- ≥80% test coverage (especially request parsing, error handling)
- Full TypeScript OR robust type hints + type checking
- CI + linting (biome, eslint, mypy, etc.)
- Dependabot or Renovate active

**D5 (Ingestion):** Most MCPs are <2 MB. Ingestion is simple — read the handler code + resource definitions. Low scoring here; focus on D2/D3/D4.

**D6 (Adoption):** For npm/PyPI MCPs, check `npm dependents` and `gh api repos/:owner/:repo/dependents` (GitHub). Adoption is a trust signal for protocol stability.

**D7 (Novelty):** MCPs that bridge new domains (code-intelligence, specialized DBs, domain APIs) score higher than re-implementations of existing bridges.

**D8 (Community):** Mentioned in [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers), HN threads about MCP announcements, or forum posts. Lower weight; some great MCPs are niche.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Stars | Status | Notes |
|---|---|---|---|
| `modelcontextprotocol/servers` (reference) | — | Reference | Official MCP server registry; inspect for candidates |
| `gitnexus/mcp` | 2.5k | Active | Code intelligence MCP; integrated into Claude Code |
| `deepwiki/mcp-server` | 1.8k | Active | Wikipedia + research paper indexing |
| `octocode/mcp-server` | 980 | Active | Symbol-level code search |
| `codepathfinder/mcp-server` | 650 | Active | Call-graph navigation for Python/JS |

---

## Anti-Patterns (Demote Score)

- **Stale MCP:** last commit >6 months; SDK version pinned to 0.x when current is 1.x+
- **No tests:** Zero test coverage or all tests skipped
- **Undocumented transport:** `mcp.json` missing or transport type unclear
- **Broken serialization:** Issues discussing crashes on malformed requests (no input validation)
- **No maintenance plan:** Repo is "archived as-is"; author unresponsive to issues
- **Fragile CLI registration:** Installation requires manual config or undocumented steps

---

## Scored Example Walkthrough

**Candidate:** `freshly-forked/weather-mcp` (hypothetical)

**Stage-1 hardfilter:** PASS (MIT license, 50 commits, 3 contributors, last commit 2 weeks ago, has `mcp.json`)

**D1 (Stars):** 120 stars → log₁₀(121) ≈ 2.08 ≈ **2/10**

**D2 (Maintenance):** Last 20 commits in 90d (weekly velocity), PRs merged in 3 days, 6 issues closed/month → **8/10**

**D3 (Claude Code fit):** `mcp.json` present, README explains "Use with Claude Code via `claude mcp add`", one Claude Code skill uses this MCP → **7/10**

**D4 (Code quality):** 
- OpenSSF Scorecard: 7.2/10 (good CI, signed releases, but no fuzzing)
- Our signals: Biome CI, 75% test coverage, full TypeScript, Dependabot → 8/10
- Combined: 0.5×7.2 + 0.5×8 = **7.6 ≈ 8/10**

**D5 (Ingestion):** Weather data schema + 3 handlers, ~500 LOC → **8/10** (easy to understand)

**D6 (Adoption):** 0 npm dependents (new repo), 1 "used by" mention in a skill pack → **3/10** (early)

**D7 (Novelty):** Weather APIs exist elsewhere (not novel pattern), but this one supports multi-provider fallback (slightly novel) → **5/10**

**D8 (Community):** 1 mention in a blog post, not yet in awesome-mcp-servers → **3/10**

**Rubric score:**
```
= (2×0.05 + 8×0.20 + 7×0.30 + 8×0.15 + 8×0.05 + 3×0.10 + 5×0.10 + 3×0.05) × 10
= (0.1 + 1.6 + 2.1 + 1.2 + 0.4 + 0.3 + 0.5 + 0.15) × 10
= 6.35 × 10 = 63.5
```

**Convergence:** Found by 2 sources (GitHub search + awesome-list crawl) → convergence_factor = 0.85

**Adjusted rubric:** 63.5 × 0.85 = 54

**Codex review:** "Solid new MCP, good test coverage, but needs maturity. Not novel. Recommend WATCH in 6 months." → codex_score = 55

**Final score:**
```
= 0.6 × 54 + 0.4 × 55 = 32.4 + 22 = 54.4 ≈ 54
```

**Action:** **WATCH** (re-eval in 90d or when D7 novelty improves or adoption grows)
