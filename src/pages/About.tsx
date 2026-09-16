import { Link } from "react-router";
import { Eyebrow, Section, Container } from "../components/ui";
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  { title: "Depth", desc: "Build the whole thing, properly.", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
  { title: "Ownership", desc: "Long-term commitment to what we build.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { title: "Privacy & Trust", desc: "Protection at the core.", icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
  { title: "User-First", desc: "Real people, real cultural context.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { title: "Excellence", desc: "Global standards.", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
  { title: "Honesty", desc: "Clear about where we are.", icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
];

const milestones = [
  { label: "Company founded", date: "[Year placeholder]" },
  { label: "Nexora development begins", date: "[Year placeholder]" },
  { label: "Starstreak becomes Hephix", date: "2026" },
  { label: "Next: Nexora launch", date: "Coming soon" },
];

const team = [
  { name: "Founder", role: "Lead Founder & CEO", bio: "Placeholder — update in CMS.", initial: "F" },
  { name: "Co-Founder A", role: "Co-Founder", bio: "Placeholder — update in CMS.", initial: "A" },
  { name: "Co-Founder B", role: "Co-Founder", bio: "Placeholder — update in CMS.", initial: "B" },
  { name: "Co-Founder C", role: "Co-Founder", bio: "Placeholder — update in CMS.", initial: "C" },
  { name: "Co-Founder D", role: "Co-Founder", bio: "Placeholder — update in CMS.", initial: "D" },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      <Section style={{ paddingTop: "160px" }}>
        <Container>
          <Eyebrow>About Hephix</Eyebrow>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--ink)", marginBottom: "48px", maxWidth: "800px" }}>
            A Nairobi company<br />building complete worlds.
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--ink)", marginBottom: "16px" }}>Our story</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "17px" }}>
                Hephix is a technology holding company founded in Nairobi, Kenya. It began with a single idea: that a product should be a whole ecosystem, not a feature. That idea became Nexora, our first product, which is now in active development.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--ink)", marginBottom: "16px" }}>Vision</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "17px" }}>
                A future where technology built in Africa leads on design, depth, and impact, and where every product we make is a world people choose to live in.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--ink)", marginBottom: "16px" }}>Mission</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "17px" }}>
                To conceive, design, and build self-contained digital ecosystems across industries, starting with Nexora.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section dark>
        <Container>
          <Eyebrow dark>Our Values</Eyebrow>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#F6F4F0", marginBottom: "48px" }}>What we hold.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {values.map((v, i) => (
              <div key={v.title} className="reveal" data-delay={String(i * 60)} style={{ background: "#1A1D25", borderRadius: "4px", padding: "28px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C85A18" strokeWidth="1.5" style={{ marginBottom: "14px" }}>
                  <path d={v.icon} />
                </svg>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "#F6F4F0", marginBottom: "8px" }}>{v.title}</h3>
                <p style={{ color: "#9E948E", fontSize: "14px" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Milestones */}
      <Section>
        <Container>
          <Eyebrow>Where We Are</Eyebrow>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "48px" }}>Our journey.</h2>
          <div style={{ maxWidth: "560px", position: "relative" }}>
            {milestones.map((m, i) => (
              <div key={m.label} className="reveal" data-delay={String(i * 60)} style={{ display: "flex", gap: "24px", marginBottom: "36px", alignItems: "flex-start" }}>
                <svg width="24" height="27" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill={i === milestones.length - 1 ? "none" : "var(--ink)"} stroke={i === milestones.length - 1 ? "var(--muted)" : "none"} strokeWidth="1.5" />
                </svg>
                <div>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "17px", color: "var(--ink)", marginBottom: "4px" }}>{m.label}</p>
                  <p style={{ color: "var(--muted)", fontSize: "14px" }}>{m.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section id="team" dark>
        <Container>
          <Eyebrow dark>Founders</Eyebrow>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#F6F4F0", marginBottom: "48px" }}>The people building it.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
            {team.map((member, i) => (
              <div key={member.name} className="reveal" data-delay={String(i * 60)} style={{ background: "#1A1D25", borderRadius: "4px", padding: "28px", textAlign: "center" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "var(--ink)", border: "2px solid #2A2D35", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "24px", color: "#C85A18" }}>{member.initial}</span>
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "17px", color: "#F6F4F0", marginBottom: "4px" }}>{member.name}</h3>
                <p style={{ color: "#C85A18", fontSize: "12px", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>{member.role}</p>
                <p style={{ color: "#9E948E", fontSize: "13px", lineHeight: 1.5 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA to Careers */}
      <Section>
        <Container style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "20px" }}>
            Join the team.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "17px", marginBottom: "32px" }}>We're building something big. Come be part of it.</p>
          <Link to="/careers" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", background: "var(--ink)", color: "var(--paper)", padding: "14px 24px", borderRadius: "4px", textDecoration: "none" }}>
            View open roles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </Container>
      </Section>
    </>
  );
}
