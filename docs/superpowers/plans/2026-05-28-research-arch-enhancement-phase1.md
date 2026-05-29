# Research Architecture Enhancement — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the sota-research decision engine evidence-enforced, durably auditable, identity-aware, surface-gated (install-vs-study), and security-deep — grounded in the 2026-05-28 convergence design spec.

**Architecture:** Pure, testable functions added to `scripts/lib/decision.mjs` (two new pipeline gates) + three new focused libs (`decisionlog.mjs`, `identity.mjs`, `surfaces.mjs`). `decision.mjs` stays dependency-free (no fs); fs/IO lives in the libs and is wired in by `discover.mjs`. Every slice is test-gated (Vitest) and committed.

**Tech Stack:** Node ≥22 ESM, Vitest 3 (80% coverage), Biome 2. Spec: `docs/superpowers/specs/2026-05-28-research-architecture-enhancement-design.md`.

---

## ⏯️ RESUME HERE — update after every verified slice

- **Branch:** `feature/research-arch-sota-enhancement` (main repo `C:/SEA/src/sota-research`)
- **Spec:** `docs/superpowers/specs/2026-05-28-research-architecture-enhancement-design.md`
- **Commits so far:** `2fb6862` (spec)
- **Last completed task:** _(none — scaffold)_
- **Next task:** Task 0 (lint cleanup)
- **Last verification:** _n/a_
- **Resume protocol:** read this header → `git -C C:/SEA/src/sota-research log --oneline` → `npm test` (confirm green) → continue from first unchecked box. Commit each verified slice; update this header + the relevant checkboxes in the same commit.

> Env caveats: global gitconfig has invalid `diff.colormovedws=allspace` → repo-local override already set (`git config --local diff.colormovedws ignore-all-space`). The session worktree was reset; all work targets the main repo. Verify with `npm run lint && npm test`.

---

## File Structure

| File | Responsibility | Status |
|---|---|---|
| `scripts/lib/decision.mjs` | decision pipeline; **add** `coverageGate`, `surfaceVetoGate`; **extend** `assessSecurityFromEvidence`, `lateSecurityDemotion`, `routeDecision` | modify |
| `scripts/lib/decisionlog.mjs` | durable append-only `decisions.jsonl` / `outcomes.jsonl` writers (E2) | **create** |
| `scripts/lib/identity.mjs` | canonical id + source-family taxonomy + `countFamilies` (E3) | **create** |
| `scripts/lib/surfaces.mjs` | runtime-surface detection from repo file list (E6) | **create** |
| `scripts/ingest.mjs` | wire the documented `--force` idempotency (Task 0) | modify |
| `scripts/discover.mjs` | call `appendDecision`, pass `coverage`/`surfaces`/`families` into `routeDecision` (E2/E3/E6 wiring) | modify |
| `tests/decision.test.mjs` | new gate + security tests | create/extend |
| `tests/decisionlog.test.mjs`, `tests/identity.test.mjs`, `tests/surfaces.test.mjs` | unit tests for new libs | **create** |

**Pipeline order after Phase 1** (inside `routeDecision`): safety-veto → baseTier → overrideFloor (raise) → **coverageGate (cap)** → **surfaceVetoGate (cap)** → convergenceActionCap (cap) → lateSecurityDemotion (extended) → claimFreshnessGate → objectiveRelevanceGate → rubricVersion check → fail-closed.

---

## Task 0: Lint cleanup (clean tree for all subsequent commits)

**Files:**
- Modify: `scripts/ingest.mjs:296-315` (wire `force`), top-of-file import
- Modify: `.sota-watch.example.json` (CRLF→LF)
- Test: `tests/ingest.test.mjs`

- [ ] **Step 1: Write the failing test** (idempotency)

Append to `tests/ingest.test.mjs` (create if absent, with the existing import style):

```javascript
import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ingest } from "../scripts/ingest.mjs";

describe("ingest idempotency (force)", () => {
  let dir;
  afterEach(() => dir && rmSync(dir, { recursive: true, force: true }));
  it("skips when meta.json exists and force=false", async () => {
    dir = mkdtempSync(join(tmpdir(), "sota-ingest-"));
    const metaDir = join(dir, "patterns", "o", "r");
    mkdirSync(metaDir, { recursive: true });
    writeFileSync(join(metaDir, "meta.json"), "{}");
    const res = await ingest({ owner: "o", repo: "r", depth: "L1", force: false, baseDir: dir });
    expect(res.skipped).toBe("already-ingested");
  });
});
```

