/**
 * Shared score-blending logic — reconciled to the documented formula
 * (docs/rubric.md Step D) and to Codex's source-independence requirement.
 *
 * Previously this file defined `convergence_factor` as rubric↔codex AGREEMENT,
 * colliding with the docs' meaning (source-diversity convergence). That divergence
 * is removed: convergence_factor now means source-family convergence, exactly as
 * the rubric documents.
 *
 * Formula:
 *   convergence_factor = 0.80 + min(0.05 * independent_families, 0.20)   // 1→0.80 … 4+→1.00
 *   final = 0.6 * (rubric_score * convergence_factor) + 0.4 * codex_score
 *
 * Post-blend SCORE caps by INDEPENDENT families (belt-and-suspenders with the
 * ACTION cap in decision.mjs — Codex Q4: caps apply to BOTH score and action):
 *   families <= 1 → cap 80   |   families == 2 → cap 90   |   families >= 3 → no cap
 */

/**
 * @param {object} params
 * @param {number} params.rubric_score - rubric-derived score (0-100)
 * @param {number} params.codex_score  - Codex consensus score (0-100)
 * @param {number} params.source_count - raw discovery-source hits (fallback)
 * @param {object} [params.sourceTrust] - {family_count, shannon_entropy, type_weight};
 *        when present, `family_count` (INDEPENDENT families) drives convergence,
 *        so registry mirrors / awesome-list derivatives cannot inflate trust.
 * @returns {number} final blended score (0-100)
 */
export function computeFinalScore({
  rubric_score = 0,
  codex_score = 0,
  source_count = 1,
  sourceTrust = null,
}) {
  // Independent source families drive convergence — NOT raw source hits.
  const families =
    sourceTrust && Number.isFinite(sourceTrust.family_count)
      ? sourceTrust.family_count
      : source_count;

  const convergence_factor = 0.8 + Math.min(0.05 * families, 0.2); // 0.80 (1) → 1.00 (4+)

  let blended = 0.6 * (rubric_score * convergence_factor) + 0.4 * codex_score;

  // Post-blend SCORE caps per independent-family count
  if (families <= 1) {
    blended = Math.min(blended, 80);
  } else if (families === 2) {
    blended = Math.min(blended, 90);
  }
  // families >= 3: no cap

  return Math.max(0, Math.min(100, blended));
}
