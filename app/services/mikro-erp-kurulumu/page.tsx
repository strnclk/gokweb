'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Layers, Check, Sparkles, ArrowRight, Phone, Target, Zap, Shield, TrendingUp, CheckCircle2, Settings, Database, Users, HelpCircle
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/60">
        {/* Dekoratif renk lekeleri (üst sayfadaki /services hero deseni) */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-blue-600" />
                Resmi Mikro İş Ortağı Güvencesiyle
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Mikro ERP Kurulumu & <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Anahtar Teslim Uyum</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                İşletmenizin süreçlerine tam uyum sağlayan, karmaşadan uzak, ölçülebilir ve departmanlar arası kusursuz veri akışı sağlayan Mikro ERP kurulum hizmetimizle tanışın.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Ücretsiz Süreç Analizi İsteyin
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl" />
              <div className="border border-blue-100 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" /> Neden Bizimle Kurulum?
                </h3>
                <div className="space-y-4">
                  {[
                    { t: '20+ Yıllık ERP Deneyimi', d: 'Farklı sektörlerde yüzlerce kurulum tecrübesiyle hata payını eliyoruz.' },
                    { t: 'Doğru Veri Aktarım Güvencesi', d: 'Eski verilerinizi SQL düzeyinde inceliyor, temizleyerek Mikro\'ya aktarıyoruz.' },
                    { t: 'Departman Odaklı Tasarım', d: 'Her çalışanın sadece işine odaklanacağı pratik ekran tasarımları yapıyoruz.' },
                    { t: 'Yerinde ve Canlı Canlı Destek', d: 'Canlıya geçiş sürecinizde saha personelinize yerinde rehberlik ediyoruz.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✓</div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{item.t}</h4>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules We Implement */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Kurulum Yaptığımız ERP Modülleri</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              İşletmenizin ölçeğine ve ihtiyaç duyduğu yeteneklere göre aşağıdaki ana modülleri entegre ediyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, idx) => {
              const ModIcon = mod.icon;
              return (
                <div key={idx} className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                    <ModIcon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{mod.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Implementation Roadmap */}
      <section className="py-16 sm:py-24 bg-gray-50 bg-gray-50/50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Adım Adım ERP Kurulum Yol Haritamız</h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
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
                      ? 'bg-blue-600 bg-blue-600 text-white border-blue-600 shadow-md' 
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
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    {steps[activeStep].desc}
                  </p>
                  <div className="p-4 bg-blue-50/50 border border-blue-100/50 rounded-xl text-xs sm:text-sm text-gray-600 leading-relaxed">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">ERP Kurulumu Hakkında SSS</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Hangi Mikro paketini seçmeliyiz?', a: 'Küçük ve hızlı büyüyen bir şahıs veya limited şirketi iseniz Mikro Run, departmanlar arası gelişmiş onay süreçlerine ihtiyaç duyuyorsanız Mikro Jump, tam kapsamlı konsolide bütçe, üretim planlama ve uluslararası finans süreçleri yönetiyorsanız Mikro Fly tercih edilmelidir. Kurulum ekibimiz analiz aşamasında size en karlı paketi raporlayacaktır.' },
              { q: 'Kurulum boyunca işlerimiz durur mu?', a: 'Hayır. Kurulum, veri göçü ve test aşamalarını mevcut düzeninize paralel olarak arka planda yürütüyoruz. Canlı kullanıma geçiş (Go-Live) işlemi genellikle bir hafta sonu veya tatil gününde yapılarak işlerinizin aksaması tamamen engellenir.' },
              { q: 'Eski faturalarımızı ve stok geçmişimizi görebilecek miyiz?', a: 'Evet. Eski programınızdaki cari bakiyeleri, aktif stok envanterini ve borç/alacak durumlarını Mikro veritabanına aktarıyoruz. Detaylı geçmiş hareketler için ise isterseniz eski sisteminizi read-only (okunabilir) olarak saklayabilir veya özel SQL sorgularıyla Mikro\'ya konsolide edebiliriz.' }
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
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
