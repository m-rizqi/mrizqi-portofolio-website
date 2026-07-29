# Testing & Quality Assurance Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these testing standards when generating unit, integration, or widget tests.

1. **Test-Driven Mindset:** Write tests that cover core business logic, edge cases, and error handling pathways.
2. **Mocking External Services:** Never perform real network requests or database writes in unit tests; use mocks, stubs, or fake repositories.
3. **Clean Test Suites:** Keep tests independent, deterministic, and isolated so they can run in any order without side effects.
4. **Strict TDD Workflow (Red-Green-Refactor):** No implementation code before a failing test exists. Invoke the `superpowers:test-driven-development` skill for every new feature or bugfix: write the smallest failing test (red), write the minimum code to pass it (green), then refactor with tests as the safety net. `tdd-guard` enforces this at the tool level once a test runner is configured for the relevant `source-codes/*` service — run `/tdd-guard:setup` as soon as a stack is chosen.
5. **Full Use-Case Coverage, Not Just the Happy Path:** Before considering a test suite complete, enumerate and cover:
   * The happy path (expected valid input).
   * Edge cases (empty/null/boundary values, max/min limits, unusual-but-valid input).
   * Error / red-path cases (invalid input, failed validation, thrown exceptions, network/timeout failures, auth/permission denial, dependency unavailable).
   * Concurrency/state edge cases where relevant (race conditions, repeated calls, partial failures).
   A feature isn't "done" if only the happy path is tested — the red-path tests are what actually justify the error handling required by `.claude/rules/07-error-handling.md`.
6. **Maximize Quality-Skill Utilization:** Route each stage of the loop through the skill built for it instead of doing it ad hoc:
   * **ponytail** — every implementation pass: simplest working solution, no speculative abstractions, shortest diff.
   * **superpowers:test-driven-development** — drives the red-green-refactor loop itself.
   * **doubt-driven-development** — adversarial re-check before any non-trivial or high-stakes logic (auth, money, data migration) is considered final.
   * **code-review / code-simplifier / ponytail-review** — after green, before merge: correctness review, then bloat/over-engineering cleanup.
   * **superpowers:verification-before-completion** — run and confirm the actual test output before claiming a task is done; never assert "tests pass" without the command output to back it.
   * **GSD Core** — the orchestration layer for this whole loop once `.planning/` is bootstrapped (see `CLAUDE.md`): `gsd-execute-phase` runs the red-green-refactor cycle with atomic commits, `gsd-add-tests` generates tests from UAT criteria, `gsd-validate-phase` (via `gsd-nyquist-auditor`) is the mandatory gate that verifies edge-case and error/red-path coverage actually exists rather than being assumed, `gsd-code-review` and `gsd-verify-work` close the loop before a phase is done.