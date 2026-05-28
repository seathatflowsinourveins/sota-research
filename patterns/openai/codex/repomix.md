This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**, lib/**, docs/**, README.md, CLAUDE.md, *.toml, *.yaml, *.yml, package.json, pyproject.toml, LICENSE
- Files matching these patterns are excluded: node_modules, dist, build, .git, *.lock, *.min.js, test, tests
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.markdownlint-cli2.yaml
.prettierrc.toml
announcement_tip.toml
cliff.toml
docs/agents_md.md
docs/authentication.md
docs/CLA.md
docs/config.md
docs/contributing.md
docs/example-config.md
docs/exec.md
docs/execpolicy.md
docs/getting-started.md
docs/install.md
docs/license.md
docs/open-source-fund.md
docs/sandbox.md
docs/skills.md
docs/slash_commands.md
LICENSE
package.json
pnpm-workspace.yaml
README.md
```

# Files

## File: .markdownlint-cli2.yaml
````yaml
config:
  MD013:
    line_length: 100
globs:
  - "docs/tui-chat-composer.md"
````

## File: .prettierrc.toml
````toml
printWidth = 80
quoteProps = "consistent"
semi = true
tabWidth = 2
trailingComma = "all"

# Preserve existing behavior for markdown/text wrapping.
proseWrap = "preserve"
````

## File: announcement_tip.toml
````toml
# Example announcement tips for Codex TUI.
# Each [[announcements]] entry is evaluated in order; the last matching one is shown.
# Dates are UTC, formatted as YYYY-MM-DD. The from_date is inclusive and the to_date is exclusive.
# version_regex matches against the CLI version (env!("CARGO_PKG_VERSION")); omit to apply to all versions.
# target_app specify which app should display the announcement (cli, vsce, ...).

# Test announcement only for local build version until 2027-05-10 excluded
[[announcements]]
content = "This is a test announcement"
version_regex = "^0\\.0\\.0$"
to_date = "2027-05-10"

[[announcements]]
content = "Update Required - This version will no longer be supported starting May 8th. Please upgrade to the latest version (https://github.com/openai/codex/releases/latest) using your preferred package manager."
# Matches 0.x.y versions from 0.0.y through 0.119.y; excludes 0.120.0 and newer.
version_regex = "^0\\.(?:[0-9]|[1-9][0-9]|1[01][0-9])\\."
to_date = "2026-05-08"
````

## File: cliff.toml
````toml
# https://git-cliff.org/docs/configuration

[changelog]
header = """
# Changelog

You can install any of these versions: `npm install -g @openai/codex@<version>`
"""

body = """
{% if version -%}
## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}
{%- else %}
## [unreleased]
{% endif %}

{%- for group, commits in commits | group_by(attribute="group") %}
### {{ group | striptags | trim }}

{% for commit in commits %}- {% if commit.scope %}*({{ commit.scope }})* {% endif %}{% if commit.breaking %}[**breaking**] {% endif %}{{ commit.message | upper_first }}
{% endfor %}

{%- endfor -%}
"""

footer = """
<!-- generated - do not edit -->
"""

trim = true
postprocessors = []

[git]
conventional_commits = true

commit_parsers = [
  { message = "^feat", group = "<!-- 0 -->🚀 Features" },
  { message = "^fix",  group = "<!-- 1 -->🪲 Bug Fixes" },
  { message = "^bump", group = "<!-- 6 -->🛳️ Release" },
  # Fallback – skip anything that didn't match the above rules.
  { message = ".*",  group = "<!-- 10 -->💼 Other" },
]

filter_unconventional = false
sort_commits = "oldest"
topo_order = false
````

## File: docs/agents_md.md
````markdown
# AGENTS.md

For information about AGENTS.md, see [this documentation](https://developers.openai.com/codex/guides/agents-md).

## Hierarchical agents message

When the `child_agents_md` feature flag is enabled (via `[features]` in `config.toml`), Codex appends additional guidance about AGENTS.md scope and precedence to the user instructions message and emits that message even when no AGENTS.md is present.
````

## File: docs/authentication.md
````markdown
# Authentication

For information about Codex CLI authentication, see [this documentation](https://developers.openai.com/codex/auth).
````

## File: docs/CLA.md
````markdown
# Individual Contributor License Agreement (v1.0, OpenAI)

_Based on the Apache Software Foundation Individual CLA v 2.2._

By commenting **“I have read the CLA Document and I hereby sign the CLA”**
on a Pull Request, **you (“Contributor”) agree to the following terms** for any
past and future “Contributions” submitted to the **OpenAI Codex CLI project
(the “Project”)**.

---

## 1. Definitions

- **“Contribution”** – any original work of authorship submitted to the Project
  (code, documentation, designs, etc.).
- **“You” / “Your”** – the individual (or legal entity) posting the acceptance
  comment.

## 2. Copyright License

You grant **OpenAI, Inc.** and all recipients of software distributed by the
Project a perpetual, worldwide, non‑exclusive, royalty‑free, irrevocable
license to reproduce, prepare derivative works of, publicly display, publicly
perform, sublicense, and distribute Your Contributions and derivative works.

## 3. Patent License

You grant **OpenAI, Inc.** and all recipients of the Project a perpetual,
worldwide, non‑exclusive, royalty‑free, irrevocable (except as below) patent
license to make, have made, use, sell, offer to sell, import, and otherwise
transfer Your Contributions alone or in combination with the Project.

If any entity brings patent litigation alleging that the Project or a
Contribution infringes a patent, the patent licenses granted by You to that
entity under this CLA terminate.

## 4. Representations

1. You are legally entitled to grant the licenses above.
2. Each Contribution is either Your original creation or You have authority to
   submit it under this CLA.
3. Your Contributions are provided **“AS IS”** without warranties of any kind.
4. You will notify the Project if any statement above becomes inaccurate.

## 5. Miscellany

This Agreement is governed by the laws of the **State of California**, USA,
excluding its conflict‑of‑laws rules. If any provision is held unenforceable,
the remaining provisions remain in force.
````

## File: docs/config.md
````markdown
# Configuration

For basic configuration instructions, see [this documentation](https://developers.openai.com/codex/config-basic).

For advanced configuration instructions, see [this documentation](https://developers.openai.com/codex/config-advanced).

For a full configuration reference, see [this documentation](https://developers.openai.com/codex/config-reference).

## Lifecycle hooks

Admins can set top-level `allow_managed_hooks_only = true` in
`requirements.toml` to ignore user, project, and session hook configs while
still allowing managed hooks from requirements and managed config layers. This
setting is only supported in `requirements.toml`; putting it in `config.toml`
does not enable managed-hooks-only mode.
````

## File: docs/contributing.md
````markdown
## Contributing

**External contributions are by invitation only**

At this time, the Codex team does not accept unsolicited code contributions.

If you would like to propose a new feature or a change in behavior, please open an issue describing the proposal or upvote an existing enhancement request. We prioritize new features based on community feedback, alignment with our roadmap, and consistency across all Codex surfaces (CLI, IDE extensions, web, etc.).

If you encounter a bug, please open a bug report or verify that an existing report already covers the issue. If you would like to help, we encourage you to contribute by sharing analysis, reproduction details, root-cause hypotheses, or a high-level outline of a potential fix directly in the issue thread.

The Codex team may invite an external contributor to submit a pull request when:

- the problem is well understood,
- the proposed approach aligns with the team’s intended solution, and
- the issue is deemed high-impact and high-priority.

Pull requests that have not been explicitly invited by a member of the Codex team will be closed without review.

**Why we do not generally accept external code contributions**

In the past, the Codex team accepted external pull requests for bug fixes. While we appreciated the effort and engagement from the community, this model did not scale well.

Many contributions were made without full visibility into the architectural context, system-level constraints, or near-term roadmap considerations that guide Codex development. Others focused on issues that were low priority or affected a very small subset of users. Reviewing and iterating on these PRs often took more time than implementing the fix directly, and diverted attention from higher-priority work.

The most valuable contributions consistently came from community members who demonstrated deep understanding of a problem domain. That expertise is most helpful when shared early -- through detailed bug reports, analysis, and design discussion in issues. Identifying the right solution is typically the hard part; implementing it is comparatively straightforward with the help of Codex itself.

For these reasons, we focus external contributions on discussion, analysis, and feedback, and reserve code changes for cases where a targeted invitation makes sense.

### Development workflow

If you are invited by a Codex team member to contribute a PR, here is the recommended development workflow.

- Create a _topic branch_ from `main` - e.g. `feat/interactive-prompt`.
- Keep your changes focused. Multiple unrelated fixes should be opened as separate PRs.
- Ensure your change is free of lint warnings and test failures.

### Guidance for invited code contributions

1. **Start with an issue.** Open a new one or comment on an existing discussion so we can agree on the solution before code is written.
2. **Add or update tests.** A bug fix should generally come with test coverage that fails before your change and passes afterwards. 100% coverage is not required, but aim for meaningful assertions.
3. **Document behavior.** If your change affects user-facing behavior, update the README, inline help (`codex --help`), or relevant example projects.
4. **Keep commits atomic.** Each commit should compile and the tests should pass. This makes reviews and potential rollbacks easier.

### Model metadata updates

When a change updates model catalogs or model metadata (`/models` payloads, presets, or fixtures):

- Set `input_modalities` explicitly for any model that does not support images.
- Keep compatibility defaults in mind: omitted `input_modalities` currently implies text + image support.
- Ensure client surfaces that accept images (for example, TUI paste/attach) consume the same capability signal.
- Add/update tests that cover unsupported-image behavior and warning paths.

### Opening a pull request (by invitation only)

- Fill in the PR template (or include similar information) - **What? Why? How?**
- Include a link to a bug report or enhancement request in the issue tracker
- Run **all** checks locally. Use the root `just` helpers so you stay consistent with the rest of the workspace: `just fmt`, `just fix -p <crate>` for the crate you touched, and the relevant tests (e.g., `just test -p codex-tui` or `just test` if you need a full sweep). CI failures that could have been caught locally slow down the process.
- Make sure your branch is up-to-date with `main` and that you have resolved merge conflicts.
- Mark the PR as **Ready for review** only when you believe it is in a merge-able state.

### Review process

1. One maintainer will be assigned as a primary reviewer.
2. If your invited PR introduces scope or behavior that was not previously discussed and approved, we may close the PR.
3. We may ask for changes. Please do not take this personally. We value the work, but we also value consistency and long-term maintainability.
4. When there is consensus that the PR meets the bar, a maintainer will squash-and-merge.

### Community values

- **Be kind and inclusive.** Treat others with respect; we follow the [Contributor Covenant](https://www.contributor-covenant.org/).
- **Assume good intent.** Written communication is hard - err on the side of generosity.
- **Teach & learn.** If you spot something confusing, open an issue or discussion with suggestions or clarifications.

### Getting help

If you run into problems setting up the project, would like feedback on an idea, or just want to say _hi_ - please open a Discussion topic or jump into the relevant issue. We are happy to help.

Together we can make Codex CLI an incredible tool. **Happy hacking!** :rocket:

### Contributor license agreement (CLA)

All contributors **must** accept the CLA. The process is lightweight:

1. Open your pull request.
2. Paste the following comment (or reply `recheck` if you've signed before):

   ```text
   I have read the CLA Document and I hereby sign the CLA
   ```

3. The CLA-Assistant bot records your signature in the repo and marks the status check as passed.

No special Git commands, email attachments, or commit footers required.

### Security & responsible AI

Have you discovered a vulnerability or have concerns about model output? Please e-mail **security@openai.com** and we will respond promptly.
````

## File: docs/example-config.md
````markdown
# Sample configuration

For a sample configuration file, see [this documentation](https://developers.openai.com/codex/config-sample).
````

## File: docs/exec.md
````markdown
# Non-interactive mode

For information about non-interactive mode, see [this documentation](https://developers.openai.com/codex/noninteractive).
````

## File: docs/execpolicy.md
````markdown
# Execution policy

For an overview of execution policy rules, see [this documentation](https://developers.openai.com/codex/exec-policy).
````

## File: docs/getting-started.md
````markdown
# Getting started with Codex CLI

For an overview of Codex CLI features, see [this documentation](https://developers.openai.com/codex/cli/features#running-in-interactive-mode).
````

## File: docs/install.md
````markdown
## Installing & building

### System requirements

| Requirement                 | Details                                                         |
| --------------------------- | --------------------------------------------------------------- |
| Operating systems           | macOS 12+, Ubuntu 20.04+/Debian 10+, or Windows 11 **via WSL2** |
| Git (optional, recommended) | 2.23+ for built-in PR helpers                                   |
| RAM                         | 4-GB minimum (8-GB recommended)                                 |

### DotSlash

The GitHub Release also contains a [DotSlash](https://dotslash-cli.com/) file for the Codex CLI named `codex`. Using a DotSlash file makes it possible to make a lightweight commit to source control to ensure all contributors use the same version of an executable, regardless of what platform they use for development.

### Build from source

```bash
# Clone the repository and navigate to the root of the Cargo workspace.
git clone https://github.com/openai/codex.git
cd codex/codex-rs

# Install the Rust toolchain, if necessary.
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source "$HOME/.cargo/env"
rustup component add rustfmt
rustup component add clippy
# Install helper tools used by the workspace justfile:
cargo install --locked just
# Install nextest for the `just test` helper.
cargo install --locked cargo-nextest

# Build Codex.
cargo build

# Launch the TUI with a sample prompt.
cargo run --bin codex -- "explain this codebase to me"

# After making changes, use the root justfile helpers (they default to codex-rs):
just fmt
just fix -p <crate-you-touched>

# Run the relevant tests (project-specific is fastest), for example:
just test -p codex-tui
# `just test` runs the test suite via nextest:
just test
# Avoid `--all-features` for routine local runs because it increases build
# time and `target/` disk usage by compiling additional feature combinations.
```

## Tracing / verbose logging

Codex is written in Rust, so it honors the `RUST_LOG` environment variable to configure its logging behavior.

The TUI records diagnostics in bounded local stores by default. Set `log_dir` explicitly to enable a plaintext TUI log for a run:

```bash
codex -c log_dir=./.codex-log
tail -F ./.codex-log/codex-tui.log
```

The non-interactive mode (`codex exec`) defaults to `RUST_LOG=error`, but messages are printed inline, so there is no need to monitor a separate file.

See the Rust documentation on [`RUST_LOG`](https://docs.rs/env_logger/latest/env_logger/#enabling-logging) for more information on the configuration options.
````

## File: docs/license.md
````markdown
## License

This repository is licensed under the [Apache-2.0 License](../LICENSE).
````

## File: docs/open-source-fund.md
````markdown
## Codex open source fund

We're excited to launch a **$1 million initiative** supporting open source projects that use Codex CLI and other OpenAI models.

- Grants are awarded up to **$25,000** API credits.
- Applications are reviewed **on a rolling basis**.

**Interested? [Apply here](https://openai.com/form/codex-open-source-fund/).**
````

## File: docs/sandbox.md
````markdown
## Sandbox & approvals

For information about Codex sandboxing and approvals, see [this documentation](https://developers.openai.com/codex/security).
````

## File: docs/skills.md
````markdown
# Skills

For information about skills, refer to [this documentation](https://developers.openai.com/codex/skills).
````

## File: docs/slash_commands.md
````markdown
# Slash commands

For an overview of Codex CLI slash commands, see [this documentation](https://developers.openai.com/codex/cli/slash-commands).
````

## File: LICENSE
````
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1.  Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

2.  Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

3.  Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

4.  Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
    Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
    stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
    that You distribute, all copyright, patent, trademark, and
    attribution notices from the Source form of the Work,
    excluding those notices that do not pertain to any part of
    the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
    distribution, then any Derivative Works that You distribute must
    include a readable copy of the attribution notices contained
    within such NOTICE file, excluding those notices that do not
    pertain to any part of the Derivative Works, in at least one
    of the following places: within a NOTICE text file distributed
    as part of the Derivative Works; within the Source form or
    documentation, if provided along with the Derivative Works; or,
    within a display generated by the Derivative Works, if and
    wherever such third-party notices normally appear. The contents
    of the NOTICE file are for informational purposes only and
    do not modify the License. You may add Your own attribution
    notices within Derivative Works that You distribute, alongside
    or as an addendum to the NOTICE text from the Work, provided
    that such additional attribution notices cannot be construed
    as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

5.  Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

6.  Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

7.  Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

8.  Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

9.  Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

Copyright 2025 OpenAI

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
````

## File: package.json
````json
{
  "name": "codex-monorepo",
  "private": true,
  "description": "Tools for repo-wide maintenance.",
  "scripts": {
    "format": "prettier --check *.json *.md docs/*.md .github/workflows/*.yml **/*.js",
    "format:fix": "prettier --write *.json *.md docs/*.md .github/workflows/*.yml **/*.js",
    "write-hooks-schema": "cargo run --manifest-path ./codex-rs/Cargo.toml -p codex-hooks --bin write_hooks_schema_fixtures"
  },
  "devDependencies": {
    "prettier": "^3.5.3"
  },
  "resolutions": {
    "@modelcontextprotocol/sdk": "1.26.0",
    "braces": "^3.0.3",
    "flatted": "3.4.2",
    "glob@10.4.5": "10.5.0",
    "handlebars": "4.7.9",
    "micromatch": "^4.0.8",
    "minimatch@3.1.2": "3.1.4",
    "minimatch@9.0.5": "9.0.7",
    "path-to-regexp": "8.4.0",
    "picomatch@2.3.1": "2.3.2",
    "picomatch@4.0.3": "4.0.4",
    "rollup": "4.59.0",
    "semver": "^7.7.1"
  },
  "overrides": {
    "punycode": "^2.3.1"
  },
  "engines": {
    "node": ">=22",
    "pnpm": ">=10.33.0"
  },
  "packageManager": "pnpm@10.33.0+sha512.10568bb4a6afb58c9eb3630da90cc9516417abebd3fabbe6739f0ae795728da1491e9db5a544c76ad8eb7570f5c4bb3d6c637b2cb41bfdcdb47fa823c8649319"
}
````

