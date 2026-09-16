import { Link } from "react-router";
import { Section, Container } from "../components/ui";

export default function BlogPost() {
  return (
    <Section style={{ paddingTop: "160px", minHeight: "80vh" }}>
      <Container>
        <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--muted)", textDecoration: "none", fontSize: "14px", marginBottom: "32px", fontFamily: "'Inter', sans-serif" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          All posts
        </Link>
        <p style={{ color: "var(--muted)", fontFamily: "'Inter', sans-serif", marginTop: "16px" }}>Blog post — content will load from CMS.</p>
      </Container>
    </Section>
  );
}
