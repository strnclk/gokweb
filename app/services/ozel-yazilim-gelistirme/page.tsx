'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Code2, Check, Sparkles, ArrowRight, Phone, Laptop, Database, Globe, Smartphone, ChevronDown, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function OzelYazilimGelistirmePage() {
  const [activeStep, setActiveStep] = useState(0);

  const techStack = [
    { name: 'Gelişmiş Web Yazılımları', icon: Globe, tech: 'React.js, Next.js, Node.js', desc: 'Tarayıcı tabanlı, responsive, yüksek performanslı bayi (B2B) portalları, e-ticaret siteleri ve yönetim panoları.' },
    { name: 'Mobil Saha Uygulamaları', icon: Smartphone, tech: 'Flutter, React Native', desc: 'Plasiyerlerin sahada sipariş alabileceği, stok durumlarını canlı görebileceği iOS ve Android mobil çözümler.' },
    { name: 'Veri Tabanı ve SQL Entegrasyon', icon: Database, tech: 'MS SQL Server, PostgreSQL', desc: 'Mikro ERP veritabanı ile çift yönlü anlık veri alışverişi yapan, SQL transaction güvenliğine sahip servisler.' },
    { name: 'Özel Entegrasyon & API', icon: Laptop, tech: 'C# .NET, REST API, SOAP', desc: 'Kargo, banka, pazar yeri ve tedarikçi web servislerini Mikro ERP ile entegre eden esnek API katmanları.' }
  ];

  const caseStudies = [
    { title: 'Pazar Yeri ve E-Ticaret Entegrasyonu', desc: 'Trendyol, Hepsiburada, Amazon ve Shopify siparişlerinizi anlık olarak Mikro ERP\'ye aktaran, stok miktarlarını pazar yerlerinde otomatik güncelleyen yazılımlar yazıyoruz.' },
    { title: 'Plasiyer Saha Sipariş Sistemleri', desc: 'Saha satış ekibinizin internet olmasa dahi offline sipariş toplayabildiği, internet geldiği an veriyi merkez Mikro\'ya fatura olarak aktardığı mobil ve tablet çözümleri.' },
    { title: 'Özel SQL Raporlama Panoları (Dashboard)', desc: 'Şirket sahipleri için anlık karlılık, üretim verimlilikleri, finansal durum ve nakit akışını gösteren web tabanlı canlı rapor panoları kodluyoruz.' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-red-50/50 via-white to-red-50/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.webp" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-semibold mb-6">
                <Sparkles size={14} className="text-red-600" />
                Özel Süreçlere Özel Kodlama
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Özel Yazılım Geliştirme <br />
                <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">&amp; Esnek API Çözümleri</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                Hazır paketlerin sınırlarını aşıyor, işletmenize özgü süreçleri otomatikleştiren web, mobil ve API entegrasyonu yazılımlarını sıfırdan sizin için tasarlayıp kodluyoruz.
              </p>

              {/* Dynamic Live Özel Yazılım Feature Badges (Item 5) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/90 border border-red-200/90 rounded-xl text-red-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-red-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Mikro REST &amp; SOAP API
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/90 border border-red-200/90 rounded-xl text-red-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-red-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Esnek SQL Veri Mimarisi
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/90 border border-red-200/90 rounded-xl text-red-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-red-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Web &amp; Mobil Uygulama
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/90 border border-red-200/90 rounded-xl text-red-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-red-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Canlı Çift Yönlü Sync
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-red-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Projenizi Bizimle Paylaşın
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side: Code & REST API Terminal SaaS Mockup */}
            <div
              className="animate-fade-in-side relative"
              style={{ '--fade-x': '1.875rem', '--fade-scale': '0.95', animationDelay: '0s' } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-3xl" />
              <div className="relative border border-slate-800 bg-[#0F172A] rounded-3xl p-6 sm:p-7 shadow-2xl shadow-red-500/10 text-white">
                {/* Code Terminal Body */}
                <div className="font-mono text-xs space-y-3">
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-slate-300">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">syncEngine</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">MikroSQLBridge</span>();
                    <br />
                    <span className="text-purple-400">await</span> syncEngine.<span className="text-blue-300">executeSync</span>({'{'}
                    <br />
                    &nbsp;&nbsp;target: <span className="text-emerald-300">"PazarYeri_Siparisler"</span>,
                    <br />
                    &nbsp;&nbsp;transaction: <span className="text-emerald-300">"SQL_ACID_SAFE"</span>
                    <br />
                    {'}'});
                  </div>

                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-400 text-[11px]">Entegre Teknolojiler</div>
                      <div className="text-red-400 font-bold mt-0.5">Next.js • Node.js • MS SQL • REST</div>
                    </div>
                    <div className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded text-[11px]">
                      Çift Yönlü Anlık
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Item 2: Hazır Paket Sınırları vs Gökkuşağı Özel Entegrasyon) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
              Mimari Karşılaştırma
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Kalıplaşmış Hazır Paketler vs. <span className="text-red-600">Gökkuşağı Özel Yazılım</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              İş süreçlerinizi standart paketlere uydurmak yerine, yazılımı işinize %100 özel geliştirin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rigid Off-the-shelf Software */}
            <div className="p-7 bg-white border border-red-200/80 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-bold text-lg">
                ✕
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Kısıtlı Hazır Paket Yazılımlar</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Şirketinize özgü benzersiz operasyonel süreçleri karşılamaz; işi yavaşlatır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Pazar yeri, B2B veya mobil saha verilerini ERP'ye aktarmak için elle giriş gerektirir.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Gelişmeye kapalı kapalı kutu mimariler büyüme hedeflerinizi sınırlar.</span>
                </li>
              </ul>
            </div>

            {/* Gokkusagi Custom Software Solution */}
            <div className="p-7 bg-gradient-to-b from-red-50/50 via-white to-red-50/30 border-2 border-red-500/80 rounded-3xl shadow-xl shadow-red-500/10 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-red-500/30">
                ✓
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Gökkuşağı Terzi Usulü Özel Kodlama</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />
                  <span>İşletmenizin birebir süreçlerine özel tasarlanmış esnek web, mobil ve API mimarisi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />
                  <span>Mikro ERP veritabanı ile çift yönlü anlık, güvenli SQL transaction senkronizasyonu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />
                  <span>Sınırsız büyütülebilir kod yapısı ile şirketinize %100 ölçeklenebilir teknoloji.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Yazılım ve Teknoloji Yetkinliklerimiz</h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Güvenli, esnek ve gelecekte kolayca büyütülebilecek modern teknolojilerle kodlama yapıyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div key={idx} className="relative overflow-hidden border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-2 hover:border-red-400/80 transition-all duration-300 group cursor-pointer">
                  {/* Top Accent Gradient Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-red-500/25 transition-all duration-300">
                      <TechIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors duration-300">{tech.name}</h3>
                      <span className="text-[11px] bg-red-50/80 border border-red-200/80 text-red-800 px-2.5 py-0.5 rounded-md font-mono font-bold mt-1 inline-block">
                        {tech.tech}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies / Project Examples */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Sıkça Kodladığımız Entegrasyon Çözümleri</h2>
            <p className="text-slate-700 font-medium mt-3 text-sm sm:text-base leading-relaxed">
              İşletmelerin Mikro ERP sistemini dış dünyaya bağlayan popüler entegrasyon projelerimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Özel Yazılım &amp; Entegrasyonlar Hakkında <span className="text-red-600">Sıkça Sorulan Sorular</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Mikro API entegrasyonu, veritabanı güvenliği ve proje sahipliği hakkında merak edilenler.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Geliştirilen yazılım Mikro ERP güncellemelerinde bozulur mu?', a: 'Hayır. Geliştirdiğimiz entegrasyonları ve yazılımları Mikro\'nun standart veritabanı şemasına zarar vermeyecek şekilde, Mikro API ve store procedure (saklı yordam) standartlarına bağlı kalarak tasarlıyoruz. Bu sayede Mikro güncellense dahi yazılımlar çalışmaya devam eder.' },
              { q: 'Geliştirdiğiniz yazılım ve veriler firmamıza mı ait olur?', a: 'Evet. İşletmenize özel geliştirdiğimiz web, mobil ve API projelerinde tüm verileriniz ve veritabanınız tamamen firmanıza aittir; çözümün kullanım hakları eksiksiz olarak size tanımlanır. Proje tesliminde ihtiyaç duyacağınız teknik dokümantasyon ve entegrasyon bilgilerini de paylaşıyoruz.' },
              { q: 'Pazar yeri entegrasyonu stokları ne kadar sürede günceller?', a: 'Geliştirdiğimiz pazar yeri entegrasyon servisleri, pazar yeri API hız sınırlarına bağlı olarak, Mikro\'da değişen stok miktarlarını Trendyol, Hepsiburada gibi platformlarda 1 ila 5 dakika içinde anlık olarak günceller.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="w-full flex items-center justify-between gap-3 px-6 py-4.5 text-left font-bold text-gray-800 hover:text-red-600 transition-colors text-xs sm:text-sm md:text-base cursor-pointer list-none">
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Özel Yazılım Projenizi Başlatın
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              İhtiyaçlarınızı analiz edelim, gerekli veri akış planını çıkarıp hızlıca kodlamaya başlayalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Proje Analiz Formu
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
