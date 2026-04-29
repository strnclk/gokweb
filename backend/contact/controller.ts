// Contact form submission controller
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string; error?: string }> {
  // Validation
  if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
    return { success: false, error: 'Tüm zorunlu alanları doldurun', message: '' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Geçersiz e-posta adresi', message: '' };
  }

  if (data.phone.length < 10) {
    return { success: false, error: 'Geçersiz telefon numarası', message: '' };
  }

  try {
    // TODO: Veritabanına kaydetme veya e-posta gönderme
    // Başlangıç için sadece log
    const submission = {
      ...data,
      submittedAt: new Date()
    };

    console.log('Contact form submission:', submission);
    
    // TODO: Gerçek veritabanına kaydet veya e-posta gönder
    // Örneğin: Nodemailer ile e-posta gönderme
    // veya veritabanına kaydetme

    return { 
      success: true, 
      message: 'Mesajınız başarıyla gönderildi' 
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { 
      success: false, 
      error: 'Bir hata oluştu', 
      message: '' 
    };
  }
}
