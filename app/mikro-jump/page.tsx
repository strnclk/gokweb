'use client';

import { Landmark, Package, Receipt, BarChart, Users, Factory, Brain, Sparkles, TrendingUp, Cloud, Smartphone, Shield, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MikroJumpPage() {
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

  const scrollToContact = () => {
    const message = 'Merhaba%20Mikro%20JUMP%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400 min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-md border-2 border-white/30 p-4">
                <img src="/mikro-jump-logo.png" alt="Mikro JUMP" className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Mikro JUMP</h1>
              <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">Gelişmiş özellikli kapsamlı muhasebe çözümü</p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">Büyük ölçekli işletmeler için tasarlanmış, en kapsamlı muhasebe ve yönetim sistemi.</p>
              <button onClick={scrollToContact} className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-teal-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Özellikler
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Landmark size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Kapsamlı Muhasebe</h3>
              <p className="text-gray-600">En gelişmiş muhasebe modülleri ve özellikler</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Package size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">İleri Düzey Stok</h3>
              <p className="text-gray-600">Çoklu depo, seri no, lot, son kullanma tarihi takibi</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Receipt size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">e-Dönüşüm</h3>
              <p className="text-gray-600">e-Fatura, e-Arşiv, e-Defter, e-Müstahsil</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <BarChart size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Analiz</h3>
              <p className="text-gray-600">Yapay zeka destekli analiz ve öngörü</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Users size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">İK Modülü</h3>
              <p className="text-gray-600">Personel takibi, bordro, izin yönetimi</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Factory size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Üretim</h3>
              <p className="text-gray-600">Üretim planlama, maliyet hesaplama, kalite kontrol</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Yapay Zeka Özellikleri
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex items-center gap-8 p-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Brain size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Zeki Öngörü</h3>
                <p className="text-gray-600">Satış tahminleri, nakit akışı projeksiyonları</p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Sparkles size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Otomatik Analiz</h3>
                <p className="text-gray-600">Finansal verilerin otomatik analizi ve raporlama</p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <TrendingUp size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Stratejik Öneriler</h3>
                <p className="text-gray-600">İşletme gelişimi için AI destekli öneriler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Teknoloji Avantajları
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Cloud size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Bulut Tabanlı</h3>
              <p className="text-gray-600">Her yerden erişim, otomatik yedekleme</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Smartphone size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Çoklu Platform</h3>
              <p className="text-gray-600">Windows, Mac, Linux, iOS, Android uyumlu</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Güvenlik</h3>
              <p className="text-gray-600">En üst düzey veri güvenliği ve şifreleme</p>
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <RefreshCw size={48} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Gerçek Zamanlı</h3>
              <p className="text-gray-600">Anlık veri senkronizasyonu ve güncelleme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Neden Mikro JUMP?
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">01</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">En Kapsamlı</h3>
                <p className="text-gray-600">Tüm iş süreçlerinizi yönetebileceğiniz tek çözüm</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">02</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Geleceğe Hazır</h3>
                <p className="text-gray-600">Yapay zeka ile geleceğin teknolojisini bugün kullanın</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">03</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Esnek ve Ölçeklenebilir</h3>
                <p className="text-gray-600">İşletmenizle birlikte büyüyen sistem</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">04</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">7/24 Destek</h3>
                <p className="text-gray-600">Kesintisiz teknik destek ve danışmanlık hizmeti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mikro JUMP ile Tanışın</h2>
          <p className="text-xl text-white/90 mb-10">İşletmenizi geleceğe taşıyın</p>
          <button onClick={scrollToContact} className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-teal-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Teklif Al
          </button>
        </div>
      </section>

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
          <span className="relative z-10 text-2xl">↑</span>
        </button>
      )}
      
      <Footer />
    </div>
  );
}
