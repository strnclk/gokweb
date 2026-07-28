'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Receipt, Check, Sparkles, ArrowRight, Phone, Send, FileText, CheckCircle2, ChevronDown, RefreshCw, Eye
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EDonusumEntegrasyonuPage() {
  const [activeStep, setActiveStep] = useState(0);

  const gibModules = [
    { name: 'e-Fatura', desc: 'Sadece e-Fatura mükellefi olan firmalar arasında düzenlenen, kağıt fatura ile aynı yasal geçerliliğe sahip elektronik fatura sistemidir.', usage: 'Mikro ERP içinden saniyeler içinde düzenlenip gönderilir.' },
    { name: 'e-Arşiv Fatura', desc: 'e-Fatura mükellefi olmayan nihai tüketicilere (bireysel) veya vergi mükellefi şirketlere kesilen elektronik fatura türüdür.', usage: 'Alıcının e-posta adresine otomatik olarak gönderilir.' },
    { name: 'e-Defter', desc: 'Yevmiye ve Kebir defterlerinin yasal standartlara uygun biçimde elektronik dosya olarak hazırlanıp GİB portalına gönderilmesidir.', usage: 'Mikro e-Defter modülü ile tek tuşla beratlar oluşturulur.' },
    { name: 'e-İrsaliye', desc: 'Malların fiili sevkinden önce düzenlenen, mal sevkiyatı hareketlerinin elektronik ortamda takibini sağlayan belgedir.', usage: 'Sürücü ve plaka bilgileri girilerek anlık oluşturulur.' }
  ];

  const flowSteps = [
    { title: 'Fatura Kesimi', icon: FileText, desc: 'Mikro ERP içinden normal fatura keser gibi faturayı hazırlarsınız.', detail: 'Mikro arayüzünde cari ve stok bilgileri girilir, entegratör butonuna basıldığı an fatura elektronik formata dönüştürülür.' },
    { title: 'API İmzalama', icon: RefreshCw, desc: 'Fatura mali mühür/e-imza ile saniyeler içinde otomatik mühürlenir.', detail: 'Sistem KamuSM veya özel entegratör HSM cihazları üzerinden XML belgesini yasal geçerli dijital imza ile mühürler.' },
    { title: 'GİB Gönderim', icon: Send, desc: 'Entegratör üzerinden GİB sunucularına şifreli iletilir.', detail: 'e-Mikro yüksek hızlı sunucuları faturayı Gelir İdaresi Başkanlığı merkez portalına anlık şifreli paketlerle ulaştırır.' },
    { title: 'Alıcıya Teslim', icon: Eye, desc: 'Alıcı e-Fatura mükellefi ise portalına, değil ise e-posta/SMS ile cebine düşer.', detail: 'Onaylanan fatura alıcı firmanın ERP sistemine doğrudan düşer, bireysel müşteriye PDF & HTML formatında iletilir.' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.webp" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                Resmi Entegrasyon Partneri Destekli
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                E-Dönüşüm Entegrasyonu <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 bg-clip-text text-transparent">&amp; GİB Uyumlu e-Belge</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                Mali mühür kurulumundan fatura tasarımlarınıza kadar tüm e-Geçiş sürecinizi yönetiyor, faturalarınızı Mikro ERP içerisinden tek tuşla kesmenizi sağlıyoruz.
              </p>

              {/* Dynamic Live e-Dönüşüm Feature Badges (Item 5) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50/90 border border-emerald-200/90 rounded-xl text-emerald-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-emerald-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  %100 GİB Mevzuat Garantisi
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50/90 border border-teal-200/90 rounded-xl text-teal-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-teal-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                  Giden/Gelen e-Fatura &amp; e-Arşiv
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-50/90 border border-cyan-200/90 rounded-xl text-cyan-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-cyan-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                  10 Yıl Güvenli Bulut Arşiv
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50/90 border border-emerald-200/90 rounded-xl text-emerald-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-emerald-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Sıfır Kağıt Masrafı
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  E-Dönüşüm Teklifi Alın
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side: GİB e-Belge Instant Dispatch Terminal Mockup */}
            <div
              className="animate-fade-in-side relative"
              style={{ '--fade-x': '1.875rem', '--fade-scale': '0.95', animationDelay: '0s' } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-3xl" />
              <div className="relative border border-emerald-200/80 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl shadow-emerald-500/10">
                {/* Dispatch Stats & Status */}
                <div className="space-y-3.5">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 rounded-2xl text-white shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-emerald-100 font-semibold">Toplam İletilen e-Fatura</span>
                      <div className="text-xl font-black mt-0.5">150.000+ Başarılı</div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/30">
                      GİB Onaylı
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <div className="font-extrabold text-slate-800">e-Fatura / e-Arşiv</div>
                      <div className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} /> Tek Tuşla Gönderim
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <div className="font-extrabold text-slate-800">e-Defter Beratarı</div>
                      <div className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} /> Otomatik İletim
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/70 rounded-xl flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-900">10 Yıl Güvenli Bulut Arşivleme</span>
                    <span className="font-extrabold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                      Sıfır Kağıt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Item 2: Kağıt Fatura vs Gökkuşağı e-Dönüşüm) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              Verimlilik & Maliyet Karşılaştırması
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Geleneksel Kağıt Süreci vs. <span className="text-emerald-600">Gökkuşağı e-Dönüşüm</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Fiziki fatura basımı, arşivleme odaları ve kargo bekleyişlerini tarihe gömün.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Paper Method */}
            <div className="p-7 bg-white border border-red-200/80 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-bold text-lg">
                ✕
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Klasik Kağıt & Fiziki Fatura Süreci</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Sürekli kağıt, zarf, matbaa baskısı ve kargo gönderim maliyetleri katlanır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Kargoda kaybolan veya geç ulaşan faturalar sebebiyle tahsilatlar aksar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>Fiziki klasörlerde arşiv tutma zorunluluğu metrekarelerce depolama alanı gerektirir.</span>
                </li>
              </ul>
            </div>

            {/* Gokkusagi e-Transformation Solution */}
            <div className="p-7 bg-gradient-to-b from-emerald-50/50 via-white to-teal-50/30 border-2 border-emerald-500/80 rounded-3xl shadow-xl shadow-emerald-500/10 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-emerald-500/30">
                ✓
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Gökkuşağı %100 Dijital e-Belge</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>Sıfır kağıt & kargo masrafı; fatura başına %90+ doğrudan operasyonel tasarruf.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>Mikro ERP içinden tek tıkla saniyeler içinde GİB ve alıcı e-postasına teslimat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>10 Yıl boyunca mevzuata uygun şifreli bulut depolama garantisi ile sıfır alan kaybı.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* e-Belge Modules Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Mikro e-Dönüşüm Modülleri</h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Gelir İdaresi Başkanlığı standartlarına tam uyumlu olarak sunduğumuz modüller.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gibModules.map((mod, idx) => (
              <div key={idx} className="relative overflow-hidden border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:border-emerald-400/80 transition-all duration-300 group cursor-pointer">
                {/* Top Accent Gradient Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">{mod.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3.5">{mod.desc}</p>
                <div className="p-3 bg-emerald-50/80 border border-emerald-200/80 rounded-xl text-xs text-emerald-800 font-medium">
                  <strong className="text-emerald-950 font-extrabold">Mikro Entegrasyonu:</strong> {mod.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flow of Document Sending */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Elektronik Fatura Nasıl Gönderilir?</h2>
            <p className="text-slate-700 font-medium mt-3 text-sm sm:text-base leading-relaxed">
              Karmaşık entegrasyon işlemlerini arka planda hallediyoruz. Sizin için fatura süreci çok basittir:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {flowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center relative group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200/80 rounded-full flex items-center justify-center text-slate-700 mx-auto mb-4 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all">
                    <StepIcon size={20} />
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">
                    ADIM {idx + 1}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              E-Dönüşüm Süreçleri Hakkında <span className="text-emerald-600">Merak Edilenler</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Mali mühür, özel entegratör seçimi ve e-İrsaliye geçişiyle ilgili tüm detayları yanıtladık.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'E-Fatura kullanmak için mali mühür zorunlu mudur?', a: 'Evet. Limited ve Anonim şirketlerin e-Fatura/e-Arşiv sistemine geçebilmeleri için KamuSM üzerinden Mali Mühür temin etmesi zorunludur. Şahıs firmaları ise mali mühür yerine e-İmza (elektronik imza) kullanabilirler.' },
              { q: 'Özel entegratör nedir, hangisini seçmeliyiz?', a: 'Özel entegratör, Gelir İdaresi Başkanlığı\'ndan yetki almış, faturalarınızın imzalanmasını, GİB\'e iletilmesini ve 10 yıl boyunca saklanmasını sağlayan aracı kurumlardır. Gökkuşağı Yazılım olarak Mikro ERP ile %100 entegre çalışan e-Mikro portalını öneriyor ve başvuru süreçlerinizi biz yönetiyoruz.' },
              { q: 'e-İrsaliye keserken nelere dikkat edilmelidir?', a: 'e-İrsaliye belgesinin, malın fiili sevkiyatı gerçekleşmeden en az 5-10 dakika önce düzenlenmiş olması, sürücü T.C. kimlik numarası, adı-soyadı ve araç plaka bilgilerinin eksiksiz girilmiş olması gerekir. Mikro el terminali entegrasyonu sayesinde irsaliyelerinizi depodan çıktığı an otomatik düzenleyebilirsiniz.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="w-full flex items-center justify-between gap-3 px-6 py-4.5 text-left font-bold text-gray-800 hover:text-emerald-600 transition-colors text-xs sm:text-sm md:text-base cursor-pointer list-none">
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              E-Dönüşüm Süreçlerinizi Hızlandırın
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              Yasal geçiş zorunlulukları kapsamındaki e-Fatura/e-Defter kurulum ve başvurularınızı resmi partneriniz olarak biz yapalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Geçiş Başvurusu Yapın
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
