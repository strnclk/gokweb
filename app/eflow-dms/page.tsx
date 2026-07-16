'use client';

import { FolderOpen, FileText, Shield, Search, Clock, Users, Lock, Share2, CheckCircle, TrendingUp, Target, Award, Zap, ArrowRight, Sparkles, Download, Brain, Smartphone, PenTool, History, Star, Eye, Archive, Trash2, BarChart3, Coins, Receipt, FileCheck, Globe, Workflow } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

const sssDms = [
  { soru: 'E-Flow DMS nedir?', cevap: 'E-Flow DMS, belgelerinizi dijital ortamda saklamanızı, sürümlemenizi ve erişimini kontrol etmenizi sağlayan bir doküman yönetim sistemidir. Kağıt süreçlerini dijitalleştirir, evraklara her yerden hızlı erişim sağlar.' },
  { soru: 'Hangi belge türlerini yönetebilirim?', cevap: 'Sözleşme, fatura, form, resmi evrak ve benzeri tüm belgelerinizi kategorize edip arşivleyebilir; gelişmiş arama ile saniyeler içinde bulabilirsiniz.' },
  { soru: 'Erişim ve güvenlik nasıl sağlanıyor?', cevap: 'Kullanıcı bazlı yetki ve erişim kontrolü, sürüm geçmişi ve loglama ile belgeleriniz güvende kalır; kimin neye eriştiği izlenebilir.' },
  { soru: 'E-Flow BPM ile birlikte çalışır mı?', cevap: 'Evet. Süreçleriniz (BPM) ile belgeleriniz (DMS) tek akışta buluşur; onay adımlarında ilgili belgeler otomatik ilişkilendirilir.' },
];

const serviceJsonLdDms = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Flow DMS - Doküman Yönetim Sistemi',
  serviceType: 'Doküman Yönetimi ve Dijital Arşivleme',
  description: 'Belge yönetimi, dijital arşivleme, sürüm ve erişim kontrolü ile kağıt süreçlerinin dijitalleştirilmesi.',
  provider: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık', url: 'https://gokkusagiyazilim.com.tr' },
  areaServed: { '@type': 'City', name: 'İstanbul' },
};

const faqJsonLdDms = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sssDms.map((f) => ({ '@type': 'Question', name: f.soru, acceptedAnswer: { '@type': 'Answer', text: f.cevap } })),
};



