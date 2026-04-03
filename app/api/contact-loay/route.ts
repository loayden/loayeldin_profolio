import { NextRequest, NextResponse } from 'next/server';
import { parseContactPayload, sendContactEmail } from '@/lib/contact-email';

export async function POST(request: NextRequest) {
  try {
    const payload = parseContactPayload(await request.json());
    await sendContactEmail(payload);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error) {
      const status = error.message === 'All fields are required' || error.message === 'Invalid email address'
        ? 400
        : 500;

      return NextResponse.json(
        { error: error.message },
        { status }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
