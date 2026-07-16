'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  LifeBuoy, Check, Sparkles, ArrowRight, Phone, Shield, Clock, Database, Settings, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function TeknikDestekPage() {
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50/60">
        {/* Dekoratif renk lekeleri (üst sayfadaki /services hero deseni) */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-sky-600" />
                7/24 Kesintisiz İş Sürekliliği Garantisi
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Teknik Destek & <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Profesyonel Bakım</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Mikro ERP yazılımlarınızın, veritabanlarınızın ve sunucularınızın sorunsuz çalışması için uzaktan hızlı bağlantı veya yerinde teknik destek sağlıyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-sky-600 hover:bg-sky-700 text-white bg-sky-600 font-extrabold rounded-xl shadow-lg hover:shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Destek Sözleşmesi Bilgisi Alın
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/5 rounded-3xl blur-3xl" />
              <div className="border border-sky-100 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4.5">SLA Destek Müdahale Sürelerimiz</h3>
                <div className="space-y-4">
                  {slaTiers.map((tier, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">{tier.title}</h4>
                        <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md border ${tier.color}`}>
                          {tier.time}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">{tier.desc}</p>
                    </div>
                  ))}
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
            <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Sorunlar oluşmadan önce önlem alıyor, Mikro ERP sisteminizi düzenli olarak optimize ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {maintenanceScope.map((scope, idx) => {
              const ScopeIcon = scope.icon;
              return (
                <div key={idx} className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                      <ScopeIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800">{scope.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{scope.desc}</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Teknik Destek Hakkında SSS</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Destek taleplerine nasıl müdahale ediyorsunuz?', a: 'Destek talepleriniz için öncelikle müşteri takip portalımız üzerinden kayıt oluşturulur. Uzaktan hızlı yardım yazılımları (AnyDesk, TeamViewer) ile bağlantı kurarak saniyeler içinde müdahale ederiz. SQL çökmesi gibi fiziksel durumlarda ise İstanbul geneli yerinde destek sağlıyoruz.' },
              { q: 'Yıllık bakım anlaşması (YBA) nedir, neleri kapsar?', a: 'Yıllık bakım anlaşması, şirketinizin aylık periyodik SQL veri bakımlarını, sınırsız uzaktan telefon ve uzaktan bağlantı teknik desteğini, sürüm güncellemelerini ve acil durumlarda öncelikli yerinde müdahale haklarını kapsayan karlı bir destek sözleşmesidir.' },
              { q: 'Veritabanı yedeklerimizi nasıl güvenceye alıyorsunuz?', a: 'SQL Server veritabanınız için günlük şifreli yedekleme planları oluşturuyor, bu yedekleri hem yerel bir NAS cihazına hem de siber saldırılardan etkilenmeyen izole bulut sunucularına otomatik olarak senkronize ediyoruz.' }
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
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
