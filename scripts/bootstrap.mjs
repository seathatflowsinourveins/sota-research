import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { deriveDecisionInputs, discover } from "./discover.mjs";
import { computeFinalScore } from "./lib/blend.mjs";
import { compareByDecision, routeDecision } from "./lib/decision.mjs";
import { appendDecisions, buildDecisionRecord, writeScanMarkdown } from "./lib/decision-log.mjs";
import { loadStackInventory } from "./lib/gap-fit.mjs";
import { scoreRepo } from "./score.mjs";

/**
 * Six default bootstrap topics for first-run discovery
 */
const DEFAULT_TOPICS = [
  { topic: "MCP servers SOTA 2026", category: "mcp-server" },
  { topic: "agent orchestration patterns", category: "agent-orchestration-pattern" },
  { topic: "research agents gpt-researcher class", category: "research-agent" },
  { topic: "Claude Code skill packs hook toolkits", category: "skill-pack" },
  { topic: "code intelligence tools repomix deepwiki", category: "code-library" },
  { topic: "audit starred repos high-signal low-stars", category: null },
];

/**
 * Named bootstrap targets (must be scored regardless of discovery yield)
 */
const NAMED_TARGETS = [
  { owner: "assafelovic", repo: "gpt-researcher", category: "research-agent" },
  { owner: "ComposioHQ", repo: "agent-orchestrator", category: "agent-orchestration-pattern" },
  { owner: "HKUDS", repo: "OpenHarness", category: "agent-framework" },
  { owner: "multica-ai", repo: "multica", category: "research-agent" },
  { owner: "safishamsi", repo: "graphify", category: "code-library" },
  { owner: "punkpeye", repo: "awesome-mcp-servers", category: "awesome-list" },
];

/**
 * NOVEL 4: Dry-run mode — simulate what would be scored without API calls
 * NOVEL 5: Cost budget gate — bail before high Codex spend
 */
function printDryRun(topicsToProcess, NAMED_TARGETS) {
  console.log("\n=== DRY-RUN: What would be scored ===\n");
  console.log(`Discovery topics (${topicsToProcess.length}):`);
  topicsToProcess.forEach((t) => {
    console.log(`  - "${t.topic}" (category: ${t.category || "any"})`);
  });
  console.log(`\nNamed targets (${NAMED_TARGETS.length}):`);
  NAMED_TARGETS.forEach((t) => {
    console.log(`  - ${t.owner}/${t.repo} (${t.category})`);
  });
  console.log(`\nEstimated API cost:`);
  console.log(
    `  - GitHub GraphQL: ~${topicsToProcess.length * 10} candidates + ${NAMED_TARGETS.length} named = ${topicsToProcess.length * 10 + NAMED_TARGETS.length} repos`,
  );
  console.log(
    `  - Codex GPT-5.5 consensus: ~${Math.ceil((topicsToProcess.length * 10 + NAMED_TARGETS.length) / 10)} calls @ xhigh effort`,
  );
  console.log("\nRun without --dry-run to execute.");
}

/**
 * Decide one candidate via the single decision engine. Used for BOTH the markdown table
 * and the persisted decisions.jsonl record (R1), so the human view + audit log never diverge.
 */
function decideCandidate(c, inventory = {}, scanIntent = "") {
  const rubricScore = c.score?.rubric_score || 0;
  const codexScore = c.score?.codex_score || 0;
  const sourceCount = c.source_count || 1;
  // Codex MAJOR fix: source_trust is top-level (not under .score) — read it there ONLY.
  const sourceTrust = c.source_trust || null;
  const category = c.score?.category || "unknown";
  const finalScore = computeFinalScore({
    rubric_score: rubricScore,
    codex_score: codexScore,
    source_count: sourceCount,
    sourceTrust,
  });
  const families = sourceTrust?.family_count ?? sourceCount;
  // R3: gate bootstrap's decisions on gap-fit + adoption-pathway too (same engine inputs as
  // discover's phase4Score) so both runtime faces route identically.
  const di = deriveDecisionInputs(c, inventory, { scanIntent, category });
  const decision = routeDecision({
    score: finalScore,
    families,
    category,
    dims: { ...(c.score?.dimensions || {}), D9: c.score?.niche_overlay_D9 },
    servesObjective: di.servesObjective,
    marginalValue: di.marginalValue,
    adoptionPathway: di.adoptionPathway,
  });
  return { finalScore, families, category, sourceCount, decision, di };
}

