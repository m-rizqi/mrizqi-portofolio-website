# Entity Relationship Diagram (ERD)

> **Status: N/A — no database.**

This project has no database. Per `4-ARCHITECTURE.md`, all content (projects, posts, role history, skill groups) lives in a static TypeScript module (`source-codes/frontend/lib/data.ts`), imported directly at build time. There is no persistence layer, no ORM, and no schema to define.

If the site ever needs a real database (e.g. a CMS-backed blog), this document should be filled in at that time — it is intentionally left empty now to avoid designing a schema for data that doesn't exist yet (YAGNI).
