'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  location: string;
  brief: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    brief: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (fieldName: string) => ({
    padding: '12px 14px',
    background: 'transparent',
    border: `1px solid ${focusedField === fieldName ? 'var(--border-focus)' : 'var(--border-2)'}`,
    borderRadius: 'var(--radius-md)',
    color: 'var(--fg-1)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    outline: 'none',
    width: '100%',
    transition: 'border-color var(--dur-1) var(--ease-out)',
    boxSizing: 'border-box' as const,
  });

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.16em',
    color: 'var(--fg-3)',
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-1)',
      }}
    >
      <div className="contact-grid">
        {/* Left col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>
            04 — BOOK A SHOOT
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: 'var(--fg-1)',
              margin: 0,
            }}
          >
            Got a{' '}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--ice-300)',
              }}
            >
              shot
            </span>{' '}
            in mind?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.5,
              color: 'var(--fg-2)',
              margin: 0,
              maxWidth: 540,
              letterSpacing: '-0.005em',
            }}
          >
            Tell me the location, the subject, and the deadline. I&apos;ll come back with a window,
            a quote, and a rough shot list within 24 hours.
          </p>

          {/* availability callout */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 20px',
              background: 'var(--bg-base)',
              border: '1px solid var(--border-2)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: 420,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--signal-success)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '0.08em',
                color: 'var(--fg-2)',
              }}
            >
              AVAILABLE · CALIFORNIA & SURROUNDING
            </span>
          </div>
        </div>

        {/* Right col — form */}
        <div
          style={{
            padding: 32,
            background: 'var(--bg-base)',
            border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          {submitted ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                padding: '32px 0',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '1px solid var(--signal-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: 'var(--signal-success)', fontSize: 20 }}>✓</span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'var(--fg-1)',
                    marginBottom: 8,
                  }}
                >
                  Brief received.
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: 'var(--fg-2)',
                    lineHeight: 1.5,
                  }}
                >
                  I&apos;ll be back within 24 hours with a window and a quote.
                </div>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  color: 'var(--fg-3)',
                }}
              >
                LOWPASSCREATIVE · CALIFORNIA
              </span>
            </div>
          ) : (
            <>
              {[
                { key: 'name', label: 'NAME', placeholder: 'Your name', type: 'text' },
                { key: 'email', label: 'EMAIL', placeholder: 'you@studio.com', type: 'email' },
                {
                  key: 'location',
                  label: 'ADDRESS OR LOCATION',
                  placeholder: '2400 W Sunset Blvd, Malibu CA',
                  type: 'text',
                },
              ].map((f) => (
                <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof FormData]}
                    onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                    onFocus={() => setFocusedField(f.key)}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle(f.key)}
                  />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={labelStyle}>BRIEF</label>
                <textarea
                  rows={4}
                  placeholder="Listing flyover for a $2.4M property. Reveal-to-room cut, 60s deliverable. Need it Tuesday."
                  value={form.brief}
                  onChange={(e) => setForm((prev) => ({ ...prev, brief: e.target.value }))}
                  onFocus={() => setFocusedField('brief')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle('brief'),
                    resize: 'none',
                    fontFamily: 'var(--font-sans)',
                  }}
                />
              </div>

              {error && (
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--signal-danger)' }}>
                  {error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  marginTop: 8,
                  padding: '14px 18px',
                  background: loading ? 'var(--bg-raised)' : 'var(--ice-300)',
                  color: loading ? 'var(--fg-3)' : 'var(--midnight-900)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background var(--dur-1) var(--ease-out), transform var(--dur-1)',
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = 'var(--ice-200)'; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = 'var(--ice-300)'; }}
                onMouseDown={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = 'var(--ice-400)';
                    e.currentTarget.style.transform = 'translateY(1px)';
                  }
                }}
                onMouseUp={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = 'var(--ice-200)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {loading ? 'Sending…' : 'Submit brief →'}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
