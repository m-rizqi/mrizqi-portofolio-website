# 🧠 Current State & Session Memory

> **[🤖 AI AGENT INSTRUCTIONS - READ THIS FIRST]**
> This document acts as your long-term memory across different chat sessions. 
> 1. **Start of Session:** Always read this document FIRST to understand where the project left off, what dependencies are installed, and what the immediate next steps are.
> 2. **End of Session:** You MUST update this document at the end of every coding session before the user closes the chat. Summarize what was achieved, log any new dependencies, and set the next steps.
> 3. **Accuracy:** Ensure the "Recent Technical Decisions" section strictly reflects the actual codebase to prevent hallucinating conflicting architectures in future sessions.

---

## 🕒 1. Last Update Context
* **Date & Time:** [e.g., 2026-05-15 14:00]
* **Last Active Agent/Session Focus:** [e.g., Implemented UI and BLoC state management for the Login Screen]
* **Current Git Branch:** [e.g., `feature/auth-system`]

---

## 📦 2. Active Tech Stack & Key Dependencies
*(Agent Note: Keep this updated so you don't hallucinate missing or incorrect packages).*

* **Core Framework:** [e.g., Flutter 3.x]
* **State Management:** [e.g., flutter_bloc, equatable]
* **Routing:** [e.g., go_router]
* **Networking:** [e.g., dio]
* **Storage/Cache:** [e.g., flutter_secure_storage]
* **UI/Styling:** [e.g., Material 3, custom design system]

---

## 🏗️ 3. Current Codebase Status
*A high-level summary of what actually exists in the codebase right now.*

* **Completed Modules:**
  * [e.g., Base directory structure setup in `/lib`]
  * [e.g., Global theme and color palette configured]
  * [e.g., Login Screen UI built (pixel-perfect to Figma)]
* **Work In Progress (WIP):**
  * [e.g., Wiring up the Login UI to the AuthBLoC]
  * [e.g., Connecting Dio client to the backend `/auth/login` endpoint]

---

## 🧠 4. Recent Technical Decisions & Context
*Log any important decisions made during the session to avoid contradictory code later.*

* [e.g., **Decision:** Decided to use `go_router` instead of standard Navigator 2.0 to handle deep linking more easily in the future.]
* [e.g., **Context:** The backend is currently returning 500 errors on the registration endpoint, so we are mocking the registration response locally for now.]
* [ ] ...

---

## 🚧 5. Known Issues & Blockers
*What is currently broken or pending?*

* [e.g., **Issue:** The keyboard overflows the screen on smaller devices during login. Needs a `SingleChildScrollView` wrapper.]
* [e.g., **Blocker:** Waiting for the backend team to provide the final API contract for the user profile data.]

---

## ⏭️ 6. Immediate Next Steps (For the next AI session)
*(Agent Note: When a new session starts, immediately prompt the user to begin these tasks).*

1. [e.g., Wrap the Login Form in `SingleChildScrollView` to fix the overflow bug.]
2. [e.g., Implement the AuthBLoC logic to handle the API response and save the JWT token.]
3. [e.g., Update `1-TASK-CHECKLIST.md` once the Auth feature is fully working.]

---
> **[🤖 AI AGENT INSTRUCTION - POST-UPDATE VERIFICATION]**
> After updating this file at the end of a session, confirm with the user: *"I have updated the 2-CURRENT-STATE.md with our latest progress. We are ready to wrap up this session. Have a great day!"*