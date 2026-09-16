import { useState } from "react";
import { Link } from "react-router";
import { Eyebrow, Section, Container, StatusBadge, Field, Btn } from "../components/ui";
import { HexBullet } from "../components/HexIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    title: "Flash Communities",
    desc: "Time-limited communities for events, campaigns, and moments. A concert, a product launch, a crisis response. Flash Communities give people a space for a moment in time, with the option to make it permanent when the moment warrants it.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Communities for every scale",
    desc: "Public communities for open conversation. Private communities for closed groups. Local communities for neighborhoods. Regional communities for shared context. Official spaces for organizations and institutions.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "End-to-end encrypted messages",
    desc: "Private conversations only the people in them can read. No exceptions, no backdoors. Encrypted by default, not as an optional feature.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Posts, polls, and media",
    desc: "The full range of communication: text, images, video, audio, documents, and links. Polls for community decisions. Everything in one coherent content system.",
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
];

export default function NexoraDetail() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--ink)", paddingTop: "160px", paddingBottom: "96px" }}>
        <Container>
          <Link to="/products" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#9E948E", textDecoration: "none", fontSize: "14px", marginBottom: "32px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            All products
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px", flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px, 8vw, 80px)", lineHeight: 1.0, letterSpacing: "-2px", color: "#F6F4F0" }}>Nexora</h1>
            <StatusBadge status="in_development" />
          </div>
          <p style={{ fontSize: "21px", color: "#9E948E", maxWidth: "600px", lineHeight: 1.6 }}>
            A complete social ecosystem. Built in Nairobi, for the world.
          </p>
        </Container>
      </section>

      {/* Feature sections */}
      {features.map((feature, i) => (
        <Section key={feature.title} dark={i % 2 !== 0} style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
              {i % 2 === 0 ? (
                <>
                  <div>
                    <Eyebrow dark={i % 2 !== 0}>Feature</Eyebrow>
                    <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.15, color: i % 2 !== 0 ? "#F6F4F0" : "var(--ink)", marginBottom: "20px" }}>{feature.title}</h2>
                    <p style={{ color: i % 2 !== 0 ? "#9E948E" : "var(--muted)", lineHeight: 1.7, fontSize: "17px" }}>{feature.desc}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "200px", height: "200px", background: i % 2 !== 0 ? "#1A1D25" : "var(--white)", borderRadius: "4px", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C85A18" strokeWidth="1.5">
                        <path d={feature.icon} />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "200px", height: "200px", background: "#1A1D25", borderRadius: "4px", border: "1px solid #2A2D35", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C85A18" strokeWidth="1.5">
                        <path d={feature.icon} />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <Eyebrow dark>Feature</Eyebrow>
                    <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.15, color: "#F6F4F0", marginBottom: "20px" }}>{feature.title}</h2>
                    <p style={{ color: "#9E948E", lineHeight: 1.7, fontSize: "17px" }}>{feature.desc}</p>
                  </div>
                </>
              )}
            </div>
          </Container>
        </Section>
      ))}

      {/* Safety & privacy */}
      <Section>
        <Container>
          <Eyebrow>Safety & Privacy</Eyebrow>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)", marginBottom: "40px" }}>
            Built with protection at the core.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { title: "End-to-end encryption", desc: "Private messages are encrypted by default. Only you and who you're talking with can read them." },
              { title: "No sale of personal data", desc: "Your data is not a product. We do not sell, rent, or trade personal information." },
              { title: "Community guidelines", desc: "Clear, enforceable standards for behavior in every community space." },
              { title: "In-app reporting", desc: "Fast, accessible tools to report content and behavior that violates our guidelines." },
            ].map((item, i) => (
              <div key={item.title} className="reveal" data-delay={String(i * 60)} style={{ padding: "28px", background: "var(--white)", border: "1px solid var(--line)", borderRadius: "4px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C85A18" strokeWidth="1.5" style={{ marginBottom: "12px" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "17px", marginBottom: "8px", color: "var(--ink)" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Waitlist */}
      <Section dark>
        <Container>
          <div style={{ maxWidth: "480px" }}>
            <Eyebrow dark>Status</Eyebrow>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 36px)", color: "#F6F4F0", marginBottom: "16px" }}>
              Nexora is in active development.
            </h2>
            <p style={{ color: "#9E948E", marginBottom: "40px", lineHeight: 1.6 }}>
              We're building something complete. Join the waitlist to be among the first to access Nexora when it's ready.
            </p>
            {submitted ? (
              <div style={{ padding: "24px", background: "#1A1D25", borderRadius: "4px", borderLeft: "3px solid #C85A18" }}>
                <p style={{ color: "#F6F4F0", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>You're on the list.</p>
                <p style={{ color: "#9E948E", fontSize: "14px", marginTop: "4px" }}>We'll reach out when Nexora is ready for you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Field label="Name" name="name" placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })} />
                <Field label="Email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })} />
                <Btn type="submit" variant="primary-inverted">Join the waitlist</Btn>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
