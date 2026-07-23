'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Cpu, Globe, Star, TrendingUp, Clock, FileText, Activity, Layers, CheckCircle, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { motion } from 'motion/react';


export default function MikroJumpPage() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const scrollToContact = () => {
    const message = 'Merhaba, Mikro JUMP hakkında bilgi almak istiyorum.';
    window.location.href = `/contact?message=${encodeURIComponent(message)}&subject=teklif`;
  };

  const features = [
    {
      icon: Package,
      title: 'Gelişmiş Stok & Depo Yönetimi',
      description: 'Seri No, Lot, Parti Takibi',
      descriptionDetail: 'Çoklu depo ve lokasyon yönetimi'
    },
    {
      icon: Landmark,
      title: 'Satış ve Müşteri Yönetimi',
      description: 'Sipariş, irsaliye, fatura takibi',
      descriptionDetail: 'Müşteri bakiye & risk yönetimi'
    },
    {
      icon: Users,
      title: 'Satın Alma & Tedarikçi',
      description: 'Teklif toplama ve sipariş',
      descriptionDetail: 'Tedarikçi performans analizi'
    },
    {
      icon: Receipt,
      title: 'Perakende & Kasa Yönetimi',
      description: 'Yeni nesil ÖKC & POS entegrasyonu',
      descriptionDetail: 'Hızlı satış & kasa hareketleri'
    },
    {
      icon: Clock,
      title: 'Personel & Bordro Yönetimi',
      description: 'Özlük hakları & SGK bildirimleri',
      descriptionDetail: 'Personel maliyet ve devam takibi'
    },
    {
      icon: Cpu,
      title: 'Üretim & Reçete Yönetimi',
      description: 'Basit & standart üretim takibi',
      descriptionDetail: 'Üretim reçeteleri ve iş emirleri'
    },
    {
      icon: Globe,
      title: 'Dış Ticaret Yönetimi',
      description: 'İthalat & İhracat takibi',
      descriptionDetail: 'Gümrük ve dosya maliyet takibi'
    },
    {
      icon: Wallet,
      title: 'Finans ve Masraf Yönetimi',
      description: 'Nakit akışı, banka entegrasyonu',
      descriptionDetail: 'Sınırsız masraf merkezi tanımı'
    },
    {
      icon: TrendingUp,
      title: 'Bütçe & Raporlama',
      description: 'Hedeflenen / gerçekleşen analiz',
      descriptionDetail: 'Yönetim mizanı ve finansal raporlar'
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
      id: 'e-defter',
      name: 'e-Defter',
      icon: BarChart,
      description: 'Yevmiye defteri ve Defter-i Kebir kayıtlarının yasal standartlarda dijital olarak tutulması ve berat gönderimi.',
      features: ['Tam Yasal Mevzuat Uyumu', 'Otomatik Berat Gönderimi', 'Şifreli Güvenli Arşivleme'],
      stats: { speed: 'Otomatik', savings: '%80', compliance: '%100' },
      steps: ['Kayıt Kontrolü', 'Berat Oluşturma', 'Resmi Onay & Yükleme', 'Güvenli Depolama']
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
      stats: { speed: '< 2 sn', savings: '%95', compliance: '%100' },
      steps: ['Makbuz Taslağı', 'Stopaj & KDV Hesabı', 'E-İmza & Onay', 'Müşteriye İletim']
    }
  ];

  const jumpFaqlar = [
    {
      question: 'Mikro Jump ile Neler Yapabilirsiniz?',
      answer: 'Mikro Jump; Ticari Paket (stok, hizmet, masraf, satın alma, satış, müşteri ve finans yönetimi), e-Dönüşüm Çözümleri (e-Fatura, e-Arşiv, e-İrsaliye, e-Defter vb.), Yönetim Raporları ve İş Zekası çözümlerini sunar. İhtiyacınıza göre İK, Üretim, Dış Ticaret gibi ek çözümlerle kapsama alanını genişletebilirsiniz.'
    },
    {
      question: 'Mikro Jump\'ı Kimler Tercih Etmeli?',
      answer: 'Büyüme yolundaki küçük ve orta ölçekli işletmeler, birden fazla sektörle ilgilenen ve birden fazla şubesi bulunan firmalar, sadece bir ürün değil, kurumsal bir çözüm ortağı arayan işletmeler, iş süreçlerini uçtan uca verimli ve kolay bir şekilde takip etmek isteyen, operasyonel verimliliğe önem veren şirketler, kontrollü büyümeyi hedefleyen ve ihtiyacından fazla fonksiyon satın almak istemeyen işletmeler, Mikro Jump\'ı tercih edebilir. Bu çözüm, işletmenizin ihtiyaçlarına uygun olarak ölçeklenebilir ve gereksiz maliyetlerden kaçınmanızı sağlar.'
    },
    {
      question: 'Mikro Jump ile E-Fatura ve E-Arşiv Faturası Kesebilir Miyim?',
      answer: 'Evet, entegre e-Dönüşüm modülü ile e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter süreçlerinizi mevzuata tam uyumlu yönetebilirsiniz.'
    },
    {
      question: 'Mikro Jump ile Stoklarımı Detaylı Takip Edebilir Miyim?',
      answer: 'Evet, depo, parti/lot, seri numarası ve varyant gibi detaylarla stoklarınızı ayrıntılı şekilde takip edebilirsiniz.'
    },
    {
      question: 'Mikro Jump ile Şube Bazlı Takip Yapabilir Miyim?',
      answer: 'Evet, şube/depo bazında hareketlerinizi ayrı ayrı takip edip şube kırılımında finans ve stok raporları alabilirsiniz.'
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: jumpFaqlar
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-purple-50/40 to-[#F8FAFC] pt-32 md:pt-44 pb-20 lg:pb-28">
        {/* Giant Concentric Curved Amphitheater Rings & Arches (Pure Purple/Indigo/Violet Theme) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg
            className="absolute right-0 bottom-0 w-full h-full max-w-none pointer-events-none"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMax slice"
          >
            <defs>
              <linearGradient id="jumpArchGrad1" x1="1440" y1="900" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#6366F1" stopOpacity="0.3" />
                <stop offset="75%" stopColor="#8B5CF6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.04" />
              </linearGradient>

              <linearGradient id="jumpArchGrad2" x1="1440" y1="900" x2="250" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.04" />
              </linearGradient>

              <linearGradient id="jumpArchGrad3" x1="1440" y1="900" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.02" />
              </linearGradient>

              <linearGradient id="jumpArchFill" x1="1440" y1="900" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              
              <radialGradient id="jumpOriginGlow" cx="1350" cy="850" r="800" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
                <stop offset="35%" stopColor="#6366F1" stopOpacity="0.07" />
                <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>

              <filter id="jumpNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <rect x="0" y="0" width="1440" height="900" fill="url(#jumpOriginGlow)" />

            <path
              d="M 1650 1050 C 1180 250, 650 50, -250 150 L -250 1050 Z"
              fill="url(#jumpArchFill)"
            />

            <path
              d="M 1650 1050 C 1180 250, 650 50, -250 150"
              stroke="url(#jumpArchGrad1)"
              strokeWidth="4"
              filter="url(#jumpNeonGlow)"
            />

            <path
              d="M 1620 1030 C 1150 230, 630 30, -270 130"
              stroke="url(#jumpArchGrad1)"
              strokeWidth="1.5"
              strokeDasharray="10 8"
              opacity="0.8"
            />

            <path
              d="M 1560 1070 C 1110 320, 610 110, -220 220"
              stroke="url(#jumpArchGrad2)"
              strokeWidth="3"
            />
            <path
              d="M 1530 1050 C 1090 300, 590 90, -240 200"
              stroke="url(#jumpArchGrad2)"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              opacity="0.6"
            />

            <path
              d="M 1470 1090 C 1050 390, 570 180, -180 290"
              stroke="url(#jumpArchGrad3)"
              strokeWidth="2.5"
            />

            <path
              d="M 1390 1120 C 990 460, 540 240, -140 360"
              stroke="url(#jumpArchGrad3)"
              strokeWidth="2"
              opacity="0.5"
            />

            <path
              d="M 1310 1150 C 930 520, 500 300, -100 430"
              stroke="url(#jumpArchGrad1)"
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-violet-500/10 border border-purple-500/20 text-purple-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-purple-600" />
                <span>Hızlı Satış ve Büyüme Çözümü</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-6 text-[#0F172A]"
              >
                Mikro{' '}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent inline-block drop-shadow-sm">
                  JUMP
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl font-normal"
              >
                Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık'ın uzmanlığı ve Mikro Jump'ın yenilikçi teknolojileriyle, iş süreçlerinizi sektöre özel çözümlerle tek bir platformda yönetin. KOBİ'nizi rekabette öne çıkarmak, işlerinizde fark yaratmak ve geleceğe emin adımlarla ilerlemek için Mikro Jump ile büyük sıçrayışınızı gerçekleştirin!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse pointer-events-none" />

                  <button
                    onClick={scrollToContact}
                    className="relative inline-flex items-center justify-center gap-3.5 px-9 py-4.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-700 hover:via-indigo-700 hover:to-violet-600 text-white rounded-xl font-bold text-lg tracking-wide shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <span>Teklif Al</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side (Original Logo Integrated Directly on Page with Ambient Purple Glow & Gentle Floating Animation) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center p-4 sm:p-8"
              >
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-500/15 via-indigo-500/18 to-violet-400/12 rounded-full blur-3xl pointer-events-none opacity-80" />
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] flex items-center justify-center"
                >
                  <Image
                    src="/mikro-jump-logo.png"
                    alt="Mikro JUMP Orijinal Logosu"
                    width={440}
                    height={440}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(124,58,237,0.20)] hover:drop-shadow-[0_22px_40px_rgba(124,58,237,0.30)] transition-all duration-500 transform hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Smooth Seamless Gradient Transition to Porcelain Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#F8FAFC]/60 to-[#F8FAFC] pointer-events-none z-10" />
      </section>

      {/* Features Section (Mikro Jump Ana Paket - Porcelain Zemin & Yüzen Cam Kartlar) */}
      <section className="relative py-24 bg-[#F8FAFC] overflow-hidden pt-8">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">Mikro Jump Ana Paket</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal">
              Mikro Jump Ana pakette Neler Var? İşletmenizin gelişmiş tüm operasyonel ihtiyaçları tek pakette.
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
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500" />

                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md shadow-purple-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
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

      {/* Modules Section - İnteraktif Dijital Dönüşüm Ekosistemi (EDonusumShowcase - Purple Theme) */}
      <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] via-purple-50/30 to-[#F8FAFC] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-600 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>İnteraktif e-Dönüşüm Ekosistemi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Mikro JUMP <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent">e-Dönüşüm Çözümleri</span>
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
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 text-white shadow-lg shadow-purple-600/30 scale-105'
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
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/25 shrink-0">
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

                <div className="space-y-3 mb-8">
                  {modules[activeModuleIndex].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center shrink-0">
                        <CheckCircle size={14} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-purple-600">{modules[activeModuleIndex].stats.speed}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">İşlem Hızı</div>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70 text-center shadow-inner">
                  <div className="text-xl font-bold text-indigo-600">{modules[activeModuleIndex].stats.savings}</div>
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
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-bold text-slate-900">Resmi Onaylı Canlı Belge Paneli</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold">
                  Sistem Aktif
                </span>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Adım Adım İş Akış Süreci</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {modules[activeModuleIndex].steps.map((step, idx) => (
                    <div key={idx} className="bg-slate-50/80 border border-slate-200/70 p-3.5 rounded-xl text-center relative group hover:border-purple-500/40 hover:shadow-md transition-all">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2 shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="text-[11px] text-slate-700 font-semibold leading-tight">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50/60 via-slate-50 to-indigo-50/40 border border-slate-200/80 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
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
                  className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/25 shrink-0 transform hover:-translate-y-0.5"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Neden <br /> Gökkuşağı Yazılım ve Danışmanlık <br /> ile Mikro Jump'a Geçmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık 20+ yıllık tecrübesi ile işletmenizin tüm dijital dönüşüm süreçlerinde yanında.
              </p>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Mikro Jump Geçiş Sürecini Nasıl Yönetiyoruz:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Süreç Analizi ve İşletme Checkup Hizmeti
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Sektörel Modül, Şube ve Depo Yapılandırması
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Özel Sistem Tasarımı ve Veri Aktarımı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Departman Bazlı Kullanıcı ve Yönetici Eğitimleri
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Pilot Test Çalışması ve Proje Teslimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Operasyonel Danışmanlık ve Destek
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl blur-xl" />
              <Image 
                src="/mikrojump.webp" 
                alt="Mikro JUMP Hızlı Satış ve Pazarlama Sistemi Ekran Görünümü" 
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
            className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Mikro Jump İle İlgili Detaylı Bilgi ve Sunum İçin Bize Ulaşabilirsiniz</h2>
            <p className="text-base mb-6 text-purple-100">Mikro JUMP, ek çözümler ve özellikleriyle İlgili detaylı bilgi almak, demo ve sunum talep etmek İçin bizimle İletişime geçin!</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-purple-900 py-3 px-8 rounded-lg font-medium hover:bg-purple-50"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Jump Hakkında Merak Edilenler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Jump ürünü hakkında sık sorulan soruları sizin için cevapladık.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jumpFaqlar.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 hover:border-purple-300 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
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
