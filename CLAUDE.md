# Vibecoding Starter Kit — Agent Directive

This repo is a **vibecoding starter kit**: docs-driven, three-phase lifecycle. Read this file first, every session, before touching code.

## The three phases (in order — never skip ahead)

1. **`docs/pra-development/`** — planning. Do not write production code, scaffold folders, or install dependencies before `3-PRD.md` and `4-ARCHITECTURE.md` exist and are locked. Follow the numbered sequence (1→8). If a doc is still a `-TEMPLATE`, it isn't locked yet — keep asking questions instead of coding.
2. **`docs/development/`** — active build, driven end-to-end by **GSD Core** (see the dedicated section below). GSD's own state in `.planning/` (`PROJECT.md`, `ROADMAP.md`, phase `PLAN.md`/`STATE.md`) is authoritative once bootstrapped — don't hand-maintain `1-TASK-CHECKLIST.md` / `2-CURRENT-STATE.md` in parallel with it. `3-TECH-DEBT-LOG.md` stays as the human-readable debt rollup — mirror what GSD surfaces into it at milestone boundaries. `4-PROMPT-SNIPPETS.md` still applies as reusable prompt patterns.
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

## GSD Core — execution engine for the development phase

GSD Core drives phase 2 end-to-end: planning, execution, testing, and verification. It keeps its own state in `.planning/` — that state is authoritative for active work once it exists.

**Bootstrap once `docs/pra-development/` is locked:**
- `gsd-ingest-docs` — reads the locked PRD/Architecture/ERD/API-Contract docs and bootstraps `.planning/` from them instead of starting from scratch.

**Per-phase loop (repeat for each roadmap phase / feature):**
1. `gsd-discuss-phase` — gather context through adaptive questioning before planning.
2. `gsd-plan-phase` — produce `PLAN.md` with task breakdown, dependency analysis, and a built-in verification loop.
3. `gsd-execute-phase` — execute the plan with wave-based parallelization and atomic commits. TDD (`.claude/rules/06-testing-standards.md`) governs every task in this step: red, then green, then refactor.
4. `gsd-add-tests` — generate tests from the phase's UAT criteria against the landed implementation.
5. `gsd-validate-phase` (backed by the `gsd-nyquist-auditor` agent) — closes test-coverage gaps: confirms happy path, edge cases, AND error/red-path cases are actually covered, not just asserted. Mandatory before a phase counts as tested.
6. `gsd-code-review` — bug/security/quality pass on the changed files. For perf-sensitive changes (new endpoints, list/table rendering, queries), also run the `performance-optimization` skill here — Core Web Vitals, N+1 queries, slow-path profiling. This is the one check nothing else in this loop covers.
7. `gsd-verify-work` / `gsd-verifier` — goal-backward check that the phase delivers what it promised, not just that tasks are ticked off.

Security- and UI-heavy phases additionally run `gsd-secure-phase` and `gsd-ui-review` before being considered done — feed their findings into `docs/pasca-development/1-SECURITY-CHECKLIST.md` rather than re-deriving them by hand.

`ponytail` still governs code style inside every GSD step (simplest solution, no speculative abstraction, file-size limits per `.claude/rules/01-general-programming.md`). `doubt-driven-development` runs before any non-trivial or high-stakes plan/fix is treated as final.

### One loop, three names

If you've seen the DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP lifecycle (the `claude-subconscious` plugin's `spec-driven-development` / `planning-and-task-breakdown` / `incremental-implementation` / `test-driven-development` / `code-review-and-quality` / `code-simplification` / `shipping-and-launch` skill set) — that's the same loop as above, not a separate one to run in addition:

| Stage | This repo | GSD Core |
|---|---|---|
| DEFINE | `docs/pra-development/` | `gsd-spec-phase`, `gsd-ingest-docs` |
| PLAN | — | `gsd-plan-phase` |
| BUILD | `source-codes/` | `gsd-execute-phase` |
| VERIFY | `.claude/rules/06-testing-standards.md` | `gsd-add-tests`, `gsd-validate-phase` |
| REVIEW | — | `gsd-code-review`, `performance-optimization` (see step 6), `code-simplifier`/`ponytail-review` |
| SHIP | `docs/pasca-development/` | `gsd-ship` |

Don't invoke the generic `claude-subconscious` skill for a stage GSD Core already runs — it's redundant work covering the same ground twice. `performance-optimization` is the only skill from that set with no GSD equivalent, hence it's wired into step 6 explicitly.

## Skills & plugins — who does what, and when

This repo has more Claude Code plugins/skills installed than it strictly uses. Where a plugin skill and a `.claude/rules/*.md` file cover the same ground, **the rules file wins** — it's this project's specific interpretation; the skill is the generic process behind it.

- **ponytail** — default lens for every code change: YAGNI, reuse before writing, shortest working diff. Applies in all three phases.
- **graphify** — default for "how does X work" / architecture questions once `graphify-out/graph.json` exists (see above).
- **TDD** (`.claude/rules/06-testing-standards.md`, `superpowers:test-driven-development`, `tdd-guard`) — three layers, one goal, strict red-green-refactor, no implementation before a failing test. Follow the rules file for full use-case coverage (happy path + edge cases + error/red-path cases, not just the happy path) and for what to mock. `tdd-guard` needs a test framework to attach to — nothing exists yet in `source-codes/*`, so it's uninstalled/unconfigured until phase 2 picks a stack. Run `/tdd-guard:setup` once a service has a test runner.
- **GSD Core** — the execution engine for phase 2; see the dedicated section above for the full per-phase loop (plan → execute → add-tests → validate-phase → code-review → verify-work).
- **Quality loop** — `ponytail` on every implementation pass (simplest working solution), `doubt-driven-development` before any non-trivial/high-stakes logic is final, `code-simplifier`/`ponytail-review` as an extra bloat check alongside GSD's own `gsd-code-review`, `superpowers:verification-before-completion` before claiming anything is done.
- **Design skills** (`frontend-design`, `ui-ux-pro-max`, and `.claude/skills/{design,design-system,ui-styling,banner-design,brand,slides}`) — only load these once `docs/pra-development/8-UI-UX-GUIDELINES.md` is locked. Treat that doc as the source of truth and these skills as execution tools, not decision-makers.
- **playwright** — browser-driven QA, primarily for `docs/pasca-development/3-TESTING-QA.md`.
- **context7** — pull current library docs when scaffolding `source-codes/*` instead of relying on training data.
- **Remaining `claude-subconscious` skills** (`api-and-interface-design`, `ci-cd-and-automation`, `security-and-hardening`, `documentation-and-adrs`, `observability-and-instrumentation`, `debugging-and-error-recovery`, `context-engineering`, `interview-me`, `idea-refine`, `git-workflow-and-versioning`, `deprecation-and-migration`, `frontend-ui-engineering`, `using-agent-skills`, under `.claude/skills/` and duplicated under `.agents/skills/`) — the ones *not* already mapped in "One loop, three names" above. Background process guidance; defer to `.claude/rules/*.md` and the phase docs whenever they conflict. The duplication between `.claude/skills/` and `.agents/skills/` is a leftover install artifact, not intentional — safe to remove one copy.
