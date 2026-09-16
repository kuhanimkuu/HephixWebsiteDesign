import { useState } from "react";
import { Link } from "react-router";
import { Eyebrow, Section, Container } from "../components/ui";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = [
  { title: "Android Engineer", department: "Engineering", location: "Nairobi / Remote", type: "Full-time", id: "eng-001" },
  { title: "Product Designer", department: "Design", location: "Nairobi / Remote", type: "Full-time", id: "des-001" },
  { title: "Backend Engineer (Node.js)", department: "Engineering", location: "Remote", type: "Full-time", id: "eng-002" },
];

const departments = ["All", ...Array.from(new Set(roles.map((r) => r.department)))];

function EmptyState() {
  return (
    <div style={{ textAlign: "center", padding: "80px 0" }}>
      <svg width="80" height="87" viewBox="0 0 48 52" fill="none" aria-hidden="true" style={{ margin: "0 auto 24px" }}>
        <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      </svg>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", color: "var(--ink)", marginBottom: "12px" }}>No open roles right now.</h3>
      <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "20px" }}>But we'd still like to hear from you.</p>
      <a href="mailto:careers@hephix.org" style={{ color: "var(--ink)", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
        Send us your CV anyway →
      </a>
    </div>
  );
}

export default function Careers() {
  useScrollReveal();
  const [dept, setDept] = useState("All");
  const filtered = dept === "All" ? roles : roles.filter((r) => r.department === dept);

  return (
    <>
      <Section style={{ paddingTop: "160px", paddingBottom: "64px" }}>
        <Container>
          <Eyebrow>Careers</Eyebrow>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--ink)", marginBottom: "24px" }}>
            Help build the next<br />ecosystem.
          </h1>
        </Container>
      </Section>

      {/* Why Hephix */}
      <Section dark style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { title: "Real ownership", desc: "You'll own meaningful parts of products that are built to last, not features that disappear in a pivot." },
              { title: "Early-stage impact", desc: "Join while we're building the foundation. Your decisions will shape how Hephix grows." },
              { title: "Nairobi-based, remote-friendly", desc: "Rooted in Kenya, open to the world. We hire for talent, not location." },
            ].map((c, i) => (
              <div key={c.title} className="reveal" data-delay={String(i * 60)} style={{ background: "#1A1D25", borderRadius: "4px", padding: "32px" }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "#F6F4F0", marginBottom: "12px" }}>{c.title}</h3>
                <p style={{ color: "#9E948E", fontSize: "15px", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roles */}
      <Section>
        <Container>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 32px)", color: "var(--ink)", marginBottom: "24px" }}>Open roles</h2>

          {/* Filters */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "1.5px solid",
                  borderColor: dept === d ? "var(--ink)" : "var(--line)",
                  background: dept === d ? "var(--ink)" : "transparent",
                  color: dept === d ? "var(--paper)" : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {d}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div style={{ borderTop: "1px solid var(--line)" }}>
              {filtered.map((role) => (
                <Link
                  key={role.id}
                  to={`/careers/${role.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    borderBottom: "1px solid var(--line)",
                    textDecoration: "none",
                    color: "var(--ink)",
                    gap: "16px",
                    flexWrap: "wrap",
                    transition: "background 0.2s",
                  }}
                >
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", marginBottom: "6px" }}>{role.title}</h3>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      {[role.department, role.location, role.type].map((tag) => (
                        <span key={tag} style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "var(--muted)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
