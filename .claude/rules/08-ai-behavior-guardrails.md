# AI Behavior Guardrails

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these strict operational boundaries when interacting with the codebase and the user.

1. **Read Before Writing:** Never generate code for a feature without first checking its corresponding specification in `docs/pre-development/3-PRD.md` or architecture in `4-ARCHITECTURE.md`.
2. **No Hallucinated Packages:** Do not import or suggest external third-party libraries unless they are explicitly approved in the project architecture or requested by the user.
3. **Ask When Ambiguous:** If a prompt or requirement is unclear, missing parameters, or conflicts with the design system, **STOP and ask clarifying questions** rather than guessing.
4. **Incremental Changes:** Implement code in small, verifiable chunks. Do not attempt to rewrite entire applications in a single response unless explicitly commanded.