'use client';

import { useState, useEffect } from 'react';
import { Settings, Building, Landmark, FileText, Users, Zap, Building2, Info, ChevronUp, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SolutionsPage() {
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

  const openWhatsApp = () => {
    const message = 'Merhaba%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 via-red-500 to-indigo-600 min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Gökkuşağı Çözümleri</h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-8">İşletmeniz için özel yazılım ve entegrasyon çözümleri</p>
              <Link href="/gib" className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-teal-400 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                GİB DURUM KODLARINI İNCELE
              </Link>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 animate-float">
                <Settings size={40} />
              </div>
              <div className="absolute top-[30%] right-[20%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 animate-float-delay-1">
                <Building size={40} />
              </div>
              <div className="absolute bottom-[20%] left-[30%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 animate-float-delay-2">
                <Landmark size={40} />
              </div>
              <div className="absolute bottom-[10%] right-[10%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 animate-float-delay-3">
                <FileText size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Çözümlerimiz
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">CRM</h3>
              <p className="text-gray-600 mb-6">Müşteri ilişkileri yönetimi sistemi ile müşteri portföyünüzü etkili bir şekilde yönetin, satış süreçlerinizi optimize edin.</p>
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3">Özellikler:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Müşteri veritabanı yönetimi</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Satış fırsatları takibi</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Pazarlama otomasyonu</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Müşteri segmentasyonu</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Raporlama ve analiz</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Mobil uyumlu arayüz</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Zap size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">BPM</h3>
              <p className="text-gray-600 mb-6">İş süreci yönetimi ile iş akışlarınızı standartlaştırın, verimliliği artırın ve maliyetleri düşürün.</p>
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3">Özellikler:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>İş akışı tasarımı ve otomasyonu</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Süreç haritalama</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Performans izleme</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Belge yönetimi</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Onay süreçleri</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Entegrasyon yetenekleri</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Building2 size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">ERP</h3>
              <p className="text-gray-600 mb-6">Kurumsal kaynak planlama sistemi ile tüm iş süreçlerinizi entegre edin ve yönetimi merkezi hale getirin.</p>
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3">Özellikler:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Finansal yönetim</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Envanter ve tedarik zinciri</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>İnsan kaynakları yönetimi</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Üretim planlama</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Proje yönetimi</li>
                  <li className="flex items-start"><span className="text-pink-400 font-bold mr-2">✓</span>Gerçek zamanlı veri analizi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Banka Bilgilerimiz</h2>
          <div className="grid md:grid-cols-1 gap-8 mb-10">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-3xl flex gap-6 items-start hover:-translate-y-1 transition-all duration-300 border border-gray-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Landmark size={36} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Garanti BBVA</h4>
                <p className="text-gray-600 mb-2"><strong>Şube:</strong> Üst Bostancı Şubesi</p>
                <p className="text-gray-600 mb-2"><strong>IBAN (TL):</strong> TR37 0006 2000 3550 0006 2955 15</p>
                <p className="text-gray-600"><strong>IBAN (USD):</strong> TRT1 0006 2000 3560 0009 0792 04</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl flex items-center gap-6 max-w-3xl mx-auto mb-10">
            <Info size={24} className="flex-shrink-0" />
            <p className="text-base leading-relaxed">Ödemelerinizde açıklama bölümüne firmanızın vergi kimlik numarasını ve fatura numarasını yazmanız önemle rica olunur.</p>
          </div>

          <div className="text-center">
            <button onClick={openWhatsApp} className="inline-block px-12 py-5 bg-gradient-to-r from-green-500 to-teal-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Satış Ekibimiz ile İletişime Geçin
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send?phone=905398563578&text=Merhaba%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay-1 { animation: float 6s ease-in-out infinite 1s; }
        .animate-float-delay-2 { animation: float 6s ease-in-out infinite 2s; }
        .animate-float-delay-3 { animation: float 6s ease-in-out infinite 3s; }
      `}</style>
    </div>
  );
}
