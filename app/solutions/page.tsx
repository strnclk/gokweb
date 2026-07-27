'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Building, Landmark, FileText, Users, Zap, Building2, Info, ChevronUp, MessageCircle, Factory, ShoppingCart, Shield, Truck, Store, Workflow, BarChart, UtensilsCrossed, Sparkles, ArrowRight, Cloud, Package, Smartphone } from 'lucide-react';
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

// 13 sekme — Dikey Çözümler sayfasındaki 13 kartla birebir eşleşir.
const tabList: TabDef[] = [
  { id: 'fastsell-hizli-satis', label: 'Fastsell Hızlı Satış', icon: ShoppingCart, tabClass: 'bg-orange-600', iconWrap: 'bg-orange-50', accent: 'text-orange-600' },
  { id: 'mizan-hizli-satis', label: 'Mizan Hızlı Satış', icon: Store, tabClass: 'bg-red-600', iconWrap: 'bg-red-50', accent: 'text-red-600' },
  { id: 'corbiq-cloud-uretim', label: 'Corbiq Cloud Üretim', icon: Cloud, tabClass: 'bg-sky-600', iconWrap: 'bg-sky-50', accent: 'text-sky-600' },
  { id: 'ussoft-uretim', label: 'Ussoft Üretim', icon: Factory, tabClass: 'bg-amber-600', iconWrap: 'bg-amber-50', accent: 'text-amber-600' },
  { id: 'ussoft-kalite', label: 'Ussoft Kalite', icon: Shield, tabClass: 'bg-emerald-600', iconWrap: 'bg-emerald-50', accent: 'text-emerald-600' },
  { id: 'eryaz-zeus-wms', label: 'Eryaz Zeus WMS', icon: Package, tabClass: 'bg-teal-600', iconWrap: 'bg-teal-50', accent: 'text-teal-600' },
  { id: 'nitrogen-depo', label: 'Nitrogen Depo', icon: Truck, tabClass: 'bg-cyan-600', iconWrap: 'bg-cyan-50', accent: 'text-cyan-600' },
  { id: 'eryaz-b2b', label: 'Eryaz B2B/B4B', icon: Users, tabClass: 'bg-indigo-600', iconWrap: 'bg-indigo-50', accent: 'text-indigo-600' },
  { id: 'b2bsoft-bayi', label: 'B2BSOFT Bayi', icon: Smartphone, tabClass: 'bg-violet-600', iconWrap: 'bg-violet-50', accent: 'text-violet-600' },
  { id: 'ussoft-raporlama', label: 'Ussoft Raporlama', icon: BarChart, tabClass: 'bg-fuchsia-600', iconWrap: 'bg-fuchsia-50', accent: 'text-fuchsia-600' },
  { id: 'fastsell-restoran', label: 'Fastsell Restoran', icon: UtensilsCrossed, tabClass: 'bg-rose-600', iconWrap: 'bg-rose-50', accent: 'text-rose-600' },
  { id: 'surec-yonetimi', label: 'Süreç Yönetimi', icon: Workflow, tabClass: 'bg-purple-600', iconWrap: 'bg-purple-50', accent: 'text-purple-600' },
  { id: 'diger', label: 'Diğer Çözümler', icon: Building2, tabClass: 'bg-blue-600', iconWrap: 'bg-blue-50', accent: 'text-blue-600' },
];

