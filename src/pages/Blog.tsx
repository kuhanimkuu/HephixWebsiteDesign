import { useState } from "react";
import { Link } from "react-router";
import { Eyebrow, Section, Container } from "../components/ui";
import { useScrollReveal } from "../hooks/useScrollReveal";

const posts = [
  {
    slug: "why-we-build-ecosystems",
    title: "Why we build ecosystems, not apps",
    excerpt: "Most tech companies build products designed to plug into each other. We do the opposite. Here's why.",
    category: "Philosophy",
    date: "2026-08-10",
    featured: true,
  },
  {
    slug: "building-nexora-design-decisions",
    title: "Three design decisions that shaped Nexora",
    excerpt: "Community architecture, privacy by default, and Flash Communities — the decisions that define what Nexora is.",
    category: "Product",
    date: "2026-09-01",
    featured: false,
  },
  {
    slug: "nairobi-tech-ecosystem",
    title: "Building from Nairobi: what we've learned",
    excerpt: "A reflection on building a technology company in one of Africa's most dynamic tech cities.",
    category: "Company",
    date: "2026-09-08",
    featured: false,
  },
  {
    slug: "hephix-rebrand",
    title: "Starstreak is now Hephix",
    excerpt: "We changed our name. Here's the story behind the decision and what it means for where we're going.",
    category: "Company",
    date: "2026-09-14",
    featured: false,
  },
];

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

function HexCover({ title }: { title: string }) {
  return (
    <div style={{ width: "100%", aspectRatio: "16/9", background: "#0F1117", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <svg width="120" height="130" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ opacity: 0.15 }}>
        <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="#C85A18" />
      </svg>
      <span style={{ position: "absolute", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "3px", color: "#9E948E", textTransform: "uppercase" }}>Hephix</span>
    </div>
  );
}

function BlogCard({ post }: { post: typeof posts[0] }) {
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}>
        <HexCover title={post.title} />
        <div style={{ padding: "24px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C85A18", display: "block", marginBottom: "10px" }}>{post.category}</span>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--ink)", marginBottom: "10px", lineHeight: 1.3 }}>{post.title}</h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>{post.excerpt}</p>
          <p style={{ color: "var(--muted)", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>{new Date(post.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  useScrollReveal();
  const [cat, setCat] = useState("All");
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured && (cat === "All" || p.category === cat));

  return (
    <>
      <Section style={{ paddingTop: "160px", paddingBottom: "64px" }}>
        <Container>
          <Eyebrow>Blog</Eyebrow>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--ink)" }}>
            From Hephix.
          </h1>
        </Container>
      </Section>

      <Section style={{ paddingTop: "0" }}>
        <Container>
          {/* Featured */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "64px" }}>
              <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "4px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", transition: "border-color 0.2s" }}>
                <HexCover title={featured.title} />
                <div style={{ padding: "40px" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C85A18", display: "block", marginBottom: "12px" }}>Featured · {featured.category}</span>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 32px)", color: "var(--ink)", marginBottom: "16px", lineHeight: 1.2 }}>{featured.title}</h2>
                  <p style={{ color: "var(--muted)", fontSize: "17px", lineHeight: 1.6, marginBottom: "24px" }}>{featured.excerpt}</p>
                  <p style={{ color: "var(--muted)", fontSize: "13px" }}>{new Date(featured.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
              </div>
            </Link>
          )}

          {/* Filter chips */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px",
                  padding: "8px 16px", borderRadius: "4px", border: "1.5px solid",
                  borderColor: cat === c ? "var(--ink)" : "var(--line)",
                  background: cat === c ? "var(--ink)" : "transparent",
                  color: cat === c ? "var(--paper)" : "var(--muted)",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
