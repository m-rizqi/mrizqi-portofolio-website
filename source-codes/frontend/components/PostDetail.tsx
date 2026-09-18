"use client";

import { Suspense, useEffect, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";
import PrevNextNav from "./PrevNextNav";
import ZoomableImage from "./ZoomableImage";
import { POSTS } from "@/lib/data";

function renderInline(text: string): ReactNode[] {
  const regex = /`([^`]+)`|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      nodes.push(<code key={key++}>{match[1]}</code>);
    } else if (match[2] !== undefined) {
      nodes.push(<strong key={key++}>{renderInline(match[2])}</strong>);
    } else {
      nodes.push(
        <a key={key++} href={match[4]} target="_blank" rel="noopener">
          {match[3].replace(/\*\*/g, "")}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

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

      <div className="card" style={{ padding: 42 }}>
        <div className="prose">
          {post.body.map((block, i) => {
            if (block.type === "quote") {
              return <blockquote key={i}>{renderInline(block.text)}</blockquote>;
            }
            if (block.type === "heading") {
              return <h2 key={i}>{renderInline(block.text)}</h2>;
            }
            if (block.type === "paragraph") {
              return <p key={i}>{renderInline(block.text)}</p>;
            }
            if (block.type === "code") {
              return (
                <pre className="code-block" key={i}>
                  <code>{block.code}</code>
                </pre>
              );
            }
            if (block.type === "image") {
              return (
                <figure key={i}>
                  <div className="imgph imgph--wide imgph--photo">
                    <ZoomableImage src={block.src} alt={block.caption ?? post.title} />
                  </div>
                  {block.caption ? <figcaption>{block.caption}</figcaption> : null}
                </figure>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i}>
                  {block.items.map((item, idx) => (
                    <li key={item.title || idx}>
                      <div>
                        {item.title ? <strong>{renderInline(item.title)}</strong> : null}
                        <span>{renderInline(item.text)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "gallery") {
              return (
                <div className="prose-gallery" key={i}>
                  {block.images.map((src) => (
                    <div className="imgph imgph--photo" key={src}>
                      <ZoomableImage src={src} alt={post.title} />
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div className="embed-links" key={i}>
                {block.items.map((item) => (
                  <a className="embed-link" href={item.href} target="_blank" rel="noopener" key={item.href}>
                    <span className="t">{item.label}</span>
                    <span className="u">{new URL(item.href).hostname.replace(/^www\./, "")}</span>
                  </a>
                ))}
              </div>
            );
          })}
        </div>
        <div
          className="pill-row"
          style={{ marginTop: 34, paddingTop: 26, borderTop: "1px solid rgba(20,39,78,.08)" }}
        >
          {post.link ? (
            <a className="btn btn-primary" href={post.link} target="_blank" rel="noopener">
              Read original &#8599;
            </a>
          ) : (
            <a className="btn btn-primary" href="mailto:mrizqi070502@gmail.com">
              Discuss this post
            </a>
          )}
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/m-rizqi/"
            target="_blank"
            rel="noopener"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>

      {POSTS.length > 1 ? <PrevNextNav basePath="/post" prev={prev} next={next} /> : null}
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
