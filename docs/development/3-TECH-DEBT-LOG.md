# 🛠️ Technical Debt Log

---

## 📋 Technical Debt Tracker

### Item 1: `postcss` moderate advisory via Next.js build tooling
* **Date Added:** 2026-09-13
* **Severity:** 🟢 Low
* **Associated Feature/Module:** `source-codes/frontend` build pipeline
* **Description:**
  * *What is the shortcut?* `npm audit` (after pinning `next` to the patched `15.5.25`) still reports one moderate advisory in `postcss` (source-map/XSS in CSS stringification), pulled in transitively by Next.js's own bundled build tooling — not a package we import or call directly.
  * *Why was it done?* The only fix (`npm audit fix --force`) upgrades to `next@16.x`, a breaking major version change outside the approved `4-ARCHITECTURE.md` tech stack (Next 15 App Router was the locked decision).
* **Refactoring Plan:** Revisit when the project deliberately upgrades to Next.js 16, or when a patched `postcss` ships for the Next 15 line — re-run `npm audit` at that point.

---

### Item 2: Real assets still placeholders (carried from source design, not new debt)
* **Date Added:** 2026-09-13
* **Severity:** 🟢 Low
* **Associated Feature/Module:** `lib/data.ts`, `.imgph` placeholders, contact section
* **Description:**
  * *What is the shortcut?* GitHub username, project/article screenshots, and blog post bodies are still the source design's own placeholders ("add your username", dashed `.imgph` boxes, "Draft…" copy).
  * *Why was it done?* Explicit user instruction to copy the source design exactly, with nothing changed — these are pre-existing placeholders in the approved design, not shortcuts introduced during the port.
* **Refactoring Plan:** Only touch `lib/data.ts` (content) and `public/assets/` (images/PDF) when the user is ready to supply real content — no component code changes needed.

---
