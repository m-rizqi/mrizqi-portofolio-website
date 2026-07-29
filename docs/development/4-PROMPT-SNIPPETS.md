# ⚡ Prompt Snippets & Master Commands

> **[🤖 AI AGENT INSTRUCTIONS - READ THIS FIRST]**
> This document is a library of proven, highly-effective prompt templates tailored for this project's architecture and tech stack.
> 1. **Reuse Patterns:** When asked to generate a complex feature, consult these snippets to maintain structural consistency across files.
> 2. **Contextual Injection:** Use these templates as baseline instructions when instructing AI sub-agents (e.g., `mobile-architect`, `backend-master`, `ui-ux-promax`).
> 3. **Contribute:** Whenever you (the AI) or the user successfully crafts a prompt that generates flawless code on the first try, append it to this document for future sessions.

---

## 🗂️ 1. Architecture & Boilerplate Generation Prompts

### Snippet 1: Feature-First Clean Architecture Scaffold
* **Use Case:** When asking the AI to generate a brand new feature folder structure.
* **Prompt Template:**
  ```text
  Act as a Senior Mobile/Software Architect. Based on our 4-ARCHITECTURE.md, please generate the complete folder and file structure for a new feature named "[FEATURE_NAME]". 
  Ensure it follows the Clean Architecture pattern with these exact subfolders:
  - /data (models, datasources, repositories_impl)
  - /domain (entities, repositories_interface, usecases)
  - /presentation (bloc/controller, screens, widgets)
  Do not write the full implementation code yet, just create the structure and empty boilerplate classes with correct imports.

```

---

## 🎨 2. Frontend & UI/UX Generation Prompts

### Snippet 2: Pixel-Perfect Screen Implementation

* **Use Case:** When giving an image or wireframe to the AI for UI conversion.
* **Prompt Template:**
```text
Act as a Senior Frontend UI/UX Developer and UI-UX-Promax agent. 
Review the design requirements in docs/pre-development/8-UI-UX-GUIDELINES.md and any screens in docs/design/screens/. 
Implement the UI code for [SCREEN_NAME] strictly using our design system (exact hex colors, typography weights, and 8pt spacing grid). 
Ensure all touch targets are at least 48x48dp and implement proper loading/error states.

```



---

## ⚙️ 3. State Management & Logic Prompts

### Snippet 3: State & BLoC / Controller Generation

* **Use Case:** When writing business logic for a specific feature.
* **Prompt Template:**
```text
Act as a Senior State Management Specialist. Implement the state logic for [FEATURE_NAME] using [STATE_MANAGEMENT_TOOL, e.g., flutter_bloc].
1. Define all possible States (Initial, Loading, Success, Error).
2. Define all Events/Actions.
3. Implement the Business Logic Component (BLoC/Cubit) ensuring it handles errors gracefully and emits states cleanly. 
Keep UI and business logic strictly separated.

```



---

## 🐛 4. Debugging & Refactoring Prompts

### Snippet 4: Systematic Bug Fixing & Edge-Case Audit

* **Use Case:** When an error occurs or a feature is behaving unexpectedly.
```text
We encountered the following error/bug: [PASTE ERROR HERE].
Act as a Rigorous Code Auditor (Ponytail Mode). 
1. Analyze the root cause of this bug based on our 4-ARCHITECTURE.md and 6-API-CONTRACT.md.
2. Provide a clean, robust fix without introducing temporary hacks or side effects.
3. Check if this bug exposes any missing edge cases (like loading or empty states) and suggest the fix.

```



---

> **[🤖 AI AGENT INSTRUCTION - POST-SNIPPET USE]**
> When using or modifying these snippets during a development session, ensure any project-specific placeholders (like `[FEATURE_NAME]`) are correctly replaced with real values from the PRD.