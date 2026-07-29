# Vibecoding Starter Kit — Agent Directive

This repo is a **vibecoding starter kit**: docs-driven, three-phase lifecycle. Read this file first, every session, before touching code.

## The three phases (in order — never skip ahead)

1. **`docs/pra-development/`** — planning. Do not write production code, scaffold folders, or install dependencies before `3-PRD.md` and `4-ARCHITECTURE.md` exist and are locked. Follow the numbered sequence (1→8). If a doc is still a `-TEMPLATE`, it isn't locked yet — keep asking questions instead of coding.
2. **`docs/development/`** — active build. Read `1-TASK-CHECKLIST.md` at the start of a task, tick items off as you verify them. Update `2-CURRENT-STATE.md` at the end of every session — this is the only memory the next session has. Log any shortcut or workaround in `3-TECH-DEBT-LOG.md` immediately, don't leave hidden debt. Reuse `4-PROMPT-SNIPPETS.md` when scaffolding new features.
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

## Skills & plugins — who does what, and when

This repo has more Claude Code plugins/skills installed than it strictly uses. Where a plugin skill and a `.claude/rules/*.md` file cover the same ground, **the rules file wins** — it's this project's specific interpretation; the skill is the generic process behind it.

- **ponytail** — default lens for every code change: YAGNI, reuse before writing, shortest working diff. Applies in all three phases.
- **graphify** — default for "how does X work" / architecture questions once `graphify-out/graph.json` exists (see above).
- **TDD** (`.claude/rules/06-testing-standards.md`, `superpowers:test-driven-development`, `tdd-guard`) — three layers, one goal. Use `superpowers:test-driven-development` to drive the red-green-refactor loop; follow the rules file for what to mock. `tdd-guard` needs a test framework to attach to — nothing exists yet in `source-codes/*`, so it's uninstalled/unconfigured until phase 2 picks a stack. Run `/tdd-guard:setup` once a service has a test runner.
- **code-review / code-simplifier / ponytail-review** — run before merging: code-review for correctness, code-simplifier/ponytail-review for bloat.
- **Design skills** (`frontend-design`, `ui-ux-pro-max`, and `.claude/skills/{design,design-system,ui-styling,banner-design,brand,slides}`) — only load these once `docs/pra-development/8-UI-UX-GUIDELINES.md` is locked. Treat that doc as the source of truth and these skills as execution tools, not decision-makers.
- **playwright** — browser-driven QA, primarily for `docs/pasca-development/3-TESTING-QA.md`.
- **context7** — pull current library docs when scaffolding `source-codes/*` instead of relying on training data.
- **The generic SDLC skill set** (`api-and-interface-design`, `ci-cd-and-automation`, `spec-driven-development`, `security-and-hardening`, etc., under `.claude/skills/` and duplicated under `.agents/skills/`) — background process guidance; defer to `.claude/rules/*.md` and the phase docs whenever they conflict. The duplication between `.claude/skills/` and `.agents/skills/` is a leftover install artifact, not intentional — safe to remove one copy.
