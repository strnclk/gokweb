'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Settings, TrendingUp, BarChart3, Database, Phone, Mail, 
  Check, X, Sparkles, CheckCircle2, HelpCircle, 
  ArrowRight, ShieldAlert, Award, Clock, Cpu, Layout, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MESYonetimPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'usage'>('features');

  const stats = [
    { value: '%25', label: 'OEE Verimlilik Artışı', desc: 'Gerçek zamanlı hat ve duruş takipleri ile optimize edilen üretim.' },
    { value: '%98', label: 'Doğru İş Emri Eşleşmesi', desc: 'Operatör ekranlarından hatasız iş emri ve parça girişi.' },
    { value: '%50', label: 'Duruş Süresi Azalması', desc: 'Anlık makine arıza uyarıları ve hızlı müdahale.' }
  ];

  const features = [
    {
      icon: Cpu,
      title: "Anlık Üretim ve Hat İzleme",
      description: "Üretim hattındaki makinelerin çalışma, duruş and arıza durumlarını canlı panolar (dashboard) üzerinden anlık takip edin."
    },
    {
      icon: BarChart3,
      title: "OEE (Ekipman Etkinliği) Analizi",
      description: "Makinelerinizin Kullanılabilirlik, Performans ve Kalite oranlarını otomatik hesaplayarak gerçek OEE skorunuzu görün."
    },
    {
      icon: Layout,
      title: "Operatör Terminal Ekranları",
      description: "Makine başındaki operatörler için tasarlanmış, parça adedi, fire ve duruş nedeni girilebilen yalın endüstriyel arayüzler."
    },
    {
      icon: AlertTriangle,
      title: "Duruş ve Arıza Yönetimi",
      description: "Planlı (bakım, ayar) veya plansız (arıza, hammadde yokluğu) duruşları neden kodlarıyla kaydedin ve darboğazları çözün."
    },
    {
      icon: Database,
      title: "Mikro Üretim/MRP Entegrasyonu",
      description: "Mikro Run, Jump ve Fly üretim iş emirleri, operasyon rotaları ve ürün reçeteleriyle tam entegre haberleşin."
    },
    {
      icon: Settings,
      title: "Bakım ve Kalibrasyon Takibi",
      description: "Makinelerin periyodik bakım takvimlerini yönetin ve arıza duruşlarını önceden engelleyen koruyucu bakım planları yapın."
    }
  ];

  const usageSteps = [
    {
      step: "01",
      title: "İş Emrinin Gönderilmesi",
      desc: "Mikro ERP üzerinde planlanan iş emri ve üretim rotası, ilgili istasyondaki operatörün MES ekranına anında düşer."
    },
    {
      step: "02",
      title: "Operasyon Başlangıcı ve Takip",
      desc: "Operatör terminalden 'İşi Başlat' butonuna basar. Sistem makinenin çalışma ve duruş sürelerini otomatik loglar."
    },
    {
      step: "03",
      title: "Miktar ve Fire Girişleri",
      desc: "Üretim tamamlandığında üretilen parça miktarı ve varsa fire/hurda adetleri nedenleriyle birlikte ekrana girilir."
    },
    {
      step: "04",
      title: "İş Emri Kapatma ve ERP Fişi",
      desc: "Operasyon tamamlandığında iş emri kapatılır. Sarf edilen hammaddeler ve oluşan ürünler Mikro ERP'ye otomatik işlenir."
    }
  ];

  const sss = [
    {
      q: 'MES (Üretim Yönetim Sistemi) nedir, ERP\'den farkı nedir?',
      a: 'ERP sistemi finans, satın alma ve sipariş gibi makro süreçleri yönetirken; MES sistemi fabrika sahasındaki anlık üretim durumlarını, makine duruşlarını ve operatör performanslarını saniye bazında canlı olarak yönetir.'
    },
    {
      q: 'Makinelerimizden verileri nasıl topluyorsunuz?',
      a: 'Makinenin teknolojik altyapısına göre PLC bağlantıları, OPC-UA protokolleri veya makine başındaki operatörlerin kullandığı endüstriyel MES tablet terminalleri üzerinden veriler toplanır.'
    },
    {
      q: 'Mikro Jump veya Fly ile tam uyumlu çalışıyor mu?',
      a: 'Evet. MES sistemimiz Mikro\'daki üretim modülüyle doğrudan bağlantılıdır. Mikro\'da açılan iş emirleri MES ekranlarına düşer; MES sahasında üretilen mamul ve harcanan hammaddeler Mikro sarf/üretim fişlerine otomatik yansır.'
    },
    {
      q: 'MES yatırımı ne kadar sürede kendini amorti eder?',
      a: 'Hattaki duruşların azalması, fire oranlarının düşmesi ve OEE verimliliğindeki artış sayesinde MES projeleri ortalama 6 ila 12 ay içinde yatırım maliyetini tamamen amorti etmektedir.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(254,243,199,0.3),rgba(255,255,255,0))] -z-10" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-50 border border-amber-200/50 rounded-full text-amber-600 text-xs sm:text-sm font-bold shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Üretim Sahası Yönetim Sistemi (MES)
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              Fabrikanıza Canlı Kontrol:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-zinc-800">
                Mikro Entegre MES
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Üretim sahanızdaki makine duruşlarını, üretim miktarlarını ve OEE verimliliğinizi anlık izleyin. Operatör panelleriyle sahadan veri toplayın ve üretim emirlerini Mikro ERP ile canlı senkronize edin.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-gray-300/80 p-6 rounded-2xl shadow-md shadow-gray-100/50 hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">{stat.value}</div>
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
            MES Sistemi Nedir ve İşletmenize Ne Değer Katar?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            Fabrika sahanızdan anlık veri toplayarak üretim duruşlarını en aza indiren ve OEE skorunu artıran endüstriyel takip mimarisi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Definition */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white border border-amber-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl" />
            <div>
              <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-4">
                MES Nedir?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Üretim Yönetim Sistemi (MES), üretim sahasındaki makinelerden ve operatör terminallerinden anlık veri toplayarak duruşları, fireleri, makine durumlarını ve üretim hızını canlı izleyen ve OEE verimliliğini artıran bir sahasal takip yazılımıdır.
              </p>
            </div>
            <div className="border-t border-amber-100/60 pt-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Mikro ERP Entegrasyonlu</span>
            </div>
          </div>

          {/* Right Column: Key Values */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {[
              {
                title: "Anlık Duruş ve Arıza Yönetimi",
                desc: "Makinelerde plansız duruş veya arıza meydana geldiğinde, MES ekranı bakım ekibine anlık dijital arıza uyarısı gönderir."
              },
              {
                title: "Otomatik OEE (Ekipman Verimliliği) Analizi",
                desc: "Kullanılabilirlik, performans ve kalite oranları sistem tarafından milisaniyeler içinde ölçülerek OEE skorunuz canlı raporlanır."
              },
              {
                title: "Tamamen Kâğıtsız Üretim Sahası",
                desc: "Teknik resimler, iş emirleri ve operasyon rotaları operatörün makine başındaki MES terminal ekranına dijital iletilir."
              },
              {
                title: "Fiili Üretim Maliyetlerinin Düşürülmesi",
                desc: "Hangi makinenin ne kadar fire/hurda ürettiği anlık izlendiğinden, verimsizliklerin kaynağı hızla bulunup elenir."
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
          <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-200/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="space-y-5 lg:w-3/5">
              <span className="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full uppercase tracking-wider">
                Endüstriyel Veri Entegrasyonu
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Kayıpsız Üretim: Mikro ERP ile Canlı SQL Senkronizasyonu
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                MES sistemimiz, fabrika sahasındaki iş emri kapatma işlemlerini ve operasyon duruşlarını Mikro ERP tablonuza doğrudan işler. Operatör işi bitirdiğinde Mikro'daki iş emri otomatik kapanır ve harcanan hammaddeler stoktan düşülür.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {[
                  "Mikro iş emri operasyon rotalarının operatör ekranına aktarımı",
                  "Üretim tamamlandığında oluşan mamulün otomatik Mikro'ya girişi",
                  "Kullanılan hammadde partilerinin (lot/seri) Mikro sarf fişine kaydı",
                  "Operatör bazlı fiili çalışma sürelerinin işçilik maliyeti olarak aktarımı"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[280px] h-[280px] bg-white border border-gray-200 rounded-3xl shadow-xl flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 blur-2xl opacity-40 -z-10" />
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-amber-500 to-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                    <Database size={28} />
                  </div>
                  <div className="font-black text-gray-800 text-lg">Mikro SQL Entegrasyonu</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Üretim sahası fişleri ve sarf envanterleri doğrudan Mikro ERP SQL sunucunuzla eş zamanlı konuşur.
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
          <div className="inline-flex p-1.5 bg-amber-600 rounded-2xl border border-amber-700/50 mt-4 shadow-lg">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'features' ? 'bg-white text-amber-600 shadow-sm' : 'text-amber-100 hover:text-white'}`}
            >
              Ana Özellikler
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'usage' ? 'bg-white text-amber-600 shadow-sm' : 'text-amber-100 hover:text-white'}`}
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
                    <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-50 group-hover:text-white transition-colors duration-300">
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
              className="relative border-l border-amber-200/50 ml-4 md:ml-10 space-y-12"
            >
              {usageSteps.map((step, i) => (
                <div key={i} className="relative pl-8 sm:pl-12">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-xs shadow-md shadow-amber-500/15">
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
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              Sıkça Sorulan Sorular
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              MES Çözümleri Hakkında Merak Edilenler
            </h2>
          </div>

          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl shadow-amber-500/10 p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Üretim Sahanızı Dijital Çağa Taşıyın
            </h3>
            
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              Makinelerinizin verimliliğini artırmak, plansız duruşları en aza indirmek ve dijital iş emirlerine geçmek için hemen randevu alın.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
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
