// Site content — edit here, all pages read from this file.
// Ported verbatim from docs/design/mrizqi-portofolio-design/js/data.js

export type Project = {
  slug: string;
  title: string;
  category: string;
  org: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  highlights: string[];
  link: string;
  repoLink?: string;
  cover?: string;
  gallery?: string[];
  goal?: string;
  problem?: string;
  features?: string[];
  process?: string[];
  brand?: { colors: string[]; fonts: string[]; logo: string };
  sitemap?: string;
};

export type PostBlock =
  | { type: "quote"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "gallery"; images: string[] }
  | { type: "list"; items: { title: string; text: string }[] }
  | { type: "links"; items: { label: string; href: string }[] }
  | { type: "code"; code: string };

export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: PostBlock[];
  cover?: string;
  link?: string;
};

export type RoleHistoryEntry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  icon: string;
  label: string;
  items: string[];
};

export { PROJECTS } from "./projects";

export const CATEGORIES: string[] = ["All", "Mobile", "Data", "Web"];

export { POSTS } from "./blogs";

export const TAGS: string[] = ["All", "Flutter", "Team", "Android", "Java"];

export const ROLE_HISTORY: RoleHistoryEntry[] = [
  {
    title: "Technical Consultant (Mobile)",
    org: "PT. Altitude Solutions",
    period: "Dec 2025 — Present",
    bullets: [
      "Developed a Flutter driver application for a large-scale logistics and transportation ecosystem, integrating backend services and Firebase Cloud Messaging for real-time operational notifications.",
      "Refactored legacy POS and Asset Management systems, improving maintainability, code quality, and application performance.",
      "Designed and developed scalable Spring Boot microservices for modular enterprise system integrations.",
      "Contributed to multiple ERP modules using Spring Boot on the backend and Next.js on the frontend.",
      "Built an AI-powered invoice and receipt processing system using OCR to automate scanning, extraction, and validation.",
      "Implemented an AI-powered Telegram bot that automates ticket categorization and drafts support responses.",
    ],
  },
  {
    title: "Website Administrator",
    org: "Innovative Academy UGM",
    period: "Aug — Dec 2025",
    bullets: [
      "Redesigned the official Innovative Academy website, improving user experience, accessibility, and design consistency.",
      "Managed website content and publication workflows to keep organizational information current.",
      "Supported innovation events by coordinating technical logistics and startup masterclass sessions.",
    ],
  },
  {
    title: "Android Developer",
    org: "Aino Indonesia",
    period: "Feb — Apr 2025",
    bullets: [
      "Contributed to Project Acasia, the Android-based ticketing system deployed on TransJakarta buses.",
      "Migrated local databases using Room to improve data consistency and maintainability.",
      "Implemented device utility features — open settings, folder access, and administrative tools — for operators.",
    ],
  },
  {
    title: "Mobile Developer",
    org: "PT. Divistant Teknologi Indonesia",
    period: "Sep 2023 — Dec 2024",
    bullets: [
      "Developed a Flutter application for airport information, flight schedules, and passenger services integrated with Angkasa Pura systems.",
      "Built internal employee experience applications in Flutter, working closely with backend teams.",
      "Designed CI/CD pipelines with Jenkins and Fastlane to automate mobile deployment.",
      "Developed customer dashboard web applications using Nuxt.js, Tailwind CSS, and REST APIs.",
      "Integrated GraphQL APIs and implemented a scalable Flutter architecture following Clean Architecture principles.",
      "Implemented Firebase Crashlytics to improve monitoring and production issue tracking.",
    ],
  },
  {
    title: "Android Developer Assistant",
    org: "DTETI UGM",
    period: "Feb — Aug 2023",
    bullets: [
      "Developed and maintained Android applications supporting IoT-based concrete cutting depth analysis for toll road infrastructure.",
      "Collaborated with backend and IoT teams using WebSocket communication for real-time data synchronization.",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: "{ }",
    label: "Languages",
    items: ["Java", "Kotlin", "Dart", "JavaScript", "TypeScript", "Python", "SQL", "PHP", "HTML", "CSS"],
  },
  {
    icon: "▢",
    label: "Mobile",
    items: [
      "Flutter",
      "Android SDK",
      "Jetpack Compose",
      "MVVM",
      "Clean Architecture",
      "BLoC",
      "Cubit",
      "GetIt",
      "Room",
      "Hive",
      "Material Design",
    ],
  },
  {
    icon: "⌗",
    label: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Microservices",
      "REST API",
      "GraphQL",
      "JWT Auth",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
    ],
  },
  {
    icon: "◈",
    label: "Frontend",
    items: ["Next.js", "Nuxt.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: "✦",
    label: "AI & Automation",
    items: ["OCR", "OpenAI API", "Prompt Engineering", "Telegram Bot API", "Document Processing"],
  },
  {
    icon: "⌥",
    label: "DevOps & Tools",
    items: ["Git", "GitHub", "GitLab", "Fastlane", "Crashlytics", "Analytics", "Figma", "Postman", "Android Studio", "VS Code"],
  },
];
