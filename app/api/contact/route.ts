import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Şirket için e-posta içeriği
    const companyMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'cagatay.yozgatli@gokkusagiyazilim.com.tr',
      subject: `Yeni İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
            <img src="${baseUrl}/logo.png" alt="Gökkuşağı Yazılım" style="height: 60px; margin-bottom: 20px;" />
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Yeni İletişim Formu</h1>
          </div>
          <div style="background: #ffffff; padding: 40px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin: 0 0 25px 0; padding: 20px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;"><strong>Ad Soyad:</strong> ${name}</p>
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;"><strong>E-posta:</strong> ${email}</p>
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;"><strong>Telefon:</strong> ${phone}</p>
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;"><strong>Şirket:</strong> ${company || '-'}</p>
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;"><strong>Konu:</strong> ${subject}</p>
            </div>
            <div style="margin: 0; padding: 25px; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px; font-weight: 600;">Mesaj:</p>
              <p style="margin: 0; color: #555; line-height: 1.8; font-size: 15px;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
              <p style="margin: 0;">Bu e-posta Gökkuşağı Yazılım web sitesinden gönderildi.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Kullanıcıya otomatik cevap e-posta içeriği
    const autoReplyMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Mesajınız İletildi - Gökkuşağı Yazılım',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
            <img src="${baseUrl}/logo.png" alt="Gökkuşağı Yazılım" style="height: 60px; margin-bottom: 20px;" />
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Mesajınız İletildi</h1>
          </div>
          <div style="background: #ffffff; padding: 40px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="margin: 0 0 20px 0; color: #333; font-size: 16px; line-height: 1.6;">
              Sayın <strong>${name}</strong>,
            </p>
            <p style="margin: 0 0 20px 0; color: #555; font-size: 15px; line-height: 1.8;">
              Mesajınız başarıyla bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <div style="margin: 25px 0; padding: 25px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; color: #333; font-size: 15px; font-weight: 600;">Mesaj Özeti:</p>
              <p style="margin: 0 0 10px 0; color: #555; font-size: 14px;"><strong>Konu:</strong> ${subject}</p>
              <p style="margin: 0 0 10px 0; color: #555; font-size: 14px;"><strong>Şirket:</strong> ${company || '-'}</p>
              <p style="margin: 0; color: #555; font-size: 14px;"><strong>Mesaj:</strong> ${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
            </div>
            <p style="margin: 30px 0 15px 0; color: #555; font-size: 15px; line-height: 1.8;">
              Sorularınız için bize aşağıdaki bilgilerden ulaşabilirsiniz:
            </p>
            <div style="margin: 0 0 30px 0; padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; color: #333; font-size: 14px;"><strong>E-posta:</strong> cagatay.yozgatli@gokkusagiyazilim.com.tr</p>
              <p style="margin: 0 0 10px 0; color: #333; font-size: 14px;"><strong>Telefon:</strong> +90 539 856 35 78</p>
              <p style="margin: 0; color: #333; font-size: 14px;"><strong>Web Sitesi:</strong> <a href="${baseUrl}" style="color: #667eea; text-decoration: none;">${baseUrl}</a></p>
            </div>
            <div style="padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 13px;">
              <p style="margin: 0 0 10px 0;">© ${new Date().getFullYear()} Gökkuşağı Yazılım. Tüm hakları saklıdır.</p>
              <p style="margin: 0;">Bu e-posta otomatik olarak gönderilmiştir, lütfen cevaplamayınız.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Her iki e-postayı da gönder
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(autoReplyMailOptions),
    ]);

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
