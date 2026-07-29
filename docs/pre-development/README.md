# 📂 Pre-Development Phase (Vibecoding Foundations)

Welcome to the **Pre-Development** folder. This directory contains the foundational documents required to execute a flawless *vibecoding* workflow. 

In an AI-driven development environment, **context is everything**. Skipping this phase will lead to AI hallucinations, inconsistent code, and architecture spaghetti. These documents serve as the strict boundaries and instructions for both human developers and AI agents.

---

## 🤖 FOR AI AGENTS: Core Directives
> **[AI AGENT INSTRUCTIONS - SYSTEM OVERRIDE]**
> If you are an AI assistant (like Claude, ChatGPT, or Cursor) reading this repository, treat this folder as your primary source of truth.
> 1. **Do Not Guess:** Never write production code, generate folder structures, or install dependencies without first reading `3-PRD-TEMPLATE.md` and `4-ARCHITECTURE.md`.
> 2. **Context First:** Always read the finalized documents in this folder to understand the business goals, tech stack, and visual guidelines before executing development tasks.
> 3. **Enforce Boundaries:** If the human user asks you to build a feature that contradicts the `Out of Scope` section in the PRD, or uses a library not listed in the Architecture document, **STOP and warn the user**. 
> 4. **Sequential Completion:** When guiding the user to plan a project, follow the numbering (1 to 8). Always ask clarifying questions if a template's requirements are ambiguous.

---

## 👨‍💻 FOR HUMANS: How to Use This Folder
As the "Vibecoder" (Product Owner / Architect), your job is to guide the AI to fill these documents out *before* you start coding.

### The Workflow:
1. **Initialize the Conversation:** Start a new chat with your AI (e.g., in Claude Desktop or Cursor).
2. **Command the AI:** Give the AI a prompt like: *"I want to build [App Idea]. Please read the templates in `docs/pre-development/` starting from the PRD, and ask me questions to fill them out one by one."*
3. **Iterate & Refine:** The AI will ask you questions. Answer them. The AI will generate the markdown content.
4. **Save & Lock:** Once a document (e.g., the PRD) looks solid, save it in your project repository and remove the `-TEMPLATE` from the filename (e.g., rename `3-PRD-TEMPLATE.md` to `3-PRD.md`).
5. **Proceed to Code:** Only move to the `development` folder once this phase is fully locked in.

---

## 📄 Document Index

Here is the recommended sequence for project planning:

* **Business & Strategy (Optional but Recommended)**
  * `1-BMC-TEMPLATE-OPTIONAL.md`: Business Model Canvas for startups.
  * `2-BRD-TEMPLATE.md`: High-level business goals and KPIs.
* **Product & Technical Blueprint (Mandatory)**
  * `3-PRD-TEMPLATE.md`: The central compass. Defines features, user stories, and scope.
  * `4-ARCHITECTURE.md`: Tech stack, folder structure, and strict coding patterns.
  * `5-ERD-TEMPLATE.md`: Database schema and relationships.
  * `6-API-CONTRACT-TEMPLATE.md`: Communication rules between frontend and backend.
* **Design & Experience (Mandatory for Frontend)**
  * `7-USER-FLOW-TEMPLATE.md`: Screen-by-screen navigation map.
  * `8-UI-UX-GUIDELINES-TEMPLATE.md`: Strict rules for colors, spacing, typography, and vibe.