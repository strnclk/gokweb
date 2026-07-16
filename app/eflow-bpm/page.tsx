'use client';

import { Workflow, Users, Settings, BarChart3, CheckCircle, TrendingUp, Zap, Shield, Database, Globe, Target, ArrowRight, Sparkles, Smartphone, Layers, FileText, Clock, Award, Lock, Coins, Receipt, Truck, Factory } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

const sssBpm = [
  { soru: 'E-Flow BPM nedir?', cevap: 'E-Flow BPM, kod yazmadan sürükle-bırak ile iş akışları ve süreçler tasarlamanızı sağlayan bir süreç yönetimi (BPM) çözümüdür. Onay akışları, formlar ve otomasyonları hızla kurar, süreçlerinizi standartlaştırırsınız.' },
  { soru: 'Kurulum ve sunucu maliyeti gerekiyor mu?', cevap: 'Hayır. E-Flow BPM, SaaS/kiralama modeliyle sunucu ve yüksek ilk yatırım maliyeti olmadan kullanılabilir; her zaman güncel sürümle çalışırsınız.' },
  { soru: 'Mevcut ERP ve Mikro ile entegre olur mu?', cevap: 'Evet. Hazır entegrasyon bileşenleriyle yaygın ERP uygulamalarına ve Mikro’ya bağlanır; süreçleriniz ve ERP verileriniz tek akışta çalışır.' },
  { soru: 'Süreçleri mobilden yönetebilir miyim?', cevap: 'Evet. E-Flow BPM mobil uygulama ve web uyumu ile onay, görev ve süreçlerinizi her yerden yönetmenize imkân verir.' },
];

const serviceJsonLdBpm = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Flow BPM - İş Akışı ve Süreç Yönetimi',
  serviceType: 'İş Süreçleri Yönetimi (BPM)',
  description: 'Kodsuz sürükle-bırak iş akışı tasarımı, ERP entegrasyonu, mobil ve SaaS ile süreç otomasyonu.',
  provider: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık', url: 'https://gokkusagiyazilim.com.tr' },
  areaServed: { '@type': 'City', name: 'İstanbul' },
};

const faqJsonLdBpm = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sssBpm.map((f) => ({ '@type': 'Question', name: f.soru, acceptedAnswer: { '@type': 'Answer', text: f.cevap } })),
};

