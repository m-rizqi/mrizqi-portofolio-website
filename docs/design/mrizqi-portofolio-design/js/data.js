/* Site content — edit here, all pages read from this file. */
window.PROJECTS = [
  {
    slug: "logistics-driver-app",
    title: "Logistics Driver App",
    category: "Mobile",
    org: "PT. Altitude Solutions",
    year: "2026",
    role: "Technical Consultant (Mobile)",
    summary: "Flutter driver application for a large-scale logistics and transportation ecosystem, integrated with backend services and Firebase Cloud Messaging for real-time operational notifications.",
    stack: ["Flutter", "Dart", "Firebase", "FCM", "REST API"],
    highlights: [
      "Real-time job and status notifications through Firebase Cloud Messaging.",
      "Integrated with backend services across the logistics ecosystem.",
      "Built for daily field use by drivers across large fleets."
    ],
    link: ""
  },
  {
    slug: "ai-invoice-ocr",
    title: "AI Invoice & Receipt Processing",
    category: "AI",
    org: "PT. Altitude Solutions",
    year: "2026",
    role: "Backend / AI Engineer",
    summary: "AI-powered document pipeline using OCR to automate invoice and receipt scanning, information extraction, and validation.",
    stack: ["OCR", "OpenAI API", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Automated scanning and field extraction for invoices and receipts.",
      "Validation layer to catch extraction errors before posting.",
      "Removed manual data entry from the finance workflow."
    ],
    link: ""
  },
  {
    slug: "ai-support-bot",
    title: "AI Telegram Support Bot",
    category: "AI",
    org: "PT. Altitude Solutions",
    year: "2026",
    role: "Backend / AI Engineer",
    summary: "Telegram bot that assists support management teams by automating ticket categorization and generating AI-assisted responses.",
    stack: ["Telegram Bot API", "OpenAI API", "Spring Boot"],
    highlights: [
      "Automatic ticket categorization on intake.",
      "AI-drafted replies for support agents to review and send.",
      "Streamlined the customer support workflow end to end."
    ],
    link: ""
  },
  {
    slug: "erp-modules",
    title: "ERP Modules & Microservices",
    category: "Backend",
    org: "PT. Altitude Solutions",
    year: "2026",
    role: "Full-Stack Developer",
    summary: "Multiple ERP modules built on Spring Boot microservices with Next.js frontends, supporting operational and business workflows.",
    stack: ["Spring Boot", "Java", "Next.js", "PostgreSQL", "Microservices"],
    highlights: [
      "Scalable microservices for modular enterprise integrations.",
      "Next.js frontends for operational modules.",
      "Refactored legacy POS and Asset Management systems for maintainability."
    ],
    link: ""
  },
  {
    slug: "acasia-ticketing",
    title: "Acasia Bus Ticketing",
    category: "Mobile",
    org: "Aino Indonesia",
    year: "2025",
    role: "Android Developer",
    summary: "Android-based ticketing system deployed on TransJakarta buses, with local database migration and operator utility features.",
    stack: ["Android", "Kotlin", "Room", "MVVM", "GPS"],
    highlights: [
      "Migrated local databases to Room for data consistency.",
      "Device utilities: open settings, folder access, admin tools.",
      "Deployed on production TransJakarta fleet hardware."
    ],
    link: ""
  },
  {
    slug: "innovative-academy-web",
    title: "Innovative Academy Website",
    category: "Web",
    org: "Innovative Academy UGM",
    year: "2025",
    role: "Website Administrator",
    summary: "Redesign and content management of the official Innovative Academy website, improving user experience, accessibility, and design consistency.",
    stack: ["WordPress", "Figma"],
    highlights: [
      "Full visual redesign with a consistent design language.",
      "Publication workflow to keep organizational info current.",
      "Supported innovation events and startup masterclass sessions."
    ],
    link: ""
  },
  {
    slug: "airport-app",
    title: "Airport Information App",
    category: "Mobile",
    org: "PT. Divistant Teknologi Indonesia",
    year: "2024",
    role: "Mobile Developer",
    summary: "Flutter application providing airport information, flight schedules, and passenger services integrated with Angkasa Pura systems.",
    stack: ["Flutter", "GraphQL", "Firebase", "Clean Architecture"],
    highlights: [
      "Flight schedules and passenger services in one app.",
      "GraphQL integration with a scalable Clean Architecture setup.",
      "CI/CD via Jenkins and Fastlane; Crashlytics for monitoring."
    ],
    link: ""
  },
  {
    slug: "arcibo",
    title: "ARCIBO — Augmented Reality Civil Block",
    category: "Mobile",
    org: "Team project",
    year: "2024",
    role: "Team Lead & Mobile Developer",
    summary: "Educational Augmented Reality mobile application about traditional Indonesian houses, with AR experiences, quizzes, and user activity tracking.",
    stack: ["Flutter", "Firebase", "AR", "BLoC", "Cubit", "GetIt"],
    highlights: [
      "Led the team from concept through release.",
      "AR models of traditional Indonesian house structures.",
      "Quizzes and activity tracking to measure learning progress."
    ],
    link: "https://s.id/ARCIBO"
  },
  {
    slug: "netra",
    title: "Netra — Concrete Cut Monitoring",
    category: "Mobile",
    org: "DTETI UGM",
    year: "2023",
    role: "Android Developer Assistant",
    summary: "Android application supporting IoT-based concrete cutting depth analysis for toll road infrastructure projects.",
    stack: ["Android", "Kotlin", "WebSocket", "IoT"],
    highlights: [
      "WebSocket communication for real-time data sync.",
      "Built with backend and IoT engineering teams.",
      "Used on live toll road infrastructure measurement work."
    ],
    link: ""
  },
  {
    slug: "mahezza",
    title: "MAHEZZA — Mental Health Puzzle Game",
    category: "Mobile",
    org: "Team project",
    year: "2023",
    role: "Mobile Developer",
    summary: "Native Android application promoting children's mental health through interactive puzzle games.",
    stack: ["Android", "Jetpack Compose", "MVVM", "Firebase"],
    highlights: [
      "MVVM architecture with Firebase Auth, Firestore, and Storage.",
      "Interactive puzzle mechanics designed for children.",
      "Crashlytics monitoring for production stability."
    ],
    link: "https://s.id/MAHEZZA"
  },
  {
    slug: "toko-management",
    title: "Toko Management System",
    category: "Mobile",
    org: "Personal project",
    year: "2022",
    role: "Android Developer",
    summary: "POS application for traditional grocery stores featuring barcode scanning, cashier functionality, inventory management, and Bluetooth receipt printing.",
    stack: ["Android", "Room", "Firebase"],
    highlights: [
      "Barcode scanning and cashier flow for daily store operation.",
      "Inventory management with offline-first local storage.",
      "Bluetooth thermal receipt printing."
    ],
    link: "https://s.id/TokoManagementSystem"
  },
  {
    slug: "paragraph",
    title: "Paragraph",
    category: "Mobile",
    org: "Personal project",
    year: "2021",
    role: "Android Developer",
    summary: "Social reading platform enabling users to create, share, and discover short-form articles.",
    stack: ["Android", "Firebase"],
    highlights: [
      "Write, publish, and discover short-form articles.",
      "Firebase-backed auth and content storage.",
      "First end-to-end Android product I shipped."
    ],
    link: "https://s.id/Paragraph"
  }
];

