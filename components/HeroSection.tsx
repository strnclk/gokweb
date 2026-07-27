'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Boxes, FileText, Users, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';

interface HeroSectionProps {
  district?: string;
}

export default function HeroSection({ district }: HeroSectionProps) {
  const router = useRouter();

  // Türkçe dilbilgisine göre doğru bağlaç seçimi
  const getLocativeSuffix = (word: string) => {
    const districtSuffixes: Record<string, string> = {
      'Adalar': 'da',
      'Arnavutköy': 'de',
      'Avcılar': 'da',
      'Bağcılar': 'da',
      'Bahçelievler': 'de',
      'Bakırköy': 'de',
      'Başakşehir': 'de',
      'Bayrampaşa': 'da',
      'Beşiktaş': 'ta',
      'Beyoğlu': 'nda',
      'Büyükçekmece': 'de',
      'Çatalca': 'da',
      'Çekmeköy': 'de',
      'Esenler': 'de',
      'Esenyurt': 'ta',
      'Eyüpsultan': 'da',
      'Fatih': 'te',
      'Gaziosmanpaşa': 'da',
      'Güngören': 'de',
      'Kağıthane': 'de',
      'Kartal': 'da',
      'Küçükçekmece': 'de',
      'Maltepe': 'de',
      'Pendik': 'te',
      'Sancaktepe': 'de',
      'Sarıyer': 'de',
      'Şile': 'de',
      'Silivri': 'de',
      'Sultanbeyli': 'de',
      'Sultangazi': 'de',
      'Şişli': 'de',
      'Tuzla': 'da',
      'Zeytinburnu': 'nda',
      'Ataşehir': 'de',
      'Beylikdüzü': 'nde',
      'Kadıköy': 'de',
      'Üsküdar': 'da',
      'Ümraniye': 'de',
      'Beykoz': 'da'
    };

    return districtSuffixes[word] || 'de';
  };

  // Kesme işareti eklemesi gereken kelimeler
  const needsApostrophe = (word: string) => {
    const apostropheWords = [
      'Adalar', 'Arnavutköy', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy',
      'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beyoğlu', 'Büyükçekmece', 'Çatalca',
      'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa',
      'Güngören', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik',
      'Sancaktepe', 'Sarıyer', 'Şile', 'Silivri', 'Sultanbeyli', 'Sultangazi',
      'Şişli', 'Tuzla', 'Zeytinburnu', 'Ataşehir', 'Beylikdüzü', 'Kadıköy',
      'Üsküdar', 'Ümraniye', 'Beykoz'
    ];
    return apostropheWords.includes(word);
  };

  const suffix = district ? getLocativeSuffix(district) : '';
  const districtName = district ? `${district}${needsApostrophe(district) ? '\'' : ''}${suffix}` : '';

  // İlçe bazlı unique açıklamalar
  const districtDescriptions: Record<string, string> = {
    'Adalar': 'Adalar\'da işletmenizi dijital dünyaya taşıyın. Gökkuşağı Yazılım olarak Adalar\'ın işletmelerine Mikro ERP, CRM ve e-dönüşüm çözümleri sunuyoruz. Denizcilik, turizm ve ticaret sektörleri için özel çözümler.',
    'Arnavutköy': 'Arnavutköy\'de sanayi ve ticaret işletmelerine özel Mikro çözümleri. Organize sanayi bölgesindeki firmalar için ERP, stok yönetimi ve e-fatura entegrasyon hizmetleri.',
    'Avcılar': 'Avcılar\'da lojistik, üretim ve ticaret firmalarına Mikro ERP çözümleri. Deniz ticareti, liman ve sanayi odaklı işletmeler için özel yazılım ve entegrasyon hizmetleri.',
    'Bağcılar': 'Bağcılar\'da KOBİ\'ler için Mikro ERP çözümleri. Tekstil, konfeksiyon ve küçük işletmelere özel stok yönetimi, muhasebe ve e-dönüşüm hizmetleri.',
    'Bahçelievler': 'Bahçelievler\'de perakende ve toptan ticaret firmalarına Mikro çözümler. Mağaza yönetimi, satış takibi ve e-fatura entegrasyonu ile işinizi büyütün.',
    'Bakırköy': 'Bakırköy\'de kurumsal firmalara Mikro ERP çözümleri. Merkez ofis, şubeler ve çoklu depo yönetimi için entegre sistemler.',
    'Başakşehir': 'Başakşehir\'de yeni kurulan işletmelere Mikro ERP çözümleri. Sanayi ve ticaret bölgelerindeki firmalar için modern iş yönetim sistemleri.',
    'Bayrampaşa': 'Bayrampaşa\'da ticaret ve hizmet sektörüne Mikro çözümler. Otomotiv, tekstil ve hizmet sektörleri için özel ERP entegrasyonları.',
    'Beşiktaş': 'Beşiktaş\'ta kurumsal ve profesyonel hizmetlere Mikro ERP çözümleri. Hukuk, finans ve danışmanlık firmaları için özel yazılım çözümleri.',
    'Beyoğlu': 'Beyoğlu\'nda turizm, perakende ve hizmet sektörüne Mikro çözümler. Oteller, restoranlar ve mağazalar için entegre iş yönetim sistemleri.',
    'Büyükçekmece': 'Büyükçekmece\'de sanayi ve lojistik firmalarına Mikro ERP çözümleri. Organize sanayi ve liman bölgelerindeki işletmeler için özel entegrasyonlar.',
    'Çatalca': 'Çatalca\'da tarım ve hayvancılık işletmelerine Mikro çözümler. Tarımsal üretim, gıda sanayi ve lojistik için özel ERP sistemleri.',
    'Çekmeköy': 'Çekmeköy\'de konut ve inşaat sektörüne Mikro çözümler. İnşaat firmaları, emlak ve müteahhitlik için özel proje yönetim sistemleri.',
    'Esenler': 'Esenler\'de sanayi ve ticaret firmalarına Mikro ERP çözümleri. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Esenyurt': 'Esenyurt\'ta üretim ve ticaret firmalarına Mikro çözümler. Mobilya, tekstil ve sanayi işletmeleri için entegre ERP sistemleri.',
    'Eyüpsultan': 'Eyüpsultan\'da sanayi ve ticaret firmalarına Mikro ERP çözümleri. Organize sanayi bölgesindeki işletmeler için özel entegrasyon hizmetleri.',
    'Fatih': 'Fatih\'te turizm ve ticaret sektörüne Mikro çözümler. Oteller, restoranlar ve tarihi yarımada hizmet veren işletmeler için özel sistemler.',
    'Gaziosmanpaşa': 'Gaziosmanpaşa\'da inşaat ve ticaret firmalarına Mikro çözümler. İnşaat projeleri, emlak ve konut sektörü için özel ERP sistemleri.',
    'Güngören': 'Güngören\'de tekstil ve ticaret firmalarına Mikro çözümler. Hazır giyim, toptan satış ve lojistik için entegre iş yönetim sistemleri.',
    'Kağıthane': 'Kağıthane\'de sanayi ve lojistik firmalarına Mikro ERP çözümleri. Organize sanayi bölgesindeki işletmeler için özel entegrasyon hizmetleri.',
    'Kartal': 'Kartal\'da sanayi ve ticaret firmalarına Mikro çözümler. Liman, lojistik ve deniz ticareti için özel ERP sistemleri.',
    'Küçükçekmece': 'Küçükçekmece\'de sanayi ve ticaret firmalarına Mikro çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Maltepe': 'Maltepe\'de perakende ve hizmet sektörüne Mikro çözümler. Alışveriş merkezleri, mağazalar ve hizmet firmaları için entegre sistemler.',
    'Pendik': 'Pendik\'te sanayi ve lojistik firmalarına Mikro ERP çözümleri. Organize sanayi, liman ve deniz ticareti için özel entegrasyonlar.',
    'Sancaktepe': 'Sancaktepe\'de inşaat ve ticaret firmalarına Mikro çözümler. Konut projeleri, emlak ve inşaat sektörü için özel ERP sistemleri.',
    'Sarıyer': 'Sarıyer\'de kurumsal ve lüks hizmetlere Mikro ERP çözümleri. Marina, turizm ve üst segment hizmet sektörleri için özel sistemler.',
    'Şile': 'Şile\'de turizm ve tarım sektörüne Mikro çözümler. Turistik tesisler, tarımsal üretim ve yazlık işletmeler için özel ERP sistemleri.',
    'Silivri': 'Silivri\'de tarım ve sanayi firmalarına Mikro çözümler. Tarımsal üretim, gıda sanayi ve organize sanayi için entegre sistemler.',
    'Sultanbeyli': 'Sultanbeyli\'de inşaat ve ticaret firmalarına Mikro çözümler. Konut projeleri, emlak ve ticaret sektörü için özel ERP sistemleri.',
    'Sultangazi': 'Sultangazi\'de sanayi firmalarına Mikro ERP çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Şişli': 'Şişli\'de kurumsal ve finans sektörüne Mikro ERP çözümleri. Merkez ofisler, finans ve danışmanlık firmaları için özel sistemler.',
    'Tuzla': 'Tuzla\'da sanayi ve deniz ticaretine Mikro ERP çözümler. Organize sanayi, tersane ve liman işletmeleri için özel entegrasyonlar.',
    'Zeytinburnu': 'Zeytinburnu\'nda sanayi ve ticaret firmalarına Mikro çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Ataşehir': 'Ataşehir\'de kurumsal firmalara Mikro ERP çözümleri. Finans merkezindeki ofisler, teknoloji firmaları ve kurumsal işletmeler için entegre sistemler.',
    'Beylikdüzü': 'Beylikdüzü\'nde perakende ve ticaret firmalarına Mikro çözümler. AVM\'ler, mağazalar ve lojistik merkezleri için özel ERP sistemleri.',
    'Kadıköy': 'Kadıköy\'de turizm ve ticaret sektörüne Mikro çözümler. Restoranlar, kafeler, mağazalar ve hizmet sektörü için entegre iş yönetim sistemleri.',
    'Üsküdar': 'Üsküdar\'da turizm ve ticaret sektörüne Mikro çözümler. Boğaz turizmi, restoranlar ve hizmet sektörü için özel ERP sistemleri.',
    'Ümraniye': 'Ümraniye\'de sanayi firmalarına Mikro ERP çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Beykoz': 'Beykoz\'da doğa turizmi ve ticaret firmalarına Mikro ERP çözümleri. Boğaz kıyısındaki işletmeler, restoranlar ve KOBİ\'ler için özel yazılım ve entegrasyon hizmetleri.'
  };

  const districtServiceDescriptions: Record<string, string> = {
    'Adalar': 'Adalar\'da turizm ve denizcilik sektörüne özel Mikro ERP, CRM ve e-dönüşüm çözümleri.',
    'Arnavutköy': 'Arnavutköy\'de sanayi ve ticaret firmalarına Mikro ERP ve stok yönetimi çözümleri.',
    'Avcılar': 'Avcılar\'da lojistik ve sanayi firmalarına Mikro ERP ve e-fatura çözümleri.',
    'Bağcılar': 'Bağcılar\'da KOBİ\'lere Mikro ERP ve muhasebe çözümleri.',
    'Bahçelievler': 'Bahçelievler\'de perakende ve toptan ticarete Mikro çözümler.',
    'Bakırköy': 'Bakırköy\'de kurumsal firmalara Mikro ERP ve çoklu şube yönetimi.',
    'Başakşehir': 'Başakşehir\'de yeni işletmelere Mikro ERP ve iş yönetim çözümleri.',
    'Bayrampaşa': 'Bayrampaşa\'da ticaret ve hizmet sektörüne Mikro çözümler.',
    'Beşiktaş': 'Beşiktaş\'ta profesyonel hizmetlere Mikro ERP ve özel yazılım.',
    'Beyoğlu': 'Beyoğlu\'nda turizm ve perakendeye Mikro ERP çözümleri.',
    'Büyükçekmece': 'Büyükçekmece\'de sanayi ve lojistiğe Mikro ERP çözümleri.',
    'Çatalca': 'Çatalca\'da tarım ve gıda sanayine Mikro çözümler.',
    'Çekmeköy': 'Çekmeköy\'de inşaat ve emlak sektörüne Mikro ERP.',
    'Esenler': 'Esenler\'de sanayi firmalarına Mikro ERP ve üretim yönetimi.',
    'Esenyurt': 'Esenyurt\'ta üretim firmalarına Mikro ERP ve stok yönetimi.',
    'Eyüpsultan': 'Eyüpsultan\'da sanayi ve ticarete Mikro ERP çözümleri.',
    'Fatih': 'Fatih\'te turizm ve hizmet sektörüne Mikro ERP.',
    'Gaziosmanpaşa': 'Gaziosmanpaşa\'da inşaat ve emlağa Mikro ERP.',
    'Güngören': 'Güngören\'de tekstil ve ticarete Mikro çözümler.',
    'Kağıthane': 'Kağıthane\'de sanayi ve lojistiğe Mikro ERP.',
    'Kartal': 'Kartal\'da sanayi ve deniz ticaretine Mikro ERP.',
    'Küçükçekmece': 'Küçükçekmece\'de sanayi firmalarına Mikro ERP.',
    'Maltepe': 'Maltepe\'de perakende ve hizmet sektörüne Mikro çözümler.',
    'Pendik': 'Pendik\'te sanayi ve lojistiğe Mikro ERP.',
    'Sancaktepe': 'Sancaktepe\'de inşaat ve emlağa Mikro ERP.',
    'Sarıyer': 'Sarıyer\'de kurumsal ve lüks hizmetlere Mikro ERP.',
    'Şile': 'Şile\'de turizm ve tarıma Mikro çözümler.',
    'Silivri': 'Silivri\'de tarım ve sanayiye Mikro ERP.',
    'Sultanbeyli': 'Sultanbeyli\'de inşaat ve ticarete Mikro ERP.',
    'Sultangazi': 'Sultangazi\'de sanayi firmalarına Mikro ERP.',
    'Şişli': 'Şişli\'de kurumsal ve finans sektörüne Mikro ERP.',
    'Tuzla': 'Tuzla\'da sanayi ve deniz ticaretine Mikro ERP.',
    'Zeytinburnu': 'Zeytinburnu\'nda sanayi firmalarına Mikro ERP.',
    'Ataşehir': 'Ataşehir\'de kurumsal firmalara Mikro ERP ve finans yönetimi.',
    'Beylikdüzü': 'Beylikdüzü\'nde perakende ve lojistiğe Mikro ERP.',
    'Kadıköy': 'Kadıköy\'de turizm ve ticarete Mikro ERP.',
    'Üsküdar': 'Üsküdar\'da turizm ve hizmet sektörüne Mikro ERP.',
    'Ümraniye': 'Ümraniye\'de sanayi firmalarına Mikro ERP.',
    'Beykoz': 'Beykoz\'da turizm ve ticaret firmalarına Mikro ERP.'
  };

  const districtDescription = district ? districtDescriptions[district] : '';
  const districtServiceDescription = district ? districtServiceDescriptions[district] : '';

  const handleTeklifAlClick = () => {
    router.push('/contact');
  };

  const highlights = [
    { icon: Zap, text: 'Hızlı Entegrasyon' },
    { icon: Shield, text: 'Güvenli Altyapı' },
    { icon: TrendingUp, text: 'Verimlilik Artışı' }
  ];

  const words = ['Dijital Geleceği', 'ERP Çözümü', 'E-Dönüşümü', 'Büyüme Yolculuğu', 'Rekabet Gücünü'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50/10 pt-24 md:pt-28 pb-10 md:pb-14 bg-[radial-gradient(rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:24px_24px]">
      {/* Decorative animated blobs (mor/mavi toz bulutu) — yalnızca ana sayfada;
          ilçe sayfalarında kaldırıldı (district set olduğunda gizli). */}
      {!district && (
        <>
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-400/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
        </>
      )}

      {/* Breadcrumb — sayfa tepesinden sabit offset (navbar altı); dikey ortalanan
          içerikten bağımsız, tüm sayfalarda aynı konum. Bkz. SiteBreadcrumb. */}
      {district && (
        <div className="absolute left-0 top-[100px] w-full z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6">
            <div className="pointer-events-auto inline-block">
              <Breadcrumb
                items={[{ label: 'Anasayfa', href: '/' }, { label: `${district} Mikro Bayi` }]}
                accentClass="hover:text-blue-600"
                className="justify-start"
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className={district ? "flex justify-center" : "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"}>

          {/* Left Side: Content floating directly on background without card */}
          <div className={district ? "w-full max-w-3xl flex flex-col items-center text-center" : "lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"}>
            <div
              className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-blue-50/85 border border-blue-200/50 rounded-full text-blue-700 text-sm font-semibold mb-6 shadow-sm"
              style={{ animationDelay: '0s' }}
            >
              <Zap size={14} className="text-amber-500 animate-bounce" />
              <span>Resmi Mikro İş Ortağı</span>
            </div>

            <h1
              className="animate-fade-up text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.2]"
              style={{ animationDelay: '0.1s' }}
            >
              {districtName ? `${districtName} İşletmenizin` : 'İşletmenizin'}
              <br />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#EC4899,#A855F7,#6366F1,#3B82F6,#06B6D4)] text-[0.9em] font-semibold pb-1 inline-block whitespace-nowrap">
                {displayText}
                <span className="inline-block w-[3px] h-[0.8em] bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-pulse align-middle ml-1 shadow-[0_0_8px_2px_rgba(168,85,247,0.5)]" />
              </span>
            </h1>

            <p
              className="animate-fade-up text-base md:text-lg text-slate-700 mb-8 max-w-xl leading-relaxed font-semibold"
              style={{ animationDelay: '0.2s' }}
            >
              {districtDescription || 'Mikro ERP ve E-Dönüşüm çözümleriyle işletmenizi dijital çağa hazırlayın. 20+ yıllık deneyimle yanınızdayız.'}
            </p>

            <div
              className={`animate-fade-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 ${district ? 'justify-center' : 'justify-center lg:justify-start'}`}
              style={{ animationDelay: '0.15s' }}
            >
              <button
                onClick={handleTeklifAlClick}
                aria-label="Teklif Al - İletişim sayfasına gidin"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-[0_6px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 font-bold text-base"
              >
                Teklif Al
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              className={`animate-fade-up flex flex-col sm:flex-row flex-wrap gap-3 w-full ${district ? 'justify-center' : 'justify-center lg:justify-start'}`}
              style={{ animationDelay: '0.15s' }}
            >
              {districtServiceDescription ? (
                <div className={`flex items-center gap-2.5 text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/50 px-4 py-2.5 rounded-xl shadow-sm w-full justify-center ${district ? 'max-w-2xl' : 'lg:w-auto lg:justify-start'}`}>
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span>{districtServiceDescription}</span>
                </div>
              ) : (
                highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/50 px-4 py-2.5 rounded-xl shadow-sm">
                      <Icon size={16} className="text-blue-600 shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })
              )}
            </div>

            {/* İlçe sayfaları için istatistik şeridi */}
            {district && (
              <div
                className="animate-fade-up flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10 pt-8 border-t border-slate-200/70 w-full max-w-2xl"
                style={{ animationDelay: '0.15s' }}
              >
                {[
                  { value: '20+', label: 'Yıl Deneyim' },
                  { value: '500+', label: 'Mutlu Müşteri' },
                  { value: 'Uzman', label: 'Teknik Destek' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#6366F1,#A855F7,#EC4899)]">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-slate-500 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Centered Dashboard inside Dark Purple/Navy Container, framed by Rainbow Light Edge Beam */}
          {!district && (
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[440px] p-[2.5px] bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] via-[#3A0CA3] via-[#4361EE] via-[#4CC9F0] to-[#7B2CBF] rounded-[34px] shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-visible">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] rounded-[32px] p-6 relative overflow-visible flex items-center justify-center">
                {/* Decorative grid in dark background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* --- FLOATING DATA NODES --- */}
                {/* Node 1: Right Top (Main) - Purple Neon Theme */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 6, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -right-12 top-10 w-24 h-16 bg-white/[0.04] backdrop-blur-[8px] border border-purple-500/30 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.2)] z-20 overflow-hidden flex flex-col justify-around p-3 pointer-events-none"
                >
                  <div className="w-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80" />
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping shrink-0" />
                    <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                    <span className="w-full h-[1.5px] bg-purple-500/20 rounded" />
                  </div>
                  <div className="w-3/4 h-[1.5px] bg-purple-500/30 rounded" />
                </motion.div>

                {/* Node 2: Right Top (Secondary) - Blue Neon Theme */}
                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    x: [0, -4, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1 
                  }}
                  className="absolute -right-6 top-32 w-16 h-12 bg-white/[0.04] backdrop-blur-[6px] border border-blue-500/30 rounded-lg shadow-[0_0_12px_rgba(59,130,246,0.15)] z-20 overflow-hidden flex flex-col justify-center gap-2 p-2 pointer-events-none"
                >
                  <div className="w-3/4 h-[2px] bg-blue-500/40 rounded" />
                  <div className="w-1/2 h-[1.5px] bg-blue-500/20 rounded" />
                </motion.div>

                {/* Node 3: Left Bottom - Cyan/Blue Neon Theme */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5 
                  }}
                  className="absolute -left-12 bottom-12 w-20 h-14 bg-white/[0.04] backdrop-blur-[8px] border border-cyan-500/30 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.2)] z-20 overflow-hidden flex flex-col justify-around p-2.5 pointer-events-none"
                >
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60" />
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60" />
                  <div className="w-2/3 h-[1.5px] bg-cyan-500/30 rounded" />
                </motion.div>

                {/* Dashboard Panel aligned perfectly in center, mounted with a sharp neon purple border - PREMIUM SOFT GRADIENT GLASS */}
                <div
                  className="animate-fade-in-side w-full h-full bg-gradient-to-br from-white via-slate-50 to-blue-50/90 border border-purple-400 rounded-2xl p-5 flex flex-col justify-between relative z-10 text-slate-800 shadow-[0_15px_40px_rgba(168,85,247,0.25)]"
                  style={{ '--fade-x': '0', '--fade-scale': '0.95', animationDelay: '0.15s' } as React.CSSProperties}
                >
                  {/* Top bar: brand + window dots */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF007F] via-[#7B2CBF] to-[#4361EE] flex items-center justify-center shadow-md shadow-purple-500/20">
                        <span className="text-white text-sm font-black">G</span>
                      </div>
                      <div className="leading-tight">
                        <div className="text-[12px] font-bold text-slate-800">Gökkuşağı Yazılım</div>
                        <div className="text-[9px] text-slate-400 font-medium">Resmi Mikro İş Ortağı</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* Hero: unified platform statement */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-4 mb-3 shrink-0 shadow-lg shadow-indigo-500/20">
                    <div className="absolute -right-6 -top-8 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -left-4 -bottom-6 w-24 h-24 bg-fuchsia-400/20 rounded-full blur-2xl pointer-events-none" />
                    <Boxes className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20 text-white/10 pointer-events-none" strokeWidth={1.5} />
                    <div className="relative">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-[8px] font-semibold text-white uppercase tracking-wider mb-2">
                        <Sparkles className="w-2.5 h-2.5" />
                        Tek Platform
                      </div>
                      <div className="text-[15px] font-bold text-white leading-snug">
                        Mikro ERP ile<br />Dijital Dönüşüm
                      </div>
                      <div className="text-[9px] text-white/70 font-medium mt-1.5">20+ yıl deneyim · 500+ mutlu müşteri</div>
                    </div>
                  </div>

                  {/* Module list: airy, gradient icon badges, divider separated */}
                  <div className="flex-1 flex flex-col divide-y divide-slate-100">
                    <div className="flex-1 flex items-center gap-3 py-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30">
                        <Boxes className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 leading-tight">
                        <div className="text-[11px] font-bold text-slate-800">ERP · Finans &amp; Üretim</div>
                        <div className="text-[9px] text-slate-400">Run · Jump · Fly</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </div>
                    <div className="flex-1 flex items-center gap-3 py-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shrink-0 shadow-sm shadow-rose-500/30">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 leading-tight">
                        <div className="text-[11px] font-bold text-slate-800">CRM · Müşteri &amp; Satış</div>
                        <div className="text-[9px] text-slate-400">Satış ve destek yönetimi</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </div>
                    <div className="flex-1 flex items-center gap-3 py-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/30">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 leading-tight">
                        <div className="text-[11px] font-bold text-slate-800">E-Dönüşüm</div>
                        <div className="text-[9px] text-slate-400">e-Fatura · e-Defter · e-Arşiv</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </div>
                  </div>

                  {/* Footer: modern pill tags */}
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                    {['Stok', 'B2B', 'Bulut', 'Destek'].map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[9px] font-semibold text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating badges within container (fully visible, positioned inside grid margins) */}
                <div className="hidden xl:block absolute top-2 left-2 bg-slate-900 border border-slate-800 shadow-xl rounded-xl px-3 py-1.5 text-white z-20 hover:-translate-y-0.5 transition-transform pointer-events-auto">
                  <div className="flex items-center gap-2 text-[10px] font-semibold">
                    <CheckCircle size={12} className="text-emerald-400 animate-pulse" />
                    Mikro Entegrasyon
                  </div>
                </div>

                <div className="hidden xl:block absolute bottom-2 right-2 bg-slate-900 border border-slate-800 shadow-xl rounded-xl px-3 py-1.5 text-white z-20 hover:translate-y-0.5 transition-transform pointer-events-auto">
                  <div className="flex items-center gap-2 text-[10px] font-semibold">
                    <Zap size={12} className="text-amber-400 animate-bounce" />
                    Uzman Teknik Destek
                  </div>
                </div>

              </div>
            </div>
          </div>
          )}

        </div>

        {/* Partners/Logos Section at the bottom */}
        <div
          className="animate-fade-up hidden sm:block mt-16 w-full"
          style={{ animationDelay: '0.15s' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-md">
            <Link href="/vertical-solutions" aria-label="Mikro Dikey Çözümler sayfasına git" className="transition-all hover:scale-105 hover:opacity-100 opacity-80 duration-300">
              <Image
                src="/yetkili.png"
                alt="Gökkuşağı Yazılım - Resmi Mikro Yetkili Bayi"
                width={90}
                height={90}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </Link>
            <Link href="/mikro-run" aria-label="Mikro Run sayfasına git" className="transition-all hover:scale-105 hover:opacity-100 opacity-80 duration-300">
              <Image
                src="/mikro-run-logo.png"
                alt="Mikro Run logosu — Esnaf ve mikro işletme ERP programı"
                width={90}
                height={90}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </Link>
            <Link href="/mikro-jump" aria-label="Mikro Jump sayfasına git" className="transition-all hover:scale-105 hover:opacity-100 opacity-80 duration-300">
              <Image
                src="/mikro-jump-logo.png"
                alt="Mikro Jump logosu — KOBİ ERP programı"
                width={90}
                height={90}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </Link>
            <Link href="/mikro-fly" aria-label="Mikro Fly sayfasına git" className="transition-all hover:scale-105 hover:opacity-100 opacity-80 duration-300">
              <Image
                src="/mikro-fly-logo.png"
                alt="Mikro Fly logosu — E-Ticaret ERP programı"
                width={90}
                height={90}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
