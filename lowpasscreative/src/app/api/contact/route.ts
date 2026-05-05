import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const { name, email, phone, location, brief } = await request.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"LowPassCreative" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: `"${escapeHtml(name)}" <${email}>`,
      subject: `New shoot inquiry — ${escapeHtml(name)}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#111">
          <h2 style="margin-bottom:24px">New Shoot Inquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;width:120px;color:#666;font-size:13px">NAME</td><td style="padding:10px 0;border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">EMAIL</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${email}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">PHONE</td><td style="padding:10px 0;border-bottom:1px solid #eee">${escapeHtml(phone || '—')}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">LOCATION</td><td style="padding:10px 0;border-bottom:1px solid #eee">${escapeHtml(location || '—')}</td></tr>
            <tr><td style="padding:10px 0;color:#666;font-size:13px;vertical-align:top">BRIEF</td><td style="padding:10px 0;white-space:pre-wrap">${escapeHtml(brief || '—')}</td></tr>
          </table>
          <p style="margin-top:32px;font-size:12px;color:#999">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
        </div>
      `,
    });
  } catch (err) {
    console.error('[contact] SMTP error:', err);
    return NextResponse.json({ error: 'SMTP error', detail: String(err) }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
