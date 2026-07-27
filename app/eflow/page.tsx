'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Zap, Shield, TrendingUp, BarChart, Smartphone, Users, Target, Clock, Coins, Factory, Truck, Play, Check, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';


export default function EFlowPage() {
  const router = useRouter();

  const whyEflow: { title: string; desc: React.ReactNode }[] = [
    { title: "Sürükle-bırak yöntemiyle süreçlerinizi dakikalar içinde kurgulayın", desc: "Görsel modelleme araçları sayesinde onay akışlarını anında hayata geçirin" },
    { title: "İhtiyaçlar değiştikçe süreç üzerinde kolaylıkla uyarla", desc: "Esnek yapı ile değişen gereksinimlere hızlıca uyum sağlayın" },
    { title: "Geliştiricilere veya BT ekiplerine bağımlı kalma", desc: <>İş birimlerinin kendi süreçlerini doğrudan yönetmesine ve onay süreçlerini<br />hızlandırmasına imkan tanıyın</> }
  ];

  const advantages = [
    {
      title: "Kolay Kurulum ve Entegrasyon",
      desc: "E-Flow, mevcut ERP, CRM ve veritabanı altyapılarınızla dakikalar içinde entegre olarak hızlıca devreye alınır.",
      icon: Zap,
      ariaLabel: "E-Flow kolay kurulum ve entegrasyon avantajı",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Ölçeklenebilir ve Esnek Yapı",
      desc: "Büyüyen organizasyon yapınıza ve değişen iş modellerinize hızla uyum sağlayan esnek süreç mimarisi.",
      icon: TrendingUp,
      ariaLabel: "E-Flow ölçeklenebilir ve esnek yapı avantajı",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Yüksek Güvenlik ve Veri Koruma",
      desc: "Veri iletimi ve saklanmasında en üst düzey güvenlik protokolleri ile kurumsal verilerinizi koruma altında tutun.",
      icon: Shield,
      ariaLabel: "E-Flow yüksek güvenlik ve veri koruma avantajı",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Mobil Erişim ve Kullanıcı Dostu Arayüz",
      desc: "Kullanıcı dostu mobil arayüzü sayesinde tüm iş akışlarınızı ve onay süreçlerinizi dilediğiniz yerden yönetin.",
      icon: Smartphone,
      ariaLabel: "E-Flow mobil erişim avantajı",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Güçlü Raporlama ve Analiz Araçları",
      desc: "Gelişmiş analitik araçlarla süreçlerin performansını ölçün ve verimlilik artışı sağlayacak kararları hızla alın.",
      icon: BarChart,
      ariaLabel: "E-Flow raporlama ve analiz avantajı",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "İş ve BT Uyumunu Sağlayın",
      desc: "İş birimleri ile bilgi teknolojileri ekipleri arasında kusursuz bir iletişim köprüsü kurarak süreçleri ortaklaşa yönetin.",
      icon: Users,
      ariaLabel: "E-Flow iş ve BT uyumu avantajı",
      color: "from-rose-500 to-red-500"
    }
  ];

  const features = [
    { title: "Esnek tasarım imkanı", desc: "Limitlerinizi kendiniz belirleyin", icon: Target },
    { title: "Akıllıca süreç tasarımı", desc: "Görsel modelleme ile verileri hızla işleyin", icon: Zap },
    { title: "Tekrar kullanılabilir bileşenler", desc: "Tasarlanan süreçleri tekrar kullanarak zaman kazanın", icon: Clock }
  ];

  const sss = [
    {
      soru: 'E-Flow nedir?',
      cevap: 'E-Flow, kod yazmadan iş süreçlerinizi tasarlayıp otomatikleştirmenizi sağlayan bir iş akışı (BPM) platformudur. Sürükle-bırak arayüzüyle formlar, onay akışları ve süreçler oluşturur; işlerinizi hızlandırır ve hataları azaltırsınız.',
    },
    {
      soru: 'E-Flow kullanmak için kod bilgisi gerekiyor mu?',
      cevap: 'Hayır. E-Flow, teknik bilgi gerektirmeyen sürükle-bırak yapısıyla iş birimlerinin süreçleri kendi kendine tasarlamasına imkân verir; geliştiriciye veya BT ekibine bağımlılığı azaltır.',
    },
    {
      soru: 'E-Flow mevcut ERP ve Mikro ile entegre olur mu?',
      cevap: 'Evet. E-Flow, hazır entegrasyon bileşenleriyle yaygın ERP uygulamalarına ve Mikro’ya bağlanabilir; süreçler ile ERP verileriniz tek akışta çalışır.',
    },
    {
      soru: 'E-Flow BPM ile E-Flow DMS arasındaki fark nedir?',
      cevap: 'E-Flow BPM iş akışı ve süreç otomasyonuna odaklanır; E-Flow DMS ise doküman yönetimi ve dijital arşivleme çözümüdür. İkisi birlikte, süreçlerinizi ve belgelerinizi uçtan uca dijitalleştirir.',
    },
  ];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-Flow İş Süreçleri Otomasyonu',
    serviceType: 'İş Akışı Otomasyonu (BPM)',
    description: 'Kodsuz iş akışı otomasyonu, ERP entegrasyonu, mobil ve SaaS ile süreç yönetimi.',
    provider: {
      '@type': 'Organization',
      name: 'Gökkuşağı Yazılım ve Danışmanlık',
      url: 'https://gokkusagiyazilim.com.tr',
    },
    areaServed: { '@type': 'City', name: 'İstanbul' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sss.map((f) => ({
      '@type': 'Question',
      name: f.soru,
      acceptedAnswer: { '@type': 'Answer', text: f.cevap },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-start px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-[#f0f9fa] pt-36 sm:pt-40 pb-16">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#40949c]/5 to-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start relative z-10 w-full">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-semibold mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles size={14} className="text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span>No-Code BPM & DMS Platform</span>
            </div>
            
            <h1
              className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.15]"
              style={{ animationDelay: '0.2s' }}
            >
              İş Süreçlerinizi
              <br />
              <span className="bg-gradient-to-r from-[#40949c] to-blue-600 bg-clip-text text-transparent pb-1 inline-block">
                Dijitalleştirin,
              </span>
              <br />
              Hızınızı Katlayın!
            </h1>

            <p
              className="animate-fade-up text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              style={{ animationDelay: '0.15s' }}
            >
              Kod yazmadan, sürükle-bırak yöntemiyle iş süreçlerinizi dakikalar içinde tasarlayın.
            </p>

            <motion.button
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(237, 79, 55, 0.3)",
                  "0 10px 45px rgba(237, 79, 55, 0.6)",
                  "0 10px 30px rgba(237, 79, 55, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 20px 50px rgba(237, 79, 55, 0.8)",
                y: -1
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/contact')}
              className="animate-fade-up group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#ed4f37] via-orange-500 to-amber-500 text-white rounded-2xl transition-all duration-300 font-bold text-lg cursor-pointer"
              style={{ animationDelay: '0.15s' }}
            >
              <span>Teklif Al</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          {/* Right Side: Professional Diagonal Layout with Tech Beams & Orbits */}
          <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center select-none">
            
            {/* Custom CSS Style Injection for animated traveling dots on SVG paths */}
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes dashflow-diagonal {
                from { stroke-dashoffset: 40; }
                to { stroke-dashoffset: 0; }
              }
              .ray-line-anim {
                stroke-dasharray: 8, 12;
                animation: dashflow-diagonal 4s linear infinite;
              }
            `}} />

            {/* Glowing backdrop elements that blend into page background - opacity boosted for vibrancy */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#40949c]/15 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ec5038]/8 rounded-full blur-[90px] -z-10" />
            
            {/* High-tech Glowing Ray/Beam & Orbit SVG Effects - opacity boosted */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ray-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#40949c" stopOpacity="0.25" />
                  <stop offset="40%" stopColor="#ec5038" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="diagonal-ray-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#40949c" stopOpacity="0" />
                  <stop offset="30%" stopColor="#40949c" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#ec5038" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ec5038" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="diagonal-ray-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#81b4cc" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background radial glow */}
              <circle cx="50%" cy="50%" r="200" fill="url(#ray-glow)" />

              {/* Diagonal Light Beams (Çapraz Işınlar) */}
              <line x1="20" y1="80" x2="380" y2="380" stroke="url(#diagonal-ray-1)" strokeWidth="2.5" strokeLinecap="round" className="ray-line-anim opacity-75" />
              <line x1="80" y1="40" x2="340" y2="400" stroke="url(#diagonal-ray-2)" strokeWidth="1.2" strokeDasharray="4,8" className="opacity-40" />
              
              {/* Concentric Tech Orbits/Rays representing the flow */}
              <circle cx="50%" cy="50%" r="130" fill="none" stroke="#40949c" strokeWidth="1" strokeDasharray="3,15" className="opacity-45 animate-[spin_40s_linear_infinite]" />
              <circle cx="50%" cy="50%" r="170" fill="none" stroke="#ec5038" strokeWidth="1" strokeDasharray="6,25" className="opacity-40 animate-[spin_25s_linear_infinite]" style={{ animationDirection: 'reverse' }} />
              <circle cx="50%" cy="50%" r="90" fill="none" stroke="#81b4cc" strokeWidth="1.2" strokeDasharray="4,8" className="opacity-45 animate-[spin_20s_linear_infinite]" />
            </svg>

            {/* Bounded Container for Diagonal Composition */}
            <div className="relative w-full max-w-[420px] h-[360px] mx-auto flex items-center justify-center">
              
              {/* E-Flow Logo (Floating Top-Left) */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0], 
                  x: [0, -4, 0],
                  rotate: [0, 1.5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute left-[8%] top-[10%] z-20 filter drop-shadow-[0_4px_12px_rgba(64,148,156,0.12)] drop-shadow-[0_20px_45px_rgba(64,148,156,0.25)] hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image
                  src="/eflow3-logo.png"
                  alt="E-Flow BPM"
                  width={190}
                  height={190}
                  priority
                  className="object-contain saturate-[1.08] brightness-[1.03]"
                />
              </motion.div>

              {/* Netoloji Logo (Floating Bottom-Right, Diagonally Offset) */}
              <motion.div
                animate={{ 
                  y: [0, 10, 0], 
                  x: [0, 4, 0],
                  rotate: [0, -1.5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute right-[8%] bottom-[15%] z-10 filter drop-shadow-[0_3px_10px_rgba(35,31,32,0.08)] drop-shadow-[0_12px_25px_rgba(35,31,32,0.12)] hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image
                  src="/netoloji-logo.svg"
                  alt="Netoloji Yazılım"
                  width={220}
                  height={66}
                  priority
                  className="object-contain saturate-[1.08] brightness-[1.03]"
                />
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Zig-Zag Section 1: Why E-Flow & Flowchart Builder */}
      <section className="py-24 bg-white" id="neden-eflow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-semibold"
              >
                <Zap size={14} className="text-amber-500" />
                <span>Neden mi E-Flow?</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Herkesin Kullanabileceği
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-[#40949c] bg-clip-text text-transparent">
                  Kullanıcı Dostu Arayüz
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                E-Flow'un sağladığı en büyük avantajlardan biri, kullanıcı dostu arayüzü ile herkesin kolayca adapte olabilmesidir. İş süreçlerinizi dijitalleştirirken, teknik veya kodlama bilgisine gerek kalmadan sorunsuz bir geçiş gerçekleştirebilirsiniz.
              </p>

              <div className="space-y-4 w-full">
                {whyEflow.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.03 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Flowchart builder representation */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 w-full flex justify-center"
            >
              <div className="relative group max-w-md w-full">
                {/* Glow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-[#40949c] rounded-[2.5rem] blur-3xl opacity-15" />
                
                {/* Code-drawn interactive flowchart */}
                <div className="relative bg-slate-50/80 backdrop-blur-md p-6 sm:p-8 rounded-[2.5rem] border border-slate-200/60 shadow-2xl w-full">
                  <div className="text-center mb-8 pb-4 border-b border-slate-200/60">
                    <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">E-Flow Süreç Akış Oluşturucu</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 relative">
                    {/* Step 1: Start */}
                    <div className="flex items-center gap-3 bg-white border border-blue-100 px-4 py-3 rounded-2xl shadow-sm z-10 w-full max-w-[210px] hover:border-blue-400 hover:shadow-md transition-all duration-300">
                      <div className="w-7 h-7 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                        <Play size={12} fill="currentColor" className="ml-0.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-extrabold text-slate-800">Süreç Başlangıcı</p>
                        <p className="text-[9px] text-blue-600 font-semibold">Satın Alma Talebi</p>
                      </div>
                    </div>
                    
                    {/* Connector Arrow */}
                    <div className="w-0.5 h-6 bg-blue-300" />
                    
                    {/* Step 2: Approval */}
                    <div className="flex items-center gap-3 bg-white border border-amber-100 px-4 py-3 rounded-2xl shadow-sm z-10 w-full max-w-[210px] hover:border-amber-400 hover:shadow-md transition-all duration-300">
                      <div className="w-7 h-7 bg-amber-500 rounded-xl flex items-center justify-center text-white">
                        <Clock size={14} />
                      </div>
                      <div>
                        <p className="text-[11px] font-extrabold text-slate-800">Yönetici Onayı</p>
                        <p className="text-[9px] text-amber-600 font-semibold">Tutar Kontrolü & Limit</p>
                      </div>
                    </div>
                    
                    {/* Connector Line split */}
                    <div className="w-0.5 h-4 bg-slate-300" />
                    
                    {/* Branching Container */}
                    <div className="w-full flex justify-between gap-4 max-w-[340px] relative">
                      {/* Horizontal Connector Line */}
                      <div className="absolute top-0 left-[75px] right-[75px] h-0.5 bg-slate-300" />
                      
                      {/* Left branch (Approved) */}
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-0.5 h-4 bg-green-300" />
                        <div className="flex items-center gap-2 bg-white border border-green-100 px-3 py-2.5 rounded-xl shadow-sm w-full hover:border-green-400 hover:shadow-md transition-all duration-300">
                          <div className="w-5 h-5 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                            <Check size={12} />
                          </div>
                          <div className="text-left">
                            <p className="text-[9px] font-extrabold text-slate-800">ERP Aktarımı</p>
                            <p className="text-[8px] text-green-600 font-semibold">Veri Eşleme</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right branch (Rejected) */}
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-0.5 h-4 bg-red-300" />
                        <div className="flex items-center gap-2 bg-white border border-red-100 px-3 py-2.5 rounded-xl shadow-sm w-full hover:border-red-400 hover:shadow-md transition-all duration-300">
                          <div className="w-5 h-5 bg-red-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                            <X size={12} />
                          </div>
                          <div className="text-left">
                            <p className="text-[9px] font-extrabold text-slate-800">Talep Reddi</p>
                            <p className="text-[8px] text-red-600 font-semibold">E-Posta Bildirimi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics Band */}
      <section className="bg-[#0A192F] py-20 relative overflow-hidden text-white">
        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Glowing visual indicators */}
        <div className="absolute -left-10 top-0 w-72 h-72 bg-[#40949c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-10 bottom-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
              E-Flow Sayılarla Gücünü Kanıtlıyor
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              Binlerce organizasyon iş süreçlerinde E-Flow no-code iş akış gücüne güveniyor.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "10x", label: "İş Süreç Hızı Artışı", desc: "Akış onay sürelerinde azalma" },
              { value: "%80", label: "Maliyet Tasarrufu", desc: "Operasyonel harcamalarda verimlilik" },
              { value: "150K+", label: "Aktif İş Akışı", desc: "Tasarımı tamamlanan benzersiz süreç" },
              { value: "15M+", label: "Yıllık İşlem Adedi", desc: "Güvenle tamamlanan onay & süreç adımı" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#40949c] mb-2">{metric.value}</div>
                <div className="text-sm md:text-base font-bold text-white mb-1">{metric.label}</div>
                <div className="text-xs text-slate-400">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Info Section: No-code BPM */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Farklı Ölçekteki Organizasyonlar İçin Geliştirme Platformu
            </h2>
            <p className="text-2xl font-bold text-[#40949c]">"E-Flow BPM"</p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              Çoğu BPM uygulamasındaki bileşenlerde kodlamaya ihtiyaç vardır. Netoloji'nin No-code platform geliştiricileri, kullanıcıların görsel modelleme ögeleri olarak kullanacağı temel kodları yazmıştır. E-Flow ile bir süreç tasarlamaya başladığınızda aslında zaten yazılmış olan kodları derler ve kullanırsınız. İşte bu sayede en karmaşık iş akışlarını bile çok daha kolay, anlaşılır ve hızlı bir yapıda hayata geçirebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zig-Zag Section 2: Smart Design & Performance Metrics */}
      <section className="py-24 bg-white" id="akilli-tasarim">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Side: Coded Performance Widget illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 w-full flex justify-center order-last lg:order-first"
            >
              <div className="relative group max-w-md w-full">
                {/* Glow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#40949c] to-blue-500 rounded-[2.5rem] blur-3xl opacity-15" />
                
                {/* Süreç Tasarım Stüdyosu mockup — başlıktaki "modelleme" temasıyla uyumlu */}
                <div className="relative bg-slate-50/80 backdrop-blur-md p-6 sm:p-8 rounded-[2.5rem] border border-slate-200/60 shadow-2xl w-full">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                    <span className="text-[10px] font-extrabold text-slate-800 tracking-wider uppercase">Süreç Tasarım Stüdyosu</span>
                    <span className="px-2 py-0.5 bg-[#40949c]/10 text-[#40949c] text-[9px] font-extrabold rounded-full">Sürükle-Bırak</span>
                  </div>

                  {/* Tasarım tuvali: noktalı zemin üzerinde bağlantılı akış düğümleri */}
                  <div className="relative rounded-2xl border border-slate-200/70 bg-white p-4 [background-image:radial-gradient(circle,#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
                    {/* Bağlantı çizgileri */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                      <line x1="50%" y1="42" x2="50%" y2="78" stroke="#40949c" strokeWidth="2" strokeDasharray="4 3" />
                      <line x1="50%" y1="130" x2="27%" y2="168" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
                      <line x1="50%" y1="130" x2="73%" y2="168" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
                    </svg>

                    {/* Düğüm 1: Başlangıç */}
                    <div className="relative z-10 mx-auto w-fit flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#40949c] to-blue-600 text-white shadow-md shadow-[#40949c]/25">
                      <Play size={12} />
                      <span className="text-[10px] font-extrabold">Talep Formu</span>
                    </div>

                    {/* Düğüm 2: Onay adımı */}
                    <div className="relative z-10 mx-auto mt-9 w-fit flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#40949c]/50 text-slate-800 shadow-sm">
                      <Users size={12} className="text-[#40949c]" />
                      <span className="text-[10px] font-extrabold">Yönetici Onayı</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    </div>

                    {/* Dallanma: iki sonuç düğümü */}
                    <div className="relative z-10 mt-9 grid grid-cols-2 gap-3">
                      <div className="justify-self-center flex items-center gap-1.5 px-3 py-2 rounded-xl bg-green-50 border border-green-200 text-green-700 shadow-sm">
                        <Check size={11} />
                        <span className="text-[9px] font-extrabold">ERP Kaydı</span>
                      </div>
                      <div className="justify-self-center flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 shadow-sm">
                        <X size={11} />
                        <span className="text-[9px] font-extrabold">Revizyona Gönder</span>
                      </div>
                    </div>
                  </div>

                  {/* Bileşen paleti: tuvale sürüklenen hazır parçalar */}
                  <div className="mt-5">
                    <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wide mb-2.5">Hazır Bileşenler</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { icon: Target, ad: 'Form' },
                        { icon: Users, ad: 'Onay' },
                        { icon: Clock, ad: 'Zamanlayıcı' },
                        { icon: BarChart, ad: 'Rapor' },
                      ].map((b) => (
                        <span key={b.ad} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-dashed border-slate-300 text-slate-600 text-[9px] font-extrabold cursor-grab hover:border-[#40949c]/60 hover:text-[#40949c] transition-colors">
                          <b.icon size={11} />
                          {b.ad}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-semibold"
              >
                <Sparkles size={14} className="text-amber-500" />
                <span>Akıllı Süreç Tasarımı</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                İş Süreçlerinizi
                <br />
                <span className="bg-gradient-to-r from-[#40949c] to-blue-600 bg-clip-text text-transparent">
                  Akıllıca Modelleyin
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Görsel modelleme ile veriler hızla işlenir ve yönetilir. Sürükle-bırak arayüzü kodlama gereksinimini tamamen ortadan kaldırır.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 w-full pt-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.03 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div className="w-10 h-10 bg-[#40949c]/10 rounded-xl flex items-center justify-center mb-3">
                      <feature.icon size={20} className="text-[#40949c]" />
                    </div>
                    <h4 className="text-xs font-extrabold text-slate-800 tracking-tight uppercase mb-1">{feature.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50/50" id="avantajlar">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              E-Flow'un Avantajları
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              E-Flow platformunun işletmenize katacağı hız, güvenlik ve verimlilik avantajları ile rakiplerinizin bir adım önüne geçin.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-[2.25rem] p-8 border border-slate-200/60 hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
                  aria-label={item.ariaLabel}
                >
                  <div>
                    {/* Icon container */}
                    <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}>
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* SSS */}
      <section className="pt-24 pb-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-[#40949c] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>

          {/* İlgili sayfalar (iç link) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-500 mr-1">İlgili:</span>
            {[
              { etiket: 'E-Flow BPM', href: '/eflow-bpm' },
              { etiket: 'E-Flow DMS', href: '/eflow-dms' },
              { etiket: 'Çözümler', href: '/solutions' },
              { etiket: 'İletişim', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1 text-sm font-medium text-[#40949c] bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-[#40949c] transition-colors">
                {b.etiket}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Floating Card Section */}
      <section className="pt-6 pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0B192C] via-[#0A192F] to-[#0d223f] p-10 md:p-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800"
          >
            {/* Glowing backdrop elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#40949c]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                  İş süreçlerinizi modernize etmeye hazır mısınız?
                </h2>
                <p className="text-slate-300 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                  E-Flow'un no-code iş akış çözümleriyle verimliliğinizi anında artırın ve kağıtsız ofis dönemine geçiş yapın.
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact?demo=true')}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-[0_15px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.5)] transition-all duration-300 font-bold text-lg cursor-pointer"
                >
                  <span>Ücretsiz Demo Talep Edin</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
