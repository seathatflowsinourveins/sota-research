/**
 * scripts/lib/provenance.mjs
 *
 * D10 Provenance/Trust — an OVERLAY, NOT a weighted rubric dimension.
 *
 * Codex GPT-5.5 consensus (2026-05-28): a weighted D10 would DOUBLE-COUNT the
 * popularity signal already in D1 (stars) + D6 (adoption) + D8 (community). So
 * provenance instead works like the D9 niche-excellence overlay: suspicious
 * astroturf signals CAP the action tier (and discount popularity-derived
 * confidence); only INDEPENDENTLY-CONFIRMED fraud/malware/impersonation routes to
 * REJECT (risk-resolution #4: escalate + cap, never auto-reject on a soft signal).
 *
 * Motivated by a real near-miss: a ChromaDB wrapper with ~42k purchased stars
 * almost reached INSTALL. The cheap, no-extra-fetch signals below would have
 * capped it to STUDY pending human review.
 *
 * IMPORTANT: every threshold here is a CONFIGURABLE DEFAULT needing local
 * calibration — NOT an empirical fact. StarScout (arXiv:2412.13459, "Six Million
 * (Suspected) Fake Stars in GitHub", ICSE 2026, CMU) informs the SIGNAL CHOICE
 * (low repo activity + lockstep bursts + high fake-star share are its strongest
 * signals) — not these specific numbers. The full detector (GHArchive star-history
 * time series, stargazer account entropy, Poisson/lockstep tests, star-giver
 * profile validation) is BACKLOG: it needs bulk data + calibration.
 */

/** Configurable defaults (NOT empirical facts — calibrate locally). */
export const PROVENANCE_DEFAULTS = {
  highStars: 1000, // only scrutinize popularity claims above this (small repos are not astroturf targets)
  forkStarMin: 0.02, // fork:star below this on a popular repo = hoarded/suspicious
  lowActivityCommits: 5, // near-zero 90d activity + high stars = StarScout's strongest signal
  minContributors: 2, // a popular repo with a single contributor is a (soft) trust signal
  spikeShareMax: 0.5, // >50% of stars in one short window = a burst (only when history is supplied)
  suspectThreshold: 2, // # of converging soft signals to escalate to "suspect"
};

/**
 * Assess repository provenance/trust from cheap, already-fetched signals.
 *
 * @param {object} signals
 *   @param {number} [signals.stars]
 *   @param {number} [signals.forks]
 *   @param {number} [signals.commits90d]
 *   @param {number} [signals.contributors]
 *   @param {number} [signals.starSpikeShare] - fraction of stars in the largest short window, if known
 *   @param {boolean} [signals.fraudConfirmed] - INDEPENDENTLY confirmed (audit/manual)
 *   @param {boolean} [signals.malwareConfirmed]
 *   @param {boolean} [signals.impersonationConfirmed]
 *   @param {object} [signals.config] - overrides for PROVENANCE_DEFAULTS
 * @returns {{trustTier:'ok'|'suspect'|'fraud', flags:string[], actionCap:(string|null),
 *            scoreConfidenceCap:number, suspicion:number, rationale:string}}
 *   `actionCap` is a decision-tier ceiling ("REJECT" for fraud, "STUDY" for suspect, null otherwise).
 *   `scoreConfidenceCap` (0..1) is a multiplier callers MAY apply to popularity-derived dims (D1/D6/D8).
 */
export function assessProvenance(signals = {}) {
  const cfg = { ...PROVENANCE_DEFAULTS, ...(signals.config || {}) };

  // Confirmed fraud/malware/impersonation is the ONLY auto-reject path (must be
  // independently verified — never inferred from a soft signal).
  const confirmed = [];
  if (signals.fraudConfirmed) confirmed.push("fraud");
  if (signals.malwareConfirmed) confirmed.push("malware");
  if (signals.impersonationConfirmed) confirmed.push("impersonation");
  if (confirmed.length > 0) {
    return {
      trustTier: "fraud",
      flags: confirmed.map((c) => `provenance:confirmed-${c}`),
      actionCap: "REJECT",
      scoreConfidenceCap: 0,
      suspicion: Number.POSITIVE_INFINITY,
      rationale: `independently-confirmed ${confirmed.join("+")} → REJECT`,
    };
  }

  const stars = Number(signals.stars) || 0;
  const forks = Number(signals.forks) || 0;
  const commits = Number(signals.commits90d) || 0;
  const flags = [];
  let suspicion = 0;

  // Only scrutinize repos making a real popularity claim — protects genuine
  // low-star niche repos (the "low-star can be best-in-area" rule).
  if (stars >= cfg.highStars) {
    const forkStar = stars > 0 ? forks / stars : 0;
    if (forkStar < cfg.forkStarMin) {
      suspicion++;
      flags.push(`provenance:low-fork-star(${forkStar.toFixed(3)})`);
    }
    if (commits < cfg.lowActivityCommits) {
      suspicion++;
      flags.push(`provenance:high-stars-low-activity(${commits}c/90d)`);
    }
    if (Number.isFinite(signals.contributors) && signals.contributors < cfg.minContributors) {
      suspicion++;
      flags.push(`provenance:single-contributor(${signals.contributors})`);
    }
    if (Number.isFinite(signals.starSpikeShare) && signals.starSpikeShare > cfg.spikeShareMax) {
      suspicion++;
      flags.push(`provenance:star-spike(${(signals.starSpikeShare * 100).toFixed(0)}%)`);
    }
  }

  if (suspicion >= cfg.suspectThreshold) {
    return {
      trustTier: "suspect",
      flags,
      actionCap: "STUDY",
      scoreConfidenceCap: 0.5,
      suspicion,
      rationale: `${suspicion} converging astroturf signals → cap STUDY + human review (do NOT auto-reject)`,
    };
  }
  if (suspicion === 1) {
    flags.push("provenance:watch");
    return {
      trustTier: "ok",
      flags,
      actionCap: null,
      scoreConfidenceCap: 0.8,
      suspicion,
      rationale: "1 soft signal — noted for audit, not capping",
    };
  }
  return {
    trustTier: "ok",
    flags,
    actionCap: null,
    scoreConfidenceCap: 1,
    suspicion,
    rationale:
      stars >= cfg.highStars
        ? "no astroturf signals on a popular repo"
        : "below scrutiny threshold (stars low)",
  };
}