export default function EflowDmsPage() {
  const router = useRouter();
  




  

  // Interactive Tab State: Document Categories
  const [activeTab, setActiveTab] = useState<'finans' | 'hukuk' | 'operasyon'>('finans');

  

    

  



  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLdDms) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdDms) }} />
      <Navbar />
      
      {/* Hero Section - Featuring "Interactive Document Explorer Mockup" */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-white via-[#fcfdff] to-[#f5f8fd] pt-28 md:pt-36 pb-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left: Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Breadcrumb
              items={[{ label: 'Anasayfa', href: '/' }, { label: 'E-Flow', href: '/eflow' }, { label: 'E-Flow DMS' }]}
              accentClass="hover:text-indigo-600"
              className="justify-center lg:justify-start mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-200/20 rounded-full text-indigo-600 text-sm font-semibold mb-6"
            >
              <Sparkles size={14} className="text-violet-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span>No-Code DMS Platformu</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-900 tracking-tight"
            >
              Kağıtsız Ofise
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-[#40949c] bg-clip-text text-transparent">
                Tek Tıkla Geçin
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              İş akışınızda dolaşan tüm belgeleri akıllı klasörlerde organize edin. Yapay zeka ile otomatik okuyun, anında arayıp bulun ve e-imzalayın.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 45px rgba(99, 102, 241, 0.5)",
                  y: -1
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/contact')}
                className="group inline-flex items-center gap-3 px-8 py-4.5 bg-gradient-to-r from-indigo-600 via-violet-500 to-[#40949c] text-white rounded-2xl transition-all duration-300 font-bold text-base cursor-pointer shadow-lg w-full sm:w-auto justify-center"
              >
                <span>Teklif Al</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Hero Visual Right (Floating Vault Composition) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center w-full h-[400px]"
          >
            {/* Spinning decorative glass rings */}
            <div className="absolute w-72 h-72 border border-dashed border-indigo-500/20 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-60 h-60 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]" style={{ animationDirection: 'reverse' }} />
            
            {/* Soft backdrop blur glow */}
            <div className="absolute w-64 h-64 bg-gradient-to-tr from-indigo-500/20 to-[#40949c]/20 rounded-full blur-3xl" />
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-slate-900 via-[#1e1b4b] to-indigo-950 rounded-[2.5rem] flex items-center justify-center shadow-[0_25px_60px_rgba(99,102,241,0.35)] border border-slate-700/50"
            >
              <FolderOpen size={64} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
              
              {/* Satellite node elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-md flex items-center justify-center text-indigo-600">
                <Brain size={18} />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-md flex items-center justify-center text-[#40949c]">
                <Shield size={18} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BPM & DMS Ecosystem Synergy Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual: Dynamic Closed Loop Synergy Graphic */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[320px] order-last lg:order-first">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#40949c]/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Spinning Synergy loop path (Blinking/flashing loops instead of static faded lines) */}
              <motion.div
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-80 h-36 border-2 border-dashed border-indigo-400/50 rounded-full rotate-12"
              />
              <motion.div
                animate={{ opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-80 h-36 border-2 border-dashed border-teal-400/50 rounded-full -rotate-12"
              />

              {/* BPM Node (Green) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-10 top-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-500 to-teal-600 p-5 rounded-3xl text-white shadow-xl flex flex-col items-center gap-2 z-10 border border-emerald-400"
              >
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center"><Workflow size={20} /></div>
                <span className="text-xs font-black tracking-wider">E-FLOW BPM</span>
                <span className="text-[9px] text-emerald-100 font-bold uppercase">Süreç / Akış</span>
              </motion.div>

              {/* Dynamic flowing dotted indicator (Constant linear speed, flashing while morphing color) */}
              <motion.div
                initial={{
                  x: -130,
                  opacity: 0,
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)'
                }}
                animate={{
                  x: [-130, 130],
                  opacity: [0, 1, 0.3, 1, 0.3, 1, 0],
                  scale: [0.8, 1.1, 0.9, 1.1, 0.9, 1.1, 0.8],
                  backgroundColor: ['#10b981', '#7c3aed', '#4f46e5'],
                  boxShadow: [
                    '0 0 12px rgba(16, 185, 129, 0.6)',
                    '0 0 15px rgba(124, 58, 237, 0.8)',
                    '0 0 12px rgba(79, 70, 229, 0.6)'
                  ]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-7 h-7 rounded-full flex items-center justify-center text-white z-20"
              >
                <ArrowRight size={12} />
              </motion.div>

              {/* DMS Node (Purple) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute right-10 top-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-600 to-violet-700 p-5 rounded-3xl text-white shadow-xl flex flex-col items-center gap-2 z-10 border border-indigo-400"
              >
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center"><FolderOpen size={20} /></div>
                <span className="text-xs font-black tracking-wider">E-FLOW DMS</span>
                <span className="text-[9px] text-indigo-100 font-bold uppercase">Depolama / Arşiv</span>
              </motion.div>
            </div>

            {/* Right: Synergy Text Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-xs font-semibold uppercase tracking-wider">
                <span>TAM ENTEGRE EKOSİSTEM</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                BPM ve DMS'in
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-[#40949c] bg-clip-text text-transparent">
                  Kusursuz Uyumu
                </span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                E-Flow BPM ile başlattığınız bir iş akışı (örneğin satın alma veya sözleşme onaylama) tamamlandığı anda, oluşturulan evraklar otomatik olarak E-Flow DMS'e aktarılır. Veri kaybı, klasörleme hatası veya manuel aktarım gecikmeleri tamamen tarihe karışır.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Document Lifecycle Vertical Timeline Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-200/20 rounded-full text-violet-600 text-xs font-semibold uppercase tracking-wider">
              <span>YAŞAM DÖNGÜSÜ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Belgenizin Dijital Yolculuğu
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Belgelerinizin sisteme kabul edilmesinden, AI destekli OCR ile okunmasına, e-imza onayından adli düzeyde arşivlenmesine uzanan tam güvenlikli akıllı yaşam döngüsü.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-dashed border-l border-slate-200 pointer-events-none" />

            {/* Timeline Steps */}
            <div className="space-y-16">
              {[
                { step: '01', title: 'Belgeyi Yakala & OCR Okuma', desc: 'Tarayıcı, mobil veya e-posta yoluyla gelen taranmış evraklar sisteme yüklenir. AI destekli OCR altyapısı doküman içerisindeki yazıları, tarih ve tutarları otomatik okuyup veri alanlarına kaydeder.', icon: Brain, align: 'left' },
                { step: '02', title: 'Akıllı Klasörleme ve Sınıflandırma', desc: 'Evraklar içeriklerine veya tip tanımlarına göre otomatik olarak ilgili departman klasörlerine atanır. Hiçbir belgenin kaybolmayacağı şekilde merkezi düzende indekslenir.', icon: FolderOpen, align: 'right' },
                { step: '03', title: 'Entegre Onay & E-İmza Süreci', desc: 'İlgili belge onay veya ıslak imza gerektiriyorsa, entegre e-imza / mobil imza modülü devreye girer. Yasal geçerliliği olan imzalar saniyeler içinde akış üzerinden tamamlanır.', icon: PenTool, align: 'left' },
                { step: '04', title: 'Güvenli Saklama & Detaylı Loglama', desc: 'Evrakların geçmiş sürümleri (v1.1, v1.2) versiyon kontrolü altında güvenle saklanır. Hangi kullanıcının ne zaman hangi dosyaya eriştiği veya indirdiği adli düzeyde loglanır.', icon: Shield, align: 'right' }
              ].map((node, index) => {
                const NIcon = node.icon;
                const isLeft = node.align === 'left';
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                    {/* Left block */}
                    <div className={`w-full md:w-[45%] ${isLeft ? 'text-center md:text-right' : 'order-last text-center md:text-left'}`}>
                      <div className="bg-[#f8fafc]/70 border border-slate-200/60 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="text-4xl font-black bg-gradient-to-r from-indigo-600 via-violet-500 to-[#40949c] bg-clip-text text-transparent block mb-2">{node.step}</span>
                        <h3 className="text-lg font-black text-slate-800 mb-2">{node.title}</h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{node.desc}</p>
                      </div>
                    </div>

                    {/* Timeline Node Orb (Center) */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-600 shadow-md z-10">
                      <NIcon size={20} />
                    </div>

                    {/* Right space filler placeholder */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Asymmetric Detailed Feature Focus Cards */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-200/20 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              <span>GELİŞMİŞ TEKNOLOJİLER</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Güvenlik ve Teknolojik Detaylar
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              DMS altyapısının kurumsal ihtiyaçlarınıza cevap veren yüksek güvenlikli standartları.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Advanced OCR */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-indigo-600 rounded-l-2xl" />
              <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-200/50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 transition-transform group-hover:scale-110">
                <Brain size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                Yapay Zeka Destekli OCR
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Resim, taranmış PDF ve benzeri tüm evrak tiplerindeki metinleri, tutarları ve tabloları otomatik okuyarak sınıflandırın. Manuel veri girişi hatalarını sıfıra indirin.
              </p>
            </div>

            {/* Card 2: Version Control */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-violet-500 rounded-l-2xl" />
              <div className="w-14 h-14 bg-violet-500/10 border border-violet-200/50 rounded-2xl flex items-center justify-center text-violet-600 mb-8 transition-transform group-hover:scale-110">
                <History size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-violet-600 transition-colors">
                Doküman Versiyonlama & Sürüm Takibi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Belgelerin eski sürümlerini asla kaybetmeyin. Kimin, ne zaman değişiklik yaptığını kronolojik olarak görün ve dilediğiniz revizyona tek tıkla anında geri dönün.
              </p>
            </div>

            {/* Card 3: E-imza */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-[#40949c] rounded-l-2xl" />
              <div className="w-14 h-14 bg-[#40949c]/10 border border-[#40949c]/20 rounded-2xl flex items-center justify-center text-[#40949c] mb-8 transition-transform group-hover:scale-110">
                <PenTool size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#40949c] transition-colors">
                E-İmza & Mobil İmza Entegrasyonu
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Onay süreçlerindeki dokümanlarınızı entegre e-imza veya mobil imza desteğiyle ıslak imzaya gerek kalmadan yasal olarak imzalayın. İş süreçlerini ofis sınırlarının dışına çıkarın.
              </p>
            </div>

            {/* Card 4: Secure Sharing */}
            <div className="bg-[#f8fafc]/70 border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-slate-900 rounded-l-2xl" />
              <div className="w-14 h-14 bg-slate-900/10 border border-slate-200/50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 transition-transform group-hover:scale-110">
                <Share2 size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-slate-900 transition-colors">
                Güvenli Dış Paylaşım & Erişim Loglama
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Belgelerinizi parola koruması, indirme engeli ve zaman ayarlı erişim linkleri oluşturarak üçüncü taraflarla güvenle paylaşın. Tüm erişim hareketlerini detaylı olarak loglayın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Tabs Section */}
      <section className="py-24 bg-[#f8fafc]/70 border-t border-slate-200/60" id="dokumanlar">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-200/20 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              <span>DEPARTMAN ODAKLI DOKÜMANLAR</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Neleri Arşivleyebilirsiniz?
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              İşletmenizin tüm birimlerinin doküman yükünü ortadan kaldıracak merkezi dosya şemaları.
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
                Finans & Muhasebe
              </button>
              <button
                onClick={() => setActiveTab('hukuk')}
                className={`px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
                  activeTab === 'hukuk'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                İdari & Hukuki
              </button>
              <button
                onClick={() => setActiveTab('operasyon')}
                className={`px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 cursor-pointer ${
                  activeTab === 'operasyon'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Teknik & Operasyon
              </button>
            </div>
          </div>

          {/* Category Cards Rendering */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'finans' && [
              { title: 'Tedarikçi Faturaları', desc: 'Gelen e-faturaların, masraf fişlerinin taranarak otomatik arşivlenmesi ve OCR ile okunması.', icon: Receipt },
              { title: 'Müşteri Ödeme Dekontları', desc: 'Banka dekontlarının cari hesap kartlarıyla otomatik olarak eşleştirilerek depolanması.', icon: Coins },
              { title: 'Bütçe & Rapor Dosyaları', desc: 'Departman bazlı hazırlanan bütçe formlarının, finansal tabloların güvenli versiyon takibi.', icon: BarChart3 },
              { title: 'Gider Pusulaları', desc: 'Şirket içi masraf bildirim belgelerinin yasal süre boyunca dijital saklanması.', icon: FileText },
              { title: 'Gümrük Beyannameleri', desc: 'İthalat/ihracat gümrük belgelerinin ve lojistik faturalarının beyanname bazlı tasnifi.', icon: Globe },
              { title: 'Banka Talimatları', desc: 'Banka para transfer talimatlarının yetkili e-imza onayları ile saklanması.', icon: FileCheck },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:border-indigo-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-black text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}

            {activeTab === 'hukuk' && [
              { title: 'Müşteri Sözleşmeleri', desc: 'Satış sözleşmelerinin, revizyon geçmişlerinin ve ek protokollerin onaylı takibi.', icon: Lock },
              { title: 'Yönetim Kurulu Kararları', desc: 'Kurul kararlarının, resmi imza sirkülerinin e-imza ile imzalanmış hallerinin saklanması.', icon: Award },
              { title: 'KVKK Onay Formları', desc: 'Müşteri ve tedarikçilerden toplanan ıslak veya dijital imzalı KVKK onaylarının yönetimi.', icon: Shield },
              { title: 'Vekaletnameler & Sirküler', desc: 'Şirket temsilcilerine ait vekaletnamelerin süre takip uyarıları ile arşivlenmesi.', icon: FileCheck },
              { title: 'Gizlilik Sözleşmeleri (NDA)', desc: 'Personel ve iş ortaklarıyla imzalanan gizlilik taahhütnamelerinin merkezi yönetimi.', icon: Lock },
              { title: 'Dava Evrakları & İhtarlar', desc: 'Hukuk birimine ait dava dosyalarının, noter ihtarlarının kronolojik olarak arşivlenmesi.', icon: History },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:border-violet-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-black text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}

            {activeTab === 'operasyon' && [
              { title: 'Teknik Şartnameler', desc: 'Üretim veya satın alma süreçlerine ait teknik şartname revizyonlarının yönetimi.', icon: Target },
              { title: 'İş Sağlığı (İSG) Belgeleri', desc: 'Personel İSG sertifikalarının, sağlık raporlarının ve eğitim belgelerinin takibi.', icon: Shield },
              { title: 'ISO Kalite Prosedürleri', desc: 'ISO 9001 kalite el kitaplarının, düzeltici aksiyon formlarının güncel dağıtım takibi.', icon: Award },
              { title: 'Kargo Giriş/Çıkış Belgeleri', desc: 'Gelen ve giden evraklara ait lojistik teslim fişlerinin dijital arşivi.', icon: Share2 },
              { title: 'Ürün Kullanım Kılavuzları', desc: 'Müşterilere sunulan ürün katalog ve teknik dokümanlarının güncel versiyon kontrolü.', icon: FileText },
              { title: 'Yazılım & Lisans Belgeleri', desc: 'Şirket bünyesindeki yazılım lisans sözleşmelerinin, bitiş tarihleri takip uyarısıyla kaydı.', icon: Lock },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:border-indigo-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
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
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-bold">
                <Sparkles size={14} className="text-violet-400" />
                <span>Başlayın</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto tracking-tight">
                E-Flow DMS Hakkında Daha Fazla Bilgi Edinin
              </h2>
              
              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium">
                Belgelerin kaybolma riskini ortadan kaldırın, zaman ve kaynak tasarrufunu başlatın.
              </p>
              
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact')}
                  className="px-10 py-5 bg-gradient-to-r from-indigo-600 via-violet-500 to-[#40949c] text-white rounded-2xl font-bold text-lg cursor-pointer shadow-lg hover:shadow-[0_15px_35px_rgba(99,102,241,0.4)] transition-all duration-300"
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
            <p className="text-sm text-slate-500 font-bold">E-Flow DMS hakkında en çok merak edilenler</p>
          </div>

          <div className="space-y-4">
            {sssDms.map((f, i) => (
              <details key={i} className="group rounded-[1.75rem] border border-slate-200/60 bg-[#f8fafc]/50 overflow-hidden transition-all duration-300 hover:border-slate-300">
                <summary className="flex items-start gap-4 p-6 cursor-pointer list-none font-bold text-slate-800">
                  <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">{i + 1}</span>
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
              { etiket: 'E-Flow BPM Çözümleri', href: '/eflow-bpm' },
              { etiket: 'Tüm Hizmetlerimiz', href: '/services' },
              { etiket: 'İletişim ve Destek', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 bg-white border border-slate-200 hover:border-indigo-600 rounded-xl px-4 py-2 hover:shadow-sm transition-all">
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
