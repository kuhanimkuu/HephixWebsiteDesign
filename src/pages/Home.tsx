import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { Eyebrow, Section, Container, Btn, StatusBadge } from "../components/ui";
import { HexBullet } from "../components/HexIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";

function HeroHexComposition() {
  const drawn = useRef(false);
  const outlineRef = useRef<SVGPolygonElement>(null);
  const fillRef = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (drawn.current) return;
    drawn.current = true;
    const outline = outlineRef.current;
    const fill = fillRef.current;
    if (!outline || !fill) return;

    const length = outline.getTotalLength ? outline.getTotalLength() : 400;
    outline.style.strokeDasharray = String(length);
    outline.style.strokeDashoffset = String(length);
    outline.style.transition = "stroke-dashoffset 0.8s ease-out";
    fill.style.opacity = "0";
    fill.style.transition = "opacity 0.4s ease-out 0.8s";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        outline.style.strokeDashoffset = "0";
        setTimeout(() => {
          if (fill) fill.style.opacity = "1";
        }, 800);
      });
    });
  }, []);

  return (
    <svg viewBox="0 0 440 460" fill="none" aria-hidden="true" style={{ width: "100%", maxWidth: "480px" }}>
      {/* Outlined future hexagons */}
      <polygon points="60,20 96,41 96,83 60,104 24,83 24,41" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />
      <polygon points="370,60 406,81 406,123 370,144 334,123 334,81" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />
      <polygon points="30,280 58,296 58,328 30,344 2,328 2,296" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />
      <polygon points="400,340 428,356 428,388 400,404 372,388 372,356" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />
      <polygon points="380,180 408,196 408,228 380,244 352,228 352,196" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />
      <polygon points="80,360 116,381 116,423 80,444 44,423 44,381" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />

      {/* Main filled hexagon (Nexora) */}
      <polygon
        ref={outlineRef}
        points="220,80 310,132 310,236 220,288 130,236 130,132"
        fill="none"
        stroke="#0F1117"
        strokeWidth="2"
      />
      <polygon
        ref={fillRef}
        points="220,80 310,132 310,236 220,288 130,236 130,132"
        fill="#0F1117"
        style={{ opacity: 0 }}
      />
      {/* Subtle N mark inside */}
      <text x="220" y="196" textAnchor="middle" dominantBaseline="middle" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="64" fill="#C85A18" style={{ opacity: 0.15 }}>N</text>
    </svg>
  );
}

