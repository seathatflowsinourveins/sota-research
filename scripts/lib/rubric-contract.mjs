/**
 * scripts/lib/rubric-contract.mjs
 *
 * R13-scoped (2026-05-29 convergence wiring): a SCOPED, executable contract test asserting
 * that every dimension / overlay / gate the rubric DECLARES has a LIVE producer wired into the
 * decision path — EXCEPT an explicit `KNOWN_BACKLOG` allowlist of work that is deliberately
 * not wired yet. This is the structural antidote to the repo's disease (over-specification vs
 * implementation): if a producer is deleted, the contract bites in CI.
 *
 * GPT-5.5 verdict (folded in): make it a scoped CI/test-only assertion against a CURATED
 * declared-producer map IN CODE — do NOT parse aspirational/future docs, and do NOT make it a
 * load-time hard-fail in discover.mjs. So: no markdown is read here; the map references real
 * exported function values; the test (tests/rubric-contract.test.mjs) wires this in.
 *
 * Soft-gate note: this contract checks that producers EXIST and are wired, never that any
 * candidate passes a gate — it does not change routing or reject anything.
 */

// D1/D2 (GraphQL) + D5–D8 (agent-supplied, schema-validated) producer.
import { scoreRepo } from "../score.mjs";
// D3 adoption-pathway producers.
import { d3FromPathway, pathwayFromCategory } from "./d3-pathway.mjs";
// Decision-engine gates.
import {
  claimFreshnessGate,
  convergenceActionCap,
  d3PathwayVeto,
  lateSecurityDemotion,
  objectiveRelevanceGate,
  overrideFloor,
  safetyVeto,
} from "./decision.mjs";
// D4 OpenSSF/probe evidence + evidence-coverage gate.
import { evidenceCoverageGate, validateJudgeEvidence } from "./evidence.mjs";
// D11 gap-fit overlay.
import { assessGapFit } from "./gap-fit.mjs";
// D10 provenance overlay.
import { assessProvenance } from "./provenance.mjs";

/**
 * The CURATED declared-producer map: each rubric-declared dimension/overlay/gate → the live
 * producer (an exported function) wired into the path. A producer being `undefined`/`null`
 * (e.g. removed from a module) means the declared item is no longer wired → the contract fails.
 *
 * D5–D8 share `scoreRepo` (which validates agent-supplied evidence via the judge schema) plus
 * `validateJudgeEvidence` — there is no separate per-dimension producer function, and inventing
 * one would be the very over-specification this guards against.
 */
export const RUBRIC_PRODUCERS = {
  // Dimensions
  D1: scoreRepo, // stars (GraphQL)
  D2: scoreRepo, // maintenance velocity (GraphQL)
  D3: d3FromPathway, // Claude-Code runtime fit (pathway ladder, evidence-capped)
  "D3-category": pathwayFromCategory, // category → adoption pathway
  D4: validateJudgeEvidence, // code quality incl. OpenSSF Scorecard probe_status (R7)
  D5: scoreRepo, // ingestion friendliness (agent evidence)
  D6: scoreRepo, // adoption signal (agent evidence + publisher-risk in scoreRepo)
  D7: scoreRepo, // conceptual novelty (agent evidence)
  D8: scoreRepo, // community consensus (agent evidence)
  // Overlays (NOT weighted dims — decision-layer mechanisms)
  D9: overrideFloor, // niche-excellence escape hatch
  D10: assessProvenance, // provenance/trust overlay
  D11: assessGapFit, // gap-fit / marginal-lift overlay
  // Decision gates (decision.mjs pipeline)
  "safety-veto": safetyVeto,
  "convergence-action-cap": convergenceActionCap,
  "evidence-coverage-gate": evidenceCoverageGate,
  "d3-pathway-veto": d3PathwayVeto,
  "late-security-demotion": lateSecurityDemotion,
  "claim-freshness-gate": claimFreshnessGate,
  "objective-relevance-gate": objectiveRelevanceGate,
};

/** The rubric-declared items this contract REQUIRES to be wired (everything except backlog). */
export const DECLARED_CONTRACT = Object.keys(RUBRIC_PRODUCERS);

/**
 * Explicit allowlist of rubric-declared work that is KNOWN to be unwired (deferred) — these
 * must NOT fail the contract (the R13 scoping rule). Each is documented elsewhere:
 *  - honeypot-active-malware: Appendix A.8 hard-SAFETY gate is a stub (no active-malware detector)
 *  - weight-auto-tuning: 2nd half of G5 — calibration is manual-gated until a labeled oracle exists
 *  - live-multi-source-fanout: 7 of 8 phase-1 sources are NOT_RUN stubs (workflow/MCP layer's job)
 */
export const KNOWN_BACKLOG = [
  "honeypot-active-malware",
  "weight-auto-tuning",
  "live-multi-source-fanout",
];

/**
 * Check the rubric contract: every DECLARED_CONTRACT item must have a live producer (a function)
 * in the producer map. Returns the missing items (declared but no wired producer). KNOWN_BACKLOG
 * is intentionally NOT part of DECLARED_CONTRACT, so it never counts as missing.
 *
 * @param {object} [opts]
 *   @param {object} [opts.producers] - the producer map (default RUBRIC_PRODUCERS; injectable for tests)
 * @returns {{ok:boolean, missing:string[], checked:number}}
 */
export function checkRubricContract({ producers = RUBRIC_PRODUCERS } = {}) {
  const missing = DECLARED_CONTRACT.filter((key) => typeof producers[key] !== "function");
  return { ok: missing.length === 0, missing, checked: DECLARED_CONTRACT.length };
}

/**
 * Assert the rubric contract; throws with the missing items if any declared producer is unwired.
 * CI/test-only — NOT called at module load in discover.mjs (advisory, never a load-time hard-fail).
 *
 * @param {object} [opts] - forwarded to checkRubricContract
 */
export function assertRubricContract(opts = {}) {
  const { ok, missing } = checkRubricContract(opts);
  if (!ok) {
    throw new Error(
      `rubric-contract: ${missing.length} declared producer(s) not wired: ${missing.join(", ")}. ` +
        `Wire the producer or move the item to KNOWN_BACKLOG with a documented reason.`,
    );
  }
}
