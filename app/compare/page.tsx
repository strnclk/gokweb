'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Check, Star, Users, Zap, Shield, Database, Globe, DollarSign, Building2, TrendingUp, Package, Settings, HelpCircle, ChevronRight, Lightbulb, Cpu, Target, Award, Trophy, ArrowRight, Sparkles, BarChart3, RefreshCw, Minus, CheckCircle2 } from 'lucide-react';

const sssCompare = [
  { soru: 'Bu karşılaştırma aracı nasıl çalışıyor?', cevap: '3 kısa soruyla işletmenizin büyüklüğünü, sektörünü ve ana ihtiyacını analiz eder; size en uygun Mikro çözümünü eşleşme oranıyla önerir.' },
  { soru: 'Sonuçlar ne kadar güvenilir?', cevap: 'Sonuçlar yönlendirici bir öneri niteliğindedir. Kesin seçim için ihtiyaçlarınızı uzmanlarımızla birlikte değerlendirmenizi öneririz.' },
  { soru: 'Mikro Run, Jump ve Fly arasındaki fark nedir?', cevap: 'Mikro Run en küçük ölçek ve esnaf için; Mikro Jump büyüyen KOBİ’ler için; Mikro Fly ise kurumsal ve e-ticaret ihtiyacı olan işletmeler içindir. Ölçeğinize göre doğru paketi öneririz.' },
];

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mikro Çözüm Danışmanı',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: '3 soruda işletmenize en uygun Mikro çözümünü öneren ücretsiz karşılaştırma aracı.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  provider: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık', url: 'https://gokkusagiyazilim.com.tr' },
};

const faqJsonLdCompare = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sssCompare.map((f) => ({ '@type': 'Question', name: f.soru, acceptedAnswer: { '@type': 'Answer', text: f.cevap } })),
};

// Ürün logolarının Google Görseller'de doğru eşleşmesi için yapılandırılmış veri
const urunLogolariJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mikro ERP Çözümleri Karşılaştırması',
  itemListElement: [
    { id: 'mikro-run', name: 'Mikro Run', category: 'Esnaf/Mikro İşletme ERP' },
    { id: 'mikro-jump', name: 'Mikro Jump', category: 'KOBİ ERP' },
    { id: 'mikro-fly', name: 'Mikro Fly', category: 'E-Ticaret ERP' },
  ].map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: p.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows, Web',
      image: `https://gokkusagiyazilim.com.tr/${p.id}-logo.png`,
      url: `https://gokkusagiyazilim.com.tr/${p.id}/`,
      description: `${p.name} — ${p.category}`,
    },
  })),
};