- [ ] **Step 2: Run it — verify it fails**

Run: `npx vitest run tests/ingest.test.mjs -t "skips when meta.json"`
Expected: FAIL (currently `force` is ignored; no `skipped` field).

- [ ] **Step 3: Wire `force`** in `scripts/ingest.mjs`

Ensure the import exists at top of file (add if missing): `import { existsSync } from "node:fs";`

Replace lines 313-314 (the `// Check if already ingested` / `// TODO:` comment block) with:

```javascript
  // Idempotency: skip if already ingested unless force=true (wires the --force CLI flag)
  if (!force && existsSync(metaPath)) {
    return { meta: null, ingest_results: {}, meta_path: metaPath, skipped: "already-ingested" };
  }
```

- [ ] **Step 4: Run test — verify pass**

Run: `npx vitest run tests/ingest.test.mjs -t "skips when meta.json"`
Expected: PASS.

- [ ] **Step 5: Fix the JSON formatting**

Run: `npx @biomejs/biome format --write .sota-watch.example.json`
Then verify clean: `npm run lint`
Expected: Biome reports no errors.

- [ ] **Step 6: Commit**

```bash
git add scripts/ingest.mjs tests/ingest.test.mjs .sota-watch.example.json
git commit -m "chore: wire --force idempotency in ingest + fix CRLF (clean tree)"
```
Update RESUME-HERE: Last completed = Task 0; Next = Task E1.

---

## Task E1: Enforce the evidence contract in decision.mjs

**Files:**
- Modify: `scripts/lib/decision.mjs` (add `coverageGate`; extend `routeDecision`)
- Test: `tests/decision.test.mjs`

- [ ] **Step 1: Write failing tests**

Append to `tests/decision.test.mjs`:

```javascript
import { describe, it, expect } from "vitest";
import { coverageGate, routeDecision } from "../scripts/lib/decision.mjs";

describe("coverageGate", () => {
  it("caps INSTALL→STUDY when coverage below threshold", () => {
    expect(coverageGate("INSTALL-FULL", { coverage: 0.5 }).tier).toBe("STUDY");
  });
  it("leaves tier unchanged at full coverage", () => {
    expect(coverageGate("INSTALL-FULL", { coverage: 1 }).tier).toBe("INSTALL-FULL");
  });
  it("never raises a low tier", () => {
    expect(coverageGate("WATCH", { coverage: 0.1 }).tier).toBe("WATCH");
  });
});

describe("routeDecision evidence enforcement", () => {
  it("caps at STUDY when coverage < 0.70", () => {
    const r = routeDecision({ score: 95, category: "mcp-server", families: 4, coverage: 0.5,
      safety: { verified: true } });
    expect(r.action).toBe("STUDY");
    expect(r.trace.join(" ")).toMatch(/coverage-gate/);
  });
  it("flags + forces review on rubricVersion mismatch", () => {
    const r = routeDecision({ score: 95, category: "mcp-server", families: 4, coverage: 1,
      safety: { verified: true }, rubricVersion: "old", expectedRubricVersion: "2026-05-28.1" });
    expect(r.flags).toContain("rubric-version-mismatch");
    expect(r.review_required).toBe(true);
  });
});
```

- [ ] **Step 2: Run — verify fail**

Run: `npx vitest run tests/decision.test.mjs -t coverage`
Expected: FAIL (`coverageGate is not a function`).

- [ ] **Step 3: Add `coverageGate`** to `decision.mjs` (after `objectiveRelevanceGate`, before `routeDecision`):

```javascript
/**
 * Evidence-coverage gate (E1). The rubric is computed only over EVIDENCED dims;
 * `coverage` = (#evidenced dims) / (#expected dims for the category). Thin evidence
 * must not reach an install tier — cap at STUDY below `minCoverage`.
 * @returns {{tier:string, note:string|null}}
 */
export function coverageGate(tier, { coverage = 1, minCoverage = 0.7 } = {}) {
  if (coverage < minCoverage && tierRank(tier) > tierRank("STUDY")) {
    return {
      tier: "STUDY",
      note: `coverage-gate: ${Math.round(coverage * 100)}% < ${Math.round(minCoverage * 100)}% → STUDY`,
    };
  }
  return { tier, note: null };
}
```

