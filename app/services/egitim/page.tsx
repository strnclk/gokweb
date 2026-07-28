'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  GraduationCap, Check, Sparkles, ArrowRight, Phone, BookOpen, Users, Milestone, Award, ChevronDown, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EgitimHizmetleriPage() {
  const [activeStep, setActiveStep] = useState(0);

  const academySteps = [
    { title: '1. Rol Bazlı İhtiyaç Analizi', desc: 'Şirketinizdeki her personelin iş tanımına uygun eğitim modüllerini belirliyoruz.', detail: 'Ön muhasebe, depo sorumlusu ve mali müdürler için ayrı yetkinlik müfredatı hazırlanır.' },
    { title: '2. Canlı Ekran Simülasyonu', desc: 'Kuru teorik anlatım yerine işletmenizin gerçek fatura ve stok verileriyle canlı simülasyon yapıyoruz.', detail: 'Kullanıcılar eğitim salonunda kendi bilgisayarlarından gerçek senaryoları birebir uygular.' },
    { title: '3. Örnek Senaryo & Test', desc: 'Öğrenilen bilgileri pekiştirmek için sık karşılaşılan hataları içeren pratik senaryolar çözdürülür.', detail: 'Yanlış stok seçimi, hatalı KDV veya irsaliye iptalleri durumunda ne yapılacağı uygulamalı öğretilir.' },
    { title: '4. Dokümantasyon & Sertifika', desc: 'Eğitim sonunda menü adım kılavuzları, PDF rehberleri ve katılım sertifikaları teslim edilir.', detail: 'Ekibe yeni katılacak personellerin oryantasyonu için video kayıt arşivleri paylaşılır.' }
  ];

  const curriculums = [
    { title: 'Temel Düzey Kullanıcı Eğitimi', target: 'Yeni Başlayanlar / Ön Muhasebe', topics: 'Cari Hesap Açma, Stok Kartı Girişi, Fatura & İrsaliye Düzenleme, Kasa & Banka Hareketleri, Tahsilat İşlemleri.' },
    { title: 'İleri Düzey Yönetici Raporlama', target: 'Yöneticiler / Muhasebe Müdürleri', topics: 'Excel Pivot Entegrasyonu, Canlı SQL Sorgu Çekme, Karlılık Analiz Raporları, Konsolide Bütçe ve Mali Tablolar.' },
    { title: 'Sektörel & Operasyonel Modüller', target: 'Depo & İmalat Ekipleri', topics: 'MRP Üretim Reçetesi Oluşturma, İş Emri Yönetimi, Fason Takip, Depo El Terminali Barkod Okuma ve Sayım.' }
  ];

  const methodology = [
    { title: 'Rol Bazılı ve Pratik Eğitim', desc: 'Her çalışana yalnızca kendi departmanında yapacağı işleri (satın alma, fatura vb.) anlatıyor, ekran kalabalığından kurtarıp hızlı öğrenme sağlıyoruz.', icon: Users },
    { title: 'Canlı Simülasyon Senaryoları', desc: 'Eğitimlerimizi kuru teorik anlatım yerine, işletmenizin gerçek fatura kesimi, mal kabulü veya üretim emri senaryolarıyla uygulamalı yapıyoruz.', icon: Milestone },
    { title: 'Video ve Eğitim Dokümanları', desc: 'İşe yeni başlayacak personelleriniz için eğitim notları, menü adım kılavuzları ve sık kullanılan işlemlerin ekran videolarını paylaşıyoruz.', icon: BookOpen },
    { title: 'Eğitim Sonu Değerlendirme', desc: 'Ekiplerinizin yazılımı ne kadar verimli kullandığını ölçmek için mini sınavlar yapıyor, eksik kalınan modüllerde telafi seansları düzenliyoruz.', icon: Award }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/20">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.webp" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-semibold mb-6">
                <Sparkles size={14} className="text-purple-600" />
                Yetkin Ekipler, Hızlı ve Hatasız İş Süreçleri
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Eğitim Hizmetleri <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">&amp; Mikro Uzmanlık Okulu</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                Yazılımın getireceği katma değer, çalışanlarınızın onu ne kadar verimli kullandığıyla sınırlıdır. Ekiplerinize pratik ve hedefe yönelik eğitimler veriyoruz.
              </p>

              {/* Dynamic Live Eğitim Feature Badges (Item 5) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50/90 border border-purple-200/90 rounded-xl text-purple-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-purple-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  Birebir Uygulamalı Eğitim
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50/90 border border-indigo-200/90 rounded-xl text-indigo-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-indigo-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  Sertifikalı Mikro Uzmanları
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-50/90 border border-violet-200/90 rounded-xl text-violet-900 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-violet-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                  İşe Özel Adım Dokümantasyonu
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-fuchsia-50/90 border border-fuchsia-200/90 rounded-xl text-fuchsia-950 text-xs font-extrabold shadow-sm hover:scale-105 hover:bg-fuchsia-100/80 transition-all cursor-default">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-600 animate-pulse" />
                  Rol Bazlı Ekran Simülasyonu
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Eğitim Planı Oluşturun
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side: Mikro Academy & Competency Mastery Portal Mockup */}
            <div
              className="animate-fade-in-side relative"
              style={{ '--fade-x': '1.875rem', '--fade-scale': '0.95', animationDelay: '0s' } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-3xl" />
              <div className="relative border border-purple-200/80 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl shadow-purple-500/10">
                {/* Training Competency Cards */}
                <div className="space-y-3.5">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-4 rounded-2xl text-white shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-purple-100 font-semibold">Ekip Kullanıcı Hakimiyeti</span>
                      <div className="text-xl font-black mt-0.5">%98 Verimlilik Skoru</div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/30">
                      Pratik Simülasyon
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">1. Rol Odaklı Kullanıcı Eğitimi</span>
                      <span className="text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200">%100 Pratik</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">2. İleri Düzey Yönetici BI Raporlama</span>
                      <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">Canlı SQL</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">3. Eğitim Sonu Sertifikasyon</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Onaylı Uzman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Academy Steps (Item 4: Canlı İnteraktif Tab Panosu) */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              Uygulamalı Akademi
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Mikro ERP Eğitim Yol Haritamız
            </h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              İhtiyaç analizinden sertifikasyona kadar 4 adımlı uygulamalı öğrenim metodolojimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Steps Selector */}
            <div className="md:col-span-1 space-y-2.5">
              {academySteps.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4 rounded-2xl font-bold transition-all text-sm flex items-center justify-between border cursor-pointer ${
                    activeStep === i 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-600 shadow-lg shadow-purple-500/20 translate-x-1' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-purple-300 hover:bg-purple-50/30'
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
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-purple-500/5 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                      EĞİTİM ADIMI 0{activeStep + 1} / 04
                    </span>
                    <span className="text-xs font-extrabold text-indigo-600 flex items-center gap-1">
                      <CheckCircle2 size={14} /> Şeffaf Eğitim Modeli
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    {academySteps[activeStep].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-5">
                    {academySteps[activeStep].desc}
                  </p>
                  
                  <div className="p-4.5 bg-gradient-to-r from-purple-50/70 to-indigo-50/40 border border-purple-200/80 rounded-2xl text-xs sm:text-sm text-slate-800 font-medium leading-relaxed space-y-1">
                    <div className="font-extrabold text-purple-950 flex items-center gap-1.5 text-xs uppercase tracking-wider mb-1">
                      <Sparkles size={14} className="text-purple-600" />
                      Eğitmen &amp; Metodoloji Detayı:
                    </div>
                    <div>{academySteps[activeStep].detail}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    Materyal: PDF Adım Rehberleri &amp; Video Kayıtlar
                  </span>
                  <span className="font-extrabold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">Başarı Garantili</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Eğitim Metodolojimizin Temel Taşları</h2>
            <p className="text-slate-700 font-medium mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Yalnızca butonların yerini öğretmiyor, Mikro ERP'yi işinize entegre etmenin en hızlı yollarını aktarıyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {methodology.map((meth, idx) => {
              const MethIcon = meth.icon;
              return (
                <div key={idx} className="relative overflow-hidden border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-purple-400/80 transition-all duration-300 group cursor-pointer">
                  {/* Top Accent Gradient Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-purple-500/25 transition-all duration-300">
                      <MethIcon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{meth.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{meth.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Mikro ERP Eğitimleri Hakkında <span className="text-purple-600">Sıkça Sorulan Sorular</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
              Eğitim modelleri, yerinde/online seanslar ve dokümantasyon detayları.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Eğitimleri yerinde mi yoksa online mı düzenliyorsunuz?', a: 'Her ikisini de sunuyoruz. İhtiyacınıza ve tercihinize göre eğitimleri firmanızda yüz yüze ya da uzaktan online olarak düzenleyebiliyoruz; dilerseniz ikisini birlikte de planlayabiliriz.' },
              { q: 'Eğitim sonunda herhangi bir belge veya kılavuz paylaşıyor musunuz?', a: 'Evet. Eğitim verdiğimiz modüller için hazırladığımız adım kılavuzlarını, menü yollarını gösteren PDF dokümanlarını ve gerekirse sık yapılan işlemlerin ekran video kayıtlarını ekiplerinizle paylaşıyoruz.' },
              { q: 'Şirketimize yeni katılan personeller için sürekli eğitim desteği var mı?', a: 'Evet. Sürekli destek sözleşmelerimiz kapsamında veya tek seferlik eğitim paketleriyle, ekibinize yeni katılan personellere sıfırdan Mikro ERP oryantasyon eğitimleri sağlamaktayız.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <details className="group">
                  <summary className="w-full flex items-center justify-between gap-3 px-6 py-4.5 text-left font-bold text-gray-800 hover:text-purple-600 transition-colors text-xs sm:text-sm md:text-base cursor-pointer list-none">
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{idx + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ekiplerinizin Yetkinliğini Artırın
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              Uygulamalı, hedefe yönelik ve pratik eğitimlerimizle hatalı kayıtları sıfırlayın, iş verimliliğinizi katlayın.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Eğitim Analiz Formu
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
