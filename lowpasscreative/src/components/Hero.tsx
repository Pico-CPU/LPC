'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero-pad"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        background: 'linear-gradient(135deg, #1a2a35 0%, #08131a 45%, #14222b 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 30% 60%, rgba(74,112,136,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 30%, rgba(168,200,216,0.08) 0%, transparent 40%)',
        }}
      />

      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(168,200,216,0.03) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Bottom scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(8,19,26,0) 30%, rgba(5,11,16,0.85) 100%)',
        }}
      />

      {/* HUD — left */}
      <div
        className="hero-hud"
        style={{
          position: 'absolute',
          top: 110,
          left: 96,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          color: 'var(--fg-3)',
          opacity: visible ? 1 : 0,
          transition: 'opacity var(--dur-3) var(--ease-cinematic)',
        }}
      >
        REEL · 2026 · CALIFORNIA
      </div>

      {/* HUD — right (REC indicator) */}
      <div
        className="hero-hud"
        style={{
          position: 'absolute',
          top: 110,
          right: 96,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          background: 'rgba(8,19,26,0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-2)',
          borderRadius: 999,
          opacity: visible ? 1 : 0,
          transition: 'opacity var(--dur-3) var(--ease-cinematic)',
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--signal-record)',
            animation: 'recBlink 1.4s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.16em',
            color: '#fff',
          }}
        >
          REC · 04:21
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 880,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity var(--dur-4) var(--ease-cinematic), transform var(--dur-4) var(--ease-cinematic)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'var(--ice-300)',
            textTransform: 'uppercase',
          }}
        >
          Aerial cinematography · FAA Part 107
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(56px, 8vw, 96px)',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: 'var(--fg-1)',
            margin: 0,
          }}
        >
          Low altitude.
          <br />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--ice-300)',
            }}
          >
            High intent.
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 20,
            fontWeight: 300,
            lineHeight: 1.4,
            color: 'var(--fg-2)',
            maxWidth: 580,
            margin: 0,
            letterSpacing: '-0.005em',
          }}
        >
          Aerial cinematography for real estate, automotive, and action.
          One pilot. One edit suite. Listing-grade cuts in under 72 hours.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 12,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={scrollToContact}
            style={{
              padding: '14px 24px',
              background: 'var(--ice-300)',
              color: 'var(--midnight-900)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '-0.005em',
              transition: 'background var(--dur-1) var(--ease-out), transform var(--dur-1) var(--ease-out)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ice-200)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ice-300)')}
            onMouseDown={(e) => {
              e.currentTarget.style.background = 'var(--ice-400)';
              e.currentTarget.style.transform = 'translateY(1px)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.background = 'var(--ice-200)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book a shoot →
          </button>

          <button
            style={{
              padding: '14px 24px',
              background: 'transparent',
              color: 'var(--fg-1)',
              border: '1px solid var(--border-3)',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: 500,
              transition: 'border-color var(--dur-1) var(--ease-out)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(168,200,216,0.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-3)')}
          >
            Watch reel ↗
          </button>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'var(--fg-3)',
              marginLeft: 12,
            }}
          >
            4K60 · PRORES 422 HQ · INSURED $1M
          </span>
        </div>
      </div>

      <style>{`
        @keyframes recBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
