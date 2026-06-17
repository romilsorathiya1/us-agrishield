import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, farm, subject, message } = await request.json();

    if (!name || !email || !message || !subject) {
      return Response.json(
        { success: false, error: 'Name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const subjectLine = `Contact Enquiry: ${subject} from ${name}`;

    const htmlContent = `
      <h2>New Contact Enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 12px;font-weight:700;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700;">Email</td><td style="padding:8px 12px;">${email}</td></tr>
        ${phone ? `<tr><td style="padding:8px 12px;font-weight:700;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>` : ''}
        ${farm ? `<tr><td style="padding:8px 12px;font-weight:700;">Farm / Company</td><td style="padding:8px 12px;">${farm}</td></tr>` : ''}
        <tr><td style="padding:8px 12px;font-weight:700;">Subject</td><td style="padding:8px 12px;">${subject}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700;vertical-align:top;">Message</td><td style="padding:8px 12px;">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: subjectLine,
      html: htmlContent,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json(
      { success: false, error: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
