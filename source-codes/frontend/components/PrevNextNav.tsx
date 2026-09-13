"use client";

import Link from "next/link";

export default function PrevNextNav({
  basePath,
  prev,
  next,
}: {
  basePath: string;
  prev: { slug: string; title: string };
  next: { slug: string; title: string };
}) {
  return (
    <div className="nav-pair">
      <Link className="card card--lift prev" href={`${basePath}?p=${encodeURIComponent(prev.slug)}`}>
        <span className="lbl">&larr; Previous</span>
        <span className="t">{prev.title}</span>
      </Link>
      <Link className="card card--lift next" href={`${basePath}?p=${encodeURIComponent(next.slug)}`}>
        <span className="lbl">Next &rarr;</span>
        <span className="t">{next.title}</span>
      </Link>
    </div>
  );
}
