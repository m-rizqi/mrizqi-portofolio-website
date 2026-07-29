# 🔒 Security Checklist & Vulnerability Audit

> **[🤖 AI AGENT INSTRUCTIONS - READ THIS FIRST]**
> This document governs the security hardening phase of the project. As an AI agent, you must act as a Rigorous Security Auditor before authorizing any deployment.
> 1. **Dynamic Generation:** Based on the technologies listed in `docs/pre-development/4-ARCHITECTURE.md` and endpoints in `docs/pre-development/6-API-CONTRACT.md`, you must define and tailor specific security checklist items for this project (do not rely solely on generic rules).
> 2. **Strict Enforcement:** Every security item below must be verified and checked off `[x]` before the app is cleared for production deployment.
> 3. **Zero Hardcoding:** Ensure zero tolerance for hardcoded API keys, secrets, or database credentials.
> 4. **Vulnerability Flagging:** If you detect a security flaw in the codebase during your review, stop immediately, log it here, and provide a secure patch.

---

## 🛡️ 1. Authentication & Authorization Security
*Verify how user identities and access permissions are managed.*

- [ ] **Token Storage:** JWT or session tokens are stored securely (e.g., using Flutter Secure Storage / Encrypted SharedPreferences on mobile, or HttpOnly secure cookies on web). Never stored in plain `SharedPreferences` or `localStorage`.
- [ ] **Token Expiry & Refresh:** Token expiration, invalidation, and refresh mechanisms are properly implemented.
- [ ] **Route Protection:** All protected backend routes and frontend screens strictly validate user authentication roles before rendering data.
- [ ] **Password Policies:** If applicable, user passwords enforce minimum length and complexity rules.
- [ ] **Environment Isolation:** All sensitive keys (`API_KEY`, database URLs, secret tokens) are stored exclusively in local `.env` files and **never** hardcoded or committed to version control.
- [ ] **Git Ignore Verification:** The `.env`, `.env.local`, and build-specific secret files are explicitly declared in `.gitignore`.
- [ ] **Example Template Provided:** A safe `.env.example` file containing dummy keys is provided for developers to clone without exposing real secrets.

## 🌐 2. Network & API Security
*Verify how data travels between the client and server.*

- [ ] **HTTPS Enforcement:** All network requests strictly use `HTTPS` in production. Cleartext HTTP traffic is blocked.
- [ ] **API Key Masking:** All third-party API keys (e.g., Firebase, payment gateways, LLM services) are hidden in `.env` files and injected during build time, never exposed in client-side source code.
- [ ] **Request Validation:** Both client-side and server-side validate incoming and outgoing payloads to prevent injection attacks (SQL Injection, NoSQL Injection, XSS).
- [ ] **Rate Limiting:** Critical endpoints (like login, OTP, and registration) have rate-limiting mechanisms to prevent brute-force attacks.

## 📱 3. Client-Side & Local Data Security (Mobile/Frontend)
*Verify the security posture of the application runtime.*

- [ ] **Data Caching:** Sensitive user data cached locally is encrypted or wiped upon logout.
- [ ] **SSL Pinning (Optional/High-Security):** Implemented if the project requires maximum defense against Man-in-the-Middle (MitM) attacks.
- [ ] **Code Obfuscation:** Release builds are configured for code obfuscation and minification (e.g., ProGuard/R8 enabled for Android, or Flutter obfuscate flags).
- [ ] **Debug Logs Removal:** All debug statements, console logs, and sensitive print functions are stripped out of production builds.

## 📋 4. Project-Specific Custom Security Rules
*(Agent Note: Define additional security checks tailored specifically to the features outlined in `3-PRD.md`).*

- [ ] **Custom Rule 1:** [e.g., Verify that webhook payloads from n8n are authenticated via secret signatures].
- [ ] **Custom Rule 2:** [e.g., Ensure offline local database (SQLite/Hive) is encrypted if storing personal user data].

---
> **[🤖 AI AGENT INSTRUCTION - POST-AUDIT]**
> Once all items in this checklist are verified and marked as `[x]`, the AI agent must state: *"All security checks have successfully passed. The project is cleared for the deployment phase."*