/**
 * Main bootstrap function
 */
export async function bootstrap({
  topic = null,
  category = null,
  baseDir = process.cwd(),
  dryRun = false,
  maxCost = null,
}) {
  const allCandidates = [];
  const _results = {};

  // If topic is specified, use it; otherwise iterate default topics
  const topicsToProcess = topic ? [{ topic, category }] : DEFAULT_TOPICS;

  // NOVEL 4: Dry-run mode — exit after printing plan
  if (dryRun) {
    printDryRun(topicsToProcess, NAMED_TARGETS);
    return {
      candidates_discovered: 0,
      named_targets_scored: 0,
      unique_candidates: 0,
      dry_run: true,
    };
  }

  // NOVEL 5: Cost budget gate — estimate cost before proceeding
  const estimatedCost = topicsToProcess.length * 10 + NAMED_TARGETS.length;
  if (maxCost !== null && estimatedCost > maxCost) {
    const errorMsg =
      `✗ COST LIMIT EXCEEDED\n` +
      `  Estimated repos to score: ${estimatedCost}\n` +
      `  Max budget: ${maxCost}\n` +
      `  Use --max-cost ${estimatedCost + 10} to proceed or reduce scope`;
    console.error(errorMsg);
    throw new Error(errorMsg); // M-5: throw instead of process.exit()
  }

  // Phase 1: Parallel discovery across default topics
  const discoveryPromises = topicsToProcess.map((t) =>
    discover({
      topic: t.topic,
      category: t.category,
      limit: 30,
      budget: 10,
      baseDir,
      persist: false, // bootstrap persists the unified merged+sorted set once (avoids dup)
    }).catch((err) => {
      console.warn(`Discovery failed for topic ${t.topic}: ${err.message}`);
      return { candidates: [] };
    }),
  );

  const discoveryResults = await Promise.all(discoveryPromises);
  discoveryResults.forEach((result) => {
    allCandidates.push(...(result.candidates || []));
  });

  // Phase 2: Score explicitly-named bootstrap targets
  const namedScores = [];
  for (const target of NAMED_TARGETS) {
    try {
      const score = await scoreRepo({
        owner: target.owner,
        repo: target.repo,
        category: target.category || "code-library",
      });
      namedScores.push({
        nameWithOwner: `${target.owner}/${target.repo}`,
        score,
        isNamed: true,
      });
    } catch (err) {
      console.warn(`Scoring failed for ${target.owner}/${target.repo}: ${err.message}`);
    }
  }

  // Merge discovery candidates + named targets
  const mergedCandidates = [...allCandidates, ...namedScores];

  // Deduplicate by nameWithOwner
  const uniqueCandidates = new Map();
  mergedCandidates.forEach((c) => {
    const key = c.nameWithOwner.toLowerCase();
    if (!uniqueCandidates.has(key)) {
      uniqueCandidates.set(key, c);
    }
  });

  // R3: load the stack inventory once for gap-fit gating (conservative {} fallback if absent).
  let inventory = {};
  try {
    inventory = loadStackInventory(baseDir);
  } catch {
    inventory = {};
  }

  // Decide every candidate ONCE via the single engine — reused by the markdown table AND the
  // persisted decisions.jsonl record so the human view + audit log never diverge (R1).
  // R6: rank by the ENGINE VERDICT (action tier → score → coverage → marginal value), NOT by
  // raw rubric_score or source appearance-count.
  const decided = Array.from(uniqueCandidates.values())
    .map((c) => ({ candidate: c, ...decideCandidate(c, inventory, topic || "") }))
    .sort((a, b) =>
      compareByDecision(
        {
          action: a.decision.action,
          score: a.finalScore,
          coverage: a.candidate.score?.coverage,
          marginalValue: a.di?.marginalValue,
        },
        {
          action: b.decision.action,
          score: b.finalScore,
          coverage: b.candidate.score?.coverage,
          marginalValue: b.di?.marginalValue,
        },
      ),
    );

  // Write inventory/bootstrap-<ISO-date>.md
  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];
  const bootstrapFile = join(baseDir, "inventory", `bootstrap-${dateStr}.md`);

  const markdown = [
    `# Bootstrap SOTA Scan — ${now.toISOString()}`,
    "",
    `## Summary`,
    `- Discovery topics: ${topicsToProcess.length}`,
    `- Named targets scored: ${NAMED_TARGETS.length}`,
    `- Unique candidates: ${decided.length}`,
    "",
    `## Recommendations (ranked by decision verdict)`,
    `| Score | Repo | Category | Sources | Rationale |`,
    `|---|---|---|---|---|`,
    ...decided.map(({ candidate: c, finalScore, families, category, sourceCount, decision }) => {
      const rationale = `Score ${finalScore.toFixed(1)} (${families} families) — ${decision.action}`;
      return `| ${finalScore.toFixed(1)} | ${c.nameWithOwner} | ${category} | ${sourceCount} | ${rationale} |`;
    }),
    "",
  ].join("\n");

  try {
    await mkdir(join(baseDir, "inventory"), { recursive: true });
    await writeFile(bootstrapFile, markdown);
  } catch (err) {
    console.warn(`Could not write bootstrap file: ${err.message}`);
  }

  // R1: persist the decision envelopes + a scan-<ts>.md (the filename the SOTA-scan PR body
  // references). discover() was called with persist:false above, so each candidate is logged
  // exactly once, here, from the unified merged set.
  // C2 provenance: ONE run_id for the whole bootstrap scan (ISO timestamp + short random suffix);
  // every record shares it, decision_id (runId::repo) is unique per repo. Cross-run dedup is the
  // consumer's job (deferred calibration).
  const runId = `${now.toISOString()}-${randomUUID().slice(0, 8)}`;
  const decisionRecords = decided.map(({ candidate: c, finalScore, category, decision, di }) =>
    buildDecisionRecord({
      repo: c.nameWithOwner,
      category,
      finalScore,
      decision,
      dims: { ...(c.score?.dimensions || {}), D9: c.score?.niche_overlay_D9 },
      coverage: c.score?.coverage ?? null,
      servesObjective: di?.servesObjective ?? null,
      marginalValue: di?.marginalValue ?? null,
      adoptionPathway: di?.adoptionPathway ?? null,
      runId,
    }),
  );
  let decisionsFile = null;
  try {
    decisionsFile = appendDecisions(decisionRecords, { baseDir }).file;
    const ts = now.toISOString();
    const scanFile = `inventory/scan-${ts.split("T")[0]}-${ts.split("T")[1].split(".")[0].replace(/:/g, "")}.md`;
    writeScanMarkdown(decisionRecords, { baseDir, scanFile, topic: topic || "bootstrap" });
  } catch (err) {
    console.warn(`Could not persist decisions: ${err.message}`);
  }

  return {
    candidates_discovered: allCandidates.length,
    named_targets_scored: namedScores.length,
    unique_candidates: decided.length,
    bootstrap_file: bootstrapFile,
    decisions_file: decisionsFile,
    // R6: recommendations carry the engine verdict (action/final_score) and are ranked by it,
    // not by raw rubric_score — so callers + tests inspect what the pipeline actually decided.
    recommendations: decided.slice(0, 20).map(({ candidate, decision, finalScore }) => ({
      ...candidate,
      action: decision.action,
      final_score: finalScore,
    })),
  };
}

// CLI entry point (M-5: only exit here, not in library functions)
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const topicIdx = args.indexOf("--topic");
  const categoryIdx = args.indexOf("--category");
  const dryRunIdx = args.indexOf("--dry-run");
  const maxCostIdx = args.indexOf("--max-cost");

  const topic = topicIdx !== -1 ? args[topicIdx + 1] : null;
  const category = categoryIdx !== -1 ? args[categoryIdx + 1] : null;
  const dryRun = dryRunIdx !== -1;
  const maxCost = maxCostIdx !== -1 ? parseInt(args[maxCostIdx + 1], 10) : null;

  bootstrap({ topic, category, dryRun, maxCost }).catch((err) => {
    console.error(err.message);
    process.exit(1); // Only CLI entry point may call process.exit()
  });
}
