'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

const NAV_ITEMS = ['Work', 'Services', 'Specs', 'Contact'] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '20px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(5, 11, 16, 0.85)' : 'rgba(5, 11, 16, 0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-1)',
        transition: 'background 240ms var(--ease-cinematic)',
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <Logo size="md" />
      </button>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--fg-2)',
              letterSpacing: '-0.005em',
              cursor: 'pointer',
              transition: 'color var(--dur-1) var(--ease-out)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg-1)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-2)')}
          >
            {item}
          </button>
        ))}

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.16em',
            color: 'var(--fg-3)',
          }}
        >
          CALIFORNIA
        </span>

        <button
          onClick={() => scrollTo('Contact')}
          style={{
            padding: '8px 16px',
            background: 'var(--aerial-500)',
            color: 'var(--ice-100)',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 500,
            transition: 'background var(--dur-1) var(--ease-out)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--aerial-400)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--aerial-500)')}
          onMouseDown={(e) => (e.currentTarget.style.background = 'var(--aerial-600)')}
          onMouseUp={(e) => (e.currentTarget.style.background = 'var(--aerial-400)')}
        >
          Book a shoot
        </button>
      </nav>
    </header>
  );
}
