/**
 * scripts/lib/gap-fit.mjs
 *
 * D11 Gap-Fit / Marginal-Lift — a GATE input, NOT a weighted rubric dimension.
 *
 * Codex GPT-5.5 consensus (2026-05-28): a weighted D11 would overlap D7 (novelty)
 * and isn't intrinsic quality at all — it is LOCAL marginal utility against our
 * existing stack. So gap-fit produces the inputs the engine ALREADY consumes in
 * `decision.mjs` → `objectiveRelevanceGate` (servesObjective, marginalValue),
 * which gates/caps installs without adding score. That gate was built for exactly
 * this (the "codeg" miss: a tool overlapping the existing stack reached top-3 install).
 *
 * Risk-resolution #1: strategic priority is sourced in order —
 *   user scan-intent  →  inventory.strategic_priorities / gap priority  →  conservative heuristic.
 *
 * A candidate that fills a NAMED gap = high lift; that ENHANCES an existing layer
 * (and is better than installed) = medium; that DUPLICATES a saturated layer or is
 * OUT-OF-SCOPE for the runtime = none/duplicate → STUDY at most.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Load the canonical stack inventory (config/stack-inventory.json).
 * @param {string} [baseDir]
 * @returns {object}
 */
export function loadStackInventory(baseDir = process.cwd()) {
  const file = join(baseDir, "config", "stack-inventory.json");
  return JSON.parse(readFileSync(file, "utf-8"));
}

/** Does free text mention this gap id or its words? (cheap heuristic fallback) */
function mentions(text, gapId) {
  if (!text) return false;
  const hay = String(text).toLowerCase();
  if (hay.includes(gapId.toLowerCase())) return true;
  return gapId
    .split("-")
    .filter((w) => w.length > 3)
    .some((w) => hay.includes(w));
}

/**
 * Map a candidate against the stack inventory into objective-relevance-gate inputs.
 *
 * Classification is supplied as evidence when known (fillsGapId / enhancesLayer /
 * duplicatesOf / outOfScope / betterThanInstalled); otherwise a conservative
 * keyword fallback derives it. Explicit fields always win.
 *
 * @param {object} candidate
 *   { name?, fillsGapId?, enhancesLayer?, duplicatesOf?, outOfScope?, betterThanInstalled?, keywords? }
 * @param {object} inventory - parsed stack-inventory.json
 * @param {object} [opts]
 *   @param {string} [opts.scanIntent] - the user's stated discovery intent (highest-priority source)
 * @returns {{servesObjective:boolean, marginalValue:('high'|'medium'|'low'|'none'|'duplicate'),
 *            gapFilled:(string|null), lift:string, rationale:string, flags:string[]}}
 */
export function assessGapFit(candidate = {}, inventory = {}, { scanIntent = "" } = {}) {
  const gaps = Array.isArray(inventory.gaps) ? inventory.gaps : [];
  const priorities = Array.isArray(inventory.strategic_priorities)
    ? inventory.strategic_priorities
    : [];
  const layers = inventory.layers || {};
  const flags = [];
  const text = `${candidate.name || ""} ${(candidate.keywords || []).join(" ")}`;

  // 1. Out of scope for the Claude-Code runtime → no lift.
  if (candidate.outOfScope === true) {
    return {
      servesObjective: false,
      marginalValue: "none",
      gapFilled: null,
      lift: "out-of-scope",
      rationale: "candidate is out-of-scope for the Claude Code runtime",
      flags: ["gap-fit:out-of-scope"],
    };
  }

  // 2. Explicit duplicate of an installed/saturated capability → no marginal lift.
  if (candidate.duplicatesOf) {
    return {
      servesObjective: false,
      marginalValue: "duplicate",
      gapFilled: null,
      lift: "duplicate",
      rationale: `duplicates already-installed ${candidate.duplicatesOf}`,
      flags: ["gap-fit:duplicate"],
    };
  }

  // 3. Fills a NAMED gap (explicit or keyword-derived).
  const gapId =
    candidate.fillsGapId ||
    gaps.find((g) => mentions(text, g.id) || mentions(scanIntent, g.id))?.id;
  const gap = gaps.find((g) => g.id === gapId);
  if (gap) {
    const isStrategic = priorities.includes(gap.id) || mentions(scanIntent, gap.id);
    if (gap.build_not_install) {
      flags.push("gap-fit:build-not-install");
      return {
        servesObjective: true,
        marginalValue: "medium",
        gapFilled: gap.id,
        lift: "fills-build-gap",
        rationale: `addresses gap '${gap.id}' but that gap is BUILD-not-install → study the pattern, do not install an external`,
        flags,
      };
    }
    const marginalValue = isStrategic || gap.priority === "high" ? "high" : "medium";
    if (isStrategic) flags.push("gap-fit:strategic-priority");
    return {
      servesObjective: true,
      marginalValue,
      gapFilled: gap.id,
      lift: "fills-gap",
      rationale: `fills named gap '${gap.id}' (${gap.priority || "med"} priority${isStrategic ? ", strategic" : ""})`,
      flags,
    };
  }

  // 4. Enhances an existing layer — marginal only if demonstrably better than installed.
  const layer = candidate.enhancesLayer && layers[candidate.enhancesLayer];
  if (layer) {
    if (candidate.betterThanInstalled === true) {
      return {
        servesObjective: true,
        marginalValue: "medium",
        gapFilled: null,
        lift: "enhances-layer",
        rationale: `enhances '${candidate.enhancesLayer}' with a demonstrated improvement over installed`,
        flags: ["gap-fit:enhance"],
      };
    }
    return {
      servesObjective: false,
      marginalValue: layer.saturated ? "duplicate" : "low",
      gapFilled: null,
      lift: "enhances-saturated",
      rationale: `targets saturated layer '${candidate.enhancesLayer}' without a proven edge over installed`,
      flags: ["gap-fit:saturated-layer"],
    };
  }

  // 5. Conservative fallback: no clear gap-fit → low marginal value (gate will cap to STUDY).
  return {
    servesObjective: true,
    marginalValue: "low",
    gapFilled: null,
    lift: "unclear",
    rationale: "no clear gap-fit against the stack inventory → conservative low marginal value",
    flags: ["gap-fit:unclear"],
  };
}
