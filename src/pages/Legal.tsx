import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { Section, Container } from "../components/ui";

const documents: Record<string, { title: string; version: string; updated: string; sections: { id: string; heading: string; content: string }[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    version: "1.0",
    updated: "2026-09-16",
    sections: [
      { id: "introduction", heading: "1. Introduction", content: "Hephix Ltd ('Hephix', 'we', 'us', or 'our') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services." },
      { id: "information-collected", heading: "2. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, join our waitlist, or contact us. This may include your name, email address, and any other information you choose to provide." },
      { id: "use-of-information", heading: "3. How We Use Your Information", content: "We use the information we collect to operate, maintain, and improve our services; respond to your inquiries; send you technical notices and updates; and comply with legal obligations." },
      { id: "sharing", heading: "4. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our services, subject to confidentiality agreements." },
      { id: "data-retention", heading: "5. Data Retention", content: "We retain your information for as long as necessary to provide the services you request and to comply with our legal obligations." },
      { id: "security", heading: "6. Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction." },
      { id: "your-rights", heading: "7. Your Rights", content: "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information. Please contact us at privacy@hephix.org to exercise these rights." },
      { id: "cookies", heading: "8. Cookies", content: "We use cookies and similar tracking technologies to enhance your experience. Please see our Cookie Policy for more information." },
      { id: "changes", heading: "9. Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last updated' date." },
      { id: "contact", heading: "10. Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at privacy@hephix.org." },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    version: "1.0",
    updated: "2026-09-16",
    sections: [
      { id: "acceptance", heading: "1. Acceptance of Terms", content: "By accessing or using any Hephix service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
      { id: "services", heading: "2. Description of Services", content: "Hephix provides technology products and services, including Nexora. Our services are provided 'as is' and may be subject to change without notice." },
      { id: "user-accounts", heading: "3. User Accounts", content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account." },
      { id: "acceptable-use", heading: "4. Acceptable Use", content: "You agree not to misuse our services, violate applicable laws, infringe upon intellectual property rights, or engage in any conduct that harms other users." },
      { id: "ip", heading: "5. Intellectual Property", content: "All content and materials available through our services are the property of Hephix Ltd or its licensors and are protected by applicable intellectual property laws." },
      { id: "termination", heading: "6. Termination", content: "We reserve the right to suspend or terminate your access to our services at any time, for any reason, without notice." },
      { id: "liability", heading: "7. Limitation of Liability", content: "To the maximum extent permitted by law, Hephix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services." },
      { id: "governing-law", heading: "8. Governing Law", content: "These Terms of Service shall be governed by and construed in accordance with the laws of Kenya." },
      { id: "changes", heading: "9. Changes to Terms", content: "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms." },
      { id: "contact", heading: "10. Contact", content: "For questions about these terms, contact us at legal@hephix.org." },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    version: "1.0",
    updated: "2026-09-16",
    sections: [
      { id: "what-are-cookies", heading: "1. What Are Cookies", content: "Cookies are small text files stored on your device when you visit a website. They help websites function correctly and provide information to the website operator." },
      { id: "how-we-use", heading: "2. How We Use Cookies", content: "We use cookies to keep you signed in, understand how you use our services, and improve your experience." },
      { id: "types", heading: "3. Types of Cookies We Use", content: "Essential cookies: required for the site to function. Analytics cookies: help us understand usage patterns. Preference cookies: remember your settings and preferences." },
      { id: "control", heading: "4. Managing Cookies", content: "You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our services." },
      { id: "contact", heading: "5. Contact", content: "For questions about our cookie practices, contact us at privacy@hephix.org." },
    ],
  },
};

export default function Legal() {
  const { slug } = useParams<{ slug: string }>();
  const doc = documents[slug || "privacy-policy"];
  const [activeSection, setActiveSection] = useState(doc?.sections[0]?.id || "");
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    doc?.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [doc]);

  if (!doc) return (
    <Section style={{ paddingTop: "160px" }}>
      <Container><p>Document not found.</p></Container>
    </Section>
  );

  return (
    <Section style={{ paddingTop: "120px" }}>
      <Container>
        {/* Header */}
        <div style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid var(--line)" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", color: "var(--ink)", marginBottom: "16px" }}>{doc.title}</h1>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ color: "var(--muted)", fontSize: "14px" }}>Version {doc.version}</span>
            <span style={{ color: "var(--muted)", fontSize: "14px" }}>Last updated: {new Date(doc.updated).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</span>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "var(--ember)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="md:hidden" style={{ marginBottom: "32px" }}>
          <button onClick={() => setTocOpen((v) => !v)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "var(--white)", border: "1px solid var(--line)", borderRadius: "4px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "var(--ink)" }}>
            Contents
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transform: tocOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {tocOpen && (
            <div style={{ border: "1px solid var(--line)", borderTop: "none", borderRadius: "0 0 4px 4px", background: "var(--white)", padding: "8px 0" }}>
              {doc.sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={() => setTocOpen(false)} style={{ display: "block", padding: "10px 16px", fontSize: "14px", color: activeSection === s.id ? "#C85A18" : "var(--muted)", textDecoration: "none" }}>{s.heading}</a>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "64px" }} className="hidden md:grid">
          {/* TOC */}
          <aside style={{ position: "sticky", top: "88px", alignSelf: "start", maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "16px" }}>Contents</p>
            {doc.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  display: "block",
                  fontSize: "14px",
                  padding: "7px 0 7px 12px",
                  color: activeSection === s.id ? "#C85A18" : "var(--muted)",
                  textDecoration: "none",
                  borderLeft: `2px solid ${activeSection === s.id ? "#C85A18" : "var(--line)"}`,
                  transition: "color 0.2s, border-color 0.2s",
                  fontWeight: activeSection === s.id ? 600 : 400,
                }}
              >
                {s.heading}
              </a>
            ))}
          </aside>

          {/* Content */}
          <div style={{ maxWidth: "760px" }}>
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--ink)", marginBottom: "16px" }}>
                  <span style={{ color: "#C85A18", marginRight: "8px" }}>{s.heading.split(".")[0]}.</span>
                  {s.heading.split(". ").slice(1).join(". ")}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7 }}>{s.content}</p>
              </section>
            ))}
          </div>
        </div>

        {/* Mobile content */}
        <div className="md:hidden">
          {doc.sections.map((s) => (
            <section key={s.id} id={s.id} style={{ marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", color: "var(--ink)", marginBottom: "14px" }}>
                <span style={{ color: "#C85A18", marginRight: "8px" }}>{s.heading.split(".")[0]}.</span>
                {s.heading.split(". ").slice(1).join(". ")}
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7 }}>{s.content}</p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
