import type { Project } from "../data";

const masjidhub: Project = {
  slug: "masjidhub",
  title: "MasjidHub: Mosque Management SaaS",
  category: "Web",
  org: "25Hours Lab",
  year: "2026",
  role: "Founder — Frontend, Admin Dashboard & Backend Developer",
  summary:
    "A white-label, multi-tenant SaaS platform that digitizes mosque operations — finance, RBAC, inventory, and a public landing page — built as a flagship product for 25Hours Lab, the software house I founded and am building with a friend.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Chart.js",
    "Express.js",
    "PostgreSQL",
    "Knex.js",
    "Redis",
    "Docker",
  ],
  highlights: [
    "Founded MasjidHub as a flagship product for 25Hours Lab, my own software house — building it from July 2026 onward alongside client work.",
    "Owned the Next.js admin dashboard, the public mosque landing page, and the Express/PostgreSQL backend API end to end, while my teammate owns CI/CD, DevOps, and backend security hardening.",
    "Built multi-tenant subdomain routing (`[tenant].masjidhub.com`) with per-tenant branding, granular RBAC with a custom permission matrix, and a full audit trail on every financial record change.",
    "Shipped a public-facing side per tenant showing live prayer times (via a government-backed API), transparent cash-flow summaries, activities, and articles — alongside an internal dashboard for finance, staff roles, and inventory.",
  ],
  link: "https://25hourslab.site",
  cover: "/assets/projects/masjidhub/cover.jpg",
  gallery: [
    "/assets/projects/masjidhub/shot-1.jpg",
    "/assets/projects/masjidhub/shot-2.jpg",
    "/assets/projects/masjidhub/shot-3.jpg",
    "/assets/projects/masjidhub/shot-4.jpg",
    "/assets/projects/masjidhub/shot-5.jpg",
  ],
  goal: "Digitize mosque administration and give the public transparent, always-on access to prayer schedules, activities, and cash-flow reports — as a B2B2C SaaS product mosque committees can run without touching a line of code.",
  problem:
    "Most mosques in Indonesia run entirely on manual bookkeeping and word-of-mouth announcements, with no way to prove financial transparency to their congregation or manage staff access safely as committees change hands. Building a bespoke website or system per mosque is too costly and slow, so MasjidHub packages the whole stack — admin dashboard, public site, and finance audit trail — as a single subscribable platform any takmir can onboard onto.",
  features: [
    "Multi-tenant client management with subscription lifecycle, trial expiry, and read-only lockout on non-renewal (Super Admin domain)",
    "Finance module with dynamic cash categories, full audit trail on every edit/delete, and QRIS/Virtual Account donation integration",
    "Granular RBAC — unlimited staff accounts with custom roles and per-module create/read/update/delete permissions",
    "Government-backed prayer time schedules resolved per mosque's coordinates, plus a one-way activities/agenda board",
    "Locked-layout mini CMS letting each mosque customize only logo, brand colors, and typography",
    "Asset inventory tracking by source (purchased vs. donated) and condition (good/damaged/lost), decoupled from the finance module",
  ],
  process: [
    "Architected as a multi-tenant SaaS with strict tenant-scoped data isolation, subdomain-based routing, and an API-first Express backend documented via OpenAPI/Swagger for future mobile expansion.",
    "Built the Next.js dashboard and public site with TypeScript and Tailwind, plus Chart.js for finance analytics and Leaflet for location settings.",
    "Backend on Express, Knex, and PostgreSQL with Redis caching, JWT auth, Zod-validated inputs, and S3-compatible object storage for tenant-uploaded assets.",
    "Working in a two-person split: I build the product surface (frontend, admin dashboard, backend API); my teammate owns CI/CD pipelines, DevOps/infrastructure, and hardening the backend's security posture.",
  ],
  brand: {
    colors: ["#047857", "#F59E0B", "#1E293B"],
    fonts: ["Plus Jakarta Sans"],
    logo: "/assets/projects/masjidhub/logo.png",
  },
};

export default masjidhub;
