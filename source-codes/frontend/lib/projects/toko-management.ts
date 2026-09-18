import type { Project } from "../data";

const tokoManagement: Project = {
  slug: "toko-management",
  title: "Toko Management System",
  category: "Mobile",
  org: "Personal project",
  year: "2022",
  role: "Product Manager, Designer & Developer",
  summary:
    "An Android app that lets store sellers store and look up product prices — with barcode scanning, dual consumer/retailer pricing, a built-in cashier, and Bluetooth receipt printing — built for my parents' store, which had no POS system at all.",
  stack: ["Kotlin", "Android View", "Firebase", "Room", "MVVM", "Camera API"],
  highlights: [
    "Owned the project end to end as Product Manager, Designer, and Developer over a four-month build, September to December 2022.",
    "Built barcode scanning (Google Vision) and manual search so any product's price can be found in seconds, even for items without a barcode.",
    "Modeled dual pricing per item — consumer vs. retailer — with per-unit price variants and quantity-based special pricing.",
    "Implemented a local-first data layer with Room, backing up to Firebase Realtime Database and Storage on a user-set schedule, plus Bluetooth receipt printing for the cashier flow.",
  ],
  link: "https://play.google.com/store/apps/details?id=com.rizqi.tms",
  repoLink: "https://github.com/m-rizqi/tms-app",
  cover: "/assets/projects/toko-management/cover.jpg",
  gallery: [
    "/assets/projects/toko-management/shot-1.jpg",
    "/assets/projects/toko-management/shot-2.jpg",
    "/assets/projects/toko-management/shot-3.jpg",
    "/assets/projects/toko-management/shot-4.jpg",
    "/assets/projects/toko-management/shot-5.jpg",
  ],
  goal: "Allow store sellers to easily store and view product prices, cutting down the time spent looking up prices and letting them handle more buyers efficiently.",
  problem:
    "My parents run a store with no cashier technology — no computer, barcode scanner, or POS system. I used to help out, but when they stepped away I had no way to know a product's price and had to keep asking them. The challenge was building an MVP that stores product prices reliably using nothing but a phone, with efficient, fast data access — and handling the store's two-tier pricing, since sellers who buy in bulk to resell pay a different price than regular consumers.",
  features: [
    "Search and add items by keyword",
    "Search and add items using a barcode scan",
    "Frequently used items and no-barcode items surfaced on the main page",
    "Separate consumer and retailer prices per item",
    "Different price per unit, with notes or special pricing for bulk quantities",
  ],
  process: [
    "Built with Kotlin and Android View with Data Binding, chosen for Kotlin's flexible syntax and simpler logic-to-view integration.",
    "Used Firebase (Analytics, Crashlytics, Authentication, Realtime Database, Storage) alongside Room, Google Vision for barcode scanning, Glide, and a Bluetooth printer library.",
    "Data saves locally first; on a user-set backup schedule it syncs to Firebase along with images, and prompts a restore dialog the next time the user logs in — all under an MVVM architecture.",
  ],
  brand: {
    colors: ["#2A2A72", "#92DCE5", "#FFA400"],
    fonts: ["Rubik", "Karla"],
    logo: "/assets/projects/toko-management/logo.png",
  },
  sitemap: "/assets/projects/toko-management/sitemap.png",
};

export default tokoManagement;
