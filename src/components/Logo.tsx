interface LogoProps {
  variant?: "primary" | "reversed" | "mark";
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ variant = "primary", className = "", style }: LogoProps) {
  const inkColor = variant === "reversed" ? "#F6F4F0" : "#0F1117";
  const paperColor = variant === "reversed" ? "#0F1117" : "#F6F4F0";
  const emberColor = "#C85A18";

  if (variant === "mark") {
    return (
      <svg
        viewBox="27 20 94 108"
        className={className}
        style={style}
        aria-label="Hephix mark"
        role="img"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="hex-clip-mark">
            <polygon points="74,20 120.8,47 120.8,101 74,128 27.2,101 27.2,47" />
          </clipPath>
        </defs>
        <polygon points="74,20 120.8,47 120.8,101 74,128 27.2,101 27.2,47" fill={inkColor} />
        <g clipPath="url(#hex-clip-mark)">
          <rect x="40" y="63" width="68" height="20" fill={emberColor} />
          <rect x="40" y="28" width="20" height="90" fill={paperColor} />
          <rect x="88" y="28" width="20" height="90" fill={paperColor} />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 520 148"
      className={className}
      style={style}
      aria-label="Hephix Limited"
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={`hex-clip-${variant}`}>
          <polygon points="74,20 120.8,47 120.8,101 74,128 27.2,101 27.2,47" />
        </clipPath>
      </defs>
      {/* Mark */}
      <polygon points="74,20 120.8,47 120.8,101 74,128 27.2,101 27.2,47" fill={inkColor} />
      <g clipPath={`url(#hex-clip-${variant})`}>
        <rect x="40" y="63" width="68" height="20" fill={emberColor} />
        <rect x="40" y="28" width="20" height="90" fill={paperColor} />
        <rect x="88" y="28" width="20" height="90" fill={paperColor} />
      </g>
      {/* Wordmark */}
      <text
        x="153"
        y="87"
        fontFamily="'Syne', sans-serif"
        fontWeight="800"
        fontSize="52"
        letterSpacing="-0.5"
        fill={inkColor}
      >
        HEPHIX
      </text>
      <text
        x="157"
        y="112"
        fontFamily="'Syne', sans-serif"
        fontWeight="400"
        fontSize="13"
        letterSpacing="7"
        fill="#9E948E"
      >
        LIMITED
      </text>
    </svg>
  );
}
