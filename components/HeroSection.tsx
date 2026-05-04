'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      'Sancaktepe': 'te',
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
      'Ümraniye': 'de'
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
      'Üsküdar', 'Ümraniye'
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
    'Beşiktaş': 'Beşiktaş\'da kurumsal ve profesyonel hizmetlere Mikro ERP çözümleri. Hukuk, finans ve danışmanlık firmaları için özel yazılım çözümleri.',
    'Beyoğlu': 'Beyoğlu\'nda turizm, perakende ve hizmet sektörüne Mikro çözümler. Oteller, restoranlar ve mağazalar için entegre iş yönetim sistemleri.',
    'Büyükçekmece': 'Büyükçekmece\'de sanayi ve lojistik firmalarına Mikro ERP çözümleri. Organize sanayi ve liman bölgelerindeki işletmeler için özel entegrasyonlar.',
    'Çatalca': 'Çatalca\'da tarım ve hayvancılık işletmelerine Mikro çözümler. Tarımsal üretim, gıda sanayi ve lojistik için özel ERP sistemleri.',
    'Çekmeköy': 'Çekmeköy\'de konut ve inşaat sektörüne Mikro çözümler. İnşaat firmaları, emlak ve müteahhitlik için özel proje yönetim sistemleri.',
    'Esenler': 'Esenler\'de sanayi ve ticaret firmalarına Mikro ERP çözümleri. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Esenyurt': 'Esenyurt\'da üretim ve ticaret firmalarına Mikro çözümler. Mobilya, tekstil ve sanayi işletmeleri için entegre ERP sistemleri.',
    'Eyüpsultan': 'Eyüpsultan\'da sanayi ve ticaret firmalarına Mikro ERP çözümleri. Organize sanayi bölgesindeki işletmeler için özel entegrasyon hizmetleri.',
    'Fatih': 'Fatih\'de turizm ve ticaret sektörüne Mikro çözümler. Oteller, restoranlar ve tarihi yarımada hizmet veren işletmeler için özel sistemler.',
    'Gaziosmanpaşa': 'Gaziosmanpaşa\'da inşaat ve ticaret firmalarına Mikro çözümler. İnşaat projeleri, emlak ve konut sektörü için özel ERP sistemleri.',
    'Güngören': 'Güngören\'de tekstil ve ticaret firmalarına Mikro çözümler. Hazır giyim, toptan satış ve lojistik için entegre iş yönetim sistemleri.',
    'Kağıthane': 'Kağıthane\'de sanayi ve lojistik firmalarına Mikro ERP çözümleri. Organize sanayi bölgesindeki işletmeler için özel entegrasyon hizmetleri.',
    'Kartal': 'Kartal\'da sanayi ve ticaret firmalarına Mikro çözümler. Liman, lojistik ve deniz ticareti için özel ERP sistemleri.',
    'Küçükçekmece': 'Küçükçekmece\'de sanayi ve ticaret firmalarına Mikro çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Maltepe': 'Maltepe\'de perakende ve hizmet sektörüne Mikro çözümler. Alışveriş merkezleri, mağazalar ve hizmet firmaları için entegre sistemler.',
    'Pendik': 'Pendik\'de sanayi ve lojistik firmalarına Mikro ERP çözümleri. Organize sanayi, liman ve deniz ticareti için özel entegrasyonlar.',
    'Sancaktepe': 'Sancaktepe\'de inşaat ve ticaret firmalarına Mikro çözümler. Konut projeleri, emlak ve inşaat sektörü için özel ERP sistemleri.',
    'Sarıyer': 'Sarıyer\'da kurumsal ve lüks hizmetlere Mikro ERP çözümleri. Marina, turizm ve üst segment hizmet sektörleri için özel sistemler.',
    'Şile': 'Şile\'de turizm ve tarım sektörüne Mikro çözümler. Turistik tesisler, tarımsal üretim ve yazlık işletmeler için özel ERP sistemleri.',
    'Silivri': 'Silivri\'de tarım ve sanayi firmalarına Mikro çözümler. Tarımsal üretim, gıda sanayi ve organize sanayi için entegre sistemler.',
    'Sultanbeyli': 'Sultanbeyli\'de inşaat ve ticaret firmalarına Mikro çözümler. Konut projeleri, emlak ve ticaret sektörü için özel ERP sistemleri.',
    'Sultangazi': 'Sultangazi\'de sanayi firmalarına Mikro ERP çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Şişli': 'Şişli\'de kurumsal ve finans sektörüne Mikro ERP çözümleri. Merkez ofisler, finans ve danışmanlık firmaları için özel sistemler.',
    'Tuzla': 'Tuzla\'da sanayi ve deniz ticaretine Mikro ERP çözümler. Organize sanayi, tersane ve liman işletmeleri için özel entegrasyonlar.',
    'Zeytinburnu': 'Zeytinburnu\'nda sanayi ve ticaret firmalarına Mikro çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.',
    'Ataşehir': 'Ataşehir\'de kurumsal firmalara Mikro ERP çözümleri. Finans merkezindeki ofisler, teknoloji firmaları ve kurumsal işletmeler için entegre sistemler.',
    'Beylikdüzü': 'Beylikdüzü\'de perakende ve ticaret firmalarına Mikro çözümler. AVM\'ler, mağazalar ve lojistik merkezleri için özel ERP sistemleri.',
    'Kadıköy': 'Kadıköy\'de turizm ve ticaret sektörüne Mikro çözümler. Restoranlar, kafeler, mağazalar ve hizmet sektörü için entegre iş yönetim sistemleri.',
    'Üsküdar': 'Üsküdar\'da turizm ve ticaret sektörüne Mikro çözümler. Boğaz turizmi, restoranlar ve hizmet sektörü için özel ERP sistemleri.',
    'Ümraniye': 'Ümraniye\'de sanayi firmalarına Mikro ERP çözümler. Organize sanayi bölgesindeki işletmeler için stok ve üretim yönetimi.'
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
    'Beşiktaş': 'Beşiktaş\'da profesyonel hizmetlere Mikro ERP ve özel yazılım.',
    'Beyoğlu': 'Beyoğlu\'nda turizm ve perakendeye Mikro ERP çözümleri.',
    'Büyükçekmece': 'Büyükçekmece\'de sanayi ve lojistiğe Mikro ERP çözümleri.',
    'Çatalca': 'Çatalca\'da tarım ve gıda sanayine Mikro çözümler.',
    'Çekmeköy': 'Çekmeköy\'de inşaat ve emlak sektörüne Mikro ERP.',
    'Esenler': 'Esenler\'de sanayi firmalarına Mikro ERP ve üretim yönetimi.',
    'Esenyurt': 'Esenyurt\'da üretim firmalarına Mikro ERP ve stok yönetimi.',
    'Eyüpsultan': 'Eyüpsultan\'da sanayi ve ticarete Mikro ERP çözümleri.',
    'Fatih': 'Fatih\'te turizm ve hizmet sektörüne Mikro ERP.',
    'Gaziosmanpaşa': 'Gaziosmanpaşa\'da inşaat ve emlağa Mikro ERP.',
    'Güngören': 'Güngören\'de tekstil ve ticarete Mikro çözümler.',
    'Kağıthane': 'Kağıthane\'de sanayi ve lojistiğe Mikro ERP.',
    'Kartal': 'Kartal\'da sanayi ve deniz ticaretine Mikro ERP.',
    'Küçükçekmece': 'Küçükçekmece\'de sanayi firmalarına Mikro ERP.',
    'Maltepe': 'Maltepe\'de perakende ve hizmet sektörüne Mikro çözümler.',
    'Pendik': 'Pendik\'de sanayi ve lojistiğe Mikro ERP.',
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
    'Ümraniye': 'Ümraniye\'de sanayi firmalarına Mikro ERP.'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8"
          >
            <Zap size={14} />
            Resmi Mikro Bayi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {districtName ? `${districtName} İşletmenizin` : 'İşletmenizin'}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {displayText}
              <span className="inline-block w-[2px] h-[0.8em] bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-pulse align-middle ml-0.5 shadow-[0_0_8px_2px_rgba(168,85,247,0.5),0_0_16px_4px_rgba(59,130,246,0.3),0_0_24px_6px_rgba(34,197,94,0.2)]" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {districtDescription || 'Mikro ERP ve E-Dönüşüm çözümleriyle işletmenizi dijital çağa hazırlayın. 19+ yıllık deneyimle yanınızdayız.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={handleTeklifAlClick}
              aria-label="Teklif Al - İletişim sayfasına gidin"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 font-medium"
            >
              Teklif Al
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {districtServiceDescription ? (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-blue-600" />
                {districtServiceDescription}
              </div>
            ) : (
              highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-blue-600" />
                  {item.text}
                </div>
              ))
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Image 
                src="/yetkili.png" 
                alt="Gökkuşağı Yazılım - Resmi Mikro Yetkili Bayii" 
                width={80} 
                height={80}
                className="h-20 w-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
              <Image 
                src="/mikro-run-logo.png" 
                alt="Mikro Run" 
                width={80} 
                height={80}
                className="h-20 w-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
              <Image 
                src="/mikro-jump-logo.png" 
                alt="Mikro Jump" 
                width={80} 
                height={80}
                className="h-20 w-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
              <Image 
                src="/mikro-fly-logo.png" 
                alt="Mikro Fly" 
                width={80} 
                height={80}
                className="h-20 w-20 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
