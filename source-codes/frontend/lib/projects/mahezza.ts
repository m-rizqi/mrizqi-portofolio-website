import type { Project } from "../data";

const mahezza: Project = {
  slug: "mahezza",
  title: "MAHEZZA: Mental Health Puzzle Game",
  category: "Mobile",
  org: "Team project",
  year: "2023",
  role: "Chief Technology Officer — Mobile & UI/UX",
  summary:
    "A knockdown puzzle board paired with a native Android app that teaches children and parents about mental health through parent-guided storytelling, timers, calming music, and photo creation.",
  stack: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Room", "Camera API"],
  highlights: [
    "Served as CTO for a one-year PKM-K national student competition project, from January to December 2023.",
    "Built the native Android app in Kotlin with Jetpack Compose, structured into data, domain, and presentation layers (MVVM).",
    "Integrated Firebase Authentication, Firestore, Storage, and Crashlytics, plus audio playback and camera/twibbon capture.",
    "Owned UI/UX end to end — homepage activity tracking, story challenges, banner, logo, and brand graphics.",
  ],
  link: "https://play.google.com/store/apps/details?id=com.mahezza.mahezza",
  repoLink: "https://github.com/m-rizqi/mahezza",
  cover: "/assets/projects/mahezza/cover.png",
  gallery: [
    "/assets/projects/mahezza/shot-1.png",
    "/assets/projects/mahezza/shot-2.png",
    "/assets/projects/mahezza/shot-3.png",
    "/assets/projects/mahezza/shot-4.png",
  ],
  goal: "Enrich children's puzzle board experience with interactive features and educate them about mental health through parent-guided storytelling in the app.",
  problem:
    "Mental health among children and adolescents is a critical issue in Indonesia. Over 20% of the population consists of this \"golden generation\" — so named for their vital role in the nation's economic future. Recent studies reveal 6.1% of adolescents experienced mental disorders in 2018, rising to 34.9% reporting mental health issues in 2022. Despite this, many parents lack both the knowledge and time to properly support their children's mental well-being. MAHEZZA integrates interactive puzzle games with a digital application to educate parents about mental health while strengthening family bonds through engaging animations and illustrations.",
  features: [
    "Homepage displaying recent activities",
    "Timer and background music during gameplay",
    "Photo capture and twibbon creation to celebrate puzzle completion",
    "Interactive stories and challenges for parents to share with their children",
  ],
  process: [
    "Built as a native Android app in Kotlin with Jetpack Compose, chosen for easier access to phone functionality like audio playback and camera features.",
    "The project incorporates Firebase Analytics, Crashlytics, Authentication, Firestore, and Storage, alongside a Room database and camera APIs.",
    "Structured into data, domain, and presentation layers, with the data layer handling Firebase CRUD operations and the domain layer managing business logic under an MVVM architecture.",
  ],
  brand: {
    colors: ["#FFD043", "#F6991A", "#166435"],
    fonts: ["Poppins"],
    logo: "/assets/projects/mahezza/logo.png",
  },
  sitemap: "/assets/projects/mahezza/sitemap.png",
};

export default mahezza;
