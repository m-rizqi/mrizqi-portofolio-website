# 📝 Detailed Development Task Checklist

> Hand-maintained per `CLAUDE.md` (GSD Core disabled for this project). Tracks the Next.js/React port of `docs/design/mrizqi-portofolio-design/` into `source-codes/frontend/`, per the locked `docs/pra-development/3-PRD.md` and `4-ARCHITECTURE.md`.

---

## 🏗️ Phase 1: Project Setup & Initialization

- [x] **Repository Setup**
  - [x] `.gitignore` for `source-codes/frontend/` (Next.js defaults: `node_modules`, `.next`, etc.)
- [x] **Project Scaffolding**
  - [x] Hand-scaffolded Next.js 15 App Router project (TypeScript) — `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`.
  - [x] Directory structure per `4-ARCHITECTURE.md`: `app/`, `components/`, `lib/`, `public/assets/`.
- [x] **Dependencies Installation**
  - [x] `next`, `react`, `react-dom` (pinned to a patched Next.js version after `npm audit` flagged CVE-2025-66478 on the initial pin).
  - [x] No state management or network-client libraries — none needed (static content, local `useState` only, per `4-ARCHITECTURE.md`).

## 🎨 Phase 2: Core Systems & Theming

- [x] **Design System Implementation**
  - [x] Ported `css/styles.css` verbatim into `app/globals.css` (design tokens preserved as-is).
  - [x] Google Fonts loaded via `<link>` in `app/layout.tsx`, matching source loading method exactly (not `next/font`).
- [x] **Routing/Navigation System**
  - [x] App Router pages: `/`, `/projects`, `/project` (`?p=slug`), `/blog`, `/post` (`?p=slug`) — mirrors source page set and query-string detail pattern.
  - [x] Shared `Nav` / `Footer` components with active-page highlighting.

## 🚀 Phase 3: Feature Implementation (MVP)

### Feature 1: Home page
- [x] Hero, about, education, skills, featured projects, experience accordion, honors, certifications, featured blogs, contact — all ported from `index.html`.
- [x] In-page anchor links (`#about`, `#skills`, `#contact`) verified.
- [x] CV/portfolio download buttons point at `/assets/CV_Muhammad_Rizqi.pdf`.

### Feature 2: Projects list + detail
- [x] `/projects` — category filter (`FilterBar` + `ProjectsExplorer`), count text, card grid.
- [x] `/project?p=<slug>` — detail hero, role/stack side cards, highlights, prev/next (wraps around list).

### Feature 3: Blog list + detail
- [x] `/blog` — tag filter (`FilterBar` + `BlogExplorer`), count text, card grid.
- [x] `/post?p=<slug>` — full body, byline, prev/next (wraps around list).

### Feature 4: Shared navigation & contact
- [x] Sticky nav on every page, `.active` state matches source CSS behavior.
- [x] Contact cards (email, LinkedIn, GitHub, phone) — including the still-placeholder GitHub link/label, carried over verbatim per PRD scope.

### Behavior parity (`app.js` → React)
- [x] Scroll reveal (`useReveal` hook + `Reveal` component) — IntersectionObserver, 70ms stagger cycling every 4, respects `prefers-reduced-motion` (inherited from source CSS, untouched).
- [x] Experience accordion — one open at a time, first entry open by default, click-to-close-reopen matches source logic exactly.
- [x] Category/tag filters — client-side `useState`, same count format ("N of M …").
- [x] Detail page fallback — unmatched `?p=` slug falls back the same way as source (`arcibo` for projects, first item for posts).
- [x] `document.title` set client-side per detail item, matching source's JS-driven title (not a static meta tag).

## 🐛 Phase 4: Polish & Quality Assurance

- [x] **Build verification** — `npm run build` compiles clean (0 errors, 0 warnings) with TypeScript + ESLint (`next/core-web-vitals`, `next/typescript`).
- [x] **Visual verification** — every route checked in-browser against the source design (see session log): home (hero → contact), `/projects` incl. filter interaction, `/project?p=mahezza` incl. prev/next, `/post?p=ocr-invoice-automation`.
- [x] **Security & Performance**
  - [x] No secrets/env vars — none required (static site, confirmed against `4-ARCHITECTURE.md`).
  - [x] `npm audit` — 0 high/critical after pinning Next.js to a patched version; 1 remaining moderate advisory (`postcss`, transitive via Next's build tooling) requires a Next 16 major bump, deferred — tracked in `3-TECH-DEBT-LOG.md`.

## 📌 Deliberately not done (matches PRD "Out of Scope")

- [ ] Real project/article screenshots (source `.imgph` placeholders kept as-is).
- [ ] GitHub username (source placeholder "add your username" kept as-is).
- [ ] Blog post bodies are still source's own "Draft…" placeholder copy.
- [ ] Separate "portfolio" PDF (both CV buttons intentionally serve the same file, per source).

These are pre-existing placeholders in the approved source design, not gaps introduced by this port — see `docs/design/mrizqi-portofolio-design/DESIGN.md` §8 "Known placeholders".

---
> **Status: Phase 1–4 complete.** Ready for `docs/pasca-development/` once the user confirms the build is accepted.
