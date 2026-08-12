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

    const payload = new URLSearchParams();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('subject', subject || 'Portfolio Contact Form');
    payload.append('message', message);
    payload.append('_subject', `New Message from ${name} (${email})`);
    payload.append('_captcha', 'false');
    payload.append('_template', 'table');

    // Send to FormSubmit with web server headers
    const response = await fetch('https://formsubmit.co/ajax/jyotiraditya20122004@gmail.com', {
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

    const data = await response.json();
    console.log('FormSubmit API Response:', data);

    const isActivationPending = data?.message?.includes('Activation');

    return NextResponse.json({
      success: data?.success === 'true' || data?.success === true,
      needsActivation: isActivationPending,
      data,
      message: isActivationPending
        ? 'Activation required: Please check your Gmail inbox (jyotiraditya20122004@gmail.com) and click "Activate Form" once to enable instant inbox delivery.'
        : 'Message delivered successfully to Jyotiraditya.'
    });
  } catch (error: any) {
    console.error('Error in send-message API:', error);
    return NextResponse.json(
      { error: 'Failed to dispatch message.', details: error?.message },
      { status: 500 }
    );
  }
}
