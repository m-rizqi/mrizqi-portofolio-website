# 🚀 Post-Development & Release Phase

Welcome to the **Post-Development** folder. This directory handles the critical final phase of the software lifecycle: security hardening, production deployment, quality assurance testing, and project handover.

Unlike the planning documents in `pra-development/` or the operational logs in `development/`, the documents here are activated **strictly after the coding phase is complete and the MVP is ready for release.**

---

## 🤖 FOR AI AGENTS: Execution & Trigger Directives
> **[AI AGENT INSTRUCTIONS - SYSTEM OVERRIDE]**
> If you are an AI assistant interacting with this folder, strictly follow these operational triggers:
> 1. **Readiness Check:** As soon as the user enters this phase or mentions that development is wrapping up, you **MUST** immediately ask the user: 
>    *"Is the development phase fully completed and is the application ready for production security auditing, testing, and deployment?"*
> 2. **Wait for Confirmation:** Do not generate deployment scripts or security/QA checklists until the user explicitly confirms that development is ready.
> 3. **Dynamic Generation & Input Gathering:** Once confirmed, guide the user step-by-step through the files in this folder. Actively prompt the user for necessary inputs (e.g., server specifications, cloud providers, domain names) to tailor the documents.
> 4. **Sequential Execution:** Follow the logical release pipeline: Security Audit (`1-SECURITY-CHECKLIST.md`) ➔ Deployment (`2-DEPLOYMENT-GUIDE.md`) ➔ QA Testing (`3-TESTING-QA.md`) ➔ Handover (`4-HANDOVER-DOC-TEMPLATE.md`).

---

## 👨‍💻 FOR HUMANS: Folder Summary & Overview
As the "Vibecoder", this folder ensures your application is thoroughly secured, rigorously tested, successfully deployed to your target server or store, and properly documented before you close out the project.

Here is a summary of the files inside this folder:

* **`1-SECURITY-CHECKLIST.md` (The Vulnerability Audit):**
  * *What it does:* Analyzes the project architecture and API contracts to enforce strict security rules (token storage, HTTPS enforcement, environment isolation, zero hardcoded keys).
  * *Why it matters:* Prevents critical security flaws from making it into production.
* **`2-DEPLOYMENT-GUIDE.md` (The Release Blueprint):**
  * *What it does:* Generates customized build instructions, server configurations (e.g., Docker, Nginx, VPS), and release steps tailored specifically to your tech stack.
  * *Why it matters:* Eliminates guesswork during the stressful server-launch phase.
* **`3-TESTING-QA.md` (The Quality Assurance Script):**
  * *What it does:* Maps out customized User Acceptance Testing (UAT) scenarios, functional checklists, and edge-case handling (such as network loss or slow connections) based on your PRD.
  * *Why it matters:* Ensures the application is stable, robust, and bug-free before users touch it.
* **`4-HANDOVER-DOC-TEMPLATE.md` (The Final Record):**
  * *What it does:* Summarizes the entire project ecosystem, repository links, credentials management, maintenance procedures, and known technical debt.
  * *Why it matters:* Provides a clean, professional documentation package when handing the product over to a client, team, or stakeholder.