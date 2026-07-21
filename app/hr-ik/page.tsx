'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Users, TrendingUp, BarChart3, Database, Phone, Mail, 
  Check, X, Sparkles, CheckCircle2, HelpCircle, 
  ArrowRight, ShieldAlert, Award, Clock, Calendar, FileText, UserPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HRIKPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'usage'>('features');

  const stats = [
    { value: '%60', label: 'Evrak İşlerinde Azalma', desc: 'İzin, masraf ve bordro süreçlerinin tamamen dijitalleşmesi.' },
    { value: '%95', label: 'Çalışan Memnuniyeti Oranı', desc: 'Şeffaf self-servis çalışan izin ve talep portalı.' },
    { value: '%40', label: 'İşe Alım Süreci Tasarrufu', desc: 'Aday takip ve entegre mülakat yönetim sistemi.' }
  ];

  const features = [
    {
      icon: Users,
      title: "Dijital Özlük Dosyaları",
      description: "Personellerinizin kimlik bilgileri, sözleşmeleri, eğitim belgeleri ve zimmet tutanaklarını tek panelde dijitalleştirin."
    },
    {
      icon: Calendar,
      title: "İzin ve Devamsızlık Yönetimi",
      description: "Çalışanların mobil uygulamadan veya webden izin talep etmesini, yöneticilerin tek tıkla onaylamasını sağlayın."
    },
    {
      icon: FileText,
      title: "Bordro ve Masraf Yönetimi",
      description: "Resmi bordroları imza karşılığı olmadan dijitalde güvenli paylaşın ve çalışan masraf taleplerini kontrol edin."
    },
    {
      icon: UserPlus,
      title: "İşe Alım ve Aday Takibi (ATS)",
      description: "Açık pozisyonlar yayınlayın, gelen özgeçmişleri havuzda puanlayın ve mülakat aşamalarını izleyin."
    },
    {
      icon: Database,
      title: "Mikro Personel Entegrasyonu",
      description: "Mikro Run, Jump ve Fly Personel Sicil Kartları ve puantaj kayıtlarıyla canlı entegrasyon kurun."
    },
    {
      icon: TrendingUp,
      title: "Performans Değerlendirme",
      description: "Çalışan hedeflerini (KPI) tanımlayın, 360 derece performans anketleri düzenleyin ve başarıyı ödüllendirin."
    }
  ];

  const usageSteps = [
    {
      step: "01",
      title: "Personel Kartı ve Özlük Girişi",
      desc: "İşe yeni başlayan personelin özlük evrakları taranarak yüklenir ve Mikro sicil kartıyla otomatik senkronize edilir."
    },
    {
      step: "02",
      title: "Self-Servis Çalışan Portalı",
      desc: "Çalışan kendine özel kullanıcı adı ile sisteme girerek kalan izin günlerini görür, izin veya avans talebi oluşturur."
    },
    {
      step: "03",
      title: "Yönetici Onay Akışı",
      desc: "Talepler ilgili departman yöneticisinin ekranına düşer. E-posta bildirimleriyle hızlıca onaylanır veya reddedilir."
    },
    {
      step: "04",
      title: "Puantaj ve Bordro Çıktısı",
      desc: "Ay sonunda onaylanmış izinler ve mesailer otomatik olarak puantaj verisine dönüşerek Mikro muhasebeye aktarılır."
    }
  ];

  const sss = [
    {
      q: 'İnsan Kaynakları (HR) modülü kullanmak şirketimize ne kazandırır?',
      a: 'Kağıt üstünde yürüyen izin dilekçeleri, elden dağıtılan bordrolar ve Excel özlük tabloları tarih olur. İK departmanınız rutin evrak işleri yerine çalışan verimliliğine odaklanabilir, yasal mevzuat hataları engellenir.'
    },
    {
      q: 'Mikro Personel / Bordro modülüyle entegrasyon nasıl işliyor?',
      a: 'İK yazılımımız, Mikro sicil kartlarıyla doğrudan bağlantılıdır. Çalışanın izin gün sayısı, brüt maaş bilgileri ve puantaj hareketleri Mikro veritabanından çekilir ve onaylanan izinler Mikro puantajına otomatik yansır.'
    },
    {
      q: 'Çalışanlar kendi bordrolarını cep telefonundan görebilir mi?',
      a: 'Evet. Çalışanlar kendilerine özel mobil veya web arayüzünden giriş yaparak geçmiş izin haklarını görebilir, avans isteyebilir ve her ay yayınlanan bordro detaylarını inceleyebilirler.'
    },
    {
      q: 'Kişisel Verilerin Korunması Kanunu (KVKK) ile uyumlu mudur?',
      a: 'Sistemimiz KVKK gereksinimleriyle tam uyumludur. Personel özlük verileri şifrelenerek saklanır ve sadece yetkilendirilmiş İK uzmanları veya yöneticiler tarafından görülebilir.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(209,250,229,0.3),rgba(255,255,255,0))] -z-10" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 border border-emerald-200/50 rounded-full text-emerald-600 text-xs sm:text-sm font-bold shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              İnsan Kaynakları Yönetimi
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-gray-900">
              Çalışanlarınızı Dijitalleştirin:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600">
                Mikro Entegre İK & HR
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Dijital özlük dosyaları, şeffaf izin onay mekanizmaları ve self-servis çalışan paneli. Personel süreçlerinizi kolaylaştırarak İK ekiplerinizin verimini artırın ve Mikro sicil kartlarıyla tam entegre çalışın.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-emerald-500 mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nedir / Değerler Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4">
            İnsan Kaynakları (HR) Sistemi Nedir ve İşletmenize Ne Değer Katar?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            Çalışanlarınızın süreçlerini dijitalleştirirken İK departmanınızın idari yükünü hafifleten modern altyapı.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Definition */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white border border-emerald-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl" />
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                <Users size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-4">
                İK Sistemi Nedir?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                İnsan Kaynakları (HR) Sistemi, çalışanlarınızın işe girişten itibaren özlük belgelerini, izin haklarını, avans/masraf taleplerini ve performans hedeflerini self-servis çalışan portalı ile dijitalleştiren modern bir yönetim yazılımıdır.
              </p>
            </div>
            <div className="border-t border-emerald-100/60 pt-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Mikro ERP Entegrasyonlu</span>
            </div>
          </div>

          {/* Right Column: Key Values */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {[
              {
                title: "İK Departmanında Zaman Tasarrufu",
                desc: "İzin, avans ve masraf onay süreçleri kâğıtsız olarak dijitalde yürütülür, İK ekipleri katma değerli işlere odaklanır."
              },
              {
                title: "Şeffaf Çalışan Deneyimi",
                desc: "Çalışanlar kendilerine özel self-servis portaldan kalan izin günlerini görebilir, bordro ve masraf detaylarını izleyebilir."
              },
              {
                title: "Yasal Mevzuata ve KVKK'ya Tam Uyum",
                desc: "Personel özlük dosyaları ve hassas kişisel veriler, şifreli veritabanlarında KVKK standardslarına uygun olarak saklanır."
              },
              {
                title: "Puantaj ve Bordro Entegrasyonu",
                desc: "Onaylanan izin ve devamsızlıkların otomatik olarak puantaj verisine dönüşmesiyle manuel veri aktarım hataları sıfırlanır."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-gray-300/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <div className="w-6 h-6 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mikro ERP Entegrasyonu Section */}
      <section className="bg-white border-y border-gray-100 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-200/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="space-y-5 lg:w-3/5">
              <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wider">
                Resmi Muhasebe Senkronu
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Puantaj Hatasız: Mikro Personel Entegrasyon Ayrıntısı
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                İnsan Kaynakları modülümüz, Mikro Run, Jump ve Fly Personel Sicil Kartlarıyla doğrudan SQL düzeyinde entegredir. Personelin kıdem süreleri, yıllık izin hakları ve brüt maaş verileri çift yönlü eşitlenir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {[
                  "Onaylanan izinlerin Mikro puantajına otomatik aktarımı",
                  "İşe giriş/çıkış tarihlerinin otomatik senkronizasyonu",
                  "Departman ve şube hiyerarşisinin Mikro ile uyumu",
                  "Dijital bordro gönderiminde yasal mevzuata tam uyumluluk"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[280px] h-[280px] bg-white border border-gray-200 rounded-3xl shadow-xl flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 blur-2xl opacity-40 -z-10" />
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <Database size={28} />
                  </div>
                  <div className="font-black text-gray-800 text-lg">Mikro SQL Entegrasyonu</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Puantaj ve maaş dosyaları doğrudan Mikro ERP tabloları ile entegre çalışır.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features & Usage Guide Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4">
            Keşfedin: Özellikler ve Kullanım Kılavuzu
          </h2>
          
          {/* Custom Tabs Toggle */}
          <div className="inline-flex p-1.5 bg-emerald-600 rounded-2xl border border-emerald-700/50 mt-4 shadow-lg">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'features' ? 'bg-white text-emerald-600 shadow-sm' : 'text-emerald-100 hover:text-white'}`}
            >
              Ana Özellikler
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'usage' ? 'bg-white text-emerald-600 shadow-sm' : 'text-emerald-100 hover:text-white'}`}
            >
              Nasıl Çalışır?
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'features' ? (
            <motion.div
              key="features-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="bg-white border border-gray-300/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                    <h4 className="font-bold text-gray-800 text-base mb-2">{feat.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feat.description}</p>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="usage-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative border-l border-emerald-200/50 ml-4 md:ml-10 space-y-12"
            >
              {usageSteps.map((step, i) => (
                <div key={i} className="relative pl-8 sm:pl-12">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center font-black text-xs shadow-md shadow-emerald-500/15">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-1">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-700 max-w-2xl leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-bold text-gray-600 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
              Sıkça Sorulan Sorular
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              İnsan Kaynakları Çözümleri Hakkında Merak Edilenler
            </h2>
          </div>

          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white shadow-xl shadow-emerald-500/10 p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Çalışan Deneyimini Bir Adım Öteye Taşıyın
            </h3>
            
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              Evrak karmaşasını sonlandırmak, izin ve özlük süreçlerini dijitalleştirmek için İK danışmanımızla hemen temasa geçin.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Ücretsiz Keşif Talebi
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
