import Link from "next/link";

type NavActive = "projects" | "blog" | null;

export default function Nav({
  wrapClass = "",
  active = null,
}: {
  wrapClass?: string;
  active?: NavActive;
}) {
  return (
    <nav className={`nav wrap ${wrapClass}`.trim()}>
      <div className="nav-inner">
        <Link className="brand" href="/">
          <span className="mark">MR</span>
          <span className="name">Muhammad Rizqi</span>
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/projects" className={active === "projects" ? "active" : undefined}>
            Projects
          </Link>
          <Link href="/blog" className={active === "blog" ? "active" : undefined}>
            Blog
          </Link>
          <Link href="/#contact">Contact</Link>
          <a className="btn btn-primary btn-sm" href="/assets/CV_Muhammad_Rizqi.pdf" download>
            <span>&#8595;</span>CV
          </a>
        </div>
      </div>
    </nav>
  );
}
