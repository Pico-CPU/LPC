'use client';

const SPECS: [string, string][] = [
  ['AIRFRAME', 'DJI Mavic 3 Pro Cine · DJI Avata 2 (FPV)'],
  ['SENSOR', '4/3 CMOS Hasselblad · 12.8 stops dynamic range'],
  ['CODEC', 'Apple ProRes 422 HQ · H.264 5.1K · D-Log M'],
  ['FRAMERATES', '24 / 30 / 60 / 120fps (slow-mo capable)'],
  ['CERTIFICATION', 'FAA Part 107 (current) · Night Operation Waiver'],
  ['INSURANCE', '$1,000,000 hull & liability · Skywatch.AI'],
  ['TURNAROUND', '72 hrs standard · 24 hrs rush available'],
  ['DELIVERABLES', 'Frame.io · WeTransfer · raw drive on request'],
];

export function Specs() {
  return (
    <section id="specs" className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="specs-grid">
        {/* Left col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              color: 'var(--fg-3)',
            }}
          >
            03 — KIT & CERTIFICATIONS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--fg-1)',
              margin: 0,
            }}
          >
            What flies,{' '}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--ice-300)',
              }}
            >
              what records
            </span>
            .
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--fg-2)',
              margin: 0,
              maxWidth: 380,
            }}
          >
            Specs over adjectives. Here&apos;s the kit on every shoot and the paper that lets it fly.
          </p>
        </div>

        {/* Right col — spec table */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SPECS.map(([label, value]) => (
            <div key={label} className="spec-row">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  color: 'var(--fg-3)',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: 'var(--fg-1)',
                  letterSpacing: '0.02em',
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
