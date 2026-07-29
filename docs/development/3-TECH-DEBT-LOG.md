# 🛠️ Technical Debt Log

> **[🤖 AI AGENT INSTRUCTIONS - READ THIS FIRST]**
> This document tracks temporary code shortcuts, hacks, unrefactored modules, and pending optimizations.
> 1. **Log Shortcut Solutions:** Whenever you implement a quick workaround, mock data, or a non-optimal architectural bypass to solve an urgent blocker, you must log it here immediately.
> 2. **Severity Levels:** Classify each technical debt item by severity (Low, Medium, High) so the team knows what needs immediate cleanup before production release.
> 3. **No Silent Accumulation:** Do not hide technical debt. Keeping this log updated ensures the application remains stable and easy to maintain over time.

---

## 📋 Technical Debt Tracker

### Item 1: [e.g., Hardcoded JWT Token in Local Mock]
* **Date Added:** [e.g., 2026-05-15]
* **Severity:** 🔴 High
* **Associated Feature/Module:** Auth Module (`/features/auth`)
* **Description:** 
  * *What is the shortcut?* Currently returning a hardcoded dummy JWT string instead of handling real token generation from the backend interceptor because the staging server is down.
  * *Why was it done?* To unblock UI testing for the dashboard screen.
* **Refactoring Plan:** Replace the mock implementation with the actual Dio interceptor once the backend `/auth/login` endpoint is live.

---

### Item 2: [e.g., Missing Error State Handling in Widget]
* **Date Added:** [e.g., [Date]]
* **Severity:** 🟡 Medium
* **Associated Feature/Module:** [e.g., Item List Screen]
* **Description:** 
  * *What is the shortcut?* The `ListView` widget fails silently if the network times out instead of showing a proper retry button.
  * *Why was it done?* Speeding up initial MVP delivery.
* **Refactoring Plan:** Wrap the list builder in a `BlocBuilder` with explicit handling for `NetworkError` states.

---

### Item 3: [e.g., Unused Dependencies in pubspec.yaml]
* **Date Added:** [e.g., [Date]]
* **Severity:** 🟢 Low
* **Associated Feature/Module:** Global Setup
* **Description:** 
  * *What is the shortcut?* Installed `url_launcher` earlier but ended up using standard web navigation instead.
  * *Why was it done?* Leftover from early prototyping.
* **Refactoring Plan:** Remove the package from dependencies and clean up imports before final production build.

---
> **[🤖 AI AGENT INSTRUCTION - POST-LOG UPDATE]**
> Whenever a technical debt item listed above is fully resolved and refactored in the codebase, change its status to `[RESOLVED]` or remove it from the log, and inform the user.