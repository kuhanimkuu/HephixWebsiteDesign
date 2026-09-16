import { useState } from "react";
import { Link } from "react-router";
import Logo from "../components/Logo";

type AdminPage = "dashboard" | "posts" | "careers" | "team" | "products" | "inbox" | "newsletter" | "legal" | "settings";

const navItems: { id: AdminPage; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { id: "posts", label: "Blog Posts", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" },
  { id: "careers", label: "Careers", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { id: "team", label: "Team Members", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
  { id: "products", label: "Products", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8" },
  { id: "inbox", label: "Contact Inbox", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" },
  { id: "newsletter", label: "Newsletter", icon: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" },
  { id: "legal", label: "Legal Pages", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" },
  { id: "settings", label: "Site Settings", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" },
];

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("email") && data.get("password")) {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F6F4F0", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: "400px", background: "#FFFFFF", borderRadius: "4px", border: "1px solid #E2DDD6", padding: "48px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Logo variant="mark" className="h-12 w-12" style={{ margin: "0 auto 16px" }} />
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "#0F1117" }}>Hephix Admin</h1>
          <p style={{ color: "#9E948E", fontSize: "14px", marginTop: "6px" }}>Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", marginBottom: "6px", color: "#0F1117" }}>Email</label>
            <input name="email" type="email" placeholder="admin@hephix.org" style={{ width: "100%", height: "48px", padding: "0 16px", borderRadius: "4px", border: `1.5px solid ${error ? "#C85A18" : "#E2DDD6"}`, fontFamily: "'Inter', sans-serif", fontSize: "15px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", marginBottom: "6px", color: "#0F1117" }}>Password</label>
            <input name="password" type="password" placeholder="••••••••" style={{ width: "100%", height: "48px", padding: "0 16px", borderRadius: "4px", border: `1.5px solid ${error ? "#C85A18" : "#E2DDD6"}`, fontFamily: "'Inter', sans-serif", fontSize: "15px", outline: "none" }} />
          </div>
          {error && <p style={{ color: "#C85A18", fontSize: "13px", marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>Invalid credentials. Please try again.</p>}
          <button type="submit" style={{ width: "100%", height: "48px", background: "#0F1117", color: "#F6F4F0", border: "none", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", cursor: "pointer" }}>Sign in</button>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const stats = [
    { label: "Blog posts", value: "4", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" },
    { label: "Open roles", value: "3", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
    { label: "Unread messages", value: "12", icon: "M4 4h16c1.1 0 2 .9 2 2v12" },
    { label: "Subscribers", value: "248", icon: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" },
  ];

  return (
    <div>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F1117", marginBottom: "32px" }}>Dashboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: "#FFFFFF", border: "1px solid #E2DDD6", borderRadius: "4px", padding: "24px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9E948E", marginBottom: "12px" }}>{s.label}</p>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "36px", color: "#0F1117" }}>{s.value}</p>
          </div>
        ))}
      </div>
      <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD6", borderRadius: "4px", padding: "24px" }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F1117", marginBottom: "16px" }}>Recent messages</h3>
        {[
          { name: "Adeola Bankole", type: "Partnerships", time: "2h ago", subject: "Partnership inquiry" },
          { name: "James Muriuki", type: "Investors", time: "4h ago", subject: "Funding conversation" },
          { name: "Amara Diallo", type: "General", time: "1d ago", subject: "Hello from Dakar" },
        ].map((m) => (
          <div key={m.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #E2DDD6", gap: "16px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#0F1117", marginBottom: "2px" }}>{m.name}</p>
              <p style={{ color: "#9E948E", fontSize: "13px" }}>{m.subject}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", padding: "3px 8px", borderRadius: "4px", border: "1px solid #E2DDD6", color: "#9E948E" }}>{m.type}</span>
              <p style={{ color: "#9E948E", fontSize: "12px", marginTop: "4px" }}>{m.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderPage({ title, locked = false }: { title: string; locked?: boolean }) {
  return (
    <div>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0F1117", marginBottom: "8px" }}>{title}</h2>
      {locked && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 14px", background: "#F6F4F0", borderRadius: "4px", marginBottom: "24px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9E948E" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#9E948E" }}>Restricted — Super Admin only</span>
        </div>
      )}
      <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD6", borderRadius: "4px", padding: "40px", textAlign: "center" }}>
        <p style={{ color: "#9E948E", fontSize: "15px" }}>No entries yet. Content will appear here once added.</p>
      </div>
    </div>
  );
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState<AdminPage>("dashboard");

  if (!loggedIn) return <AdminLogin onLogin={() => setLoggedIn(true)} />;

  const pageComponents: Record<AdminPage, React.ReactNode> = {
    dashboard: <Dashboard />,
    posts: <PlaceholderPage title="Blog Posts" />,
    careers: <PlaceholderPage title="Careers" />,
    team: <PlaceholderPage title="Team Members" locked />,
    products: <PlaceholderPage title="Products" locked />,
    inbox: <PlaceholderPage title="Contact Inbox" />,
    newsletter: <PlaceholderPage title="Newsletter" />,
    legal: <PlaceholderPage title="Legal Pages" />,
    settings: <PlaceholderPage title="Site Settings" />,
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "#F6F4F0" }}>
      {/* Sidebar */}
      <aside style={{ width: "240px", background: "#0F1117", flexShrink: 0, display: "flex", flexDirection: "column", padding: "24px 0" }}>
        <div style={{ padding: "0 20px 24px", borderBottom: "1px solid rgba(226,221,214,0.1)" }}>
          <Logo variant="reversed" className="h-8 w-auto" style={{ maxWidth: "160px" }} />
        </div>
        <nav style={{ padding: "16px 0", flex: 1 }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                width: "100%", padding: "10px 20px",
                background: page === item.id ? "#1A1D25" : "transparent",
                borderLeft: page === item.id ? "3px solid #C85A18" : "3px solid transparent",
                border: "none", cursor: "pointer",
                color: page === item.id ? "#F6F4F0" : "#9E948E",
                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
                textAlign: "left", transition: "all 0.15s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(226,221,214,0.1)" }}>
          <button onClick={() => setLoggedIn(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9E948E", fontFamily: "'Inter', sans-serif", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <header style={{ height: "60px", background: "#FFFFFF", borderBottom: "1px solid #E2DDD6", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "17px", color: "#0F1117" }}>
            {navItems.find((n) => n.id === page)?.label}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#9E948E" }}>admin@hephix.org</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", padding: "4px 8px", borderRadius: "4px", background: "#0F1117", color: "#C85A18", letterSpacing: "0.08em" }}>SUPER ADMIN</span>
          </div>
        </header>

        <main style={{ flex: 1, padding: "40px 32px" }}>
          {pageComponents[page]}
        </main>
      </div>
    </div>
  );
}
