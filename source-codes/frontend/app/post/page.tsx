import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostDetail from "@/components/PostDetail";

export const metadata: Metadata = {
  title: "Article — Muhammad Rizqi",
};

export default function PostDetailPage() {
  return (
    <>
      <Nav active="blogs" />
      <main className="wrap page stack">
        <Link href="/blogs" style={{ fontSize: 13, color: "var(--muted)" }}>
          &larr; All articles
        </Link>
        <PostDetail />
        <Footer backHref="/blogs" backLabel="All articles" />
      </main>
    </>
  );
}
