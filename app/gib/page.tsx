'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GibPage() {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        setScrollProgress((scrollPosition / scrollableHeight) * 100);
      } else {
        setScrollProgress(0);
      }
      
      setShowScrollTop(scrollPosition > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    router.back();
  };

  const statusCodes = [
    { code: '0000', status: 'Başarılı', description: 'İşlem başarıyla tamamlandı', cause: '-', solution: '-', action: '-' },
    { code: '0001', status: 'Hata', description: 'Genel hata', cause: 'Bilinmeyen bir hata oluştu', solution: 'Sistem yöneticisi ile iletişime geçin', action: 'İşlemi tekrar deneyin' },
    { code: '1001', status: 'Hata', description: 'E-Fatura numarası format hatası', cause: 'E-Fatura numarası doğru formatta değil', solution: 'E-Fatura numarasını kontrol edin', action: 'Doğru formatta girin' },
    { code: '1002', status: 'Hata', description: 'VKN/TC kimlik no hatalı', cause: 'Vergi numarası veya TC kimlik no hatalı', solution: 'VKN/TC no kontrol edin', action: 'Doğru numarayı girin' },
    { code: '1003', status: 'Hata', description: 'Tarih format hatası', cause: 'Tarih formatı doğru değil', solution: 'Tarih formatını kontrol edin', action: 'DD.MM.YYYY formatında girin' },
    { code: '2001', status: 'Uyarı', description: 'Mükellef bulunamadı', cause: 'Girilen VKN/TC no sistemde kayıtlı değil', solution: 'VKN/TC no doğruluğunu kontrol edin', action: 'Kayıt oluşturun' },
    { code: '2002', status: 'Uyarı', description: 'E-Fatura mükellefi değil', cause: 'Mükellef E-Fatura sistemine kayıtlı değil', solution: 'E-Fatura başvurusu yapın', action: 'GİB portalına başvurun' },
    { code: '3001', status: 'Hata', description: 'İmza doğrulama hatası', cause: 'İmza geçersiz veya süresi dolmuş', solution: 'İmza sertifikasını yenileyin', action: 'Yeni sertifika alın' },
    { code: '3002', status: 'Hata', description: 'Sertifika hatası', cause: 'Sertifika geçersiz', solution: 'Sertifika doğruluğunu kontrol edin', action: 'Geçerli sertifika kullanın' },
    { code: '4001', status: 'Hata', description: 'Ağ hatası', cause: 'İnternet bağlantısı sorunu', solution: 'İnternet bağlantısını kontrol edin', action: 'Bağlantıyı yenileyin' },
    { code: '4002', status: 'Hata', description: 'Zaman aşımı', cause: 'İstek zaman aşımına uğradı', solution: 'İsteği tekrar gönderin', action: 'Daha sonra tekrar deneyin' },
    { code: '5001', status: 'Hata', description: 'Yetki hatası', cause: 'Yetersiz yetki', solution: 'Gerekli izinleri alın', action: 'Yönetici ile iletişime geçin' },
    { code: '5002', status: 'Hata', description: 'Oturum süresi doldu', cause: 'Oturum zaman aşımı', solution: 'Tekrar giriş yapın', action: 'Giriş ekranına dönün' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Geri Dön
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          GİB Durum Kodları
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          GİB entegrasyonunda kullanılan durum kodları ve açıklamaları
        </p>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Kod</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durum</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Açıklama</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sebep</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Çözüm</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Yapılacak İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {statusCodes.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-900">{item.code}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Başarılı' ? 'bg-green-100 text-green-800' :
                        item.status === 'Hata' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.cause}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.solution}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/15 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-red-400 via-yellow-400 via-sky-400 via-pink-400 to-blue-400 transition-all duration-200"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <ChevronUp className="w-6 h-6 relative z-10" />
        </button>
      )}
      
      <Footer />
    </div>
  );
}
