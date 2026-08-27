# Vibecoding Starter Kit — Agent Directive

This repo is a **vibecoding starter kit**: docs-driven, three-phase lifecycle. Read this file first, every session, before touching code.

## The three phases (in order — never skip ahead)

1. **`docs/pra-development/`** — planning. Do not write production code, scaffold folders, or install dependencies before `3-PRD.md` and `4-ARCHITECTURE.md` exist and are locked. Follow the numbered sequence (1→8). If a doc is still a `-TEMPLATE`, it isn't locked yet — keep asking questions instead of coding.
2. **`docs/development/`** — active build. **GSD Core is disabled for this project — do not invoke any `gsd-*` command or agent during development.** Drive the loop manually instead: hand-maintain `1-TASK-CHECKLIST.md` (task breakdown) and `2-CURRENT-STATE.md` (what's done / in progress) directly, no `.planning/` state layer. `3-TECH-DEBT-LOG.md` stays as the human-readable debt rollup. `4-PROMPT-SNIPPETS.md` still applies as reusable prompt patterns. Quality gates that used to run through GSD steps still apply directly: `ponytail` on every implementation pass, `superpowers:test-driven-development` for red-green-refactor, `doubt-driven-development` before non-trivial/high-stakes logic ships, `code-review`/`code-simplifier` before merge.
3. **`docs/pasca-development/`** — release. Do not enter this phase until the user explicitly confirms development is done. Sequence: `1-SECURITY-CHECKLIST.md` → `2-DEPLOYMENT-GUIDE.md` → `3-TESTING-QA.md` → `4-HANDOVER-DOC-TEMPLATE.md`.

`docs/design/references/` (moodboards) and `docs/design/screens/` (final screens) feed the frontend work inside phase 2 — check both before writing any UI code, alongside `docs/pra-development/8-UI-UX-GUIDELINES.md` for the hard rules (colors, spacing, typography).

Each folder's own `README.md` carries the full AI directive for that phase — this file only orders them and resolves conflicts between them and the tool config below.

**Known issue:** several docs still reference a `docs/pre-development/` path from before a folder rename. The real folder is `docs/pra-development/`. Read every `pre-development` reference as `pra-development`.

## Where code goes

`source-codes/{ai-service,backend,frontend,mobile}/` — all empty. Scaffold only the services `4-ARCHITECTURE.md` actually calls for, not all four by default.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## GSD Core — DISABLED for this project

GSD Core (the `gsd-*` commands/agents family) is **not used** to drive the development phase here. Do not invoke `gsd-discuss-phase`, `gsd-plan-phase`, `gsd-execute-phase`, `gsd-add-tests`, `gsd-validate-phase`, `gsd-code-review`, `gsd-verify-work`, `gsd-ingest-docs`, or any other `gsd-*` skill/agent, and do not bootstrap or read `.planning/` for authoritative state — it does not exist for this project.

Run the equivalent loop manually instead, using the generic skills directly:
1. Discuss/clarify the task with the user before planning (ad hoc, no `gsd-discuss-phase`).
2. Break work into tasks in `docs/development/1-TASK-CHECKLIST.md` (`planning-and-task-breakdown` skill if useful).
3. Implement with strict TDD (`.claude/rules/06-testing-standards.md`, `superpowers:test-driven-development`): red, then green, then refactor. `ponytail` governs every implementation pass (simplest solution, no speculative abstraction, file-size limits per `.claude/rules/01-general-programming.md`).
4. Cover full use-case scope per `.claude/rules/06-testing-standards.md` §5 (happy path + edge cases + error/red-path) — no dedicated auditor agent, just enforce it directly.
5. Run `code-review` / `code-simplifier` / `ponytail-review` on changed files before merge. For perf-sensitive changes, also run `performance-optimization`.
6. `doubt-driven-development` before any non-trivial or high-stakes plan/fix is treated as final.
7. `superpowers:verification-before-completion` before claiming a task done — show the actual test output.

Security- and UI-heavy work still gets a dedicated pass — use `security-and-hardening` / `security-review` and `ui-ux-pro-max` / `frontend-design` instead of the `gsd-secure-phase` / `gsd-ui-review` equivalents — feeding findings into `docs/pasca-development/1-SECURITY-CHECKLIST.md` by hand.

Update `docs/development/2-CURRENT-STATE.md` and `3-TECH-DEBT-LOG.md` by hand at milestone boundaries, since there's no GSD state layer doing it automatically.

### One loop, three names

If you've seen the DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP lifecycle (the `claude-subconscious` plugin's `spec-driven-development` / `planning-and-task-breakdown` / `incremental-implementation` / `test-driven-development` / `code-review-and-quality` / `code-simplification` / `shipping-and-launch` skill set) — that's the same loop this project runs manually now that GSD Core is disabled:

