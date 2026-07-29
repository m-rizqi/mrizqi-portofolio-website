# General Programming Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these universal coding standards across all files and modules in this repository.

1. **DRY (Don't Repeat Yourself):** Extract duplicated logic into reusable functions, utilities, or components.
2. **SOLID Principles:** Write modular, decoupled code adhering to single responsibility and dependency inversion.
3. **Clean Code & Readability:** Use descriptive variable and function names. Avoid magic numbers; use named constants.
4. **Defensive Programming:** Always validate inputs, handle edge cases gracefully, and write explicit null/undefined checks.
5. **No Dead Code:** Never leave commented-out code, unused variables, or unimported packages in production-bound files.
6. **No Over-Engineering (YAGNI):** Don't build for hypothetical future requirements. No interfaces, factories, abstraction layers, or config options for a single current use case. Ship the simplest solution that works; add complexity only when a second concrete need actually shows up.
7. **Comment Discipline:** Comments explain *why*, never *what* — code should be self-explanatory through naming. Don't restate the obvious, narrate a change, or reference a ticket/task in a comment. No comment is better than one that will rot.
8. **File Size Limit — Split Before It Grows Too Big:** Applies to code files and markdown docs alike.
   * Code files: soft limit ~300 lines. At 500 lines, split by responsibility (extract a module, class, component, or function group) — don't wait until 1000.
   * Markdown docs: soft limit ~500 lines for static/reference docs — split by section into a new file once a topic outgrows one document. Append-only logs (session-state notes, debt logs, changelogs) must be rotated/archived once they exceed ~300 lines instead of growing indefinitely — move stale entries to a separate `-ARCHIVE.md` file.
   * Treat 1000 lines as an absolute emergency ceiling, never a target — by that point a file already mixes multiple responsibilities and stops being reliably reviewable by either a human or an AI agent.