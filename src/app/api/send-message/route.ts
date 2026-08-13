import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || process.env.SMTP_EMAIL || process.env.GMAIL_USER || "jyotiraditya20122004@gmail.com";
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD || "";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");

    let emailSent = false;
    let emailError: string | null = null;

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailOptions = {
          from: `"${name}" <${smtpUser}>`,
          replyTo: email,
          to: "jyotiraditya20122004@gmail.com",
          subject: subject ? `[Portfolio Contact] ${subject}` : `New Message from ${name}`,
          text: `New Portfolio Message:\n\nFrom: ${name} (${email})\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
              <h2 style="color: #0284c7; margin-bottom: 10px;">New Portfolio Contact Message</h2>
              <hr style="border: none; border-top: 1px solid #cbd5e1; margin-bottom: 20px;" />
              <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
              <h3 style="color: #1e293b; margin-top: 20px; margin-bottom: 8px;">Message:</h3>
              <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #0284c7; border-radius: 4px; white-space: pre-wrap; font-size: 14px; color: #334155;">
                ${message}
              </div>
              <footer style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
                Sent via Jyotiraditya's Generative AI Portfolio Contact Form
              </footer>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (err: any) {
        console.error("Nodemailer SMTP Error:", err);
        emailError = err?.message || 'SMTP authentication failed.';
      }
    }

    // Optional SMS alert via Fast2SMS if API key is present
    const FAST2SMS_API_KEY = process.env.FAST2SMS_API_KEY;
    let smsDispatched = false;
    if (FAST2SMS_API_KEY) {
      try {
        const targetPhone = "9625188029";
        const formattedSmsText = `Portfolio Alert: From ${name} (${email}) - ${subject || 'Inquiry'}: ${message}`;
        await fetch('https://www.fast2sms.com/dev/bulkV2', {
          method: 'POST',
          headers: {
            'authorization': FAST2SMS_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            route: 'v3',
            sender_id: 'TXTIND',
            message: formattedSmsText.substring(0, 160),
            numbers: targetPhone
          })
        });
        smsDispatched = true;
      } catch (smsErr) {
        console.error('SMS Error:', smsErr);
      }
    }

    if (!emailSent && !smtpPass) {
      return NextResponse.json({
        success: false,
        requiresSmtpPass: true,
        error: "SMTP Credentials Missing: Please set SMTP_PASS (or GMAIL_APP_PASSWORD) in .env.local to enable direct Gmail SMTP sending."
      }, { status: 400 });
    }

    if (!emailSent && emailError) {
      return NextResponse.json({
        success: false,
        error: `Gmail SMTP Error: ${emailError}`
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      smsDispatched,
      message: "Your message has been sent directly to Jyotiraditya's Gmail inbox via Gmail SMTP!"
    });
  } catch (error: any) {
    console.error('Error in send-message API:', error);
    return NextResponse.json(
      { error: 'Failed to send message.', details: error?.message },
      { status: 500 }
    );
  }
}

