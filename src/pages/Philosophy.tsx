import { Link } from "react-router";
import { Eyebrow, Section, Container } from "../components/ui";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Philosophy() {
  useScrollReveal();

  const ecosystemPoints = [
    { icon: "M12 2L2 7l10 5 10-5-10-5z", title: "Its own architecture", desc: "Built from the ground up for its specific domain, not adapted from a shared foundation." },
    { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", title: "Its own community", desc: "Designed for the specific people it serves, with the right community structures for them." },
    { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", title: "Its own engagement mechanics", desc: "Interaction models native to the product's world, not borrowed from existing platforms." },
    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Its own reason to exist", desc: "A product that is complete and meaningful on its own, without needing anything else to make sense." },
  ];

  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "160px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
            <div>
              <Eyebrow>Our Philosophy</Eyebrow>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--ink)", marginBottom: "24px" }}>
                Every product,<br />its own ecosystem.
              </h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg width="200" height="220" viewBox="0 0 48 52" fill="none" aria-hidden="true">
                <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="#0F1117" />
                <text x="24" y="28" textAnchor="middle" dominantBaseline="middle" fontFamily="'Syne'" fontWeight="800" fontSize="16" fill="#C85A18">H</text>
              </svg>
            </div>
          </div>
        </Container>
      </Section>

      {/* The idea */}
      <Section>
        <Container>
          <div style={{ maxWidth: "720px" }}>
            <Eyebrow>The Idea</Eyebrow>
            <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.2, color: "var(--ink)", marginBottom: "24px" }}>
              Not integration. Independence.
            </h2>
            <p className="reveal" style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "24px" }}>
              Unlike companies that build products designed to complement one another, Hephix operates on the principle that each product, regardless of the industry it serves, is conceived, designed, and built as its own living ecosystem from the ground up.
            </p>
            <p className="reveal" style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)" }}>
              This is a deliberate choice. The world does not need more tools that only make sense together. It needs complete worlds: products so well-conceived that they stand entirely on their own.
            </p>
          </div>
        </Container>
      </Section>

      {/* What an ecosystem means */}
      <Section dark>
        <Container>
          <Eyebrow dark>What an ecosystem means to us</Eyebrow>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#F6F4F0", marginBottom: "48px" }}>
            Four non-negotiables.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {ecosystemPoints.map((pt, i) => (
              <div key={pt.title} className="reveal" data-delay={String(i * 60)} style={{ background: "#1A1D25", borderRadius: "4px", padding: "32px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C85A18" strokeWidth="1.5" style={{ marginBottom: "16px" }}>
                  <path d={pt.icon} />
                </svg>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "#F6F4F0", marginBottom: "10px" }}>{pt.title}</h3>
                <p style={{ color: "#9E948E", fontSize: "15px", lineHeight: 1.6 }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What it is not */}
      <Section>
        <Container>
          <Eyebrow>What it is not</Eyebrow>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "48px" }}>A comparison.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--line)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ background: "var(--white)", padding: "40px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "24px" }}>Utility thinking</p>
              {["Single features", "Products that only make sense together", "Breadth first", "Ship fast, integrate later", "Platform lock-in"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E948E" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span style={{ color: "var(--muted)", fontSize: "15px" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--ink)", padding: "40px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9E948E", marginBottom: "24px" }}>Ecosystem thinking</p>
              {["Complete worlds", "Products that stand alone", "Depth first", "Build the whole thing properly", "Independence by design"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C85A18" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ color: "#F6F4F0", fontSize: "15px" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pull quote */}
      <Section dark>
        <Container>
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <blockquote style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 52px)", color: "#F6F4F0", lineHeight: 1.15, maxWidth: "800px", margin: "0 auto 24px" }}>
              "Depth over breadth.<br />Ecosystems over utilities."
            </blockquote>
            <p style={{ color: "#9E948E", fontSize: "14px", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>— The Hephix founding principle</p>
          </div>
        </Container>
      </Section>

      {/* Nexora link */}
      <Section>
        <Container>
          <Eyebrow>Nexora, the first expression</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "16px" }}>
                The philosophy made real.
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "17px", lineHeight: 1.6, maxWidth: "520px" }}>
                Nexora is the first Hephix product. A complete social ecosystem built in Nairobi, currently in active development.
              </p>
            </div>
            <Link
              to="/products/nexora"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px",
                background: "var(--ink)", color: "var(--paper)",
                padding: "14px 24px", borderRadius: "4px", textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Explore Nexora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
