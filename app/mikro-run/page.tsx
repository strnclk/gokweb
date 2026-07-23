'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Cpu, Globe, Star, FileText, Activity, Layers, CheckCircle, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { motion } from 'motion/react';


export default function MikroRunPage() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const scrollToContact = () => {
    const message = 'Merhaba, Mikro RUN hakkında bilgi almak istiyorum.';
    window.location.href = `/contact?message=${encodeURIComponent(message)}&subject=teklif`;
  };

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
      icon: Wallet,
      title: 'Masraf Yönetimi',
      description: 'Masraf kalemlerinin takibi',
      descriptionDetail: 'Detaylı maliyet analizi'
    },
    {
      icon: Receipt,
      title: 'E-Dönüşüm Çözümleri',
      description: 'E-Fatura, E-Arşiv',
      descriptionDetail: 'E-İrsaliye, E-SMMM'
    },
    {
      icon: Globe,
      title: 'E-Ticaret Entegrasyonu',
      description: 'Pazaryeri entegrasyonu',
      descriptionDetail: 'Trendyol, Hepsiburada, N11'
    },
    {
      icon: Cpu,
      title: 'Esnek Erişim',
      description: 'Masaüstü, Bulut & Mobil',
      descriptionDetail: 'Her yerden kesintisiz erişim'
    },
    {
      icon: BarChart,
      title: 'Raporlama',
      description: 'Detaylı raporlar',
      descriptionDetail: 'Analiz ve istatistikler'
    }
  ];

  const modules = [
    {
      id: 'e-fatura',
      name: 'e-Fatura',
      icon: FileText,
      description: 'Elektronik fatura kesme, alımı ve tüm resmi onaylı yönetim süreçlerini saniyeler içinde gerçekleştirin.',
      features: ['Otomatik Resmi İletim', 'Güvenli Bulut Arşivleme', 'Cari Hesap Otomatik Entegrasyonu'],
      stats: { speed: '< 2 sn', savings: '%85', compliance: '%100' },
      steps: ['Fatura Taslağı', 'E-İmza & Onay', 'Resmi İletim', 'Alıcıya Anında Teslim']
    },
    {
      id: 'e-arsiv',
      name: 'e-Arşiv Fatura',
      icon: Activity,
      description: 'Resmi e-Arşiv portalı uyumlu, son kullanıcılara saniyeler içinde e-posta/SMS ile fatura iletimi.',
      features: ['Yasal Dijital Depolama', 'E-posta / SMS Fatura Gönderimi', 'Toplu Faturalama Desteği'],
      stats: { speed: '< 1.5 sn', savings: '%90', compliance: '%100' },
      steps: ['Fatura Oluşturma', 'Dijital İmzalama', 'Müşteriye İletim', 'Otomatik Arşivleme']
    },
    {
      id: 'e-irsaliye',
      name: 'e-İrsaliye',
      icon: Layers,
      description: 'Mal sevkiyatlarında kağıt irsaliye yerine geçen tam dijital sevkiyat ve anlık doğrulama altyapısı.',
      features: ['Sevkiyat ve Araç/Plaka Takibi', 'Otomatik Stok Eşleşmesi', 'Anlık Kabul/Ret Yanıtı'],
      stats: { speed: '< 3 sn', savings: '%75', compliance: '%100' },
      steps: ['İrsaliye Düzenleme', 'Araç / Plaka Tanımı', 'Resmi Onay Süreci', 'Teslimat Doğrulama']
    },
    {
      id: 'e-mutabakat',
      name: 'e-Mutabakat',
      icon: CheckCircle,
      description: 'Müşteri ve tedarikçilerle cari bakiye mutabakatlarının tek tıkla dijital olarak yapılması ve takibi.',
      features: ['Otomatik E-posta Mutabakatı', 'Anlık Onay / İtiraz Bildirimi', 'Zamandan %90 Tasarruf'],
      stats: { speed: 'Anında', savings: '%90', compliance: 'Canlı Takip' },
      steps: ['Cari Bakiye Çekimi', 'Mutabakat Gönderimi', 'Taraf Yanıtı', 'Otomatik Rapor']
    },
    {
      id: 'e-smmm',
      name: 'e-SMMM',
      icon: Star,
      description: 'Serbest Meslek Makbuzu sisteminin dijital ortamda düzenlenmesi, hesaplanması ve yasal iletimi.',
      features: ['Tam Yasal Mevzuat Uyumu', 'Otomatik Stopaj & KDV Hesabı', 'Anında Müşteri Teslimi'],
      stats: { speed: '< 2 sn', savings: '%95', compliance: '%100' },
      steps: ['Makbuz Taslağı', 'Stopaj & KDV Hesabı', 'E-İmza & Onay', 'Müşteriye İletim']
    }
  ];

  const faqlar = [
    {
      question: 'Mikro Run ile Neler Yapabilirsiniz?',
      answer: 'Mikro Run ile stok ve ürün takibi, fatura ve irsaliye düzenleme, e-Fatura/e-Arşiv gönderimi, cari hesap alacak-borç yönetimi ve kasa/banka hareketlerinin anlık takibini yapabilirsiniz.'
    },
    {
      question: 'Mikro Run\'ı Kimler Tercih Etmeli?',
      answer: 'Esnaf, serbest meslek sahipleri, yeni kurulan girişimler ve 5 çalışan altındaki mikro ölçekli işletmeler için ideal bir ön muhasebe ve e-Dönüşüm paketidir.'
    },
    {
      question: 'Mikro Run ile e-Fatura ve e-Arşiv Faturası Kesebilir miyim?',
      answer: 'Evet, hazır e-Fatura ve e-Arşiv entegrasyonu sayesinde GİB ile uyumlu şekilde saniyeler içinde e-fatura düzenleyebilirsiniz.'
    },
    {
      question: 'İleride İşletmem Büyüdüğünde Mikro Jump veya Fly\'a Geçiş Yapabilir miyim?',
      answer: 'Evet, veri kaybı yaşamadan tek tıkla Mikro Jump veya Mikro Fly üst segment çözümlere kolayca yükseltme yapabilirsiniz.'
    },
    {
      question: 'Mikro Run Kullanımı İçin Özel Eğitim Gerekli mi?',
      answer: 'Hayır, sade ve kullanıcı dostu arayüzü sayesinde özel bir eğitime gerek kalmadan kısa sürede kullanmaya başlayabilirsiniz. İhtiyaç duymanız halinde uzman ekibimiz kurulum sonrasında kapsamlı eğitim ve destek de sağlar.'
    },
  ];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqlar
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-gray-50/80 to-[#F8FAFC] pt-32 md:pt-44 pb-20 lg:pb-28">
        {/* Giant Concentric Curved Amphitheater Rings & Arches (Dev Yuvarlak Konsantrik Kemerler - WOW Varyasyonu) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg
            className="absolute right-0 bottom-0 w-full h-full max-w-none pointer-events-none"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMax slice"
          >
            <defs>
              {/* Vibrant Arch Gradient 1 - Rich Magenta to Golden Amber */}
              <linearGradient id="wowArchGrad1" x1="1440" y1="900" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E6007E" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#f43f5e" stopOpacity="0.35" />
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
              </linearGradient>

              {/* Vibrant Arch Gradient 2 - Violet Rose Glow */}
              <linearGradient id="wowArchGrad2" x1="1440" y1="900" x2="250" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#E6007E" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0.04" />
              </linearGradient>

              {/* Vibrant Arch Gradient 3 - Warm Gold Magenta */}
              <linearGradient id="wowArchGrad3" x1="1440" y1="900" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E6007E" stopOpacity="0.28" />
                <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.02" />
              </linearGradient>

              {/* Arch Soft Glass Ribbon Fill */}
              <linearGradient id="wowArchFill" x1="1440" y1="900" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E6007E" stopOpacity="0.07" />
                <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              
              {/* Rich Radial Volumetric Glow from Bottom Right */}
              <radialGradient id="wowOriginGlow" cx="1350" cy="850" r="800" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E6007E" stopOpacity="0.16" />
                <stop offset="35%" stopColor="#f43f5e" stopOpacity="0.08" />
                <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>

              {/* Glow Filter for Main Arch */}
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ambient Radial Background Glow */}
            <rect x="0" y="0" width="1440" height="900" fill="url(#wowOriginGlow)" />

            {/* Sweeping Glass Ribbon Fill Layer */}
            <path
              d="M 1650 1050 C 1180 250, 650 50, -250 150 L -250 1050 Z"
              fill="url(#wowArchFill)"
            />

            {/* Ring 1 - Primary Outer Glowing Arc (Silky-Smooth Single Bezier Curve) */}
            <path
              d="M 1650 1050 C 1180 250, 650 50, -250 150"
              stroke="url(#wowArchGrad1)"
              strokeWidth="4"
              filter="url(#neonGlow)"
            />

            {/* Ring 1 Accent - Dashed Inner Trace */}
            <path
              d="M 1620 1030 C 1150 230, 630 30, -270 130"
              stroke="url(#wowArchGrad1)"
              strokeWidth="1.5"
              strokeDasharray="10 8"
              opacity="0.8"
            />

            {/* Ring 2 - Secondary Orb Arc */}
            <path
              d="M 1560 1070 C 1110 320, 610 110, -220 220"
              stroke="url(#wowArchGrad2)"
              strokeWidth="3"
            />
            <path
              d="M 1530 1050 C 1090 300, 590 90, -240 200"
              stroke="url(#wowArchGrad2)"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              opacity="0.6"
            />

            {/* Ring 3 - Middle Concentric Ring */}
            <path
              d="M 1470 1090 C 1050 390, 570 180, -180 290"
              stroke="url(#wowArchGrad3)"
              strokeWidth="2.5"
            />

            {/* Ring 4 - Inner Deep Arc */}
            <path
              d="M 1390 1120 C 990 460, 540 240, -140 360"
              stroke="url(#wowArchGrad3)"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Ring 5 - Innermost Subtle Arch */}
            <path
              d="M 1310 1150 C 930 520, 500 300, -100 430"
              stroke="url(#wowArchGrad1)"
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-amber-500/10 border border-pink-500/20 text-[#E6007E] text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-[#E6007E]" />
                <span>e-Dönüşüm ve Ön Muhasebe Çözümü</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-6 text-[#0F172A]"
              >
                Mikro{' '}
                <span className="bg-gradient-to-r from-[#E6007E] via-orange-500 to-amber-500 bg-clip-text text-transparent inline-block drop-shadow-sm">
                  RUN
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl font-normal"
              >
                Esnaf, serbest meslek sahipleri ve mikro işletmeler için ideal bir e-Dönüşüm paketidir. Kolay kullanım, sade ve anlaşılır menülerle, hazır fatura tasarımı, e-fatura kesme özelliği ve anahtar teslim e-fatura çözümleri sunar. Mikro RUN, tüm finansal ve organizasyonel süreçlerinizi yönetmek için mükemmel bir destek sağlar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="relative group">
                  {/* Animated Pulsing Glowing Aura behind the button */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#E6007E] via-orange-500 to-amber-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse pointer-events-none" />

                  {/* Main Eye-Catching Gradient Button */}
                  <button
                    onClick={scrollToContact}
                    className="relative inline-flex items-center justify-center gap-3.5 px-9 py-4.5 bg-gradient-to-r from-[#E6007E] via-rose-500 to-amber-500 hover:from-[#c9006e] hover:via-orange-600 hover:to-amber-600 text-white rounded-xl font-bold text-lg tracking-wide shadow-xl shadow-[#E6007E]/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                  >
                    {/* Shimmering light sweep overlay */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <span>Teklif Al</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side (Original Horse Logo Integrated Directly on Page with Ambient Glow & Gentle Floating Animation) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center p-4 sm:p-8"
              >
                {/* Multi-layered Soft Glowing Ambient Aura behind the Horse Logo (Slower & Subtler) */}
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-pink-500/15 via-rose-500/18 to-amber-400/12 rounded-full blur-3xl pointer-events-none opacity-80" />
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#E6007E]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Gentle Floating Logo (Slower 7.5s animation, 7px movement) */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] flex items-center justify-center"
                >
                  <Image
                    src="/mikro-run-logo.png"
                    alt="Mikro RUN Orijinal Logosu ve At Görseli"
                    width={440}
                    height={440}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(230,0,126,0.20)] hover:drop-shadow-[0_22px_40px_rgba(230,0,126,0.30)] transition-all duration-500 transform hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Kesintisiz Pürüzsüz Sayfa Bütünleştirici Gradient Maske (Smooth Seamless Gradient Transition to Porcelain Section) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#F8FAFC]/60 to-[#F8FAFC] pointer-events-none z-10" />
      </section>

      {/* Features Section (Mikro Run Ana Paket - Porcelain Zemin & Yüzen Cam Kartlar) */}
      <section className="relative py-24 bg-[#F8FAFC] overflow-hidden pt-8">
        {/* Ambient Background Orb */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#E6007E]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Mikro Run Ana Paket</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal">
              Mikro Run Ana pakette Neler Var? İşletmenizin günlük tüm operasyonel ihtiyaçları tek pakette.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isFirstInLastCenteredRow = index === 6;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-[#E6007E]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group md:col-span-1 lg:col-span-2 ${
                    isFirstInLastCenteredRow ? 'lg:col-start-2' : ''
                  }`}
                >
                  {/* Renkli 3D Üst Vurgu Çıtası */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#E6007E] via-rose-500 to-amber-500" />

                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#E6007E] to-rose-600 shadow-md shadow-[#E6007E]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-[#E6007E] transition-colors">{feature.title}</h3>
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

      {/* Modules Section - İnteraktif Dijital Dönüşüm Ekosistemi (EDonusumShowcase - Luxe Light Glassmorphism) */}
      <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] via-rose-50/30 to-[#F8FAFC] overflow-hidden">
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E6007E]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6007E]/10 border border-[#E6007E]/20 text-[#E6007E] text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>İnteraktif e-Dönüşüm Ekosistemi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Mikro RUN <span className="bg-gradient-to-r from-[#E6007E] via-rose-600 to-amber-500 bg-clip-text text-transparent">e-Dönüşüm Çözümleri</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              İşletmenizin dijital dönüşüm sürecinde ihtiyaç duyduğu tüm yasal e-Dönüşüm çözümlerini tek tıkla canlı olarak deneyimleyin.
            </p>
          </motion.div>

          {/* Dynamic Module Navigation Bar (Pills & Tabs - Light Luxe Glass) */}
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
                      ? 'bg-gradient-to-r from-[#E6007E] via-rose-600 to-amber-500 text-white shadow-lg shadow-[#E6007E]/30 scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{mod.name}</span>
                </button>
              );
            })}
          </div>

          {/* Live Interactive Stage Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Info Panel (Box 1 - Light Luxe Glass) */}
            <motion.div
              key={modules[activeModuleIndex].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E6007E]/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E6007E] to-rose-600 flex items-center justify-center text-white shadow-lg shadow-[#E6007E]/25 shrink-0">
                    {(() => {
                      const ActiveIcon = modules[activeModuleIndex].icon;
                      return <ActiveIcon size={28} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{modules[activeModuleIndex].name}</h3>
                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>Mevzuat Uyumlu Canlı Entegrasyon</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  {modules[activeModuleIndex].description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  {modules[activeModuleIndex].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-[#E6007E]/10 text-[#E6007E] flex items-center justify-center shrink-0">
                        <CheckCircle size={14} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats Cards */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-[#E6007E]">{modules[activeModuleIndex].stats.speed}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">İşlem Hızı</div>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-amber-600">{modules[activeModuleIndex].stats.savings}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Maliyet Tasarrufu</div>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-emerald-600">{modules[activeModuleIndex].stats.compliance}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Yasal Uyum</div>
                </div>
              </div>
            </motion.div>

            {/* Right Live Simulation Widget (Box 2 - Light Luxe Glass) */}
            <motion.div
              key={`widget-${modules[activeModuleIndex].id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#E6007E]" />
                  <span className="text-sm font-bold text-slate-900">Resmi Onaylı Canlı Belge Paneli</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold">
                  Sistem Aktif
                </span>
              </div>

              {/* Step-by-Step Workflow Ribbon */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Adım Adım İş Akış Süreci</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {modules[activeModuleIndex].steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-50/80 border border-slate-200/70 p-3.5 rounded-xl text-center relative group hover:border-[#E6007E]/40 hover:shadow-md transition-all">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#E6007E] to-rose-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2 shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="text-[11px] text-slate-700 font-semibold leading-tight">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital Stamp Simulation Card */}
              <div className="bg-gradient-to-br from-rose-50/60 via-slate-50 to-amber-50/40 border border-slate-200/80 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">E-İmza & Zaman Damgası</div>
                    <div className="text-[10px] text-slate-500">Resmi Standartlarında 5070 Sayılı Kanun Uyumlu</div>
                  </div>
                </div>
                <button
                  onClick={scrollToContact}
                  className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#E6007E] to-rose-600 hover:from-[#c9006e] hover:to-rose-700 text-white text-xs font-bold transition-all shadow-md shadow-[#E6007E]/25 shrink-0 transform hover:-translate-y-0.5"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Neden <br /> Gökkuşağı Yazılım ve Danışmanlık <br /> ile Mikro Yazılım'a Geçmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık 20+ yıllık tecrübesi ile işletmenizin tüm dijital dönüşüm süreçlerinde yanında.
              </p>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Mikro Yazılım Geçiş Sürecini Nasıl Yönetiyoruz:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Ön Görüşme ve İhtiyaç Analizi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Mikro RUN Paket Seçimi ve Teklif Onayı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Hızlı Sistem Kurulumu ve Veri Aktarımı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Temel Ön Muhasebe ve e-Dönüşüm Eğitimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Proje Teslimi ve Canlıya Geçiş
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Uzaktan ve Yerinde Destek
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-rose-900/10 rounded-2xl blur-xl" />
              <Image 
                src="/mikrorun.webp" 
                alt="Mikro RUN KOBİ ERP ve İş Yönetim Sistemi Ekran Görünümü" 
                width={800}
                height={600}
                className="relative w-full rounded-xl shadow-xl border border-gray-200/50" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Mikro Run ile İşlerinizi Geleceğe Taşıyın!</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal">
              Mikro Run, işletmenizin ihtiyaçlarına özel çözümler sunarak muhasebe ve iş yönetimini kolaylaştırır. Modern teknolojilerle desteklenen bu yazılım, her zaman güncel kalarak değişen mevzuat ve iş gereksinimlerine hızlıca uyum sağlar.
            </p>
          </motion.div>

          {/* flex-wrap + justify-center centers the orphan items on the last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Kolay Ve İşlevsel Çözümler',
              'Daima Güncel Sistem',
              'Anahtar Teslim e-Fatura',
              'Canlı Destek & Danışmanlık',
              'Güvenli Yedekleme',
              'E-Ticaret Entegrasyonu',
              'Mobil Uygulama Desteği',
              'Masaüstü veya Bulut Uygulama',
              'Masraf Yönetimi',
              'Sektörel Çözümler',
              'Ek Çözümler'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3.5 p-4.5 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-[#E6007E]/30 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <CheckCircle size={18} className="text-[#E6007E] flex-shrink-0" />
                <span className="text-slate-800 text-sm font-semibold">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#E6007E] via-rose-700 to-[#c9006e] p-10 sm:p-14 rounded-3xl text-center shadow-2xl shadow-[#E6007E]/20 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">Mikro Run İle İlgili Detaylı Bilgi ve Sunum İçin Bize Ulaşabilirsiniz</h2>
            <p className="text-base sm:text-lg mb-8 text-pink-100 max-w-3xl mx-auto">Mikro RUN, ek çözümler ve özellikleriyle İlgili detaylı bilgi almak, demo ve sunum talep etmek İçin bizimle İletişime geçin!</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="bg-white text-[#E6007E] py-4 px-10 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
            >
              İletişime Geç
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Mikro Run Hakkında Merak Edilenler</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal">
              Mikro Run ürünü hakkında sık sorulan soruları sizin İçin cevapladık.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqlar.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm hover:border-[#E6007E]/30 transition-all duration-300"
              >
                <details className="group">
                  <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                    <span className="w-8 h-8 bg-[#E6007E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm">{index + 1}</span>
                    <h3 className="flex-1 text-lg font-bold text-slate-900 group-hover:text-[#E6007E] transition-colors">{faq.question}</h3>
                    <svg className="w-5 h-5 flex-shrink-0 mt-1 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 pl-[4.5rem] text-slate-600 text-sm leading-relaxed font-normal">{faq.answer}</p>
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
