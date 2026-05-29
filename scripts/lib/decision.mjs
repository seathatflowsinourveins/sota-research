/**
 * scripts/lib/decision.mjs
 *
 * THE single decision engine for sota-research. Replaces the divergent decision
 * logic previously duplicated in bootstrap.mjs `decisionFromScore` and implied
 * (differently) by the docs. One engine, used by discover.mjs + bootstrap.mjs.
 *
 * Pipeline order (per Codex GPT-5.5 adversarial review, 2026-05-28):
 *   hard safety veto → (score, already convergence-capped by blend.mjs) →
 *   base tier → override FLOOR → convergence ACTION-cap → late security demotion
 *
 * Design principles:
 * - SAFETY gates are HARD (license / archived / confirmed-malware) → REJECT.
 * - QUALITY gates are SOFT → flags that inform tier + triage, never auto-REJECT
 *   (the "low-star niche repo can be high quality for pattern study" rule).
 * - Overrides are MONOTONIC FLOORS capped at STUDY — they NEVER reach INSTALL.
 *   Only the score + convergence + human review can produce an INSTALL tier.
 * - Convergence is counted in INDEPENDENT SOURCE FAMILIES, not raw source hits
 *   (registry mirrors / awesome-list derivatives must not inflate trust).
 * - A late security finding can DEMOTE regardless of score, but SCOPED, not
 *   blanket: a mitigated opt-in risk → INSTALL-LITE (config-gated), not REJECT.
 */

/** Action tiers, ordered weakest → strongest. */
export const TIERS = ["REJECT", "WATCH", "REFERENCE", "STUDY", "INSTALL-LITE", "INSTALL-FULL"];
const RANK = Object.fromEntries(TIERS.map((t, i) => [t, i]));

export function tierRank(tier) {
  if (!(tier in RANK)) throw new Error(`Unknown tier: ${tier}`);
  return RANK[tier];
}
function higher(a, b) {
  return tierRank(a) >= tierRank(b) ? a : b;
}
function lower(a, b) {
  return tierRank(a) <= tierRank(b) ? a : b;
}
/** Raise `tier` up to at least `floor` (never lowers). */
export function floorTier(tier, floor) {
  return higher(tier, floor);
}
/** Lower `tier` down to at most `cap` (never raises). */
export function capTier(tier, cap) {
  return lower(tier, cap);
}

const INSTALL_LITE_CATEGORIES = new Set(["mcp-server", "skill-pack", "hook-toolkit"]);
const PERMISSIVE_LICENSES = ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "MPL-2.0"];

/**
 * SAFETY veto — HARD. Any reason → REJECT. Returns {vetoed, reasons[]}.
 * Note: bot-author is intentionally NOT here (it is a soft risk signal — many
 * healthy repos use automation; see qualityFlags).
 */
export function safetyVeto({
  license,
  isArchived,
  isDisabled,
  isMirror,
  malwareConfirmed,
  category,
} = {}) {
  const reasons = [];
  const codeLibGPL = category === "code-library" && /^(?:L?GPL)/i.test(license || "");
  if (!license || (!PERMISSIVE_LICENSES.includes(license) && !codeLibGPL)) {
    reasons.push(`license:${license || "none"}`);
  }
  if (isArchived) reasons.push("archived");
  if (isDisabled) reasons.push("disabled");
  if (isMirror) reasons.push("mirror");
  if (malwareConfirmed) reasons.push("malware/honeypot-confirmed");
  return { vetoed: reasons.length > 0, reasons };
}

/**
 * QUALITY soft flags — never reject; they inform tier + triage prioritization.
 * Returns string[].
 */
export function qualityFlags({ stale, minimalSubstance, weakCategoryFit, botAuthorDominant } = {}) {
  const flags = [];
  if (stale) flags.push("recency:stale");
  if (minimalSubstance) flags.push("substance:minimal");
  if (weakCategoryFit) flags.push("category-fit:weak");
  if (botAuthorDominant) flags.push("risk:bot-author-dominant"); // signal only (Codex)
  return flags;
}

/** Base tier from the score band (no source gate here — convergence is a cap). */
export function baseTier(score, category) {
  if (score >= 90) return "INSTALL-FULL";
  if (score >= 80) return INSTALL_LITE_CATEGORIES.has(category) ? "INSTALL-LITE" : "STUDY";
  if (score >= 70) return "STUDY";
  if (score >= 60) return "REFERENCE";
  if (score >= 40) return "WATCH";
  return "REJECT";
}

/**
 * Convergence ACTION cap by INDEPENDENT source families (Codex Q4).
 * Belt-and-suspenders with the post-blend SCORE cap in blend.mjs: caps apply to
 * BOTH the score AND the final action, so a strong Codex verdict cannot smuggle
 * a single-source candidate into an install tier.
 */