- [ ] **Step 4: Wire into `routeDecision`**

Add params to the destructured signature: `coverage = 1,` and `expectedRubricVersion = null,` (next to `rubricVersion`).

Insert the coverage gate in the cap phase — immediately AFTER the override-floor block (after step 3, before step 4 convergence cap):

```javascript
  // E1: evidence-coverage cap (thin evidence cannot install)
  const cov = coverageGate(tier, { coverage });
  if (cov.tier !== tier) {
    tier = cov.tier;
    trace.push(cov.note);
  }
```

Add the rubric-version check just before building `review_required` (after step 8 fail-closed):

```javascript
  // E1: rubric-version drift → flag + force review (never silently score on a stale rubric)
  if (rubricVersion && expectedRubricVersion && rubricVersion !== expectedRubricVersion) {
    flags.push("rubric-version-mismatch");
    trace.push(`rubric-version-mismatch:${rubricVersion}!=${expectedRubricVersion}`);
  }
```

Update the `review_required` line to also trip on the mismatch:

```javascript
  const review_required =
    review || tier === "INSTALL-FULL" || tier === "INSTALL-LITE" ||
    flags.includes("rubric-version-mismatch");
```

- [ ] **Step 5: Run — verify pass**

Run: `npx vitest run tests/decision.test.mjs`
Expected: PASS (all decision tests).

- [ ] **Step 6: Document in rubric.md** — under `### Evidence contract (decision-grade scoring)` (line ~280), append: the 0.70 coverage threshold and that `routeDecision` caps at STUDY below it, and that a `rubricVersion` mismatch flags + forces review. Bump a version marker at top of rubric.md: add `<!-- rubric_version: 2026-05-28.1 -->`.

- [ ] **Step 7: Commit**

```bash
git add scripts/lib/decision.mjs tests/decision.test.mjs docs/rubric.md
git commit -m "feat(decision): E1 enforce evidence-coverage gate + rubricVersion check"
```
Update RESUME-HERE: Last = E1; Next = E2.

---

## Task E2: Durable outcome logging (`decisionlog.mjs`)

**Files:**
- Create: `scripts/lib/decisionlog.mjs`
- Test: `tests/decisionlog.test.mjs`
- Modify: `scripts/discover.mjs` (call `appendDecision` after routing)

- [ ] **Step 1: Write failing tests** — `tests/decisionlog.test.mjs`:

```javascript
import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { appendDecision, appendOutcome } from "../scripts/lib/decisionlog.mjs";

describe("decisionlog", () => {
  let dir;
  afterEach(() => dir && rmSync(dir, { recursive: true, force: true }));

  it("appends a parseable JSONL line to inventory/decisions.jsonl", () => {
    dir = mkdtempSync(join(tmpdir(), "sota-log-"));
    appendDecision({ repo: "o/r", action: "STUDY", score: 72 }, { baseDir: dir });
    appendDecision({ repo: "o/r2", action: "REJECT", score: 10 }, { baseDir: dir });
    const lines = readFileSync(join(dir, "inventory", "decisions.jsonl"), "utf8").trim().split("\n");
    expect(lines).toHaveLength(2);
    expect(JSON.parse(lines[0]).repo).toBe("o/r");
  });

  it("throws on a record missing repo or action (no silent drop)", () => {
    dir = mkdtempSync(join(tmpdir(), "sota-log-"));
    expect(() => appendDecision({ score: 1 }, { baseDir: dir })).toThrow();
  });

  it("appendOutcome writes to outcomes.jsonl", () => {
    dir = mkdtempSync(join(tmpdir(), "sota-log-"));
    appendOutcome({ repo: "o/r", outcome_event: "package_removed", assessment: "low-value" }, { baseDir: dir });
    const txt = readFileSync(join(dir, "inventory", "outcomes.jsonl"), "utf8");
    expect(JSON.parse(txt.trim()).outcome_event).toBe("package_removed");
  });
});
```

- [ ] **Step 2: Run — verify fail**

Run: `npx vitest run tests/decisionlog.test.mjs`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `scripts/lib/decisionlog.mjs`:**

