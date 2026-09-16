interface HexIconProps {
  filled?: boolean;
  size?: number;
  color?: string;
  strokeColor?: string;
  className?: string;
  children?: React.ReactNode;
  ariaHidden?: boolean;
}

export default function HexIcon({
  filled = true,
  size = 48,
  color = "#0F1117",
  strokeColor = "#9E948E",
  className = "",
  children,
  ariaHidden = true,
}: HexIconProps) {
  const points = "24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 52"
      fill="none"
      className={className}
      aria-hidden={ariaHidden}
    >
      {filled ? (
        <polygon points={points} fill={color} />
      ) : (
        <polygon points={points} fill="none" stroke={strokeColor} strokeWidth="1.5" />
      )}
      {children && (
        <foreignObject x="8" y="8" width="32" height="36">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
            {children}
          </div>
        </foreignObject>
      )}
    </svg>
  );
}

export function HexBullet() {
  return (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "7px" }}>
      <polygon points="4,0.5 7.5,2.5 7.5,6.5 4,8.5 0.5,6.5 0.5,2.5" fill="#C85A18" />
    </svg>
  );
}

export function HexOutlined({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size * 1.08} viewBox="0 0 48 52" fill="none" className={className} aria-hidden="true">
      <polygon points="24,4 44,15.1 44,37.3 24,48.4 4,37.3 4,15.1" fill="none" stroke="#E2DDD6" strokeWidth="1.5" />
    </svg>
  );
}