## File: pnpm-workspace.yaml
````yaml
packages:
  - codex-cli
  - codex-rs/responses-api-proxy/npm
  - sdk/typescript
ignoredBuiltDependencies:
  - esbuild
minimumReleaseAge: 10080
minimumReleaseAgeExclude: []
blockExoticSubdeps: true
strictDepBuilds: true
trustPolicy: no-downgrade
trustPolicyIgnoreAfter: 10080
trustPolicyExclude: []
allowBuilds: {}
````

## File: README.md
````markdown
<p align="center"><strong>Codex CLI</strong> is a coding agent from OpenAI that runs locally on your computer.
<p align="center">
  <img src="https://github.com/openai/codex/blob/main/.github/codex-cli-splash.png" alt="Codex CLI splash" width="80%" />
</p>
</br>
If you want Codex in your code editor (VS Code, Cursor, Windsurf), <a href="https://developers.openai.com/codex/ide">install in your IDE.</a>
</br>If you want the desktop app experience, run <code>codex app</code> or visit <a href="https://chatgpt.com/codex?app-landing-page=true">the Codex App page</a>.
</br>If you are looking for the <em>cloud-based agent</em> from OpenAI, <strong>Codex Web</strong>, go to <a href="https://chatgpt.com/codex">chatgpt.com/codex</a>.</p>

