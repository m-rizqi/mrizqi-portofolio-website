"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import PostCard from "./PostCard";
import { POSTS, TAGS } from "@/lib/data";

export default function BlogExplorer() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? POSTS : POSTS.filter((p) => p.tag === active);

  return (
    <>
      <div className="page-head">
        <div>
          <span className="eyebrow">Writing</span>
          <h1>Blog</h1>
          <p>Notes on mobile architecture, backend systems, and AI-assisted automation &mdash; written while building them.</p>
        </div>
        <span className="count">
          {list.length} of {POSTS.length} articles
        </span>
      </div>
      <FilterBar tags={TAGS} active={active} onChange={setActive} />
      <div className="grid3">
        {list.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
