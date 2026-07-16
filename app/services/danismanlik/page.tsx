'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { 
  Compass, Check, Sparkles, ArrowRight, Phone, Eye, Target, BarChart2, TrendingUp, ChevronDown, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function DanismanlikHizmetleriPage() {
  const [activeStep, setActiveStep] = useState(0);

  const maturitySteps = [
    { title: 'Aşama 1: Mevcut Durum Analizi', desc: 'Süreçler kağıt üzerinde veya Excel dosyalarda yürütülür, birimler arası veri paylaşımı yoktur.', advisory: 'ERP geçiş hazırlığı ve veri tabanı alt yapısının tasarlanması.', detail: 'Tüm departman liderleriyle mülakatlar yapılır, bilgi akışındaki darboğazlar ve mükerrer veri girişleri birebir haritalandırılır.' },
    { title: 'Aşama 2: Süreç & Modül Kurgusu', desc: 'Maliye/Fatura işlemleri sistemdedir ancak depo ve üretim süreçleri entegre değildir.', advisory: 'Satın alma, stok ve operasyon modüllerinin sisteme entegre edilmesi.', detail: 'İşletmenizin organizasyon yapısına uygun onay mekanizmaları ve rol bazlı menü yetkilendirmeleri kurgulanır.' },
    { title: 'Aşama 3: Verimlilik Denetimi', desc: 'Tüm departmanlar ortak veri tabanını kullanır, onay mekanizmaları çalışmaktadır.', advisory: 'Maliyet muhasebesi, bütçe yönetimi ve fason üretim takibinin kurulması.', detail: 'Canlı veriler üzerinden maliyet analizi, stok devir hızı ve departman performans metriği (KPI) denetimleri gerçekleştirilir.' },
    { title: 'Aşama 4: Stratejik BI Raporlama', desc: 'Yönetim kararları canlı SQL sorgularına ve KPI rapor panolarına dayanır.', advisory: 'İş zekası (BI) entegrasyonu, bütçe-fiili analizi ve verimlilik optimizasyonu.', detail: 'Yönetim kuruluna özel mobil ve web uyumlu grafiksel iş zekası panoları devreye alınır.' }
  ];

  const focusAreas = [
    { title: 'Süreç Analizi & Optimizasyon', desc: 'Şirketinizdeki mükerrer veri girişlerini, gereksiz onay beklemelerini ve zaman kaybettiren işleri tespit edip yalınlaştırıyoruz.', icon: Eye },
    { title: 'Doğru Paket & Lisanslama', desc: 'Mikro Run, Jump ve Fly modüllerinden hangisinin firmanıza en yüksek fayda ve en düşük maliyet sağlayacağını analiz ediyoruz.', icon: Target },
    { title: 'Maliyet & Finans Danışmanlığı', desc: 'Doğru ürün maliyeti hesaplama, bütçe takibi, nakit akışı ve finansal konsolidasyon süreçlerinizi yapılandırıyoruz.', icon: BarChart2 },
    { title: 'Dijital Dönüşüm Stratejisi', desc: 'Gelecekteki şirket büyüme hedeflerinizi karşılayacak esnek, entegre ve sürdürülebilir bir teknolojik mimari tasarlıyoruz.', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-amber-50/50 via-white to-yellow-50/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.png" alt="Rainbow Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumb
            items={[{ label: 'Anasayfa', href: '/' }, { label: 'Hizmetlerimiz', href: '/services' }, { label: 'Danışmanlık Hizmetleri' }]}
            accentClass="hover:text-amber-600"
            className="mb-8"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-semibold mb-6">
                <Sparkles size={14} className="text-amber-600" />
                20+ Yıllık ERP Deneyimi ile Yol Gösteriyoruz
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Danışmanlık Hizmetleri <br />
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-800 bg-clip-text text-transparent">&amp; Dijital Yol Haritası</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                Nereden başlayacağına karar veremeyen veya mevcut sisteminden yeterince verim alamayan işletmelere, veriye dayalı stratejik danışmanlık hizmeti sunuyoruz.
              </p>

              {/* Dynamic Live Danışmanlık Feature Badges (Item 5) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50/90 border border-amber-200/90 rounded-xl text-amber-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-amber-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  Süreç Optimizasyonu
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50/90 border border-orange-200/90 rounded-xl text-orange-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-orange-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                  Sıfır Kayıp/Kaçak Projeksiyonu
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-50/90 border border-yellow-200/90 rounded-xl text-yellow-950 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-yellow-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse" />
                  Ekiplere Özel Danışmanlık
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50/90 border border-amber-200/90 rounded-xl text-amber-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-amber-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  Canlı BI Dashboard
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Stratejik Analiz Talep Et
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side: Growth & ERP Roadmap SaaS Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-3xl" />
              <div className="relative border border-amber-200/80 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl shadow-amber-500/10">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">erp-roadmap.gokkusagi.live</span>
                  </div>
                  <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-[11px] font-extrabold text-amber-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Büyüme Raporu
                  </div>
                </div>

                {/* Dashboard Roadmap Cards */}
                <div className="space-y-3.5">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 rounded-2xl text-white shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-amber-100 font-semibold">Operasyonel Verimlilik Artışı</span>
                      <div className="text-xl font-black mt-0.5">+42% Süreç İyileşmesi</div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/30">
                      ROI 3.5x
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">1. Departman Süreç Analizi</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Tamamlandı</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">2. Mikro Paket & Lisans Raporu</span>
                      <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Onaylandı</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">3. Canlı SQL Dashboard & BI</span>
                      <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Aktif Yönetim</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Item 2: Körleme Kullanım vs Stratejik ERP Danışmanlığı) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full">
              Yol Haritası Karşılaştırması
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Körleme ERP Kullanımı vs. <span className="text-amber-600">Gökkuşağı Stratejik Danışmanlık</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Yanlış modül yatırımlarını engelleyin, veriye dayalı stratejilerle yatırım getirinizi (ROI) maksimuma çıkarın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Unguided ERP Usage */}
            <div className="p-7 bg-white border border-red-200/80 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-bold text-lg">
                ✕
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Danışmansız / Plansız ERP Deneyimi</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>İhtiyaç duyulmayan modüllere yüksek lisans bütçeleri ödenir, atıl kalır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Personel karmaşık ekranlarda zorlanır, sisteme karşı direnç ve hatalar oluşur.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Kararlar hislere dayalı alınır; canlı SQL verisinden yoksun yönetilir.</span>
                </li>
              </ul>
            </div>

            {/* Gokkusagi Advisory Solution */}
            <div className="p-7 bg-gradient-to-b from-amber-50/50 via-white to-orange-50/30 border-2 border-amber-500/80 rounded-3xl shadow-xl shadow-amber-500/10 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/30">
                ✓
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Gökkuşağı Veriye Dayalı Yol Haritası</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-600 mt-0.5 shrink-0" />
                  <span>Tam ihtiyacınıza uyan optimum lisanslama ve süreç yapılandırması ile bütçe tasarrufu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-600 mt-0.5 shrink-0" />
                  <span>Yalınlaştırılmış departman iş akışları ile %100 personel adaptasyonu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-600 mt-0.5 shrink-0" />
                  <span>Anlık SQL BI dashboard panoları ile kararlarınızı somut verilerle yönetin.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">ERP Danışmanlık Odak Alanlarımız</h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Yalnızca yazılım kurmuyor, iş süreçlerinizin tamamını verimli kılacak bir mimari inşa ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {focusAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <div key={idx} className="relative overflow-hidden border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2 hover:border-amber-400/80 transition-all duration-300 group cursor-pointer">
                  {/* Top Accent Gradient Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-amber-500/25 transition-all duration-300">
                      <AreaIcon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">{area.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{area.desc}</p>
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              ERP Danışmanlığı Hakkında <span className="text-amber-600">Sıkça Sorulan Sorular</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Süreç analizi, verimlilik denetimi ve yol haritası kurgumuz hakkında sıkça sorulanlar.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'ERP Danışmanlığı almamız neden gereklidir?', a: 'ERP projelerinin başarısızlık oranının büyük kısmı yazılımsal hatalardan değil, süreçlerin yanlış analiz edilmesinden ve yanlış modül uyarlamalarından kaynaklanır. ERP danışmanı, işletmenizi tarafsız bir gözle inceler, kayıp/kaçakları bulur ve en doğru iş akışını kurgular.' },
              { q: 'Hangi sıklıkla denetim ve danışmanlık görüşmesi yapıyoruz?', a: 'Projenin kapsamına göre genellikle haftalık canlı toplantılar, süreç liderleriyle birebir röportajlar ve ayda bir yönetim kuruluna ilerleme raporları sunularak dinamik bir süreç yürütülür.' },
              { q: 'Mevcut kurulu olan Mikro ERP\'miz için verimlilik danışmanlığı alabilir miyiz?', a: 'Evet. Mikro ERP\'yi yıllardır kullanan ancak yavaşlama, hatalı maliyet çıkarma veya rapor alamama gibi sorunlar yaşayan firmalar için özel "ERP Sağlık Tarama & İyileştirme" danışmanlığı sunmaktayız.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="w-full flex items-center justify-between gap-3 px-6 py-4.5 text-left font-bold text-gray-800 hover:text-amber-600 transition-colors text-xs sm:text-sm md:text-base cursor-pointer list-none">
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Dijital Dönüşüm Stratejinizi Çizin
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              Şirketinizin süreçlerini analiz edelim, verimliliği artıracak en uygun Mikro ERP mimarisini birlikte tasarlayalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Danışmanlık Talep Formu
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
