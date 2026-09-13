# 🧪 Testing, Quality Assurance & UAT Scenarios

> **Status: Executed 2026-09-13** against `source-codes/frontend` running locally (`npm run dev`), verified in a real Chrome tab. Test cases map directly to the Acceptance Criteria in `docs/pra-development/3-PRD.md`.

---

## 📋 1. Testing Strategy Overview

* **Testing Scope:** Functional testing (all 5 routes), visual parity against the source design, interaction testing (filters, accordion, navigation).
* **Testing Environment:** Local dev server (`next dev`), Chrome via `claude-in-chrome`.
* **Target Platforms:** Desktop Chrome (verified this session). Mobile/other-browser pass recommended before/along production launch — see §4.

## 🔍 2. Functional & UAT Test Cases

| # | Scenario | Steps | Expected | Result |
|---|---|---|---|---|
| 1 | Home page renders all sections | Load `/` | Hero, about, education, skills, featured projects (arcibo/mahezza/toko-management), experience accordion, honors, certifications, featured blogs (3), contact all present | ✅ Pass |
| 2 | Scroll reveal | Scroll down `/` | Sections fade/translate in as they enter viewport, staggered | ✅ Pass |
| 3 | Nav anchor links | Click About/Skills/Contact in nav | Scrolls to `#about` / `#skills` / `#contact` on home | ✅ Pass (verified `href="/#..."` wiring) |
| 4 | CV download | Click "Download CV" / "Download portfolio" | Both download `CV_Muhammad_Rizqi.pdf` | ✅ Pass (same file, matches source placeholder behavior) |
| 5 | Experience accordion default state | Load `/` | First entry ("Technical Consultant (Mobile)") open, rest closed | ✅ Pass |
| 6 | Accordion toggle | Click a closed entry | That entry opens, previously open entry closes, sign flips `+`/`−` | ✅ Pass |
| 7 | Accordion close | Click the currently open entry | It closes, none open | ✅ Pass (matches source `wasOpen` logic) |
| 8 | Projects list + count | Load `/projects` | "12 of 12 projects", "All" filter active | ✅ Pass |
| 9 | Projects filter | Click "Mobile" filter | Grid filters to Mobile-only projects, count updates to "8 of 12 projects", active chip inverts to navy | ✅ Pass |
| 10 | Project detail | Load `/project?p=mahezza` | Correct title/summary/role/stack/highlights; "Open project ↗" shown (has `link`); browser tab title updates to "MAHEZZA — ... — Muhammad Rizqi" | ✅ Pass |
| 11 | Project detail — no link | Load a project with empty `link` (e.g. `logistics-driver-app`) | "Open project" button hidden, only "Ask about this work" shown | ✅ Pass (conditional render verified in code) |
| 12 | Project prev/next | View `/project?p=mahezza` | Prev/Next cards show correct neighboring titles per `PROJECTS` array order | ✅ Pass ("Netra" ← / → "Toko Management System") |
| 13 | Project detail fallback | Load `/project?p=does-not-exist` | Falls back to `arcibo` (matches source behavior) | ✅ Pass (code path verified — same fallback logic as source) |
| 14 | Blog list + tag filter | Load `/blog`, click a tag | Grid filters, count updates | ✅ Pass (same `FilterBar`/`useState` pattern as projects, verified via code + projects-page interaction test) |
| 15 | Post detail | Load `/post?p=ocr-invoice-automation` | Correct title/tag/date/readTime/excerpt/body/byline; tab title updates | ✅ Pass |
| 16 | Nav active state | Visit `/projects` and `/blog` | "Projects"/"Blog" nav link gets `.active` styling on their respective pages | ✅ Pass |
| 17 | Contact links | Inspect contact cards on `/` | mailto, tel, LinkedIn external link, GitHub placeholder link all present verbatim | ✅ Pass |
| 18 | Reduced motion | N/A (CSS-only, inherited unmodified from source `@media (prefers-reduced-motion: reduce)`) | Animations disabled | ⏭️ Not re-verified in-browser (CSS rule copied byte-for-byte from source, low risk) |

## 🧯 3. Error / Edge Cases

* [x] Unknown `?p=` slug on `/project` and `/post` — falls back gracefully (test #13), never crashes or shows a blank page.
* [x] No network calls exist, so there is no "offline"/"timeout" state to test — confirmed by code (no `fetch`/`axios` anywhere in `source-codes/frontend`).
* [x] Build-time check: `npm run build` — 0 TypeScript errors, 0 ESLint errors/warnings, all 5 routes prerendered as static (`○ (Static)`).

## 📱 4. Recommended Before Production Launch (not yet executed)

* [ ] Manual pass on an actual mobile viewport (≤640px) — the source CSS has a dedicated `@media (max-width:640px)` block; spot-check `/`, `/projects`, `/project?p=...` for overflow/wrapping issues.
* [ ] Cross-browser spot check (Safari, Firefox) — Google Fonts `<link>` and IntersectionObserver are broadly supported, but a quick visual pass is cheap insurance.
* [ ] Lighthouse pass (Performance/Accessibility/Best Practices/SEO) once deployed to the real domain.
