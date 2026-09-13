# 🤝 Project Handover Document & Operational Guide

> **Status: Drafted 2026-09-13.**

---

## 📋 1. Project Overview & Summary

* **Project Name:** Muhammad Rizqi — Software Engineer Portfolio
* **Client / Stakeholder:** Muhammad Rizqi (mrizqi070502@gmail.com)
* **Handover Date:** 2026-09-13
* **Core Purpose:** Personal portfolio site (projects, blog, experience, CV) — see `docs/pra-development/3-PRD.md`. Rebuilt from an approved static HTML/CSS/JS design (`docs/design/mrizqi-portofolio-design/`) into a Next.js/React app so it can be run and maintained as a normal frontend codebase.
* **Live Production URL:** `https://mrizqi.25hourslab.site` (once DNS + deployment in `2-DEPLOYMENT-GUIDE.md` are completed — not yet live as of this handover).

## 🗂 2. Where Everything Lives

* **App code:** `source-codes/frontend/` (Next.js 15, App Router, TypeScript)
  * `app/` — pages (`/`, `/projects`, `/project`, `/blog`, `/post`) and `globals.css`
  * `components/` — shared UI (nav, footer, cards, accordion, filters, reveal animation)
  * `lib/data.ts` — **all editable content** (projects, blog posts, experience, skills)
  * `public/assets/` — portrait photo and CV PDF
* **Docs:** `docs/pra-development/` (locked product/architecture spec), `docs/development/` (task log, current state, tech debt), `docs/pasca-development/` (this folder), `docs/design/` (original design system + reference HTML/CSS/JS, kept as the design source of truth).

## ✏️ 3. How to Edit Content

All editable content lives in **one file**: `source-codes/frontend/lib/data.ts`. Editing an entry there updates every place it appears (home page, list page, detail page) — same model as the original design's `js/data.js`.

* **Add/edit a project:** add an object to `PROJECTS` (`slug`, `title`, `category`, `org`, `year`, `role`, `summary`, `stack[]`, `highlights[]`, `link`). New categories must also be added to `CATEGORIES` to show up as a filter. Home page features the 3 slugs hardcoded in `app/page.tsx` (`FEATURED_PROJECT_SLUGS`).
* **Add/edit a blog post:** add to `POSTS` (`slug`, `title`, `tag`, `date`, `readTime`, `excerpt`, `body[]`). New tags must also be added to `TAGS`. Home shows the first 3 entries in the array.
* **Update experience:** edit `ROLE_HISTORY` — first array entry is open by default in the accordion.
* **Update skills:** edit `SKILL_GROUPS` — `icon` is a single glyph character, `items` are the chip labels.
* **Replace the portrait/CV:** overwrite `public/assets/photo.jpg` / `public/assets/CV_Muhammad_Rizqi.pdf` (keep the same filenames, or update the references in `app/layout.tsx`/`app/page.tsx`/`components/Nav.tsx`/`components/PostDetail.tsx`).
* **Known placeholders still in the content** (carried over from the original design on purpose — see `docs/development/1-TASK-CHECKLIST.md`): GitHub username/link, blog post bodies (draft copy), project/article screenshots (`.imgph` dashed boxes), and the "Download portfolio" button (currently serves the same PDF as "Download CV"). Fix these directly in `lib/data.ts` and the relevant component whenever real content is ready.

## 🖥 4. Running & Deploying

* **Local development:** `cd source-codes/frontend && npm install && npm run dev`
* **Production build:** `npm run build && npm start`
* **Deployment:** self-managed Ubuntu VPS, PM2 + Nginx + Certbot, domain `mrizqi.25hourslab.site` — full step-by-step in `docs/pasca-development/2-DEPLOYMENT-GUIDE.md`.
* **Security posture:** no secrets, no `.env`, no database, no auth — see `docs/pasca-development/1-SECURITY-CHECKLIST.md`.

## 🧭 5. Design System Reference

`docs/pra-development/8-UI-UX-GUIDELINES.md` (locked) and `docs/design/DESIGN.md` document every color token, type scale, spacing/radius rule, and motion timing. Any new UI must draw from these tokens rather than inventing new hex values or paddings — CSS custom properties live at the top of `source-codes/frontend/app/globals.css`.

## 📞 6. Support / Contact

* **Owner:** Muhammad Rizqi — mrizqi070502@gmail.com
* **Repo:** this repository (`mrizqi-portofolio-website`), `main` branch.