export function convergenceActionCap(families) {
  const f = Number(families) || 0;
  if (f >= 4) return { cap: "INSTALL-FULL", review: false };
  if (f === 3) return { cap: "INSTALL-LITE", review: false };
  if (f === 2) return { cap: "INSTALL-LITE", review: true }; // install only after manual review
  return { cap: "STUDY", review: false }; // <=1 family → STUDY ceiling
}

/**
 * Override FLOORS — monotonic, capped at STUDY, NEVER produce an INSTALL tier
 * (Codex Q2). dims: {D1..D9}. Returns {floor, applied[]}.
 * Conflict rule: if code quality is weak (D4<5) or there is an open critical
 * security finding, novelty/niche escape hatches floor to REFERENCE, not STUDY.
 */
export function overrideFloor(dims = {}, { securityWeak = false } = {}) {
  const d = (k) => Number(dims[k]) || 0;
  const applied = [];
  let floor = "REJECT";
  const escapeFloor = securityWeak || d("D4") < 5 ? "REFERENCE" : "STUDY";
  // (a) genuine novelty + Claude-Code runtime fit override low popularity
  if (d("D7") >= 7 && d("D3") >= 7 && d("D1") < 3) {
    floor = higher(floor, escapeFloor);
    applied.push("novelty+fit>low-stars");
  }
  // (b) D9 niche-excellence overlay escape hatch (not a weighted dimension)
  if (d("D9") >= 8) {
    floor = higher(floor, escapeFloor);
    applied.push("niche-excellence");
  }
  // (c) stale-but-high-quality static repo is still a valuable reference pattern
  if (d("D2") < 5 && d("D4") >= 8 && d("D7") >= 7) {
    floor = higher(floor, "REFERENCE");
    applied.push("stale-but-quality-pattern");
  }
  return { floor, applied };
}

/**
 * Late security demotion — SCOPED, not blanket (the playwright-mcp lesson).
 * security: {openCritical?, mitigatedOptInRisk?}. Returns {tier, notes[]}.
 */
export function lateSecurityDemotion(tier, security = {}) {
  const notes = [];
  let t = tier;
  if (security.openCritical) {
    t = capTier(t, "REFERENCE");
    notes.push("open-critical-security→cap REFERENCE");
  } else if (security.mitigatedOptInRisk && tierRank(t) > tierRank("INSTALL-LITE")) {
    // e.g. opt-in RCE tool, off by default (playwright-mcp): INSTALL-FULL → INSTALL-LITE
    t = "INSTALL-LITE";
    notes.push("mitigated-opt-in-risk→INSTALL-LITE (config-gated)");
  }
  return { tier: t, notes };
}

/**
 * Derive the security signal from dated, status-tagged findings — the systemic fix
 * for stale-evidence bias (generalizes the playwright-mcp lesson, added 2026-05-28).
 * A FIXED/closed/deprecated finding counts ZERO weight (no stale veto); an unconfirmed
 * claim older than `staleDays` is discounted unless high-authority. Only CURRENT open
 * critical/high findings set `openCritical`; mitigated or opt-in risks set
 * `mitigatedOptInRisk`. Returns the discounted findings for the audit trail.
 *
 * finding: { id?, claim?, severity, status('open'|'fixed'|'closed'|'deprecated'|'confirmed'),
 *            date?, mitigated?, optIn?, highAuthority? }
 *
 * @returns {{openCritical:boolean, mitigatedOptInRisk:boolean, discounted:string[]}}
 */
export function assessSecurityFromEvidence(
  findings = [],
  { asOfDate = new Date(), staleDays = 90 } = {},
) {
  const discounted = [];
  let openCritical = false;
  let mitigatedOptInRisk = false;
  for (const f of findings) {
    const status = String(f.status || "open").toLowerCase();
    const sev = String(f.severity || "").toLowerCase();
    const label = f.id || f.claim || "finding";
    // FIXED / closed / deprecated → 0 weight (a since-fixed issue must NOT sink a verdict)
    if (status === "fixed" || status === "closed" || status === "deprecated") {
      discounted.push(`${label}: ${status} → 0 weight`);
      continue;
    }
    // Stale + unconfirmed + not high-authority → discounted
    if (f.date) {
      const ageDays = (asOfDate.getTime() - new Date(f.date).getTime()) / 86_400_000;
      if (ageDays > staleDays && status !== "confirmed" && !f.highAuthority) {
        discounted.push(`${label}: stale ${Math.round(ageDays)}d unconfirmed → discounted`);
        continue;
      }
    }
    if (f.mitigated || f.optIn) {
      mitigatedOptInRisk = true;
    } else if (sev === "critical" || sev === "high") {
      openCritical = true;
    }
  }
  return { openCritical, mitigatedOptInRisk, discounted };
}

