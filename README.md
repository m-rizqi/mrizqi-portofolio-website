# 🧬 Vibecoding Starter Kit

A documentation-first scaffold for building software with an AI coding agent (Claude Code, Cursor, etc.) as the primary driver. Instead of jumping straight into code, this kit forces a **plan → build → ship** lifecycle through structured markdown docs that both you and the AI read before acting.

The core idea: an AI agent without context hallucinates, invents architecture, and drifts. Fill out the planning docs once, and every future session — yours or the AI's — starts from the same source of truth.

## Folder structure

```
docs/
  pra-development/   1. Planning: PRD, architecture, ERD, API contract, user flow, UI/UX guidelines
  design/            2. Visual references (moodboards) and finalized screens for frontend work
  development/        3. Active build: task checklist, session memory, tech debt log, prompt snippets
  pasca-development/ 4. Release: security checklist, deployment guide, QA, handover doc
source-codes/
  ai-service/        Empty scaffold — populate only if the architecture doc calls for it
  backend/
  frontend/
  mobile/
.claude/             Claude Code project config: rules, skills, settings
graphify-out/        Generated knowledge graph of this repo (see CLAUDE.md)
CLAUDE.md            AI agent directive — read by Claude Code every session
```

## The workflow

1. **Plan** (`docs/pra-development/`) — Start a chat with your AI agent: *"I want to build [app idea]. Read the templates in docs/pra-development/ and ask me questions to fill them out, starting from the PRD."* Work through the numbered sequence (1→8). Lock each doc once it's solid.
2. **Build** (`docs/development/` + `source-codes/`) — driven by **GSD Core**: locked planning docs get ingested into `.planning/`, then each feature runs plan → execute (TDD, atomic commits) → generate tests → validate coverage (including error/red-path cases) → code review → verify. Shortcuts still get logged in `3-TECH-DEBT-LOG.md`; reuse `4-PROMPT-SNIPPETS.md` for consistent prompts. See `CLAUDE.md` for the exact command sequence.
3. **Ship** (`docs/pasca-development/`) — Only after you confirm development is done: security audit → deployment guide → QA → handover doc.

Design work (`docs/design/`) runs in parallel with planning/build whenever the project has a frontend.

## Getting started

1. Clone this repo (or use it as a template).
2. Open it in Claude Code — `CLAUDE.md` is read automatically and tells the agent how to navigate the phases.
3. Say what you want to build and let the agent walk you through `docs/pra-development/` first. Don't let it skip to code.
4. Fill in `.env` from `.env.example` once your architecture doc defines what secrets you need.

## What's pre-wired

This kit ships with a Claude Code config (`.claude/`) that includes:
- **graphify** — turns this repo into a queryable knowledge graph (`graphify-out/`). Ask codebase questions and it queries the graph before falling back to raw file search.
- **GSD Core** — the execution engine for the build phase: turns locked planning docs into a `.planning/` roadmap and drives each feature through plan → execute → test → validate → review → verify.
- Project rules (`.claude/rules/`) covering general programming (incl. anti-over-engineering, comment discipline, file-size limits), git workflow, backend/frontend/mobile standards, testing (strict TDD + full use-case coverage), error handling, AI behavior guardrails, and documentation.
- Several general-purpose plugins/skills (TDD, code review, design, browser testing, etc.) — see `CLAUDE.md` for which ones matter at which phase, and prune what you don't use.

## Known gaps

- `source-codes/*` are empty placeholders — nothing to scaffold until an architecture doc exists.
- Some `docs/` cross-references still point at an old `pre-development` folder name (should be `pra-development`) — treat those as typos until cleaned up.
- `.claude/skills/` and `.agents/skills/` currently carry more skill packages than this template actually uses; trim to what your project needs.
