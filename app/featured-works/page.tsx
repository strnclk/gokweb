'use client';

import { TrendingUp, DollarSign, BarChart3, PieChart, Calculator, ArrowRight, Star, Award, Target, Zap, Shield, Clock, Users, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sssFeatured = [
  { soru: 'Hangi alanlarda projeler gerçekleştiriyorsunuz?', cevap: 'Finansal yönetim, nakit akışı, raporlama ve ERP entegrasyonu başta olmak üzere işletmelerin dijitalleşme ihtiyaçlarına yönelik projeler gerçekleştiriyoruz.' },
  { soru: 'Kaç yıllık deneyime ve kaç projeye sahipsiniz?', cevap: '20+ yıllık sektör deneyimimizle 500’den fazla başarılı proje tamamladık; müşteri memnuniyet oranımız %95 seviyesindedir.' },
  { soru: 'Referans paylaşıyor musunuz?', cevap: 'Evet. Bizimle iletişime geçtiğinizde sektörünüze ve ihtiyacınıza uygun referanslarımızı paylaşabiliriz.' },
  { soru: 'Bize özel bir çözüm geliştirir misiniz?', cevap: 'Evet. Standart çözümlerin ötesinde, işletmenize özel yazılım ve Mikro entegrasyonları geliştiriyoruz.' },
];

const faqJsonLdFeatured = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sssFeatured.map((f) => ({ '@type': 'Question', name: f.soru, acceptedAnswer: { '@type': 'Answer', text: f.cevap } })),
};

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
    { value: '20+', label: 'Yıl Deneyim', icon: Clock },
    { value: 'Uzman', label: 'Destek', icon: Shield }
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
        'Nakit akışı %85 arttı',
        'Ödeme gecikmeleri %70 azaldı',
        'Müşteri memnuniyeti %95 arttı'
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
        'Karar hızı %90 arttı'
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
        'Kârlılık %78 arttı',
        'Verimlilik %80 arttı'
      ],
      icon: Calculator,
      color: 'from-purple-500 to-pink-600'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdFeatured) }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden bg-white pt-32 md:pt-44 pb-20 md:pb-28">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-purple-100 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
              >
                <Star size={14} />
                Öne Çıkan Çalışmalar
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900"
              >
                Öne Çıkan
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Çalışmalarımız</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl leading-relaxed"
              >
                Finansal yönetim, nakit akışı ve raporlama alanında gerçekleştirdiğimiz başarılı projelerimizle işletmenizi dijitalleştirin
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <button
                  onClick={scrollToContact}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-xl hover:from-blue-800 hover:to-purple-800 font-medium shadow-xl"
                >
                  Proje Talebi
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white border border-blue-300 text-gray-900 rounded-xl hover:bg-blue-50 font-medium"
                >
                  Daha Fazla Bilgi
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <stat.icon size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 border border-blue-200 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">Finansal Raporlama</div>
                      <div className="text-gray-500 text-sm">Proje Özeti</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 text-sm">Kârlılık Artışı</span>
                        <span className="text-emerald-600 font-bold">+85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 text-sm">Verimlilik</span>
                        <span className="text-purple-600 font-bold">+96%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '96%' }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 text-sm">Müşteri Memnuniyeti</span>
                        <span className="text-blue-600 font-bold">+82%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '82%' }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 shadow-xl"
                >
                  <div className="text-white font-bold text-lg">+500</div>
                  <div className="text-white/80 text-xs">Proje</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-blue-200"
                >
                  <div className="text-gray-900 font-bold text-lg">95%</div>
                  <div className="text-gray-500 text-xs">Memnuniyet</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="py-12 sm:py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Finansal Çözümlerimiz</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Finansal yönetim alanında sunduğumuz kapsamlı hizmetler
            </p>
          </motion.div>
          
          <div className="flex flex-col gap-6">
            {financialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl border border-blue-200 hover:border-blue-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                      <Icon size={32} className="text-blue-700 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle size={14} className="mr-2 text-blue-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Başarı Hikayeleri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Gerçek müşterilerimiz için gerçekleştirdiğimiz başarılı projeler
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-blue-200 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-2">
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
                          <CheckCircle size={14} className="mr-2 text-blue-500" />
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


      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 sm:p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Finansal Dönüşüm Başlangıcı</h2>
            <p className="text-base mb-6 text-slate-300">Finansal yönetim süreçlerinizi optimize etmek için bize ulaşın</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-blue-900 py-3 px-8 rounded-lg font-medium hover:bg-blue-100"
            >
              Danışmanlık Talebi
            </motion.button>
          </motion.div>
        </div>
      </section>

    
      
      {/* SSS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {sssFeatured.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-500 mr-1">İlgili:</span>
            {[
              { etiket: 'Hizmetler', href: '/services' },
              { etiket: 'Özel Yazılım', href: '/custom-software' },
              { etiket: 'İletişim', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-blue-300 transition-colors">
                {b.etiket}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
