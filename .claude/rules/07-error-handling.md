# Error Handling & Logging Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these standards when handling errors and exceptions across all modules.

1. **Never Swallow Errors:** Avoid empty `catch {}` blocks. Every caught error must be logged or handled appropriately with a user-facing fallback.
2. **Graceful Degradation:** If a non-critical feature fails (e.g., fetching user profile avatar), the entire application or screen must not crash; display a fallback UI instead.
3. **Structured Logging:** Use meaningful log levels (Error, Warning, Info) and avoid printing raw sensitive data (like passwords or tokens) to the console/logs.