```javascript
/**
 * Durable append-only decision/outcome logs (E2). Makes the self-improvement loop
 * real: `inventory/decisions.jsonl` was referenced by the protocols but never written.
 * One validated JSON object per line; malformed records throw (never silently dropped).
 */
import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

function appendJsonl(path, record, required) {
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new Error("decisionlog: record must be a plain object");
  }
  for (const k of required) {
    if (record[k] === undefined || record[k] === null) {
      throw new Error(`decisionlog: record requires '${k}'`);
    }
  }
  mkdirSync(dirname(path), { recursive: true });
  appendFileSync(path, `${JSON.stringify(record)}\n`);
  return path;
}

/** Append one decision record to inventory/decisions.jsonl. Requires {repo, action}. */
export function appendDecision(record, { baseDir = process.cwd() } = {}) {
  const stamped = { ts: record.ts || new Date().toISOString(), ...record };
  return appendJsonl(join(baseDir, "inventory", "decisions.jsonl"), stamped, ["repo", "action"]);
}

/** Append one outcome record to inventory/outcomes.jsonl. Requires {repo, outcome_event}. */
export function appendOutcome(record, { baseDir = process.cwd() } = {}) {
  const stamped = { ts: record.ts || new Date().toISOString(), ...record };
  return appendJsonl(join(baseDir, "inventory", "outcomes.jsonl"), stamped, ["repo", "outcome_event"]);
}
```

- [ ] **Step 4: Run — verify pass**

Run: `npx vitest run tests/decisionlog.test.mjs`
Expected: PASS.

- [ ] **Step 5: Wire into `discover.mjs`** — at the point where each candidate's `routeDecision` result is finalized in Phase 4, import and call:

```javascript
import { appendDecision } from "./lib/decisionlog.mjs";
// ...after `const decision = routeDecision({...})`:
appendDecision({
  repo: candidate.nameWithOwner,
  action: decision.action,
  score: finalScore,
  category,
  families: decision.families,
  dims: candidate.dims,
  coverage: candidate.coverage ?? null,
  rubricVersion: decision.rubricVersion,
  codex_verdict: candidate.codexVerdict ?? null,
  trace: decision.trace,
}, { baseDir });
```
(Match the actual variable names in `discover.mjs` Phase 4; adjust if they differ.)

- [ ] **Step 6: Commit**

```bash
git add scripts/lib/decisionlog.mjs tests/decisionlog.test.mjs scripts/discover.mjs
git commit -m "feat(discover): E2 durable decisions.jsonl/outcomes.jsonl logging"
```
Update RESUME-HERE: Last = E2; Next = E3.

---

## Task E3: Canonical identity / source-family model (`identity.mjs`)

**Files:**
- Create: `scripts/lib/identity.mjs`
- Test: `tests/identity.test.mjs`
- Modify: `scripts/discover.mjs` (use `countFamilies` for `sourceTrust.family_count`)

- [ ] **Step 1: Write failing tests** — `tests/identity.test.mjs`:

```javascript
import { describe, it, expect } from "vitest";
import { canonicalId, sourceFamily, countFamilies } from "../scripts/lib/identity.mjs";

describe("identity", () => {
  it("canonicalId normalizes case + .git suffix", () => {
    expect(canonicalId({ owner: "PunkPeye", repo: "Awesome-MCP.git" }))
      .toBe("github:punkpeye/awesome-mcp");
  });
  it("collapses all MCP registries/marketplaces into one family (Decision #1)", () => {
    expect(countFamilies(["pulsemcp", "smithery", "glama", "mcp.so"])).toBe(1);
  });
  it("counts genuinely independent origins separately", () => {
    expect(countFamilies(["github-search", "exa", "semantic-scholar"])).toBe(3);
  });
  it("treats github search + graphql + manifest as one github family", () => {
    expect(countFamilies(["github-search", "github-graphql", "github-manifest"])).toBe(1);
  });
});
```

- [ ] **Step 2: Run — verify fail**

Run: `npx vitest run tests/identity.test.mjs`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `scripts/lib/identity.mjs`:**