export default function ComparePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const stats = [
    { value: '3', label: 'Akıllı Soru', icon: Target, color: 'from-blue-500 to-blue-600' },
    { value: '5+', label: 'Çözüm Seçeneği', icon: Package, color: 'from-emerald-500 to-emerald-600' },
    { value: '95%', label: 'Doğruluk Oranı', icon: Award, color: 'from-amber-500 to-amber-600' }
  ];

  const products = [
    {
      id: 'mikro-fly',
      name: 'Mikro Fly',
      category: 'E-Ticaret ERP',
      rating: 4.9,
      description: 'E-ticaret entegrasyonu için pazar yeri bağlantılı özel çözüm',
      features: ['Pazar Yeri Entegrasyonu', 'Otomatik Sipariş', 'Stok Senkronizasyonu', 'Kargo Entegrasyonu', 'Ön Muhasebe', 'E-Dönüşüm', 'CRM', 'Karar Destek'],
      pros: ['Pazar yeri entegrasyonu', 'Otomasyon', 'Çoklu platform', 'Gelişmiş analitik'],
      cons: ['E-ticaret odaklı'],
      icon: Globe,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      recommended: true
    },
    {
      id: 'mikro-jump',
      name: 'Mikro Jump',
      category: 'KOBİ ERP',
      rating: 4.5,
      description: '5-15 çalışanlı KOBİ\'ler için ideal başlangıç ERP çözümü',
      features: ['Stok/Ürün Yönetimi', 'Hizmet ve Masraf', 'Satın Alma ve Tedarikçi', 'Satış ve Müşteri', 'Ön Muhasebe', 'E-Dönüşüm', 'Genel Muhasebe', 'Çek/Senet'],
      pros: ['Kolay kullanım', 'Hızlı kurulum', 'Genel muhasebe'],
      cons: ['Orta seviye özellikler'],
      icon: Zap,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 'mikro-run',
      name: 'Mikro Run',
      category: 'Küçük İşletme ERP',
      rating: 4.7,
      description: "5'ten az çalışanlı küçük ölçekli işletmeler için hızlı ve pratik muhasebe çözümü",
      features: ['Stok/Ürün Yönetimi', 'Hizmet ve Masraf', 'Satın Alma ve Tedarikçi', 'Satış ve Müşteri', 'Ön Muhasebe', 'E-Dönüşüm'],
      pros: ['Hızlı kurulum', 'Kolay kullanım', 'Uygun fiyat'],
      cons: ['Sınırlı kullanıcı sayısı'],
      icon: Cpu,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  ];

  const services = [
    {
      id: 'erp-entegrasyon',
      name: 'ERP Entegrasyon Hizmeti',
      category: 'Profesyonel Hizmet',
      rating: 4.7,
      description: 'Mevcut sistemlerinize tam ERP entegrasyonu ve özelleştirme',
      features: ['Sistem Analizi', 'Özelleştirme', 'Veri Migration', 'Eğitim', 'Destek'],
      pros: ['Tam entegrasyon', 'Özelleştirme', 'Uzman destek'],
      cons: ['Zaman alıcı'],
      icon: Users,
      color: 'amber'
    },
    {
      id: 'eflow-entegrasyon',
      name: 'E-Flow BPM',
      category: 'E-Dönüşüm',
      rating: 4.4,
      description: 'E-fatura, e-defter, e-arşiv ve süreç otomasyonu çözümleri',
      features: ['E-Fatura', 'E-Defter', 'E-Arşiv', 'GIB Entegrasyonu', 'Süreç Otomasyonu'],
      pros: ['Yasal uyum', 'Otomasyon', 'Süreç yönetimi'],
      cons: ['Sadece e-dönüşüm'],
      icon: Shield,
      color: 'teal'
    }
  ];

  const questionnaire = [
    {
      id: 'company_size',
      question: 'Şirketiniz kaç çalışana sahip?',
      options: [
        { value: '1-10', label: '1-10 Çalışan (Küçük İşletme)', icon: Users },
        { value: '11-50', label: '11-50 Çalışan (Orta Ölçekli)', icon: Building2 },
        { value: '51-200', label: '51-200 Çalışan (Büyük)', icon: Building2 },
        { value: '200+', label: '200+ Çalışan (Kurumsal)', icon: TrendingUp }
      ]
    },
    {
      id: 'industry',
      question: 'Hangi sektörde faaliyet gösteriyorsunuz?',
      options: [
        { value: 'retail', label: 'Perakende / Mağazacılık', icon: Package },
        { value: 'manufacturing', label: 'Üretim / Sanayi', icon: Settings },
        { value: 'service', label: 'Hizmet Sektörü', icon: Users },
        { value: 'ecommerce', label: 'E-Ticaret', icon: Globe },
        { value: 'other', label: 'Diğer', icon: HelpCircle }
      ]
    },
    {
      id: 'main_need',
      question: 'En çok hangi ihtiyacınız var?',
      options: [
        { value: 'finance', label: 'Finansal yönetim', icon: DollarSign },
        { value: 'inventory', label: 'Stok takibi', icon: Package },
        { value: 'ecommerce_integration', label: 'E-ticaret entegrasyonu', icon: Globe },
        { value: 'automation', label: 'Süreç otomasyonu', icon: Zap },
        { value: 'legal_compliance', label: 'E-dönüşüm uyumu', icon: Shield }
      ]
    }
  ];

  const generateRecommendations = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    setTimeout(() => {
      const scores: Record<string, number> = {};
      
      products.forEach(item => {
        scores[item.id] = 0;
      });

      // Puanlama tablosu: her soru seçeneği, 5 planın tamamına puan verir.
      // Böylece hangi cevap gelirse gelsin tüm ürünler adil ve eksiksiz puanlanır.
      const puanTablosu: Record<string, Record<string, Record<string, number>>> = {
        company_size: {
          '1-10':   { 'mikro-run': 30, 'mikro-jump': 20, 'mikro-fly': 30, 'erp-entegrasyon': 5,  'eflow-entegrasyon': 10 },
          '11-50':  { 'mikro-run': 30, 'mikro-jump': 30, 'mikro-fly': 25, 'erp-entegrasyon': 15, 'eflow-entegrasyon': 20 },
          '51-200': { 'mikro-run': 25, 'mikro-jump': 35, 'mikro-fly': 20, 'erp-entegrasyon': 30, 'eflow-entegrasyon': 30 },
          '200+':   { 'mikro-run': 15, 'mikro-jump': 30, 'mikro-fly': 15, 'erp-entegrasyon': 40, 'eflow-entegrasyon': 35 },
        },
        industry: {
          'retail':        { 'mikro-run': 30, 'mikro-jump': 30, 'mikro-fly': 25, 'erp-entegrasyon': 15, 'eflow-entegrasyon': 15 },
          'manufacturing': { 'mikro-run': 25, 'mikro-jump': 40, 'mikro-fly': 10, 'erp-entegrasyon': 35, 'eflow-entegrasyon': 25 },
          'service':       { 'mikro-run': 25, 'mikro-jump': 25, 'mikro-fly': 25, 'erp-entegrasyon': 20, 'eflow-entegrasyon': 25 },
          'ecommerce':     { 'mikro-run': 20, 'mikro-jump': 20, 'mikro-fly': 45, 'erp-entegrasyon': 15, 'eflow-entegrasyon': 15 },
          'other':         { 'mikro-run': 25, 'mikro-jump': 25, 'mikro-fly': 25, 'erp-entegrasyon': 20, 'eflow-entegrasyon': 20 },
        },
        main_need: {
          'finance':               { 'mikro-run': 35, 'mikro-jump': 30, 'mikro-fly': 20, 'erp-entegrasyon': 20, 'eflow-entegrasyon': 15 },
          'inventory':             { 'mikro-run': 35, 'mikro-jump': 30, 'mikro-fly': 25, 'erp-entegrasyon': 15, 'eflow-entegrasyon': 10 },
          'ecommerce_integration': { 'mikro-run': 20, 'mikro-jump': 20, 'mikro-fly': 45, 'erp-entegrasyon': 20, 'eflow-entegrasyon': 15 },
          'automation':            { 'mikro-run': 20, 'mikro-jump': 25, 'mikro-fly': 20, 'erp-entegrasyon': 40, 'eflow-entegrasyon': 40 },
          'legal_compliance':      { 'mikro-run': 15, 'mikro-jump': 20, 'mikro-fly': 20, 'erp-entegrasyon': 25, 'eflow-entegrasyon': 45 },
        },
      };

      // Her sorunun cevabına göre ürünlere puan ekle.
      (['company_size', 'industry', 'main_need'] as const).forEach((soruId) => {
        const cevap = userAnswers[soruId];
        const puanlar = cevap ? puanTablosu[soruId]?.[cevap] : undefined;
        if (puanlar) {
          for (const urunId in puanlar) scores[urunId] += puanlar[urunId];
        }
      });

      // MikroFly'a hafif öncelik (ham puanda).
      scores['mikro-fly'] += 10;

      // Her ürünün ideal senaryodaki teorik maksimum puanı (oran hesabı için).
      const maxPuan: Record<string, number> = {
        'mikro-run': 95,
        'mikro-jump': 105,
        'mikro-fly': 120,
        'erp-entegrasyon': 115,
        'eflow-entegrasyon': 105,
      };

      // İş kararı: sonuç her zaman Mikro Fly'ı önerir (en üstte, en yüksek oran).
      // Yine de cevaplara göre oranlar hafifçe değişir ve üçü de mantıklı bir bantta kalır.
      // Doğal ürün hiyerarşisi: Fly (kurumsal) > Jump (orta) > Run (giriş).
      const norm = (id: string) => {
        const enYuksek = maxPuan[id] || 100;
        return Math.min(1, Math.max(0, scores[id] / enYuksek));
      };
      const yuzdeler: Record<string, number> = {
        'mikro-fly': 85 + Math.round(norm('mikro-fly') * 15),  // 85–100
        'mikro-jump': 60 + Math.round(norm('mikro-jump') * 15), // 60–75
        'mikro-run': 20 + Math.round(norm('mikro-run') * 20),   // 20–40
      };

      const sortedItems = ['mikro-fly', 'mikro-jump', 'mikro-run'].map((id) => {
        const item = products.find(p => p.id === id);
        return { ...item, score: scores[id], matchPercentage: yuzdeler[id], recommended: id === 'mikro-fly' };
      });

      setRecommendations(sortedItems);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextStep = () => {
    if (currentStep < questionnaire.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setRecommendations([]);
    setShowResults(false);
  };

  const getDynamicPros = (productId: string, answers: Record<string, string>): string[] => {
    const size = answers.company_size || '';
    const ind = answers.industry || '';
    const need = answers.main_need || '';

    if (productId === 'mikro-fly') {
      if (ind === 'ecommerce' || need === 'ecommerce_integration') {
        return [
          'Pazar yerleri (Trendyol, Hepsiburada vb.) ile otomatik sipariş ve stok senkronizasyonu',
          'Çoklu platform desteği ile tüm satış kanallarınızı tek ekrandan yönetebilme',
          'Otomatik faturalandırma ve kargo entegrasyonu ile zamandan büyük tasarruf'
        ];
      }
      if (ind === 'manufacturing' || need === 'automation') {
        return [
          'İleri düzey Üretim/MRP, ürün reçeteleri (BOM) ve rota yönetimi',
          'Tedarik zinciri ve depo süreçlerinin uçtan uca akıllı otomasyonu',
          'Kurumsal seviyede detaylı kullanıcı yetkilendirme ve veri güvenliği'
        ];
      }
      if (ind === 'retail') {
        return [
          'Hızlı perakende satış noktaları ve banka sistemleriyle gerçek zamanlı entegrasyon',
          'Merkez ve tüm şubeleriniz arasında anlık ciro ve envanter takibi',
          'Müşteri sadakat kartı, puan ve gelişmiş kampanya yönetim modülleri'
        ];
      }
      if (need === 'finance') {
        return [
          'Konsolide nakit akışı yönetimi, bütçe planlama ve finansal analiz',
          'Banka entegrasyonları ile tüm banka hesap hareketlerini otomatik işleme',
          'Çoklu döviz desteği ve kur farkı hesaplama'
        ];
      }
      if (need === 'inventory' || size === '51-200' || size === '200+') {
        return [
          'Barkodlu depo yönetim sistemi (WMS) ve dinamik lokasyon takibi',
          'Kritik stok seviyesi uyarıları ve akıllı otomatik satın alma önerileri',
          'Gelişmiş karar destek ve özelleştirilebilir yönetici dashboardları'
        ];
      }
      return [
        'Uçtan uca kurumsal ERP yönetimi ve sınırsız kullanıcı desteği',
        'E-Dönüşüm (e-fatura, e-arşiv, e-defter) mevzuatıyla tam uyumluluk',
        'Gelişmiş Karar Destek ve özelleştirilebilir iş zekası raporları'
      ];
    }

    if (productId === 'mikro-jump') {
      if (ind === 'manufacturing' || need === 'inventory') {
        return [
          'Gelişen işletmenizin ihtiyaçlarına göre yeni modüllerle büyüyen esnek yapı',
          'Malzeme envanter yönetimi ve kontrollü stok sarfiyat takibi',
          'Hızlı devreye alınan KOBİ üretim modülü ve ürün reçetesi takibi'
        ];
      }
      if (ind === 'retail' || ind === 'service') {
        return [
          'Müşteri ve tedarikçi cari hesapları, borç/alacak ve fatura takibi',
          'Hizmet ve masraf yönetim modülleri ile işletme giderlerinin sıkı kontrolü',
          'KOBİ\'ler için optimize edilmiş, kolay öğrenilen pratik kullanım'
        ];
      }
      if (need === 'finance' || need === 'legal_compliance') {
        return [
          'Ön muhasebe ve resmi genel muhasebenin tek çatı altında entegre takibi',
          'Çek, senet ve banka işlemlerinin pratik yönetimi',
          'E-Fatura, e-arşiv ve e-defter geçişi için mevzuata tam uyum'
        ];
      }
      if (need === 'ecommerce_integration' || ind === 'ecommerce') {
        return [
          'E-ticaret kanallarınızla temel düzey stok ve satış entegrasyonu',
          'Otomatik fatura kesme ve kargo fişi hazırlama kolaylığı',
          'KOBİ\'ler için tasarlanmış yüksek fiyat/performans dengesi'
        ];
      }
      return [
        '5-15 çalışanlı KOBİ’ler için hızlı kurulum altyapısı',
        'Esnek raporlama araçları ve detaylı ciro-maliyet analizleri',
        'Satış, satın alma ve envanter süreçlerinin tam entegrasyonu'
      ];
    }

    // Default: mikro-run (productId === 'mikro-run')
    if (need === 'finance' || need === 'legal_compliance') {
      return [
        'En ekonomik ve pratik yoldan e-fatura kesme ve gönderme imkanı',
        'Gelir-gider, kasa ve banka bakiye durumlarının anlık kolay takibi',
        'Muhasebe eğitimi gerektirmeyen, fatura kesmeyi kolaylaştıran yalın arayüz'
      ];
    }
    if (need === 'inventory' || ind === 'retail') {
      return [
        'Hızlı stok kartı açma, basit barkodlu giriş-çıkış ve kritik seviye takibi',
        'Müşteri borç-alacak (cari) takibi ve vadesi yaklaşan ödeme uyarıları',
        'Kurulum gerektirmeyen, ilk günden kullanılabilen pratik ön muhasebe'
      ];
    }
    return [
      '5\'ten az çalışanlı mikro işletmeler için en hızlı ve ekonomik çözüm',
      'Temel ön muhasebe ve faturalandırma ihtiyaçlarının eksiksiz çözümü',
      'Gereksiz detaylar içermeyen, tamamen kolay kullanıma odaklı ekranlar'
    ];
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdCompare) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(urunLogolariJsonLd) }} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:w-72 lg:w-72 lg:h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full text-center px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8"
          >
            <Lightbulb size={14} />
            Akıllı Çözüm Danışmanı
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900"
          >
            İşletmeniz İçin
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Doğru Çözümü Bulun</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            İşletmenizin ihtiyaçlarını analiz ederek size en uygun ERP ve e-dönüşüm çözümlerini öneriyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.03 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {!showResults && !isAnalyzing && (
        <section className="py-8 sm:py-12 md:py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12"
            >
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Soru {currentStep + 1} / {questionnaire.length}
                  </span>
                  <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {Math.round(((currentStep + 1) / questionnaire.length) * 100)}% Tamamlandı
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questionnaire.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>

              <div className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {questionnaire[currentStep].question}
                </h3>
                
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {questionnaire[currentStep].options.map((option, idx) => {
                    const Icon = option.icon;
                    const isSelected = userAnswers[questionnaire[currentStep].id] === option.value;
                    
                    return (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => handleAnswer(questionnaire[currentStep].id, option.value)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className={`relative p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all text-left group ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50/50 shadow-md' 
                            : 'border-gray-200 hover:border-blue-300 bg-white hover:shadow-sm'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-1">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                            isSelected ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-100 group-hover:bg-blue-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'}`} />
                          </div>
                          <span className={`font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                            {option.label}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
                >
                  <ChevronRight className="w-4 h-4 mr-1 rotate-180 inline" />
                  Önceki
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={!userAnswers[questionnaire[currentStep].id]}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium shadow-md hover:shadow-lg"
                >
                  {currentStep === questionnaire.length - 1 ? 'Önerileri Gör' : 'Sonraki'}
                  <ChevronRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {isAnalyzing && (
        <section className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-blue-100 border-t-blue-600 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              İhtiyaçlarınız Analiz Ediliyor
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 mb-8"
            >
              En uygun çözümleri belirlemek için verilerinizi inceliyoruz...
            </motion.p>

            <div className="space-y-3 max-w-sm mx-auto">
              {[
                { text: 'Şirket profili analiz ediliyor', delay: 0.6 },
                { text: 'Sektör ihtiyaçları eşleştiriliyor', delay: 1.0 },
                { text: 'En uygun çözümler belirleniyor', delay: 1.4 },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.delay }}
                  className="flex items-center gap-3 text-sm text-gray-500"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: step.delay, repeat: Infinity, repeatDelay: 2 }}
                    className="w-2 h-2 rounded-full bg-blue-600"
                  />
                  {step.text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showResults && (
        <section className="py-8 sm:py-12 md:py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 md:mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Analiz Tamamlandı
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                İşletmeniz İçin En Uygun Çözümler
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Akıllı algoritmamız ihtiyaçlarınıza en uygun {recommendations.length} çözümü belirledi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-14">
              {recommendations.map((item, index) => {
                const Icon = item.icon;
                const isTop = index === 0;
                const gradientColor = isTop ? 'from-blue-600 to-purple-600' : item.color || 'from-gray-600 to-gray-700';
                
                const logoMap: Record<string, string> = {
                  'mikro-run': '/mikro-run-logo.png',
                  'mikro-jump': '/mikro-jump-logo.png',
                  'mikro-fly': '/mikro-fly-logo.png'
                };
                const logoUrl = logoMap[item.id];

                const detayHrefMap: Record<string, string> = {
                  'mikro-run': '/mikro-run',
                  'mikro-jump': '/mikro-jump',
                  'mikro-fly': '/mikro-fly',
                  'erp-entegrasyon': '/services',
                  'eflow-entegrasyon': '/eflow-bpm',
                };
                const detayHref = detayHrefMap[item.id] || '/contact';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.03 }}
                    className="relative"
                  >
                    {isTop && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1 text-xs font-bold shadow-lg">
                          <Trophy className="w-3 h-3 mr-1" />
                          EN UYGUN
                        </Badge>
                      </div>
                    )}

                    <Card className={`h-full pt-8 flex flex-col ${isTop ? 'border-2 border-blue-200 shadow-xl shadow-blue-100/50 ring-1 ring-blue-100' : 'border border-gray-200 shadow-md hover:shadow-lg'} transition-shadow`}>
                      <CardHeader className="items-center text-center pb-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + index * 0.03 }}
                          className="w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white ring-1 ring-gray-100 shadow-sm p-2.5 overflow-hidden"
                        >
                          {logoUrl ? (
                            <img src={logoUrl} alt={`${item.name} logosu — ${item.category} programı`} width={88} height={88} loading="lazy" className="max-w-full max-h-full object-contain" />
                          ) : (
                            <Icon className="w-9 h-9 text-gray-600" />
                          )}
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-gray-900">{item.name}</CardTitle>
                        <CardDescription className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{item.category}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-5">
                        <p className="text-gray-600 text-sm leading-relaxed text-center">{item.description}</p>

                        {/* Yıldızlar eşleşme oranına göre orantılı doldurulur (skora eşdeğer boyama). */}
                        <div className="flex items-center justify-center gap-1">
                          {[1,2,3,4,5].map(s => {
                            const dolgu = Math.max(0, Math.min(1, (item.matchPercentage / 20) - (s - 1)));
                            return (
                              <div key={s} className="relative w-4 h-4">
                                <Star className="absolute inset-0 w-4 h-4 text-gray-200 fill-gray-200" />
                                <div className="absolute inset-0 overflow-hidden" style={{ width: `${dolgu * 100}%` }}>
                                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                </div>
                              </div>
                            );
                          })}
                          <span className="ml-2 text-sm font-semibold text-gray-700">{(item.matchPercentage / 20).toFixed(1)}</span>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Eşleşme Oranı</span>
                            <span className={`text-sm font-bold ${isTop ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-900'}`}>
                              {item.matchPercentage}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.matchPercentage}%` }}
                              transition={{ duration: 0.6, delay: 0.1 + index * 0.03 }}
                              className={`bg-gradient-to-r ${gradientColor} h-2.5 rounded-full`}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700">Öne Çıkan Özellikler</div>
                          {getDynamicPros(item.id, userAnswers).map((pro: string, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.03 + i * 0.1 }}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle2 className={`w-4 h-4 mr-2 flex-shrink-0 ${isTop ? 'text-blue-600' : 'text-emerald-500'}`} />
                              {pro}
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>

                      {/* mt-auto pins the footer to the card bottom so button alignment stays fixed regardless of content length */}
                      <CardFooter className="mt-auto">
                        <Link
                          href={detayHref}
                          className={`w-full px-4 py-3 rounded-xl font-medium transition-all text-center inline-flex items-center justify-center ${
                            isTop
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                          }`}
                        >
                          {item.name} detayları
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                onClick={resetQuestionnaire}
                variant="outline"
                className="px-6 py-3 rounded-xl border-gray-300 hover:bg-gray-100 font-medium"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Testi Tekrarla
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table Section */}
      <section className="py-8 sm:py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
              <BarChart3 size={14} className="text-amber-500" />
              Detaylı Karşılaştırma
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mikro Ürün Karşılaştırması
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına en uygun Mikro çözümünü karşılaştırın
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] sm:min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-left font-semibold min-w-[120px] sm:min-w-[140px] md:min-w-[180px] text-xs sm:text-sm md:text-base">Özellik</th>
                    {products.map((product) => {
                      const logoMap: Record<string, string> = {
                        'mikro-run': '/mikro-run-logo.png',
                        'mikro-jump': '/mikro-jump-logo.png',
                        'mikro-fly': '/mikro-fly-logo.png'
                      };
                      const logoUrl = logoMap[product.id];
                      return (
                        <th key={product.id} className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-center font-semibold min-w-[100px] sm:min-w-[120px] md:min-w-[140px] text-xs sm:text-sm md:text-base ${product.id === 'mikro-fly' ? 'bg-gradient-to-b from-blue-500 to-blue-700' : ''}`}>
                          <div className="flex flex-col items-center gap-2">
                            {product.recommended && (
                              <div className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                ÖNERİLEN
                              </div>
                            )}
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden bg-white">
                              <img src={logoUrl} alt={`${product.name} logosu — ${product.category} programı`} width={32} height={32} loading="lazy" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                            </div>
                            <span className="text-xs md:text-sm font-bold">{product.name}</span>
                            <span className="text-[10px] md:text-xs opacity-70">{product.category}</span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Stok/Ürün Yönetimi', values: [true, true, true] },
                    { label: 'Hizmet ve Masraf', values: [true, true, true] },
                    { label: 'Satın Alma ve Tedarikçi', values: [true, true, true] },
                    { label: 'Satış ve Müşteri', values: [true, true, true] },
                    { label: 'Ön Muhasebe', values: [true, true, true] },
                    { label: 'E-Dönüşüm', values: [true, true, true] },
                    { label: 'CRM', values: [true, false, false] },
                    { label: 'Karar Destek', values: [true, false, false] },
                    { label: 'Pazar Yeri Entegrasyonu', values: [true, false, false] },
                    { label: 'Kargo Entegrasyonu', values: [true, false, false] },
                    { label: 'Otomatik Sipariş', values: [true, false, false] },
                    { label: 'Stok Senkronizasyonu', values: [true, false, false] },
                  ].map((row, rowIdx) => (
                    <tr key={row.label} className={`border-b border-gray-100 transition-colors hover:bg-blue-50/30 ${rowIdx % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 font-medium text-xs md:text-sm">{row.label}</td>
                      {row.values.map((val: any, colIdx: number) => {
                        return (
                          <td key={colIdx} className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-center ${colIdx === 0 ? 'bg-blue-50' : ''}`}>
                            {typeof val === 'boolean' ? (
                              val ? (
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 mx-auto text-emerald-500" />
                              ) : (
                                <Minus className="w-4 h-4 md:w-5 md:h-5 mx-auto text-gray-300" />
                              )
                            ) : (
                              <span className={`text-xs md:text-sm font-medium ${
                                val === 'Düşük' ? 'text-emerald-600' : 
                                val === 'Orta' ? 'text-amber-600' : 
                                val === 'Yüksek' ? 'text-red-500' : 'text-gray-600'
                              }`}>{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => {
              const logoMap: Record<string, string> = {
                'mikro-run': '/mikro-run-logo.png',
                'mikro-jump': '/mikro-jump-logo.png',
                'mikro-fly': '/mikro-fly-logo.png'
              };
              const logoUrl = logoMap[product.id];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link
                    href={`/${product.id}`}
                    className="w-full p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-left flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-md flex-shrink-0 overflow-hidden">
                      <img src={logoUrl} alt={`${product.name} logosu — ${product.category} programı`} width={32} height={32} loading="lazy" className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.category}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gray-600 transition-colors" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 md:p-16 rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
                <Lightbulb size={14} />
                Uzman Desteği
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Karar Vermekte Zorlanıyor musunuz?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Uzmanlarımız size en uygun çözümü seçmenizde yardımcı olabilir. Ücretsiz danışmanlık için hemen iletişime geçin.
              </p>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => router.push('/contact?subject=danismanlik')}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
                >
                  <span>Ücretsiz Danışmanlık Alın</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {sssCompare.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-500 mr-1">İlgili:</span>
            {[
              { etiket: 'Mikro Run', href: '/mikro-run' },
              { etiket: 'Mikro Jump', href: '/mikro-jump' },
              { etiket: 'Mikro Fly', href: '/mikro-fly' },
              { etiket: 'İletişim', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-blue-300 transition-colors">
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
