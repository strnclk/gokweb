'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Brain, Cpu, Globe, Star, TrendingUp, Award, Clock, FileText, Activity, Layers, CheckCircle, ArrowRight, Target, Zap, Shield, Cloud, Factory } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function MikroFlyPage() {
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
    const message = 'Merhaba, Mikro FLY hakkında bilgi almak istiyorum.';
    window.location.href = `/contact?message=${encodeURIComponent(message)}&subject=teklif`;
  };

  const stats = [
    { value: '85%', label: 'Verimlilik', icon: TrendingUp },
    { value: '60%', label: 'Maliyet Düşüşü', icon: Target },
    { value: '95%', label: 'Hız', icon: Zap },
    { value: '3x', label: 'Performans', icon: Award }
  ];

  const features = [
    {
      icon: Package,
      title: 'Stok/Ürün Yönetimi',
      description: 'Stok ve ürün takibi',
      descriptionDetail: 'Depo yönetimi'
    },
    {
      icon: Landmark,
      title: 'Satış ve Müşteri Yönetimi',
      description: 'Satış süreçleri',
      descriptionDetail: 'Müşteri takibi'
    },
    {
      icon: Users,
      title: 'Satın Alma ve Tedarikçi Yönetimi',
      description: 'Satın alma süreçleri',
      descriptionDetail: 'Tedarikçi yönetimi'
    },
    {
      icon: Receipt,
      title: 'Hizmet Masraf Yönetimi',
      description: 'Hizmet ve masraf takibi',
      descriptionDetail: 'Maliyet analizi'
    },
    {
      icon: Factory,
      title: 'Üretim Yönetimi',
      description: 'Üretim süreçleri',
      descriptionDetail: 'MRP planlama'
    },
    {
      icon: Wallet,
      title: 'Genel Muhasebe ve Sabit Kıymet Yönetimi',
      description: 'Muhasebe işlemleri',
      descriptionDetail: 'Sabit kıymet takibi'
    },
    {
      icon: Users,
      title: 'Personel Yönetimi',
      description: 'Personel takibi',
      descriptionDetail: 'Bordro yönetimi'
    },
    {
      icon: Globe,
      title: 'Dış Ticaret Yönetimi',
      description: 'İthalat/İhracat',
      descriptionDetail: 'Gümrük işlemleri'
    },
    {
      icon: BarChart,
      title: 'Karar Destek ve Analiz',
      description: 'Raporlama',
      descriptionDetail: 'Dashboard'
    },
    {
      icon: TrendingUp,
      title: 'Finans Yönetimi',
      description: 'Finansal süreçler',
      descriptionDetail: 'Nakit akışı'
    },
    {
      icon: Award,
      title: 'Bütçe Yönetimi',
      description: 'Bütçe planlama',
      descriptionDetail: 'Takip ve analiz'
    },
    {
      icon: Zap,
      title: 'Ekspress Aktarım',
      description: 'Hızlı veri aktarımı',
      descriptionDetail: 'Otomasyon'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Yazılımdan Daha Fazlası',
      description: 'Yazılım bağımlılığının olmadığı, abonelik ve kiralama modeline sayesinde, düşük ilk yatırım maliyeti ile kullanmanın keyfini sunuyoruz.',
      icon: Zap
    },
    {
      number: '02',
      title: '7/24 Destek Hizmeti',
      description: 'Yaşadığınız soruna kolayca çare bulabileceğiniz bir altyapıya ve dilediğinizde bizden daima yardım alabileceğiniz destek hizmetlerine sahibiz.',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Deneyime Dayalı Güven',
      description: '25 yılın bilgi birikimi ve onlarca müşterinin kullanım deneyimi ile geliştiriyor; servislerimizi abonelerimizin ihtiyaçlarına göre şekillendiriyoruz.',
      icon: Award
    }
  ];

  const modules = [
    {
      name: 'e-Fatura',
      icon: FileText,
      description: 'Elektronik fatura kesme ve yönetim',
      features: ['Otomatik gönderim', 'Arşivleme']
    },
    {
      name: 'e-Arşiv Fatura',
      icon: Activity,
      description: 'Elektronik arşiv fatura sistemi',
      features: ['Yasal uyum', 'Güvenli depolama', 'Hızlı erişim']
    },
    {
      name: 'e-İrsaliye',
      icon: Layers,
      description: 'Elektronik irsaliye yönetimi',
      features: ['Sevkiyat takibi', 'Otomatik eşleşme', 'Raporlama']
    },
    {
      name: 'e-Defter',
      icon: BarChart,
      description: 'Elektronik defter sistemi',
      features: ['Yasal uyum', 'Otomatik kayıt', 'Yedekleme']
    },
    {
      name: 'e-Mutabakat',
      icon: CheckCircle,
      description: 'Elektronik mutabakat sistemi',
      features: ['Hızlı mutabakat', 'Otomatik eşleşme', 'Raporlama']
    },
    {
      name: 'e-Bordro',
      icon: Clock,
      description: 'Elektronik bordro sistemi',
      features: ['SGK entegrasyonu', 'Otomatik hesaplama', 'Bildirim']
    },
    {
      name: 'e-SMMM',
      icon: Star,
      description: 'SMM elektronik sistem',
      features: ['Yasal uyum', 'Otomatik bildirim', 'Takip']
    }
  ];

  const flyFaqlar = [
    {
      question: 'Mikro FLY\'ı Kimler Tercih Etmeli?',
      answer: 'Çalışan sayısı 50 ve üzeri olan, UFRS ve enflasyon muhasebesine uyum sağlamak isteyen, kurumsal yapısını daha ileri noktaya taşımak isteyen, üretim yönetiminde detaylı fiili maliyet takibi yapmayı hedefleyen, kurumsal hafıza oluşturmak isteyen işletmeler için Mikro FLY idealdir.'
    },
    {
      question: 'Mikro FLY Kullanıcı Limiti Nedir?',
      answer: 'Mikro FLY\'ta kullanıcı limiti yoktur, sınırsız kullanıcı ekleyebilirsiniz.'
    },
    {
      question: 'Mikro FLY farklı faaliyet alanı olan grup şirketlerde kullanılabilir mi?',
      answer: 'Evet, Mikro FLY farklı faaliyet alanı olan grup şirketlerde kullanılabilir.'
    },
    {
      question: 'Mikro FLY kasalarla ve yeni nesil ÖKC\'lerle veri transferi yapılabilir mi?',
      answer: 'Evet, Mikro FLY kasalarla ve yeni nesil ÖKC\'lerle veri transferi yapılabilir.'
    },
    {
      question: 'Birden fazla şirketi olan holdingler de, Mikro FLY tüm şirketlerimiz ile entegre çalışabilir mi?',
      answer: 'Evet, holdingler için Mikro FLY tüm şirketleriniz ile entegre çalışabilir.'
    },
    {
      question: 'Mikro FLY kiralama sektörüne ait bir ek çözüm var mı?',
      answer: 'Evet, Mikro FLY\'ta kiralama sektörüne özel ek çözümler mevcuttur.'
    },
    {
      question: 'Yabancı ortaklı işletmeler için Genel muhasebemizin hem VUK göre hem de UFRS\'ye göre tutmak mümkün mü?',
      answer: 'Evet, yabancı ortaklı işletmeler için Genel muhasebe hem Vergi Usul Kanunu\'na (VUK) göre hem de UFRS\'ye göre tutulabilir ve her ikisine göre raporlanabilir.'
    },
    {
      question: 'Gelişmiş / ileri seviye muhasebeye uygun çözümleriniz var mı?',
      answer: 'Evet, Mikro FLY\'ta gelişmiş ve ileri seviye muhasebeye uygun çözümler mevcuttur.'
    },
    {
      question: 'Bordro ile birlikte norm kadro planlama, işe alım ve çalışanların performans değerlendirmelerini de takip etmek mümkün mü?',
      answer: 'Evet, bordro ile birlikte norm kadro planlama, işe alım ve çalışanların performans değerlendirmelerini de takip etmek mümkündür.'
    },
    {
      question: 'Üretim yapan bir işletmede üretim sahasındaki makinelerin bakım işlemlerini takip edebilir miyiz?',
      answer: 'Evet, üretim yapan bir işletmede üretim sahasındaki makinelerin bakım işlemlerini takip edebilirsiniz.'
    },
    {
      question: 'Muhasebe verilerinin entegrasyonu için ayrıca işlem yapmamız gerekiyor mu?',
      answer: 'Hayır, Mikro FLY\'ta muhasebe verilerinin entegrasyonu için ayrıca işlem yapmanız gerekmez, otomatik entegrasyon sağlanır.'
    }
  ];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: flyFaqlar
      .filter((f) => f.answer)
      .map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 bg-white pt-32 md:pt-44 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Image 
                src="/mikro-fly-logo.png" 
                alt="Mikro FLY - Bulut Tabanlı ERP Sistemi" 
                width={128}
                height={128}
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900"
          >
            Mikro
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">FLY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"
          >
