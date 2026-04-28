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
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center">
              <Star size={64} className="text-white" />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-slate-900"
          >
            Öne Çıkan
            <br />
            <span className="text-slate-600">Çalışmalarımız</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Finansal Dönüşüm Projeleri - Finansal yönetim, nakit akışı ve raporlama alanında gerçekleştirdiğimiz başarılı projelerimiz
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Proje Talebi
          </motion.button>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Finansal Çözümlerimiz</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Finansal yönetim alanında sunduğumuz kapsamlı hizmetler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {financialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle size={16} className="mr-2 text-slate-500" />
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Başarı Hikayeleri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Gerçek müşterilerimiz için gerçekleştirdiğimiz başarılı projeler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{study.title}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1 text-sm">Mevcut Durum:</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1 text-sm">Çözüm:</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 text-sm">Sonuçlar:</h4>
                    <div className="space-y-1">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600 font-medium">
                          <CheckCircle size={14} className="mr-2 text-slate-500" />
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Kullandığımız Teknolojiler</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Projelerimizde kullandığımız modern teknolojiler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 text-center"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{tech.name}</h3>
                  <p className="text-slate-600 text-sm">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Finansal Dönüşüm Başlangıcı</h2>
            <p className="text-base mb-6 text-slate-300">Finansal yönetim süreçlerinizi optimize etmek için bize ulaşın</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-slate-900 py-3 px-8 rounded-lg font-medium hover:bg-slate-100"
            >
              Danışmanlık Talebi
            </motion.button>
          </motion.div>
        </div>
      </section>

    
      
      <Footer />
    </div>
  );
}
