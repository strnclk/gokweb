'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Building, Landmark, FileText, Users, Zap, Building2, Info, ChevronUp, MessageCircle, Factory, ShoppingCart, Shield, Truck, Store, Workflow, BarChart, UtensilsCrossed, Sparkles, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sssSolutions = [
  { soru: 'Hangi çözüm kategorileri sunuyorsunuz?', cevap: 'Hızlı satış, üretim yönetimi, kalite, depo ve lojistik, B2B bayi, süreç yönetimi, raporlama ve restoran yönetimi gibi 9 farklı kategoride çözüm sunuyoruz.' },
  { soru: 'Bu çözümler Mikro ile entegre mi çalışıyor?', cevap: 'Evet. Çözümlerimiz Mikro API ile güvenli entegrasyon sağlar; verileriniz tek merkezde ve tutarlı kalır.' },
  { soru: 'İşletmeme hangi çözümün uygun olduğunu nasıl anlarım?', cevap: 'İhtiyaç analiziyle en uygun çözümü birlikte belirleriz. Ürün tarafında ise çözüm danışmanı testimizle 3 soruda öneri alabilirsiniz.' },
  { soru: 'Sadece yazılım mı, kurulum ve destek de dahil mi?', cevap: 'Kurulum, eğitim ve kurulum sonrası destek dahildir. Amacımız çözümün ilk günden verimli çalışmasıdır.' },
];

const serviceJsonLdSolutions = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ERP ve Sektörel Çözümler',
  serviceType: 'ERP Çözümleri',
  description: 'Hızlı satış, üretim, kalite, depo/lojistik, B2B, süreç, raporlama ve restoran çözümleri; Mikro API ile entegrasyon.',
  provider: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık', url: 'https://gokkusagiyazilim.com.tr' },
  areaServed: { '@type': 'City', name: 'İstanbul' },
};

const faqJsonLdSolutions = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sssSolutions.map((f) => ({ '@type': 'Question', name: f.soru, acceptedAnswer: { '@type': 'Answer', text: f.cevap } })),
};

// Her kategori kendi rengini taşır (sektörel çözümler sayfasındaki desen).
// Tailwind sınıfları statik olarak taranır; bu yüzden renkler `bg-${x}-600`
// gibi kurulamaz, tam sınıf adı olarak yazılmak zorunda.
interface TabDef {
  id: string;
  label: string;
  icon: LucideIcon;
  tabClass: string;
  iconWrap: string;
  accent: string;
}

const tabList: TabDef[] = [
  { id: 'hizli-satis', label: 'Hızlı Satış', icon: ShoppingCart, tabClass: 'bg-orange-600', iconWrap: 'bg-orange-50', accent: 'text-orange-600' },
  { id: 'uretim-yonetimi', label: 'Üretim Yönetimi', icon: Factory, tabClass: 'bg-amber-600', iconWrap: 'bg-amber-50', accent: 'text-amber-600' },
  { id: 'kalite-yonetimi', label: 'Kalite Yönetimi', icon: Shield, tabClass: 'bg-emerald-600', iconWrap: 'bg-emerald-50', accent: 'text-emerald-600' },
  { id: 'depo-lojistik', label: 'Depo ve Lojistik', icon: Truck, tabClass: 'bg-teal-600', iconWrap: 'bg-teal-50', accent: 'text-teal-600' },
  { id: 'b2b-bayi', label: 'B2B Bayi Yönetimi', icon: Store, tabClass: 'bg-indigo-600', iconWrap: 'bg-indigo-50', accent: 'text-indigo-600' },
  { id: 'surec-yonetimi', label: 'Süreç Yönetimi', icon: Workflow, tabClass: 'bg-purple-600', iconWrap: 'bg-purple-50', accent: 'text-purple-600' },
  { id: 'raporlama-analiz', label: 'Raporlama ve Analiz', icon: BarChart, tabClass: 'bg-sky-600', iconWrap: 'bg-sky-50', accent: 'text-sky-600' },
  { id: 'restoran-yonetimi', label: 'Restoran Yönetimi', icon: UtensilsCrossed, tabClass: 'bg-rose-600', iconWrap: 'bg-rose-50', accent: 'text-rose-600' },
  { id: 'diger', label: 'Diğer Çözümler', icon: Building2, tabClass: 'bg-blue-600', iconWrap: 'bg-blue-50', accent: 'text-blue-600' },
];

