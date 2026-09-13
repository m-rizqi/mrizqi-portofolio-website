"use client";

import Link from "next/link";
import type { Post } from "@/lib/data";
import { useReveal } from "./useReveal";

export default function PostCard({ post }: { post: Post }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      className="card card--lift tile-link reveal"
      href={`/post?p=${encodeURIComponent(post.slug)}`}
    >
      <div className="imgph" style={{ height: 170 }}>
        Cover image for this article
      </div>
      <div className="tile-body">
        <div className="tile-top">
          <span className="cat">{post.tag}</span>
          <span className="date">{post.date}</span>
        </div>
        <h3 className="tile-title">{post.title}</h3>
        <p className="tile-sum">{post.excerpt}</p>
        <span className="tile-cta">
          Read article &rarr;<small>{post.readTime}</small>
        </span>
      </div>
    </Link>
  );
}
