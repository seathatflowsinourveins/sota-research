/**
 * scripts/lib/evidence.mjs
 *
 * Judge-output evidence schema for INTERPRETIVE dimension inputs (D3-D11).
 *
 * Codex GPT-5.5 consensus (2026-05-28):
 * - LLM judges fill ONLY interpretive gaps; structured GitHub/OpenSSF/package-registry
 *   evidence stays authoritative and is never overwritten by a judge.
 * - Each evidence item carries {value, source, timestamp, confidence, rationale}.
 * - A MISSING value stays `null` — never a fabricated constant (the engine's evidence
 *   contract: incomplete evidence yields a LOW score, not fake precision).
 * - Chain-of-thought is NEVER persisted: store a SHORT rationale + evidence refs only.
 *
 * Full LLM-judge wiring / ensembles / calibration are BACKLOG; this is just the schema
 * + validation so supplied evidence is well-formed and CoT can't leak into artifacts.
 */

export const EVIDENCE_FIELDS = ["value", "source", "timestamp", "confidence", "rationale"];
const MAX_RATIONALE = 280; // a short rationale, not a reasoning dump
const DISALLOWED = [
  "reasoning",
  "cot",
  "chain_of_thought",
  "chainOfThought",
  "thoughts",
  "scratchpad",
];

/**
 * Extract the numeric dimension value from either a bare number or an evidence object.
 * @param {number|{value:number}|null|undefined} provided
 * @returns {number|null}
 */
export function dimensionValue(provided) {
  if (Number.isFinite(provided)) return provided;
  if (provided && typeof provided === "object" && Number.isFinite(provided.value)) {
    return provided.value;
  }
  return null;
}

/**
 * Validate + sanitize a judge evidence item.
 * - value: finite 0-10 or null
 * - confidence: clamped to [0,1] when present
 * - rationale: trimmed to MAX_RATIONALE chars
 * - chain-of-thought fields are STRIPPED and flagged (never persisted)
 * - an evidenced (non-null) value SHOULD carry a source ref
 *
 * @param {object} item
 * @returns {{ok:boolean, errors:string[], clean:object}}
 */
export function validateJudgeEvidence(item = {}) {
  const errors = [];
  const clean = {};

  for (const k of DISALLOWED) {
    if (k in item) errors.push(`stripped chain-of-thought field: ${k}`);
  }

  const v = item.value;
  if (v == null) {
    clean.value = null;
  } else if (Number.isFinite(v) && v >= 0 && v <= 10) {
    clean.value = v;
  } else {
    errors.push(`value must be 0-10 or null (got ${JSON.stringify(v)})`);
    clean.value = null;
  }

  clean.source = typeof item.source === "string" && item.source ? item.source : null;
  clean.timestamp = typeof item.timestamp === "string" && item.timestamp ? item.timestamp : null;

  if (item.confidence != null) {
    const c = Number(item.confidence);
    if (Number.isFinite(c)) {
      clean.confidence = Math.max(0, Math.min(1, c));
    } else {
      clean.confidence = null;
      errors.push("confidence not numeric");
    }
  } else {
    clean.confidence = null;
  }

  clean.rationale =
    typeof item.rationale === "string" ? item.rationale.slice(0, MAX_RATIONALE) : null;

  // Decision-grade evidence contract: an actual value should be traceable to a source.
  if (clean.value != null && !clean.source) {
    errors.push("evidenced value missing source ref");
  }

  return { ok: errors.length === 0, errors, clean };
}
