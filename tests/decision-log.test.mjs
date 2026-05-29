import { readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  appendDecisions,
  buildDecisionRecord,
  DECISION_SCHEMA_VERSION,
  renderScanMarkdown,
} from "../scripts/lib/decision-log.mjs";

// A representative routeDecision() envelope (the object discover.mjs phase4Score returns).
const ENVELOPE = {
  action: "STUDY",
  flags: ["recency:stale"],
  review_required: false,
  override_applied: ["niche-excellence"],
  families: 2,
  trace: ["base:STUDY(score=74)", "action-cap:STUDY(families=2)"],
  rubricVersion: "v3.1",
};

describe("decision-log: buildDecisionRecord", () => {
  it("carries the documented decisions.jsonl fields (ts, repo, action, score, category, convergence_sources)", () => {
    const rec = buildDecisionRecord({
      repo: "owner/repo",
      category: "mcp-server",
      finalScore: 74.4,
      decision: ENVELOPE,
      ts: "2026-05-29T00:00:00.000Z",
    });
    expect(rec.ts).toBe("2026-05-29T00:00:00.000Z");
    expect(rec.repo).toBe("owner/repo");
    expect(rec.action).toBe("STUDY"); // sourced from decision.action, not a separate input
    expect(rec.score).toBe(74.4);
    expect(rec.category).toBe("mcp-server");
    expect(rec.convergence_sources).toBe(2); // = decision.families
  });

  it("carries the full envelope + gap-fit fields for the self-improvement loop + audit", () => {
    const rec = buildDecisionRecord({
      repo: "owner/repo",
      category: "mcp-server",
      finalScore: 74,
      decision: ENVELOPE,
      dims: { D1: 3, D3: 8 },
      coverage: 0.8,
      servesObjective: true,
      marginalValue: "high",
      adoptionPathway: "mcp",
      provenanceTrustTier: "ok",
    });
    expect(rec.trace).toEqual(ENVELOPE.trace);
    expect(rec.override_applied).toEqual(["niche-excellence"]);
    expect(rec.review_required).toBe(false);
    expect(rec.flags).toEqual(["recency:stale"]);
    expect(rec.dims).toEqual({ D1: 3, D3: 8 });
    expect(rec.coverage).toBe(0.8);
    expect(rec.servesObjective).toBe(true);
    expect(rec.marginalValue).toBe("high");
    expect(rec.adoptionPathway).toBe("mcp");
    expect(rec.provenance_trustTier).toBe("ok");
    expect(rec.schema_version).toBe(DECISION_SCHEMA_VERSION);
    expect(rec.rubric_version).toBe("v3.1"); // falls back to decision.rubricVersion
  });

  it("throws on a missing repo (a decision with no subject is a bug, never a silent skip)", () => {
    expect(() => buildDecisionRecord({ decision: ENVELOPE })).toThrow(/repo/);
  });
});

describe("decision-log: appendDecisions", () => {
  let dir;
  beforeEach(() => {
    dir = join(tmpdir(), `sota-declog-${process.pid}-${Math.floor(performance.now())}`);
  });
  afterEach(() => {
    try {
      rmSync(dir, { recursive: true, force: true });
    } catch {}
  });

  it("appends one parseable JSON line per record to inventory/decisions.jsonl (outcome.mjs reader format)", () => {
    const recs = [
      buildDecisionRecord({
        repo: "a/b",
        finalScore: 90,
        decision: { ...ENVELOPE, action: "INSTALL-LITE" },
        ts: "2026-05-29T00:00:00.000Z",
      }),
      buildDecisionRecord({
        repo: "c/d",
        finalScore: 50,
        decision: { ...ENVELOPE, action: "WATCH" },
        ts: "2026-05-29T00:00:01.000Z",
      }),
    ];
    const { written, file } = appendDecisions(recs, { baseDir: dir });
    expect(written).toBe(2);
    expect(file).toMatch(/inventory[\\/]decisions\.jsonl$/);
    const lines = readFileSync(file, "utf-8").trim().split("\n");
    expect(lines).toHaveLength(2);
    const parsed = lines.map((l) => JSON.parse(l)); // every line is valid JSON (the reader does this)
    expect(parsed[0].repo).toBe("a/b");
    expect(parsed[0].action).toBe("INSTALL-LITE");
    expect(parsed[1].action).toBe("WATCH");
  });

  it("APPENDS across calls (does not truncate the prior log)", () => {
    appendDecisions([buildDecisionRecord({ repo: "a/b", finalScore: 90, decision: ENVELOPE })], {
      baseDir: dir,
    });
    const { file } = appendDecisions(
      [buildDecisionRecord({ repo: "c/d", finalScore: 50, decision: ENVELOPE })],
      { baseDir: dir },
    );
    const lines = readFileSync(file, "utf-8").trim().split("\n");
    expect(lines).toHaveLength(2);
  });

  it("is a no-op for an empty record list", () => {
    const { written } = appendDecisions([], { baseDir: dir });
    expect(written).toBe(0);
  });
});

describe("decision-log: renderScanMarkdown", () => {
  it("emits the recommendations table AND a per-candidate decision-envelope json block (R2 wiring)", () => {
    const recs = [
      buildDecisionRecord({
        repo: "a/b",
        category: "mcp-server",
        finalScore: 88,
        decision: { ...ENVELOPE, action: "INSTALL-LITE" },
      }),
    ];
    const md = renderScanMarkdown(recs, { topic: "mcp servers" });
    expect(md).toContain("# SOTA Scan");
    expect(md).toContain("a/b");
    expect(md).toContain("INSTALL-LITE");
    expect(md).toMatch(/```json[\s\S]*"action": "INSTALL-LITE"[\s\S]*```/); // auditable envelope block
  });
});