```javascript
/**
 * Canonical identity + independent-source-family taxonomy (E3). Prevents trust
 * inflation: registry mirrors / awesome-list derivatives of one origin must NOT
 * count as multiple convergence families (rubric §3 / decision.mjs convergence cap).
 * Decision #1: all MCP registries/marketplaces collapse to one "mcp-registry" family.
 */
const REGISTRY_FAMILY = new Set([
  "pulsemcp", "smithery", "glama", "mcp.so", "official-mcp", "mcp-registry",
]);
const MARKETPLACE_FAMILY = new Set([
  "buildwithclaude", "claude-night-market", "awesome-claude-code", "plugin-marketplace",
]);
const GITHUB_FAMILY = new Set(["github-search", "github-graphql", "github-manifest", "github"]);

/** Map a raw source label to its INDEPENDENT family. Unknown → itself. */
export function sourceFamily(source) {
  const s = String(source || "").toLowerCase().trim();
  if (REGISTRY_FAMILY.has(s)) return "mcp-registry";
  if (MARKETPLACE_FAMILY.has(s)) return "plugin-marketplace";
  if (GITHUB_FAMILY.has(s)) return "github";
  return s;
}

/** Count distinct independent families across a list of source labels. */
export function countFamilies(sources = []) {
  return new Set((sources || []).map(sourceFamily)).size;
}

/** Stable canonical key for de-duplication across sources. */
export function canonicalId({ owner, repo, host = "github" } = {}) {
  if (!owner || !repo) return null;
  const r = String(repo).toLowerCase().replace(/\.git$/, "");
  return `${String(host).toLowerCase()}:${String(owner).toLowerCase()}/${r}`;
}
```

- [ ] **Step 4: Run — verify pass**

Run: `npx vitest run tests/identity.test.mjs`
Expected: PASS.

- [ ] **Step 5: Wire into `discover.mjs`** — in Phase 2 convergence aggregation, compute `family_count` via `countFamilies(candidate.sources)` and pass it into `sourceTrust.family_count` (consumed by `blend.mjs computeFinalScore`). Replace any ad-hoc family counting with `countFamilies`. Import: `import { countFamilies, canonicalId } from "./lib/identity.mjs";`

- [ ] **Step 6: Commit**

```bash
git add scripts/lib/identity.mjs tests/identity.test.mjs scripts/discover.mjs
git commit -m "feat(discover): E3 canonical identity + independent source-family model"
```
Update RESUME-HERE: Last = E3; Next = E6.

---

## Task E6: Runtime-surface model + surface-veto gate

**Files:**
- Create: `scripts/lib/surfaces.mjs`
- Modify: `scripts/lib/decision.mjs` (add `surfaceVetoGate` + `CATEGORY_EXPECTED_SURFACE`; wire into `routeDecision`)
- Test: `tests/surfaces.test.mjs`, `tests/decision.test.mjs`

- [ ] **Step 1: Write failing tests** — `tests/surfaces.test.mjs`:

```javascript
import { describe, it, expect } from "vitest";
import { detectSurfaces } from "../scripts/lib/surfaces.mjs";

describe("detectSurfaces", () => {
  it("detects an MCP server from mcp.json", () => {
    expect(detectSurfaces(["src/index.ts", "mcp.json"])["mcp-server"]).toBe(1);
  });
  it("detects a skill from SKILL.md", () => {
    expect(detectSurfaces(["skills/foo/SKILL.md"]).skill).toBe(1);
  });
  it("returns empty for a plain research repo", () => {
    expect(Object.keys(detectSurfaces(["README.md", "paper.pdf", "train.py"]))).toHaveLength(0);
  });
});
```

Append to `tests/decision.test.mjs`:

```javascript
import { surfaceVetoGate } from "../scripts/lib/decision.mjs";

describe("surfaceVetoGate", () => {
  it("caps mcp-server INSTALL→STUDY when no mcp-server surface present", () => {
    expect(surfaceVetoGate("INSTALL-FULL", { category: "mcp-server", surfaces: {} }).tier).toBe("STUDY");
  });
  it("allows INSTALL when the expected surface is present", () => {
    expect(surfaceVetoGate("INSTALL-LITE", { category: "mcp-server", surfaces: { "mcp-server": 1 } }).tier)
      .toBe("INSTALL-LITE");
  });
  it("caps a research-with-code INSTALL-FULL with zero runtime surfaces", () => {
    expect(surfaceVetoGate("INSTALL-FULL", { category: "research-with-code", surfaces: {} }).tier).toBe("STUDY");
  });
  it("leaves study-tier candidates untouched", () => {
    expect(surfaceVetoGate("STUDY", { category: "mcp-server", surfaces: {} }).tier).toBe("STUDY");
  });
});
```

- [ ] **Step 2: Run — verify fail**

