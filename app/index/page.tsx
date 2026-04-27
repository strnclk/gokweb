'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronUp, MessageCircle, ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp, Cpu, Cloud, Database, Smartphone, Globe, Code, BarChart, Phone, Mail, MapPin, Star, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IndexPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
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
  }, []);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };
    
    // Development mode: use passive listeners and reduce scroll frequency
    const scrollOptions = isDev ? { passive: true } : { passive: true };
    
    if (isDev) {
      // In development, throttle more aggressively
      let scrollTimeout: NodeJS.Timeout;
      const devThrottledScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          throttledScroll();
        }, 100); // 100ms throttle in dev
      };
      
      window.addEventListener('scroll', devThrottledScroll, scrollOptions);
      return () => {
        clearTimeout(scrollTimeout);
        window.removeEventListener('scroll', devThrottledScroll);
      };
    } else {
      // Production: normal throttling
      window.addEventListener('scroll', throttledScroll, scrollOptions);
      return () => window.removeEventListener('scroll', throttledScroll);
    }
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = useMemo(() => [
    {
      name: 'MikroRun',
      description: 'Mikro ERP entegrasyonu için otomatik raporlama sistemi',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'MikroJump',
      description: 'E-ticaret pazaryeri entegrasyon platformu',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'MikroFly',
      description: 'Kargo ve lojistik yönetim sistemi',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    }
  ], []);

  const features = useMemo(() => [
    {
      title: 'Hızlı Entegrasyon',
      description: 'Sistemlerinize hızlı ve sorunsuz entegrasyon',
      icon: Zap
    },
    {
      title: 'Güvenli Altyapı',
      description: 'En yüksek güvenlik standartları',
      icon: Shield
    },
    {
      title: '7/24 Destek',
      description: 'Kesintisiz teknik destek hizmeti',
      icon: Users
    },
    {
      title: 'Yenilikçi Çözümler',
      description: 'Sürekli gelişen teknolojiler',
      icon: TrendingUp
    },
    {
      title: 'Özelleştirilebilir',
      description: 'İşinize özel çözümler',
      icon: Cpu
    },
    {
      title: 'Bulut Tabanlı',
      description: 'Her yerden erişim imkanı',
      icon: Cloud
    }
  ], []);

  const whatsappNumber = '905398563578';
  const email = 'satis@gokkusagiyazilim.com.tr';
  const address = 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Gökkuşağı Yazılım
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              İşletmeniz için yenilikçi yazılım çözümleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Ücretsiz Demo Talep Edin
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Ürünlerimiz
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ürünlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşletmenizi büyüten güçlü çözümler
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Detaylar <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Biz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sizi farklı kılan özelliklerimiz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hemen Başlayın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            İşletmenizi dijital çağa taşıyın
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            İletişime Geçin
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İletişim
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bizimle iletişime geçin
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telefon</h3>
              <p className="text-gray-600">{whatsappNumber}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-posta</h3>
              <p className="text-gray-600">{email}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adres</h3>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5!2d29.1!3d40.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40wNTQnMDAuMCJOIDI5wrAwNicwMC4wIkU!5e0!3m2!1str!2str!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
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
