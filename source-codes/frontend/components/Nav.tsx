"use client";

import { useState } from "react";
import Link from "next/link";

type NavActive = "projects" | "blogs" | null;

export default function Nav({ active = null }: { active?: NavActive }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav wrap">
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={close}>
          <span className="mark">MR</span>
          <span className="name">Muhammad Rizqi</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`.trim()}>
          <Link href="/#about" onClick={close}>
            About
          </Link>
          <Link href="/#skills" onClick={close}>
            Skills
          </Link>
          <Link
            href="/projects"
            className={active === "projects" ? "active" : undefined}
            onClick={close}
          >
            Projects
          </Link>
          <Link href="/blogs" className={active === "blogs" ? "active" : undefined} onClick={close}>
            Blogs
          </Link>
          <Link href="/#contact" onClick={close}>
            Contact
          </Link>
          <a className="btn btn-primary btn-sm" href="/assets/CV_Muhammad_Rizqi.pdf" download>
            <span>&#8595;</span>CV
          </a>
        </div>
      </div>
    </nav>
  );
}
