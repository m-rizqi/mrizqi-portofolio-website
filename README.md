# Muhammad Rizqi — Portfolio Website

Personal portfolio site for Muhammad Rizqi (Software Engineer — mobile, backend, and AI-assisted automation). Built with Next.js as a 1:1 rebuild of an approved static HTML/CSS/JS design, following this repo's docs-driven **plan → build → ship** lifecycle.

Live at: `https://mrizqi.25hourslab.site`

## Tech stack

* **Frontend:** Next.js 15 (App Router), React, TypeScript
* **Styling:** Plain CSS (ported from the source design, no Tailwind/CSS-in-JS)
* **Backend / DB:** None — fully static content, no API routes, no secrets
* **Deployment:** Self-managed Ubuntu VPS — PM2 (process manager) + Nginx (reverse proxy) + Certbot (TLS), auto-deployed on push to `main` via GitHub Actions

## Getting started

```bash
cd source-codes/frontend
npm install
npm run dev
```

Content (projects, blog posts, experience, skills) lives entirely in `source-codes/frontend/lib/data.ts` — edit there, no CMS needed. See `docs/pasca-development/4-HANDOVER-DOC-TEMPLATE.md` for the full content-editing guide.

## Folder structure

```
docs/
  pra-development/    1. Planning — PRD, architecture, ERD, API contract, user flow, UI/UX guidelines (LOCKED)
  design/             2. Source design: docs/design/mrizqi-portofolio-design/ (the original static HTML/CSS/JS this app is ported from) + DESIGN.md
  development/        3. Build tracking — task checklist, session memory, tech debt log, prompt snippets
  pasca-development/  4. Release — security checklist, VPS deployment guide, QA results, handover doc
source-codes/
  frontend/           The Next.js app (see above) — everything else is unused for this project
  ai-service/         Unused — not needed for a static portfolio site
  backend/            Unused — no backend required (see docs/pra-development/4-ARCHITECTURE.md)
  mobile/             Unused
.github/workflows/    CI (build check) + CD (auto-deploy to VPS on push to main)
.claude/              Claude Code project config: rules, skills, settings
graphify-out/         Generated knowledge graph of this repo (see CLAUDE.md)
CLAUDE.md             AI agent directive — read by Claude Code every session
```

## Project status

* **`docs/pra-development/`** — locked. Product spec and architecture are final for this rebuild; see `docs/pra-development/3-PRD.md`.
* **`docs/development/`** — MVP complete. All 5 pages (`/`, `/projects`, `/project`, `/blog`, `/post`) ported and verified against the source design.
* **`docs/pasca-development/`** — deployment guide and security/QA docs written for the confirmed VPS + PM2 + Nginx setup.

Any new feature work on this project should read `docs/development/2-CURRENT-STATE.md` first, then follow the manual GSD-disabled loop described in `CLAUDE.md`.

## CI/CD

`.github/workflows/deploy.yml`:
* **build** — `npm ci && npm run build` on every push/PR touching `source-codes/frontend/**`.
* **deploy** — on push to `main` only, after `build` passes: SSHes into the VPS and re-runs `git pull` → `npm install` → `npm run build` → `pm2 restart`. Requires `VPS_HOST` / `VPS_USERNAME` / `VPS_SSH_KEY` (+ optional `VPS_PORT`) repo secrets — see `docs/pasca-development/2-DEPLOYMENT-GUIDE.md` §6.

## Docs-driven workflow (how this repo is organized)

This repo follows a documentation-first lifecycle: plan in `docs/pra-development/` before writing code, build in `source-codes/` while tracking progress in `docs/development/`, and only move to `docs/pasca-development/` once development is confirmed done. `CLAUDE.md` is the full AI agent directive — read automatically by Claude Code every session — and explains which skills/commands apply at each phase (GSD Core is disabled for this project; the loop is run manually, see `CLAUDE.md`).
