import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogExplorer from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Blog — Muhammad Rizqi",
};

export default function BlogPage() {
  return (
    <>
      <Nav wrapClass="wrap--md" active="blog" />
      <main className="wrap wrap--md page stack">
        <BlogExplorer />
        <Footer backHref="/" backLabel="Back to home" />
      </main>
    </>
  );
}
