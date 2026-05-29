import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Check if an installed artifact still exists
 * Rules:
 * - npm packages: check if present in package.json
 * - agent/skill files: check if file exists in .claude/skills or agents/
 * - MCP servers: check if in claude mcp list
 */
async function checkArtifactPresence(_decision) {
  // TODO: Implement presence checks based on decision.action and artifact_type
  // For now, assume all artifacts are present
  return true;
}

/**
 * Review outcomes for decisions made 30/60/90 days ago
 */
export async function reviewOutcomes({ ageDays = 30, baseDir = process.cwd() }) {
  const decisionsFile = join(baseDir, "inventory", "decisions.jsonl");
  const outcomesFile = join(baseDir, "inventory", "outcomes.jsonl");

  // Read decisions.jsonl (JSONL format, one JSON per line)
  let decisions = [];
  try {
    const decisionsContent = readFileSync(decisionsFile, "utf-8");
    decisions = decisionsContent
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => JSON.parse(line));
  } catch (_e) {
    // decisions file doesn't exist yet; proceed with empty list
    decisions = [];
  }

  let existingOutcomes = [];

  try {
    const outcomesContent = readFileSync(outcomesFile, "utf-8");
    existingOutcomes = outcomesContent
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => JSON.parse(line));
  } catch (_e) {
    // outcomes file doesn't exist yet
  }

  // Filter decisions by age
  const now = new Date();
  const cutoffDate = new Date(now.getTime() - ageDays * 24 * 60 * 60 * 1000);

  const targetDecisions = decisions.filter((d) => {
    const decisionDate = new Date(d.ts);
    return decisionDate <= cutoffDate;
  });

  // Check presence for each decision
  const newOutcomes = [];
  for (const decision of targetDecisions) {
    const present = await checkArtifactPresence(decision);
    const outcome = {
      ts: new Date().toISOString(),
      decision_ts: decision.ts,
      repo: decision.repo,
      action: decision.action,
      artifact_present: present,
      age_days: ageDays,
      review_window: ageDays, // 30 | 60 | 90
      // Ground truth for tuning is the HUMAN value/regret label (Codex risk-resolution #3);
      // usage telemetry is a trigger/signal, NOT ground truth on its own. Both null until captured.
      value_label: decision.value_label ?? null, // 'valuable' | 'neutral' | 'regret' | null
      usage_telemetry: decision.usage_telemetry ?? null, // { invocations, last_used } | null
    };
    newOutcomes.push(outcome);
  }

  // Append to outcomes.jsonl
  const allOutcomes = [...existingOutcomes, ...newOutcomes];
  const outcomesContent = `${allOutcomes.map((o) => JSON.stringify(o)).join("\n")}\n`;

  try {
    writeFileSync(outcomesFile, outcomesContent);
  } catch (e) {
    // Create parent directory if needed
    console.warn(`Could not write outcomes: ${e.message}`);
  }

  // When 20+ outcomes accumulate, flag for MANUAL review only. Automatic weight tuning
  // stays DISABLED until dimension-accuracy correlation is implemented and calibrated
  // against labeled outcomes (Codex GPT-5.5 2026-05-28: "placeholder accuracy values must
  // never influence tuning"; "no automatic weight changes").
  if (allOutcomes.length >= 20) {
    const accuracy = computeDimensionAccuracy(allOutcomes);
    return {
      outcomes_logged: newOutcomes.length,
      total_outcomes: allOutcomes.length,
      weight_tuning_suggestion: {
        triggered: false,
        calibrated: accuracy.calibrated,
        dimension_accuracy: accuracy.accuracy,
        message:
          "Enough outcomes to REVIEW manually. Automatic weight tuning is disabled until dimension-accuracy correlation is implemented + calibrated against labeled outcomes.",
      },
    };
  }

  return {
    outcomes_logged: newOutcomes.length,
    total_outcomes: allOutcomes.length,
    weight_tuning_suggestion: { triggered: false },
  };
}

/**
 * Compute dimension predictive accuracy from outcome data
 * Calculate correlation between dim_i_score and was_actually_useful
 */
function computeDimensionAccuracy(_outcomes) {
  // Correlation(D1..D8 score, realized usefulness @ 30/60/90d) needs labeled outcomes +
  // holdout validation — that is BACKLOG. Until implemented AND calibrated, this returns
  // NO numbers: placeholder/mock accuracy must NEVER influence weight tuning (Codex
  // GPT-5.5 2026-05-28). Emitting fake correlations here previously risked auto-tuning
  // rubric weights against invented data.
  return {
    calibrated: false,
    accuracy: null,
    note: "dimension-accuracy correlation not yet implemented; needs labeled outcomes + holdout (BACKLOG)",
  };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0]; // 'review'
  const ageIdx = args.indexOf("--age");
  const ageDays = ageIdx !== -1 ? parseInt(args[ageIdx + 1], 10) : 30;

  if (command !== "review") {
    console.error("Usage: node outcome.mjs review [--age 30|60|90]");
    process.exit(1);
  }

  reviewOutcomes({ ageDays }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
