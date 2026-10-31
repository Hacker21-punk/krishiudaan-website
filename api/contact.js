export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, acreage, serviceType, msg } = req.body || {};

  if (!name || !email || !msg) {
    return res.status(400).json({ error: 'Missing required fields: name, email, or message' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Krishi Udaan <onboarding@resend.dev>',
        to: ['info@krishiudaan.in'],
        reply_to: email,
        subject: `New Drone Spraying Enquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #059669; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #064e3b; margin: 0; font-size: 20px;">Krishi Udaan - New Spraying Enquiry</h2>
              <p style="color: #64748b; margin: 4px 0 0; font-size: 13px;">Official submission via krishiudaan.in</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #1e293b;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Full Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #059669;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1e293b; text-decoration: none;">${phone || 'Not provided'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Estimated Acreage:</td>
                <td style="padding: 8px 0;">${acreage || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Type:</td>
                <td style="padding: 8px 0; font-weight: 600; color: #047857;">${serviceType || 'Precision Drone Spraying'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #059669; border-radius: 6px;">
              <div style="font-weight: bold; color: #0f172a; margin-bottom: 6px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Field Details & Message:</div>
              <div style="color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${msg}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              Hanron Tech Innovations Pvt. Ltd. • Plot No. 23-B, Sector - D, Govindpura, Bhopal, MP 462023
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Resend API Error:', data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Failed to send email via Resend:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
