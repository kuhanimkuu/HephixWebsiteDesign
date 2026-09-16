import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Logo from "./Logo";

interface NavbarProps {
  dark?: boolean;
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/philosophy", label: "Philosophy" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: isDark ? "var(--ink)" : "var(--paper)",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <Logo variant="primary" className="h-9 w-auto hidden md:block" />
            <Logo variant="mark" className="h-9 w-9 md:hidden" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: "32px", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: isActive(link.to) ? "var(--ember)" : "var(--ink)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: theme toggle + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={onThemeToggle}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              style={{
                background: "none",
                border: "1.5px solid var(--line)",
                borderRadius: "4px",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink)",
                transition: "border-color 0.2s",
              }}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "10px 20px",
                borderRadius: "4px",
                background: "var(--ink)",
                color: "var(--paper)",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Get in touch
            </Link>
            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: "4px" }}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "var(--ink)",
            display: "flex",
            flexDirection: "column",
            padding: "80px 32px 48px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                color: "#F6F4F0",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid rgba(226,221,214,0.12)",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              marginTop: "32px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              padding: "14px 24px",
              borderRadius: "4px",
              background: "#F6F4F0",
              color: "#0F1117",
              textDecoration: "none",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Get in touch
          </Link>
        </div>
      )}
    </>
  );
}
