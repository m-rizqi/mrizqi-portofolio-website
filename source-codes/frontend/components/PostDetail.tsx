"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";
import PrevNextNav from "./PrevNextNav";
import { POSTS } from "@/lib/data";

function PostDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("p");

  let i = POSTS.findIndex((p) => p.slug === slug);
  if (i < 0) i = 0;

  const post = POSTS[i];
  const prev = POSTS[(i - 1 + POSTS.length) % POSTS.length];
  const next = POSTS[(i + 1) % POSTS.length];

  useEffect(() => {
    document.title = `${post.title} — Muhammad Rizqi`;
  }, [post.title]);

  return (
    <div className="stack">
      <Reveal className="card" style={{ padding: 42 }}>
        <div className="tile-top" style={{ justifyContent: "flex-start", gap: 12 }}>
          <span className="cat">{post.tag}</span>
          <span className="date">
            {post.date} &middot; {post.readTime}
          </span>
        </div>
        <h1
          style={{
            marginTop: 22,
            maxWidth: "30ch",
            fontWeight: 800,
            fontSize: "clamp(32px,4.6vw,54px)",
            lineHeight: 1.04,
          }}
        >
          {post.title}
        </h1>
        <p style={{ marginTop: 20, maxWidth: "60ch", fontSize: 18, lineHeight: 1.62, color: "var(--body)" }}>
          {post.excerpt}
        </p>
        <div className="byline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/photo.jpg" alt="Muhammad Rizqi" />
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>Muhammad Rizqi</p>
            <p style={{ marginTop: 3, fontSize: 13, color: "var(--muted)" }}>
              Software Engineer &middot; Mobile &amp; Backend
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="card" style={{ padding: 14 }}>
        <div className="imgph imgph--wide">Cover image for this article</div>
      </Reveal>

      <Reveal className="card" style={{ padding: 42 }}>
        <div className="prose">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div
          className="pill-row"
          style={{ marginTop: 34, paddingTop: 26, borderTop: "1px solid rgba(20,39,78,.08)" }}
        >
          <a className="btn btn-primary" href="mailto:mrizqi070502@gmail.com">
            Discuss this post
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/m-rizqi/"
            target="_blank"
            rel="noopener"
          >
            Share on LinkedIn
          </a>
        </div>
      </Reveal>

      <PrevNextNav basePath="/post" prev={prev} next={next} />
    </div>
  );
}

export default function PostDetail() {
  return (
    <Suspense fallback={null}>
      <PostDetailContent />
    </Suspense>
  );
}
