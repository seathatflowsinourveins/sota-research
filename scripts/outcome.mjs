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

  // When 20+ outcomes accumulated, suggest weight tuning
  if (allOutcomes.length >= 20) {
    const dimensionAccuracy = computeDimensionAccuracy(allOutcomes);
    return {
      outcomes_logged: newOutcomes.length,
      total_outcomes: allOutcomes.length,
      weight_tuning_suggestion: {
        triggered: true,
        dimension_accuracy: dimensionAccuracy,
        message: "Consider tuning category weights based on dimension predictive accuracy",
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
  // TODO: Implement correlation calculation
  // For each outcome, lookup original score + decision
  // Compute correlation(D1..D8 scores, artifact_present @ 30/60/90 days)

  // PLACEHOLDER: return mock accuracy scores
  return {
    D1: 0.75,
    D2: 0.82,
    D3: 0.68,
    D4: 0.8,
    D5: 0.72,
    D6: 0.85,
    D7: 0.65,
    D8: 0.78,
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
