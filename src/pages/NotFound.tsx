import { Link } from "react-router";
import { Section, Container } from "../components/ui";

export default function NotFound() {
  return (
    <Section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container style={{ textAlign: "center" }}>
        <svg width="120" height="130" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ margin: "0 auto 32px" }}>
          {/* Hexagon with gap */}
          <path d="M24,4 L44,15.1 L44,37.3 L24,48.4 L4,37.3 L4,15.1" fill="none" stroke="var(--line)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 4" />
        </svg>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C85A18", marginBottom: "16px" }}>404</p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "16px", lineHeight: 1.15 }}>
          This page isn't part<br />of any ecosystem.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "17px", marginBottom: "40px" }}>The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px",
            background: "var(--ink)", color: "var(--paper)",
            padding: "14px 24px", borderRadius: "4px", textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </Container>
    </Section>
  );
}
