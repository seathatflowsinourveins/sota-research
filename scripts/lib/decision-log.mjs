/**
 * scripts/lib/decision-log.mjs
 *
 * R1 (2026-05-29 convergence wiring): persist the decision pipeline's output so the
 * self-improvement loop (outcome.mjs), the audit trail, and the comparison corpus stop
 * being data-starved. Both discover.mjs and bootstrap.mjs route via routeDecision but
 * previously DISCARDED the result; this module turns each decision envelope into a
 * durable `inventory/decisions.jsonl` line + a human-readable `inventory/scan-<ts>.md`.
 *
 * The JSONL record is a backward-compatible SUPERSET of the schema documented in
 * docs/protocols/decision.md (ts/repo/action/score/category/convergence_sources/
 * codex_verdict) plus the full routeDecision envelope (trace/flags/override_applied/
 * review_required) and the gap-fit/pathway fields the outcome loop will calibrate on.
 *
 * Convergence grounding: persistence-as-system-of-record (File-as-Bus, Anthropic
 * plan-to-Memory, gpt-researcher typed state) — 8 independent source families.
 */

import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve, sep } from "node:path";
import { atomicWrite } from "./atomic-write.mjs";

/** Bump when the decisions.jsonl record shape changes (lets outcome.mjs migrate). */
export const DECISION_SCHEMA_VERSION = 1;

/**
 * Build one decisions.jsonl record from a scored candidate's routeDecision envelope.
 * The `action` is sourced from the envelope (never a separate arg) so the persisted
 * verdict can never diverge from what the engine actually decided.
 *
 * @param {object} input
 * @param {string} input.repo - "owner/name" (required; a decision with no subject is a bug)
 * @param {object} input.decision - the routeDecision() return (must carry `action`)
 * @returns {object} the JSONL record
 */
export function buildDecisionRecord({
  repo,
  category = null,
  finalScore = null,
  decision = {},
  dims = {},
  coverage = null,
  servesObjective = null,
  marginalValue = null,
  adoptionPathway = null,
  provenanceTrustTier = null,
  codexVerdict = null,
  rubricVersion = null,
  ts = null,
} = {}) {
  if (!repo) throw new Error("buildDecisionRecord: repo is required");
  if (!decision?.action) {
    throw new Error("buildDecisionRecord: decision.action is required");
  }
  const score = Number.isFinite(finalScore) ? Math.round(finalScore * 10) / 10 : null;
  return {
    ts: ts || new Date().toISOString(),
    repo,
    action: decision.action,
    score,
    category,
    convergence_sources: decision.families ?? null,
    codex_verdict: codexVerdict,
    dims: dims || {},
    coverage,
    flags: decision.flags || [],
    override_applied: decision.override_applied || [],
    review_required: decision.review_required ?? null,
    trace: decision.trace || [],
    servesObjective,
    marginalValue,
    adoptionPathway,
    provenance_trustTier: provenanceTrustTier,
    schema_version: DECISION_SCHEMA_VERSION,
    rubric_version: rubricVersion ?? decision.rubricVersion ?? null,
  };
}

/**
 * Append decision records to `<baseDir>/inventory/decisions.jsonl` (one JSON per line).
 * Append-only (never truncates the historical log). No-op for an empty list.
 *
 * @returns {{written:number, file:string|null}}
 */
export function appendDecisions(records, { baseDir = process.cwd() } = {}) {
  if (!Array.isArray(records) || records.length === 0) return { written: 0, file: null };
  const dir = join(baseDir, "inventory");
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "decisions.jsonl");
  const lines = `${records.map((r) => JSON.stringify(r)).join("\n")}\n`;
  appendFileSync(file, lines, "utf-8");
  return { written: records.length, file };
}

/**
 * Render the human-readable scan markdown: a decision-engine-ranked table PLUS an
 * auditable decision-envelope ```json block per candidate (R2 — the live workflow's
 * recommendation must BE the engine's envelope, not free-form prose).
 */
export function renderScanMarkdown(records = [], { topic = null, ts = null } = {}) {
  const stamp = ts || new Date().toISOString();
  const lines = [
    `# SOTA Scan — ${stamp}`,
    "",
    topic ? `**Topic:** ${topic}` : null,
    `**Candidates:** ${records.length}`,
    "",
    "## Recommendations (decision-engine ranked)",
    "| Action | Score | Repo | Category | Families | Flags |",
    "|---|---|---|---|---|---|",
    ...records.map(
      (r) =>
        `| ${r.action} | ${r.score ?? "?"} | ${r.repo} | ${r.category ?? "?"} | ${r.convergence_sources ?? "?"} | ${(r.flags || []).join(" ") || "-"} |`,
    ),
    "",
    "## Decision envelopes (auditable — the recommendation IS the engine verdict)",
    ...records.flatMap((r) => [
      `### ${r.repo} → ${r.action}`,
      "```json",
      JSON.stringify(
        {
          action: r.action,
          score: r.score,
          families: r.convergence_sources,
          review_required: r.review_required,
          override_applied: r.override_applied,
          servesObjective: r.servesObjective,
          marginalValue: r.marginalValue,
          adoptionPathway: r.adoptionPathway,
          trace: r.trace,
          flags: r.flags,
        },
        null,
        2,
      ),
      "```",
      "",
    ]),
  ];
  return lines.filter((l) => l !== null).join("\n");
}

/**
 * Render + atomically write the scan markdown to `<baseDir>/<scanFile>`.
 * @returns {{file:string}}
 */
export function writeScanMarkdown(
  records,
  { baseDir = process.cwd(), scanFile, topic = null } = {},
) {
  if (!scanFile) throw new Error("writeScanMarkdown: scanFile is required");
  const file = join(baseDir, scanFile);
  // Path containment: scanFile is internally generated (timestamped), but enforce the boundary
  // so a future caller can never write outside baseDir (defense-in-depth, code-review S3).
  const root = resolve(baseDir);
  const resolved = resolve(file);
  if (resolved !== root && !resolved.startsWith(root + sep)) {
    throw new Error(`writeScanMarkdown: scanFile escapes baseDir (${scanFile})`);
  }
  mkdirSync(dirname(file), { recursive: true });
  atomicWrite(file, renderScanMarkdown(records, { topic }));
  return { file };
}
