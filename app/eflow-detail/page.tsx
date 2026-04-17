'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Globe, BarChart, Smartphone, Database, FileText, Clock, Target, Award, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EFlowDetailPage() {
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

  const features = [
    {
      title: 'Otomatik Fatura Oluşturma',
      description: 'Mikro ERP sisteminden otomatik fatura oluşturma',
      icon: Zap
    },
    {
      title: 'GİB Entegrasyonu',
      description: 'Gelir İdaresi Başkanlığı ile tam entegrasyon',
      icon: Globe
    },
    {
      title: 'Gerçek Zamanlı Takip',
      description: 'Tüm fatura işlemlerini anlık takip',
      icon: TrendingUp
    },
    {
      title: 'Raporlama',
      description: 'Detaylı fatura ve raporlama özellikleri',
      icon: BarChart
    },
    {
      title: 'Mobil Uygulama',
      description: 'iOS ve Android mobil uygulama desteği',
      icon: Smartphone
    },
    {
      title: 'Veri Güvenliği',
      description: '256-bit SSL şifreleme ile veri güvenliği',
      icon: Shield
    }
  ];

  const marketplaces = [
    { name: 'Trendyol', status: 'Aktif' },
    { name: 'Hepsiburada', status: 'Aktif' },
    { name: 'N11', status: 'Aktif' },
    { name: 'Amazon TR', status: 'Yakında' },
    { name: 'Migros', status: 'Aktif' },
    { name: 'A101', status: 'Yakında' }
  ];

  const benefits = [
    'Sürekli uyumluluk',
    'Otomasyon',
    'Zaman tasarrufu',
    'Hata azaltma',
    'Maliyet düşürme',
    'Hızlı işlem'
  ];

  const process = [
    { step: '01', title: 'Kurulum', description: 'Hızlı ve kolay kurulum süreci' },
    { step: '02', title: 'Entegrasyon', description: 'Mikro ERP ile entegrasyon' },
    { step: '03', title: 'Test', description: 'Test ortamında deneme' },
    { step: '04', title: 'Canlıya Geçiş', description: 'Canlı sisteme geçiş' }
  ];

  const whatsappNumber = '905398563578';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              E-Flow Detay
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Mikro ERP entegrasyonlu e-fatura yönetim sisteminin tüm özellikleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Ücretsiz Demo Talep Edin
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Özellikleri İnceleyin
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Özellikler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              E-Flow'un güçlü özellikleri
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplaces Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desteklenen Pazaryerleri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tüm popüler pazaryerleri ile entegrasyon
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaces.map((mp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">{mp.name}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  mp.status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {mp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faydalar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşletmenize sağladığımız avantajlar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Çalışma Süreci
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adım adım kurulum süreci
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            E-Flow ile Tanışın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            E-fatura işlemlerinizi kolaylaştırın
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Ücretsiz Demo Alın
          </button>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
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
    </div>
  );
}
