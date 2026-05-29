import { describe, expect, it } from "vitest";
import { deriveDecisionInputs } from "../scripts/discover.mjs";
import { pathwayFromCategory } from "../scripts/lib/d3-pathway.mjs";

describe("pathwayFromCategory (R3 — degree of adaptness)", () => {
  it("maps install-capable categories to their real Claude-Code runtime surface", () => {
    expect(pathwayFromCategory("mcp-server")).toBe("mcp");
    expect(pathwayFromCategory("skill-pack")).toBe("skill");
    expect(pathwayFromCategory("hook-toolkit")).toBe("hook");
    expect(pathwayFromCategory("code-library")).toBe("npm-js");
  });

  it("returns null for categories with NO direct runtime surface (→ studyable, not installable)", () => {
    expect(pathwayFromCategory("research-agent")).toBeNull();
    expect(pathwayFromCategory("agent-orchestration-pattern")).toBeNull();
    expect(pathwayFromCategory("awesome-list")).toBeNull();
    expect(pathwayFromCategory("research-with-code")).toBeNull();
  });

  it("returns null for empty/unknown categories", () => {
    expect(pathwayFromCategory(null)).toBeNull();
    expect(pathwayFromCategory("")).toBeNull();
    expect(pathwayFromCategory("not-a-category")).toBeNull();
  });
});

describe("deriveDecisionInputs (R3 — feed gap-fit + pathway into the decision engine)", () => {
  const inventory = {
    gaps: [{ id: "eval-harness", priority: "high", build_not_install: true }],
    strategic_priorities: ["eval-harness"],
    layers: { orchestration: { saturated: true } },
  };

  it("derives adoptionPathway from the candidate's category", () => {
    const out = deriveDecisionInputs({ nameWithOwner: "o/r", hint: {} }, inventory, {
      category: "mcp-server",
    });
    expect(out.adoptionPathway).toBe("mcp");
  });

  it("a no-runtime-surface category yields a null pathway (enables d3PathwayVeto INSTALL→STUDY)", () => {
    const out = deriveDecisionInputs({ nameWithOwner: "o/agent", hint: {} }, inventory, {
      category: "research-agent",
    });
    expect(out.adoptionPathway).toBeNull();
  });

  it("flags an explicit duplicate as non-serving + duplicate marginal value", () => {
    const out = deriveDecisionInputs(
      { nameWithOwner: "o/dup", duplicatesOf: "agentdb", hint: {} },
      inventory,
      { category: "mcp-server" },
    );
    expect(out.servesObjective).toBe(false);
    expect(out.marginalValue).toBe("duplicate");
  });

  it("defaults to conservative LOW marginal value with no gap evidence (gate caps INSTALL→STUDY)", () => {
    const out = deriveDecisionInputs(
      { nameWithOwner: "o/unknown", hint: { topics: ["misc"], description: "a generic thing" } },
      inventory,
      { category: "mcp-server" },
    );
    expect(out.servesObjective).toBe(true);
    expect(out.marginalValue).toBe("low");
  });

  it("maps candidate topics/description into gap keywords (a matching repo fills the named gap)", () => {
    const out = deriveDecisionInputs(
      {
        nameWithOwner: "o/evals",
        hint: { topics: ["eval", "harness"], description: "eval harness" },
      },
      inventory,
      { category: "code-library" },
    );
    expect(out.servesObjective).toBe(true);
    expect(out.gapFit.gapFilled).toBe("eval-harness");
  });
});
