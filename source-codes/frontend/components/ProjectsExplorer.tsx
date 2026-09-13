"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import { PROJECTS, CATEGORIES } from "@/lib/data";

export default function ProjectsExplorer() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <div className="page-head">
        <div>
          <span className="eyebrow">All projects</span>
          <h1>Things I&apos;ve built</h1>
          <p>Client work, research projects, and personal apps &mdash; mobile, backend, AI automation, and web.</p>
        </div>
        <span className="count">
          {list.length} of {PROJECTS.length} projects
        </span>
      </div>
      <FilterBar tags={CATEGORIES} active={active} onChange={setActive} />
      <div className="grid3">
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
