"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";
import PrevNextNav from "./PrevNextNav";
import ZoomableImage from "./ZoomableImage";
import TechIcon from "./TechIcon";
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
            {project.repoLink ? (
              <a className="btn btn-ghost" href={project.repoLink} target="_blank" rel="noopener">
                View source &#8599;
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
                  <TechIcon name={s} />
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {project.goal || project.problem ? (
        <div className="row">
          {project.goal ? (
            <Reveal className="card card--dark card--pad" style={{ flex: "1 1 320px", minWidth: 260 }}>
              <span className="eyebrow">Goal</span>
              <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.92)" }}>
                {project.goal}
              </p>
            </Reveal>
          ) : null}
          {project.problem ? (
            <Reveal className="card card--lift card--pad" style={{ flex: "1.6 1 380px", minWidth: 260 }}>
              <span className="eyebrow">The problem</span>
              <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: "var(--text)" }}>
                {project.problem}
              </p>
            </Reveal>
          ) : null}
        </div>
      ) : null}

      <Reveal className="card" style={{ padding: 14 }}>
        {project.cover ? (
          <div className="imgph imgph--tall imgph--photo">
            <ZoomableImage src={project.cover} alt={`${project.title} cover`} />
          </div>
        ) : (
          <div className="imgph imgph--tall">Main screenshot / cover for this project</div>
        )}
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
          {[0, 1].map((idx) =>
            project.gallery?.[idx] ? (
              <Reveal className="card" style={{ padding: 14 }} key={project.gallery[idx]}>
                <div className="imgph imgph--mid imgph--photo">
                  <ZoomableImage src={project.gallery[idx]} alt={`${project.title} screenshot ${idx + 1}`} />
                </div>
              </Reveal>
            ) : (
              <Reveal className="card" style={{ padding: 14 }} key={`placeholder-${idx}`}>
                <div className="imgph imgph--mid">Detail shot {idx + 1}</div>
              </Reveal>
            )
          )}
        </div>
      </div>

      {project.process?.length || project.features?.length ? (
        <div className="row">
          <Reveal className="card card--pad" style={{ flex: "1.4 1 420px", minWidth: 280 }}>
            <span className="eyebrow">How it was built</span>
            {project.process?.map((p) => (
              <p key={p} style={{ marginTop: 14, fontSize: 15, lineHeight: 1.65, color: "var(--text)" }}>
                {p}
              </p>
            ))}
            {project.features?.length ? (
              <div className="acc" style={{ gap: 2, marginTop: 8 }}>
                {project.features.map((f) => (
                  <div key={f} className="bullet" style={{ padding: "10px 0" }}>
                    <i></i>
                    <p style={{ fontSize: 15, color: "var(--body)" }}>{f}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>
          {project.brand || project.sitemap ? (
            <div className="side-col">
              {project.brand ? (
                <Reveal
                  className="card card--pad"
                  style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}
                >
                  <span className="eyebrow">Brand</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.brand.logo}
                    alt={`${project.title} logo`}
                    style={{ width: 88, height: 88, borderRadius: 22, objectFit: "cover" }}
                  />
                  <div className="tag-row">
                    {project.brand.colors.map((hex) => (
                      <span
                        key={hex}
                        className="tag tag--sm"
                        style={{ background: hex, color: "#fff", borderColor: hex }}
                      >
                        {hex}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)" }}>{project.brand.fonts.join(" · ")}</p>
                </Reveal>
              ) : null}
              {project.sitemap ? (
                <Reveal className="card" style={{ padding: 14 }}>
                  <div className="imgph imgph--mid imgph--photo">
                    <ZoomableImage src={project.sitemap} alt={`${project.title} sitemap`} />
                  </div>
                </Reveal>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {project.gallery?.slice(2).map((src, idx) => (
        <Reveal className="card" style={{ padding: 14 }} key={src}>
          <div className="imgph imgph--wide imgph--photo">
            <ZoomableImage src={src} alt={`${project.title} screenshot ${idx + 3}`} />
          </div>
        </Reveal>
      ))}

      {PROJECTS.length > 1 ? <PrevNextNav basePath="/project" prev={prev} next={next} /> : null}
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
