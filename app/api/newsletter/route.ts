import { NextRequest, NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/backend/newsletter/controller';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: result.message },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