// Her sekmenin detay içeriği — tek şablon üzerinden render edilir.
const cozumDetay: Record<string, { baslik: string; slogan: string; icon: LucideIcon; maddeler: string[]; cozum?: string; rozetler?: string[] }> = {
  'fastsell-hizli-satis': {
    baslik: 'Fastsell Hızlı Satış',
    slogan: 'Satış, Stok ve Kasa Tek Ekranda!',
    icon: ShoppingCart,
    maddeler: [
      'Büfe, market, kasap, şarküteri, kuruyemişçi ve giyim mağazası gibi perakende noktalarında satış, stok ve kasa hareketlerini tek ekrandan yönetirsiniz.',
      'Satış siparişlerinizi hızlıca oluşturur, müşterilerinize beklemeden hizmet sunarsınız.',
      'e-Fatura ve e-Arşiv fatura gönderimini ve dövizli satış işlemlerini doğrudan satış ekranından gerçekleştirirsiniz.',
      'İnternet bağlantısı olmadığında da çalışan online/offline yapı sayesinde satışlarınız aksamaz.',
      'Puan-promosyon modülü ve iade yönetimi ile müşteri sadakatini artırırsınız.',
      'Detaylı satış analizi ve raporlama ile performansınızı ölçersiniz.',
      'Küçükten büyüğe tüm ölçeklerdeki perakende işletmelerine uyum sağlar; Mikro Run, Jump Basic, Jump ve Fly ile entegre çalışır.',
    ],
    cozum: 'Çözüm: Fastsell Hızlı Satış (Favorim Bilişim) — Mikro Run, Jump ve Fly ile entegre çalışır.',
  },
  'mizan-hizli-satis': {
    baslik: 'Mizan Hızlı Satış',
    slogan: 'Yazarkasa, Banka ve VUK 507 Uyumlu Hızlı Satış!',
    icon: Store,
    maddeler: [
      'Yazarkasa, banka ve VUK 507 ile uyumlu yapı sayesinde mevzuata uygun satış yaparsınız.',
      'Dokunmatik monitör desteği ve barkod okuma ile kasada bekleme sürelerini kısaltırsınız.',
      'Hızlı VKN sorgulama ile müşteri kartı oluşturur, satış iptali ve detaylı kasa raporlaması yaparsınız.',
      'Kampanya ve promosyon yönetimi ile satışlarınızı desteklersiniz, çoklu dövizle tahsilat alırsınız.',
      'Otomatik satış verisi yedekleme ile bilgileriniz güvende kalır.',
      'Mağaza, market, araç yedek parça ve motosiklet malzemeleri gibi farklı perakende kollarına uyum sağlar.',
      'Diş poliklinikleri gibi ihtisas alanlarında da kullanılır; Mikro Run ile sipariş-irsaliye, Mikro Jump ile finansal analiz süreçlerine bağlanır.',
    ],
    cozum: 'Çözüm: Mizan Hızlı Satış (Mizan Yazılım) — Mikro ERP ürünleriyle entegre çalışır.',
  },
  'corbiq-cloud-uretim': {
    baslik: 'Corbiq Cloud Üretim Yönetimi',
    slogan: 'Sahadan Veri Toplayın, Üretiminizi Buluttan Yönetin!',
    icon: Cloud,
    maddeler: [
      'Web tabanlı, kurulum gerektirmeyen bulut altyapısıyla üretim yönetimine hızla başlarsınız.',
      'MRP I / MRP II planlama ve ölçülebilir kapasite yönetimi ile üretiminizi etkin planlarsınız.',
      'Tablet, barkod ve kiosk üzerinden sahadan anlık veri toplar, üretimi gerçek zamanlı izlersiniz.',
      'Operasyonel karar sürelerini kısaltır, duruş ve gecikmelere hızla müdahale edersiniz.',
      'Kiralama modeliyle düşük başlangıç maliyeti avantajından yararlanırsınız.',
      'MRP I / MRP II ihtiyacı olan işletmeler ile sahadan veri toplamak isteyen endüstriyel kuruluşlar için tasarlanmıştır.',
    ],
    cozum: 'Çözüm: Corbiq Cloud Üretim Yönetimi (Corbiq Yazılım A.Ş.) — Mikro Jump ve Fly ile entegre çalışır.',
  },
  'ussoft-uretim': {
    baslik: 'Ussoft Üretim Yönetimi',
    slogan: 'ERP ile Üretim Sahası Arasındaki Kopukluğu Giderin!',
    icon: Factory,
    maddeler: [
      'Sahadaki operasyonları mobil üzerinden takip edebilir, tüm üretim sürecini uçtan uca yönetirsiniz.',
      'Üretimin anlık durumunu; kapasite, stok seviyeleri ve malzeme ihtiyaçları ile birlikte izlersiniz.',
      'Operasyonlara ait iş emri durumlarını, üretim hedeflerine ulaşma oranını, iş planının personel bazındaki durumunu anlık olarak görüntülersiniz.',
      'Sahadan toplanan verilerle üretim miktarı, duruş süreleri, fire oranları ve performans verilerini analiz edersiniz.',
      'Sipariş, satın alma, üretim, depo, sevkiyat ve barkod okutma süreçlerini tek sistem üzerinden yürütürsünüz.',
      'Barkod altyapısı ile operasyonları adım adım ilerletir, gerekli noktalarda barkod basımı yaparsınız.',
      'Parti ve lot bazlı üretim takibi sayesinde, üretilen bir ürünün hangi tarihte, hangi malzemelerle ve hangi operatör tarafından üretildiğini geriye dönük olarak izlersiniz.',
      'Demonte üretim yapılarında, her parça için ayrı iş emirleri oluşturarak süreçlerinizi kolaylaştırırsınız.',
      'PVC, alüminyum, talaşlı imalat ve genel üretim sanayine uygundur; ürünlerin operasyon ve makine bazlı dağılımını yapar, gecikmeleri raporlarsınız.',
      'Mobil ve web erişimi ile API desteği sunar; kiralama modeliyle düşük başlangıç maliyetiyle kullanılabilir.',
    ],
    cozum: 'Çözüm: Ussoft Üretim Yönetimi (Ussoft Bilişim ve Yazılım Teknolojileri)',
  },
  'ussoft-kalite': {
    baslik: 'Ussoft Kalite Yönetimi',
    slogan: 'Kalite Standartlarınızı Güvence Altına Alın!',
    icon: Shield,
    maddeler: [
      'Üretim başta olmak üzere tüm operasyonel süreçlerinizde belirli kalite standartlarını yakalayarak verim artışından müşteri memnuniyetine kadar işletmenize önemli kazanımlar sağlarsınız.',
      'Özelleştirilebilir ve esnek yapı sayesinde kalite yönetimini işletmenizin ihtiyaçlarına göre şekillendirirsiniz.',
      'Kalite süreçlerinde analizlerden yararlanarak hedeflediğiniz standartları yakalarsınız.',
      'Kalite standartlarını aşağıya çekebilecek olası hataları erkenden tespit edersiniz.',
      'Ürün, üretim, personel ve ortam kalite süreçlerini uçtan uca yönetirsiniz.',
      'Gıda, üretim ve temizlik sektörleri başta olmak üzere kalite ve hijyen takibi yapan işletmenizin bulunduğu sektörde rekabet gücünüzü artırırsınız.',
      'Mobil erişim ve API desteğiyle mevcut ERP sisteminize entegre olur; kiralama modeliyle maliyet avantajı sunar.',
    ],
    cozum: 'Çözüm: Ussoft Kalite Yönetimi (Ussoft Bilişim ve Yazılım Teknolojileri)',
  },
  'eryaz-zeus-wms': {
    baslik: 'Eryaz Zeus WMS',
    slogan: 'Deponuzun Dijital Zekâsı!',
    icon: Package,
    maddeler: [
      'Mal kabulden sevkiyata, stoktan faturalamaya tüm depo süreçlerinizi dijitalleştirirsiniz.',
      'Cross-docking (çapraz sevkiyat) ile ürünleri mal kabulden doğrudan sevkiyat alanına yönlendirir, ara depolamadan zaman kazanırsınız.',
      'Paylama modülüyle stoklar otomatik paylaştırılır; adım sayar ile saha verimliliği ölçülür.',
      'Seri/lot takibi ve raf adresleme ile ürünlerinizi depo içinde anında bulursunuz.',
      'Online/offline destekli sayım modülüyle envanter sayımlarını hızlandırırsınız.',
      'Otomotiv, yedek parça, madeni yağ ve kimya, elektronik, ecza depoları, gıda toptancılığı ve soğuk hava depoları gibi sektörlere uygundur.',
      'Android tabanlı mobil kullanımı ve kurulum gerektirmeyen yapısıyla hızla devreye alınır; çoklu depo yönetimi gerektiren orta ve büyük ölçekli işletmelere hitap eder.',
    ],
    cozum: 'Çözüm: Eryaz Zeus WMS (Eryaz Bilgi Teknolojileri) — Mikro ERP ile gelişmiş entegrasyon.',
  },
  'nitrogen-depo': {
    baslik: 'Nitrogen Depo Yönetimi',
    slogan: 'Stok, Raf ve Sevkiyatı Tek Sistemden Yönetin!',
    icon: Truck,
    maddeler: [
      'Ürün stok miktarlarını doğru ve güncel takip eder, envanterinizi anlık izlersiniz.',
      'Barkod ve QR kod desteğiyle depo operasyonlarını hızlandırırsınız.',
      'Renk, beden, parti/lot, seri numarası ve son kullanma tarihi bazında detaylı kontrol sağlarsınız.',
      'Son kullanma tarihi kontrolüyle ürün kayıplarını azaltırsınız.',
      'Saha satış modülüyle mobil ekipleriniz yerinde tahsilat ve raporlama yapar.',
      'E-dönüşüm modülüyle e-Fatura, e-Arşiv ve e-İrsaliye süreçlerinizi dijitalleştirirsiniz.',
      'Android, iOS ve web üzerinden erişirsiniz; kolay kurulum avantajı sunar.',
      'Üretim, perakende ve lojistik başta olmak üzere stok yönetimi gereken tüm sektörlere uygundur.',
    ],
    cozum: 'Çözüm: Nitrogen Depo Yönetimi — Mikro Jump ve Fly ile tam entegrasyon.',
  },
  'eryaz-b2b': {
    baslik: 'Eryaz B2B/B4B Bayi Yönetimi',
    slogan: 'Bayi ve Saha Satışında Dijital Güç!',
    icon: Users,
    maddeler: [
      'Bayileriniz ve saha satış ekiplerinizle tüm iş süreçlerinizi tek dijital platformda yönetirsiniz.',
      'Yapay zekâ destekli karar mekanizmasıyla müşteri verilerinden teklif ve fiyatlandırma önerileri alırsınız.',
      'Hızlı arama ve akıllı filtrelemeyle sipariş ve stok yönetimini hızlandırırsınız.',
      'Fuar, Mağaza ve Okul modülleriyle organizasyonlarınızı ve özel sipariş süreçlerinizi etkin yönetirsiniz.',
      'Bulut üzerinde güvenle çalışır; ücretsiz kurulum avantajı sunar.',
      'Bayi ve alt bayi işlemleri ile bayi ödemelerinin tahsilatları Mikro ERP programınıza otomatik aktarılır.',
      'Geniş bayi ağına satış yapan ve B2B/B4B modeliyle çalışan, büyüme odaklı işletmeler için geliştirilmiştir.',
    ],
    cozum: 'Çözüm: Eryaz B2B/B4B Bayi Yönetimi (Eryaz Bilgi Teknolojileri)',
  },
  'b2bsoft-bayi': {
    baslik: 'B2BSOFT Bayi Yönetimi',
    slogan: 'Bayi Ağınızı Tek Platformdan Yönetin!',
    icon: Smartphone,
    maddeler: [
      'Sipariş süreçlerini dijitalleştirir, tahsilat operasyonlarını hızlandırırsınız.',
      'Bayileriniz merkezi stok ve depo envanterini diledikleri an mobilden izler.',
      'Fiyat ve iskonto tanımlarını merkezden yönetirsiniz; bayileriniz kendilerine özel alım fiyatlarını görür.',
      'Bayileriniz sistem üzerinden sipariş verir, ödeme yapar ve siparişlerinin durumunu takip eder.',
      'Bayileriniz güncel bakiyelerini, borç bilgilerini, cari ekstrelerini, fatura ve irsaliye detaylarını görüntüler.',
      'Fatura, irsaliye ve bakiye takibi ile bayi performans analizi tek platformda toplanır; tüm işlemler Mikro ERP programınıza otomatik aktarılır.',
      'Perakende ve dağıtım sektöründe bayi ağına sahip, büyümeyi hedefleyen KOBİ ve kurumsal işletmeler için tasarlanmıştır.',
    ],
    cozum: 'Çözüm: B2BSOFT Bayi Yönetimi (B2BSOFT)',
  },
  'ussoft-raporlama': {
    baslik: 'Ussoft Raporlama ve Analiz',
    slogan: 'Veriye Dayalı Stratejik Kararlar Alın, İşletme Karlılığınızı Artırın!',
    icon: BarChart,
    maddeler: [
      'İşletmenizin nakit akışını, ödeme ve alacaklarını, stoklarını, raporlamalarını gelişmiş ekranlardan yönetirsiniz.',
      "Satış dashboard'u, bakiye analizi, varlık, stok envanter ve yaşlandırma raporu, satış–satın alma karşılaştırma raporlarına tek platformdan erişirsiniz.",
      'İhtiyaçlarınıza özel analizler oluşturur, veri odaklı karar alma süreçlerinizi hızlandırırsınız.',
      'Verilerden elde ettiğiniz içgörülerle stratejiler geliştirir, işletmenizin finansal ve operasyonel performansını doğru şekilde yönetirsiniz.',
      'Satışlar ile ilgili aylık, yıllık periyotlarda karşılaştırma yaparsınız.',
      'Müşteri analizleri yapar, değerlendirmeleri detaylı raporlar halinde alırsınız.',
      'Varlıklar, kasa ve banka işlemleri, borç-alacak analizi ve kredilerin raporlanması tek platformda toplanır; veriye dayalı karar almak isteyen orta ve büyük ölçekli işletmelere uygundur.',
    ],
    rozetler: ['Mobilden Kolay Erişim'],
    cozum: 'Çözüm: Ussoft Raporlama ve Analiz (Ussoft Bilişim ve Yazılım Teknolojileri)',
  },
  'fastsell-restoran': {
    baslik: 'Fastsell Restoran Yönetimi',
    slogan: 'Yiyecek İçecek Sektöründeyseniz, Tam Size Göre Bir Çözüm!',
    icon: UtensilsCrossed,
    maddeler: [
      'Daha hızlı sipariş alabilir, cep telefonu ya da tabletten siparişlerinizin ilgili birimlere iletilmesini sağlarsınız.',
      'Paket siparişlerinize adres bilgisi girer, siparişin durumunu takip edersiniz.',
      'Müşterilerinizin adres ve telefonlarını kaydeder, siparişlere not ekler, masa taşıma/birleştirme işlemini saniyeler içinde yaparsınız.',
      'Kasa bilgisayarından ya da mobil olarak ödeme alırsınız; parçalı ödeme, garsoniye, bahşiş, kuver ve indirim işlemlerini kolayca yönetirsiniz.',
      'Cari işlemler özelliği ile veresiye satış yapar, cariden alınan ödemeleri gün özetinden takip edersiniz.',
      'Müşterileriniz QR Kod menüyü okutarak temassız sipariş verir; baskı maliyetleriniz azalır.',
      'Trendyol, Getir ve Hepsiburada entegrasyonlarıyla dış kanal siparişleri sisteme otomatik düşer; kurye takip sistemiyle paket servis uçtan uca izlenir.',
      'Gün sonu işlemleri ile personel ve ürün bazlı raporlar alır, işletme kârlılığınızı ölçersiniz.',
      'Restoranlar, kafeler, oteller ve tüm yiyecek-içecek işletmeleri için tasarlanmıştır; muhasebe programlarıyla tam entegre çalışır.',
    ],
    cozum: 'Çözüm: Fastsell Restoran (Favorim Bilişim)',
  },
  'surec-yonetimi': {
    baslik: 'Süreç Yönetimi Çözümü',
    slogan: "İşinizi İster Web'den İsterseniz Mobil'den Adım Adım Yönetin!",
    icon: Workflow,
    maddeler: [
      'İş süreçleri ile ilgili anlık bildirimler alır, aksiyona daha hızlı geçersiniz.',
      'Stok yönetimi, müşteri analizi, toplantı planlamaları, satış teklif formu gönderimi gibi işlemlerinizi hızlandırırsınız.',
      'Süreçlerinizi; süreç haritaları, akış diyagramları gibi dokümanlar hazırlayarak planlayabilir, organizasyonun temel süreçlerini analiz edebilirsiniz.',
      'Belirlediğiniz öncelikli süreçlere ait şablonlar hazırlayarak alternatif senaryolar belirleyebilir, en etkili sonucu verecek yöntemi seçebilirsiniz.',
      'Süreçlere ait şablonlar üzerinde riski en aza indirmek için A/B testleri kullanabilir, denenen alternatiflerin beklenen çıktıları karşılayıp karşılamadığını kıyaslayabilirsiniz.',
      'İzleme ve değerlendirme aşamasında elde edilen veriler doğrultusunda, süreçlerdeki problemlere etkili çözümler üretebilirsiniz.',
    ],
    rozetler: ['Web ve Mobil ile Uyumlu', 'Kurulum Gerektirmez'],
    cozum: 'Çözüm: E-Flow Süreç Yönetimi (Netoloji)',
  },
};

