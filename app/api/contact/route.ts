import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/backend/contact/controller';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await submitContactForm(body);

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
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
