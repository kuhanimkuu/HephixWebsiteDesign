import { HexBullet } from "./HexIcon";

// ---- Eyebrow ----
export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <HexBullet />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: dark ? "#C85A18" : "#C85A18",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ---- Status Badge ----
type BadgeStatus = "in_development" | "live" | "coming_later";
export function StatusBadge({ status }: { status: BadgeStatus }) {
  const map = {
    in_development: { label: "In development", style: { border: "1.5px solid #C85A18", color: "#C85A18" } },
    live: { label: "Live", style: { background: "#0F1117", color: "#F6F4F0" } },
    coming_later: { label: "Coming later", style: { border: "1.5px solid #9E948E", color: "#9E948E" } },
  };
  const { label, style } = map[status];
  return (
    <span
      style={{
        ...style,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "12px",
        letterSpacing: "0.08em",
        padding: "4px 12px",
        borderRadius: "4px",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

// ---- Button ----
type BtnVariant = "primary" | "secondary" | "text" | "primary-inverted" | "secondary-inverted";
interface BtnProps {
  children: React.ReactNode;
  variant?: BtnVariant;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Btn({ children, variant = "primary", onClick, type = "button", disabled, className = "", style }: BtnProps) {
  const base: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: "15px",
    padding: "12px 24px",
    borderRadius: "4px",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s",
    border: "1.5px solid transparent",
    textDecoration: "none",
    opacity: disabled ? 0.5 : 1,
  };

  const variants: Record<BtnVariant, React.CSSProperties> = {
    primary: { background: "var(--ink)", color: "var(--paper)", border: "1.5px solid var(--ink)" },
    secondary: { background: "transparent", color: "var(--ink)", border: "1.5px solid var(--ink)" },
    text: { background: "transparent", color: "var(--ink)", border: "none", padding: "12px 0" },
    "primary-inverted": { background: "var(--paper)", color: "var(--ink)", border: "1.5px solid var(--paper)" },
    "secondary-inverted": { background: "transparent", color: "var(--paper)", border: "1.5px solid var(--paper)" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      className={`btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

// ---- Form Field ----
interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function Field({ label, name, type = "text", placeholder, error, required, as = "input", children, value, onChange }: FieldProps) {
  const fieldStyle: React.CSSProperties = {
    width: "100%",
    height: as === "textarea" ? "auto" : "48px",
    padding: "12px 16px",
    borderRadius: "4px",
    border: error ? "1.5px solid #C85A18" : "1.5px solid var(--line)",
    background: "var(--white)",
    color: "var(--ink)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "13px",
          marginBottom: "6px",
          color: "var(--ink)",
        }}
      >
        {label}
        {required && <span style={{ color: "#C85A18", marginLeft: "4px" }}>*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={5}
          style={{ ...fieldStyle, height: "auto", resize: "vertical" }}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        />
      ) : as === "select" ? (
        <select id={name} name={name} style={fieldStyle} value={value} onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}>
          {children}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          style={fieldStyle}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        />
      )}
      {error && (
        <p style={{ color: "#C85A18", fontSize: "13px", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
          {error}
        </p>
      )}
    </div>
  );
}

// ---- Section wrapper ----
export function Section({
  children,
  dark = false,
  className = "",
  style,
  texture = false,
  id,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  style?: React.CSSProperties;
  texture?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={className}
      style={{
        background: dark ? "var(--ink)" : "var(--paper)",
        color: dark ? "var(--paper)" : "var(--ink)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {texture && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='69' viewBox='0 0 60 69' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 56,16.5 56,52.5 30,67 4,52.5 4,16.5' stroke='%23E2DDD6' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 69px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </section>
  );
}

export function Container({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", ...style }}
    >
      {children}
    </div>
  );
}