export default function SolutionsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('fastsell-hizli-satis');

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
  // Eski kategori çapaları da (başka sayfalardan link verilmiş olabilir)
  // ilgili ürün sekmesine yönlendirilir.
  useEffect(() => {
    const eskiSekmeEslemesi: Record<string, string> = {
      'hizli-satis': 'fastsell-hizli-satis',
      'uretim-yonetimi': 'ussoft-uretim',
      'kalite-yonetimi': 'ussoft-kalite',
      'depo-lojistik': 'eryaz-zeus-wms',
      'b2b-bayi': 'eryaz-b2b',
      'raporlama-analiz': 'ussoft-raporlama',
      'restoran-yonetimi': 'fastsell-restoran',
    };
    const gecerliSekmeler = tabList.map((t) => t.id);

    const updateTabFromEnvironment = () => {
      let hash = window.location.hash.replace('#', '');
      if (eskiSekmeEslemesi[hash]) hash = eskiSekmeEslemesi[hash];
      const searchParams = new URLSearchParams(window.location.search);
      const sectorParam = searchParams.get('sector');
      const savedTab = typeof window !== 'undefined' ? sessionStorage.getItem('solutions_active_tab') : null;

      if (gecerliSekmeler.includes(hash)) {
        setActiveTab(hash);
        sessionStorage.setItem('solutions_active_tab', hash);
      } else if (sectorParam && gecerliSekmeler.includes(sectorParam)) {
        setActiveTab(sectorParam);
        sessionStorage.setItem('solutions_active_tab', sectorParam);
      } else if (savedTab && gecerliSekmeler.includes(savedTab)) {
        setActiveTab(savedTab);
      }
    };

    updateTabFromEnvironment();

    window.addEventListener('hashchange', updateTabFromEnvironment);
    window.addEventListener('popstate', updateTabFromEnvironment);

    return () => {
      window.removeEventListener('hashchange', updateTabFromEnvironment);
      window.removeEventListener('popstate', updateTabFromEnvironment);
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('solutions_active_tab', tabId);
      window.location.hash = tabId;
    }
  };

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
  const detay = cozumDetay[activeTab];
  const DetayIcon = detay?.icon;

  return (
    <div className="min-h-screen pt-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLdSolutions) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdSolutions) }} />
      <Navbar />
      
      {/* Hero Section - Modern SaaS Design */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-white pt-28">
        {/* Rainbow Background Image */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }}>
          <img src="/rainbw.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              ERP Çözümleri
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900"
            >
              Her Ölçekten İşletmenin
              <br />
              <span className="bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent">İhtiyacına Uygun Çözümler</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  onClick={() => handleTabChange(tab.id)}
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

          {/* Tab Content — 13 çözümün detayı tek şablondan (cozumDetay) beslenir */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'diger' ? (
              <motion.div
                key="diger"
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
            ) : detay && DetayIcon ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${c.iconWrap} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <DetayIcon size={28} className={c.accent} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{detay.baslik}</h3>
                      <p className="text-gray-600">{detay.slogan}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                    <ul className="space-y-2 text-gray-600">
                      {detay.maddeler.map((madde, i) => (
                        <li key={i} className="flex items-start"><span className={`${c.accent} font-bold mr-2`}>•</span>{madde}</li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                      {detay.rozetler && (
                        <div className="flex items-center gap-4 flex-wrap">
                          {detay.rozetler.map((rozet, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                              <span className="text-gray-600 text-sm">{rozet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {detay.cozum && <p className={`${c.accent} font-semibold text-sm`}>{detay.cozum}</p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
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
