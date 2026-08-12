import { NextResponse } from 'next/server';

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

    const targetPhone = "9625188029";
    const formattedSmsText = `SMS Alert from Portfolio:\nFrom: ${name} (${email})\nSubject: ${subject || 'Inquiry'}\nMessage: ${message}`;

    // Send SMS via Fast2SMS / Gateway if API key is provided
    const FAST2SMS_API_KEY = process.env.FAST2SMS_API_KEY;
    let smsDispatched = false;

    if (FAST2SMS_API_KEY) {
      try {
        const smsRes = await fetch('https://www.fast2sms.com/dev/bulkV2', {
          method: 'POST',
          headers: {
            'authorization': FAST2SMS_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            route: 'v3',
            sender_id: 'TXTIND',
            message: formattedSmsText.substring(0, 160),
            language: 'english',
            flash: 0,
            numbers: targetPhone
          })
        });
        const smsData = await smsRes.json();
        if (smsData.return) {
          smsDispatched = true;
        }
      } catch (smsErr) {
        console.error('SMS Gateway Error:', smsErr);
      }
    }

    // Forward to FormSubmit for instant email backup delivery
    const payload = new URLSearchParams();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('subject', subject || 'SMS Lead from Portfolio');
    payload.append('message', `[DIRECT SMS DISPATCH TO +91 ${targetPhone}]\n\n${formattedSmsText}`);
    payload.append('_subject', `Direct SMS Message from ${name} (${email})`);
    payload.append('_captcha', 'false');
    payload.append('_template', 'table');

    const emailResponse = await fetch('https://formsubmit.co/ajax/jyotiraditya20122004@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        'Origin': 'https://jyotiraditya-portfolio.vercel.app',
        'Referer': 'https://jyotiraditya-portfolio.vercel.app/'
      },
      body: payload.toString(),
    });

    const emailData = await emailResponse.json();
    const isActivationPending = emailData?.message?.includes('Activation');

    return NextResponse.json({
      success: true,
      smsDispatched,
      needsActivation: isActivationPending,
      message: `Message sent directly via SMS and email to Jyotiraditya (+91 ${targetPhone})!`
    });
  } catch (error: any) {
    console.error('Error in send-message API:', error);
    return NextResponse.json(
      { error: 'Failed to send direct SMS message.', details: error?.message },
      { status: 500 }
    );
  }
}
