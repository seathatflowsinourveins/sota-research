# Research Architecture Enhancement — Phase 1 Plan (CORRECTED v2)

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:subagent-driven-development. Steps use `- [ ]` checkboxes.
> **v2 correction (2026-05-28):** v1 assumed several modules needed *creating*. A reconciliation against the real `scripts/lib/` found most already exist (`evidence.mjs`, `d3-pathway.mjs`, `provenance.mjs`, `gap-fit.mjs`; family-counting in `discover.mjs`; decision/outcome logging in `outcome.mjs`). This v2 is the corrected, **extend-existing** scope. Do NOT create `surfaces.mjs`/`identity.mjs`/`decisionlog.mjs` — extend what exists.

**Goal:** Close the *real* gaps in the existing decision engine: wire the orphaned D3 adoption-pathway + add a surface-veto, enforce evidence coverage, persist decisions from the main scan, deepen security, emit a comparison matrix, and add orchestration/deep-research overlays.

**Tech Stack:** Node ≥22 ESM, Vitest 3 (80% cov), Biome 2. Work in main repo `C:/SEA/src/sota-research`, branch `feature/research-arch-sota-enhancement`. Spec: `docs/superpowers/specs/2026-05-28-research-architecture-enhancement-design.md`.

---

## ⏯️ RESUME HERE — update after every verified slice