/**
 * Claim-freshness gate (Codex GPT-5.5, 2026-05-28). Even a debiased reconciler can
 * embed a STALE issue/release/security claim it never re-verified this run. So: an
 * INSTALL verdict may NOT rest on install-affecting claims that were not refreshed
 * (live-bound to their source object) during this run. If not refreshed, cap at STUDY.
 * `installClaimsRefreshed` defaults true (backward-compatible); callers that route on
 * issue/release/security claims should pass the real refresh status.
 *
 * @returns {{tier:string, note:string|null}}
 */
export function claimFreshnessGate(tier, { installClaimsRefreshed = true } = {}) {
  if (installClaimsRefreshed === false && tierRank(tier) > tierRank("STUDY")) {
    return {
      tier: "STUDY",
      note: "claim-freshness-gate: install claims not refreshed this run → STUDY",
    };
  }
  return { tier, note: null };
}

/**
 * Objective-relevance + marginal-value gate (added 2026-05-28 after the `codeg` miss:
 * a desktop session-dashboard reached a top-3 "install for workflow-feature quality"
 * verdict despite NOT improving the workflow features and overlapping existing tools).
 *
 * An INSTALL verdict requires the candidate to (a) actually SERVE the stated objective
 * and (b) provide real MARGINAL value over the already-installed stack. A repo can be
 * high-quality in the abstract yet irrelevant or duplicative HERE — that is STUDY at most,
 * never INSTALL. This stops absolute-feature-count optimism and re-introduced popularity
 * bias from producing shiny-but-pointless installs.
 *
 * @param {string} tier
 * @param {{servesObjective?:boolean, marginalValue?:('high'|'medium'|'low'|'none'|'duplicate')}} opts
 * @returns {{tier:string, note:string|null}}
 */
export function objectiveRelevanceGate(
  tier,
  { servesObjective = true, marginalValue = "medium" } = {},
) {
  if (tierRank(tier) <= tierRank("STUDY")) return { tier, note: null };
  const weak =
    servesObjective === false ||
    marginalValue === "low" ||
    marginalValue === "none" ||
    marginalValue === "duplicate";
  if (weak) {
    return {
      tier: "STUDY",
      note: `objective-relevance-gate: servesObjective=${servesObjective} marginalValue=${marginalValue} → STUDY`,
    };
  }
  return { tier, note: null };
}

/**
 * Full routing pipeline. Returns the decision + an auditable trace.
 *
 * @param {object} input
 * @param {number} input.score   - final blended score (0-100, already convergence-score-capped)
 * @param {string} input.category
 * @param {number} input.families - independent source-family count
 * @param {object} input.dims    - {D1..D9} dimension scores (0-10); missing → 0
 * @param {object} input.safety  - raw safety fields; if omitted, SAFETY is assumed
 *                                  verified upstream (discover.mjs phase-3 hard filter)
 * @param {object} input.quality - soft quality booleans
 * @param {object} input.security- {openCritical?, mitigatedOptInRisk?}
 * @param {string} input.rubricVersion - tie the decision to a rubric version (audit)
 * @param {object} input.provenance - D10 trust overlay from assessProvenance(): {trustTier, flags, actionCap}.
 *                                     'fraud' -> REJECT; 'suspect' -> cap action tier + human review.
 */
