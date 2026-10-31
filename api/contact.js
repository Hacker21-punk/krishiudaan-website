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

  const senderAddress = 'Krishi Udaan <info@krishiudaan.in>';
  const adminRecipients = ['info@krishiudaan.in'];
  if (process.env.NOTIFICATION_EMAIL && !adminRecipients.includes(process.env.NOTIFICATION_EMAIL)) {
    adminRecipients.push(process.env.NOTIFICATION_EMAIL);
  }

  const cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
  const submissionDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });

  // =========================================================================
  // 1. Executive HTML for Operations Team Lead Notification
  // =========================================================================
  const adminHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Agricultural Spraying Lead</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-text-size-adjust: 100%;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #064e3b 0%, #047857 100%); padding: 32px 28px; text-align: left;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="background-color: #ffffff; display: inline-block; padding: 8px 16px; border-radius: 10px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
                      <img src="https://ik.imagekit.io/ob62ttt1o/Krishi%20Udaan/logo%20with%20tagline%20copy_kBjx_CEPP.png?updatedAt=1695968158617" alt="Krishi Udaan" width="140" style="display: block; width: 140px; border: 0;" />
                    </div>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <span style="background-color: #f59e0b; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 5px 12px; border-radius: 20px; display: inline-block;">
                      New Web Lead
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; line-height: 1.3;">
                      Agricultural Spraying Inquiry
                    </h1>
                    <p style="color: #a7f3d0; font-size: 13px; margin: 4px 0 0; font-weight: 500;">
                      Submitted on ${submissionDate} (IST)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 28px;">
              
              <!-- Quick Overview Badge Strip -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 13px;">
                      <tr>
                        <td width="50%" style="padding: 4px 0;">
                          <span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase;">Lead Name</span><br />
                          <strong style="color: #0f172a; font-size: 15px;">${name}</strong>
                        </td>
                        <td width="50%" style="padding: 4px 0;">
                          <span style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase;">Acreage</span><br />
                          <strong style="color: #059669; font-size: 15px;">${acreage ? acreage + ' Acres' : 'Not specified'}</strong>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Detailed Info Table -->
              <h3 style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #064e3b; margin: 0 0 12px;">
                Customer &amp; Field Specifications
              </h3>

              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 13px; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; margin-bottom: 22px;">
                <tr style="background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 14px; font-weight: 700; color: #475569; width: 140px; background-color: #f8fafc;">Full Name</td>
                  <td style="padding: 10px 14px; color: #0f172a; font-weight: 600;">${name}</td>
                </tr>
                <tr style="background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 14px; font-weight: 700; color: #475569; background-color: #f8fafc;">Email Address</td>
                  <td style="padding: 10px 14px;">
                    <a href="mailto:${email}" style="color: #059669; font-weight: 600; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr style="background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 14px; font-weight: 700; color: #475569; background-color: #f8fafc;">Phone / WhatsApp</td>
                  <td style="padding: 10px 14px;">
                    <strong style="color: #0f172a;">${phone || 'Not provided'}</strong>
                  </td>
                </tr>
                <tr style="background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 14px; font-weight: 700; color: #475569; background-color: #f8fafc;">Service Type</td>
                  <td style="padding: 10px 14px; font-weight: 700; color: #047857;">${serviceType || 'Precision Drone Spraying'}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td style="padding: 10px 14px; font-weight: 700; color: #475569; background-color: #f8fafc;">Farm Acreage</td>
                  <td style="padding: 10px 14px; color: #0f172a; font-weight: 600;">${acreage ? acreage + ' Acres' : 'Not specified'}</td>
                </tr>
              </table>

              <!-- Customer Message Box -->
              <div style="margin-bottom: 24px; padding: 16px 18px; background-color: #f8fafc; border-left: 4px solid #059669; border-radius: 8px; border: 1px solid #e2e8f0; border-left-width: 4px;">
                <div style="font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #064e3b; margin-bottom: 6px;">
                  Customer Notes &amp; Field Details:
                </div>
                <div style="font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${msg}</div>
              </div>

              <!-- Quick Action Callouts -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                <tr>
                  ${phone ? `
                  <td style="padding-right: 8px; padding-bottom: 8px;">
                    <a href="https://wa.me/${cleanPhone}" target="_blank" style="display: block; text-align: center; background-color: #059669; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 11px 16px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Open WhatsApp Chat &rarr;
                    </a>
                  </td>` : ''}
                  <td style="padding-right: 8px; padding-bottom: 8px;">
                    <a href="mailto:${email}?subject=Krishi%20Udaan%20Spraying%20Inquiry%20Confirmation" style="display: block; text-align: center; background-color: #0f172a; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 11px 16px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Reply via Email
                    </a>
                  </td>
                  ${phone ? `
                  <td style="padding-bottom: 8px;">
                    <a href="tel:${phone}" style="display: block; text-align: center; background-color: #ffffff; color: #0f172a; border: 1px solid #cbd5e1; font-size: 12px; font-weight: 700; text-decoration: none; padding: 11px 16px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Call Customer
                    </a>
                  </td>` : ''}
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 22px 24px; text-align: center; color: #94a3b8; font-size: 11px; line-height: 1.6;">
              <p style="margin: 0 0 4px; color: #cbd5e1; font-weight: 700;">
                Krishi Udaan Operations Desk &bull; Hanron Tech Innovations Pvt. Ltd.
              </p>
              <p style="margin: 0; color: #64748b;">
                Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  // =========================================================================
  // 2. Executive HTML for Customer Confirmation Receipt
  // =========================================================================
  const customerHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inquiry Confirmation - Krishi Udaan</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-text-size-adjust: 100%;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #064e3b 0%, #047857 100%); padding: 36px 32px 30px; text-align: center;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="background-color: #ffffff; display: inline-block; padding: 10px 22px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                      <img src="https://ik.imagekit.io/ob62ttt1o/Krishi%20Udaan/logo%20with%20tagline%20copy_kBjx_CEPP.png?updatedAt=1695968158617" alt="Krishi Udaan" width="160" style="display: block; width: 160px; border: 0;" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <span style="display: inline-block; background-color: rgba(255, 255, 255, 0.18); color: #fef3c7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.25);">
                      Agricultural Drone Aviation
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 10px;">
                    <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0; line-height: 1.25;">
                      Inquiry Received Successfully
                    </h1>
                    <p style="color: #a7f3d0; font-size: 13px; margin: 6px 0 0; font-weight: 500;">
                      Precision Drone Spraying &amp; Smart Farm Logistics
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 32px 28px 24px;">
              
              <!-- Greeting -->
              <p style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 10px;">
                Dear ${name},
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 24px;">
                Thank you for contacting <strong>Krishi Udaan</strong> (Hanron Tech Innovations Pvt. Ltd.). We have received your inquiry for precision agricultural drone spraying. Our flight operations team in Bhopal is reviewing your specifications.
              </p>

              <!-- Progress Steps Timeline -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-radius: 12px; padding: 18px 16px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #059669;">
                      Flight Dispatch Status
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <!-- Step 1 -->
                        <td width="33%" align="center" style="vertical-align: top; padding: 0 4px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #059669; color: #ffffff; font-weight: bold; font-size: 13px; line-height: 28px; text-align: center; margin: 0 auto 6px;">✓</div>
                          <span style="font-size: 11px; font-weight: 700; color: #0f172a; display: block;">Inquiry Logged</span>
                          <span style="font-size: 10px; color: #059669; font-weight: 600;">Completed</span>
                        </td>
                        <!-- Step 2 -->
                        <td width="33%" align="center" style="vertical-align: top; padding: 0 4px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #f59e0b; color: #ffffff; font-weight: bold; font-size: 13px; line-height: 28px; text-align: center; margin: 0 auto 6px;">2</div>
                          <span style="font-size: 11px; font-weight: 700; color: #0f172a; display: block;">Acreage Mapping</span>
                          <span style="font-size: 10px; color: #d97706; font-weight: 600;">Under Review</span>
                        </td>
                        <!-- Step 3 -->
                        <td width="33%" align="center" style="vertical-align: top; padding: 0 4px;">
                          <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #cbd5e1; color: #64748b; font-weight: bold; font-size: 13px; line-height: 28px; text-align: center; margin: 0 auto 6px;">3</div>
                          <span style="font-size: 11px; font-weight: 700; color: #64748b; display: block;">Crew Dispatch</span>
                          <span style="font-size: 10px; color: #94a3b8;">Pending Call</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Inquiry Summary Card -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #059669; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #064e3b;">
                      Your Submitted Requirements
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 18px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 13px;">
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 140px;">Service Requested:</td>
                        <td style="padding: 6px 0; color: #047857; font-weight: 700;">${serviceType || 'Precision Agricultural Drone Spraying'}</td>
                      </tr>
                      ${acreage ? `
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Farm Acreage:</td>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${acreage} Acres</td>
                      </tr>` : ''}
                      ${phone ? `
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Contact Phone:</td>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${phone}</td>
                      </tr>` : ''}
                      ${msg ? `
                      <tr>
                        <td style="padding: 8px 0 4px; color: #64748b; font-weight: 600; vertical-align: top;">Field Details:</td>
                        <td style="padding: 8px 0 4px; color: #334155; line-height: 1.5;">${msg}</td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Next Steps Description -->
              <p style="font-size: 14px; line-height: 1.6; color: #334155; margin: 0 0 20px;">
                <strong>What happens next?</strong> A certified commercial drone flight director will contact you via phone or WhatsApp within <strong>24 business hours</strong> to confirm field topography, pesticide/fertilizer dosage, and your preferred spraying window.
              </p>

              <!-- Instant WhatsApp / Call Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; margin-bottom: 26px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <h4 style="margin: 0 0 6px; color: #064e3b; font-size: 14px; font-weight: 800;">
                      Need immediate dispatch or urgent crop treatment?
                    </h4>
                    <p style="margin: 0 0 14px; font-size: 13px; color: #166534; line-height: 1.5;">
                      Contact our Bhopal operations control center directly:
                    </p>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right: 10px; padding-bottom: 6px;">
                          <a href="https://wa.me/919755675433" target="_blank" style="display: inline-block; background-color: #059669; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);">
                            Chat on WhatsApp &rarr;
                          </a>
                        </td>
                        <td style="padding-bottom: 6px;">
                          <a href="tel:+919755675433" style="display: inline-block; background-color: #ffffff; color: #064e3b; font-size: 12px; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 8px; border: 1px solid #cbd5e1; text-transform: uppercase; letter-spacing: 0.5px;">
                            Call: +91 97556 75433
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Value Highlights -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #e2e8f0; padding-top: 18px; font-size: 12px; color: #475569;">
                <tr>
                  <td width="33%" align="center" style="padding: 6px;">
                    <div style="font-weight: 800; color: #047857; font-size: 16px;">90%</div>
                    <div>Water Conserved</div>
                  </td>
                  <td width="33%" align="center" style="padding: 6px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                    <div style="font-weight: 800; color: #047857; font-size: 16px;">7-8 Mins</div>
                    <div>Per Acre Spraying</div>
                  </td>
                  <td width="33%" align="center" style="padding: 6px;">
                    <div style="font-weight: 800; color: #047857; font-size: 16px;">400+ Acres</div>
                    <div>Daily Fleet Capacity</div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 26px 24px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.6;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin-bottom: 14px;">
                <tr>
                  <td style="padding: 0 10px;">
                    <a href="https://www.instagram.com/krishiudaan.in?obrf=MWRvaG1nZndscXBrcw==" target="_blank" style="color: #cbd5e1; text-decoration: none; font-weight: 600; font-size: 12px;">
                      Instagram &bull; @krishiudaan.in
                    </a>
                  </td>
                  <td style="color: #475569;">|</td>
                  <td style="padding: 0 10px;">
                    <a href="https://www.youtube.com/@krishi_udaan/" target="_blank" style="color: #cbd5e1; text-decoration: none; font-weight: 600; font-size: 12px;">
                      YouTube &bull; Krishi Udaan
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 6px; color: #cbd5e1; font-weight: 700;">
                Hanron Tech Innovations Pvt. Ltd. (Krishi Udaan)
              </p>
              <p style="margin: 0 0 10px; color: #64748b; font-size: 11px;">
                Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
              </p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                &copy; 2026 Krishi Udaan. All Rights Reserved. &bull; <a href="https://www.krishiudaan.in" target="_blank" style="color: #059669; text-decoration: none;">krishiudaan.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    // Dispatch both emails in parallel
    const [adminRes, customerRes] = await Promise.all([
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: senderAddress,
          to: adminRecipients,
          reply_to: `${name} <${email}>`,
          subject: `🌾 New Spraying Lead: ${name} (${acreage ? acreage + ' Acres' : 'Acreage N/A'})`,
          html: adminHtml,
        }),
      }),
      fetch('https://api.resend.com/emails', {
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
          html: customerHtml,
        }),
      })
    ]);

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
