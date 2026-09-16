import { Link } from "react-router";
import { Eyebrow, Section, Container, StatusBadge } from "../components/ui";
import { HexBullet } from "../components/HexIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";

const products = [
  {
    name: "Nexora",
    tagline: "A complete social ecosystem",
    status: "in_development" as const,
    slug: "nexora",
    description: "Built from the ground up as a self-contained social world. Its own community architecture, content systems, and engagement mechanics.",
  },
];

function ProductHexCell({ product }: { product: typeof products[0] }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1.5px solid var(--line)",
          borderRadius: "4px",
          padding: "40px 32px",
          background: "var(--white)",
          transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
        }}
      >
        {/* Hex mark */}
        <svg width="56" height="61" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ marginBottom: "20px" }}>
          <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="var(--ink)" />
          <text x="24" y="28" textAnchor="middle" dominantBaseline="middle" fontFamily="'Syne'" fontWeight="800" fontSize="16" fill="#C85A18">N</text>
        </svg>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "24px", color: "var(--ink)", marginBottom: "8px" }}>{product.name}</h3>
        <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "16px" }}>{product.tagline}</p>
        <StatusBadge status={product.status} />
      </div>
    </Link>
  );
}

function EmptyHexCell({ label }: { label: string }) {
  return (
    <div
      style={{
        border: "1.5px dashed var(--line)",
        borderRadius: "4px",
        padding: "40px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <svg width="56" height="61" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ marginBottom: "20px" }}>
        <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      </svg>
      <p style={{ color: "var(--muted)", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>{label}</p>
      <StatusBadge status="coming_later" />
    </div>
  );
}

export default function Products() {
  useScrollReveal();

  return (
    <>
      <Section style={{ paddingTop: "160px", paddingBottom: "64px" }}>
        <Container>
          <Eyebrow>Our Ecosystems</Eyebrow>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--ink)", marginBottom: "20px" }}>
            Our ecosystems.
          </h1>
          <p style={{ fontSize: "21px", color: "var(--muted)", maxWidth: "540px" }}>Each one complete on its own.</p>
        </Container>
      </Section>

      <Section style={{ paddingTop: "0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", marginBottom: "96px" }}>
            {products.map((p) => (
              <ProductHexCell key={p.slug} product={p} />
            ))}
            <EmptyHexCell label="Next ecosystem" />
            <EmptyHexCell label="Coming later" />
          </div>
        </Container>
      </Section>

      {/* Nexora spotlight */}
      <Section dark>
        <Container>
          <Eyebrow dark>The First Ecosystem</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#F6F4F0" }}>Nexora</h2>
            <StatusBadge status="in_development" />
          </div>
          <p style={{ fontSize: "17px", color: "#9E948E", maxWidth: "660px", lineHeight: 1.7, marginBottom: "24px" }}>
            Nexora is not being built as a social media app. It is being built as a complete social ecosystem, with its own community architecture, content systems, and engagement mechanics designed to work as one coherent world. Built in Nairobi, for a global audience.
          </p>
          <p style={{ fontSize: "17px", color: "#9E948E", maxWidth: "660px", lineHeight: 1.7, marginBottom: "40px" }}>
            Every feature inside Nexora exists within a single coherent design language. Communities, messaging, posts, and media all share the same underlying philosophy: give users complete ownership of their space, with the privacy and security that ownership demands.
          </p>
          <Link
            to="/products/nexora"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px",
              background: "#F6F4F0", color: "#0F1117",
              padding: "14px 24px", borderRadius: "4px", textDecoration: "none",
            }}
          >
            Explore Nexora in detail
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </Container>
      </Section>
    </>
  );
}