export default function EflowBpmPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'finans' | 'ik' | 'lojistik'>('finans');

  const features = [
    {
      icon: Workflow,
      title: 'Sürükle-Bırak Teknolojisi',
      description: 'Hiçbir kodlama bilgisine sahip olmadan E-Flow\'un sürükle bırak yapısı ile iş süreçlerinizi tasarlayın ve yönetin.',
    },
    {
      icon: Database,
      title: 'ERP Entegrasyonu',
      description: 'Hazır entegrasyon bileşenleri aracılığı ile en çok tercih edilen ERP uygulamaları ile kolay entegrasyon sağlayın.',
    },
    {
      icon: Globe,
      title: 'Kiralama Modeli',
      description: 'Sunucu ve ilk yatırım maliyeti olmadan, SaaS modeliyle daima güncel sürüme sahip olun.',
    },
    {
      icon: Sparkles,
      title: 'Yapay Zeka (AI) Entegrasyonu',
      description: 'E-Flow\'un ChatGPT entegrasyonu ile mevcut süreçlere kolayca erişin, süreç tasarımını hızla gerçekleştirin.',
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulama',
      description: 'Süreçlerinizi herhangi bir ek operasyon gerektirmeden mobil uygulama üzerinden yönetin, işinize kesintisiz ulaşın.',
    },
    {
      icon: Layers,
      title: 'Web ve Mobil Uyumlu',
      description: 'İşlerinizi her an ve her yerden kolaylıkla yönetin, iş süreçlerinize kesintisiz devam edin.',
    }
  ];

  const benefits = [
    { title: 'Daha vizyoner bir bakış açısına sahip olun' },
    { title: 'Gelişmiş bir yönetim modeli elde edin' },
    { title: 'Firmanıza özel iş süreçleri tasarlayın' },
    { title: 'Masraflarınızı azaltın' },
    { title: 'Çalışan verimliliğinizi artırın' },
    { title: 'Onay süreçlerinizi ve karar mekanizmalarını hızlandırın' },
    { title: 'Zaman tasarrufu sağlayın' }
  ];

  const advantages = [
    { title: 'İş Süreçlerinin Otomasyonu', desc: 'Onay gerektiren manuel iş süreçlerinizi otomatikleştirin.', icon: Zap },
    { title: 'Verimlilik Artışı', desc: 'Optimize edilmiş iş süreçleri ile işletmenizi hızlı ve etkili bir şekilde yönetin.', icon: TrendingUp },
    { title: 'Analiz ve İzlenebilirlik', desc: 'İş süreçlerinde anlık raporlama avantajı ile doğru stratejik hedef geliştirme, hızlı karar verme ve kontrol imkanı elde edin.', icon: BarChart3 },
    { title: 'Güçlü Entegrasyon', desc: 'İş zekası (ChatGPT) ve hazır ERP entegrasyon bileşenleri aracılığı ile kolay entegrasyon sağlayın.', icon: Database },
    { title: 'Onay Mekanizması', desc: 'İş süreçlerine onay mekanızmasını dahil ederek, işlerin dijital ortamda doğru ve düzenli bir şekilde ilerlemesini sağlayın.', icon: CheckCircle },
    { title: 'Kullanıcı Yetkilendirmesi ve Güvenlik', desc: 'Kullanıcı yetkilendirme yönetimi ile güvenliğinizi bir üst seviyeye taşıyın.', icon: Lock },
    { title: 'Ölçeklenebilirlik', desc: 'İşletmenizin ölçeği ne olursa kullanıcı sayısına ve iş sürecine uyumlu bir iş akış süreci tasarlayın.', icon: Layers },
    { title: 'Kârlı Büyüme', desc: 'Daha etkin iş süreçleri, kaynakların verimli kullanımı ve yüksek performans ile kârlılığınızı artırın.', icon: Award }
  ];

  const processes = [
    'Masraf Süreci', 'Ödeme Takip Süreci', 'Evrak Takip Süreci', 'E-Fatura Entegrasyon Süreci', 'İşe Alım Süreci',
    'İzin Talep Süreci', 'SGK Giriş Süreci', 'Seyahat Talep Süreci', 'Hukuk Süreci', 'Gelen-Giden Evrak Süreci',
    'İdari Satın Alma Süreci', 'Depo Sevkiyat Süreci', 'Ürün Yönetimi Süreci', 'Müşteri Şikayet Süreci', 'Ürün Geliştirme Süreci',
    'Teklif Yönetimi Süreci', 'Ciro Hedefi Süreci', 'Rakip Durum Süreci', 'Sözleşme Süreçleri', 'Kurumsal Yönetim Süreci', 'KVKK Süreçleri'
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLdBpm) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdBpm) }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-white via-[#f4fafb] to-[#fcfefe] pt-28 md:pt-36 pb-20">
        {/* Decorative ambient glowing backdrops */}
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-80 h-80 bg-[#40949c]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Content Left */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Breadcrumb
              items={[{ label: 'Anasayfa', href: '/' }, { label: 'E-Flow', href: '/eflow' }, { label: 'E-Flow BPM' }]}
              accentClass="hover:text-teal-600"
              className="justify-center lg:justify-start mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-semibold mb-6"
            >
              <Sparkles size={14} className="text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span>No-Code BPM Platformu</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-900 tracking-tight"
            >
              E-Flow BPM ile
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-[#40949c] to-emerald-500 bg-clip-text text-transparent pb-1 inline-block">
                Sıfır Kod, Sınırsız Otomasyon!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              İş süreçlerinizi yönetmek ve otomatikleştirmek için ihtiyaçlarınızla örtüşen iş akışı yönetim uygulamanızı kod yazmadan tasarlayın ve hemen kullanmaya başlayın.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  "0 10px 30px rgba(16, 185, 129, 0.3)",
                  "0 10px 45px rgba(16, 185, 129, 0.6)",
                  "0 10px 30px rgba(16, 185, 129, 0.3)"
                ]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.3 },
                y: { duration: 0.6, delay: 0.3 },
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.06,
                boxShadow: "0 20px 50px rgba(16, 185, 129, 0.8)",
                y: -1
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/contact')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-500 to-[#40949c] text-white rounded-2xl transition-all duration-300 font-bold text-lg cursor-pointer shadow-lg"
            >
              <span>Teklif Al</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          {/* Hero Visual Right (Floating Workflow Orb Composition) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center w-full h-[400px]"
          >
            {/* Spinning decorative glass rings */}
            <div className="absolute w-72 h-72 border border-dashed border-[#40949c]/20 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-60 h-60 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]" style={{ animationDirection: 'reverse' }} />
            
            {/* Soft backdrop blur glow */}
            <div className="absolute w-64 h-64 bg-gradient-to-tr from-[#40949c]/20 to-blue-500/20 rounded-full blur-3xl" />
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-slate-900 via-[#0a192f] to-[#40949c] rounded-[2.5rem] flex items-center justify-center shadow-[0_25px_60px_rgba(64,148,156,0.35)] border border-slate-700/50"
            >
              <Workflow size={64} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
              
              {/* Satellite node elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-md flex items-center justify-center text-[#40949c]">
                <Zap size={18} />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-md flex items-center justify-center text-blue-600">
                <CheckCircle size={18} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Advantages Section (E-Flow BPM Ayrıcalıkları) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-xs font-semibold uppercase tracking-wider">
              <span>E-FLOW BPM FARKLIYOR</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              İşletmenize Güç Katan
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-[#40949c] to-[#ed4f37] bg-clip-text text-transparent">
                Yeni Nesil Ayrıcalıklar
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Eski, hantal süreçlerinizi geride bırakın. İş akışlarınızı hızlandıran, geliştirmeyi kolaylaştıran güçlü özelliklerle tanışın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Esnek iş süreçleri parmaklarınızın ucunda */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-[#fafbfc] to-white border border-slate-200/60 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-l-2xl group-hover:w-3 transition-all" />
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-200/50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 transition-transform group-hover:scale-110">
                <Smartphone size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                Esnek İş Süreçleri Parmaklarınızın Ucunda
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Mekandan bağımsız mobil uyumlu mimari sayesinde, nerede olursanız olun iş akışlarınıza erişin. Telefonunuza gelen anlık bildirimler üzerinden onay veya ret işlemlerini tek bir dokunuşla, saniyeler içinde tamamlayın.
              </p>
            </motion.div>

            {/* Card 2: No-code platformda geliştirme ve kullanım kolaylığı */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-[#fafbfc] to-white border border-slate-200/60 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 rounded-l-2xl group-hover:w-3 transition-all" />
              <div className="w-14 h-14 bg-teal-500/10 border border-teal-200/50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 transition-transform group-hover:scale-110">
                <Workflow size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-teal-600 transition-colors">
                No-Code Platformda Geliştirme Kolaylığı
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Geleneksel yazılım geliştirme süreçlerine son verin. Sürükle-bırak teknolojisi ile teknik bilgiye ihtiyaç duymadan süreçlerinizi dakikalar içinde tasarlayın, hızlıca devreye alın ve değişen kurallara göre anında adapte edin.
              </p>
            </motion.div>

            {/* Card 3: E-Flow BPM: İşletmenize güç katan ayrıcalıklar */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-[#fafbfc] to-white border border-slate-200/60 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#ed4f37] rounded-l-2xl group-hover:w-3 transition-all" />
              <div className="w-14 h-14 bg-[#ed4f37]/10 border border-[#ed4f37]/20 rounded-2xl flex items-center justify-center text-[#ed4f37] mb-8 transition-transform group-hover:scale-110">
                <Zap size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-[#ed4f37] transition-colors">
                İşletmenize Güç Katan Ayrıcalıklar
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Mevcut Mikro ERP yazılımlarınızla çift yönlü veri akışını otomatikleştirin. Süreç darboğazlarını, departman performanslarını canlı veri panoları üzerinden izleyerek karar alma mekanizmanızı veri odaklı hale getirin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Box Grid Section */}
      <section className="py-24 bg-white border-t border-slate-100" id="ozellikler">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <span>BPM KABİLİYETLERİ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Gücü Detaylarda Gizli
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-[#40949c] bg-clip-text text-transparent">
                Akıllı Süreç Yönetimi
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              İş süreçlerinizi optimize etmek ve otomatikleştirmek için tasarlanmış yüksek teknolojili bento özellikleri.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Bento Card 1: Interactive Flow Designer Canvas (Col span 2, Row span 2) */}
            <div className="md:col-span-2 md:row-span-2 bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-24 -bottom-16 w-[360px] h-[360px] bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid md:grid-cols-12 gap-8 items-center h-full relative z-10">
                {/* Left: Text Content */}
                <div className="md:col-span-5 space-y-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-200/50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Workflow size={22} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">Sürükle-Bırak Tasarımcı Tuvali</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    Hiçbir kodlama bilgisine ihtiyaç duymadan, görsel kutuları ve bağlantı oklarını kullanarak dakikalar içinde karmaşık iş akışları tasarlayın. Onay adımları, koşullu dallanmalar ve otomatik görev atamalarını tek bir tuval üzerinde kurgulayın.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    Tasarladığınız her akış, Mikro ve diğer ERP sistemlerinizle anında bağlanır; yayına almadan önce süreçlerinizi baştan sona test edin. Böylece tüm ekibiniz aynı akışı net biçimde görür.
                  </p>
                </div>

                {/* Right: Designer Mockup Graphic */}
                <div className="md:col-span-7 w-full bg-white border border-slate-200/60 rounded-3xl p-5 shadow-lg select-none">
                  <div className="flex items-center gap-1.5 pb-4 mb-4 border-b border-slate-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Süreç Editörü</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 py-6">
                    {/* Step 1 */}
                    <div className="bg-[#fafbfc] border border-blue-100 px-6 py-5 rounded-2xl shadow-sm flex items-center gap-4 w-full max-w-[300px] hover:border-blue-400 transition-colors">
                      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <p className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wide">MASRAF FORMU</p>
                        <p className="text-[11px] text-slate-400 font-bold">Talep Girişi</p>
                      </div>
                    </div>

                    {/* Connect arrow */}
                    <div className="text-slate-300 font-bold text-xs">▼</div>

                    {/* Step 2 (Decision Diamond) */}
                    <div className="bg-violet-50 border border-violet-200 px-6 py-5 rounded-2xl shadow-sm flex items-center gap-4 w-full max-w-[300px] relative hover:border-violet-400 transition-colors">
                      <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <Coins size={20} />
                      </div>
                      <div>
                        <p className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wide">KOŞUL KONTROLÜ</p>
                        <p className="text-[11px] text-violet-600 font-bold">Tutar &gt; 10,000 ₺</p>
                      </div>
                    </div>

                    {/* Connect arrow */}
                    <div className="text-slate-300 font-bold text-xs">▼</div>

                    {/* Step 3 */}
                    <div className="bg-green-50 border border-green-200 px-6 py-5 rounded-2xl shadow-sm flex items-center gap-4 w-full max-w-[300px] hover:border-green-400 transition-colors">
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <Database size={20} />
                      </div>
                      <div>
                        <p className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wide">OTOMATİK KAYIT</p>
                        <p className="text-[11px] text-green-600 font-bold">Mikro Entegrasyonu</p>
                      </div>
                    </div>

                    {/* Connect arrow */}
                    <div className="text-slate-300 font-bold text-xs">▼</div>

                    {/* Step 4 */}
                    <div className="bg-blue-50 border border-blue-200 px-6 py-5 rounded-2xl shadow-sm flex items-center gap-4 w-full max-w-[300px] hover:border-blue-400 transition-colors">
                      <div className="w-10 h-10 bg-[#40949c] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <CheckCircle size={20} />
                      </div>
                      <div>
                        <p className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wide">TAMAMLANDI</p>
                        <p className="text-[11px] text-[#40949c] font-bold">E-Posta Bildirimi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: AI Asistanı (Column span 1) */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-200/50 rounded-2xl flex items-center justify-center text-amber-600">
                  <Sparkles size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Yapay Zeka (AI) Entegrasyonu</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  E-Flow'un yapay zeka entegrasyonu ile süreçlerinizi akıllı asistan yardımıyla tasarlayın. Sistem şablonları anında çıkarır.
                </p>
              </div>

              {/* Chat Simulation */}
              <div className="mt-8 bg-white border border-slate-200/60 rounded-2xl p-4 shadow-md space-y-3">
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center text-[9px] font-black text-slate-500">SEN</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-2.5 text-[10px] font-medium text-slate-700">
                    "Satın alma onay süreci tasarlayabilir misin?"
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#40949c]/20 flex-shrink-0 flex items-center justify-center text-[9px] font-black text-[#40949c]">AI</div>
                  <div className="bg-[#40949c]/10 border border-[#40949c]/20 rounded-2xl p-2.5 text-[10px] font-medium text-[#40949c]">
                    "Satın alma onay şablonu oluşturuldu, ERP kayıt entegrasyonu hazır! 🚀"
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: ERP & Mikro Entegrasyonu (Column span 1) */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-500/10 border border-green-200/50 rounded-2xl flex items-center justify-center text-green-600">
                  <Database size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">ERP & Mikro Entegrasyonu</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Hazır veri entegrasyon kartları sayesinde Mikro ve diğer tüm ERP yazılımlarınızla çift yönlü veri akışını kolayca başlatın.
                </p>
              </div>

              {/* Data Sync Mockup */}
              <div className="mt-8 bg-white border border-slate-200/60 rounded-2xl p-4 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center text-white text-[10px] font-black">EF</div>
                  <span className="text-[11px] font-extrabold text-slate-800">E-Flow</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#40949c] animate-ping" />
                  <span className="text-[9px] font-black text-[#40949c] tracking-widest uppercase">SENKRONİZE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold text-slate-800">Mikro ERP</span>
                  <div className="w-7 h-7 bg-[#ed4f37] rounded-lg flex items-center justify-center text-white text-[10px] font-black">MK</div>
                </div>
              </div>
            </div>

            {/* Bento Card 4: Mobile Approval Interface (Column span 1) */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-200/50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <Smartphone size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Mobil Uygulama & Push</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Süreçleriniz ve onay bekleyen talepleriniz nerede olursanız olun anlık push bildirimleriyle telefonunuza gelsin.
                </p>
              </div>

              {/* Phone Approval Widget */}
              <div className="mt-8 bg-white border border-slate-200/60 rounded-2xl p-4 shadow-md space-y-3">
                <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 border-b border-slate-100 pb-2">
                  <span>ONAY TALEBİ</span>
                  <span className="text-blue-500">Şimdi</span>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-800">Satın Alma İzni</p>
                  <p className="text-[9px] text-slate-500 font-bold mt-0.5">Tutar: 45,000 ₺ · Depo Malzemesi</p>
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="flex-1 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-[10px] font-bold transition-colors">Onayla</button>
                  <button className="flex-1 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-[10px] font-bold transition-colors">Reddet</button>
                </div>
              </div>
            </div>

            {/* Bento Card 5: SaaS Cloud Model (Column span 1) */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-teal-500/10 border border-teal-200/50 rounded-2xl flex items-center justify-center text-teal-600">
                  <Globe size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Kiralama & SaaS Altyapısı</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Yüksek sunucu ve donanım yatırımı maliyetleri olmadan bulut tabanlı SaaS kiralama modeliyle daima güncel sürümü kullanın.
                </p>
              </div>

              {/* Stats Indicators */}
              <div className="mt-8 bg-white border border-slate-200/60 rounded-2xl p-4 shadow-md flex items-center justify-around text-center">
                <div>
                  <p className="text-lg font-black text-[#40949c]">0 ₺</p>
                  <p className="text-[9px] text-slate-400 font-bold">Sunucu Yatırımı</p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div>
                  <p className="text-lg font-black text-slate-900">AWS</p>
                  <p className="text-[9px] text-slate-400 font-bold">Güvenli Bulut</p>
                </div>
              </div>
            </div>

            {/* Bento Card 6: Analysis & Dashboard (Column span 1) */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-200/50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <BarChart3 size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Analiz & İzlenebilirlik</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Süreç darboğazlarını, onay sürelerini ve departman performanslarını canlı raporlarla grafiksel olarak izleyin.
                </p>
              </div>

              {/* Progress Chart Mockup */}
              <div className="mt-8 bg-white border border-slate-200/60 rounded-2xl p-4 shadow-md flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-[3px] border-[#40949c] border-t-transparent flex items-center justify-center text-[10px] font-black text-[#40949c] animate-spin" style={{ animationDuration: '4s' }}>
                  85%
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-slate-800">Süreç Hızı Artışı</p>
                  <p className="text-[9px] text-slate-400 font-bold">Manuel Hataların Önlenmesi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Categories Section (Replacing standard processes list) */}
      <section className="py-24 bg-[#f8fafc]/70 border-t border-slate-200/60" id="surecler">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-200/20 rounded-full text-emerald-600 text-xs font-semibold uppercase tracking-wider">
              <span>SÜREÇ KATEGORİLERİ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Neler Tasarlayabilirsiniz?
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              İşletmenizin her departmanı için özelleştirilmiş akıllı süreç şemaları oluşturun.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 flex gap-2">
              <button
                onClick={() => setActiveTab('finans')}
                className={`px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
                  activeTab === 'finans'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Finans & Satın Alma
              </button>
              <button
                onClick={() => setActiveTab('ik')}
                className={`px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
                  activeTab === 'ik'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                İnsan Kaynakları
              </button>
              <button
                onClick={() => setActiveTab('lojistik')}
                className={`px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
                  activeTab === 'lojistik'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lojistik & Operasyon
              </button>
            </div>
          </div>

          {/* Category Cards Rendering */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'finans' && [
              { title: 'Masraf Talep Süreci', desc: 'Personel masraf formlarının girişi, seviyeli onay mekanizması ve muhasebe entegrasyonu.', icon: Coins },
              { title: 'Satın Alma Onay Süreci', desc: 'Birim taleplerinden teklif toplamaya, yönetici onayından sipariş fişi açılışına kadar tam entegre akış.', icon: Receipt },
              { title: 'Ödeme Takip Süreci', desc: 'Cari ödemeleri, fatura vade kontrolleri ve banka talimatlarının otomatik oluşturulması.', icon: Clock },
              { title: 'Ciro Hedefi Süreci', desc: 'Satış ekiplerinin ciro hedeflerinin takibi, kota hesaplamaları ve anlık raporlar.', icon: BarChart3 },
              { title: 'Teklif Yönetimi Süreci', desc: 'Müşteri teklif hazırlama, iskonto limit kontrolleri ve revizyon geçmişi takibi.', icon: Target },
              { title: 'E-Fatura Entegrasyon Süreci', desc: 'Gelen e-faturaların otomatik okunarak onay akışlarına sokulması ve ERP entegrasyonu.', icon: FileText },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-black text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}

            {activeTab === 'ik' && [
              { title: 'İşe Alım Süreci', desc: 'Aday mülakat adımları, departman onayları, iş teklifleri ve onboarding süreçlerinin yönetimi.', icon: Users },
              { title: 'İzin Talep Süreci', desc: 'Çalışan izin talepleri, bakiye kontrolleri, vekalet tanımları ve insan kaynakları onayı.', icon: Clock },
              { title: 'SGK Giriş Süreci', desc: 'Yeni personelin evrak toplama, SGK giriş bildirimi ve departman hazırlık adımları.', icon: Shield },
              { title: 'Seyahat Talep Süreci', desc: 'Yurtiçi/yurtdışı seyahat istekleri, avans talepleri, bütçe kontrolleri ve konaklama onayları.', icon: Globe },
              { title: 'KVKK Süreçleri', desc: 'Müşteri ve çalışan KVKK onay formları, veri işleme izin takipleri ve yasal saklama adımları.', icon: Lock },
              { title: 'Kurumsal Yönetim Süreci', desc: 'İç prosedür güncellemeleri, yönetim kurulu karar akışları ve imza sirküleri onayları.', icon: Award },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-black text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}

            {activeTab === 'lojistik' && [
              { title: 'Depo Sevkiyat Süreci', desc: 'Sipariş sevkiyat planlaması, araç yükleme formları ve irsaliye entegrasyon adımları.', icon: Truck },
              { title: 'Ürün Yönetimi Süreci', desc: 'Yeni stok kartı açılış istekleri, barkod tanımları ve birim onay akışları.', icon: Layers },
              { title: 'Evrak Takip Süreci', desc: 'Lojistik belgeleri, taşıma taahhütnameleri ve gümrük onay süreçlerinin takibi.', icon: FileText },
              { title: 'Gelen-Giden Evrak Süreci', desc: 'Firma genel gelen kargo kayıtları, barkodlama ve ilgili birimlere otomatik dağıtımı.', icon: FileText },
              { title: 'Müşteri Şikayet Süreci', desc: 'Müşteri geri bildirimlerinin alınması, kalite birimi onayları ve aksiyon takipleri.', icon: Target },
              { title: 'Ürün Geliştirme Süreci', desc: 'Yeni ürün tasarım talepleri, teknik çizim onayları ve maliyet analiz akışları.', icon: Factory },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:border-green-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-black text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Dark CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-10 sm:p-16 rounded-[3rem] text-center overflow-hidden shadow-2xl border border-slate-800"
          >
            {/* Glowing neon shapes inside CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#40949c]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ed4f37]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-bold">
                <Sparkles size={14} className="text-amber-400" />
                <span>Hazır Mısınız?</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto tracking-tight">
                İş Süreçlerinizi Modernize Etmeye Hazır Mısınız?
              </h2>
              
              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium">
                Süreçlerinizi dijitalleştirip otomatikleştirin, insan hatalarını sıfıra indirin.
              </p>
              
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact')}
                  className="px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-500 to-[#40949c] text-white rounded-2xl font-bold text-lg cursor-pointer shadow-lg hover:shadow-[0_15px_35px_rgba(64,148,156,0.4)] transition-all duration-300"
                >
                  İletişime Geç
                  <ArrowRight className="w-5 h-5 ml-2.5 inline" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SSS / FAQ Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Sıkça Sorulan Sorular</h2>
            <p className="text-sm text-slate-500 font-bold">E-Flow BPM hakkında en çok merak edilenler</p>
          </div>

          <div className="space-y-4">
            {sssBpm.map((f, i) => (
              <details key={i} className="group rounded-[1.75rem] border border-slate-200/60 bg-[#f8fafc]/50 overflow-hidden transition-all duration-300 hover:border-slate-300">
                <summary className="flex items-start gap-4 p-6 cursor-pointer list-none font-bold text-slate-800">
                  <span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">{i + 1}</span>
                  <span className="flex-1 text-sm md:text-base">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 pl-[4.5rem] text-xs md:text-sm text-slate-600 leading-relaxed font-medium">{f.cevap}</p>
              </details>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-2 border-t border-slate-100 pt-8">
            <span className="text-xs font-extrabold text-slate-400 mr-2 uppercase tracking-wider">İlgili Bağlantılar:</span>
            {[
              { etiket: 'E-Flow Platformu', href: '/eflow' },
              { etiket: 'E-Flow DMS Çözümleri', href: '/eflow-dms' },
              { etiket: 'Tüm Hizmetlerimiz', href: '/services' },
              { etiket: 'İletişim ve Destek', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 bg-white border border-slate-200 hover:border-emerald-600 rounded-xl px-4 py-2 hover:shadow-sm transition-all">
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
