'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Brain, Cpu, Globe, Star, TrendingUp, Award, Clock, FileText, Activity, Layers, CheckCircle, ArrowRight, Target, Zap, Shield, Sparkles, Factory } from 'lucide-react';
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
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

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
      description: '20 yılın bilgi birikimi ve onlarca müşterinin kullanım deneyimi ile geliştiriyor; servislerimizi abonelerimizin ihtiyaçlarına göre şekillendiriyoruz.',
      icon: Award
    }
  ];

  const modules = [
    {
      id: 'e-fatura',
      name: 'e-Fatura',
      icon: FileText,
      description: 'Elektronik fatura kesme, alımı ve tüm GİB onaylı yönetim süreçlerini saniyeler içinde gerçekleştirin.',
      features: ['Otomatik GİB İletimi', '7/24 Bulut Arşivleme', 'Cari Hesap Otomatik Entegrasyonu'],
      stats: { speed: '< 2 sn', savings: '%85', compliance: '%100 GİB' },
      steps: ['Fatura Taslağı', 'E-İmza & Onay', 'GİB İletimi', 'Alıcıya Anında Teslim']
    },
    {
      id: 'e-arsiv',
      name: 'e-Arşiv Fatura',
      icon: Activity,
      description: 'GİB e-Arşiv portalı uyumlu, son kullanıcılara saniyeler içinde e-posta/SMS ile fatura iletimi.',
      features: ['Yasal Dijital Depolama', 'E-posta / SMS Fatura Gönderimi', 'Toplu Faturalama Desteği'],
      stats: { speed: '< 1.5 sn', savings: '%90', compliance: '%100 GİB' },
      steps: ['Fatura Oluşturma', 'Dijital İmzalama', 'Müşteriye İletim', 'Otomatik Arşivleme']
    },
    {
      id: 'e-irsaliye',
      name: 'e-İrsaliye',
      icon: Layers,
      description: 'Mal sevkiyatlarında kağıt irsaliye yerine geçen tam dijital sevkiyat ve anlık doğrulama altyapısı.',
      features: ['Sevkiyat ve Araç/Plaka Takibi', 'Otomatik Stok Eşleşmesi', 'Anlık Kabul/Ret Yanıtı'],
      stats: { speed: '< 3 sn', savings: '%75', compliance: '%100 GİB' },
      steps: ['İrsaliye Düzenleme', 'Araç / Plaka Tanımı', 'GİB Onay Süreci', 'Teslimat Doğrulama']
    },
    {
      id: 'e-defter',
      name: 'e-Defter',
      icon: BarChart,
      description: 'Yevmiye defteri ve Defter-i Kebir kayıtlarının yasal standartlarda dijital olarak tutulması ve berat gönderimi.',
      features: ['Tam Yasal Mevzuat Uyumu', 'Otomatik Berat Gönderimi', 'Şifreli Güvenli Arşivleme'],
      stats: { speed: 'Otomatik', savings: '%80', compliance: '%100 GİB' },
      steps: ['Kayıt Kontrolü', 'Berat Oluşturma', 'GİB Yüklemesi', 'Güvenli Depolama']
    },
    {
      id: 'e-mutabakat',
      name: 'e-Mutabakat',
      icon: CheckCircle,
      description: 'Müşteri ve tedarikçilerle cari bakiye mutabakatlarının tek tıkla dijital olarak yapılması ve takibi.',
      features: ['Otomatik E-posta Mutabakatı', 'Anlık Onay / İtiraz Bildirimi', 'Zamandan %90 Tasarruf'],
      stats: { speed: 'Anında', savings: '%90', compliance: '7/24 Canlı' },
      steps: ['Cari Bakiye Çekimi', 'Mutabakat Gönderimi', 'Taraf Yanıtı', 'Otomatik Rapor']
    },
    {
      id: 'e-bordro',
      name: 'e-Bordro',
      icon: Clock,
      description: 'Personel maaş bordrolarının KVKK uyumlu olarak dijital ortamda şifreli iletilmesi ve onay takibi.',
      features: ['SGK Entegrasyonu', 'Özel Şifreli E-posta İletimi', 'Personel Onay Bildirimi'],
      stats: { speed: 'Toplu', savings: '%85', compliance: 'KVKK Uyumlu' },
      steps: ['Bordro Hesaplama', 'Şifreli Paketleme', 'Personel İletimi', 'Okundu Bildirimi']
    },
    {
      id: 'e-smmm',
      name: 'e-SMMM',
      icon: Star,
      description: 'Serbest Meslek Makbuzu sisteminin dijital ortamda düzenlenmesi, hesaplanması ve yasal iletimi.',
      features: ['Tam Yasal Mevzuat Uyumu', 'Otomatik Stopaj & KDV Hesabı', 'Anında Müşteri Teslimi'],
      stats: { speed: '< 2 sn', savings: '%95', compliance: '%100 GİB' },
      steps: ['Makbuz Taslağı', 'Stopaj & KDV Hesabı', 'E-İmza & GİB', 'Müşteriye İletim']
    }
  ];

  const flyFaqlar = [
    {
      question: 'Mikro FLY\'ı Kimler Tercih Etmeli?',
      answer: 'Kurumsal ölçekte faaliyet gösteren, UFRS ve enflasyon muhasebesine uyum sağlamak isteyen, kurumsal yapısını daha ileri noktaya taşımak isteyen, üretim yönetiminde detaylı fiili maliyet takibi yapmayı hedefleyen, kurumsal hafıza oluşturmak isteyen işletmeler için Mikro FLY idealdir.'
    },
    {
      question: 'Mikro FLY farklı faaliyet alanı olan grup şirketlerde kullanılabilir mi?',
      answer: 'Evet, Mikro FLY farklı faaliyet alanı olan grup şirketlerde kullanılabilir.'
    },
    {
      question: 'Birden fazla şirketi olan holdingler de, Mikro FLY tüm şirketlerimiz ile entegre çalışabilir mi?',
      answer: 'Evet, holdingler için Mikro FLY tüm şirketleriniz ile entegre çalışabilir.'
    },
    {
      question: 'Gelişmiş / ileri seviye muhasebeye uygun çözümleriniz var mı?',
      answer: 'Evet, Mikro FLY\'ta gelişmiş ve ileri seviye muhasebeye uygun çözümler mevcuttur.'
    },
    {
      question: 'Bordro ile birlikte norm kadro planlama, işe alım ve çalışanların performans değerlendirmelerini de takip etmek mümkün mü?',
      answer: 'Evet, bordro ile birlikte norm kadro planlama, işe alım ve çalışanların performans değerlendirmelerini de takip etmek mümkündür.'
    },
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-[#F8FAFC] pt-32 md:pt-44 pb-20 lg:pb-28">
        {/* Giant Concentric Curved Amphitheater Rings & Arches (Blue/Cyan/Sky Theme) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg
            className="absolute right-0 bottom-0 w-full h-full max-w-none pointer-events-none"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMax slice"
          >
            <defs>
              <linearGradient id="flyArchGrad1" x1="1440" y1="900" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#06B6D4" stopOpacity="0.3" />
                <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.04" />
              </linearGradient>

              <linearGradient id="flyArchGrad2" x1="1440" y1="900" x2="250" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.04" />
              </linearGradient>

              <linearGradient id="flyArchGrad3" x1="1440" y1="900" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.02" />
              </linearGradient>

              <linearGradient id="flyArchFill" x1="1440" y1="900" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              
              <radialGradient id="flyOriginGlow" cx="1350" cy="850" r="800" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.15" />
                <stop offset="35%" stopColor="#06B6D4" stopOpacity="0.07" />
                <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>

              <filter id="flyNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <rect x="0" y="0" width="1440" height="900" fill="url(#flyOriginGlow)" />

            <path
              d="M 1650 1050 C 1180 250, 650 50, -250 150 L -250 1050 Z"
              fill="url(#flyArchFill)"
            />

            <path
              d="M 1650 1050 C 1180 250, 650 50, -250 150"
              stroke="url(#flyArchGrad1)"
              strokeWidth="4"
              filter="url(#flyNeonGlow)"
            />

            <path
              d="M 1620 1030 C 1150 230, 630 30, -270 130"
              stroke="url(#flyArchGrad1)"
              strokeWidth="1.5"
              strokeDasharray="10 8"
              opacity="0.8"
            />

            <path
              d="M 1560 1070 C 1110 320, 610 110, -220 220"
              stroke="url(#flyArchGrad2)"
              strokeWidth="3"
            />
            <path
              d="M 1530 1050 C 1090 300, 590 90, -240 200"
              stroke="url(#flyArchGrad2)"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              opacity="0.6"
            />

            <path
              d="M 1470 1090 C 1050 390, 570 180, -180 290"
              stroke="url(#flyArchGrad3)"
              strokeWidth="2.5"
            />

            <path
              d="M 1390 1120 C 990 460, 540 240, -140 360"
              stroke="url(#flyArchGrad3)"
              strokeWidth="2"
              opacity="0.5"
            />

            <path
              d="M 1310 1150 C 930 520, 500 300, -100 430"
              stroke="url(#flyArchGrad1)"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side (Text Block) */}
            <div className="lg:col-span-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-sky-500/10 border border-blue-500/20 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Büyük İşletmeler İleri ERP Çözümü</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-6 text-[#0F172A]"
              >
                Mikro{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 bg-clip-text text-transparent inline-block drop-shadow-sm">
                  FLY
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl font-normal"
              >
                Büyük İşletmelerin Gücüne Güç Katan Çözüm Mikro Fly. En büyüklerin co-pilotu Mikro Fly ile tanışın! Hangi sektörde olursanız olun, tüm operasyonlarınızı tek bir programda kârlı ve verimli bir şekilde yönetin. Mikro Fly, büyük İşletmeler için tasarlanmış güçlü bir ticari yazılım çözümü olarak işletmenizin her adımında yanınızda. Başarıya uçuşunuzu şimdi başlatın!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse pointer-events-none" />

                  <button
                    onClick={scrollToContact}
                    className="relative inline-flex items-center justify-center gap-3.5 px-9 py-4.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 hover:from-blue-700 hover:via-cyan-600 hover:to-sky-500 text-white rounded-xl font-bold text-lg tracking-wide shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <span>Teklif Al</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side (Original Logo Integrated Directly on Page with Ambient Blue Glow & Gentle Floating Animation) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center p-4 sm:p-8"
              >
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500/15 via-cyan-500/18 to-sky-400/12 rounded-full blur-3xl pointer-events-none opacity-80" />
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] flex items-center justify-center"
                >
                  <Image
                    src="/mikro-fly-logo.png"
                    alt="Mikro FLY Orijinal Logosu"
                    width={440}
                    height={440}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(2,132,199,0.20)] hover:drop-shadow-[0_22px_40px_rgba(2,132,199,0.30)] transition-all duration-500 transform hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Smooth Seamless Gradient Transition to Porcelain Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#F8FAFC]/60 to-[#F8FAFC] pointer-events-none z-10" />
      </section>

      {/* Features Section (Mikro Fly Ana Paket - Porcelain Zemin & Yüzen Cam Kartlar) */}
      <section className="relative py-24 bg-[#F8FAFC] overflow-hidden pt-8">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Mikro Fly Ana Paket</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal">
              Mikro Fly Ana pakette Neler Var? İşletmenizin tüm ileri düzey ERP ve operasyonel ihtiyaçları tek pakette.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400" />

                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-md shadow-blue-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                    </div>
                    <p className="text-slate-400 text-xs italic font-medium pt-3 border-t border-slate-100">{feature.descriptionDetail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section - İnteraktif Dijital Dönüşüm Ekosistemi (EDonusumShowcase - Blue Theme) */}
      <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] via-sky-50/30 to-[#F8FAFC] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>İnteraktif e-Dönüşüm Ekosistemi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Mikro FLY <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 bg-clip-text text-transparent">e-Dönüşüm Çözümleri</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              İşletmenizin dijital dönüşüm sürecinde ihtiyaç duyduğu tüm yasal e-Dönüşüm çözümlerini tek tıkla canlı olarak deneyimleyin.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 p-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-200/50">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = activeModuleIndex === index;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleIndex(index)}
                  className={`flex items-center gap-2 px-4.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-white shadow-lg shadow-blue-600/30 scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{mod.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <motion.div
              key={modules[activeModuleIndex].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/25 shrink-0">
                    {(() => {
                      const ActiveIcon = modules[activeModuleIndex].icon;
                      return <ActiveIcon size={28} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{modules[activeModuleIndex].name}</h3>
                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>GİB Uyumlu Canlı Entegrasyon</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  {modules[activeModuleIndex].description}
                </p>

                <div className="space-y-3 mb-8">
                  {modules[activeModuleIndex].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle size={14} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-blue-600">{modules[activeModuleIndex].stats.speed}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">İşlem Hızı</div>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-cyan-600">{modules[activeModuleIndex].stats.savings}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Maliyet Tasarrufu</div>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-emerald-600">{modules[activeModuleIndex].stats.compliance}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Yasal Uyum</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`widget-${modules[activeModuleIndex].id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-slate-900">GİB Onaylı Canlı Belge Paneli</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold">
                  Sistem Aktif
                </span>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Adım Adım İş Akış Süreci</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {modules[activeModuleIndex].steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-50/80 border border-slate-200/70 p-3.5 rounded-xl text-center relative group hover:border-blue-500/40 hover:shadow-md transition-all">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2 shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="text-[11px] text-slate-700 font-semibold leading-tight">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50/60 via-slate-50 to-cyan-50/40 border border-slate-200/80 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">E-İmza & Zaman Damgası</div>
                    <div className="text-[10px] text-slate-500">GİB Standartlarında 5070 Sayılı Kanun Uyumlu</div>
                  </div>
                </div>
                <button
                  onClick={scrollToContact}
                  className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 shrink-0 transform hover:-translate-y-0.5"
                >
                  Detaylı Bilgi
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Neden <br /> Gökkuşağı Yazılım ve Danışmanlık <br /> ile Mikro Fly'a Geçmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık 20 yıllık tecrübesi ile işletmenizin tüm dijital dönüşüm süreçlerinde yanında.
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
                  Uyarlama ve Aktarım
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Detay Analiz
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  Eğitim
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-xl text-center"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
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
                  {item.answer && <p className="px-6 pb-6 pl-[4.5rem] text-gray-600 text-sm leading-relaxed">{item.answer}</p>}
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