Run: `npx vitest run tests/surfaces.test.mjs tests/decision.test.mjs -t surface`
Expected: FAIL (module/function not defined).

- [ ] **Step 3: Implement `scripts/lib/surfaces.mjs`:**

```javascript
/**
 * Runtime-surface detection (E6). Maps a repo's file list to the Claude Code
 * integration surfaces it exposes — the basis for the "degree of adaptness" model
 * (install-as-MCP vs skill vs hook vs … vs study-only).
 */
export const SURFACE_MARKERS = {
  "mcp-server": ["mcp.json", ".mcp.json", "server.json"],
  skill: ["skill.md", "skills/"],
  hook: ["hooks.json", ".claude/hooks", "hooks/"],
  plugin: [".claude-plugin/plugin.json", "marketplace.json", "plugin.json"],
  subagent: [".claude/agents/", "agents/"],
  "output-style": ["output-styles/", ".claude/output-styles"],
  "slash-command": [".claude/commands/", "commands/"],
  statusline: ["statusline"],
};

/** @param {string[]} files repo file paths → {surface: 1} for each detected surface. */
export function detectSurfaces(files = []) {
  const lower = (files || []).map((f) => String(f).toLowerCase());
  const out = {};
  for (const [surface, markers] of Object.entries(SURFACE_MARKERS)) {
    if (markers.some((m) => lower.some((f) => f.includes(m.toLowerCase())))) out[surface] = 1;
  }
  return out;
}
```

- [ ] **Step 4: Add `surfaceVetoGate`** to `decision.mjs` (after `coverageGate`):

```javascript
/** Category → the runtime surface it MUST expose to be install-adoptable (E6). */
const CATEGORY_EXPECTED_SURFACE = {
  "mcp-server": "mcp-server",
  "skill-pack": "skill",
  "hook-toolkit": "hook",
};

/**
 * Surface-veto gate (E6, the "degree of adaptness" model). An INSTALL tier requires
 * a real runtime surface: mcp/skill/hook categories need their specific surface;
 * other categories that reach INSTALL-FULL need at least one surface. A high-scoring
 * research repo with no runtime surface is STUDY, never INSTALL.
 * @returns {{tier:string, note:string|null}}
 */
export function surfaceVetoGate(tier, { category, surfaces = {} } = {}) {
  if (tierRank(tier) < tierRank("INSTALL-LITE")) return { tier, note: null };
  const expected = CATEGORY_EXPECTED_SURFACE[category];
  const hasAny = Object.values(surfaces).some((v) => v > 0);
  if (expected) {
    if (!(surfaces[expected] > 0)) {
      return { tier: "STUDY", note: `surface-veto: no ${expected} surface for ${category} → STUDY` };
    }
  } else if (!hasAny) {
    return { tier: "STUDY", note: `surface-veto: no runtime surface for ${category} → STUDY` };
  }
  return { tier, note: null };
}
```

- [ ] **Step 5: Wire into `routeDecision`** — add `surfaces = {}` to the signature, and insert AFTER the coverage gate (still cap phase, before convergence cap):

```javascript
  // E6: runtime-surface veto (no surface → not install-adoptable)
  const surf = surfaceVetoGate(tier, { category, surfaces });
  if (surf.tier !== tier) {
    tier = surf.tier;
    trace.push(surf.note);
  }
```

Also include the detected surfaces in the return object for the audit trail: add `surfaces,` to the returned object.

- [ ] **Step 6: Run — verify pass**

Run: `npx vitest run tests/surfaces.test.mjs tests/decision.test.mjs`
Expected: PASS.

- [ ] **Step 7: Document** in `rubric.md` under `### D3: Claude Code Runtime Fit` — add the surface taxonomy table + the veto rule. Wire `detectSurfaces` into `discover.mjs` Phase 3/4 (populate `surfaces` from the repo file tree) and pass into `routeDecision`.

- [ ] **Step 8: Commit**

```bash
git add scripts/lib/surfaces.mjs scripts/lib/decision.mjs tests/surfaces.test.mjs tests/decision.test.mjs docs/rubric.md scripts/discover.mjs
git commit -m "feat(decision): E6 runtime-surface model + surface-veto gate (adaptness)"
```
Update RESUME-HERE: Last = E6; Next = E7.

---

## Task E7: Security depth (behavioral risk + install-time surface + MTTR)

