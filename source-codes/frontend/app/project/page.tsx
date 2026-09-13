import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Project — Muhammad Rizqi",
};

export default function ProjectDetailPage() {
  return (
    <>
      <Nav wrapClass="wrap--md" active="projects" />
      <main className="wrap wrap--md page stack">
        <Link href="/projects" style={{ fontSize: 13, color: "var(--muted)" }}>
          &larr; All projects
        </Link>
        <ProjectDetail />
        <Footer backHref="/projects" backLabel="All projects" />
      </main>
    </>
  );
}
