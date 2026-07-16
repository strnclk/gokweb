'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Compass, Check, Sparkles, ArrowRight, Phone, Eye, Target, BarChart2, TrendingUp, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function DanismanlikHizmetleriPage() {
  const maturityLevels = [
    { level: 'Seviye 1: Manuel & Kağıt', status: 'Süreçler kağıt üzerinde veya Excel dosyalarda yürütülür, birimler arası veri paylaşımı yoktur.', advisory: 'ERP geçiş hazırlığı ve veri tabanı alt yapısının tasarlanması.' },
    { level: 'Seviye 2: Temel Muhasebe', status: 'Maliye/Fatura işlemleri sistemdedir ancak depo ve üretim süreçleri entegre değildir.', advisory: 'Satın alma, stok ve operasyon modüllerinin sisteme entegre edilmesi.' },
    { level: 'Seviye 3: Departman Entegrasyonu', status: 'Tüm departmanlar ortak veri tabanını kullanır, onay mekanizmaları çalışmaktadır.', advisory: 'Maliyet muhasebesi, bütçe yönetimi ve fason üretim takibinin kurulması.' },
    { level: 'Seviye 4: Canlı İzleme & BI Raporları', status: 'Yönetim kararları canlı SQL sorgularına ve KPI rapor panolarına dayanır.', advisory: 'İş zekası (BI) entegrasyonu, bütçe-fiili analizi ve verimlilik optimizasyonu.' }
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50/60">
        {/* Dekoratif renk lekeleri (üst sayfadaki /services hero deseni) */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-amber-600" />
                20+ Yıllık ERP Deneyimi ile Yol Gösteriyoruz
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Danışmanlık Hizmetleri & <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Dijital Yol Haritası</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Nereden başlayacağına karar veremeyen veya mevcut sisteminden yeterince verim alamayan işletmelere, veriye dayalı stratejik danışmanlık hizmeti sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-amber-600 hover:bg-amber-700 text-white bg-amber-600 font-extrabold rounded-xl shadow-lg hover:shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Stratejik Analiz Talep Et
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/5 rounded-3xl blur-3xl" />
              <div className="border border-amber-100 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4.5">İşletmenizin ERP Olgunluk Analizi</h3>
                <div className="space-y-4">
                  {maturityLevels.map((lvl, idx) => (
                    <div key={idx} className="flex gap-3 text-xs sm:text-sm">
                      <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-slate-800">{lvl.level}</h4>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{lvl.status}</p>
                        <p className="text-[11px] text-amber-700 font-bold mt-1">Önerimiz: {lvl.advisory}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">ERP Danışmanlık Odak Alanlarımız</h2>
            <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Yalnızca yazılım kurmuyor, iş süreçlerinizin tamamını verimli kılacak bir mimari inşa ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {focusAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <div key={idx} className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                      <AreaIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800">{area.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Danışmanlık Hakkında SSS</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'ERP Danışmanlığı almamız neden gereklidir?', a: 'ERP projelerinin başarısızlık oranının büyük kısmı yazılımsal hatalardan değil, süreçlerin yanlış analiz edilmesinden ve yanlış modül uyarlamalarından kaynaklanır. ERP danışmanı, işletmenizi tarafsız bir gözle inceler, kayıp/kaçakları bulur ve en doğru iş akışını kurgular.' },
              { q: 'Hangi sıklıkla denetim ve danışmanlık görüşmesi yapıyoruz?', a: 'Projenin kapsamına göre genellikle haftalık canlı toplantılar, süreç liderleriyle birebir röportajlar ve ayda bir yönetim kuruluna ilerleme raporları sunularak dinamik bir süreç yürütülür.' },
              { q: 'Mevcut kurulu olan Mikro ERP\'miz için verimlilik danışmanlığı alabilir miyiz?', a: 'Evet. Mikro ERP\'yi yıllardır kullanan ancak yavaşlama, hatalı maliyet çıkarma veya rapor alamama gibi sorunlar yaşayan firmalar için özel "ERP Sağlık Tarama & İyileştirme" danışmanlığı sunmaktayız.' }
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{idx + 1}</span>
                  <span className="flex-1">{item.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{item.a}</p>
              </details>
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