window.CATEGORIES = ["All", "Mobile", "Backend", "AI", "Web"];

// Placeholder blog entries — replace title/excerpt/body with your real posts.
window.POSTS = [
  {
    slug: "clean-architecture-flutter",
    title: "Structuring a Flutter app with Clean Architecture",
    tag: "Flutter",
    date: "Aug 2026",
    readTime: "8 min read",
    excerpt: "How I split a production Flutter app into data, domain, and presentation layers — and which parts of the theory I skip in real projects.",
    body: [
      "Draft intro — replace this paragraph with your own opening: why layering matters once a Flutter app grows past a handful of screens.",
      "Draft body — cover how you organise data, domain, and presentation, where BLoC and Cubit fit, and how GetIt wires dependencies.",
      "Draft closing — what you would keep and what you would drop on the next project."
    ]
  },
  {
    slug: "spring-boot-microservices-notes",
    title: "Notes on building Spring Boot microservices for ERP",
    tag: "Backend",
    date: "Jul 2026",
    readTime: "10 min read",
    excerpt: "Service boundaries, shared contracts, and the trade-offs I ran into while splitting enterprise modules into microservices.",
    body: [
      "Draft intro — the ERP modules you worked on and why a modular backend was needed.",
      "Draft body — how you drew service boundaries, handled contracts between services, and kept local development sane.",
      "Draft closing — what you would design differently today."
    ]
  },
  {
    slug: "ocr-invoice-automation",
    title: "Automating invoice processing with OCR and LLMs",
    tag: "AI",
    date: "Jun 2026",
    readTime: "7 min read",
    excerpt: "A practical pipeline for scanning documents, extracting fields, and validating results before anything reaches the database.",
    body: [
      "Draft intro — the manual data-entry problem this pipeline replaced.",
      "Draft body — the OCR step, the extraction prompt, and the validation layer that catches bad reads.",
      "Draft closing — accuracy expectations and where a human still needs to review."
    ]
  },
  {
    slug: "fcm-realtime-notifications",
    title: "Reliable real-time notifications with FCM",
    tag: "Mobile",
    date: "May 2026",
    readTime: "6 min read",
    excerpt: "What it takes to make push notifications dependable for drivers working in the field all day.",
    body: [
      "Draft intro — why notification reliability matters in a logistics app.",
      "Draft body — token handling, background delivery, and retry behaviour.",
      "Draft closing — the monitoring you need to trust delivery."
    ]
  },
  {
    slug: "cicd-flutter-jenkins-fastlane",
    title: "CI/CD for Flutter with Jenkins and Fastlane",
    tag: "DevOps",
    date: "Apr 2026",
    readTime: "9 min read",
    excerpt: "Automating builds, signing, and distribution so releases stop depending on one laptop.",
    body: [
      "Draft intro — the manual release process you started from.",
      "Draft body — pipeline stages, signing setup, and distribution to testers.",
      "Draft closing — what broke and how you fixed it."
    ]
  },
  {
    slug: "uwb-indoor-positioning",
    title: "UWB indoor positioning on Android",
    tag: "Research",
    date: "Mar 2026",
    readTime: "11 min read",
    excerpt: "Findings from my undergraduate research: building an Android app for UWB-based self-localization and real-time tracking.",
    body: [
      "Draft intro — the research question and why UWB over other indoor positioning methods.",
      "Draft body — the Android implementation, measurement setup, and accuracy you observed.",
      "Draft closing — limitations and possible follow-up work."
    ]
  }
];

