import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "64px 0 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Top: logo + tagline */}
        <div style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid rgba(226,221,214,0.12)" }}>
          <Logo variant="reversed" className="h-10 w-auto" style={{ maxWidth: "260px" }} />
          <p style={{ marginTop: "16px", fontFamily: "'Inter', sans-serif", fontStyle: "italic", color: "#9E948E", fontSize: "15px" }}>
            Every product, its own ecosystem.
          </p>
        </div>

        {/* Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9E948E", marginBottom: "16px" }}>Company</p>
            {[{ to: "/about", label: "About" }, { to: "/philosophy", label: "Philosophy" }, { to: "/about#team", label: "Team" }, { to: "/careers", label: "Careers" }, { to: "/blog", label: "Blog" }].map((l) => (
              <Link key={l.to} to={l.to} style={{ display: "block", color: "#F6F4F0", textDecoration: "none", fontSize: "15px", marginBottom: "10px", opacity: 0.8, transition: "opacity 0.2s" }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9E948E", marginBottom: "16px" }}>Products</p>
            <Link to="/products/nexora" style={{ display: "block", color: "#F6F4F0", textDecoration: "none", fontSize: "15px", marginBottom: "10px", opacity: 0.8 }}>Nexora</Link>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9E948E", marginBottom: "16px" }}>Legal</p>
            {[{ to: "/legal/privacy-policy", label: "Privacy Policy" }, { to: "/legal/terms-of-service", label: "Terms of Service" }, { to: "/legal/cookie-policy", label: "Cookie Policy" }].map((l) => (
              <Link key={l.to} to={l.to} style={{ display: "block", color: "#F6F4F0", textDecoration: "none", fontSize: "15px", marginBottom: "10px", opacity: 0.8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9E948E", marginBottom: "16px" }}>Contact</p>
            <a href="mailto:hello@hephix.org" style={{ display: "block", color: "#F6F4F0", textDecoration: "none", fontSize: "15px", marginBottom: "10px", opacity: 0.8 }}>hello@hephix.org</a>
            <p style={{ color: "#9E948E", fontSize: "15px", marginBottom: "10px" }}>Nairobi, Kenya</p>
            {/* Social */}
            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              {[
                { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" },
                { label: "X", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { label: "GitHub", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} style={{ color: "#9E948E", transition: "color 0.2s" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: "1px solid rgba(226,221,214,0.12)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "#9E948E", fontSize: "13px" }}>© 2026 Hephix Ltd. All rights reserved.</p>
          <Link to="/admin" style={{ color: "#9E948E", fontSize: "11px", textDecoration: "none", opacity: 0.4 }}>Admin</Link>
        </div>
      </div>
    </footer>
  );
}
