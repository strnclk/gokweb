'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  GraduationCap, Check, Sparkles, ArrowRight, Phone, BookOpen, Users, Milestone, Award, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EgitimHizmetleriPage() {
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
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50/60">
        {/* Dekoratif renk lekeleri (üst sayfadaki /services hero deseni) */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-purple-600" />
                Yetkin Ekipler, Hızlı ve Hatasız İş Süreçleri
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Eğitim Hizmetleri & <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Mikro Uzmanlık Okulu</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Yazılımın getireceği katma değer, çalışanlarınızın onu ne kadar verimli kullandığıyla sınırlıdır. Ekiplerinize pratik ve hedefe yönelik eğitimler veriyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm flex items-center gap-2">
                  Eğitim Planı Oluşturun
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/5 rounded-3xl blur-3xl" />
              <div className="border border-purple-100 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4.5">Müfredat ve Eğitim Seviyelerimiz</h3>
                <div className="space-y-4">
                  {curriculums.map((curr, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-1.5 flex-wrap gap-2">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">{curr.title}</h4>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-0.5 rounded-md">
                          {curr.target}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-semibold">
                        Konular: {curr.topics}
                      </p>
                    </div>
                  ))}
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
            <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Yalnızca butonların yerini öğretmiyor, Mikro ERP\'yi işinize entegre etmenin en hızlı yollarını aktarıyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {methodology.map((meth, idx) => {
              const MethIcon = meth.icon;
              return (
                <div key={idx} className="border border-gray-200/80 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                      <MethIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800">{meth.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{meth.desc}</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Eğitim Hakkında SSS</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Eğitimleri yerinde mi yoksa online mı düzenliyorsunuz?', a: 'Tercihinize göre her ikisini de uygulayabiliyoruz. Genellikle cana yakın ve etkileşimi artırmak amacıyla ilk eğitimleri firmanızda yerinde yüz yüze yapıyor, sonrasındaki telafi ve soru-cevap seanslarını ise uzaktan online olarak yürütüyoruz.' },
              { q: 'Eğitim sonunda herhangi bir belge veya kılavuz paylaşıyor musunuz?', a: 'Evet. Eğitim verdiğimiz modüller için hazırladığımız adım kılavuzlarını, menü yollarını gösteren PDF dokümanlarını ve gerekirse sık yapılan işlemlerin ekran video kayıtlarını ekiplerinizle paylaşıyoruz.' },
              { q: 'Şirketimize yeni katılan personeller için sürekli eğitim desteği var mı?', a: 'Evet. Sürekli destek sözleşmelerimiz kapsamında veya tek seferlik eğitim paketleriyle, ekibinize yeni katılan personellere sıfırdan Mikro ERP oryantasyon eğitimleri sağlamaktayız.' }
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{idx + 1}</span>
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
