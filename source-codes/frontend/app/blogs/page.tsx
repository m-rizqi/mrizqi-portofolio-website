import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogExplorer from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Blogs — Muhammad Rizqi",
};

export default function BlogPage() {
  return (
    <>
      <Nav active="blogs" />
      <main className="wrap page stack">
        <BlogExplorer />
        <Footer backHref="/" backLabel="Back to home" />
      </main>
    </>
  );
}
