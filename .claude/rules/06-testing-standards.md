# Testing & Quality Assurance Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these testing standards when generating unit, integration, or widget tests.

1. **Test-Driven Mindset:** Write tests that cover core business logic, edge cases, and error handling pathways.
2. **Mocking External Services:** Never perform real network requests or database writes in unit tests; use mocks, stubs, or fake repositories.
3. **Clean Test Suites:** Keep tests independent, deterministic, and isolated so they can run in any order without side effects.