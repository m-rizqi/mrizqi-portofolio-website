import type { Project } from "../data";

const arcibo: Project = {
  slug: "arcibo",
  title: "ARCIBO: Augmented Reality Civil Block",
  category: "Mobile",
  org: "Team project",
  year: "2024",
  role: "Chief Technology & Executive Officer — Team Lead",
  summary:
    "A knockdown toy paired with an Augmented Reality mobile app that teaches people about traditional Indonesian house construction, built as a cultural-preservation initiative for a national PKM-K student competition.",
  stack: ["Flutter", "Dart", "Firebase", "BLoC", "Cubit", "GetIt", "Room", "Camera API"],
  highlights: [
    "Led the team as CTEO through Program Kreativitas Mahasiswa – Kewirausahaan (PKM-K), a national student competition, from January to August 2024.",
    "Built the AR mobile app in Flutter with BLoC, Cubit, and GetIt for state and dependency management, structured into data, domain, and presentation layers (MVVM).",
    "Integrated Firebase Analytics, Crashlytics, Authentication, Firestore, and Storage alongside Room and camera APIs for in-app 3D AR capture.",
    "Owned UI/UX end to end — 3D AR house visualization, quizzes, gameplay recording, construction fun facts, banner, logo, and brand graphics.",
  ],
  link: "https://play.google.com/store/apps/details?id=com.arcibo.arcibo",
  repoLink: "https://github.com/m-rizqi/arcibo-app",
  cover: "/assets/projects/arcibo/cover.png",
  gallery: [
    "/assets/projects/arcibo/shot-1.png",
    "/assets/projects/arcibo/shot-2.png",
    "/assets/projects/arcibo/shot-3.png",
  ],
  goal: "Showcase traditional houses, educate people about their cultural significance, and promote the active preservation of these architectural landmarks.",
  problem:
    "Indonesia is a diverse nation with rich cultural heritage, encompassing 1,340 ethnic groups, 2,500 regional languages, and thousands of cultural assets, both tangible and intangible. Traditional houses — vital symbols of regional identity and architectural uniqueness — face development stagnation, with only 175 units documented in 2020. These houses, now threatened by modernization, showcase distinctive Austronesian architectural principles, featuring raised wooden foundations and sophisticated knockdown construction techniques. ARCIBO addresses this challenge by introducing a constructive toy with Augmented Reality that recreates traditional houses as a preservation initiative, making Indonesian heritage accessible to children, educators, and collectors worldwide.",
  features: [
    "Homepage with activity history and recent updates",
    "Gallery of completed games",
    "3D Augmented Reality models of traditional houses",
    "Educational content including descriptions, quizzes, and fun facts about traditional houses",
    "Game progress tracking and achievement celebrations",
  ],
  process: [
    "Built with Flutter for cross-platform compatibility, fast iteration, and a lightweight footprint.",
    "The project incorporates Firebase Analytics, Crashlytics, Authentication, Firestore, and Storage, alongside a Room database and camera APIs for in-app 3D capture.",
    "Structured into data, domain, and presentation layers, with the data layer handling Firebase CRUD operations and the domain layer managing business logic under an MVVM architecture.",
  ],
  brand: {
    colors: ["#411C0A", "#F5B611", "#F35D08"],
    fonts: ["K2D", "Poppins"],
    logo: "/assets/projects/arcibo/logo.png",
  },
  sitemap: "/assets/projects/arcibo/sitemap.png",
};

export default arcibo;
