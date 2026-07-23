'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Building2, Factory, ShoppingCart, Truck, Users, Briefcase, Cpu, Database,
  Sparkles, ArrowRight, Phone, Stethoscope, Shirt, Wrench, Package, Apple,
  Calculator, ShoppingBag, Landmark, Scale, ShieldCheck, History, Scissors,
  Store, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sssSectoralDetails = [
  { soru: 'Sektörel çözümler Mikro ERP ile nasıl entegre olur?', cevap: 'Sektörel çözümlerimiz doğrudan Mikro SQL veritabanı ile çift yönlü entegre çalışır. Fatura, irsaliye, lot hareketi ve iş emirleri anlık olarak Mikro\'ya kaydedilir.' },
  { soru: 'Şubeli ve çok depolu yapılarda süreç nasıl yönetilir?', cevap: 'Tüm şube kasaları ve depolar merkez veri tabanına bağlıdır. Çevrimdışı (offline) çalışma desteği sayesinde internet kopsa dahi satış ve depo işlemleri devam eder.' },
  { soru: 'Kurulum ve entegrasyon süresi ne kadardır?', cevap: 'Sektörün ve süreçlerin karmaşıklığına bağlı olarak kurulum, özelleştirme ve eğitim dahil 2 ila 4 hafta arasında canlı kullanıma geçiş tamamlanır.' }
];