**Files:**
- Modify: `scripts/lib/decision.mjs` (extend `assessSecurityFromEvidence` + `lateSecurityDemotion`)
- Test: `tests/decision.test.mjs`

- [ ] **Step 1: Write failing tests** — append to `tests/decision.test.mjs`:

```javascript
import { assessSecurityFromEvidence, lateSecurityDemotion } from "../scripts/lib/decision.mjs";

describe("E7 security depth", () => {
  it("flags behavioral risk (eval/install-script/network) as soft signal", () => {
    const a = assessSecurityFromEvidence([{ type: "behavioral", severity: "medium", status: "open",
      signals: ["install-script", "network"] }]);
    expect(a.behavioralRisk).toBe(true);
    expect(a.openCritical).toBe(false);
  });
  it("treats confirmed-malicious behavioral as openCritical", () => {
    const a = assessSecurityFromEvidence([{ type: "behavioral", severity: "critical",
      status: "confirmed", malicious: true }]);
    expect(a.openCritical).toBe(true);
  });
  it("flags install-surface risk (repo-controlled code execution on adoption)", () => {
    const a = assessSecurityFromEvidence([{ type: "install-surface", status: "open", severity: "high" }]);
    expect(a.installSurfaceRisk).toBe(true);
  });
  it("recent high-severity CVE (<90d) is NOT yet openCritical (MTTR grace)", () => {
    const recent = new Date(Date.now() - 10 * 86400000).toISOString();
    const a = assessSecurityFromEvidence([{ severity: "high", status: "open", date: recent }]);
    expect(a.openCritical).toBe(false);
  });
  it("critical CVE older than 30d unmitigated is openCritical", () => {
    const old = new Date(Date.now() - 40 * 86400000).toISOString();
    const a = assessSecurityFromEvidence([{ severity: "critical", status: "open", date: old }]);
    expect(a.openCritical).toBe(true);
  });
  it("lateSecurityDemotion caps INSTALL→REFERENCE on install-surface risk", () => {
    expect(lateSecurityDemotion("INSTALL-FULL", { installSurfaceRisk: true }).tier).toBe("REFERENCE");
  });
  it("behavioral risk + weak community caps INSTALL→REFERENCE", () => {
    expect(lateSecurityDemotion("INSTALL-FULL", { behavioralRisk: true, weakCommunity: true }).tier)
      .toBe("REFERENCE");
  });
});
```

> Note: tests using `Date.now()` run at execution time (not in a workflow sandbox), so this is fine here.

- [ ] **Step 2: Run — verify fail**

Run: `npx vitest run tests/decision.test.mjs -t "E7 security"`
Expected: FAIL.

- [ ] **Step 3: Extend `assessSecurityFromEvidence`** — replace the per-finding loop body to handle the new types + MTTR. The new return adds `behavioralRisk` and `installSurfaceRisk`:

```javascript
export function assessSecurityFromEvidence(
  findings = [],
  { asOfDate = new Date(), staleDays = 90 } = {},
) {
  const discounted = [];
  let openCritical = false;
  let mitigatedOptInRisk = false;
  let behavioralRisk = false;
  let installSurfaceRisk = false;
  for (const f of findings) {
    const status = String(f.status || "open").toLowerCase();
    const sev = String(f.severity || "").toLowerCase();
    const type = String(f.type || "cve").toLowerCase();
    const label = f.id || f.claim || type;

    if (status === "fixed" || status === "closed" || status === "deprecated") {
      discounted.push(`${label}: ${status} → 0 weight`);
      continue;
    }

    // Confirmed-malicious behavior is a hard signal (caller should also set safety.malwareConfirmed)
    if (type === "behavioral" && (f.malicious === true || status === "confirmed")) {
      openCritical = true;
      continue;
    }
    if (type === "behavioral") {
      behavioralRisk = true;
      continue;
    }
    if (type === "install-surface") {
      installSurfaceRisk = true;
      continue;
    }

    // CVE-style: stale-unconfirmed discount (existing behavior)
    let ageDays = null;
    if (f.date) {
      ageDays = (asOfDate.getTime() - new Date(f.date).getTime()) / 86_400_000;
      if (ageDays > staleDays && status !== "confirmed" && !f.highAuthority) {
        discounted.push(`${label}: stale ${Math.round(ageDays)}d unconfirmed → discounted`);
        continue;
      }
    }
    if (f.mitigated || f.optIn) {
      mitigatedOptInRisk = true;
      continue;
    }
    // MTTR (Decision #2): critical open >30d ⇒ openCritical; high open >90d ⇒ openCritical.
    // A dated finding inside its grace window is not yet treated as openCritical.
    if (sev === "critical") {
      if (ageDays === null || ageDays > 30) openCritical = true;
    } else if (sev === "high") {
      if (ageDays === null || ageDays > 90) openCritical = true;
    }
  }
  return { openCritical, mitigatedOptInRisk, behavioralRisk, installSurfaceRisk, discounted };
}
```

