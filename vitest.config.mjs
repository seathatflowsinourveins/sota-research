import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      // Scope coverage measurement to scripts/ only — without `include`, vitest measures
      // every file imported anywhere (including node_modules subsets), which collapses
      // aggregate coverage to ~2% even when each script file is at 80%+.
      include: ["scripts/**/*.mjs"],
      exclude: ["scripts/**/*.test.mjs", "node_modules/**", "reference/**", "patterns/**"],
      thresholds: {
        lines: 80,
        functions: 80,
        // Branches at 60% is industry-standard for I/O-heavy code where many branches are
        // error paths (spawn fail, JSON parse fail, GraphQL errors[], stderr emission, exit≠0).
        // Pushing higher pays diminishing returns + locks in implementation detail.
        branches: 60,
        statements: 80,
      },
    },
    include: ["tests/**/*.test.mjs"],
  },
});
