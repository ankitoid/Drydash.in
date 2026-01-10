import { NextRequest } from 'next/server';

// POST /api/franchise
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing SENDGRID_API_KEY' }), { status: 500 });
    }

    const body = `New franchise inquiry:\n\nName: ${data.name || '-'}\nCity: ${data.city || '-'}\nInvestment: ${data.investment || '-'}\nEmail: ${data.email || '-'}\nPhone: ${data.phone || '-'}\n`;

    const payload = {
      personalizations: [
        {
          to: [{ email: 'support@drydash.in' }],
        },
      ],
      from: { email: 'no-reply@drydash.in', name: 'DryDash Website' },
      subject: 'New Franchise Inquiry',
      content: [
        {
          type: 'text/plain',
          value: body,
        },
      ],
    };

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ ok: false, error: text }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || String(err) }), { status: 500 });
  }
}
