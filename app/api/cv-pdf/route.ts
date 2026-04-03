import { NextResponse } from 'next/server';
import { buildCvPdf } from '@/lib/cv-pdf';

export const runtime = 'nodejs';

export async function GET() {
  const pdf = buildCvPdf();

  return new NextResponse(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Loay-Eldin-CV.pdf"',
      'Cache-Control': 'no-store',
    },
  });
}
