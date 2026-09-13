# 🔒 Security Checklist & Vulnerability Audit

> **Status: Reviewed 2026-09-13.** This is a fully static Next.js site (no auth, no database, no API routes, no user-submitted forms — see `docs/pra-development/4-ARCHITECTURE.md`), so most of the generic checklist below collapses to "not applicable" by design. Items are tailored to what actually exists in `source-codes/frontend/`.

---

## 🛡️ 1. Authentication & Authorization Security
* [x] **N/A — no authentication.** The site has no login, no user accounts, no sessions. Nothing to secure here.
* [x] **Environment Isolation:** No `.env` file exists or is required — there are no secrets, API keys, or database URLs anywhere in the codebase (confirmed: no `process.env` reads in `source-codes/frontend`).
* [x] **Git Ignore Verification:** `source-codes/frontend/.gitignore` excludes `node_modules`, `.next/`, `*.tsbuildinfo`, and `.env*.local` (present defensively even though no `.env` is used today).

## 🌐 2. Input Handling
* [x] **Only user-controlled input:** the `?p=` query string on `/project` and `/post`, read via `useSearchParams().get('p')`. It is only ever used as a key to look up an item in a static, compile-time array (`Array.prototype.findIndex`) — never rendered as raw HTML, never used in a DOM API like `innerHTML`, never passed to `eval`/`Function`, never used to build a file path or shell command. No injection surface (XSS, path traversal, SSTI) exists here.
* [x] **No forms.** Contact is `mailto:` / `tel:` / external links only (per PRD scope) — no server-side form handling, so no CSRF/validation surface either.

## 📦 3. Dependency Security
* [x] `npm audit` run 2026-09-13 after pinning `next` to `15.5.25` (patched — the initial `15.5.4` pin had a disclosed critical RCE, CVE-2025-66478, caught before any app code was written).
* [ ] **Known remaining item:** one moderate `postcss` advisory, transitive via Next.js's own build tooling, fixable only by a Next 16 major bump — logged in `docs/development/3-TECH-DEBT-LOG.md` Item 1, deferred by design (not blocking for a static site with no attacker-controlled CSS input).
* [ ] **Before each deploy:** re-run `npm audit` in `source-codes/frontend/` and address any new high/critical findings before shipping.

## 🚀 4. Deployment / Transport Security
* [ ] **HTTPS enforced** — covered in `2-DEPLOYMENT-GUIDE.md` (Nginx + Certbot). Confirm before going live.
* [ ] **Security headers** — set at the Nginx layer (see `2-DEPLOYMENT-GUIDE.md` §4): `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`. No `Content-Security-Policy` beyond the default is required since the only third-party origin loaded is `fonts.googleapis.com`/`fonts.gstatic.com`.
* [x] **No file uploads, no user-generated content storage** — nothing for an attacker to plant on the server.

---
> Re-review this checklist if the site ever grows a contact form, CMS, or any server-side data handling — at that point the N/A items above become real requirements again.
