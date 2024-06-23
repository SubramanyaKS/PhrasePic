import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../utils/fetch';
import { rateLimiter } from '../../utils/ratelimit';
import { blobToBase64 } from '@/app/utils/blob';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ message: 'Text is required' }, { status: 400 });
    }

    // Get the client IP address
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '';

    // Consume 1 point for each request from the IP address
    await rateLimiter.consume(ip.toString());

    const response = await query(text);
    const base64Image = await blobToBase64(response);

    return NextResponse.json({ imageUrl: base64Image }, { status: 200 });
  } catch (error: any) {
    if (error instanceof Error && error.name === 'RateLimiterRes') {
      return NextResponse.json({ message: 'Too many requests, please try again later.' }, { status: 429 });
    }

    // console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
