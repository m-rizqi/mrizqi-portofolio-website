"use client";

import Link from "next/link";
import type { Project } from "@/lib/data";
import { useReveal } from "./useReveal";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      className="card card--lift tile-link reveal"
      href={`/project?p=${encodeURIComponent(project.slug)}`}
    >
      {project.cover ? (
        <div className="imgph imgph--thumb">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.cover} alt={project.title} />
        </div>
      ) : (
        <div className="imgph">{project.title} — drop a screenshot here</div>
      )}
      <div className="tile-body">
        <div className="tile-top">
          <span className="cat">{project.category}</span>
          <span className="date">{project.year}</span>
        </div>
        <h3 className="tile-title">{project.title}</h3>
        <p className="tile-meta">
          {project.org} &middot; {project.role}
        </p>
        <p className="tile-sum">{project.summary}</p>
        <span className="tile-cta">View detail &rarr;</span>
      </div>
    </Link>
  );
}
