# Product Requirements Document (PRD)

> **Status: LOCKED** — filled from the existing static design at `docs/design/mrizqi-portofolio-design/` (HTML/CSS/JS, already approved by the user) and direct user instruction. This is a 1:1 rebuild of an existing design, not a from-scratch product, so several sections point at the source design instead of re-describing it.

---

## 🚀 1. Product Overview
* **Product Name:** Muhammad Rizqi — Software Engineer Portfolio
* **Problem Statement:** The existing portfolio is a static HTML/CSS/JS prototype (`docs/design/mrizqi-portofolio-design/`) with no build tooling, so it can't be run with `npm run dev`, versioned as a normal frontend app, or extended with React components going forward.
* **Proposed Solution:** Rebuild the exact same design, content, and behavior as a Next.js (React, TypeScript, App Router) app in `source-codes/frontend/`, so it runs via `npm run dev` while looking and behaving identically to the source design.

## 🎯 2. Goals
* **Goal 1:** Every page (`index`, `projects`, `project` detail, `blog`, `post` detail) renders pixel-identical to the source HTML/CSS at the same breakpoints.
* **Goal 2:** All content (copy, project/post data, experience history, skills, contact links, CV file) is carried over verbatim — including known placeholders (e.g. "add your username", draft blog bodies) — nothing invented, nothing dropped.
* **Goal 3:** All interactive behavior from `app.js` (scroll reveal, experience accordion, project/blog category filters, detail-page prev/next) works the same in React.
* **Goal 4:** `npm run dev` in `source-codes/frontend/` starts the site with zero manual setup beyond `npm install`.

## 👥 3. Target Users / User Personas
* **End User:** Visitors (recruiters, collaborators, peers) browsing Muhammad Rizqi's projects, blog, and CV.
* **Admin/Stakeholder:** Muhammad Rizqi (mrizqi070502@gmail.com) — sole owner/editor of content.
* **AI/Dev:** The AI coding agent + Muhammad Rizqi maintaining this codebase.

## 🛠 4. Tech Stack & Environment
*Full detail in `4-ARCHITECTURE.md`.*
* **Frontend:** Next.js (App Router), React, TypeScript
* **Backend / API:** None — fully static content, no server-side data, no database
* **Database:** None
* **Third-Party Services:** Google Fonts (Plus Jakarta Sans, DM Sans) loaded the same way as the source design (`<link>` tags, not `next/font`, to keep loading behavior identical)

## 📖 5. User Stories & Features (MVP Scope)

### Feature 1: Home page
* **User Story:** As a visitor, I want to see Muhammad's hero intro, about, skills, featured projects, experience, honors/certifications, featured blogs, and contact info on one page, so I get a full picture without navigating away.
* **Acceptance Criteria:**
  * [ ] Hero, about, education, skills, featured projects (arcibo, mahezza, toko-management), experience accordion, honors, certifications, featured blogs (first 3), and contact sections all render with the same content as `index.html`.
  * [ ] In-page anchor nav links (`#about`, `#skills`, `#contact`) scroll to the right section.
  * [ ] "Download CV" / "Download portfolio" buttons download `CV_Muhammad_Rizqi.pdf`.

### Feature 2: Projects list + detail
* **User Story:** As a visitor, I want to browse all projects and filter by category, then open a project for full detail, so I can evaluate relevant work.
* **Acceptance Criteria:**
  * [ ] `/projects` lists all 12 projects from the source data with category filter chips (All, Mobile, Backend, AI, Web) matching `CATEGORIES`.
  * [ ] Filter count text and active filter styling match the source behavior.
  * [ ] Each project card links to its detail view showing role, stack, highlights, and prev/next navigation (wrapping around the list), same as `project.html?p=<slug>`.

### Feature 3: Blog list + detail
* **User Story:** As a visitor, I want to browse all articles and filter by tag, then read one in full, so I can learn from the write-ups.
* **Acceptance Criteria:**
  * [ ] `/blog` lists all 6 posts with tag filter chips matching `TAGS`.
  * [ ] Each post card links to its detail view showing full body paragraphs and byline, with prev/next navigation, same as `post.html?p=<slug>`.

### Feature 4: Shared navigation & contact
* **User Story:** As a visitor, I want consistent navigation and a way to reach out, so I can move around the site and contact Muhammad.
* **Acceptance Criteria:**
  * [ ] Sticky pill nav with active-page highlighting appears on every page, matching `nav-links a.active` behavior.
  * [ ] Contact section/cards (email, LinkedIn, GitHub, phone) link exactly as in the source, including the still-placeholder GitHub link/label.

## ✅ 6. Functional Requirements
* [ ] Static content for projects, posts, role history, and skill groups, ported from `js/data.js` into a typed data module — single source of truth for all pages.
* [ ] Category/tag filtering on `/projects` and `/blog` (client-side, no network calls).
* [ ] Scroll-reveal animation on eligible elements, respecting `prefers-reduced-motion`.
* [ ] Experience accordion (one entry open at a time, first entry open by default).
* [ ] Responsive layout at the same breakpoint (`max-width:640px`) as the source CSS.

## ⚡ 7. Non-Functional Requirements
* **Performance:** No added network calls beyond fonts/assets already present in the source design; content is static/pre-renderable (SSG-friendly).
* **Security:** No secrets, no `.env` required — the app has no server-side logic or third-party API keys.
* **Reliability:** Static site; no runtime dependency on an external service beyond Google Fonts.
* **Accessibility:** Preserve existing semantics (`aria-expanded` on accordion, `alt` text on images, link-based navigation); do not regress below what the source HTML already provides.

## 🚫 8. Scope

**In Scope (MVP):**
* [ ] Faithful React/Next.js port of all 5 pages, styles, content, and interactions described above.
* [ ] `docs/pra-development/*` locked; `docs/pasca-development/*` completed once the build is verified working.

**Out of Scope (For current phase/MVP):**
* [ ] No redesign, no new sections, no new pages beyond the 5 that exist in the source design.
* [ ] No CMS, no admin UI, no database — content stays in a static TypeScript data module, edited by hand (mirrors the source's "edit `js/data.js`" model).
* [ ] No contact form / backend — contact stays `mailto:` / `tel:` / external links only, as in the source.
* [ ] No fixing of known source placeholders (GitHub username, draft blog bodies, shared CV/portfolio PDF, image placeholders) unless the user explicitly asks — carried over verbatim per "copy exactly" instruction.
* [ ] No analytics, SEO meta beyond page `<title>`, or dark mode — none exist in the source design.

---
> **Next:** Technical structure defined in `4-ARCHITECTURE.md` (also locked below).
