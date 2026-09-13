# 🧠 Current State & Session Memory

---

## 🕒 1. Last Update Context
* **Date & Time:** 2026-09-13
* **Last Active Agent/Session Focus:** Full Next.js/React port of the static design (`docs/design/mrizqi-portofolio-design/`) into `source-codes/frontend/`, plus locking `docs/pra-development/*`.
* **Current Git Branch:** `main`

---

## 📦 2. Active Tech Stack & Key Dependencies

* **Core Framework:** Next.js 15.5.25 (App Router)
* **Language:** TypeScript
* **State Management:** Local React `useState` only (filters, accordion) — no library
* **Routing:** Next.js App Router, file-based; detail pages use `?p=<slug>` query params (matches source), read via `useSearchParams`
* **Networking:** None — no API, no fetch
* **Storage/Cache:** None
* **UI/Styling:** Plain CSS ported verbatim from `css/styles.css` into `app/globals.css`; Google Fonts via `<link>` in `app/layout.tsx` (not `next/font`)

---

## 🏗️ 3. Current Codebase Status

* **Completed Modules:**
  * `lib/data.ts` — typed port of `js/data.js` (`PROJECTS`, `CATEGORIES`, `POSTS`, `TAGS`, `ROLE_HISTORY`, `SKILL_GROUPS`).
  * `components/` — `Nav`, `Footer`, `Reveal` + `useReveal` hook, `ExperienceAccordion`, `SkillsGrid`, `ProjectCard`, `PostCard`, `FilterBar`, `PrevNextNav`, `ProjectsExplorer`, `BlogExplorer`, `ProjectDetail`, `PostDetail`.
  * `app/` — `layout.tsx`, `page.tsx` (home), `projects/page.tsx`, `project/page.tsx`, `blog/page.tsx`, `post/page.tsx`. All five routes verified in-browser against the source design.
  * `public/assets/` — `photo.jpg`, `CV_Muhammad_Rizqi.pdf` copied from the source.
  * `docs/pra-development/*` — locked (PRD, Architecture, UI/UX guidelines filled from the source design; ERD/API-contract marked N/A; user flow mapped).
  * `docs/development/1-TASK-CHECKLIST.md` — updated to reflect actual work done.
* **Work In Progress (WIP):**
  * None — MVP scope from the PRD is complete. `docs/pasca-development/*` not yet started (gated on user confirming development is done, per that folder's own README).

---

## 🧠 4. Recent Technical Decisions & Context

* **Decision:** Kept the source's query-string detail routing (`/project?p=slug`, `/post?p=slug`) instead of Next.js dynamic segments (`/project/[slug]`), to preserve the exact URL/behavior contract from `docs/design/mrizqi-portofolio-design/DESIGN.md` and the user's "nothing changes at all" instruction.
* **Decision:** Styling ports the source CSS file near-verbatim as global CSS rather than converting to Tailwind — guarantees pixel fidelity, avoids re-implementation risk.
* **Decision:** `/projects`, `/blog`, `/project`, `/post` are split into a thin Server Component `page.tsx` (carries the static `<title>` via `export const metadata`) wrapping a Client Component that holds the interactive/dynamic logic — Next.js App Router requires `metadata` exports to live in Server Components.
* **Decision:** Used plain `<img>` (not `next/image`) for the portrait, with an inline ESLint disable — `next/image`'s srcset/loading behavior could visually diverge from the source; exact-fidelity was prioritized per the PRD.
* **Context:** Initial `next@15.5.4` pin had a disclosed critical RCE advisory (CVE-2025-66478) surfaced by `npm audit` right after `npm install`; bumped to `15.5.25` (patched) before writing any app code. One moderate `postcss` advisory remains, fixable only via a Next.js 16 major bump — deferred, logged in `3-TECH-DEBT-LOG.md`.
* **Context:** The red "1 Issue" Next.js dev-overlay badge seen during browser verification is a hydration-mismatch warning caused by a Chrome extension (Grammarly) injecting `data-gr-*` attributes into `<html>`/`<body>` before React hydrates — confirmed via console message inspection, not a bug in this codebase.

---

## 🚧 5. Known Issues & Blockers

* None blocking. Remaining items are pre-existing source-design placeholders the user asked to keep as-is (see `1-TASK-CHECKLIST.md` §"Deliberately not done"): GitHub username, draft blog bodies, `.imgph` screenshot placeholders, shared CV/portfolio PDF.
* Deployment target for `docs/pasca-development/2-DEPLOYMENT-GUIDE.md` is a self-managed VPS (user's choice) — guide still needs the user's actual server specs (OS, domain, reverse proxy preference) before it can be fully concrete; currently drafted generically for a Node/Nginx VPS setup.

---

## ⏭️ 6. Immediate Next Steps (For the next AI session)

1. Run `npm install && npm run dev` inside `source-codes/frontend/` to confirm it still works in the user's own environment.
2. If the user wants to proceed to `docs/pasca-development/`, confirm development is accepted as done (per that folder's own gate), then gather VPS specifics (OS, domain, Node version available) to finalize `2-DEPLOYMENT-GUIDE.md`.
3. Any future content edits (real project screenshots, GitHub username, blog post bodies) only touch `source-codes/frontend/lib/data.ts` and `public/assets/` — no component changes needed.