- [ ] **Step 4: Extend `lateSecurityDemotion`** to honor the new signals:

```javascript
export function lateSecurityDemotion(tier, security = {}) {
  const notes = [];
  let t = tier;
  if (security.openCritical) {
    t = capTier(t, "REFERENCE");
    notes.push("open-critical-security→cap REFERENCE");
  } else if (security.installSurfaceRisk) {
    t = capTier(t, "REFERENCE");
    notes.push("install-surface-risk→cap REFERENCE (review)");
  } else if (security.behavioralRisk && security.weakCommunity) {
    t = capTier(t, "REFERENCE");
    notes.push("behavioral-risk+weak-community→cap REFERENCE");
  } else if (security.mitigatedOptInRisk && tierRank(t) > tierRank("INSTALL-LITE")) {
    t = "INSTALL-LITE";
    notes.push("mitigated-opt-in-risk→INSTALL-LITE (config-gated)");
  }
  return { tier: t, notes };
}
```

- [ ] **Step 5: Thread `weakCommunity` in `routeDecision`** — where `sec` is derived (around the `securityFindings` block), set `sec.weakCommunity = Number(dims.D8 ?? 10) < 5;` so behavioral-risk demotion can use it. Confirm the existing `lateSecurityDemotion(tier, sec)` call passes the enriched `sec`.

- [ ] **Step 6: Run — verify pass**

Run: `npx vitest run tests/decision.test.mjs`
Expected: PASS (full suite).

- [ ] **Step 7: Document** in `rubric.md §7 Behavioral Risk Overlay` — extend from D6 publisher-concentration to: code-behavior risk (eval/install-script/network), install-time attack surface (CVE-2025-59536 class), and MTTR aging (30d critical / 90d high). Note hard-veto (confirmed malicious) routes through `safetyVeto.malwareConfirmed`.

- [ ] **Step 8: Full verification + commit**

```bash
npm run lint && npm test
git add scripts/lib/decision.mjs tests/decision.test.mjs docs/rubric.md
git commit -m "feat(decision): E7 security depth — behavioral risk, install-surface gate, MTTR aging"
```
Update RESUME-HERE: Last = E7; Phase 1 complete → run `/codex:review` on the diff.

---

## Phase 1 Done-Definition

- [ ] `npm run lint` clean (Biome) and `npm test` green at ≥80% coverage.
- [ ] All new pure functions unit-tested; `routeDecision` table-test exercises the full ordered pipeline incl. the two new gates.
- [ ] `/codex:review` run on the full Phase-1 diff; BLOCKERs fixed and re-verified.
- [ ] RESUME-HERE header + checkboxes reflect reality; memory pointer updated.
- [ ] Phase 2 (E4/E5/E8/E9 + D10/D11) remains specced for the next cycle.

---

## Self-Review (writing-plans)

- **Spec coverage:** E1 ✓ (coverageGate + rubricVersion), E2 ✓ (decisionlog), E3 ✓ (identity/families), E6 ✓ (surfaces + veto), E7 ✓ (behavioral/install-surface/MTTR). Task 0 covers the two pre-existing lint items the spec's test plan requires. Phase 2 explicitly deferred (in scope of spec, not this plan).
- **Type consistency:** gate functions all return `{tier, note}`; `assessSecurityFromEvidence` return shape extended consistently and consumed by `lateSecurityDemotion`; `detectSurfaces`→`surfaces` object keyed by surface name, consumed by `surfaceVetoGate` + `CATEGORY_EXPECTED_SURFACE`.
- **Placeholders:** none — every code step shows full code; integration steps name the file + the exact insertion and note "match actual variable names in discover.mjs" only where the existing identifiers must be confirmed against live code (not invented).