export default function SectoralSolutionsDetailPage() {
  const [activeTab, setActiveTab] = useState('insaat');

  // Handle Hash Navigation on load or hash change
  useEffect(() => {
    const validTabs = ['insaat', 'uretim', 'perakende', 'lojistik', 'gida', 'tekstil', 'otomotiv', 'saglik'];
    const hash = window.location.hash.replace('#', '');
    if (validTabs.includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        document.getElementById('solutions-detail-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const tabList = [
    { id: 'insaat', label: 'İnşaat', icon: Building2, colorClass: 'bg-blue-600' },
    { id: 'uretim', label: 'Üretim', icon: Factory, colorClass: 'bg-amber-600' },
    { id: 'perakende', label: 'Perakende', icon: ShoppingCart, colorClass: 'bg-orange-600' },
    { id: 'lojistik', label: 'Lojistik', icon: Truck, colorClass: 'bg-teal-600' },
    { id: 'gida', label: 'Gıda', icon: Apple, colorClass: 'bg-emerald-600' },
    { id: 'tekstil', label: 'Tekstil', icon: Shirt, colorClass: 'bg-indigo-600' },
    { id: 'otomotiv', label: 'Otomotiv', icon: Wrench, colorClass: 'bg-sky-600' },
    { id: 'saglik', label: 'Sağlık', icon: Stethoscope, colorClass: 'bg-rose-600' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            Sektörel Çözümler
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            Sektörünüze Özel Çözümler
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
          >
            Sektörünüze özel ERP modülleri, depo, hızlı satış ve izlenebilirlik entegrasyonları ile işinizi dijitalleştirin.
          </motion.p>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section id="solutions-detail-section" className="px-4 sm:px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
            {tabList.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    window.location.hash = tab.id;
                  }}
                  className={`px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xl font-semibold transition-all text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? `${tab.colorClass} text-white shadow-md`
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <TabIcon className="w-4.5 h-4.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Contents */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'insaat' && (
                <motion.div
                  key="insaat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 size={28} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">İnşaat ve Şantiye Yönetimi</h3>
                        <p className="text-gray-600 text-sm">Şantiye Süreçlerinizi Tek Merkezden Kolayca Yönetin!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Hak-Ediş Hesaplama</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Taşeron sözleşme şartları, yapılan iş miktarları, stopaj ve cezaları otomatik harmanlayarak hatasız hak-ediş raporları hazırlayabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Satın Alma Süreci</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Şantiyeden gelen malzeme taleplerinden tedarikçi teklif toplamaya, onay mekanizmasından faturalandırmaya kadar tüm satın alma döngüsünü kontrol edebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Proje Bütçe ve Maliyet Takibi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Şantiyelerinizin nakit akışını, taşeron borçlarını, malzeme stok durumlarını ve bütçe gerçekleşmelerini anlık izleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Sözleşme ve Taşeron Yönetimi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Projelerinizde çalışan her taşeron için özel sözleşme şartları ve birim fiyat tanımlamalarını saklayabilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-blue-600 font-semibold text-sm">
                          Entegre Çözümler: Mikro Run İnşaat, Mikro Jump İnşaat, Mikro Fly İnşaat Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'uretim' && (
                <motion.div
                  key="uretim"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Factory size={28} className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Üretim & MES Çözümü</h3>
                        <p className="text-gray-600 text-sm">Sahadan Veri Toplayın, Üretim Süreçlerinizi Doğru Yönetin!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">MES Çözümleri</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Makine başındaki operatör terminalleri, barkod okuyucular ve endüstriyel panolar aracılığıyla üretim sahasını anlık olarak dijitalleştirip izleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Anlık Makine İzleme</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Fabrikadaki makinelerin çalışma, duruş, arıza ve ayar durumlarını canlı dashboard ekranlarından takip edebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">OEE ve Verimlilik Raporu</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Ekipman etkinliğinizi (Kullanılabilirlik, Performans, Kalite) anlık ölçebilir ve OEE skorlarınızı otomatik alabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">İş Emri Entegrasyonu</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Mikro ERP üzerinde planlanan iş emirlerini doğrudan sahadaki operatör ekranlarına yansıtabilir ve fire/üretim miktarlarını otomatik geri bildirebilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-amber-600 font-semibold text-sm">
                          Entegre Çözümler: Ussoft Üretim Yönetimi, Mikro Jump Üretim, Mikro Fly Üretim Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'perakende' && (
                <motion.div
                  key="perakende"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ShoppingCart size={28} className="text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Perakende & Hızlı Satış</h3>
                        <p className="text-gray-600 text-sm">Satış Süreçlerinizi Hızlandırın, Kasada Zaman Kazanın!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Hızlı Satış</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Dokunmatik ekran uyumlu pratik arayüz ile ürün barkodlarını okutabilir, ödemeyi saniyeler içinde nakit veya kredi kartıyla tamamlayabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Kampanya ve Sadakat Yönetimi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Merkezden tanımlanan indirimleri, puan kazanımlarını veya sepet kampanyalarını şubelerdeki kasalarda eş zamanlı uygulayabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">ÖKC ve Banka Entegrasyonu</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Yeni nesil ödeme kaydedici yazar kasa cihazları ve banka sistemleriyle yasal mevzuatlara %100 uyumlu haberleşebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Canlı Şube ve Stok İzleme</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Mağazalarda satılan ürünlerin stoklarını Mikro ERP envanterinden canlı düşebilir, şubeler arası ürün transferleri yapabilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-orange-600 font-semibold text-sm">
                          Entegre Çözümler: Mikro Hızlı Satış, Fastsell Hızlı Satış, Mizan Hızlı Satış, Mikro ERP Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'lojistik' && (
                <motion.div
                  key="lojistik"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Package size={28} className="text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Lojistik & Depo Yönetimi</h3>
                        <p className="text-gray-600 text-sm">Deponuzun Tüm Giriş ve Çıkış Hareketlerini Kontrol Edin!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Depo Yönetimi (WMS)</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Deponuzu raf, göz ve koridor bazında adresleyebilir, mal yerleştirme ve toplama süreçlerini sistem yönlendirmesiyle yürütebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Barkod Yönetimi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Malzeme, paket, koli ve palet düzeyinde benzersiz barkod veya karekod etiketleri oluşturup el terminalleriyle okutarak hızlı işlem yapabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Sipariş Toplama ve Sevk</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Sevkiyat emirlerine göre en kısa toplama rotalarını çıkarabilir, paketleme masası doğrulamalarıyla yanlış teslimatları önleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Sayım ve Envanter Kontrolü</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Depo el terminalleriyle anlık veya dönem sonu stok sayımlarını sıfır hatayla gerçekleştirebilir, farkları raporlayabilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-teal-600 font-semibold text-sm">
                          Entegre Çözümler: Ussoft Depo Otomasyonu, Mikro Jump/Fly Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gida' && (
                <motion.div
                  key="gida"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Apple size={28} className="text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Gıda Güvenliği & İzlenebilirlik</h3>
                        <p className="text-gray-600 text-sm">Hammadde Girişinden Nihai Tüketiciye Kadar Lot İzleme!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Parti ve Lot Takibi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Hammadde mal kabulünde atanan lot numaralarını tüm üretim aşamalarında izleyebilir, hangi hammaddeyle hangi ürünün üretildiğini raporlayabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Kalite Yönetimi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Gıda imalatındaki kritik kontrol noktalarında kimyasal, fiziksel ve laboratuvar test sonuçlarını sisteme girip, kalitesiz ürünün sevkini otomatik engelleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Uçtan Uca İzlenebilirlik</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Olası bir ürün geri çağırma (recall) durumunda, hatalı hammaddeden üretilen tüm parti kodlarını ve satılan müşterileri saniyeler içinde tespit edebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">FEFO ve Raf Ömrü</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Depodaki ürünleri son tüketim tarihine (STT) göre takip edebilir, SKT'si yaklaşan ürünlerin kasadan veya depodan sevk edilmesini engelleyebilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-emerald-600 font-semibold text-sm">
                          Entegre Çözümler: Mikro Gıda Lot Entegrasyonu, Ussoft Gıda Barkod Takibi, Mikro Jump/Fly Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'tekstil' && (
                <motion.div
                  key="tekstil"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shirt size={28} className="text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Tekstil & Mağazacılık Çözümü</h3>
                        <p className="text-gray-600 text-sm">Varyant Matrisi ve Şube Satışlarınızı Kolayca İzleyin!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Renk ve Beden Takibi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Tekstil sektörünün ihtiyacı olan varyant (renk, beden, boy, kavela vb.) yapısını kolayca kurup stok giriş ve çıkışlarını bu detayda yapabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Mağazacılık Çözümleri</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Şubelerinizdeki reyon satışlarını, konsinye gönderimleri, sezon sonu indirim süreçlerini ve iade takibini anlık yürütebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Fason Üretim Takibi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Kumaş ve aksesuarların fason atölyelerine çıkışını, dikim, ütü ve paketleme aşamalarından sonra mamul olarak geri girişini izleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Koleksiyon ve Model Tasarımı</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Ürünlerinizin model reçetelerini hazırlayabilir, koleksiyon bazlı fiyatlandırma ve maliyet analizlerini yapabilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-indigo-600 font-semibold text-sm">
                          Entegre Çözümler: Mikro Fason Takip, Tekstil Perakende Çözümleri, Mikro Jump/Fly Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'otomotiv' && (
                <motion.div
                  key="otomotiv"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Wrench size={28} className="text-sky-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Otomotiv & Teknik Servis</h3>
                        <p className="text-gray-600 text-sm">Yedek Parça Seri Takiplerini ve Servis Kayıtlarını Yönetin!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Seri No Takibi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Değerli yedek parçaları benzersiz üretici seri numaralarıyla kaydedebilir, hangi parçanın hangi şasi/plakaya monte edildiğini izleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Teknik Servis Yönetimi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Giriş yapan araçlar için dijital servis kabul formları oluşturabilir, teknisyen atamalarını ve arıza iş emirlerini planlayabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Garanti ve Servis Geçmişi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Araçların plaka/şasi numaralarından geçmiş tüm servis bakım kartlarını, değişen parçalarını ve aktif garanti sürelerini sorgulayabilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Müşteri İlişkileri (CRM)</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Servis randevularını organize edebilir, bakım periyodu yaklaşan müşterilere SMS/E-posta ile otomatik hatırlatma gönderebilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sky-600 font-semibold text-sm">
                          Entegre Çözümler: Mikro Otomotiv Servis Çözümü, Ussoft Teknik Servis Entegrasyonu, Mikro Jump/Fly Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'saglik' && (
                <motion.div
                  key="saglik"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Stethoscope size={28} className="text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Medikal Takip & ÜTS Entegrasyonu</h3>
                        <p className="text-gray-600 text-sm">ÜTS Bildirimlerini ve Steril Lot/Reload Süreçlerini Otomatikleştirin!</p>
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">ÜTS Bildirimi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Tıbbi cihazların alma, verme, kullanım ve imha bildirimlerini Sağlık Bakanlığı Ürün Takip Sistemi portalına tek tuşla otomatik gönderebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Lot ve Reload Takibi</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Steril cerrahi malzemelerin, sarfların ve implantların lot numaralarını ve reload (tekrar yükleme) partilerini anlık olarak takip edebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Sterilizasyon ve Miad Kontrolü</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Medikal depolarınızdaki ürünlerin sterilizasyon son kullanım tarihlerini izleyebilir, miadı dolmaya yakın ürünleri otomatik kilitleyebilirsiniz.
                          </p>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100/85 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Mikro ERP Entegrasyonu</h5>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Tüketilen medikal sarfları ve ÜTS lot hareket kayıtlarını doğrudan Mikro stok fişlerine anlık olarak senkronize edebilirsiniz.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-rose-600 font-semibold text-sm">
                          Entegre Çözümler: Mikro Sağlık ÜTS Entegrasyonu, Ussoft Medikal Takip Çözümü, Mikro Jump/Fly Entegrasyonu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simple Direct Call Action */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-red-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Hemen Teklif Al
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900">
              Sektörel Çözümler Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-3">
            {sssSectoralDetails.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
