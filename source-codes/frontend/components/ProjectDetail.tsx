"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";
import PrevNextNav from "./PrevNextNav";
import { PROJECTS } from "@/lib/data";

function ProjectDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("p");

  let i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i < 0) i = PROJECTS.findIndex((p) => p.slug === "arcibo");
  if (i < 0) i = 0;

  const project = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  useEffect(() => {
    document.title = `${project.title} — Muhammad Rizqi`;
  }, [project.title]);

  return (
    <div className="stack">
      <div className="row">
        <Reveal className="card detail-hero">
          <div>
            <div className="tile-top" style={{ justifyContent: "flex-start", gap: 12 }}>
              <span className="cat">{project.category}</span>
              <span className="date">{project.year}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="lead">{project.summary}</p>
          </div>
          <div className="pill-row">
            {project.link ? (
              <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener">
                Open project &#8599;
              </a>
            ) : null}
            <a className="btn btn-ghost" href="mailto:mrizqi070502@gmail.com">
              Ask about this work
            </a>
          </div>
        </Reveal>
        <div className="side-col">
          <Reveal className="card card--dark tile">
            <span className="eyebrow">My role</span>
            <div>
              <p className="role" style={{ color: "#fff" }}>
                {project.role}
              </p>
              <p className="role-sub" style={{ color: "rgba(255,255,255,.78)" }}>
                {project.org}
              </p>
            </div>
          </Reveal>
          <Reveal className="card card--pad">
            <span className="eyebrow">Stack</span>
            <div className="tag-row">
              {project.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="card" style={{ padding: 14 }}>
        <div className="imgph imgph--tall">Main screenshot / cover for this project</div>
      </Reveal>

      <div className="row">
        <Reveal className="card" style={{ flex: "1.4 1 420px", minWidth: 280, padding: 34 }}>
          <span className="eyebrow">What I did</span>
          <div className="acc" style={{ gap: 2 }}>
            {project.highlights.map((h) => (
              <div key={h} className="bullet" style={{ padding: "16px 12px", borderTop: "1px solid rgba(20,39,78,.08)" }}>
                <i></i>
                <p style={{ fontSize: 16, color: "var(--text)" }}>{h}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="side-col">
          <Reveal className="card" style={{ padding: 14 }}>
            <div className="imgph imgph--mid">Detail shot 1</div>
          </Reveal>
          <Reveal className="card" style={{ padding: 14 }}>
            <div className="imgph imgph--mid">Detail shot 2</div>
          </Reveal>
        </div>
      </div>

      <PrevNextNav basePath="/project" prev={prev} next={next} />
    </div>
  );
}

export default function ProjectDetail() {
  return (
    <Suspense fallback={null}>
      <ProjectDetailContent />
    </Suspense>
  );
}
