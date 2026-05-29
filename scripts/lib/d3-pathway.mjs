/**
 * scripts/lib/d3-pathway.mjs
 *
 * D3 (Claude-Code runtime fit) runtime-pathway ladder.
 *
 * Encodes the integration-pathway preference as a STARTING value for D3, then CAPS
 * it by working-integration evidence. Codex GPT-5.5 (2026-05-28): "D3 constants are
 * gameable unless capped by working integration evidence, docs, tests, and install
 * path" — i.e. claiming "MCP server" must not by itself yield a top D3; the claim
 * has to be backed by an actual manifest, docs, tests, and an install path.
 *
 * The ladder constants are CONFIGURABLE DEFAULTS, not empirical facts. They encode
 * the runtime's documented preference: MCP > plugin > skill > hook > npm-JS > CLI > Python.
 */

/** Configurable pathway-fidelity constants (0-10). */
export const PATHWAY_LADDER = {
  mcp: 10,
  plugin: 9.5,
  skill: 8,
  hook: 6,
  "npm-js": 5,
  cli: 3,
  python: 2,
};

const PATHWAY_ALIASES = {
  "mcp-server": "mcp",
  mcpserver: "mcp",
  "claude-plugin": "plugin",
  "skill-pack": "skill",
  "hook-toolkit": "hook",
  npm: "npm-js",
  node: "npm-js",
  javascript: "npm-js",
  typescript: "npm-js",
  js: "npm-js",
  ts: "npm-js",
  py: "python",
};

/** Normalize a free-form pathway label to a ladder key (or null if unknown). */
export function normalizePathway(pathway) {
  if (!pathway) return null;
  const p = String(pathway).toLowerCase().trim();
  if (p in PATHWAY_LADDER) return p;
  if (p in PATHWAY_ALIASES) return PATHWAY_ALIASES[p];
  return null;
}

/**
 * D3 starting value from the pathway, CAPPED by integration evidence.
 *
 * With zero evidence of a working integration, even an "MCP" claim is capped low
 * (anti-gaming); each piece of evidence lifts the cap. Returns null for an unknown
 * pathway (evidence contract: a missing dimension is null, never a fabricated value).
 *
 * @param {string} pathway - mcp | plugin | skill | hook | npm-js | cli | python (aliases ok)
 * @param {object} [evidence]
 *   @param {boolean} [evidence.hasManifest] - mcp.json / plugin manifest / SKILL.md present
 *   @param {boolean} [evidence.hasDocs] - integration/setup docs
 *   @param {boolean} [evidence.hasTests] - tests covering the integration
 *   @param {boolean} [evidence.hasInstallPath] - a real install/registration path
 *   @param {object} [config] - { ladder } override
 * @returns {number|null} D3 pathway sub-score (0-10), or null if pathway unknown
 */
export function d3FromPathway(pathway, evidence = {}, config = {}) {
  const ladder = { ...PATHWAY_LADDER, ...(config.ladder || {}) };
  const key = normalizePathway(pathway);
  if (key == null || !(key in ladder)) return null;
  const start = ladder[key];

  const evCount = [
    evidence.hasManifest,
    evidence.hasDocs,
    evidence.hasTests,
    evidence.hasInstallPath,
  ].filter(Boolean).length;

  // Cap rises with integration evidence: 0→2, 1→4, 2→6, 3→8, 4→10.
  const cap = 2 + 2 * evCount;
  return Math.min(start, cap);
}
