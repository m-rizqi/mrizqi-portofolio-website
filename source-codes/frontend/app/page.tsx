import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceAccordion from "@/components/ExperienceAccordion";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";
import { PROJECTS, POSTS } from "@/lib/data";

const FEATURED_PROJECT_SLUGS = ["arcibo", "mahezza", "toko-management"];

export default function HomePage() {
  const featuredProjects = FEATURED_PROJECT_SLUGS.map((slug) =>
    PROJECTS.find((p) => p.slug === slug)
  ).filter((p): p is (typeof PROJECTS)[number] => Boolean(p));
  const featuredPosts = POSTS.slice(0, 3);

  return (
    <>
      <Nav />
      <main className="wrap page stack">
        {/* HERO */}
        <div className="row">
          <Reveal className="card card--lift hero">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h1>
                Muhammad
                <br />
                Rizqi
              </h1>
              <p className="lead">
                Software Engineer with 4+ years building scalable mobile, backend, and web
                applications across logistics, ERP, transportation, and enterprise systems.
              </p>
            </div>
            <div className="pill-row">
              <a className="btn btn-primary" href="/assets/CV_Muhammad_Rizqi.pdf" download>
                <span>&#8595;</span>Download CV
              </a>
              <a className="btn btn-ghost" href="/assets/CV_Muhammad_Rizqi.pdf" download>
                <span>&#8595;</span>Download portfolio
              </a>
            </div>
            <div className="pill-row">
              <span className="pill">Software Engineer</span>
              <span className="pill">Mobile Developer</span>
              <span className="pill">Full-Stack Developer</span>
            </div>
          </Reveal>

          <Reveal className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photo.jpg" alt="Muhammad Rizqi" />
            <div className="scrim"></div>
            <div className="meta">
              <p className="loc">Yogyakarta, Indonesia</p>
              <span className="badge-live badge-live--photo">
                <i></i>Open to collaborate
              </span>
            </div>
          </Reveal>

          <div className="stat-col">
            <Reveal className="card card--dark tile">
              <span className="eyebrow">Experience</span>
              <div>
                <p className="stat-num">4+</p>
                <p style={{ marginTop: 7, fontSize: 14, color: "rgba(255,255,255,.78)" }}>
                  years shipping production software
                </p>
              </div>
            </Reveal>
            <Reveal className="card card--lift tile">
              <span className="eyebrow">Currently</span>
              <div>
                <p className="role">Technical Consultant (Mobile)</p>
                <p className="role-sub">PT. Altitude Solutions &middot; Dec 2025 &mdash; Present</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ABOUT */}
        <div className="row" id="about">
          <Reveal className="card card--lift about">
            <span className="eyebrow">About</span>
            <p>
              Software Engineer with 4+ years of experience developing scalable mobile, backend,
              and web applications across logistics, ERP, transportation, and enterprise systems.
              Experienced in Flutter, Android Native, Spring Boot Microservices, Next.js, OCR,
              AI-powered automation, and cloud-based services such as Firebase. Passionate about
              building maintainable software architectures, improving system performance, and
              delivering high-quality products in Agile environments.
            </p>
          </Reveal>
          <Reveal className="card card--lift edu">
            <span className="eyebrow">Education</span>
            <div>
              <h3>BSc Information Engineering</h3>
              <p style={{ marginTop: 9, fontSize: 14, color: "var(--body)" }}>
                Gadjah Mada University &middot; 2021&mdash;2025
              </p>
              <p className="gpa">GPA 3.61 / 4.00</p>
            </div>
          </Reveal>
        </div>

        {/* SKILLS */}
        <div className="section-head" id="skills">
          <h2>Skills &amp; tools</h2>
          <span className="count">Indonesian (native) &middot; English (intermediate)</span>
        </div>
        <SkillsGrid />

        {/* PROJECTS */}
        <div className="section-head" id="work">
          <h2>Featured projects</h2>
          <Link className="section-link" href="/projects">
            View all projects &rarr;
          </Link>
        </div>
        <div className="grid3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* EXPERIENCE */}
        <Reveal className="card card--pad" style={{ marginTop: 18 }}>
          <span className="eyebrow">Where I&apos;ve worked</span>
          <ExperienceAccordion />
        </Reveal>

        {/* HONORS */}
        <div className="row">
          <Reveal
            className="card card--lift card--pad"
            style={{ flex: "1 1 360px", minWidth: 250, display: "flex", flexDirection: "column", gap: 18 }}
          >
            <span className="eyebrow">Honors</span>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#1B1D23" }}>
                PKM-K 37th funding recipient &mdash; Pusprenas
              </p>
              <p style={{ marginTop: 7, fontSize: 14, color: "var(--muted)" }}>
                Chief of Technology &amp; Executive Officer, 2024
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#1B1D23" }}>
                Finalist, PIMNAS 36th PKM-K
              </p>
              <p style={{ marginTop: 7, fontSize: 14, color: "var(--muted)" }}>
                Chief Technology Officer, 2023
              </p>
            </div>
          </Reveal>
          <Reveal
            className="card card--lift card--pad"
            style={{ flex: "1 1 360px", minWidth: 250, display: "flex", flexDirection: "column", gap: 18 }}
          >
            <span className="eyebrow">Certifications</span>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#1B1D23" }}>
                Junior Mobile Programmer &mdash; BNSP
              </p>
              <p style={{ marginTop: 7, fontSize: 14, color: "var(--muted)" }}>
                Digital Talent Scholarship, 2022
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#1B1D23" }}>
                Java Basic &mdash; HackerRank
              </p>
              <p style={{ marginTop: 7, fontSize: 14, color: "var(--muted)" }}>
                Flutter for Beginners &mdash; Dicoding, 2021
              </p>
            </div>
          </Reveal>
        </div>

        {/* BLOG */}
        <div className="section-head" id="blog">
          <h2>Featured blogs</h2>
          <Link className="section-link" href="/blogs">
            Read all articles &rarr;
          </Link>
        </div>
        <div className="grid3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CONTACT */}
        <Reveal className="contact" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s build something that ships.</h2>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:mrizqi070502@gmail.com">
              <span className="lbl">
                <span>&#9993;</span>Email
              </span>
              <span className="val">mrizqi070502@gmail.com</span>
            </a>
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/m-rizqi/"
              target="_blank"
              rel="noopener"
            >
              <span className="lbl">
                <span>in</span>LinkedIn
              </span>
              <span className="val">/in/m-rizqi</span>
            </a>
            <a
              className="contact-card"
              href="https://github.com/m-rizqi"
              target="_blank"
              rel="noopener"
            >
              <span className="lbl">
                <span>&lt;/&gt;</span>GitHub
              </span>
              <span className="val">/m-rizqi</span>
            </a>
            <a className="contact-card" href="tel:+62895377280328">
              <span className="lbl">
                <span>&#9742;</span>Phone
              </span>
              <span className="val">+62 895-3772-80328</span>
            </a>
          </div>
        </Reveal>

        <Footer />
      </main>
    </>
  );
}
