'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Building2, Factory, ShoppingCart, Truck, Users, Briefcase, Sparkles, Target, Zap, Shield, TrendingUp, CheckCircle2, ChevronLeft, ChevronRight, UtensilsCrossed, Cloud, Package, Store, Smartphone, BarChart3 } from 'lucide-react';

export default function VerticalSolutionsPage() {
  const scrollToContact = () => {
    const message = 'Merhaba%20Dikey%20Çözümler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Mikro iş ortağı dikey çözümleri — her kart bir ürünü temsil eder,
  // mavi hover kutusu (valueProp) çözümü sunan firmayı belirtir.
  const industries = [
    {
      icon: ShoppingCart,
      name: 'Fastsell Hızlı Satış',
      description: 'Büfeden markete tüm perakende noktalarında satış, stok ve muhasebe işlemlerini tek platformdan yönetmenizi sağlar.',
      color: 'from-blue-600 to-blue-700',
      tab: 'fastsell-hizli-satis',
      features: ['Dokunmatik Hızlı Satış', 'e-Fatura & e-Arşiv', 'Online/Offline Çalışma'],
      valueProp: 'Favorim Bilişim imzalı Fastsell ile büfeden markete satış, stok ve dövizli tahsilat tek ekranda.'
    },
    {
      icon: Store,
      name: 'Mizan Hızlı Satış',
      description: 'Yazarkasa, banka ve VUK 507 uyumuyla mağaza ve marketlerde mevzuata uygun, hızlı ve güvenli satış süreci sunar.',
      color: 'from-blue-600 to-blue-700',
      tab: 'mizan-hizli-satis',
      features: ['Yazarkasa & Banka Uyumu', 'Kampanya Yönetimi', 'Çoklu Döviz Tahsilat'],
      valueProp: 'Mizan Yazılım çözümüyle mağaza ve marketlerde yazarkasa ve banka entegrasyonlu, mevzuata uyumlu hızlı satış.'
    },
    {
      icon: Cloud,
      name: 'Corbiq Cloud Üretim',
      description: 'Kurulum gerektirmeyen bulut altyapısıyla üretim planlamayı ve sahadan anlık veri toplamayı tek platformda birleştirir.',
      color: 'from-blue-600 to-blue-700',
      tab: 'corbiq-cloud-uretim',
      features: ['MRP I / MRP II', 'Saha Veri Toplama', 'Kapasite Yönetimi'],
      valueProp: 'Corbiq Yazılım imzalı bulut çözümle üretimi planlayın, sahadan anlık veri toplayın.'
    },
    {
      icon: Factory,
      name: 'Ussoft Üretim Yönetimi',
      description: 'ERP ile üretim sahası arasındaki kopukluğu gidererek üretimin her adımını izlenebilir bir dijital altyapıya taşır.',
      color: 'from-blue-600 to-blue-700',
      tab: 'ussoft-uretim',
      features: ['Barkodlu Operasyon', 'Parti/Lot Takibi', 'Personel Performansı'],
      valueProp: 'Ussoft Bilişim çözümüyle iş emrinden fire analizine üretimin her adımı dijital ve izlenebilir.'
    },
    {
      icon: Shield,
      name: 'Ussoft Kalite Yönetimi',
      description: 'Kalite ve hijyen süreçlerini dijitalleştirerek standartların ölçülmesini ve hataların erken tespitini sağlar.',
      color: 'from-blue-600 to-blue-700',
      tab: 'ussoft-kalite',
      features: ['Kalite Kontrol', 'Erken Hata Tespiti', 'Uçtan Uca İzlenebilirlik'],
      valueProp: 'Ussoft Bilişim çözümüyle kalite standartlarını ölçün, hataları erken yakalayın.'
    },
    {
      icon: Package,
      name: 'Eryaz Zeus WMS',
      description: 'Mal kabulden sevkiyata tüm depo operasyonlarını dijitalleştiren yeni nesil bir depo yönetim sistemidir.',
      color: 'from-blue-600 to-blue-700',
      tab: 'eryaz-zeus-wms',
      features: ['Cross-Docking', 'Seri/Lot Takibi', 'Raf Adresleme'],
      valueProp: 'Eryaz Bilgi Teknolojileri imzalı Zeus WMS ile deponuza dijital zekâ: hatasız toplama ve sevkiyat.'
    },
    {
      icon: Truck,
      name: 'Nitrogen Depo Yönetimi',
      description: 'Barkod ve QR destekli stok, raf ve son kullanma tarihi takibiyle depo süreçlerinizi tek sistemden yönetir.',
      color: 'from-blue-600 to-blue-700',
      tab: 'nitrogen-depo',
      features: ['Barkod & QR Kod', 'SKT Kontrolü', 'Saha Satış Modülü'],
      valueProp: 'Nitrogen çözümüyle renk, beden, lot ve seri bazında stok kontrolü; mobil ve web erişim.'
    },
    {
      icon: Users,
      name: 'Eryaz B2B/B4B Bayi Yönetimi',
      description: 'Bayi ağınız ve saha satış ekiplerinizle tüm iş süreçlerinizi yapay zekâ destekli tek dijital platformda buluşturur.',
      color: 'from-blue-600 to-blue-700',
      tab: 'eryaz-b2b',
      features: ['Yapay Zekâ Destekli', 'Sipariş & Tahsilat', 'Bulut Altyapı'],
      valueProp: 'Eryaz Bilgi Teknolojileri çözümüyle bayi siparişinden tahsilata tüm saha operasyonu tek platformda.'
    },
    {
      icon: Smartphone,
      name: 'B2BSOFT Bayi Yönetimi',
      description: 'Sipariş, tahsilat ve bayi performansını tek merkezden yöneten mobil B2B bayi yönetim platformudur.',
      color: 'from-blue-600 to-blue-700',
      tab: 'b2bsoft-bayi',
      features: ['Mobil Bayi Yönetimi', 'Fiyat & İskonto', 'Performans Analizi'],
      valueProp: 'B2BSOFT çözümüyle bayileriniz stok ve bakiyeyi diledikleri an görür, siparişini kendisi oluşturur.'
    },
    {
      icon: BarChart3,
      name: 'Ussoft Raporlama ve Analiz',
      description: 'Finansal ve operasyonel verilerinizi tek platformda toplayarak hızlı ve doğru analiz yapmanızı sağlar.',
      color: 'from-blue-600 to-blue-700',
      tab: 'ussoft-raporlama',
      features: ['Satış Dashboard', 'Bakiye & Yaşlandırma', 'Esnek Raporlar'],
      valueProp: 'Ussoft Bilişim çözümüyle Mikro verileriniz anlık dashboard ve özel raporlara dönüşür.'
    },
    {
      icon: UtensilsCrossed,
      name: 'Fastsell Restoran Yönetimi',
      description: 'Masadan pakete tüm yiyecek-içecek operasyonunu sipariş, ödeme ve raporlamayla tek sistemde yönetir.',
      color: 'from-blue-600 to-blue-700',
      tab: 'fastsell-restoran',
      features: ['QR Menü & Masa', 'Paket Servis & Kurye', 'Pazaryeri Entegrasyonu'],
      valueProp: 'Favorim Bilişim imzalı Fastsell Restoran ile masadan pakete tüm yiyecek-içecek operasyonu tek yerde.'
    },
    {
      icon: Briefcase,
      name: 'Süreç Yönetimi Çözümü',
      description: 'İş akışlarınızı kod yazmadan tasarlayıp otomatikleştirerek onay süreçlerinizi ve karar mekanizmalarınızı hızlandırır.',
      color: 'from-blue-600 to-blue-700',
      tab: 'surec-yonetimi',
      features: ['İş Akışı Otomasyonu', 'Süreç Optimizasyonu', 'BPM'],
      valueProp: 'Netoloji imzalı E-Flow ile iş akışlarını otomatikleştirerek manuel iş yükünü azaltın.'
    },
    {
      icon: Building2,
      name: 'Diğer Çözümler',
      description: 'İşletmenize özel entegrasyon ve danışmanlık ihtiyaçlarınız için esnek Mikro çözümleri sunar.',
      color: 'from-blue-600 to-blue-700',
      tab: 'diger',
      features: ['Sektörel Çözümler', 'Özel Entegrasyon', 'Danışmanlık'],
      valueProp: 'Gökkuşağı Yazılım danışmanlığıyla işletmenize özel entegrasyon ve esnek çözümler.'
    }
  ];

  // tint: kart zemin/kenarlık rengi; color: ikon kutusunun gradyanı
  const benefits = [
    {
      icon: Target,
      title: 'Sektörel Uzmanlık',
      description: 'Her sektör için özel olarak geliştirilmiş çözümler',
      color: 'from-blue-500 to-indigo-600',
      tint: 'bg-blue-50/60 border-blue-200 hover:border-blue-300'
    },
    {
      icon: Zap,
      title: 'Hızlı Entegrasyon',
      description: 'Mevcut sistemlerinizle kolay entegrasyon',
      color: 'from-amber-500 to-orange-600',
      tint: 'bg-amber-50/60 border-amber-200 hover:border-amber-300'
    },
    {
      icon: Shield,
      title: 'Uzman Destek ve Eğitim',
      description: 'Kurulumdan eğitime, uzman ekibimizden yerinde veya uzaktan profesyonel destek',
      color: 'from-green-500 to-emerald-600',
      tint: 'bg-emerald-50/60 border-emerald-200 hover:border-emerald-300'
    },
    {
      icon: TrendingUp,
      title: 'Ölçeklenebilirlik',
      description: 'İşletmenizin büyümesiyle birlikte ölçeklenir',
      color: 'from-purple-500 to-violet-600',
      tint: 'bg-purple-50/60 border-purple-200 hover:border-purple-300'
    },
    {
      icon: Users,
      title: 'Uzman İş Ortağı Ekosistemi',
      description: 'Ussoft, Eryaz, Corbiq, Favorim Bilişim ve Mizan gibi uzman iş ortaklarının çözümlerini tek elden sunuyoruz',
      color: 'from-rose-500 to-pink-600',
      tint: 'bg-rose-50/60 border-rose-200 hover:border-rose-300'
    },
    {
      icon: CheckCircle2,
      title: 'Mikro ERP ile Tam Entegrasyon',
      description: 'Tüm dikey çözümler Mikro Run, Jump ve Fly ile entegre çalışır; verileriniz tek merkezde kalır',
      color: 'from-cyan-500 to-sky-600',
      tint: 'bg-sky-50/60 border-sky-200 hover:border-sky-300'
    }
  ];

  // Faydalar karuseli: ana sayfadaki Başarı Hikayeleri deseni — 3'erli sayfalar
  const BENEFITS_PER_PAGE = 3;
  const benefitPages: (typeof benefits)[] = [];
  for (let i = 0; i < benefits.length; i += BENEFITS_PER_PAGE) {
    benefitPages.push(benefits.slice(i, i + BENEFITS_PER_PAGE));
  }
  const [benefitPage, setBenefitPage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 md:pt-16">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1
              className="animate-fade-up text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900"
              style={{ animationDelay: '0.1s' }}
            >
              Mikro Dikey
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Çözümler</span>
            </h1>

            <p
              className="animate-fade-up text-sm sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2"
              style={{ animationDelay: '0.2s' }}
            >
              Her sektörün ihtiyacına özel olarak tasarlanmış ERP çözümleri ile işletmenizi dijitalleştirin
            </p>

            <div
              className="animate-fade-up mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
              style={{ animationDelay: '0.15s' }}
            >
              {[
                { label: 'Sektör', value: '20+' },
                { label: 'Müşteri', value: '500+' },
                { label: 'Yıl', value: '20+' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="animate-fade-in-side relative flex justify-center hidden lg:flex"
            style={{ '--fade-x': '3.125rem', '--fade-scale': '0.9', animationDelay: '0.2s' } as React.CSSProperties}
          >
            <div className="relative w-[560px] h-[480px] select-none">
              
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-40 -z-10" />

              {/* Mikro Run Logo */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -5, rotate: 8 }}
                className="absolute top-20 left-32 w-36 h-36 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl rotate-6 shadow-lg flex items-center justify-center p-4 cursor-pointer transition-all duration-300 z-10"
              >
                <img
                  src="/mikro-run-logo.png"
                  alt="Mikro Run logosu — Esnaf ve mikro işletme ERP programı"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Mikro Jump Logo */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -5, rotate: -8 }}
                className="absolute top-28 right-32 w-36 h-36 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl -rotate-6 shadow-lg flex items-center justify-center p-4 cursor-pointer transition-all duration-300 z-10"
              >
                <img
                  src="/mikro-jump-logo.png"
                  alt="Mikro Jump logosu — KOBİ ERP programı"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Mikro Fly Logo */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -5, rotate: 3 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 w-36 h-36 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl rotate-3 shadow-lg flex items-center justify-center p-4 cursor-pointer transition-all duration-300 z-10"
              >
                <img
                  src="/mikro-fly-logo.png"
                  alt="Mikro Fly logosu — E-Ticaret ERP programı"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Mockup 1: Retail & Sales (Hızlı Satış) */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [2, 4, 2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 right-4 bg-white/75 backdrop-blur-md border border-blue-200/50 shadow-md shadow-blue-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600">
                  <ShoppingCart size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">Hızlı Perakende</span>
              </motion.div>

              {/* Mockup 2: Production Management (Üretim & MRP) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-2, -4, -2] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-40 left-0 bg-white/75 backdrop-blur-md border border-rose-200/50 shadow-md shadow-rose-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-red-500/10 rounded-full flex items-center justify-center text-red-600">
                  <Factory size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">Üretim & MRP</span>
              </motion.div>

              {/* Mockup 3: Logistics & Warehouse (Depo & Lojistik) */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [1, 3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-12 bg-white/75 backdrop-blur-md border border-indigo-200/50 shadow-md shadow-indigo-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-600">
                  <Truck size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">Depo & Lojistik</span>
              </motion.div>

              {/* Mockup 4: B2B Dealer Portal (Bayi Ağı) */}
              <motion.div
                animate={{ y: [0, 6, 0], x: [0, 3, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-12 right-12 bg-white/75 backdrop-blur-md border border-purple-200/50 shadow-md shadow-purple-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600">
                  <Users size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">B2B Bayi Portalı</span>
              </motion.div>

              {/* Mockup 5: Restoran Yönetimi */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-8 left-8 bg-white/75 backdrop-blur-md border border-amber-200/50 shadow-md shadow-amber-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-600">
                  <UtensilsCrossed size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">Restoran Yönetimi</span>
              </motion.div>

              {/* Mockup 6: Kalite Yönetimi */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [2, -2, 2] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute top-60 right-2 bg-white/75 backdrop-blur-md border border-teal-200/50 shadow-md shadow-teal-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-600">
                  <Shield size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">Kalite Yönetimi</span>
              </motion.div>

              {/* Mockup 7: Süreç Yönetimi (Run ve Fly Arasında) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-1, 2, -1] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute top-[260px] left-8 bg-white/75 backdrop-blur-md border border-emerald-200/50 shadow-md shadow-emerald-500/5 px-4.5 py-3 rounded-full flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-7 h-7 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600">
                  <Briefcase size={14} />
                </div>
                <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">Süreç Yönetimi</span>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Dikey Çözümler</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              İşletmeniz için özel olarak tasarlanmış çözümler
            </p>
          </motion.div>

          {/* 6 sütunlu grid: her kart 2 sütun kaplar (satırda 3 kart); son satırda
              tek kalan "Diğer Çözümler" kartı col-start-3 ile tam ortalanır. */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isLastCentered = index === industries.length - 1 && industries.length % 3 === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.03, ease: [0.21, 0.45, 0.27, 0.9] }}
                  className={`lg:col-span-2 ${isLastCentered ? 'lg:col-start-3' : ''}`}
                >
                  <Link href={`/solutions/#${industry.tab}`} className="block h-full">
                    <Card className="h-full relative overflow-hidden transition-all duration-300 ease-out border-gray-200/90 hover:border-blue-400/80 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2.5 bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20 group cursor-pointer rounded-2xl">
                      {/* Top Accent Gradient Bar on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <CardContent className="p-7 flex flex-col justify-between h-full space-y-6">
                        <div className="space-y-4">
                          {/* Header Row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3.5">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                                <Icon size={22} className="text-slate-700 group-hover:text-white transition-colors duration-300" />
                              </div>
                              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                {industry.name}
                              </h3>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-300" />
                            </div>
                          </div>

                          {/* Description (Full Width - High Contrast Text) */}
                          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                            {industry.description}
                          </p>
                        </div>

                        {/* Footer Section: Pill Badges by default, Value Proposition on Hover.
                            Konteyner sabit yükseklikte (h-[84px]) — mavi bilgi kutusu tüm
                            kartlarda birebir aynı boyutta ve aynı konumda görünür. */}
                        <div className="pt-4 border-t border-slate-100 mt-auto">
                          <div className="relative h-[96px] flex items-center">
                            {/* Default Pill Badges (Fades out on hover) */}
                            <div className="w-full flex flex-wrap gap-1.5 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                              {industry.features.map((feat, fidx) => (
                                <span
                                  key={fidx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/90 border border-slate-200 text-slate-800 shadow-2xs"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                  {feat}
                                </span>
                              ))}
                            </div>

                            {/* Hover Value Proposition Banner — konteyneri tamamen doldurur (sabit boyut) */}
                            <div className="absolute inset-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                              <div className="w-full h-full flex items-center gap-2.5 px-3.5 py-2 bg-blue-50/95 border-2 border-blue-500/80 rounded-xl text-xs font-bold text-blue-800 shadow-md shadow-blue-500/10 overflow-hidden">
                                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                                <span className="leading-tight">{industry.valueProp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <CheckCircle2 size={12} className="sm:size-3.5" />
              Neden Dikey Çözümler?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Neden Dikey Çözümler?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              İşletmeniz için somut ve ölçülebilir faydalar
            </p>
          </motion.div>

          {/* Kaydırılabilir fayda karuseli — ana sayfadaki Başarı Hikayeleri deseni */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Negatif margin + padding: overflow-hidden'a rağmen kart gölgeleri görünür kalır */}
            <div className="overflow-hidden pt-2 -mt-2 pb-6 -mb-6 px-2 -mx-2">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${benefitPage * 100}%)` }}
              >
                {benefitPages.map((page, pageIndex) => (
                  <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch px-1">
                    {page.map((benefit) => (
                      <div key={benefit.title} className="group h-full">
                        <Card className={`h-full hover:shadow-xl transition-all duration-300 border ${benefit.tint}`}>
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${benefit.color} shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <benefit.icon size={20} className="sm:size-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Kontroller: ok tuşları + sayfa noktaları (açık zemine uyarlanmış) */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => setBenefitPage((prev) => (prev - 1 + benefitPages.length) % benefitPages.length)}
                aria-label="Önceki faydalar"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="flex items-center gap-2.5">
                {benefitPages.map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => setBenefitPage(pageIndex)}
                    aria-label={`Faydalar sayfa ${pageIndex + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      benefitPage === pageIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setBenefitPage((prev) => (prev + 1) % benefitPages.length)}
                aria-label="Sonraki faydalar"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles size={12} className="sm:size-3.5" />
                Başlayın
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Sektörünüze Uygun Çözümü Bulun
              </h2>
              <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Uzmanlarımız size en uygun Mikro dikey çözümü seçmenize yardımcı olsun
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 font-semibold shadow-xl text-sm sm:text-base"
                >
                  Teklif Al
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 border-white/30 text-white rounded-xl hover:bg-white/20 font-semibold text-sm sm:text-base"
                  >
                    İletişime Geç
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