export default function SolutionsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('hizli-satis');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        setScrollProgress((scrollPosition / scrollableHeight) * 100);
      } else {
        setScrollProgress(0);
      }
      
      setShowScrollTop(scrollPosition > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dikey Çözümler sayfasından /solutions/#<tab> ile gelindiğinde ilgili
  // çözüm sekmesini aç ve çözümler bölümüne kaydır (statik export uyumlu).
  useEffect(() => {
    const gecerliSekmeler = [
      'hizli-satis', 'uretim-yonetimi', 'kalite-yonetimi', 'depo-lojistik',
      'b2b-bayi', 'surec-yonetimi', 'raporlama-analiz', 'restoran-yonetimi', 'diger'
    ];
    const hash = window.location.hash.replace('#', '');
    if (gecerliSekmeler.includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = 'Merhaba%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Aşağıdaki içerik blokları yalnızca kendi sekmesi seçiliyken render edildiği
  // için, aktif kategorinin rengi hepsi için doğru rengi verir.
  const c = tabList.find((t) => t.id === activeTab) ?? tabList[0];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLdSolutions) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdSolutions) }} />
      <Navbar />
      
      {/* Hero Section - Modern SaaS Design */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-white pt-28">
        {/* Rainbow Background Image */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }}>
          <img src="/rainbw.png" alt="Rainbow Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              ERP Çözümleri
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900"
            >
              Her Ölçekten İşletmenin
              <br />
              <span className="bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent">İhtiyacına Uygun Çözümler</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl leading-relaxed mx-auto"
            >
              Depo ve lojistikten hızlı satışa, üretimden kalite yönetimine kadar işinize kolaylık ve işletmenize kârlılık sağlayacak Mikro API ile güvenli entegrasyon sağlayan çözümler
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="px-4 sm:px-6 py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-4">
              <Sparkles size={14} />
              Çözümler
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Her Ölçekten İşletmenin İhtiyacına Uygun Çözümler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              9 farklı çözüm kategorisi ile işletmenizi dijitalleştirin
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
            {tabList.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-5 py-2 sm:py-3 rounded-lg font-medium transition-all text-xs sm:text-sm cursor-pointer ${
                    isSelected
                      ? `${tab.tabClass} text-white shadow-md`
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <TabIcon className="w-4 h-4 inline mr-1" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'hizli-satis' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <ShoppingCart size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Hızlı Satış Çözümleri</h3>
                      <p className="text-gray-600">Satış Süreçlerinizi Hızlandırın!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Satış siparişlerinizi hızlıca oluşturabilir, müşterilerinize hızlı hizmet sunabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Satış tekliflerinizi kolayca yönetebilir, müşterilerinize profesyonel teklifler sunabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Müşteri ilişkilerinizi güçlendirerek satışlarınızı artırabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Satış raporları ile satış performansınızı analiz edebilirsiniz.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className={`${c.accent} font-semibold text-sm`}>Çözümler: Mikro Hızlı Satış, Fastsell Hızlı Satış, Mizan Hızlı Satış</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'uretim-yonetimi' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Factory size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Üretim Yönetimi Çözümleri</h3>
                      <p className="text-gray-600">Sahadan Veri Toplayın, Üretim Süreçlerinizi Etkili Planlayın ve Doğru Yönetin!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Sahadaki operasyonları mobil üzerinden takip edebilir, tüm üretim sürecini uçtan uca yönetirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Üretimin anlık durumunu; kapasite, stok seviyeleri ve malzeme ihtiyaçları ile birlikte izlersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Operasyonlara ait iş emri durumlarını, üretim hedeflerine ulaşma oranını, iş planının personel bazındaki durumunu anlık olarak görüntülersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Sahadan toplanan verilerle üretim miktarı, duruş süreleri, fire oranları ve performans verilerini analiz edersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Sipariş, satın alma, üretim, depo, sevkiyat ve barkod okutma süreçlerini tek sistem üzerinden yürütürsünüz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Barkod altyapısı ile operasyonları adım adım ilerletir, gerekli noktalarda barkod basımı yaparsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Parti ve lot bazlı üretim takibi sayesinde, üretilen bir ürünün hangi tarihte, hangi malzemelerle ve hangi operatör tarafından üretildiğini geriye dönük olarak izlersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Demonte üretim yapılarında, her parça için ayrı iş emirleri oluşturarak süreçlerinizi kolaylaştırırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Ürünlerin operasyon ve makine bazlı dağılımını yapar, üretim sürecinde oluşan gecikmeleri raporlarsınız.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className={`${c.accent} font-semibold text-sm`}>Çözüm: Ussoft Üretim Yönetimi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'kalite-yonetimi' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Shield size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Kalite Yönetimi Çözümü</h3>
                      <p className="text-gray-600">Kalite Standartlarınızı Güvence Altına Alın!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Üretim başta olmak üzere tüm operasyonel süreçlerinizde belirli kalite standartlarını yakalayarak verim artışından müşteri memnuniyetine kadar işletmenize önemli kazanımlar sağlarsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Özelleştirilebilir ve esnek yapı sayesinde kalite yönetimini işletmenizin ihtiyaçlarına göre şekillendirirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Kalite süreçlerinde analizlerden yararlanarak hedeflediğiniz standartları yakalarsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Kalite standartlarını aşağıya çekebilecek olası hataları erkenden tespit edersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Ürün, üretim, personel ve ortam kalite süreçlerini uçtan uca yönetirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Gıda, üretim ve temizlik sektörleri başta olmak üzere kalite ve hijyen takibi yapan işletmenizin bulunduğu sektörde rekabet gücünüzü artırırsınız.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className={`${c.accent} font-semibold text-sm`}>Çözüm: Ussoft Kalite Yönetimi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'depo-lojistik' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Truck size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Depo ve Lojistik Yönetimi Çözümleri</h3>
                      <p className="text-gray-600">Depo ve Lojistik Süreçlerini Uçtan Uca Yönetin!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Siparişe bağlı mal kabul ve sevk süreçlerini, sipariş toplama ve sevkiyat ön hazırlık işlemlerini hatasız yönetirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Tüm barkod tiplerine uyum ve QR desteği sayesinde envanter yönetiminizi kolaylaştırırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Android, IOS ve web tabanlı erişim ile kolay kurulumdan yararlanırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Ürün stok miktarlarını takip ederek envanterinizi doğru hesaplarsınız, raf ve adres takibi ile ürünlerinizi depo içinde kolayca bulursunuz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Gerçek zamanlı stok takibi sayesinde depo süreçlerinizi artık daha akıllı ve öngörülebilir bir yapı ile yönetirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Stok seviyelerini anlık olarak takip edebilir, stok fazlalıklarını önlersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Stokların son kullanma tarihlerini kontrol edebilir, bu sayede ürün kayıplarını azaltırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Araç planlama ve sevkiyattan sefer oluşturma ve sipariş eşleşmesine; toplama, paketleme, yükleme, kantar ve mal kabul dahil tüm depo ve lojistik operasyonlarınızı uçtan uca yönetirsiniz.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className={`${c.accent} font-semibold text-sm`}>Çözümler: Nitrogen Depo Yönetimi, Eryaz Zeus WMS Depo Yönetimi, Ussoft Depo ve Lojistik Yönetimi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'b2b-bayi' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Store size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">B2B Bayi Yönetimi Çözümleri</h3>
                      <p className="text-gray-600">Bayi Yönetiminde Kontrol Sizde!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Tüm bayilerin satış, stok, sipariş, fatura ve performans bilgilerini tek sistem üzerinden görüntüleyebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Yapay zekâ desteği ile müşteri verilerinden oluşturulan teklif ve fiyatlandırma önerilerinden faydalanırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>İşlemlerin otomasyona geçirilmesi sayesinde sipariş süreçleri, onay mekanizmaları, kampanya yönetimi gibi operasyonel süreçleri hızlandırırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Ürün içerisinde yer alan; Fuar Modülü, Mağaza Modülü sayesinde fuar organizasyonlarınızı ve mağazalarınızı etkin şekilde yönetirsiniz. Okul Modülü sayesinde öğrenci ve veliye özel sipariş yönetimi ve başvuru otomasyonunda yararlanırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Bayi ve alt bayi işlemlerini, bayilerinizin gerçekleştirdiği ödemelerin tahsilatlarını Mikro Yazılım ERP programınıza entegre ederek, işlemlerin programa otomatik aktarılmasından faydalanırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Bayileriniz kendilerine özel ürünlerin alım fiyatlarını ve iskontolarını görüntüleyebilir.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Bayileriniz sistem üzerinden ürün siparişi verebilir, ödeme işlemi gerçekleştirebilir, siparişlerin durumunu takip edebilir.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Bayileriniz sisteme girişle güncel bakiyelerini, borç bilgilerini, cari hesap/ekstrelerini, fatura ve irsaliye detaylarını görüntüleyebilir.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Bayileriniz ve temsilcileriniz 7/24 online olarak depo ve envanter bilgilerinizi görüntüleyebilir.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className={`${c.accent} font-semibold text-sm`}>Çözümler: B2BSoft Bayi Yönetimi, Eryaz B2B / B4B Bayi Yönetimi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'surec-yonetimi' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Workflow size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Süreç Yönetimi Çözümü</h3>
                      <p className="text-gray-600">İşinizi İster Web'den İsterseniz Mobil'den Adım Adım Yönetin!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>İş süreçleri ile ilgili anlık bildirimler alır, aksiyona daha hızlı geçersiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Stok yönetimi, müşteri analizi, toplantı planlamaları, satış teklif formu gönderimi gibi işlemlerinizi hızlandırırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Süreçlerinizi; süreç haritaları, akış diyagramları gibi dokümanlar hazırlayarak planlayabilir, organizasyonun temel süreçlerini analiz edebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Belirlediğiniz öncelikli süreçlere ait şablonlar hazırlayarak alternatif senaryolar belirleyebilir, en etkili sonucu verecek yöntemi seçebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Süreçlere ait şablonlar üzerinde riski en aza indirmek için A/B testleri kullanabilir, denenen alternatiflerin süreç yönetiminin beklenen çıktıları karşılayıp karşılamadığını kıyaslayabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>İzleme ve değerlendirme aşamasında elde edilen veriler doğrultusunda, süreçlerdeki problemlere etkili çözümler üretebilir, süreç yönetiminizi adım adım doğru yönetirsiniz.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">Web ve Mobil ile Uyumlu</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">Kurulum Gerektirmez</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'raporlama-analiz' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <BarChart size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Raporlama ve Analiz Çözümleri</h3>
                      <p className="text-gray-600">Veriye Dayalı Stratejik Kararlar Alın, İşletme Karlılığınızı Artırın!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>İşletmenizin nakit akışını, ödeme ve alacaklarını, stoklarını, raporlamalarını gelişmiş ekranlardan yönetebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Satış dashboard'u, bakiye analizi, varlık, stok envanter ve yaşlandırma raporu, satış–satın alma karşılaştırma raporlarına tek platformdan erişirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>İhtiyaçlarınıza özel analizler oluşturur, veri odaklı karar alma süreçlerinizi hızlandırırsınız.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Verilerden elde ettiğiniz içgörülerle stratejiler geliştirir, işletmenizin finansal ve operasyonel performansını doğru şekilde yönetirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Satışlar ile ilgili aylık, yıllık periyotlarda karşılaştırma yapabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Müşteri analizleri yapar, değerlendirmeleri detaylı raporlar halinde alırsınız.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">Mobilden Kolay Erişim</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'restoran-yonetimi' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <UtensilsCrossed size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Restoran Yönetimi Çözümü</h3>
                      <p className="text-gray-600">Yiyecek İçecek Sektöründeyseniz, Tam Size Göre Bir Çözümümüz Var!</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Daha hızlı sipariş alabilir, cep telefonu ya da tabletten siparişlerinizin ilgili birimlere iletilmesini sağlayabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Paket siparişlerinize adres bilgisi girebilir, siparişinizin durumunu takip edebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Müşterilerinizin adres ve telefonlarını kaydedebilir, siparişlere not ekleyebilir, masa taşıma/birleştirme işlemini saniyeler içerisinde gerçekleştirebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Kasa bilgisayarından ya da mobil olarak ödeme alabilirsiniz. Parçalı ödeme işlemlerini kolaylıkla yapabilir, garsoniye, bahşiş ya da kuver ekleyebilir, indirim yapabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Veresiye satış yapmak için cari hesapları kullanabilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Cari işlemler özelliği ile veresiye satış yapabilirsiniz. Bunun yanı sıra cariden aldığınız ödemeleri gün özetinden takip edebilirsiniz.</li>
                      <li className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>Müşterileriniz QR Kod menüyü okutarak temassız sipariş verebilir, bu sayede baskı maliyetlerini azaltarak kazanç sağlarsınız.</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className={`${c.accent} font-semibold text-sm`}>Çözüm: Fastsell Restoran</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'diger' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Building2 size={28} className={c.accent} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Diğer Çözümler</h3>
                  <p className="text-gray-600 mb-6">İhtiyacınıza özel diğer çözümlerimiz için bizimle iletişime geçin.</p>
                  <Link href="/contact" className={`inline-block px-6 py-3 ${c.tabClass} text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}>
                    İletişime Geçin
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

    
      
      {/* SSS */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {sssSolutions.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-500 mr-1">İlgili:</span>
            {[
              { etiket: 'Dikey Çözümler', href: '/vertical-solutions' },
              { etiket: 'Sektörel Çözümler', href: '/sectoral-solutions' },
              { etiket: 'Karşılaştırma', href: '/compare' },
              { etiket: 'İletişim', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-red-300 transition-colors">
                {b.etiket}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />


    </div>
  );
}