---

## Quickstart

### Installing and running Codex CLI

Run the following on Mac or Linux to install Codex CLI:

```shell
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Run the following on Windows to install Codex CLI:

```
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

Codex CLI can also be installed via the following package managers:

```shell
# Install using npm
npm install -g @openai/codex
```

```shell
# Install using Homebrew
brew install --cask codex
```

Then simply run `codex` to get started.

<details>
<summary>You can also go to the <a href="https://github.com/openai/codex/releases/latest">latest GitHub Release</a> and download the appropriate binary for your platform.</summary>

Each GitHub Release contains many executables, but in practice, you likely want one of these:

- macOS
  - Apple Silicon/arm64: `codex-aarch64-apple-darwin.tar.gz`
  - x86_64 (older Mac hardware): `codex-x86_64-apple-darwin.tar.gz`
- Linux
  - x86_64: `codex-x86_64-unknown-linux-musl.tar.gz`
  - arm64: `codex-aarch64-unknown-linux-musl.tar.gz`

Each archive contains a single entry with the platform baked into the name (e.g., `codex-x86_64-unknown-linux-musl`), so you likely want to rename it to `codex` after extracting it.

</details>

### Using Codex with your ChatGPT plan

Run `codex` and select **Sign in with ChatGPT**. We recommend signing into your ChatGPT account to use Codex as part of your Plus, Pro, Business, Edu, or Enterprise plan. [Learn more about what's included in your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-in-chatgpt).

You can also use Codex with an API key, but this requires [additional setup](https://developers.openai.com/codex/auth#sign-in-with-an-api-key).

## Docs

- [**Codex Documentation**](https://developers.openai.com/codex)
- [**Contributing**](./docs/contributing.md)
- [**Installing & building**](./docs/install.md)
- [**Open source fund**](./docs/open-source-fund.md)

This repository is licensed under the [Apache-2.0 License](LICENSE).
````
