import type { Project } from "../data";

const paragraph: Project = {
  slug: "paragraph",
  title: "Paragraph: Short Read, Easy Write",
  category: "Mobile",
  org: "Personal project",
  year: "2021",
  role: "Product Manager, Designer & Developer",
  summary:
    "An Android app for short-form articles — read posts from other users or write your own — built to fight the fatigue of thousand-word articles that make people give up on reading before they start.",
  stack: ["Kotlin", "Android View", "View Binding", "Firebase", "Realtime Database", "ViewPager"],
  highlights: [
    "Owned the project end to end as Product Manager, Designer, and Developer over a two-month build, October to November 2021.",
    "Designed the UI in Figma and implemented it in Android Studio with XML views wired through View Binding.",
    "Built Firebase-backed CRUD for posts — trending feed, new posts, popular tags, and multi-field search and filtering.",
    "Implemented ViewPager for swipeable feed navigation and a full article composer with title, image, tags, and content.",
  ],
  link: "https://play.google.com/store/apps/details?id=com.rizqi.paragraph",
  repoLink: "https://github.com/m-rizqi/paragraph",
  cover: "/assets/projects/paragraph/cover.jpg",
  gallery: [
    "/assets/projects/paragraph/shot-1.jpg",
    "/assets/projects/paragraph/shot-2.jpg",
    "/assets/projects/paragraph/shot-3.jpg",
    "/assets/projects/paragraph/shot-4.jpg",
    "/assets/projects/paragraph/shot-5.jpg",
    "/assets/projects/paragraph/shot-6.jpg",
    "/assets/projects/paragraph/shot-7.jpg",
  ],
  goal: "Increase people's interest in reading by providing short but powerful readings.",
  problem:
    "Long articles running into the thousands of words make people give up on reading before they even start, even when they still want the knowledge inside. At the same time, some writers just want their work read by even a small audience. Paragraph tackles both by only ever surfacing short-form articles that are quick to read and easy to write.",
  features: [
    "Short articles posted by other users",
    "Users can write and publish their own short articles",
    "Trending posts and popular tags",
    "Post search with multi-field filtering",
  ],
  process: [
    "Designed in Figma, then built in Android Studio using XML views connected through View Binding for cleaner logic-to-view wiring.",
    "Used Firebase for authentication, Realtime Database, and CRUD operations on posts, with ViewPager powering swipeable trending, new, and tag-filtered feeds.",
    "Users can publish their own articles with a title, image, tags, and content, and find others' work through search with multi-field filtering.",
  ],
};

export default paragraph;