window.TAGS = ["All", "Flutter", "Mobile", "Backend", "AI", "DevOps", "Research"];

window.ROLE_HISTORY = [
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
      "Implemented an AI-powered Telegram bot that automates ticket categorization and drafts support responses."
    ]
  },
  {
    title: "Website Administrator",
    org: "Innovative Academy UGM",
    period: "Aug — Dec 2025",
    bullets: [
      "Redesigned the official Innovative Academy website, improving user experience, accessibility, and design consistency.",
      "Managed website content and publication workflows to keep organizational information current.",
      "Supported innovation events by coordinating technical logistics and startup masterclass sessions."
    ]
  },
  {
    title: "Android Developer",
    org: "Aino Indonesia",
    period: "Feb — Apr 2025",
    bullets: [
      "Contributed to Project Acasia, the Android-based ticketing system deployed on TransJakarta buses.",
      "Migrated local databases using Room to improve data consistency and maintainability.",
      "Implemented device utility features — open settings, folder access, and administrative tools — for operators."
    ]
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
      "Implemented Firebase Crashlytics to improve monitoring and production issue tracking."
    ]
  },
  {
    title: "Android Developer Assistant",
    org: "DTETI UGM",
    period: "Feb — Aug 2023",
    bullets: [
      "Developed and maintained Android applications supporting IoT-based concrete cutting depth analysis for toll road infrastructure.",
      "Collaborated with backend and IoT teams using WebSocket communication for real-time data synchronization."
    ]
  }
];

window.SKILL_GROUPS = [
        { icon: "{ }", label: "Languages", items: ["Java", "Kotlin", "Dart", "JavaScript", "TypeScript", "Python", "SQL", "PHP", "HTML", "CSS"] },
        { icon: "▢", label: "Mobile", items: ["Flutter", "Android SDK", "Jetpack Compose", "MVVM", "Clean Architecture", "BLoC", "Cubit", "GetIt", "Room", "Hive", "Material Design"] },
        { icon: "⌗", label: "Backend", items: ["Spring Boot", "Node.js", "Microservices", "REST API", "GraphQL", "JWT Auth", "PostgreSQL", "MySQL", "Firebase", "Supabase"] },
        { icon: "◈", label: "Frontend", items: ["Next.js", "Nuxt.js", "Tailwind CSS", "Bootstrap"] },
        { icon: "✦", label: "AI & Automation", items: ["OCR", "OpenAI API", "Prompt Engineering", "Telegram Bot API", "Document Processing"] },
        { icon: "⌥", label: "DevOps & Tools", items: ["Git", "GitHub", "GitLab", "Fastlane", "Crashlytics", "Analytics", "Figma", "Postman", "Android Studio", "VS Code"] }
      ];
