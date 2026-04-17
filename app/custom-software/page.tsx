'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle, ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp, Cpu, Code, Database, Smartphone, Globe, BarChart, FileText, Target, Award, Cloud } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GravityParticles from '@/components/GravityParticles';

export default function CustomSoftwarePage() {
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
      title: 'Web Geliştirme',
      description: 'Modern ve performanslı web uygulamaları',
      icon: Globe
    },
    {
      title: 'Mobil Uygulama',
      description: 'iOS ve Android uygulamaları',
      icon: Smartphone
    },
    {
      title: 'Masaüstü Yazılım',
      description: 'Windows ve macOS uygulamaları',
      icon: Cpu
    },
    {
      title: 'API Entegrasyonu',
      description: 'Üçüncü parti servis entegrasyonları',
      icon: Code
    },
    {
      title: 'Veritabanı Tasarımı',
      description: 'Ölçeklenebilir veritabanı mimarisi',
      icon: Database
    },
    {
      title: 'Bulut Çözümleri',
      description: 'AWS, Azure, Google Cloud entegrasyonu',
      icon: Cloud
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'C#', 'Java', 'Go', 'PHP']
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite']
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'AWS', 'Azure']
    }
  ];

  const process = [
    { step: '01', title: 'Analiz', description: 'İhtiyaçlarınızı analiz ediyoruz' },
    { step: '02', title: 'Tasarım', description: 'UX/UI tasarımı yapıyoruz' },
    { step: '03', title: 'Geliştirme', description: 'Kodlama ve geliştirme süreci' },
    { step: '04', title: 'Test', description: 'Kapsamlı testler yapıyoruz' },
    { step: '05', title: 'Yayın', description: 'Canlıya alıyoruz' },
    { step: '06', title: 'Destek', description: 'Sürekli destek sağlıyoruz' }
  ];

  const benefits = [
    'Özelleştirilmiş çözümler',
    'Ölçeklenebilir mimari',
    'Güvenli kodlama',
    'Hızlı teslimat',
    'Sürekli destek',
    'Rekabet avantajı'
  ];

  const whatsappNumber = '905398563578';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <GravityParticles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Özel Yazılım Çözümleri
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Projenizi Konuşalım
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Referanslar
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
              Kapsamlı yazılım geliştirme hizmetleri
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Teknolojiler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En güncel teknolojileri kullanıyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Geliştirme Süreci
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adım adım projenizi gerçekleştiriyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
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
              Neden Özel Yazılım?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              İşletmenize sağladığımız avantajlar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg font-semibold">{benefit}</span>
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
            Özel yazılım çözümleri için uzman ekibimizle tanışın
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
