'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Cpu, Globe, Star, FileText, Activity, Layers, CheckCircle, ArrowRight, Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { motion } from 'motion/react';
import AmphitheaterRingsBackground, { AmphitheaterTheme } from '@/components/AmphitheaterRingsBackground';

// Vibrant Arch Gradient - Rich Magenta to Golden Amber (Dev Yuvarlak Konsantrik Kemerler - WOW Varyasyonu)
const runAmphitheaterTheme: AmphitheaterTheme = {
  idPrefix: 'wow',
  grad1: [
    { offset: '0%', color: '#DC2626', opacity: 0.5 },
    { offset: '40%', color: '#f43f5e', opacity: 0.35 },
    { offset: '75%', color: '#f59e0b', opacity: 0.22 },
    { offset: '100%', color: '#38bdf8', opacity: 0.04 },
  ],
  grad2: [
    { offset: '0%', color: '#a855f7', opacity: 0.4 },
    { offset: '50%', color: '#DC2626', opacity: 0.28 },
    { offset: '100%', color: '#fb7185', opacity: 0.04 },
  ],
  grad3: [
    { offset: '0%', color: '#DC2626', opacity: 0.28 },
    { offset: '60%', color: '#f59e0b', opacity: 0.16 },
    { offset: '100%', color: '#818cf8', opacity: 0.02 },
  ],
  fill: [
    { offset: '0%', color: '#DC2626', opacity: 0.07 },
    { offset: '50%', color: '#f43f5e', opacity: 0.03 },
    { offset: '100%', color: '#ffffff', opacity: 0 },
  ],
  glow: [
    { offset: '0%', color: '#DC2626', opacity: 0.16 },
    { offset: '35%', color: '#f43f5e', opacity: 0.08 },
    { offset: '70%', color: '#f59e0b', opacity: 0.03 },
    { offset: '100%', color: '#ffffff', opacity: 0 },
  ],
};

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
    },
    {
      id: 'e-arsiv',
      name: 'e-Arşiv Fatura',
      icon: Activity,
      description: 'Resmi e-Arşiv portalı uyumlu, son kullanıcılara saniyeler içinde e-posta/SMS ile fatura iletimi.',
      features: ['Yasal Dijital Depolama', 'E-posta / SMS Fatura Gönderimi', 'Toplu Faturalama Desteği'],
      stats: { speed: '< 1.5 sn', savings: '%90', compliance: '%100' },
    },
    {
      id: 'e-irsaliye',
      name: 'e-İrsaliye',
      icon: Layers,
      description: 'Mal sevkiyatlarında kağıt irsaliye yerine geçen tam dijital sevkiyat ve anlık doğrulama altyapısı.',
      features: ['Sevkiyat ve Araç/Plaka Takibi', 'Otomatik Stok Eşleşmesi', 'Anlık Kabul/Ret Yanıtı'],
      stats: { speed: '< 3 sn', savings: '%75', compliance: '%100' },
    },
    {
      id: 'e-mutabakat',
      name: 'e-Mutabakat',
      icon: CheckCircle,
      description: 'Müşteri ve tedarikçilerle cari bakiye mutabakatlarının tek tıkla dijital olarak yapılması ve takibi.',
      features: ['Otomatik E-posta Mutabakatı', 'Anlık Onay / İtiraz Bildirimi', 'Zamandan %90 Tasarruf'],
      stats: { speed: 'Anında', savings: '%90', compliance: 'Canlı Takip' },
    },
    {
      id: 'e-smmm',
      name: 'e-SMMM',
      icon: Star,
      description: 'Serbest Meslek Makbuzu sisteminin dijital ortamda düzenlenmesi, hesaplanması ve yasal iletimi.',
      features: ['Tam Yasal Mevzuat Uyumu', 'Otomatik Stopaj & KDV Hesabı', 'Anında Müşteri Teslimi'],
      stats: { speed: '< 2 sn', savings: '%95', compliance: '%100' },
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
        <AmphitheaterRingsBackground theme={runAmphitheaterTheme} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side (Text Block) */}
            <div className="lg:col-span-6 text-left">
              <div
                className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/10 via-red-500/10 to-amber-500/10 border border-red-500/20 text-[#DC2626] text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
                style={{ animationDelay: '0s' }}
              >
                <Zap className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>e-Dönüşüm ve Ön Muhasebe Çözümü</span>
              </div>

              <h1
                className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-6 text-[#0F172A]"
                style={{ animationDelay: '0s' }}
              >
                Mikro{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-orange-500 to-amber-500 bg-clip-text text-transparent inline-block drop-shadow-sm">
                  RUN
                </span>
              </h1>

              <p
                className="animate-fade-up text-base sm:text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl font-normal"
                style={{ animationDelay: '0.2s' }}
              >
                Esnaf, serbest meslek sahipleri ve mikro işletmeler için ideal bir e-Dönüşüm paketidir. Kolay kullanım, sade ve anlaşılır menülerle, hazır fatura tasarımı, e-fatura kesme özelliği ve anahtar teslim e-fatura çözümleri sunar. Mikro RUN, tüm finansal ve organizasyonel süreçlerinizi yönetmek için mükemmel bir destek sağlar.
              </p>

              <div
                className="animate-fade-up flex flex-wrap items-center gap-4"
                style={{ animationDelay: '0.15s' }}
              >
                <div className="relative group">
                  {/* Animated Pulsing Glowing Aura behind the button */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#DC2626] via-orange-500 to-amber-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse pointer-events-none" />

                  {/* Main Eye-Catching Gradient Button */}
                  <button
                    onClick={scrollToContact}
                    className="relative inline-flex items-center justify-center gap-3.5 px-9 py-4.5 bg-gradient-to-r from-[#DC2626] via-red-500 to-amber-500 hover:from-[#B91C1C] hover:via-orange-600 hover:to-amber-600 text-white rounded-xl font-bold text-lg tracking-wide shadow-xl shadow-[#DC2626]/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                  >
                    {/* Shimmering light sweep overlay */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <span>Teklif Al</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side (Original Horse Logo Integrated Directly on Page with Ambient Glow & Gentle Floating Animation) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div
                className="animate-fade-in-side relative flex items-center justify-center p-4 sm:p-8"
                style={{ '--fade-y': '1.25rem', '--fade-scale': '0.9', animationDelay: '0.2s' } as React.CSSProperties}
              >
                {/* Multi-layered Soft Glowing Ambient Aura behind the Horse Logo (Slower & Subtler) */}
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-red-500/15 via-red-500/18 to-amber-400/12 rounded-full blur-3xl pointer-events-none opacity-80" />
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#DC2626]/10 rounded-full blur-2xl pointer-events-none" />

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
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(220,38,38,0.20)] hover:drop-shadow-[0_22px_40px_rgba(220,38,38,0.30)] transition-all duration-500 transform hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Kesintisiz Pürüzsüz Sayfa Bütünleştirici Gradient Maske (Smooth Seamless Gradient Transition to Porcelain Section) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#F8FAFC]/60 to-[#F8FAFC] pointer-events-none z-10" />
      </section>

      {/* Features Section (Mikro Run Ana Paket - Porcelain Zemin & Yüzen Cam Kartlar) */}
      <section className="relative py-24 bg-[#F8FAFC] overflow-hidden pt-8">
        {/* Ambient Background Orb */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#DC2626]/5 rounded-full blur-[140px] pointer-events-none" />

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
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={`bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-[#DC2626]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group md:col-span-1 lg:col-span-2 ${
                    isFirstInLastCenteredRow ? 'lg:col-start-2' : ''
                  }`}
                >
                  {/* Renkli 3D Üst Vurgu Çıtası */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#DC2626] via-red-500 to-amber-500" />

                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#DC2626] to-red-600 shadow-md shadow-[#DC2626]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-[#DC2626] transition-colors">{feature.title}</h3>
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
      <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] via-red-50/30 to-[#F8FAFC] overflow-hidden">
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#DC2626]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>İnteraktif e-Dönüşüm Ekosistemi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Mikro RUN <span className="bg-gradient-to-r from-[#DC2626] via-red-600 to-amber-500 bg-clip-text text-transparent">e-Dönüşüm Çözümleri</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              İşletmenizin dijital dönüşüm sürecinde ihtiyaç duyduğu tüm yasal e-Dönüşüm çözümlerini tek tıkla canlı olarak deneyimleyin.
            </p>
          </motion.div>

          {/* Dynamic Module Navigation Bar (Independent Bordered Pills) */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-12">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = activeModuleIndex === index;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleIndex(index)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:outline-none focus:ring-0 select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DC2626] via-red-600 to-amber-500 text-white shadow-lg shadow-slate-900/15 border-0 scale-105 font-bold'
                      : 'bg-white hover:bg-slate-50/80 text-slate-700 hover:text-slate-900 border border-slate-200/70 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#DC2626]'}`} />
                  <span>{mod.name}</span>
                </button>
              );
            })}
          </div>

          {/* Live Interactive Stage Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Main Info Panel (Box 1 - Light Luxe Glass) */}
            <motion.div
              key={modules[activeModuleIndex].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DC2626] to-red-600 flex items-center justify-center text-white shadow-lg shadow-[#DC2626]/25 shrink-0">
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
                      <div className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center shrink-0">
                        <CheckCircle size={14} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Ribbon inside Left Box */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Dijital Dönüşüm Ekosistemi</div>
                    <div className="text-[11px] text-slate-500 font-medium">%100 Mevzuat Uyumlu Veri Güvenliği</div>
                  </div>
                </div>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-red-600 hover:from-[#B91C1C] hover:to-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#DC2626]/25 shrink-0 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>İletişime Geç</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Right Column: 3 Vertically Stacked Performance Stats Cards */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <motion.div
                key={`stat-speed-${modules[activeModuleIndex].id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex-1 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#DC2626]/40 hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">İşlem Hızı</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#DC2626]">Otomatik</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Zap size={24} />
                </div>
              </motion.div>

              <motion.div
                key={`stat-savings-${modules[activeModuleIndex].id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex-1 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Maliyet Tasarrufu</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">{modules[activeModuleIndex].stats.savings}</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Baskı ve arşiv maliyet düşüşü</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <TrendingUp size={24} />
                </div>
              </motion.div>

              <motion.div
                key={`stat-compliance-${modules[activeModuleIndex].id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex-1 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Yasal Uyum</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">%100</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Resmi mevzuat standartları</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Shield size={24} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
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
                  <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                  Ön Görüşme ve İhtiyaç Analizi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                  Mikro RUN Paket Seçimi ve Teklif Onayı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                  Hızlı Sistem Kurulumu ve Veri Aktarımı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                  Temel Ön Muhasebe ve e-Dönüşüm Eğitimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                  Proje Teslimi ve Canlıya Geçiş
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
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
              <div className="absolute -inset-4 bg-red-900/10 rounded-2xl blur-xl" />
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
              'Ek Çözümler',
              'Hızlı Kurulum ve Kolay Kullanım'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="flex items-center gap-3.5 p-4.5 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-[#DC2626]/30 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <CheckCircle size={18} className="text-[#DC2626] flex-shrink-0" />
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
            className="bg-gradient-to-r from-[#DC2626] via-red-700 to-[#B91C1C] p-10 sm:p-14 rounded-3xl text-center shadow-2xl shadow-[#DC2626]/20 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">Mikro Run İle İlgili Detaylı Bilgi ve Sunum İçin Bize Ulaşabilirsiniz</h2>
            <p className="text-base sm:text-lg mb-8 text-red-100 max-w-3xl mx-auto">Mikro RUN, ek çözümler ve özellikleriyle İlgili detaylı bilgi almak, demo ve sunum talep etmek İçin bizimle İletişime geçin!</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="bg-white text-[#DC2626] py-4 px-10 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
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
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm hover:border-[#DC2626]/30 transition-all duration-300"
              >
                <details className="group">
                  <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                    <span className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm">{index + 1}</span>
                    <h3 className="flex-1 text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">{faq.question}</h3>
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
