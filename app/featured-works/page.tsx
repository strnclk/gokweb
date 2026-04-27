'use client';

import { TrendingUp, DollarSign, BarChart3, PieChart, FileText, Calculator, ArrowRight, Star, Award, Target, Zap, Shield, Clock, Users, Briefcase, Building, CheckCircle, AlertCircle, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FeaturedWorksPage() {
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
    const message = 'Merhaba%20%C3%96ne%20%C3%87%C4%B1kan%20%C3%87al%C4%B1%C5%9Fmalar%C4%B1m%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    { value: '500+', label: 'Başarılı Proje', icon: Award },
    { value: '95%', label: 'Müşteri Memnuniyeti', icon: Star },
    { value: '15+', label: 'Yıl Deneyim', icon: Clock },
    { value: '24/7', label: 'Destek', icon: Shield }
  ];

  const financialServices = [
    {
      icon: TrendingUp,
      title: 'İleri Seviye Finans',
      description: 'Kapsamlı finansal yönetim ve analiz çözümleri',
      features: [
        'Bütçe planlama ve kontrol',
        'Finansal raporlama',
        'Vergi yönetimi',
        'Yatırım analizi',
        'Risk değerlendirme',
        'Denetim desteği'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: DollarSign,
      title: 'Nakit Akış Yönetimi',
      description: 'Optimize edilmiş nakit akışı stratejileri ve takip',
      features: [
        'Nakit akışı projeksiyonları',
        'Ödeme planlaması',
        'Tahsilat yönetimi',
        'Banka entegrasyonu',
        'Nakit akışı analizi',
        'Likitlik yönetimi'
      ],
      color: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50'
    },
    {
      icon: BarChart3,
      title: 'Akıllı Raporlama',
      description: 'Veri odaklı karar destek sistemleri ve raporlama',
      features: [
        'Özelleştirilebilir dashboard',
        'Gerçek zamanlı veri analizi',
        'Trend analizi',
        'Performans metrikleri',
        'Otomatik raporlama',
        'Veri görselleştirme'
      ],
      color: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: PieChart,
      title: 'Finansal Strateji',
      description: 'Stratejik finansal planlama ve danışmanlık',
      features: [
        'Finansal strateji geliştirme',
        'Maliyet optimizasyonu',
        'Kârlılık analizi',
        'Yatırım planlaması',
        'Finansal modelleme',
        'Büyüme stratejileri'
      ],
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  const caseStudies = [
    {
      title: 'Lojistik Sektörü Nakit Akışı Optimizasyonu',
      industry: 'Lojistik',
      challenge: 'Düzensiz nakit akışı ve ödeme planlaması sorunları',
      solution: 'Otomatik nakit akışı yönetim sistemi ve tahsilat optimizasyonu',
      results: [
        'Nakit akışı %35 arttı',
        'Ödeme gecikmeleri %70 azaldı',
        'Müşteri memnuniyeti %25 arttı'
      ],
      icon: Target,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Perakende Finansal Raporlama Sistemi',
      industry: 'Perakende',
      challenge: 'Manuel raporlama ve veri tutarsızlıkları',
      solution: 'Entegre finansal raporlama ve dashboard sistemi',
      results: [
        'Raporlama süresi %80 azaldı',
        'Veri doğruluğu %95 arttı',
        'Karar hızı %60 arttı'
      ],
      icon: BarChart3,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Üretim Maliyet Kontrolü Projesi',
      industry: 'Üretim',
      challenge: 'Yüksek ve kontrol edilemeyen maliyetler',
      solution: 'Gerçek zamanlı maliyet takip ve analiz sistemi',
      results: [
        'Maliyetler %25 düşürüldü',
        'Kârlılık %18 arttı',
        'Verimlilik %30 arttı'
      ],
      icon: Calculator,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const technologies = [
    {
      name: 'Mikro ERP',
      description: 'Entegre ERP çözümleri',
      icon: Building
    },
    {
      name: 'Power BI',
      description: 'İş zekası ve veri analizi',
      icon: BarChart3
    },
    {
      name: 'Excel VBA',
      description: 'Özelleştirilmiş otomasyon',
      icon: FileText
    },
    {
      name: 'SQL',
      description: 'Veritabanı yönetimi',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="w-[350px] h-[350px] rounded-3xl overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-md border-2 border-white/30 p-6 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <Star size={100} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <TrendingUp size={16} className="text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-100 backdrop-blur-md rounded-full text-sm font-semibold text-blue-600 mb-4">
                  Başarı Hikayeleri
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                Öne Çıkan
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çalışmalarımız</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">Finansal Dönüşüm Projeleri</p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">Finansal yönetim, nakit akışı ve raporlama alanında gerçekleştirdiğimiz başarılı projelerimiz.</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={scrollToContact}
                className="inline-block px-12 py-5 bg-gradient-to-r from-yellow-400 to-blue-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2"
              >
                Proje Talebi
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Finansal Çözümlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finansal yönetim alanında sunduğumuz kapsamlı hizmetler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {financialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2  border border-gray-100`}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Başarı Hikayeleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gerçek müşterilerimiz için gerçekleştirdiğimiz başarılı projeler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2  border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    <Icon size={32} />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Mevcut Durum:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Çözüm:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Sonuçlar:</h4>
                    <div className="space-y-1">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-green-600 font-medium">
                          <CheckCircle size={14} className="mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Kullandığımız Teknolojiler
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projelerimizde kullandığımız modern teknolojiler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 ">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Finansal Dönüşüm
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-blue-200">
                Başlangıcnız
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Finansal yönetim süreçlerinizi optimize etmek ve kârlılığınızı artırmak için bize ulaşın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={scrollToContact}
                className="inline-block px-12 py-5 bg-white text-blue-600 font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2"
              >
                Danışmanlık Talebi
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block px-12 py-5 bg-white/20 backdrop-blur-md text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 border-2 border-white/30"
              >
                Referanslar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl hover:shadow-3xl hover:-translate-y-1 overflow-hidden z-50"
        >
          <div className="absolute inset-0 bg-white/15 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-yellow-400 via-blue-400 via-purple-400 to-indigo-400"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <span className="relative z-10 text-2xl">↑</span>
        </motion.button>
      )}
      
      <Footer />
    </div>
  );
}
