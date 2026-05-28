# Category: Code Library

## Overview

Code libraries are general-purpose software packages designed for reuse — utilities, SDKs, data structures, algorithms. Categories: code intelligence (repomix, code2prompt), context packing, knowledge graphs, general utilities. Focus: code quality, API clarity, long-term maintenance, user trust.

## When This Category Applies

- Repo is published as a library/package (npm, PyPI, crates.io, etc.)
- Serves other projects as a dependency (has consumers, not standalone app)
- Emphasizes API stability, backward compatibility, and semantic versioning
- Has ≥500 lines of core logic (not a quick utility)
- README documents API, examples, and contribution guidelines

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | **0.10** | Library discovery is driven by utility; stars are meaningful signal |
| D2: Maintenance | 0.20 | Library health = API stability + security updates |
| D3: Claude Code fit | 0.05 | Generic libraries; fit is secondary |
| D4: Code quality | **0.25** | Library code is read + reused by thousands; quality is paramount |
| D5: Ingestion | 0.05 | Libraries are focused; understanding the API is sufficient |
| D6: Adoption | **0.20** | Dependents + downloads are trust signal; proven utility |
| D7: Novelty | 0.10 | New algorithms or data structures; most libraries remix existing ideas |
| D8: Community | 0.05 | Library discussions are quieter (adoption matters more than buzz) |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** Libraries live or die by adoption. Stars are a lagging indicator but meaningful (not like awesome-lists or research agents where stars are noisy). Code intelligence libraries like repomix (22k stars) and code2prompt (7.2k) are trustworthy signals.

**D2 (Maintenance):** Libraries must remain compatible with language/runtime updates.
- Last commit ≤3 months (libraries move slower than frameworks)
- Security patch response time <2 weeks (zero-day vulnerability reports)
- Semantic versioning (MAJOR.MINOR.PATCH); breaking changes in MAJOR only
- Changelog maintained

**D3 (Claude Code fit):** Low weight. Generic libraries aren't Claude-specific. Score high only if library has Claude Code examples or was built with Claude integration in mind. Otherwise expect 3–5/10.

**D4 (Code quality):** SECOND-HIGHEST WEIGHT. Library code is read by thousands.
- ≥85% test coverage with integration tests
- Full type hints (Python 3.10+) or TypeScript
- API documentation (docstrings, JSDoc, or rustdoc)
- Performance benchmarks (for algorithms/data structures)
- CI/CD with multiple version testing (e.g., Python 3.9–3.13)

**D5 (Ingestion):** Libraries are focused; API learning is straightforward. Usually 8–9/10.

**D6 (Adoption):** SECOND-HIGHEST WEIGHT. Proven adoption = trust.
- npm / PyPI / crates.io download stats (weekly/monthly)
- GitHub GraphQL dependents count
- Used-by mentions in major projects
- (For code intelligence: used in popular repos like gitnexus, deepwiki, etc.)

**D7 (Novelty):** Most libraries remix existing algorithms.
- 8–10: Novel algorithm, data structure, or approach (rare)
- 6–7: Improved implementation of known technique
- 4–5: Solid reimplementation of standard library
- 2–3: Wrapper or minor utility
- 0–1: Duplicate of existing library

**D8 (Community):** Library discussions are sparse (GitHub issues, StackOverflow tags). Lower weight justified; adoption signals matter more.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Repo | Stars | Category | Notes |
|---|---|---|---|
| `yamadashy/repomix` | 22k | Context packing | Gold standard; used by gitnexus, deepwiki |
| `mufeedvh/code2prompt` | 7.2k | Context packing | Simpler alternative to repomix |
| `gitnexus/gitnexus` | 2.5k | Knowledge graph | Code intelligence MCP + library |
| `langfuse/langfuse` | 8.1k | Observability | LLM tracing (not code-specific but valuable) |

---

## Anti-Patterns (Demote Score)

- **Broken API stability:** Major version bumps every month with breaking changes; no migration guides
- **Low test coverage:** <50% tests; untested edge cases cause user crashes
- **No semantic versioning:** Version numbers are arbitrary (v0.alpha.beta); impossible to gauge compatibility
- **Stale dependencies:** npm/PyPI packages pinned to versions 2+ years old; known vulnerabilities
- **Poor documentation:** API is undocumented; users must read source code to understand behavior
- **Single-maintainer burnout:** No responses to issues for months; PRs languish
- **Platform-specific bugs:** Works on macOS but fails on Linux/Windows; "works on my machine" attitude

---

## Scored Example Walkthrough

**Candidate:** `code-analysis-labs/semantic-index` (hypothetical, Python code indexing library)

**Stage-1 hardfilter:** PASS (Apache-2.0, 200 commits, 6 contributors, last commit 2 weeks ago, 5k+ LOC)

**D1 (Stars):** 12,500 stars → log₁₀(12501) ≈ 4.10 ≈ **4/10**

**D2 (Maintenance):**
- Last commit 2 weeks ago (bi-weekly)
- Security issue response time 5 days average
- Semantic versioning strict (v1.x.y → v2.0.0 had migration guide)
- Changelog detailed per release
→ **8/10**

**D3 (Claude Code fit):** Generic library; no Claude-specific features → **4/10**

**D4 (Code quality)**:
- OpenSSF Scorecard: 7.5/10 (strong CI, code review, fuzzing active)
- Our signals: 88% test coverage, full Python 3.10+ typing, pytest + mypy + ruff CI, semantic versioning, performance benchmarks in repo
- Combined: 0.5×7.5 + 0.5×9 = **8.25 ≈ 8/10**

**D5 (Ingestion):** 18 MB with examples, clear README with API reference, inline docstrings → **8/10**

**D6 (Adoption)**:
- 45 GitHub dependents
- 8k PyPI downloads/month
- Used by gitnexus, deepwiki, code2prompt (major reference in ecosystem)
→ **9/10**

**D7 (Novelty):** Implements incremental semantic indexing for Python (faster re-index on file changes). Improvement over full-rebuild approaches → **7/10**

**D8 (Community):** 1 PyPI discussion, 2 blog posts on code indexing, StackOverflow tag (low volume) → **5/10**

**Rubric score:**
```
= (4×0.10 + 8×0.20 + 4×0.05 + 8×0.25 + 8×0.05 + 9×0.20 + 7×0.10 + 5×0.05) × 10
= (0.4 + 1.6 + 0.2 + 2.0 + 0.4 + 1.8 + 0.7 + 0.25) × 10
= 7.35 × 10 = 73.5
```

**Convergence:** Found by 4 sources (GitHub search, ecosystem references, code examples, blog) → convergence_factor = 0.95

**Adjusted rubric:** 73.5 × 0.95 = 69.825

**Codex review:** "Production-quality library. Excellent test coverage and typing discipline. Incremental indexing is a real improvement. Already trusted by major ecosystem projects. Recommend STUDY → INSTALL-FULL if dependency footprint is acceptable." → codex_score = 79

**Final score:**
```
= 0.6 × 69.825 + 0.4 × 79 = 41.895 + 31.6 = 73.495 ≈ 73
```

**Action:** **STUDY** (L1+L2 ingestion; strong candidate for INSTALL if D6/adoption continues and/or used to improve gitnexus/deepwiki integration)
