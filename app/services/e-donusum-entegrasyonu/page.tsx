'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Receipt, Check, Sparkles, ArrowRight, Phone, Send, FileText, CheckCircle2, RefreshCw, Eye
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EDonusumEntegrasyonuPage() {
  const gibModules = [
    { name: 'e-Fatura', desc: 'Sadece e-Fatura mükellefi olan firmalar arasında düzenlenen, kağıt fatura ile aynı yasal geçerliliğe sahip elektronik fatura sistemidir.', usage: 'Mikro ERP içinden saniyeler içinde düzenlenip gönderilir.' },
    { name: 'e-Arşiv Fatura', desc: 'e-Fatura mükellefi olmayan nihai tüketicilere (bireysel) veya vergi mükellefi şirketlere kesilen elektronik fatura türüdür.', usage: 'Alıcının e-posta adresine otomatik olarak gönderilir.' },
    { name: 'e-Defter', desc: 'Yevmiye ve Kebir defterlerinin yasal standartlara uygun biçimde elektronik dosya olarak hazırlanıp GİB portalına gönderilmesidir.', usage: 'Mikro e-Defter modülü ile tek tuşla beratlar oluşturulur.' },
    { name: 'e-İrsaliye', desc: 'Malların fiili sevkinden önce düzenlenen, mal sevkiyatı hareketlerinin elektronik ortamda takibini sağlayan belgedir.', usage: 'Sürücü ve plaka bilgileri girilerek anlık oluşturulur.' }
  ];

  const flowSteps = [
    { title: 'Fatura Kesimi', icon: FileText, desc: 'Mikro ERP içinden normal fatura keser gibi faturayı hazırlarsınız.' },
    { title: 'API İmzalama', icon: RefreshCw, desc: 'Fatura mali mühür/e-imza ile saniyeler içinde otomatik mühürlenir.' },
    { title: 'GİB Gönderim', icon: Send, desc: 'Entegratör üzerinden GİB sunucularına şifreli iletilir.' },
    { title: 'Alıcıya Teslim', icon: Eye, desc: 'Alıcı e-Fatura mükellefi ise portalına, değil ise e-posta/SMS ile cebine düşer.' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50/60">
        {/* Dekoratif renk lekeleri (üst sayfadaki /services hero deseni) */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                Resmi Entegrasyon Partneri Destekli
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                E-Dönüşüm Entegrasyonu & <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">GİB Uyumlu e-Belge</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Mali mühür kurulumundan fatura tasarımlarınıza kadar tüm e-Geçiş sürecinizi yönetiyor, faturalarınızı Mikro ERP içerisinden tek tuşla kesmenizi sağlıyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  E-Dönüşüm Teklifi Alın
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-3xl" />
              <div className="border border-emerald-100 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Maliyet Karşılaştırması</h3>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-3 font-bold border-b border-gray-200 pb-2 text-slate-800">
                    <span>Maliyet Kalemi</span>
                    <span className="text-red-600 text-red-600">Kağıt Fatura</span>
                    <span className="text-emerald-600 text-emerald-600">e-Fatura</span>
                  </div>
                  {[
                    { k: 'Baskı ve Kağıt', a: 'Yüksek (Baskı Maliyeti)', b: 'Sıfır (Dijital Belge)' },
                    { k: 'Posta ve Kargo', a: 'Yüksek (Adres Gönderimi)', b: 'Sıfır (Anlık e-Posta)' },
                    { k: 'Arşivleme & Depolama', a: 'Klasör / Fiziki Oda Gerekir', b: 'Ücretsiz 10 Yıl Güvenli Bulut' },
                    { k: 'Personel Zamanı', a: 'Elle Hazırlama ve Takip', b: 'Mikro ERP ile Tek Tuşla Gönderim' }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 border-b border-gray-100 py-2.5 text-gray-700">
                      <span className="font-semibold text-slate-800">{row.k}</span>
                      <span className="text-red-500">{row.a}</span>
                      <span className="text-emerald-600 font-bold">{row.b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* e-Belge Modules Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Mikro e-Dönüşüm Modülleri</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Gelir İdaresi Başkanlığı standartlarına tam uyumlu olarak sunduğumuz modüller.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gibModules.map((mod, idx) => (
              <div key={idx} className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{mod.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">{mod.desc}</p>
                <div className="p-3 bg-emerald-50/50 border border-emerald-100/50 rounded-lg text-xs text-emerald-700">
                  <strong>Mikro Entegrasyonu:</strong> {mod.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flow of Document Sending */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Elektronik Fatura Nasıl Gönderilir?</h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Karmaşık entegrasyon işlemlerini arka planda hallediyoruz. Sizin için fatura süreci çok basittir:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {flowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center relative group">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <StepIcon size={20} />
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">
                    ADIM {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">E-Dönüşüm Hakkında SSS</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'E-Fatura kullanmak için mali mühür zorunlu mudur?', a: 'Evet. Limited ve Anonim şirketlerin e-Fatura/e-Arşiv sistemine geçebilmeleri için KamuSM üzerinden Mali Mühür temin etmesi zorunludur. Şahıs firmaları ise mali mühür yerine e-İmza (elektronik imza) kullanabilirler.' },
              { q: 'Özel entegratör nedir, hangisini seçmeliyiz?', a: 'Özel entegratör, Gelir İdaresi Başkanlığı\'ndan yetki almış, faturalarınızın imzalanmasını, GİB\'e iletilmesini ve 10 yıl boyunca saklanmasını sağlayan aracı kurumlardır. Gökkuşağı Yazılım olarak Mikro ERP ile %100 entegre çalışan e-Mikro portalını öneriyor ve başvuru süreçlerinizi biz yönetiyoruz.' },
              { q: 'e-İrsaliye keserken nelere dikkat edilmelidir?', a: 'e-İrsaliye belgesinin, malın fiili sevkiyatı gerçekleşmeden en az 5-10 dakika önce düzenlenmiş olması, sürücü T.C. kimlik numarası, adı-soyadı ve araç plaka bilgilerinin eksiksiz girilmiş olması gerekir. Mikro el terminali entegrasyonu sayesinde irsaliyelerinizi depodan çıktığı an otomatik düzenleyebilirsiniz.' }
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{idx + 1}</span>
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
