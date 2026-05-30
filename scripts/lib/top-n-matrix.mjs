/**
 * scripts/lib/top-n-matrix.mjs
 *
 * R5 — Comparative Top-N per-dimension matrix (un-deferred by the live multi-source fan-out, F1-F4).
 *
 * A PURE PROJECTION: rows × [D1-D8, final_score, Tier, AdoptionPathway, Families, Provenance,
 * GapFit] — a cheap render of fields routeDecision / decision-log ALREADY produce. No new scoring,
 * no new judgment (ADR-R5: "ship ONLY the pure-projection table"; the YAGNI skeptic + GPT-5.5 said
 * do NOT build a comparison ENGINE — just project what the pipeline already decided). Columns are
 * enum/number values straight from decision.mjs / d3-pathway.mjs / provenance.mjs / gap-fit.mjs.
 *
 * Deferral guard: the original reason to defer was "mostly-empty rows" when scans rarely yielded
 * ≥2 scored same-category candidates. The live fan-out fixed that, so this renders the matrix ONLY
 * when ≥2 same-category scored candidates exist — otherwise null (never a one-row "comparison").
 */

import { compareByDecision } from "./decision.mjs";

const DIMENSIONS = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];
const COLUMNS = [
  "Repo",
  ...DIMENSIONS,
  "Score",
  "Tier",
  "Pathway",
  "Families",
  "Provenance",
  "GapFit",
];

/** A cell value, never blank in the rendered table (— marks an absent field). */
function cell(v) {
  return v === null || v === undefined || v === "" ? "—" : String(v);
}

/**
 * Render a comparative Top-N matrix for ONE category. Returns a markdown table string, or null when
 * fewer than 2 scored candidates of that category exist (the ADR-R5 mostly-empty-rows guard).
 *
 * @param {object[]} candidates - scored phase4 candidates (or decision-shaped records)
 * @param {{category:string, topN?:number}} opts
 * @returns {string|null}
 */
export function renderTopNMatrix(candidates = [], { category, topN = 5 } = {}) {
  const inCategory = candidates.filter(
    (c) => c && (c.score?.category ?? c.category) === category && c.action,
  );
  if (inCategory.length < 2) return null;

  const ranked = inCategory
    .slice()
    .sort((a, b) =>
      compareByDecision(
        {
          action: a.action,
          score: a.final_score,
          coverage: a.score?.coverage,
          marginalValue: a.marginalValue,
        },
        {
          action: b.action,
          score: b.final_score,
          coverage: b.score?.coverage,
          marginalValue: b.marginalValue,
        },
      ),
    )
    .slice(0, topN);

  const header = `| ${COLUMNS.join(" | ")} |`;
  const divider = `|${COLUMNS.map(() => "---").join("|")}|`;
  const rows = ranked.map((c) => {
    const dims = c.score?.dimensions ?? {};
    const cells = [
      c.nameWithOwner,
      ...DIMENSIONS.map((d) => cell(dims[d])),
      cell(c.final_score),
      cell(c.action),
      cell(c.adoptionPathway),
      cell(c.source_trust?.family_count),
      cell(c.provenance_trustTier),
      cell(c.marginalValue),
    ];
    return `| ${cells.join(" | ")} |`;
  });

  return [`### Comparative Top-${ranked.length} — ${category}`, "", header, divider, ...rows].join(
    "\n",
  );
}
