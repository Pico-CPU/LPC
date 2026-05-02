'use client';

interface LogoMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

export function LogoMark({ size = 40, color = 'var(--ice-300)', className }: LogoMarkProps) {
  const scale = size / 40;
  return (
    <svg
      width={size}
      height={Math.round(34 * scale)}
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      {/* outer ring */}
      <circle cx="70" cy="60" r="58" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      {/* mountain silhouette fill */}
      <path
        d="M14 88 L30 72 L42 80 L58 58 L74 76 L88 64 L102 78 L118 70 L126 88 Z"
        fill="currentColor"
        opacity="0.18"
      />
      {/* mountain silhouette stroke */}
      <path
        d="M14 88 L30 72 L42 80 L58 58 L74 76 L88 64 L102 78 L118 70 L126 88"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      {/* flight path arc */}
      <path
        d="M16 40 Q50 30 70 38 Q90 46 124 36"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.55"
        fill="none"
      />
      {/* drone body */}
      <g transform="translate(70 38)">
        {/* arms */}
        <line x1="-9" y1="-9" x2="9" y2="9" stroke="currentColor" strokeWidth="1.75" />
        <line x1="9" y1="-9" x2="-9" y2="9" stroke="currentColor" strokeWidth="1.75" />
        {/* rotors */}
        <circle cx="-11" cy="-11" r="5" stroke="currentColor" strokeWidth="1.25" fill="var(--midnight-900)" />
        <circle cx="11" cy="-11" r="5" stroke="currentColor" strokeWidth="1.25" fill="var(--midnight-900)" />
        <circle cx="-11" cy="11" r="5" stroke="currentColor" strokeWidth="1.25" fill="var(--midnight-900)" />
        <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.25" fill="var(--midnight-900)" />
        {/* camera body */}
        <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className }: LogoProps) {
  const sizes = {
    sm: { mark: 28, text: 14 },
    md: { mark: 40, text: 18 },
    lg: { mark: 68, text: 28 },
  };
  const s = sizes[size];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className={className}>
      <LogoMark size={s.mark} />
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: s.text,
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: 'var(--fg-1)',
          lineHeight: 1,
        }}
      >
        LowPassCreative
      </div>
    </div>
  );
}
