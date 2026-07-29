# Mobile App Development Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these guidelines when building mobile applications (e.g., Flutter, Android).

1. **Clean Architecture / Feature-First:** Organize code strictly into `/data`, `/domain`, and `/presentation` layers as outlined in `docs/pre-development/4-ARCHITECTURE.md`.
2. **Performance Optimization:** Avoid heavy computations on the main UI thread. Use isolates or asynchronous operations for heavy data processing.
3. **UI Responsiveness:** Ensure layouts use flexible widgets (`Expanded`, `Flexible`, `LayoutBuilder`) to prevent overflow errors on various screen sizes.
4. **Local Data Security:** Encrypt sensitive tokens or user data using secure local storage solutions (e.g., Flutter Secure Storage).