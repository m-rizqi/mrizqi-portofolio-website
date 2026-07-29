# 🚀 Development Phase Tracking & Memory

Welcome to the **Development** folder. This directory acts as the active operational control center for the project while code is being written. 

Unlike the static planning documents in `pra-development/`, the files in this folder are **dynamic**. They change, update, and evolve in real-time as the application is built.

---

## 🤖 FOR AI AGENTS: Execution & Maintenance Directives
> **[AI AGENT INSTRUCTIONS - SYSTEM OVERRIDE]**
> If you are an AI assistant actively writing code for this repository, you must treat this folder as your operational logbook:
> 1. **Strict Task Tracking:** You must read `1-TASK-CHECKLIST.md` at the start of a task and update subtasks (`[ ]` to `[x]`) immediately after writing and verifying the code.
> 2. **Session Memory Hand-off:** At the end of every coding session, you **MUST** update `2-CURRENT-STATE.md` so that the next AI session (or the user) retains full context without losing memory.
> 3. **Log Technical Debt:** If you apply a temporary shortcut, mock, or workaround to bypass an urgent blocker, log it immediately in `3-TECH-DEBT-LOG.md`. Do not leave hidden technical debt.
> 4. **Use Master Snippets:** Consult `4-PROMPT-SNIPPETS.md` when scaffolding new features to maintain structural consistency.

---

## 👨‍💻 FOR HUMANS: Folder Summary & Overview
As the "Vibecoder", this folder allows you to monitor what the AI is doing, prevent it from hallucinating or losing context across chat sessions, and maintain code quality.

Here is a summary of the files inside this folder:

* **`1-TASK-CHECKLIST.md` (The Master Checklist):** 
  * *What it does:* Breaks down high-level PRD features into granular, step-by-step subtasks (from project setup to final QA).
  * *Why it matters:* Prevents the AI from skipping steps or writing code out of order.
* **`2-CURRENT-STATE.md` (The Long-Term Memory):** 
  * *What it does:* Records the exact state of the codebase, installed packages, current Git branch, and immediate next steps at the end of a session.
  * *Why it matters:* Allows you to start a brand new chat session with Claude tomorrow and resume coding instantly without re-explaining the project.
* **`3-TECH-DEBT-LOG.md` (The Shortcut & Debt Tracker):** 
  * *What it does:* Catalogs temporary hacks, missing error states, or unrefactored code implemented during rapid MVP development.
  * *Why it matters:* Ensures you can easily clean up the code before a production release without forgetting critical shortcuts.
* **`4-PROMPT-SNIPPETS.md` (The Command Library):** 
  * *What it does:* Stores proven, highly-effective prompt templates tailored specifically for this project's architecture.
  * *Why it matters:* Guarantees consistent code generation style every time you ask the AI to build a new feature or fix a bug.