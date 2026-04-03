import { NextRequest, NextResponse } from 'next/server';
import { parseContactPayload, sendContactEmail } from '@/lib/contact-email';

export async function POST(request: NextRequest) {
  try {
    const payload = parseContactPayload(await request.json());
    await sendContactEmail(payload);

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. I will get back to you soon.',
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
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