export function routeDecision({
  score = 0,
  category = "code-library",
  families = 1,
  dims = {},
  safety = {},
  quality = {},
  security = {},
  securityFindings = null,
  installClaimsRefreshed = true,
  servesObjective = true,
  marginalValue = "medium",
  provenance = null,
  rubricVersion = null,
} = {}) {
  const trace = [];

  // 1. HARD safety veto + verification status. INSTALL is FAIL-CLOSED (Codex BLOCKER):
  //    a candidate whose safety was neither checked here nor verified upstream CANNOT
  //    reach an INSTALL tier (bootstrap previously routed named targets with no safety).
  const hasSafetyData =
    safety &&
    (safety.license !== undefined ||
      safety.isArchived !== undefined ||
      safety.isDisabled !== undefined ||
      safety.isMirror !== undefined ||
      safety.malwareConfirmed !== undefined);
  let safetyVerified = false;
  if (hasSafetyData) {
    const veto = safetyVeto({ ...safety, category });
    if (veto.vetoed) {
      return {
        action: "REJECT",
        reason: "safety-veto",
        flags: [],
        review_required: false,
        override_applied: [],
        families,
        trace: [`safety-veto:${veto.reasons.join(",")}`],
        rubricVersion,
      };
    }
    safetyVerified = true;
  } else if (safety && (safety.verified === true || safety.passedUpstream === true)) {
    safetyVerified = true;
    trace.push("safety:verified-upstream");
  } else {
    trace.push("safety:UNVERIFIED");
  }

  // 1b. Provenance fraud — INDEPENDENTLY confirmed only (malware / impersonation /
  //     purchased-star fraud) → REJECT, like a hard safety veto (Codex risk-resolution #4:
  //     soft astroturf signals never auto-reject; only confirmed fraud does).
  if (provenance && provenance.trustTier === "fraud") {
    return {
      action: "REJECT",
      reason: "provenance-fraud",
      flags: Array.isArray(provenance.flags) ? provenance.flags : [],
      review_required: false,
      override_applied: [],
      families,
      trace: [`provenance-fraud:${provenance.rationale || "confirmed"}`],
      rubricVersion,
    };
  }

  const flags = qualityFlags(quality);
  if (provenance && Array.isArray(provenance.flags) && provenance.trustTier !== "fraud") {
    flags.push(...provenance.flags);
  }

  // Derive security from dated, status-tagged findings when provided (FIXED/stale
  // findings discounted — the systemic stale-evidence-bias fix). Explicit `security`
  // booleans override the derived signal.
  let sec = security;
  if (securityFindings) {
    const assessed = assessSecurityFromEvidence(securityFindings);
    if (assessed.discounted.length) trace.push(`security-discounted:${assessed.discounted.length}`);
    // OR-combine: explicit `security` may only ADD risk, never CANCEL an evidenced
    // finding (Codex MAJOR: `{...assessed, ...security}` let `openCritical:false` bypass demotion).
    sec = {
      openCritical: assessed.openCritical || security.openCritical === true,
      mitigatedOptInRisk: assessed.mitigatedOptInRisk || security.mitigatedOptInRisk === true,
      discounted: assessed.discounted,
    };
  }

  // 2. base tier from the (already convergence-score-capped) score
  let tier = baseTier(score, category);
  trace.push(`base:${tier}(score=${score})`);

  // 3. override FLOORS (raise only, capped at STUDY)
  const { floor, applied } = overrideFloor(dims, { securityWeak: !!sec.openCritical });
  if (tierRank(floor) > tierRank(tier)) {
    tier = floor;
    trace.push(`floor:${tier}(${applied.join("|")})`);
  }

  // 4. convergence ACTION cap by independent families (lower only)
  const { cap, review } = convergenceActionCap(families);
  if (tierRank(tier) > tierRank(cap)) {
    tier = cap;
    trace.push(`action-cap:${tier}(families=${families})`);
  }

  // 4b. provenance overlay — a "suspect" trust verdict (converging astroturf signals)
  //     caps the action tier and escalates to human review; it NEVER auto-rejects.
  if (provenance && provenance.trustTier === "suspect" && provenance.actionCap) {
    if (tierRank(tier) > tierRank(provenance.actionCap)) {
      tier = capTier(tier, provenance.actionCap);
      trace.push(`provenance-cap:${tier}(${provenance.rationale || "suspect astroturf signals"})`);
    }
  }

  // 5. late security demotion (scoped, from current-status-weighted evidence)
  const dem = lateSecurityDemotion(tier, sec);
  if (dem.tier !== tier) {
    tier = dem.tier;
    trace.push(...dem.notes);
  }

  // 6. claim-freshness gate: install verdicts require run-fresh issue/release/security claims
  const fresh = claimFreshnessGate(tier, { installClaimsRefreshed });
  if (fresh.tier !== tier) {
    tier = fresh.tier;
    trace.push(fresh.note);
  }

  // 7. objective-relevance + marginal-value gate (the codeg fix): INSTALL requires the
  //    candidate to actually serve the objective AND beat the existing stack.
  const rel = objectiveRelevanceGate(tier, { servesObjective, marginalValue });
  if (rel.tier !== tier) {
    tier = rel.tier;
    trace.push(rel.note);
  }

  // 8. FAIL-CLOSED safety: no INSTALL tier without verified safety (Codex BLOCKER).
  if (!safetyVerified && tierRank(tier) > tierRank("STUDY")) {
    tier = "STUDY";
    trace.push("safety-unverified→STUDY (fail-closed)");
  }

  // INSTALL tiers always require human gate (convergence-cycle Phase 1); a "suspect"
  // provenance verdict also escalates to human review even after the cap.
  const review_required =
    review ||
    tier === "INSTALL-FULL" ||
    tier === "INSTALL-LITE" ||
    (provenance != null && provenance.trustTier === "suspect");

  return {
    action: tier,
    flags,
    review_required,
    override_applied: applied,
    families,
    trace,
    rubricVersion,
  };
}
