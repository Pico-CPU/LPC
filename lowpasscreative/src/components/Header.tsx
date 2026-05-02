'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

const NAV_ITEMS = ['Work', 'Services', 'Specs', 'Contact'] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
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
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <Logo size="md" />
        </button>

        {/* Desktop nav */}
        <nav className="header-nav-desktop" style={{ alignItems: 'center', gap: 32 }}>
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

        {/* Hamburger */}
        <button
          className="header-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            padding: 8,
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: 22, height: 2, background: 'var(--fg-1)',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            transition: 'transform 200ms',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, background: 'var(--fg-1)',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 200ms',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, background: 'var(--fg-1)',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            transition: 'transform 200ms',
          }} />
        </button>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: 'rgba(5, 11, 16, 0.97)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: 36,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: 'var(--fg-1)',
                cursor: 'pointer',
              }}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            style={{
              marginTop: 8,
              padding: '14px 32px',
              background: 'var(--aerial-500)',
              color: 'var(--ice-100)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Book a shoot
          </button>
        </div>
      )}
    </>
  );
}
