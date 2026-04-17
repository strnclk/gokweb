import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Public klasöründeki icon.png dosyasını oku
    const fs = await import('fs').then(m => m.default);
    const iconPath = './public/icon.png';
    
    // Dosyanın varlığını kontrol et
    if (!fs.existsSync(iconPath)) {
      return new NextResponse('Icon not found', { status: 404 });
    }
    
    // Icon dosyasını buffer olarak oku
    const iconBuffer = fs.readFileSync(iconPath);
    
    // Image response olarak dön
    return new NextResponse(iconBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Icon route error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
