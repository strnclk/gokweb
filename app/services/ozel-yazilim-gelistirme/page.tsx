'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Code2, Check, Sparkles, ArrowRight, Phone, Laptop, Database, Globe, Smartphone, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function OzelYazilimGelistirmePage() {
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50/60">
        {/* Dekoratif renk lekeleri (üst sayfadaki /services hero deseni) */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-orange-600" />
                Özel Süreçlere Özel Kodlama
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Özel Yazılım Geliştirme & <br />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Esnek API Çözümleri</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Hazır paketlerin sınırlarını aşıyor, işletmenize özgü süreçleri otomatikleştiren web, mobil ve API entegrasyonu yazılımlarını sıfırdan sizin için tasarlayıp kodluyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Projenizi Bizimle Paylaşın
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl blur-3xl" />
              <div className="border border-orange-100 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Geliştirme Metodolojimiz</h3>
                <div className="space-y-4">
                  {[
                    { t: '1. Analiz ve Projelendirme', d: 'Taleplerinizi dinliyor, yazılımın teknik mimari dosyasını ve veri tabanı ilişkilerini çıkarıyoruz.' },
                    { t: '2. Çift Yönlü SQL Uyum Testi', d: 'Geliştirilecek yazılımın Mikro ERP veritabanına veri yazma/okuma transaction güvenliğini test ediyoruz.' },
                    { t: '3. Arayüz ve Kodlama Aşaması', d: 'Kullanıcı dostu, modern web/mobil tasarımları en yeni teknolojilerle kodluyoruz.' },
                    { t: '4. Devreye Alma ve Canlı Takip', d: 'Yazılımı yayına alıyor, kullanıcı eğitimlerini tamamlayıp canlıda anlık izliyoruz.' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-3 text-xs sm:text-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-slate-800">{step.t}</h4>
                        <p className="text-gray-500 mt-0.5 text-xs leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Yazılım ve Teknoloji Yetkinliklerimiz</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Güvenli, esnek ve gelecekte kolayca büyütülebilecek modern teknolojilerle kodlama yapıyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div key={idx} className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                      <TechIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{tech.name}</h3>
                      <span className="text-[10px] bg-orange-50 border border-orange-100 text-orange-700 px-2 py-0.5 rounded font-mono font-bold mt-1 inline-block">
                        {tech.tech}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies / Project Examples */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Sıkça Kodladığımız Entegrasyon Çözümleri</h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              İşletmelerin Mikro ERP sistemini dış dünyaya bağlayan popüler entegrasyon projelerimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-3">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cs.desc}</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Özel Yazılım Hakkında SSS</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Geliştirilen yazılım Mikro ERP güncellemelerinde bozulur mu?', a: 'Hayır. Geliştirdiğimiz entegrasyonları ve yazılımları Mikro\'nun standart veritabanı şemasına zarar vermeyecek şekilde, Mikro API ve store procedure (saklı yordam) standartlarına bağlı kalarak tasarlıyoruz. Bu sayede Mikro güncellense dahi yazılımlar çalışmaya devam eder.' },
              { q: 'Yazılımın kaynak kodlarını veriyor musunuz?', a: 'Evet. İşletmenize özel olarak yazılan tüm web, mobil ve API projelerinin kaynak kodlarını ve SQL şemalarını proje tesliminde eksiksiz olarak teslim ediyoruz. Kaynak kod sahipliği tamamen sizin firmanıza ait olur.' },
              { q: 'Pazar yeri entegrasyonu stokları ne kadar sürede günceller?', a: 'Geliştirdiğimiz pazar yeri entegrasyon servisleri, pazar yeri API hız sınırlarına bağlı olarak, Mikro\'da değişen stok miktarlarını Trendyol, Hepsiburada gibi platformlarda 1 ila 5 dakika içinde anlık olarak günceller.' }
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
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
