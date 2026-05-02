'use client';

import { useState } from 'react';

interface Tile {
  idx: string;
  title: string;
  location: string;
  runtime: string;
  gradient: string;
}

const TILES: Tile[] = [
  {
    idx: '026',
    title: 'Sierra Nevadas — listing flyover',
    location: 'MALIBU, CA',
    runtime: '01:24',
    gradient: 'linear-gradient(135deg, #2a3a48 0%, #14222b 60%, #0d1820 100%)',
  },
  {
    idx: '025',
    title: 'Laguna Canyon drift — owner feature',
    location: 'LAGUNA BEACH, CA',
    runtime: '02:08',
    gradient: 'linear-gradient(135deg, #1a2a35 0%, #0d1e2b 60%, #050b10 100%)',
  },
  {
    idx: '024',
    title: 'Big Sur coastline — b-roll',
    location: 'BIG SUR, CA',
    runtime: '04:42',
    gradient: 'linear-gradient(135deg, #1a3548 0%, #0d2030 60%, #08131a 100%)',
  },
  {
    idx: '023',
    title: 'FPV freestyle — athlete tracking',
    location: 'OJAI, CA',
    runtime: '01:18',
    gradient: 'linear-gradient(135deg, #2a4858 0%, #142734 60%, #050b10 100%)',
  },
];

function PortfolioTile({ idx, title, location, runtime, gradient }: Tile) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        background: gradient,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: `all var(--dur-2) var(--ease-cinematic)`,
        boxShadow: hover ? 'var(--shadow-glow)' : 'none',
      }}
    >
      {/* grain texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(168,200,216,0.05) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* bottom scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,19,26,0) 40%, rgba(5,11,16,0.85) 100%)',
        }}
      />

      {/* project index */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.16em',
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        PROJECT · {idx}
      </div>

      {/* runtime */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.7)',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {runtime}
      </div>

      {/* play button (hover) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hover ? 1 : 0,
          transition: `opacity var(--dur-2) var(--ease-cinematic)`,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.5)',
            background: 'rgba(8,19,26,0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid #fff',
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              marginLeft: 4,
            }}
          />
        </div>
      </div>

      {/* meta */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            fontWeight: 500,
            color: '#fff',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          {location}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="work"
      style={{
        padding: '120px 96px',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-1)',
        borderBottom: '1px solid var(--border-1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 64,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              color: 'var(--fg-3)',
            }}
          >
            02 — RECENT WORK
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--fg-1)',
              margin: 0,
            }}
          >
            Recent work.
          </h2>
        </div>
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'var(--ice-300)',
            textDecoration: 'none',
          }}
        >
          View all 26 →
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
        }}
      >
        {TILES.map((t) => (
          <PortfolioTile key={t.idx} {...t} />
        ))}
      </div>
    </section>
  );
}
