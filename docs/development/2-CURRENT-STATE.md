# 🧠 Current State & Session Memory

---

## 🕒 1. Last Update Context
* **Date & Time:** 2026-09-22
* **Last Active Agent/Session Focus:** Content update — added two 25Hours Lab projects as new portfolio entries: "MasjidHub" (mosque-management SaaS, co-founded with a friend) and "NontonKilat" (AI YouTube tutorial comparator, built solo end to end).
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
* **Content additions (post-MVP):**
  * Added `lib/projects/masjidhub.ts` (6th project entry) — sourced from the sibling `D:\Bisnis\MasjidHub` repo (PRD/BRD, design system doc, real screenshots). Added a new `"Web"` category to `CATEGORIES` in `lib/data.ts` since it's a full-stack web SaaS, not Mobile/Data. Assets copied into `public/assets/projects/masjidhub/` (cover + 5 gallery shots + logo). No live public deploy exists yet for MasjidHub itself, so `link` points at `https://25hourslab.site` (the software house's own live site, which already features MasjidHub as a product) rather than the private GitLab repo or the staging IP — `repoLink` omitted since both MasjidHub repos are private. Verified with `tsc --noEmit`, `npm run build`, and an in-browser check (project card, detail page, and the new Web filter all render correctly).
  * Added `lib/projects/nontonkilat.ts` (7th project entry, listed first) — sourced from the sibling `D:\Bisnis\NontonKilat\nonton-kilat` repo (BRD/PRD, tech-debt log, design system doc) plus Chrome Web Store submission assets and a live dashboard screenshot. Reused the `"Web"` category rather than adding a new one for the Chrome extension (judgment call — flag to the user if a dedicated "Extension" category is wanted later). Assets copied into `public/assets/projects/nontonkilat/`. This one *is* live and public — confirmed via the real landing page (`https://nontonkilat.25hourslab.site`) that it's published on the Chrome Web Store, so `link` points straight at the Web Store listing (same pattern as the mobile projects linking to Play Store) instead of the landing page. `repoLink` omitted (private GitLab repo, same call as MasjidHub). Verified with `tsc --noEmit`, `npm run build`, and an in-browser check.

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
