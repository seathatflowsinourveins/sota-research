# Category: Research-With-Code

## Overview

Research-with-code are academic papers, theses, or research projects where the code is the primary contribution (or an inseparable part). Examples: papers on arXiv with GitHub repos, PhD theses with accompanying codebases, research frameworks released alongside papers (DeerFlow, CORAL, O-Researcher). The code and paper form a unit; scoring balances novelty + scientific rigor with code quality + reproducibility.

## When This Category Applies

- Canonical source is a peer-reviewed paper OR substantial technical report (arXiv, conference proceedings)
- Accompanying code repo implements the paper's method or serves as the experimental platform
- Code is necessary to understand or reproduce the research findings
- Repository README links to paper (arXiv, DOI, or conference link)
- Code is sufficiently complete to allow independent reproduction (not just figures)

---

## Weight Profile (D1–D8)

| Dimension | Weight | Rationale |
|---|---|---|
| D1: Stars | 0.05 | Academic work; GitHub stars are meaningless for research merit |
| D2: Maintenance | 0.10 | Code can be stable post-publication; moderate velocity acceptable |
| D3: Claude Code fit | 0.05 | Research code is domain-specific, not Claude-centric |
| D4: Code quality | 0.15 | Reproducibility + clarity critical; tests for research validity, not just bugs |
| D5: Ingestion | **0.20** | Research codebases are often large (50–500 MB) with complex setups; understanding effort is real |
| D6: Adoption | 0.10 | Citations of the paper + implementations by other researchers |
| D7: Novelty | **0.25** | HIGHEST WEIGHT. Scientific novelty = the entire purpose of research-with-code |
| D8: Community | 0.10 | Academic citations, paper mentions, conference discussions, collaboration requests |
| **Sum** | **1.00** | — |

---

## Dimension-Specific Guidance

**D1 (Stars):** GitHub stars on research repos are driven by paper popularity, not code quality. Intentionally low weight. Top-tier ICML papers often have <100 stars; obscure but brilliant papers might have 0.

**D2 (Maintenance):** Research code can be "stable" post-publication (frozen at reproducibility point). Accept last commit ≤6 months OR "published + stable" statement with DOI.
- Authors responding to reproducibility issues counts as activity
- Updates to fix dependency versions (PyTorch, TensorFlow minor versions) count

Score 6–8 as "stable"; score 9–10 only if actively developed post-publication.

**D3 (Claude Code fit):** Research code is domain-specific. Score high only if paper is about LLM agents, Claude integration, or AI systems. Otherwise expect 2–5/10.

**D4 (Code quality):** Reproducibility + scientific integrity:
- Hyperparameter configurations documented or in code
- Random seeds pinned; results should be deterministic (within floating-point limits)
- Data preprocessing code included (not just "download dataset")
- Unit tests for data loading and key functions
- README with reproduction commands (e.g., `python train.py --config config.yaml`)

Academic standards differ from production code; prioritize transparency over polish.

**D5 (Ingestion):** Research codebases are often 50–500 MB with conda/docker setup, multiple language mixing, and bespoke data pipelines. Understanding requires:
- Reading paper for methodology
- Understanding data formats and preprocessing
- Tracing experiments to reproduce

Score 9–10 only if code is <10 MB, single-language, with clear notebook-style explanation.

**D6 (Adoption):** How many researchers have used or extended this code?
- Google Scholar "cited by" count for the paper
- GitHub forks + stars (weak signal but combined indicator)
- Other papers referencing code (not just paper)
- Reimplementation or extension repos

**D7 (Novelty):** HIGHEST WEIGHT. This is the research merit.
- 9–10: Novel algorithm, surprising result, new research direction
- 7–8: Significant improvement over prior work; well-executed study
- 5–6: Solid empirical contribution; known method applied to new domain
- 3–4: Incremental refinement; minor baseline improvements
- 0–2: Negative result or minor tweak on existing approach

Assess via paper abstract, methodology novelty, experimental rigor.

**D8 (Community):** Academic discussions, paper mentions in survey/review papers, conference talks, collaboration requests from other researchers, citations in follow-up work.

---

## Bootstrap Seeds (Canonical 2026-Q2)

