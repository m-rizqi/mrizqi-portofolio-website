# API Contract & Endpoint Specifications

> **Status: N/A — no API.**

This project has no backend and no API routes. Per `4-ARCHITECTURE.md`, the Next.js app renders content directly from `lib/data.ts` at build/render time — there is no `fetch`, no `axios`, no Next.js Route Handler, and no external service call other than the Google Fonts stylesheet `<link>`.

If a future feature needs server-side data (e.g. a contact form with email delivery, or a real CMS), this document should be filled in at that time — it is intentionally left empty now (YAGNI), matching the source static design which also has no backend.
