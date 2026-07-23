'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Layers, Check, Sparkles, ArrowRight, Phone, Target, Zap, Shield, TrendingUp, CheckCircle2,
  ChevronDown, Settings, Database, Users, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MikroErpKurulumuPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '01. Süreç ve İhtiyaç Analizi',
      desc: 'İşletmenizin tüm departmanlarındaki (satın alma, üretim, finans, satış) mevcut iş akışlarını inceliyoruz. Sorunlu noktaları tespit ederek en uygun Mikro paketi ve modüllerini belirliyoruz.',
      detail: 'Bu aşamada departman liderleriyle birebir görüşmeler yapılarak mevcut yazılımlar, Excel dosyaları ve kağıt üzerindeki süreçler analiz edilir.'
    },
    {
      title: '02. Veri Tasarımı ve Hazırlık',
      desc: 'Mevcut sisteminizdeki cari, stok, fiyat listesi ve geçmiş hareket verilerini inceliyoruz. Veri temizliği yaparak Mikro veritabanı standartlarına uygun şablonlara dönüştürüyoruz.',
      detail: 'Hatalı veya mükerrer stok kartları, pasif cariler ayıklanır. Böylece yeni sisteme yalnızca temiz ve doğru veri aktarılır.'
    },
    {
      title: '03. Konfigürasyon ve Uyarlama',
      desc: 'Mikro ERP sisteminizi firmanıza özel parametrelerle yapılandırıyoruz. Yetkilendirme tanımları, onay mekanizmaları ve evrak serileri gibi süreçleri uyguluyoruz.',
      detail: 'Fatura tasarımları, sipariş onay süreçleri ve sektörel parametreler (lot takibi, varyant vb.) bu aşamada sisteme tanımlanır.'
    },
    {
      title: '04. Test ve Kullanıcı Eğitimleri',
      desc: 'Kurulumu tamamlanan sistemi test verileriyle devreye alarak departman bazlı simülasyonlar gerçekleştiriyoruz. Ekiplerinize canlı ortam öncesi yoğun pratik eğitimler veriyoruz.',
      detail: 'Her kullanıcının kendi rolüne uygun ekranları kullanması sağlanarak hata yapma payı sıfıra indirgenir.'
    },
    {
      title: '05. Canlı Kullanıma Geçiş ve Destek',
      desc: 'Eski sistemden açılış bakiyelerini aktararak canlı kullanıma geçişi başlatıyoruz. Geçiş haftasında uzman danışmanlarımızla yerinde ve uzaktan anlık destek sağlıyoruz.',
      detail: 'İlk faturalar kesilirken, ilk üretim emirleri girilirken ekibimizin yanında yer alarak geçiş sürecinin sorunsuz olmasını garanti ediyoruz.'
    }
  ];

  const modules = [
    { title: 'Finans & Muhasebe', desc: 'Genel muhasebe, kasa, banka, cari hesaplar, borç/alacak takibi ve nakit akış analizi.', icon: Database },
    { title: 'Satın Alma & Lojistik', desc: 'Tedarikçi teklif toplama, sipariş onay mekanizmaları, mal kabul ve depo yönetimi.', icon: Settings },
    { title: 'Satış & Pazarlama', desc: 'Teklif yönetimi, müşteri siparişleri, sevkiyat planlama ve bayi entegrasyonu.', icon: Users },
    { title: 'Üretim & Planlama', desc: 'Ürün reçeteleri (BOM), rota tanımları, iş emirleri, fason takip ve maliyet muhasebesi.', icon: Target }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <Sparkles size={14} className="text-blue-600" />
                Resmi Mikro İş Ortağı Güvencesiyle
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Mikro ERP Kurulumu <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">&amp; Anahtar Teslim Uyum</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                İşletmenizin süreçlerine tam uyum sağlayan, karmaşadan uzak, ölçülebilir ve departmanlar arası kusursuz veri akışı sağlayan Mikro ERP kurulum hizmetimizle tanışın.
              </p>

              {/* Dynamic Live ERP Feature Badges (Item 5) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/90 border border-blue-200/90 rounded-xl text-blue-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-blue-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  %100 SQL Canlı Veri
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50/90 border border-indigo-200/90 rounded-xl text-indigo-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-indigo-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  GİB Uyumlu e-Dönüşüm
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50/90 border border-purple-200/90 rounded-xl text-purple-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-purple-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  Özel Raporlama BI
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50/90 border border-emerald-200/90 rounded-xl text-emerald-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-emerald-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Kesintisiz Veri Göçü
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Ücretsiz Süreç Analizi İsteyin
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side: Modern SaaS ERP Deployment Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl" />
              <div className="relative border border-blue-200/80 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl shadow-blue-500/10">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">mikro-erp-setup.live</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[11px] font-extrabold text-blue-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Devreye Alma Paneli
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="space-y-3.5">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-2xl text-white shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-blue-100 font-semibold">Kurulum İlerlemesi</span>
                      <div className="text-xl font-black mt-0.5">%100 Tam Uyum</div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/30">
                      Go-Live Hazır
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: 'Finans & Muhasebe Modülü', status: 'Veri Aktarımı Tamamlandı', pct: '100%', color: 'bg-emerald-500' },
                      { name: 'Stok & Depo Yönetimi', status: 'Reçeteler & Parametreler Aktif', pct: '100%', color: 'bg-blue-600' },
                      { name: 'Satın Alma & Satış', status: 'Onay Süreçleri Yapılandırıldı', pct: '100%', color: 'bg-indigo-600' }
                    ].map((mod, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-2.5 h-2.5 rounded-full ${mod.color}`} />
                          <div>
                            <div className="font-extrabold text-slate-800">{mod.name}</div>
                            <div className="text-[11px] text-slate-500">{mod.status}</div>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 bg-white px-2 py-1 rounded-md border border-slate-200">{mod.pct}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-blue-50/70 border border-blue-200/70 rounded-xl flex items-center justify-between text-xs">
                    <span className="font-bold text-blue-900">SQL Veri Tabanı Güvenlik Testi</span>
                    <span className="font-extrabold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 size={14} /> Doğrulandı
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Item 2: Eski Yöntem vs Gökkuşağı Çözümü) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
              Süreç Karşılaştırması
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Geleneksel Yöntemler vs. <span className="text-blue-600">Gökkuşağı Mikro ERP</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Doğru yapılandırılmış bir ERP sistemi ile işletmenizdeki karmaşayı sonlandırıp verimli bir dijital yapıya geçin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Method */}
            <div className="p-7 bg-white border border-red-200/80 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-bold text-lg">
                ✕
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Geleneksel / Dağınık İş Akışı</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Depo, muhasebe ve satış bağımsız çalışır; veri kopukluğu ve gecikmeler yaşanır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Manuel veri girişleri sebebiyle stok hataları ve mükerrer fatura kesimleri oluşur.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Gün sonu karlılık ve üretim raporlarını almak saatler sürer, kararlar gecikir.</span>
                </li>
              </ul>
            </div>

            {/* Gokkusagi Solution */}
            <div className="p-7 bg-gradient-to-b from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-500/80 rounded-3xl shadow-xl shadow-blue-500/10 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/30">
                ✓
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Gökkuşağı ile Uçtan Uca Entegrasyon</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>%100 Tek SQL veri tabanında anlık departmanlar arası veri akışı sağlanır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>Barkodlu tam otomatik stok, reçete ve sipariş mekanizması sıfır hata ile çalışır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>Canlı yönetici dashboard panoları ile tek tıkla 1 saniyede raporlama yapılır.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modules We Implement */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Kurulum Yaptığımız ERP Modülleri</h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              İşletmenizin ölçeğine ve ihtiyaç duyduğu yeteneklere göre aşağıdaki ana modülleri entegre ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, idx) => {
              const ModIcon = mod.icon;
              return (
                <div key={idx} className="relative overflow-hidden border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-400/80 transition-all duration-300 group cursor-pointer">
                  {/* Top Accent Gradient Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300 mb-5">
                    <ModIcon size={22} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Implementation Roadmap */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-b border-gray-150">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Adım Adım ERP Kurulum Yol Haritamız</h2>
            <p className="text-slate-700 font-medium mt-3 text-sm sm:text-base leading-relaxed">
              Süreçlerinizi riske atmayan, planlı ve şeffaf bir kurulum metodolojisi uyguluyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Steps Selector */}
            <div className="md:col-span-1 space-y-2">
              {steps.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4.5 rounded-xl font-bold transition-all text-sm flex items-center justify-between border cursor-pointer ${
                    activeStep === i 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span>{st.title.split('. ')[1]}</span>
                  <ArrowRight size={14} className={activeStep === i ? 'translate-x-1 transition-transform' : 'text-gray-400'} />
                </button>
              ))}
            </div>

            {/* Right Step Details View */}
            <div className="md:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                    AŞAMA {activeStep + 1} / 5
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 mt-2 mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-4">
                    {steps[activeStep].desc}
                  </p>
                  <div className="p-4 bg-blue-50/50 border border-blue-100/50 rounded-xl text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    <strong>Neler Yapılıyor?</strong> {steps[activeStep].detail}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                  <span>Metot: Gökkuşağı Kalite Standartları</span>
                  <span className="font-bold text-blue-600">Tamamlanma Odaklı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Mikro ERP Kurulumu Hakkında <span className="text-blue-600">Sıkça Sorulan Sorular</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Kurulum süreci, veri aktarımı ve paket tercihleriyle ilgili tüm detayları yanıtladık.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Hangi Mikro paketini seçmeliyiz?', a: 'Küçük ve hızlı büyüyen bir şahıs veya limited şirketi iseniz Mikro Run, departmanlar arası gelişmiş onay süreçlerine ihtiyaç duyuyorsanız Mikro Jump, tam kapsamlı konsolide bütçe, üretim planlama ve uluslararası finans süreçleri yönetiyorsanız Mikro Fly tercih edilmelidir. Kurulum ekibimiz analiz aşamasında size en karlı paketi raporlayacaktır.' },
              { q: 'Kurulum boyunca işlerimiz durur mu?', a: 'Hayır. Kurulum, veri göçü ve test aşamalarını mevcut düzeninize paralel olarak arka planda yürütüyoruz. Canlı kullanıma geçiş (Go-Live) işlemi genellikle bir hafta sonu veya tatil gününde yapılarak işlerinizin aksaması tamamen engellenir.' },
              { q: 'Eski faturalarımızı ve stok geçmişimizi görebilecek miyiz?', a: 'Evet. Eski programınızdaki cari bakiyeleri, aktif stok envanterini ve borç/alacak durumlarını Mikro veritabanına aktarıyoruz. Detaylı geçmiş hareketler için ise isterseniz eski sisteminizi read-only (okunabilir) olarak saklayabilir veya özel SQL sorgularıyla Mikro\'ya konsolide edebiliriz.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="w-full flex items-center justify-between gap-3 px-6 py-4.5 text-left font-bold text-gray-800 hover:text-blue-600 transition-colors text-xs sm:text-sm md:text-base cursor-pointer list-none">
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-650 to-purple-600 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Süreçlerinizi Dijitalleştirmeye Başlayın
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              Analiz aşamasından devreye alıma kadar tüm ERP yolculuğunuzda resmi Mikro partneri olarak yanınızdayız.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Ücretsiz Keşif Formu
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
