# Git Workflow & Commit Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Adhere strictly to these Git practices when managing versions and history.

1. **Conventional Commits:** Use standardized prefixes for commit messages:
   * `feat: [description]` for new features.
   * `fix: [description]` for bug fixes.
   * `refactor: [description]` for code refactoring without behavior change.
   * `docs: [description]` for documentation updates.
   * `chore: [description]` for maintenance tasks or dependency updates.
2. **Atomic Commits:** Make small, focused commits that target a single logical change.
3. **Secret Protection:** Never commit `.env` files, API keys, credentials, or build output directories (`node_modules`, `build/`, `.dart_tool/`).