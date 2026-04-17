'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle, ArrowRight, CheckCircle, Target, Users, TrendingUp, Shield, Zap, Brain, Cpu, Database, Cloud, Lock, FileText, BarChart, Clock, DollarSign, Star, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ITConsultingPage() {
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

  const services = [
    {
      title: 'Stratejik IT Planlama',
      description: 'İş hedeflerinize uygun IT stratejileri geliştiriyoruz.',
      icon: Target
    },
    {
      title: 'Dijital Dönüşüm',
      description: 'İş süreçlerinizi dijital çağa taşıyoruz.',
      icon: TrendingUp
    },
    {
      title: 'Siber Güvenlik',
      description: 'Verilerinizi ve sistemlerinizi koruyoruz.',
      icon: Shield
    },
    {
      title: 'Bulut Çözümleri',
      description: 'Bulut altyapıları optimize ediyoruz.',
      icon: Cloud
    },
    {
      title: 'Sistem Entegrasyonu',
      description: 'Sistemlerinizi entegre ve verimli hale getiriyoruz.',
      icon: Zap
    },
    {
      title: 'Veri Analitiği',
      description: 'Verilerinizi iş zekasına dönüştürüyoruz.',
      icon: BarChart
    }
  ];

  const expertise = [
    {
      title: 'Yazılım Mimarisi',
      items: ['Microservices', 'Monolith', 'Serverless', 'Event-Driven']
    },
    {
      title: 'Veritabanı',
      items: ['SQL', 'NoSQL', 'Graph DB', 'Time Series']
    },
    {
      title: 'DevOps',
      items: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Frontend',
      items: ['React', 'Vue', 'Angular', 'Next.js']
    }
  ];

  const benefits = [
    'Maliyet tasarrufu',
    'Operasyonel verimlilik',
    'Rekabet avantajı',
    'Risk azaltma',
    'İnovasyon',
    'Uzun vadeli sürdürülebilirlik'
  ];

  const whatsappNumber = '905398563578';
  const email = 'satis@gokkusagiyazilim.com.tr';
  const address = 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              IT Danışmanlığı
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              İşletmenizin dijital dönüşümünde güvenilir ortağınız
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Hemen İletişime Geçin
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Hizmetlerimiz
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel kapsamlı IT çözümleri
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
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
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adım adım başarıya giden yol
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analiz', description: 'Mevcut durumunuzu detaylı analiz ediyoruz' },
              { step: '02', title: 'Planlama', description: 'Özel çözüm stratejileri geliştiriyoruz' },
              { step: '03', title: 'Uygulama', description: 'Planı profesyonelce uyguluyoruz' },
              { step: '04', title: 'Destek', description: 'Sürekli destek ve optimizasyon sağlıyoruz' }
            ].map((item, index) => (
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

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uzmanlık Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En güncel teknolojilerle çözümler sunuyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {exp.title}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden Biz?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              İşletmenize değer katan çözümler
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <p className="text-lg font-semibold">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Projenizi Konuşalım
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            IT ihtiyaçlarınız için uzman ekibimizle tanışın
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
            Ücretsiz Danışmanlık Alın
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
