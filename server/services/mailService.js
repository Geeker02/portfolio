import nodemailer from 'nodemailer';

const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass || pass === 'your_app_password_here') {
    return null; // Signals development/fallback mode
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });
};

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();
  const receiverEmail = process.env.RECEIVER_EMAIL || 'jaydeepjogdand@gmail.com';

  if (!transporter) {
    console.log('\n================ [CONTACT SUBMISSION (DEV MODE)] ================');
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message:`);
    console.log(message);
    console.log('=================================================================\n');

    return {
      success: true,
      mode: 'mock',
      message: 'Message successfully dispatched (development mode logged to console).'
    };
  }

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    replyTo: `"${name}" <${email}>`,
    to: receiverEmail,
    subject: `[Portfolio Contact] ${subject} - from ${name}`,
    text: `You have received a new contact submission from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nDispatched from Jaydeep Jogdand Portfolio REST API`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Portfolio Contact Message</h2>
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
        </div>
        <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; color: #64748b;">This notification was dispatched securely via Jaydeep Jogdand's Full-Stack Portfolio backend on Render.</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);

  return {
    success: true,
    mode: 'live',
    message: 'Message successfully dispatched.'
  };
};
