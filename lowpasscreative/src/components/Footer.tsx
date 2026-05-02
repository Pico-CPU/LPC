'use client';

import { LogoMark } from './Logo';

const LINKS = ['Instagram', 'Vimeo', 'Frame.io'] as const;

export function Footer() {
  return (
    <footer
      className="footer-pad"
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        {/* Left: logo + callsign */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={44} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              color: 'var(--fg-3)',
            }}
          >
            LOWPASSCREATIVE · CALIFORNIA · FAA PART 107
          </span>
        </div>

        {/* Center: links */}
        <div style={{ display: 'flex', gap: 24 }}>
          {LINKS.map((p) => (
            <a
              key={p}
              href="#"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--fg-2)',
                textDecoration: 'none',
                transition: 'color var(--dur-1) var(--ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg-1)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              {p.toUpperCase()} ↗
            </a>
          ))}
        </div>

        {/* Right: copyright */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.04em',
            color: 'var(--fg-4)',
          }}
        >
          © 2026 LowPassCreative
        </span>
      </div>
    </footer>
  );
}
