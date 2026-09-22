import type { Project } from "../data";

const nontonkilat: Project = {
  slug: "nontonkilat",
  title: "NontonKilat: AI YouTube Tutorial Comparator",
  category: "Web",
  org: "25Hours Lab",
  year: "2026",
  role: "Founder, Product Engineer (Extension, Web, Dashboard & Backend)",
  summary:
    "A Chrome extension that uses Gemini to compare multiple YouTube tutorials from the same search (flagging what's redundant, what's unique, and the most efficient watch order), built end to end as a flagship consumer product for 25Hours Lab, my own software house.",
  stack: [
    "Chrome Extension (Manifest V3)",
    "TypeScript",
    "Express",
    "PostgreSQL",
    "Google Gemini API",
    "Midtrans",
    "PostHog",
    "yt-dlp",
    "ffmpeg",
  ],
  highlights: [
    "Built solo, end to end, as a live consumer product under 25Hours Lab: the Manifest V3 Chrome extension (content script + side panel), the marketing landing page and subscription dashboard, and the Express/PostgreSQL backend, shipped and installable on the Chrome Web Store.",
    "Designed an async analysis pipeline that tries YouTube transcripts first, falls back to downloading video + extracting keyframes (yt-dlp + ffmpeg) when captions are missing, then sends the content to Gemini with a structured JSON schema for cross-video comparison, caching results per video ID to control API cost.",
    "Shipped freemium monetization end to end: server-enforced Free/Pro/top-up plans, a real Midtrans Snap checkout with signature-verified webhooks (sandbox), and a self-serve dashboard for plan changes, billing history, and auto-renew.",
    "Instrumented the product with PostHog analytics and hardened it after a real incident (a shared test/dev database bug that wiped live user data) by isolating the test database and removing the unsafe fallback, documented and fixed the same session.",
  ],
  link: "https://chromewebstore.google.com/detail/ophhfcpoifdlpfbedeinkeihgcplbibp",
  cover: "/assets/projects/nontonkilat/cover.png",
  gallery: [
    "/assets/projects/nontonkilat/shot-1.png",
    "/assets/projects/nontonkilat/shot-2.png",
    "/assets/projects/nontonkilat/shot-3.png",
    "/assets/projects/nontonkilat/shot-4.jpg",
  ],
  goal: "Let self-learners compare several YouTube tutorials on the same topic before watching any of them, so they spend time only on the videos that actually add something new.",
  problem:
    "Researching a technical topic on YouTube surfaces many tutorials that mostly overlap in content, while a few contain genuinely unique insights, but there's no way to know which is which without watching all of them. NontonKilat lets a learner select up to 10 videos straight from YouTube's search results and get an AI-generated verdict on what's redundant, what's essential, and the most time-efficient order to watch.",
  features: [
    "In-page checkbox selection on YouTube search results, gated by plan (3 videos on Free, 10 on Pro)",
    "Transcript-first content extraction with automatic video-download + keyframe fallback when captions are unavailable",
    "Cross-video AI comparison: shared points, unique points with clickable timestamps and verbatim quotes, and a per-video redundancy label (must-watch / optional / redundant)",
    "Recommended watch order plus a \"watch X min instead of Y min\" time-saved headline",
    "Freemium billing (Free / Pro / top-up) with Midtrans Snap checkout and a dashboard for plan, usage, and auto-renew management",
    "Per-video-ID caching in PostgreSQL so a previously analyzed video is never re-processed from scratch",
  ],
  process: [
    "Built as three coordinated services: a Manifest V3 Chrome extension (content script + side panel UI), a static web frontend (landing page + subscription dashboard), and an Express/TypeScript backend, all under one 25Hours Lab domain.",
    "The backend runs analysis jobs asynchronously, persisting progress and per-video cache in PostgreSQL, and calls Gemini with `responseJsonSchema` structured output so comparison results are validated before ever reaching the extension.",
    "Billing runs on Midtrans Snap with signature-verified, idempotent webhooks that grant plan/credits automatically, alongside PostHog for product analytics.",
    "Test-driven throughout (vitest + supertest on the backend, vitest on the extension's pure logic), with manual end-to-end verification against real YouTube videos and a real Gemini API key before considering any slice done.",
  ],
  brand: {
    colors: ["#FACC15", "#032861", "#0B0F14"],
    fonts: ["Plus Jakarta Sans"],
    logo: "/assets/projects/nontonkilat/logo.png",
  },
};

export default nontonkilat;
