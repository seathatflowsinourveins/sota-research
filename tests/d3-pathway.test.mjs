import { describe, expect, it } from "vitest";
import { d3FromPathway, normalizePathway, PATHWAY_LADDER } from "../scripts/lib/d3-pathway.mjs";

const FULL = { hasManifest: true, hasDocs: true, hasTests: true, hasInstallPath: true };

describe("d3-pathway.mjs — runtime-pathway ladder", () => {
  it("ladder encodes MCP > plugin > skill > hook > npm-js > cli > python", () => {
    expect(PATHWAY_LADDER.mcp).toBeGreaterThan(PATHWAY_LADDER.plugin);
    expect(PATHWAY_LADDER.plugin).toBeGreaterThan(PATHWAY_LADDER.skill);
    expect(PATHWAY_LADDER.skill).toBeGreaterThan(PATHWAY_LADDER.hook);
    expect(PATHWAY_LADDER.hook).toBeGreaterThan(PATHWAY_LADDER["npm-js"]);
    expect(PATHWAY_LADDER["npm-js"]).toBeGreaterThan(PATHWAY_LADDER.cli);
    expect(PATHWAY_LADDER.cli).toBeGreaterThan(PATHWAY_LADDER.python);
  });

  it("a full-evidence MCP integration scores the ceiling (10)", () => {
    expect(d3FromPathway("mcp", FULL)).toBe(10);
  });

  it("artifact type alone is NOT enough — zero integration evidence caps low (anti-gaming)", () => {
    expect(d3FromPathway("mcp", {})).toBe(2);
    expect(d3FromPathway("mcp", { hasManifest: true, hasDocs: true })).toBe(6);
  });

  it("lower-fidelity pathways are capped by their ladder start even with full evidence", () => {
    expect(d3FromPathway("skill", FULL)).toBe(8);
    expect(d3FromPathway("cli", FULL)).toBe(3);
    expect(d3FromPathway("python", FULL)).toBe(2);
  });

  it("aliases normalize; unknown pathways return null (evidence contract)", () => {
    expect(normalizePathway("MCP-Server")).toBe("mcp");
    expect(normalizePathway("typescript")).toBe("npm-js");
    expect(normalizePathway("frobnicator")).toBeNull();
    expect(d3FromPathway("frobnicator", FULL)).toBeNull();
    expect(d3FromPathway("mcp-server", FULL)).toBe(10);
  });
});
