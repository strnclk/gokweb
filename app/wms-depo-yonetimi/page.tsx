'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Package, Truck, BarChart3, Database, Phone, Mail, 
  Check, X, Sparkles, CheckCircle2, HelpCircle, 
  ArrowRight, ShieldAlert, Award, Clock, Layers, ShieldCheck, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WMSDepoYonetimiPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'usage'>('features');

  const stats = [
    { value: '%99.8', label: 'Stok Doğruluk Oranı', desc: 'Barkodlu el terminalleri ile sıfır veri girişi hatası.' },
    { value: '%45', label: 'Toplama Hızı Kazanımı', desc: 'Optimize edilmiş rotalarla depo içi yürüme süresi tasarrufu.' },
    { value: '%30', label: 'Hacim Alanı Optimizasyonu', desc: 'Hassas raf ve dinamik adres yönetimi.' }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Adresli Depo (Hücre) Yönetimi",
      description: "Deponuzu koridor, raf, kat ve göz bazında tanımlayarak hangi ürünün tam olarak nerede olduğunu anlık izleyin."
    },
    {
      icon: Package,
      title: "Barkodlu ve Karekodlu Giriş/Çıkış",
      description: "El terminalleri üzerinden 1D veya 2D (karekod) barkodları okutarak mal kabul, yerleştirme ve sevkiyat yapın."
    },
    {
      icon: Truck,
      title: "Akıllı Toplama Rotaları",
      description: "Sevkiyat emirleri geldiğinde el terminalinde depo içi en kısa yürüme rotasını çizerek personeli yönlendirin."
    },
    {
      icon: Clock,
      title: "FIFO / LIFO ve SKT Takibi",
      description: "Gıda, ilaç veya kimya gibi sektörler için son kullanma tarihi (SKT) ve parti/seri bazlı sevkiyat kuralları kurun."
    },
    {
      icon: Database,
      title: "Mikro ERP Entegrasyonu",
      description: "Mikro Run, Jump ve Fly ile doğrudan entegre çalışarak fatura, irsaliye ve transfer fişlerini eş zamanlı güncelleyin."
    },
    {
      icon: Layers,
      title: "Dinamik Stok Sayımı",
      description: "Depo faaliyetlerini durdurmadan, koridor veya raf bazlı kısmi sayımlar yaparak stok farklarını anında raporlayın."
    }
  ];

  const usageSteps = [
    {
      step: "01",
      title: "Mal Kabul ve Etiketleme",
      desc: "Gelen ürünler barkod okuyucu ile taranır. Barkodu olmayan ürünler için sistemden anında raf etiketi basılır."
    },
    {
      step: "02",
      title: "Sistem Yönlendirmeli Yerleştirme",
      desc: "Terminal ekranı, ürünün özellikleri ve deponun doluluk oranına göre en uygun raf adresini gösterir, onay alır."
    },
    {
      step: "03",
      title: "Sipariş Eşleştirme ve Toplama",
      desc: "Satış ekibi sipariş girdiğinde, depodaki el terminaline otomatik toplama emri düşer. Personel en verimli rotada ürünleri toplar."
    },
    {
      step: "04",
      title: "Paketleme ve Hızlı Sevkiyat",
      desc: "Toplanan ürünler paketleme masasında son kontrolden (koli barkodu) geçirilir, kargo fişiyle birlikte irsaliyelenerek gönderilir."
    }
  ];

  const sss = [
    {
      q: 'WMS (Depo Yönetim Sistemi) nedir, klasik stok takibinden farkı nedir?',
      a: 'Klasik ön muhasebede sadece toplam stok adedi bilinir. WMS ise o ürünün hangi raf adresinde, hangi seri numarasıyla veya hangi lot parti numarasıyla durduğunu ve hangi personelin oraya koyduğunu anlık olarak el terminali üzerinden takip eder.'
    },
    {
      q: 'Depomuzda internet çekmeyen ölü noktalar var, terminal çalışır mı?',
      a: 'Çözümlerimiz çevrimdışı (offline) çalışma desteğine sahiptir. Terminal bağlantı koptuğunda verileri kendi hafızasında saklar, sinyal alan bir bölgeye geçildiğinde otomatik olarak Mikro ERP veritabanına aktarır.'
    },
    {
      q: 'Mikro Run veya Jump ile entegrasyonu nasıl sağlıyorsunuz?',
      a: 'WMS yazılımımız doğrudan Mikro SQL tabloları ile canlı entegredir. Depocunun terminalde onayladığı mal kabul fişi, Mikro ERP\'de otomatik irsaliye veya depo transfer fişi olarak saniyeler içinde muhasebe ekranına yansır.'
    },
    {
      q: 'WMS kurulumu ne kadar sürmektedir?',
      a: 'Deponuzun büyüklüğüne, raf düzenine ve barkod altyapınıza bağlı olarak kurulum, adresleme ve personel eğitim süreçleri ortalama 2 ila 4 hafta arasında tamamlanmaktadır.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(240,253,250,0.4),rgba(255,255,255,0))] -z-10" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-teal-50 border border-teal-200/50 rounded-full text-teal-600 text-xs sm:text-sm font-bold shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Depo ve Lojistik Yönetimi
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              Deponuzda Kusursuz Kontrol:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600">
                Mikro Entegre WMS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Raf adresleme, barkodlu el terminalleri ve akıllı toplama rotaları ile deponuzdaki kayıp stoklara son verin. Girişten sevkiyata kadar tüm lojistik akışı Mikro ERP sisteminizle canlı izleyin.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-teal-500 mb-1">{stat.value}</div>
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
            Depo Yönetim Sistemi (WMS) Nedir ve İşletmenize Ne Değer Katar?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            Hatalı sevkiyatları sıfırlayacak ve deponuzun toplama hızını ikiye katlayacak akıllı yönetim mimarisi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Definition */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-white border border-teal-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl" />
            <div>
              <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-teal-500/20">
                <Package size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-4">
                WMS Nedir?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Depo Yönetim Sistemi (WMS), deponun mal kabulünden sevkiyata kadar olan tüm fiziksel operasyonlarını el terminalleri ve adresli raf (hücre) sistemiyle dijitalleştiren, stok doğruluğunu ve lojistik hızını artıran bir yönetim yazılımıdır.
              </p>
            </div>
            <div className="border-t border-teal-100/60 pt-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Mikro ERP Entegrasyonlu</span>
            </div>
          </div>

          {/* Right Column: Key Values */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {[
              {
                title: "Sıfır Hatalı Sevkiyat",
                desc: "Barkod okutma zorunluluğu sayesinde yanlış müşteriye yanlış ürün gönderimi veya yanlış lot sevkiyatı tamamen biter."
              },
              {
                title: "Optimum Depo Yerleşimi",
                desc: "Dinamik adresleme ve hacim analizi ile deponun saklama kapasitesi en üst verimlilikle kullanılır."
              },
              {
                title: "Hızlı Sipariş Hazırlama",
                desc: "Akıllı toplama rotası algoritması, depo toplama personelinin koridorlarda en az yürümesini sağlayacak rotalar çizer."
              },
              {
                title: "Gerçek Zamanlı Envanter Takibi",
                desc: "Yıllık veya aylık sayım durdurmalarına ihtiyaç duymadan, anlık stok durumunuzu el terminallerinden canlı izlersiniz."
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
          <div className="bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border border-teal-200/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="space-y-5 lg:w-3/5">
              <span className="text-xs font-bold bg-teal-100 text-teal-700 px-3 py-1 rounded-full uppercase tracking-wider">
                Kesintisiz Stok Eşleşmesi
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Hatasız Envanter: Mikro Canlı Entegrasyon Altyapısı
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                WMS çözümlerimiz, el terminalleri aracılığıyla deponun fiziksel stok hareketlerini doğrudan Mikro SQL sunucunuza aktarır. Mal kabul yapıldığı veya irsaliye kesildiği anda Mikro veritabanınız otomatik güncellenir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {[
                  "Mikro irsaliye ve fatura kalemlerinin terminale yüklenmesi",
                  "Depolar arası transfer fişlerinin otomatik oluşumu",
                  "Mal kabulde Mikro stok kartı barkod kontrolü",
                  "Negatif stoka düşmeyi engelleyen akıllı stok kilitleme"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4.5 h-4.5 text-teal-500 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[280px] h-[280px] bg-white border border-gray-200 rounded-3xl shadow-xl flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-emerald-100 blur-2xl opacity-40 -z-10" />
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-teal-500 to-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-teal-500/20">
                    <Database size={28} />
                  </div>
                  <div className="font-black text-gray-800 text-lg">Mikro SQL Entegrasyonu</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Sevkiyat ve stok transfer emirleri doğrudan Mikro ERP tabloları ile canlı olarak konuşur.
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
          <div className="inline-flex p-1.5 bg-teal-600 rounded-2xl border border-teal-700/50 mt-4 shadow-lg">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'features' ? 'bg-white text-teal-600 shadow-sm' : 'text-teal-100 hover:text-white'}`}
            >
              Ana Özellikler
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === 'usage' ? 'bg-white text-teal-600 shadow-sm' : 'text-teal-100 hover:text-white'}`}
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
                    <div className="w-10 h-10 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:text-white transition-colors duration-300">
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
              className="relative border-l border-teal-200/50 ml-4 md:ml-10 space-y-12"
            >
              {usageSteps.map((step, i) => (
                <div key={i} className="relative pl-8 sm:pl-12">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white flex items-center justify-center font-black text-xs shadow-md shadow-teal-500/15">
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
              <HelpCircle className="w-3.5 h-3.5 text-teal-500" />
              Sıkça Sorulan Sorular
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Depo Yönetimi (WMS) Hakkında Merak Edilenler
            </h2>
          </div>

          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-xl shadow-teal-500/10 p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Deponuzu Akıllı Çözümlerle Uçurun
            </h3>
            
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              Fiziksel stok kaçaklarını sıfırlamak ve sevkiyat hızınızı ikiye katlamak için hazırız. Hemen deponuzda ücretsiz analiz gerçekleştirelim.
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