function PhilosophyStrip() {
  const principles = [
    {
      title: "Self-contained",
      desc: "Each product stands on its own. Its own architecture, its own community, its own world. Nothing depends on anything else to make sense.",
    },
    {
      title: "Industry-agnostic",
      desc: "The industries will differ. The markets will differ. The principle stays the same: build the whole ecosystem, not a single feature.",
    },
    {
      title: "Built for depth",
      desc: "We would rather build one complete world well than ten tools that barely hold together.",
    },
  ];

  return (
    <Section dark>
      <Container>
        <Eyebrow dark>Our Philosophy</Eyebrow>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 48px)", color: "#F6F4F0", lineHeight: 1.15, marginBottom: "48px", maxWidth: "640px" }}>
          Depth over breadth.<br />Ecosystems over utilities.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px", marginBottom: "40px" }}>
          {principles.map((p) => (
            <div key={p.title} className="reveal" style={{ padding: "32px", background: "#1A1D25", borderRadius: "4px" }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", color: "#F6F4F0", marginBottom: "12px" }}>{p.title}</h3>
              <p style={{ color: "#9E948E", lineHeight: 1.6, fontSize: "15px" }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/philosophy" style={{ color: "#F6F4F0", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          Read the full philosophy
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </Container>
    </Section>
  );
}

function NexoraSection() {
  const features = [
    { title: "Flash Communities", desc: "Time-limited communities for events, campaigns, and moments, which can grow into permanent communities." },
    { title: "Communities for every scale", desc: "Public, private, local, regional, and official spaces." },
    { title: "End-to-end encrypted messages", desc: "Private conversations only the people in them can read." },
    { title: "Posts, polls, and media", desc: "Text, images, video, audio, documents, and links." },
    { title: "Built for Africa and beyond", desc: "Designed in Nairobi for a global audience." },
  ];

  return (
    <Section>
      <Container>
        <Eyebrow>The First Ecosystem</Eyebrow>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.15, color: "var(--ink)" }}>Nexora</h2>
          <StatusBadge status="in_development" />
        </div>
        <p style={{ fontSize: "21px", lineHeight: 1.6, maxWidth: "660px", marginBottom: "48px", color: "var(--ink)" }}>
          Nexora is not being built as a social media app. It is being built as a complete social ecosystem, with its own community architecture, content systems, and engagement mechanics designed to work as one coherent world.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
          {/* Phone mockups */}
          <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
            {[0, 1].map((i) => (
              <div
                key={i}
                className="reveal"
                data-delay={String(i * 120)}
                style={{
                  width: i === 0 ? "160px" : "140px",
                  height: i === 0 ? "320px" : "280px",
                  background: i === 0 ? "#0F1117" : "#1A1D25",
                  borderRadius: "20px",
                  border: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: i === 1 ? "40px" : "0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <svg width="80" height="80" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ opacity: 0.15 }}>
                  <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="#C85A18" />
                </svg>
                <span style={{ position: "absolute", bottom: "16px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "2px", color: "#9E948E" }}>NEXORA</span>
              </div>
            ))}
          </div>
          {/* Features */}
          <div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {features.map((f) => (
                <li key={f.title} className="reveal" style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                  <HexBullet />
                  <div>
                    <strong style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "var(--ink)" }}>{f.title}</strong>
                    <span style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>: {f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
              <Link to="/products/nexora">
                <Btn variant="primary">Explore Nexora</Btn>
              </Link>
              <Link to="/contact?type=nexora" style={{ color: "var(--ink)", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", padding: "12px 0" }}>
                Join the waitlist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function HowWeBuild() {
  const principles = [
    { title: "Privacy by design", desc: "We do not sell personal data. Protection is part of the architecture, not an afterthought." },
    { title: "Rooted in Nairobi", desc: "Built with local insight, held to global standards." },
    { title: "Long-term ownership", desc: "We build to own and grow our products for years, not to flip them." },
    { title: "Honest progress", desc: "We share where we actually are. Right now, that is building Nexora." },
  ];

  return (
    <Section texture>
      <Container>
        <Eyebrow>How We Build</Eyebrow>
        <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, marginBottom: "48px", maxWidth: "560px", color: "var(--ink)" }}>
          Principles behind every Hephix ecosystem
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              data-delay={String(i * 60)}
              style={{ background: "var(--white)", borderRadius: "4px", padding: "32px", border: "1px solid var(--line)", transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s" }}
            >
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", marginBottom: "12px", color: "var(--ink)" }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6, fontSize: "15px" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FutureEcosystems() {
  return (
    <Section dark>
      <Container>
        <div style={{ textAlign: "center" }}>
          {/* Outlined hexagons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "48px", flexWrap: "wrap" }}>
            {[0, 1, 2].map((i) => (
              <svg key={i} width="80" height="87" viewBox="0 0 48 52" fill="none" aria-hidden="true">
                <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="none" stroke="#2A2D35" strokeWidth="1.5" />
                {i === 0 && (
                  <text x="24" y="28" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#9E948E" fontFamily="'Inter', sans-serif">+</text>
                )}
              </svg>
            ))}
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#F6F4F0", marginBottom: "20px" }}>
            More ecosystems are coming.
          </h2>
          <p style={{ color: "#9E948E", maxWidth: "500px", margin: "0 auto 40px", fontSize: "17px", lineHeight: 1.6 }}>
            Nexora is the first. Future Hephix products will serve different industries, and each one will be its own world.
          </p>
          <Link to="/careers">
            <Btn variant="primary-inverted">Work with us</Btn>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function ClosingCTA() {
  const cards = [
    { title: "Careers", sub: "Join the team", to: "/careers", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
    { title: "Partnerships", sub: "Work with Hephix", to: "/contact?type=Partnerships", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 0 1 4 4M23 21v-2c0-1.35-.68-2.54-1.72-3.25" },
    { title: "Investors", sub: "Talk to the founders", to: "/contact?type=Investors", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  ];

  return (
    <Section>
      <Container>
        <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "48px", textAlign: "center" }}>
          Build the next ecosystem with us.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {cards.map((card, i) => (
            <Link
              key={card.title}
              to={card.to}
              className="reveal"
              data-delay={String(i * 60)}
              style={{
                display: "block",
                padding: "32px",
                border: "1.5px solid var(--line)",
                borderRadius: "4px",
                textDecoration: "none",
                color: "var(--ink)",
                background: "var(--white)",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="1.5" style={{ marginBottom: "16px" }}>
                <path d={card.icon} />
              </svg>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", marginBottom: "8px" }}>{card.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "15px" }}>{card.sub}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <Section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px", alignItems: "center" }}>
            <div>
              <Eyebrow>Hephix Ltd · Nairobi, Kenya</Eyebrow>
              <h1
                className="reveal"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(44px, 7vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                  color: "var(--ink)",
                  marginBottom: "24px",
                }}
              >
                We don't build apps.<br />
                We build{" "}
                <span style={{ color: "var(--ember)" }}>ecosystems.</span>
              </h1>
              <p className="reveal" style={{ fontSize: "clamp(18px, 2.5vw, 21px)", lineHeight: 1.6, color: "var(--muted)", maxWidth: "560px", marginBottom: "40px" }}>
                Hephix is a technology holding company. Every product we create is a complete, self-contained world, built from the ground up for its own industry and its own people.
              </p>
              <div className="reveal" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link to="/products/nexora"><Btn variant="primary">Discover Nexora</Btn></Link>
                <Link to="/philosophy"><Btn variant="secondary">Our philosophy</Btn></Link>
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
              <HeroHexComposition />
            </div>
          </div>
        </Container>
      </Section>

      <PhilosophyStrip />
      <NexoraSection />
      <HowWeBuild />
      <FutureEcosystems />
      <ClosingCTA />
    </>
  );
}