Büyük İşletmelerin Gücüne Güç Katan Çözüm Mikro Fly. En büyüklerin co-pilotu Mikro Fly ile tanışın! Hangi sektörde olursanız olun, tüm operasyonlarınızı tek bir programda kârlı ve verimli bir şekilde yönetin. Mikro Fly, büyük İşletmeler için tasarlanmış güçlü bir ticari yazılım çözümü olarak işletmenizin her adımında yanınızda. Başarıya uçuşunuzu şimdi başlatın!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors font-medium"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Fly Ana Paket</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Fly Ana pakette Neler Var?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                  <p className="text-gray-500 text-xs italic">{feature.descriptionDetail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Fly e-Dönüşüm Çözümleri</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Fly İşletmelerin dijital dönüşüm sürecinde ihtiyaç duyduğu tüm e-Dönüşüm çözümlerini tek bir platformda sunarak, iş süreçlerinizi kolaylaştırır ve hızlandırır.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 min-h-[280px] flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{module.name}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">{module.description}</p>
                  <div className="space-y-2 flex-grow">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle size={12} className="mr-2 text-blue-600" />
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

      {/* Product Showcase Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Neden <br /> Gökkuşağı Yazılım ve Danışmanlık <br /> ile Mikro Fly'a Geçmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık 25 yıllık tecrübesi ile işletmenizin tüm dijital dönüşüm süreçlerinde yanında.
              </p>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Mikro Fly Geçiş Sürecini Nasıl Yönetiyoruz:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Ön Görüşme
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Ücretsiz Analiz ve Checkup Hizmeti
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  İşletmenize En Uygun Paket Seçimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Teklif ve Teklif Onayı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Uyarlama ve Aktarım (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Detay Analiz (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Eğitim (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Proje Teslimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Uzaktan veya Yerinde Destek
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl" />
              <Image 
                src="/mikrofly.webp" 
                alt="Mikro FLY Bulut Tabanlı ERP Sistemi Ekran Görünümü" 
                width={800}
                height={600}
                className="relative w-full rounded-xl shadow-xl border border-gray-200/50" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Fly Ek Çözümler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Fly Ek Çözümler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'Mikro Fly e-Dönüşüm Çözümleri',
              'Mikro Fly Sektörel Çözümler',
              'Mikro Fly İşletme Yönetimi Çözümleri',
              'Mikro Fly Entegrasyon Çözümleri',
              'Mikro Fly İleri Seviye Üretim Yönetimi Çözümleri'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300"
              >
                <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
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
            className="bg-gradient-to-r from-blue-900 to-cyan-900 p-6 sm:p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Mikro Fly İle İlgili Detaylı Bilgi ve Sunum İçin Bize Ulaşabilirsiniz</h2>
            <p className="text-base mb-6 text-blue-100">Mikro FLY, ek çözümler ve özellikleriyle İlgili detaylı bilgi almak, demo ve sunum talep etmek İçin bizimle İletişime geçin!</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-blue-900 py-3 px-8 rounded-lg font-medium hover:bg-blue-50"
            >
              İletişime Geç
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Fly Hakkında Merak Edilenler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Fly ürünü hakkında sık sorulan soruları sizin için cevapladık.
            </p>
          </motion.div>

          <div className="space-y-4">
            {flyFaqlar.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="flex-1 text-gray-900 font-bold">{item.question}</p>
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 pl-[4.5rem] text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
