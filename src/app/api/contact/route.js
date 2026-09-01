import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, farm, subject, product, message } = await request.json();

    if (!name || !email || !message || !subject) {
      return Response.json(
        { success: false, error: 'Name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host:  'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "usagrishield02@gmail.com",
        pass: "iiyzdydzgelutiey",
      },
    });

    const subjectLabel = product ? `${subject} - ${product}` : subject;
    const subjectLine = `Contact Enquiry: ${subjectLabel} from ${name}`;

    const htmlContent = `
      <h2>New Contact Enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 12px;font-weight:700;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700;">Email</td><td style="padding:8px 12px;">${email}</td></tr>
        ${phone ? `<tr><td style="padding:8px 12px;font-weight:700;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>` : ''}
        ${farm ? `<tr><td style="padding:8px 12px;font-weight:700;">Farm / Company</td><td style="padding:8px 12px;">${farm}</td></tr>` : ''}
        <tr><td style="padding:8px 12px;font-weight:700;">Subject</td><td style="padding:8px 12px;">${subject}</td></tr>
        ${product ? `<tr><td style="padding:8px 12px;font-weight:700;">Product</td><td style="padding:8px 12px;">${product}</td></tr>` : ''}
        <tr><td style="padding:8px 12px;font-weight:700;vertical-align:top;">Message</td><td style="padding:8px 12px;">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"Contact Form" <usagrishield02@gmail.com>`,
      to: "usagrishield02@gmail.com",
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
