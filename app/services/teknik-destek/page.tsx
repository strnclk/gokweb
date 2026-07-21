'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  LifeBuoy, Check, Sparkles, ArrowRight, Phone, Shield, Clock, Database, Settings, ChevronDown, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function TeknikDestekPage() {
  const [activeStep, setActiveStep] = useState(0);

  const supportSteps = [
    { title: '1. Çağrı Kaydı & SLA Başlangıcı', desc: 'Destek talebiniz yardım masamıza ulaştığı an kategorize edilir ve SLA süreniz anında başlar.', detail: 'Talebiniz önceliğine göre sınıflandırılır ve konuya en uygun uzman mühendise yönlendirilir; kritik durumlarda hızlandırılmış süreç işletilir.' },
    { title: '2. Uzaktan / Yerinde Bağlantı', desc: 'AnyDesk / TeamViewer ile saniyeler içinde sunucunuza bağlanıp arızaya müdahale ediyoruz.', detail: 'Fiziksel donanım veya SQL veri tabanı çökmesi durumunda İstanbul içi yerinde müdahale ekibi yola çıkar.' },
    { title: '3. Kök Neden Analizi & Çözüm', desc: 'Sorunu anlık çözmekle kalmıyor, aynı hatanın tekrar etmemesi için root-cause analizi yapıyoruz.', detail: 'SQL sorgu kilitlenmeleri ve indeks bozulmaları tespit edilerek veritabanı sağlık parametreleri yenilenir.' },
    { title: '4. Periyodik SQL & Bulut Bakımı', desc: 'Belirli periyotlarla veritabanınızın yedekleme ve indeksleme bakımlarını otomatik yürütüyoruz.', detail: 'Verileriniz hem yerel NAS ünitesine hem de izole siber güvenlikli bulut sunucularına senkronize saklanır.' }
  ];

  const slaTiers = [
    { title: 'Kritik Sorunlar (Sistem Duruşları)', time: '2 Saat İçinde', color: 'border-red-200 bg-red-50/50 text-red-700', desc: 'Mikro SQL veritabanı çökmesi, ağ bağlantı sorunları, e-Fatura gönderilememesi gibi iş durduran durumlar.' },
    { title: 'Orta Dereceli Sorunlar', time: '4 Saat İçinde', color: 'border-amber-200 bg-amber-50/50 text-amber-700', desc: 'Fatura şablonu bozulması, yeni vergi tanımı, kullanıcı yetkilendirme veya veri tabanı yavaşlama şikayetleri.' },
    { title: 'Genel Sorunlar & Talepler', time: 'Gün İçi Destek', color: 'border-sky-200 bg-sky-50/50 text-sky-700', desc: 'Kullanıcıların genel kullanım soruları, basit rapor şablon istekleri ve arşivleme/yedekleme kontrolleri.' }
  ];

  const maintenanceScope = [
    { title: 'SQL Veri Tabanı İndeksleme ve Optimizasyon', desc: 'Zamanla yavaşlayan fatura kaydetme, stok arama ve cari ekstre alma işlemlerinizi SQL tablolarını optimize ederek ilk günkü hızına kavuşturuyoruz.', icon: Database },
    { title: 'Fidye Yazılımı ve Güvenlik Tedbirleri', desc: 'Mikro SQL veritabanınızı siber saldırılara, fidye yazılımlarına (ransomware) ve yetkisiz erişimlere karşı şifreli el terminalleri ve port filtreleme ile koruyoruz.', icon: Shield },
    { title: 'Günlük Otomatik Bulut Yedekleme', desc: 'Verilerinizin donanım arızası veya yangın durumunda dahi kaybolmaması için lokal ve buluta şifreli, otomatik günlük yedekleme sistemleri kuruyoruz.', icon: Clock },
    { title: 'GİB Mevzuat ve Mikro Sürüm Güncellemeleri', desc: 'Mevzuatta yapılan KDV, tevkifat veya e-fatura şablon değişikliklerini en güncel Mikro sürümleriyle entegre ederek sisteminize sıfır duruş süresiyle uyguluyoruz.', icon: Settings }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-sky-50/50 via-white to-blue-50/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.png" alt="Rainbow Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-sm font-semibold mb-6">
                <Sparkles size={14} className="text-sky-600" />
                Kesintisiz İş Sürekliliği Garantisi
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Teknik Destek <br />
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-800 bg-clip-text text-transparent">&amp; Profesyonel Bakım</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                Mikro ERP yazılımlarınızın, veritabanlarınızın ve sunucularınızın sorunsuz çalışması için uzaktan hızlı bağlantı veya yerinde teknik destek sağlıyoruz.
              </p>

              {/* Dynamic Live Teknik Destek Feature Badges (Item 5) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-50/90 border border-sky-200/90 rounded-xl text-sky-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-sky-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
                  Max 2 Saat Müdahale SLA
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/90 border border-blue-200/90 rounded-xl text-blue-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-blue-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Yerinde &amp; Uzaktan Nöbetçi Destek
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50/90 border border-emerald-200/90 rounded-xl text-emerald-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-emerald-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Otomatik Bulut &amp; NAS Yedekleme
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50/90 border border-indigo-200/90 rounded-xl text-indigo-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-indigo-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  SQL Optimizasyon &amp; Virüs Koruması
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-sky-600 hover:bg-sky-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Destek Sözleşmesi Bilgisi Alın
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side: Realtime System Health & SLA Monitor Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-500/10 rounded-3xl blur-3xl" />
              <div className="relative border border-sky-200/80 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl shadow-sky-500/10">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">system-health.sla-monitor.live</span>
                  </div>
                  <div className="px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-[11px] font-extrabold text-sky-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    Sistemler Çalışıyor
                  </div>
                </div>

                {/* SLA Metrics Cards */}
                <div className="space-y-3.5">
                  <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-4 rounded-2xl text-white shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-sky-100 font-semibold">SQL & Sunucu Uptime</span>
                      <div className="text-xl font-black mt-0.5">%99.99 Kesintisiz</div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/30">
                      SLA: 2 Saat
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <div className="font-extrabold text-slate-800">Kritik Müdahale</div>
                      <div className="text-red-600 font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} /> max 2 Saat Garantili
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <div className="font-extrabold text-slate-800">Bulut Yedekleme</div>
                      <div className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} /> Günlük Otomatik
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-sky-50/70 border border-sky-200/70 rounded-xl flex items-center justify-between text-xs">
                    <span className="font-bold text-sky-900">Uzaktan & Yerinde Teknik Destek</span>
                    <span className="font-extrabold text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-200">
                      Aktif Nöbet
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support & SLA Workflow (Item 4: Canlı İnteraktif Tab Panosu) */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full">
              Şeffaf SLA Süreci
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Teknik Destek &amp; Müdahale Adımları
            </h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Arıza bildiriminden sistem optimizasyonuna kadar taahhütlü teknik destek sürecimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Steps Selector */}
            <div className="md:col-span-1 space-y-2.5">
              {supportSteps.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4 rounded-2xl font-bold transition-all text-sm flex items-center justify-between border cursor-pointer ${
                    activeStep === i 
                      ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white border-sky-600 shadow-lg shadow-sky-500/20 translate-x-1' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-sky-50/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center font-extrabold ${
                      activeStep === i ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{i + 1}
                    </span>
                    <span>{st.title.split('. ')[1]}</span>
                  </div>
                  <ArrowRight size={16} className={activeStep === i ? 'translate-x-1 transition-transform' : 'text-slate-400 opacity-60'} />
                </button>
              ))}
            </div>

            {/* Right Step Details View */}
            <div className="md:col-span-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-500/5 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-600 to-blue-600" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      MÜDAHALE ADIMI 0{activeStep + 1} / 04
                    </span>
                    <span className="text-xs font-extrabold text-blue-600 flex items-center gap-1">
                      <CheckCircle2 size={14} /> Max 2 Saat SLA Taahhüdü
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {supportSteps[activeStep].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-5">
                    {supportSteps[activeStep].desc}
                  </p>
                  
                  <div className="p-4.5 bg-gradient-to-r from-sky-50/70 to-blue-50/40 border border-sky-200/80 rounded-2xl text-xs sm:text-sm text-slate-800 font-medium leading-relaxed space-y-1">
                    <div className="font-extrabold text-sky-950 flex items-center gap-1.5 text-xs uppercase tracking-wider mb-1">
                      <Sparkles size={14} className="text-sky-600" />
                      Süreç Detayı:
                    </div>
                    <div>{supportSteps[activeStep].detail}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-600" />
                    Destek Kanalları: Telefon, E-posta & Uzak Bağlantı
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Scope Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Periyodik Sistem Bakım Kapsamımız</h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Sorunlar oluşmadan önce önlem alıyor, Mikro ERP sisteminizi düzenli olarak optimize ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {maintenanceScope.map((scope, idx) => {
              const ScopeIcon = scope.icon;
              return (
                <div key={idx} className="relative overflow-hidden border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2 hover:border-sky-400/80 transition-all duration-300 group cursor-pointer">
                  {/* Top Accent Gradient Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-sky-500/25 transition-all duration-300">
                      <ScopeIcon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors duration-300">{scope.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{scope.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Teknik Destek &amp; SLA Bakım Hakkında <span className="text-sky-600">Merak Edilenler</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Müdahale süreleri (SLA), periyodik veri bakımı ve yedekleme güvencemiz.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Destek taleplerine nasıl müdahale ediyorsunuz?', a: 'Destek talepleriniz için öncelikle müşteri takip portalımız üzerinden kayıt oluşturulur. Uzaktan hızlı yardım yazılımları (AnyDesk, TeamViewer) ile bağlantı kurarak saniyeler içinde müdahale ederiz. SQL çökmesi gibi fiziksel durumlarda ise İstanbul geneli yerinde destek sağlıyoruz.' },
              { q: 'Yıllık bakım anlaşması (YBA) nedir, neleri kapsar?', a: 'Yıllık bakım anlaşması, şirketinizin aylık periyodik SQL veri bakımlarını, sınırsız uzaktan telefon ve uzaktan bağlantı teknik desteğini, sürüm güncellemelerini ve acil durumlarda öncelikli yerinde müdahale haklarını kapsayan karlı bir destek sözleşmesidir.' },
              { q: 'Veritabanı yedeklerimizi nasıl güvenceye alıyorsunuz?', a: 'SQL Server veritabanınız için günlük şifreli yedekleme planları oluşturuyor, bu yedekleri hem yerel bir NAS cihazına hem de siber saldırılardan etkilenmeyen izole bulut sunucularına otomatik olarak senkronize ediyoruz.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="w-full flex items-center justify-between gap-3 px-6 py-4.5 text-left font-bold text-gray-800 hover:text-sky-600 transition-colors text-xs sm:text-sm md:text-base cursor-pointer list-none">
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{idx + 1}</span>
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="px-6 pb-5 pt-1 border-t-0 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-600 via-blue-650 to-indigo-700 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Sistemlerinizi Güvence Altına Alın
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              Verilerinizi koruyun, yavaşlama sorunlarını çözün ve iş sürekliliğinizi yıllık teknik destek anlaşması ile garantiye alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Destek Talebi Açın
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