| Stage | This repo | Skill to use (GSD disabled) |
|---|---|---|
| DEFINE | `docs/pra-development/` | `spec-driven-development` (ad hoc, no `gsd-spec-phase`/`gsd-ingest-docs`) |
| PLAN | `docs/development/1-TASK-CHECKLIST.md` | `planning-and-task-breakdown` |
| BUILD | `source-codes/` | `incremental-implementation` + `test-driven-development` |
| VERIFY | `.claude/rules/06-testing-standards.md` | `test-driven-development`, manual full-use-case check (§5) |
| REVIEW | — | `code-review-and-quality`, `performance-optimization` (perf-sensitive changes), `code-simplification`/`ponytail-review` |
| SHIP | `docs/pasca-development/` | `shipping-and-launch` |

Use these `claude-subconscious` skills directly for each stage — there's no GSD layer to avoid duplicating anymore.

## Skills & plugins — who does what, and when

This repo has more Claude Code plugins/skills installed than it strictly uses. Where a plugin skill and a `.claude/rules/*.md` file cover the same ground, **the rules file wins** — it's this project's specific interpretation; the skill is the generic process behind it.

- **ponytail** — default lens for every code change: YAGNI, reuse before writing, shortest working diff. Applies in all three phases.
- **graphify** — default for "how does X work" / architecture questions once `graphify-out/graph.json` exists (see above).
- **TDD** (`.claude/rules/06-testing-standards.md`, `superpowers:test-driven-development`, `tdd-guard`) — three layers, one goal, strict red-green-refactor, no implementation before a failing test. Follow the rules file for full use-case coverage (happy path + edge cases + error/red-path cases, not just the happy path) and for what to mock. `tdd-guard` needs a test framework to attach to — nothing exists yet in `source-codes/*`, so it's uninstalled/unconfigured until phase 2 picks a stack. Run `/tdd-guard:setup` once a service has a test runner.
- **GSD Core — disabled.** Do not invoke any `gsd-*` command or agent during development; see the dedicated section above for the manual replacement loop.
- **Quality loop** — `ponytail` on every implementation pass (simplest working solution), `doubt-driven-development` before any non-trivial/high-stakes logic is final, `code-simplifier`/`ponytail-review` as an extra bloat check, `superpowers:verification-before-completion` before claiming anything is done.
- **Design skills** (`frontend-design`, `ui-ux-pro-max`, and `.claude/skills/{design,design-system,ui-styling,banner-design,brand,slides}`) — only load these once `docs/pra-development/8-UI-UX-GUIDELINES.md` is locked. Treat that doc as the source of truth and these skills as execution tools, not decision-makers.
- **playwright** — browser-driven QA, primarily for `docs/pasca-development/3-TESTING-QA.md`.
- **context7** — pull current library docs when scaffolding `source-codes/*` instead of relying on training data.
- **Remaining `claude-subconscious` skills** (`api-and-interface-design`, `ci-cd-and-automation`, `security-and-hardening`, `documentation-and-adrs`, `observability-and-instrumentation`, `debugging-and-error-recovery`, `context-engineering`, `interview-me`, `idea-refine`, `git-workflow-and-versioning`, `deprecation-and-migration`, `frontend-ui-engineering`, `using-agent-skills`, under `.claude/skills/` and duplicated under `.agents/skills/`) — the ones *not* already mapped in "One loop, three names" above. Background process guidance; defer to `.claude/rules/*.md` and the phase docs whenever they conflict. The duplication between `.claude/skills/` and `.agents/skills/` is a leftover install artifact, not intentional — safe to remove one copy.