- **Branch:** `feature/research-arch-v3` (main repo `C:/SEA/src/sota-research`) — supersedes ancestor `feature/research-arch-sota-enhancement` (at `19d2995`).
- **Commits:** `2fb6862` spec · `c5aeaac` plan(v1) · `1cef869` Task 0 · `b968cbc` plan(v2) · `19d2995` adopt v3.0-CORE WIP baseline · `cf83531` wire 4 orphaned gates + D6 fix.
- **Last completed:** `cf83531` — wired evidence-coverage, D3-pathway veto, provenance-suspect cap, gap-fit relevance; called d3FromPathway in scoring; fixed the D6 publisher-risk formula. **169 tests pass, Biome clean.** Claude spec+quality review: all correct.
- **Next task:** GPT-5.5 final review IN PROGRESS → then consolidate branch; Phase-1 finalize complete. Remaining work = v3 BACKLOG (behavioral/MTTR security, Top-N comparative matrix, full StarScout provenance detector, LLM-judge ensemble + calibration, weight auto-tuning) — all need labeled/historical data.
- **Last verification:** `npm test` 169 pass / 0 fail; `npm run lint` clean (41 files).
- **Resume protocol:** read this header → `git -C C:/SEA/src/sota-research log --oneline` → `cd` to main repo, `npm test` → continue from first unchecked box → commit each verified slice, update this header in the same commit.
- **Known baseline debt (NOT this plan's job):** ~23–28 pre-existing repo-wide Biome errors on `main`. The `TaskCompleted` hook is scoped to changed files, so keep YOUR touched files clean; the pre-existing debt is logged for a separate cleanup.

---

## What already exists (do NOT rebuild)

| Capability | Module | Status |
|---|---|---|
| Evidence schema + validation ({value,source,timestamp,confidence,rationale}) | `lib/evidence.mjs` (`validateJudgeEvidence`, `dimensionValue`, `EVIDENCE_FIELDS`) | exists |
| D3 adoption-pathway ladder (mcp>plugin>skill>hook>js>cli>py) + integration-evidence caps | `lib/d3-pathway.mjs` (`PATHWAY_LADDER`, `normalizePathway`, `d3FromPathway`) | exists but **ORPHANED** |
| Trust/astroturf overlay (D10) | `lib/provenance.mjs` (`assessProvenance`) | wired into decision.mjs |
| Gap-fit / marginal-lift gate (D11) | `lib/gap-fit.mjs` (`assessGapFit`) | wired into decision.mjs |
| Independent source-family counting | `discover.mjs:calculateSourceTrust()` → `family_count` | wired to convergence cap (E3 DONE) |
| Decision/outcome JSONL logging | `outcome.mjs` reads/writes `inventory/{decisions,outcomes}.jsonl` | exists; **discover.mjs doesn't persist** |
| Decision pipeline | `lib/decision.mjs:routeDecision` | exists |

---

## Task A: Wire the orphaned D3 pathway + add surface-veto  ← TOP PRIORITY (E6)

**Why:** `d3FromPathway()` computes the adoption pathway (the "degree of adaptness" signal) but `decision.mjs`/scoring never call it — the signal is discarded. And nothing vetoes an INSTALL when a repo has no runtime surface.

**Files:** Modify `scripts/score.mjs` (and/or `scripts/discover.mjs` scoring) to compute D3 via `d3FromPathway`; Modify `scripts/lib/decision.mjs` (add `surfaceVetoGate` + wire); Test `tests/decision-routing.test.mjs`, `tests/score.test.mjs`.

- [ ] **A1 — Read first:** read `scripts/lib/d3-pathway.mjs` fully, and find where D3 is currently set in `scripts/score.mjs` (grep `D3`). Confirm what `pathway` + integration-evidence inputs are available on a candidate.
- [ ] **A2 — Failing test (surface-veto):** append to `tests/decision-routing.test.mjs`:

```javascript
import { surfaceVetoGate } from "../scripts/lib/decision.mjs";
describe("surfaceVetoGate (E6)", () => {
  it("caps mcp-server INSTALL→STUDY when pathway is absent/unknown", () => {
    expect(surfaceVetoGate("INSTALL-FULL", { category: "mcp-server", pathway: null }).tier).toBe("STUDY");
  });
  it("allows INSTALL when an adoption pathway is present", () => {
    expect(surfaceVetoGate("INSTALL-LITE", { category: "mcp-server", pathway: "mcp" }).tier).toBe("INSTALL-LITE");
  });
  it("caps a high research-with-code INSTALL with no pathway", () => {
    expect(surfaceVetoGate("INSTALL-FULL", { category: "research-with-code", pathway: null }).tier).toBe("STUDY");
  });
  it("leaves STUDY/below untouched", () => {
    expect(surfaceVetoGate("STUDY", { category: "mcp-server", pathway: null }).tier).toBe("STUDY");
  });
});
```

- [ ] **A3 — Verify fail:** `npx vitest run tests/decision-routing.test.mjs -t surfaceVetoGate` → FAIL (function missing).
- [ ] **A4 — Add `surfaceVetoGate`** to `decision.mjs` (near the other gate functions). Reuse `tierRank`/`capTier`:

```javascript
const INSTALL_CAPABLE = new Set(["mcp-server", "skill-pack", "hook-toolkit"]);
/**
 * Surface-veto (E6, "degree of adaptness"). An INSTALL tier requires a real adoption
 * pathway (mcp/plugin/skill/hook/...). A high score with no pathway is STUDY, not INSTALL.
 * @returns {{tier:string, note:string|null}}
 */
export function surfaceVetoGate(tier, { category, pathway } = {}) {
  if (tierRank(tier) < tierRank("INSTALL-LITE")) return { tier, note: null };
  const hasPathway = pathway != null && String(pathway).trim() !== "" && String(pathway).toLowerCase() !== "unknown";
  if (!hasPathway) {
    return { tier: "STUDY", note: `surface-veto: no adoption pathway for ${category} → STUDY` };
  }
  return { tier, note: null };
}
```

- [ ] **A5 — Wire into `routeDecision`:** add `pathway = null,` to the destructured params; insert in the cap phase (after override floors, before/with convergence cap):

```javascript
  // E6: surface/pathway veto — no adoption pathway → not install-adoptable
  const surf = surfaceVetoGate(tier, { category, pathway });
  if (surf.tier !== tier) { tier = surf.tier; trace.push(surf.note); }
```
Add `pathway,` to the returned object for the audit trail.

- [ ] **A6 — Wire `d3FromPathway` into scoring:** in `scripts/score.mjs`, where D3 is assigned, compute it via `d3FromPathway(candidate.pathway, candidate.integrationEvidence, ...)` (import from `./lib/d3-pathway.mjs`). Follow the existing null-handling (unknown pathway → null D3, consistent with the evidence contract). Add/adjust a `score.test.mjs` test asserting D3 derives from pathway. Pass `pathway` through to `routeDecision`.
- [ ] **A7 — Verify pass:** `npx vitest run tests/decision-routing.test.mjs tests/score.test.mjs` → PASS.
- [ ] **A8 — Document** in `rubric.md §D3`: D3 now derives from the pathway ladder; surface-veto caps pathway-less INSTALLs. **Commit:**
```bash
git add scripts/lib/decision.mjs scripts/score.mjs tests/ docs/rubric.md
git commit -m "feat(decision): E6 wire D3 adoption-pathway + surface-veto (degree-of-adaptness)"
```
Update RESUME-HERE: Last = Task A; Next = Task B.

---

## Task B: Evidence-coverage gate (E1)

**Why:** `evidence.mjs` validates per-dimension evidence but nothing computes a coverage fraction or caps tier when evidence is thin.

**Files:** Modify `scripts/lib/evidence.mjs` (+ `coverageFraction`); Modify `scripts/lib/decision.mjs` (+ `coverageGate`, wire); Test `tests/decision-routing.test.mjs` + an evidence test.

- [ ] **B1 — Failing tests:**
```javascript
import { coverageFraction } from "../scripts/lib/evidence.mjs";
import { coverageGate } from "../scripts/lib/decision.mjs";
it("coverageFraction = evidenced/expected", () => {
  expect(coverageFraction({ D1: 5, D2: null, D3: 7, D4: null }, ["D1","D2","D3","D4"])).toBe(0.5);
});
it("coverageGate caps INSTALL→STUDY below 0.70", () => {
  expect(coverageGate("INSTALL-FULL", { coverage: 0.5 }).tier).toBe("STUDY");
});
it("coverageGate leaves full coverage unchanged", () => {
  expect(coverageGate("INSTALL-FULL", { coverage: 1 }).tier).toBe("INSTALL-FULL");
});
```
- [ ] **B2 — Verify fail.**
- [ ] **B3 — Add `coverageFraction`** to `evidence.mjs`:
```javascript
/** Fraction of expected dimensions that carry an evidenced (non-null) value. */
export function coverageFraction(dims = {}, expected = []) {
  if (!expected.length) return 1;
  const have = expected.filter((k) => dimensionValue(dims[k]) != null).length;
  return have / expected.length;
}
```
- [ ] **B4 — Add `coverageGate`** to `decision.mjs`:
```javascript
/** Evidence-coverage cap (E1): thin evidence cannot reach an install tier. */
export function coverageGate(tier, { coverage = 1, minCoverage = 0.7 } = {}) {
  if (coverage < minCoverage && tierRank(tier) > tierRank("STUDY")) {
    return { tier: "STUDY", note: `coverage-gate: ${Math.round(coverage * 100)}% < ${Math.round(minCoverage * 100)}% → STUDY` };
  }
  return { tier, note: null };
}
```
- [ ] **B5 — Wire into `routeDecision`:** add `coverage = 1,` param; insert in the cap phase (right after `surfaceVetoGate`):
```javascript
  const cov = coverageGate(tier, { coverage });
  if (cov.tier !== tier) { tier = cov.tier; trace.push(cov.note); }
```
- [ ] **B6 — Verify pass.** **Commit:** `feat(decision): E1 evidence-coverage gate`. Update RESUME-HERE.

---

## Task C: Persist decisions from the main scan (E2)

**Why:** `outcome.mjs` reads/writes `decisions.jsonl`, but `discover.mjs` never writes decision records during a scan, so the loop has no data.

**Files:** read `scripts/outcome.mjs` for any existing append helper; if present, reuse it; else add `appendDecision` to a small shared spot. Modify `scripts/discover.mjs` to append each scored candidate's decision. Test `tests/discover.test.mjs` (or a focused log test).

- [ ] **C1 — Read** `outcome.mjs` to find how it reads/writes `decisions.jsonl`; reuse its writer if exported, else add `export function appendDecision(record, {baseDir})` (atomic-append; throws on missing `repo`/`action`) — place beside the existing logging code, NOT a new parallel module.
- [ ] **C2 — Failing test:** appending a decision writes a parseable JSONL line; missing `repo`/`action` throws.
- [ ] **C3 — Implement / wire** into `discover.mjs` Phase 4 after `routeDecision`: append `{ts, repo, action, score, category, families, dims, pathway, coverage, trace, rubricVersion}`.
- [ ] **C4 — Verify pass.** **Commit:** `feat(discover): E2 persist decision records to decisions.jsonl`. Update RESUME-HERE.

---

## Task D: Security depth — behavioral / install-surface / MTTR (E7)

**Why:** `assessSecurityFromEvidence` handles dated/status-tagged CVE findings; extend it for code-behavior risk, install-time attack surface (CVE-2025-59536 class), and MTTR temporal aging. (`provenance.mjs` covers astroturf/fraud — distinct.)

**Files:** Modify `scripts/lib/decision.mjs` (`assessSecurityFromEvidence`, `lateSecurityDemotion`); `docs/rubric.md §7`; Test `tests/decision-routing.test.mjs`.

- [ ] **D1 — Read** the current `assessSecurityFromEvidence` + `lateSecurityDemotion` in `decision.mjs` (≈ lines 172–203, 145–157).
- [ ] **D2 — Failing tests** (behavioral soft-flag; confirmed-malicious→openCritical; install-surface→installSurfaceRisk; high-sev <90d not yet openCritical; critical >30d openCritical; lateSecurityDemotion caps on install-surface and on behavioral+weakCommunity). Use the test bodies from the spec's Task E7.
- [ ] **D3 — Extend** `assessSecurityFromEvidence` to return additionally `{behavioralRisk, installSurfaceRisk}` and apply the MTTR rule (critical open >30d ⇒ openCritical; high open >90d ⇒ openCritical; dated finding inside grace window not yet openCritical). Handle `type: "behavioral"` (malicious/confirmed ⇒ openCritical; else behavioralRisk) and `type: "install-surface"` ⇒ installSurfaceRisk.
- [ ] **D4 — Extend** `lateSecurityDemotion` to cap REFERENCE on `installSurfaceRisk`, and on `behavioralRisk && weakCommunity`. In `routeDecision`, set `sec.weakCommunity = Number(dims.D8 ?? 10) < 5`.
- [ ] **D5 — Verify pass.** Document `rubric.md §7`. **Commit:** `feat(decision): E7 behavioral/install-surface/MTTR security depth`. Update RESUME-HERE.

---

## Task E: Comparative Top-N matrix output (E8)

**Why:** `decision.md` promises a Top-N D1–D9 comparison + beats-rationale, but no code emits it.

**Files:** Modify `scripts/discover.mjs` (or `bootstrap.mjs`) scan output; `docs/decision.md`. Test the matrix builder as a pure function.

- [ ] **E1 — Read** the scan-output section of `discover.mjs`/`bootstrap.mjs`.
- [ ] **E2 — Failing test** for a pure `buildComparisonMatrix(candidates)` → returns per-category ranked rows with D1–D9 + action + a 1-line "beats" rationale (which alternatives it outranked).
- [ ] **E3 — Implement** `buildComparisonMatrix` (pure, in a small lib or in discover.mjs) and render it into the scan markdown output.
- [ ] **E4 — Verify pass.** **Commit:** `feat(discover): E8 Top-N comparative matrix + beats-rationale`. Update RESUME-HERE.

---

## Task F: Orchestration + deep-research OVERLAYS (D-overlays, per user)

**Why:** add orchestration-pattern fit + deep-research-readiness as **non-weighted overlays** (matching the existing `provenance.mjs`/`gap-fit.mjs` pattern + Codex advice), scoped to `agent-orchestration-pattern`/`agent-framework`/`research-agent`.

**Files:** Create `scripts/lib/orchestration-overlay.mjs` + `scripts/lib/deep-research-overlay.mjs` (mirroring `provenance.mjs`'s overlay shape: a pure `assess*()` returning `{flags, actionCap?, rationale}`); wire into `decision.mjs` like provenance/gap-fit; `docs/rubric.md`. Tests per overlay.

- [ ] **F1 — Read** `provenance.mjs` + `gap-fit.mjs` to mirror the overlay contract + how they wire into `routeDecision`.
- [ ] **F2 — Failing tests** for `assessOrchestration(signals)` (clear primary pattern → fit; vague "supports everything" → penalize) and `assessDeepResearch(signals)` (multi-source synthesis + iterative refinement + citation grounding → ready).
- [ ] **F3 — Implement** both overlays (category-scoped: no effect outside their categories). Wire into `routeDecision` as advisory overlays (flags + optional soft actionCap), NOT weighted dims.
- [ ] **F4 — Verify pass.** Document in `rubric.md`. **Commit:** `feat(decision): orchestration + deep-research overlays (category-scoped)`. Update RESUME-HERE.

---

## Phase 1 Done-Definition

- [ ] `npm test` green ≥80% cov; YOUR touched files Biome-clean.
- [ ] Task A's D3-pathway wiring verified end-to-end (a candidate with a pathway scores D3 from the ladder; pathway-less high score caps at STUDY).
- [ ] `/codex:review` (or `codex exec review`) on the full Phase-1 diff; BLOCKERs fixed.
- [ ] RESUME-HERE + checkboxes current; memory pointer updated.
- [ ] E3 confirmed DONE (note: verify registry→1-family collapse when E4/Phase-2 lands).

## Self-Review (v2)
- Coverage vs corrected reality: E6 (A) wires the orphaned pathway + veto; E1 (B) adds only the missing coverage layer; E2 (C) only the missing persistence; E7 (D) extends existing security; E8 (E) builds the absent matrix; overlays (F) per user, mirroring existing overlays. E3 already done. No module duplication. No placeholders (new-function code given in full; extend-tasks instruct reading the existing module first).
