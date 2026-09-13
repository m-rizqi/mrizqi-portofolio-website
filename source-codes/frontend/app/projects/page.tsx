import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects — Muhammad Rizqi",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav active="projects" />
      <main className="wrap page stack">
        <ProjectsExplorer />

        <Reveal className="contact" style={{ minHeight: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ maxWidth: "22ch", fontSize: "clamp(26px,3.4vw,42px)", margin: 0 }}>
              Have something similar in mind?
            </h2>
            <div className="pill-row">
              <a className="btn" style={{ background: "#fff", color: "var(--navy)" }} href="mailto:mrizqi070502@gmail.com">
                Email me
              </a>
              <Link className="btn" style={{ border: "1px solid rgba(255,255,255,.28)", color: "#fff" }} href="/#contact">
                All contacts
              </Link>
            </div>
          </div>
        </Reveal>
        <Footer backHref="/" backLabel="Back to home" />
      </main>
    </>
  );
}
