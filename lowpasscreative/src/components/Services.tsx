'use client';

import { useState } from 'react';

interface Service {
  idx: number;
  title: string;
  blurb: string;
  specs: string[];
}

const SERVICES: Service[] = [
  {
    idx: 1,
    title: 'Real estate',
    blurb:
      'Listing flyovers, exterior reveals, neighborhood context. Cut for buyer-agent reels and MLS attachments. 72-hour turnaround.',
    specs: [
      'Listing flyover · 60–90 sec',
      'Reveal-to-room transition',
      'Buyer reel · 30 sec vertical',
    ],
  },
  {
    idx: 2,
    title: 'Automotive',
    blurb:
      'Drift days, owned-car features, dealership reels. FPV chase footage and high-altitude reveal shots in the same session.',
    specs: ['Owner feature · 90–120 sec', 'FPV chase · cinematic', 'Dealer pad reveal'],
  },
  {
    idx: 3,
    title: 'Action & nature',
    blurb:
      'FPV freestyle, athlete tracking, landscape b-roll. Long-form b-roll packages for editors and agencies.',
    specs: ['FPV chase · DJI Avata 2', 'Landscape shoot · 4K60', 'B-roll package · ProRes'],
  },
];

function ServiceCard({ idx, title, blurb, specs }: Service) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: 1,
        padding: 36,
        background: 'var(--bg-surface)',
        border: `1px solid ${hover ? 'var(--border-3)' : 'var(--border-2)'}`,
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        minHeight: 360,
        transition: `all var(--dur-2) var(--ease-cinematic)`,
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'var(--fg-3)',
          }}
        >
          0{idx}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'var(--ice-300)',
          }}
        >
          AVAILABLE
        </span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--fg-1)',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--fg-2)',
            margin: 0,
          }}
        >
          {blurb}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          paddingTop: 16,
          borderTop: '1px solid var(--border-1)',
        }}
      >
        {specs.map((s) => (
          <div
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-3)',
              letterSpacing: '0.04em',
            }}
          >
            · {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ padding: '120px 96px', background: 'var(--bg-base)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 64,
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              color: 'var(--fg-3)',
            }}
          >
            01 — SERVICES
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
            Three things, done{' '}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--ice-300)',
              }}
            >
              well
            </span>
            .
          </h2>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'var(--fg-3)',
          }}
        >
          [03 / 03]
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        {SERVICES.map((s) => (
          <ServiceCard key={s.idx} {...s} />
        ))}
      </div>
    </section>
  );
}
