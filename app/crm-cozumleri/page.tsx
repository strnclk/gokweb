'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Users, Target, BarChart3, MessageSquare, Phone, Mail, 
  Check, X, Sparkles, CheckCircle2, HelpCircle, 
  ArrowRight, ShieldAlert, Award, Clock, Database, Smartphone 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CRMCozumleriPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'usage'>('features');

  const stats = [
    { value: '%40', label: 'Satış Verimliliği Artışı', desc: 'Süreç otomasyonu ile hızlanan satış adımları.' },
    { value: '%35', label: 'Müşteri Memnuniyeti Artışı', desc: 'Hızlı geri dönüş ve kurumsal hafıza.' },
    { value: '%50', label: 'Teklif Hazırlama Tasarrufu', desc: 'Şablonlar sayesinde anında teklif üretimi.' }
  ];

  const features = [
    {
      icon: Users,
      title: "Merkezi Müşteri Veritabanı",
      description: "Müşterilerinizin tüm iletişim bilgilerini, yetkililerini ve geçmişini tek bir güvenli ekranda toplayın."
    },
    {
      icon: Target,
      title: "Fırsat ve Satış Boru Hattı",
      description: "Teklif aşamasındaki tüm satış fırsatlarınızı görsel kolonlarda izleyin ve satış ekibinizin hedeflerini yönetin."
    },
    {
      icon: MessageSquare,
      title: "İletişim ve Aktivite Geçmişi",
      description: "Telefon görüşmeleri, e-postalar ve toplantı notlarını kaydederek ekip içindeki kurumsal hafızayı koruyun."
    },
    {
      icon: BarChart3,
      title: "Satış ve Ciro Analizleri",
      description: "Hangi ürünün hangi dönemde daha çok sattığını ve satış temsilcilerinizin başarı oranlarını anlık raporlayın."
    },
    {
      icon: Database,
      title: "Mikro ERP Entegrasyonu",
      description: "Mikro Run, Jump veya Fly ile tam entegre çalışarak cari kartları ve siparişleri çifte veri girişi olmadan eşitleyin."
    },
    {
      icon: Smartphone,
      title: "Mobil Uyumlu Arayüz",
      description: "Saha ekiplerinin yoldayken veya müşteri ziyaretindeyken teklif hazırlamasını ve aktivite girmesini sağlayın."
    }
  ];

  const usageSteps = [
    {
      step: "01",
      title: "Potansiyel Müşteri Kaydı",
      desc: "Web sitesi, e-posta veya telefonla gelen tüm talepleri sisteme 'Aday Müşteri' olarak girin."
    },
    {
      step: "02",
      title: "İhtiyaç Analizi ve Aktivite Planlama",
      desc: "Müşteri ile yapılan görüşmeleri sisteme kaydedin ve sonraki takip araması için kendinize hatırlatıcı kurun."
    },
    {
      step: "03",
      title: "Teklif Hazırlama ve Gönderim",
      desc: "Mikro'daki güncel fiyat listelerinden faydalanarak tek tıkla şık bir PDF teklif hazırlayıp müşteriye iletin."
    },
    {
      step: "04",
      title: "Satışın Kapatılması ve ERP Aktarımı",
      desc: "Müşteri onay verdiğinde teklifi satışa dönüştürün; sipariş bilgisi otomatik olarak Mikro muhasebeye aktarılsın."
    }
  ];

  const sss = [
    {
      q: 'CRM programı kullanmak neden gereklidir?',
      a: 'Müşteri sayısı arttıkça bilgileri Excel veya not kağıtlarında tutmak imkansızlaşır. CRM, tüm görüşmeleri ve teklifleri kurumsal hafızaya kaydederek satışların kaçmasını engeller ve müşteri memnuniyeti oluşturur.'
    },
    {
      q: 'Mikro ERP sistemimizle veri senkronizasyonu nasıl yapılıyor?',
      a: 'Sistem arka planda Mikro veritabanı ile çift yönlü entegre çalışır. CRM üzerinden açılan bir cari veya teklif, onay aldığında doğrudan Mikro ERP\'ye fatura veya sipariş fişi olarak yansır.'
    },
    {
      q: 'Küçük ekipler için de CRM çözümü uygun mudur?',
      a: 'Kesinlikle. 1-2 kişilik satış ekipleri bile CRM kullanarak iş takibini disipline edebilir ve ileride ekip büyüdüğünde tüm geçmiş verileri yeni çalışanlara saniyeler içinde aktarabilir.'
    },
    {
      q: 'Müşteri verilerimizin güvenliği nasıl sağlanıyor?',
      a: 'Verileriniz yüksek güvenlikli yerel veya bulut sunucularda barındırılır. Kullanıcı bazlı yetkilendirme ile hangi personelin hangi müşterileri veya ciro raporlarını görebileceğini detaylıca kısıtlayabilirsiniz.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,247,237,0.4),rgba(255,255,255,0))] -z-10" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-orange-50 border border-orange-200/50 rounded-full text-orange-600 text-xs sm:text-sm font-bold shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Müşteri İlişkileri Yönetimi
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              Satış Gücünüzü Katlayın:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600">
                Mikro Entegre CRM
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Müşteri adaylarınızı, tekliflerinizi ve ekip aktivitelerinizi tek noktadan yönetin. Mikro Run, Jump ve Fly ile tam entegre çalışarak satış süreçlerinizi hatasız ve uçtan uca otomatikleştirin.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">{stat.value}</div>
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
            CRM Çözümleri Nedir ve İşletmenize Ne Değer Katar?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            Satış verimliliğinizi artıracak ve müşteri ilişkilerinizi kurumsallaştıracak modern altyapı.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Definition */}
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-white border border-orange-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl" />
            <div>
              <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-orange-500/20">
                <Users size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-4">
                CRM Nedir?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Müşteri İlişkileri Yönetimi (CRM), satış ekiplerinizin potansiyel müşterilerle ilk temastan satış sonrasına kadar tüm süreci tek noktadan izlemesini, teklif süreçlerini yönetmesini ve kurumsal hafızayı güvenceye almasını sağlayan merkezi bir iş yazılımıdır.
              </p>
            </div>
            <div className="border-t border-orange-100/60 pt-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Mikro ERP Entegrasyonlu</span>
            </div>
          </div>

          {/* Right Column: Key Values */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {[
              {
                title: "Kurumsal Hafıza Kaybını Önler",
                desc: "Personel değişikliklerinde bile müşteri görüşmeleri, geçmiş e-postalar ve teklif detayları şirkette kalır."
              },
              {
                title: "Satış Kaçırma Oranını Düşürür",
                desc: "Akıllı aktivite hatırlatıcıları ve entegre görev yönetimleri sayesinde tüm müşteri takipleri tam zamanında yapılır."
              },
              {
                title: "Karar Verme Sürecini Hızlandırır",
                desc: "Anlık satış raporları, boru hattı (pipeline) analizleri ve ciro tahminleri ile geleceğe yönelik kararları veriye dayalı alırsınız."
              },
              {
                title: "Hızlı ve Profesyonel Teklif Yönetimi",
                desc: "Mikro'daki güncel stok fiyatları ve döviz kurları ile dakikalar içinde şık teklifler hazırlayıp müşteriye iletebilirsiniz."
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
          <div className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 border border-orange-200/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="space-y-5 lg:w-3/5">
              <span className="text-xs font-bold bg-orange-100 text-orange-700 px-3 py-1 rounded-full uppercase tracking-wider">
                Mikro ERP Entegrasyon Gücü
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Çift Veri Girişine Son: Mikro Entegre Çalışma Mantığı
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Gökkuşağı CRM Çözümleri, Mikro ERP veritabanınızla SQL seviyesinde veya güvenli API'lerle gerçek zamanlı haberleşir. CRM üzerinde açılan ve ciroya dönüşen her başarılı sipariş anında Mikro Run, Jump veya Fly paneline düşer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {[
                  "Cari kartların anlık çift yönlü senkronizasyonu",
                  "Stok kodları ve fiyat listelerinin anlık çekimi",
                  "Satış siparişlerinin onay anında ERP'ye aktarımı",
                  "Müşteri bakiye ve risk limitlerinin CRM'de izlenmesi"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[280px] h-[280px] bg-white border border-gray-200 rounded-3xl shadow-xl flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200/20 blur-2xl opacity-40 -z-10" />
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-orange-500/20">
                    <Database size={28} />
                  </div>
                  <div className="font-black text-gray-800 text-lg">Mikro SQL Entegrasyonu</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Müşteri kartları ve faturalar tek merkezden yönetilir, muhasebe ve satış ekipleri tek veriyle konuşur.
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
          <div className="inline-flex p-1.5 bg-orange-600 rounded-2xl border border-orange-700/50 mt-4 shadow-lg">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'features' ? 'bg-white text-orange-600 shadow-sm' : 'text-orange-100 hover:text-white'}`}
            >
              Ana Özellikler
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'usage' ? 'bg-white text-orange-600 shadow-sm' : 'text-orange-100 hover:text-white'}`}
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
                    <div className="w-10 h-10 bg-orange-500/10 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-50 group-hover:text-white transition-colors duration-300">
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
              className="relative border-l border-orange-200/50 ml-4 md:ml-10 space-y-12"
            >
              {usageSteps.map((step, i) => (
                <div key={i} className="relative pl-8 sm:pl-12">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-white flex items-center justify-center font-black text-xs shadow-md shadow-orange-500/15">
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
              <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
              Sıkça Sorulan Sorular
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              CRM Çözümleri Hakkında Merak Edilenler
            </h2>
          </div>

          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-xl shadow-orange-500/10 p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Müşteri İlişkilerinizi Şansa Bırakmayın
            </h3>
            
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              İşletmenizin ciro hedeflerini büyütmek, Mikro ERP entegre CRM sistemimizle çok kolay. Hemen uzmanımızla görüşün, size en uygun kurguyu hazırlayalım.
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
