# SOTA distillation — HKUDS/CLI-Anything

> Reference pattern for the sota-research architecture. Ingested 2026-05-29 via the grounding workflow (run `wvsbmfd1e`, repomix + deepwiki). Disposition: **REFERENCE/STUDY** — research-agent/MCDA class, no direct Claude-Code runtime surface (study the pattern, do not install). Convergence context: `docs/research/convergence-2026-05-29-research-arch-grounding.md`.

- **URL:** https://github.com/HKUDS/CLI-Anything
- **Citation:** https://github.com/HKUDS/CLI-Anything (read: cli-anything-plugin/HARNESS.md, cli-anything-plugin/commands/cli-anything.md, cli-anything-plugin/commands/validate.md, README.md @ main)
- **Ingested via:** repomix pack_remote_repository (compress) — collapsed to a 216-char stub on this 1569-blob monorepo, unusable; GitHub git/trees API (recursive, unauthenticated via context-mode) — located the 7 HARNESS.md files + the generator plugin; context-mode ctx_execute (urllib) — fetched + quoted README.md (68KB), cli-anything-plugin/HARNESS.md (36KB), commands/cli-anything.md, commands/validate.md verbatim; GitHub MCP get_repository_tree — FAILED (401 bad credentials, stale token)
- **Evidence quality:** strong
- **Grounds:** R2, R13, R3, R7, R1

## Architecture
A methodology repo: a generator plugin (cli-anything-plugin) turns any GUI app into a stateful agent-usable CLI via a fixed 7-phase pipeline (Phase 0 source-acquisition → analysis → design → impl → test-plan/impl → packaging). HARNESS.md is the authoritative SOP; the /cli-anything command and /cli-anything:validate both open with "CRITICAL: Read HARNESS.md First ... Do not improvise" and "single source of truth ... every check maps to a requirement in HARNESS.md." Generated CLIs are Click-based with dual human/`--json` output, probe-before-mutate introspection, file-locked JSON session state, and a fail-closed test contract: real backend is a hard dependency, "if the software isn't installed, tests fail, not skip," outputs verified by magic-bytes/structure not exit code. Output rendering escalates: native engine → translated filtergraph → script.

## Transferable pattern (the reference)
A single authoritative spec file (HARNESS.md) that EVERY executable surface is contractually bound to read-first and forbidden to improvise around: the generator command, the validator, and the test contract all open with "Read HARNESS.md First ... Do not improvise" / "single source of truth ... every check maps to a requirement in HARNESS.md." The spec is not documentation-beside-the-code, it IS the engine; commands are thin conformance harnesses over it, and the validator is a mechanical 1:1 check that each declared standard has a live producer. Paired with fail-closed truthfulness (tests FAIL, never skip/fake, when the real backend is absent; outputs verified structurally not by exit code) this gives a self-policing methodology where drift between spec and behavior is caught, not silently tolerated.

## How it grounds our enhancements
- R2 — the 'Read HARNESS.md First / Do not improvise, follow the harness specification' contract in commands/cli-anything.md is exactly our decision-envelope + anti-improvisation binding: the spec/engine is authoritative and the live workflow may not free-style around it
- R13 — validate.md's 'single source of truth ... every check in this command maps to a requirement in HARNESS.md' is the direct analog of our rubric-contract test: every declared dimension/gate must have a live producer/check, no orphan standards
- R3 — HARNESS Phase 1 'identify the backend engine / find existing CLI' + the fail-closed 'real software is a hard dependency, tests fail not skip' gate route by actual runtime surface, grounding gap-fit/adoption-pathway (INSTALL only when a real backend exists; otherwise demote)
- R7 — the rendering escalation ladder (native engine → translated filtergraph → script) and output-verification tiers (exit → magic-bytes → structural → pixel/audio) model graceful confidence-capping degradation rather than hard rejection, mirroring our Scorecard probe_status cap-not-reject
- R1 — file-locked JSON session state (_locked_save_json, open r+/lock/truncate) as durable system-of-record persistence, the same discipline as our decisions.jsonl + scan-md append-with-integrity
