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

  // Use the verified domain sender address
  const senderAddress = 'Krishi Udaan <info@krishiudaan.in>';
  const adminRecipients = ['info@krishiudaan.in'];
  if (process.env.NOTIFICATION_EMAIL && !adminRecipients.includes(process.env.NOTIFICATION_EMAIL)) {
    adminRecipients.push(process.env.NOTIFICATION_EMAIL);
  }

  try {
    // =========================================================================
    // 1. Send Notification Email to Krishi Udaan Operations Team
    // =========================================================================
    const adminPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: senderAddress,
        to: adminRecipients,
        reply_to: `${name} <${email}>`,
        subject: `New Drone Spraying Enquiry: ${name} (${acreage ? acreage + ' Acres' : 'Acreage not specified'})`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
            <div style="border-bottom: 3px solid #059669; padding-bottom: 14px; margin-bottom: 20px;">
              <span style="display: inline-block; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #047857; background: #ecfdf5; padding: 4px 8px; border-radius: 4px; border: 1px solid #a7f3d0; margin-bottom: 8px;">
                Krishi Udaan • Web Lead
              </span>
              <h2 style="color: #064e3b; margin: 0; font-size: 22px; font-weight: 800;">
                New Agricultural Spraying Enquiry
              </h2>
              <p style="color: #64748b; margin: 4px 0 0; font-size: 13px;">
                Submitted directly from official website (krishiudaan.in)
              </p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 700; width: 150px; color: #475569;">Customer Name:</td>
                <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 700; color: #475569;">Email Address:</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #059669; font-weight: 600; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 700; color: #475569;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0;">
                  <a href="tel:${phone}" style="color: #0f172a; font-weight: 600; text-decoration: none;">${phone || 'Not provided'}</a>
                  ${phone ? `&nbsp;•&nbsp;<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #059669; font-weight: 600; font-size: 12px;">Open WhatsApp</a>` : ''}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: 700; color: #475569;">Estimated Acreage:</td>
                <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">${acreage || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 700; color: #475569;">Service Required:</td>
                <td style="padding: 10px 0; font-weight: 700; color: #047857;">${serviceType || 'Precision Drone Spraying'}</td>
              </tr>
            </table>

            <div style="padding: 16px; background-color: #f8fafc; border-left: 4px solid #059669; border-radius: 6px; margin-bottom: 24px;">
              <div style="font-weight: 800; color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Field Details &amp; Message Notes:
              </div>
              <div style="color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${msg}</div>
            </div>

            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; font-size: 12px; color: #166534;">
              💡 <b>Quick Action:</b> Click "Reply" in your email client to directly email ${name} at ${email}.
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
              Hanron Tech Innovations Pvt. Ltd. • Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
            </div>
          </div>
        `,
      }),
    });

    // =========================================================================
    // 2. Send Professional Auto-Reply Confirmation Email to the Customer
    // =========================================================================
    const customerPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: senderAddress,
        to: [email],
        reply_to: 'info@krishiudaan.in',
        subject: 'We have received your spraying inquiry - Krishi Udaan',
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
            <div style="border-bottom: 3px solid #059669; padding-bottom: 14px; margin-bottom: 20px;">
              <h2 style="color: #064e3b; margin: 0; font-size: 22px; font-weight: 800;">
                Krishi Udaan
              </h2>
              <p style="color: #059669; margin: 4px 0 0; font-size: 13px; font-weight: 600;">
                Precision Agricultural Drone Spraying Services
              </p>
            </div>

            <p style="font-size: 15px; line-height: 1.6; color: #0f172a;">
              Dear <b>${name}</b>,
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Thank you for reaching out to <b>Krishi Udaan</b> (Hanron Tech Innovations Pvt. Ltd.). We have successfully received your inquiry for <b>${serviceType || 'drone spraying services'}</b>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a;">
                Your Inquiry Summary:
              </h3>
              <p style="margin: 4px 0; font-size: 13px; color: #475569;">• <b>Service:</b> ${serviceType || 'Precision Drone Spraying'}</p>
              ${acreage ? `<p style="margin: 4px 0; font-size: 13px; color: #475569;">• <b>Acreage:</b> ${acreage} Acres</p>` : ''}
              ${phone ? `<p style="margin: 4px 0; font-size: 13px; color: #475569;">• <b>Contact Number:</b> ${phone}</p>` : ''}
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Our agricultural flight operations team in Bhopal is reviewing your field requirements. A representative will contact you via phone or WhatsApp within <b>24 hours</b> to confirm pilot dispatch dates and acreage scheduling.
            </p>

            <div style="background-color: #f0fdf4; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <h4 style="margin: 0 0 6px; color: #064e3b; font-size: 13px; font-weight: 700;">Need urgent field assistance?</h4>
              <p style="margin: 0; font-size: 13px; color: #166534;">
                You can reach our flight operations desk directly:
              </p>
              <p style="margin: 8px 0 0; font-size: 13px;">
                📞 <b>Call / WhatsApp:</b> <a href="tel:+919755675433" style="color: #059669; font-weight: 700; text-decoration: none;">+91 97556 75433</a> / <a href="tel:+917554331833" style="color: #059669; font-weight: 700; text-decoration: none;">+91 755 4331833</a><br />
                💬 <b>Instant WhatsApp:</b> <a href="https://wa.me/919755675433" style="color: #059669; font-weight: 700; text-decoration: none;">Click to chat with our Flight Director</a>
              </p>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 0;">
              Best regards,<br />
              <b>Operations &amp; Dispatch Team</b><br />
              Krishi Udaan | Hanron Tech Innovations Pvt. Ltd.<br />
              <span style="font-size: 12px; color: #64748b;">Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023</span>
            </p>
          </div>
        `,
      }),
    });

    // Execute both in parallel
    const [adminRes, customerRes] = await Promise.all([adminPromise, customerPromise]);

    const adminData = await adminRes.json();
    const customerData = await customerRes.json();

    if (!adminRes.ok) {
      console.error('Failed to send admin notification:', adminData);
    }
    if (!customerRes.ok) {
      console.error('Failed to send customer confirmation:', customerData);
    }

    if (!adminRes.ok && !customerRes.ok) {
      return res.status(500).json({ error: 'Failed to dispatch emails', details: adminData });
    }

    return res.status(200).json({ 
      success: true, 
      adminEmailId: adminData.id || null,
      customerEmailId: customerData.id || null 
    });
  } catch (error) {
    console.error('Email dispatch error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