| Paper | Repo | Approach | Notes |
|---|---|---|---|
| DeerFlow (ByteDance) | ByteDance/DeerFlow | Multi-agent planning | Recent; RL-trained; SOTA results |
| CORAL (2024) | open-coral/coral | Collaborative reasoning | Strong novelty on multi-agent coordination |
| O-Researcher | o-researcher/o-researcher | Iterative reasoning + refinement | Novel depth-control strategy |
| DeepResearchAgent (2024) | DeepResearchAgent/repo | Self-evolving multi-agent | Cutting-edge autogenesis pattern |
| ArXiv papers with repos | Various | Varies | Bootstrap scan targets all recent research papers with GitHub links |

---

## Anti-Patterns (Demote Score)

- **Unfaithful to paper:** Code doesn't match paper methods; results can't be reproduced with published params
- **No seed pinning:** Stochastic code; results vary wildly across runs (non-reproducible)
- **Missing data / preprocessing:** Authors say "download from source" but don't provide preprocessing code; users can't reproduce
- **Broken dependencies:** Code pinned to old TensorFlow; can't install on modern Python
- **No hyperparameter documentation:** Authors don't disclose key tuning params; users can't match results
- **Opaque experiments:** No code for generating tables/figures in paper; results are magic
- **Abandoned by authors:** No response to reproducibility issues; code becomes useless when dependencies drift

---

## Scored Example Walkthrough

**Candidate:** `ml-research-labs/adaptive-reasoning-agents` (hypothetical arXiv paper + code)

**Paper:** "Adaptive Depth-Control for Multi-Agent Research" (arXiv:2405.xxxxx), published May 2024, 18 citations as of now.

**Stage-1 hardfilter:** PASS (MIT, arXiv paper + GitHub link, 120 commits, 4 contributors, last commit 1 month ago post-publication)

**D1 (Stars):** 450 stars → log₁₀(451) ≈ 2.65 ≈ **3/10** (below average for research repos)

**D2 (Maintenance):** 
- Last commit 1 month ago (bug fix for PyTorch 2.1 compat)
- Authors responding to reproducibility issues in 3–5 days
- Stable post-publication; no major feature work
→ **7/10**

**D3 (Claude Code fit):** Paper is on multi-agent reasoning; no Claude-specific code → **3/10**

**D4 (Code quality)**:
- Hyperparams documented in README + code
- Random seeds pinned; results deterministic
- Data preprocessing code included
- 60% test coverage (tests for data loading, core functions)
- README with full reproduction steps
- OpenSSF Scorecard: 6.0/10 (no fuzzing, but solid CI)
- Combined: 0.5×6.0 + 0.5×7 = **6.5/10** (good for academic code)

**D5 (Ingestion):** 85 MB, mixed Python + YAML configs, conda environment included, notebook walkthrough of experiment flow → **7/10** (mid-effort)

**D6 (Adoption)**:
- 18 Google Scholar citations (paper cited)
- 8 GitHub forks (researchers building on it)
- 1 follow-up paper using this code
→ **7/10**

**D7 (Novelty):** Paper introduces "adaptive depth scheduling" for agent research iteration (agent decides when to deepen analysis vs. conclude). Novel method, solid empirical results → **8/10**

**D8 (Community):** 2 conference presentation mentions, 4 follow-up papers (1 extending method), 1 HN discussion on method novelty → **7/10**

**Rubric score:**
```
= (3×0.05 + 7×0.10 + 3×0.05 + 6.5×0.15 + 7×0.20 + 7×0.10 + 8×0.25 + 7×0.10) × 10
= (0.15 + 0.7 + 0.15 + 0.975 + 1.4 + 0.7 + 2.0 + 0.7) × 10
= 6.825 × 10 = 68.25
```

**Convergence:** Found by 3 sources (arXiv mention, GitHub search, academic paper DB) → convergence_factor = 0.90

**Adjusted rubric:** 68.25 × 0.90 = 61.425

**Codex review:** "Novel approach to depth-control in research agents. Well-documented code. Reproducible. Solid follow-up adoption. Recommend STUDY → INSTALL if method directly applies to our research-agent architecture or multi-agent orchestration patterns." → codex_score = 72

**Final score:**
```
= 0.6 × 61.425 + 0.4 × 72 = 36.855 + 28.8 = 65.655 ≈ 66
```

**Action:** **STUDY** (L1+L2 ingestion; monitor academic adoption and follow-up work. If method becomes widely adopted or integrated into major agent frameworks, promote to INSTALL)
