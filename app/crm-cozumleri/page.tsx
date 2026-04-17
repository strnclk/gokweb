import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Users, TrendingUp, Target, BarChart, MessageSquare, CheckCircle, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "CRM Çözümleri | Müteri Ili ki Yönetimi | Anadolu Yakasi Mikro Bayii",
  description: "Anadolu Yakasi'nda profesyonel CRM çözümleri. Müteri ili ki yönetimi, sati otomasyonu, Mikro CRM entegrasyonu ve özel CRM yazilim hizmetleri.",
  keywords: "CRM çözümleri, müteri ili ki yönetimi, sati otomasyonu, Mikro CRM, CRM yazilim, Anadolu yakasi CRM, Ataehir CRM, Istanbul CRM, CRM programi, CRM sistemleri, müteri takip yazilimi",
  openGraph: {
    title: "CRM Çözümleri | Müteri Ili ki Yönetimi | Gökkusagi Yazilim",
    description: "Anadolu Yakasi'nda profesyonel CRM çözümleri ve müteri ili ki yönetimi hizmetleri.",
    url: "https://gokkusagiyazilim.com.tr/crm-cozumleri",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM Çözümleri ve Müteri Ili ki Yönetimi",
  description: "Anadolu Yakasi'nda profesyonel CRM çözümleri, müteri ili ki yönetimi, sati otomasyonu ve Mikro CRM entegrasyon hizmetleri.",
  provider: {
    "@type": "Organization",
    name: "Gökkusagi Yazilim ve Danismanlik",
    url: "https://gokkusagiyazilim.com.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "içerenköy Mah. Eryilmazlar Sokak No:2 Kemal Bey Is Merkezi Kat:4 Daire:18",
      addressLocality: "Ataehir",
      addressRegion: "Istanbul",
      postalCode: "34746",
      addressCountry: "TR"
    }
  },
  serviceType: "CRM Çözümleri",
  areaServed: "Anadolu Yakasi, Istanbul",
  keywords: "CRM çözümleri, müteri ili ki yönetimi, sati otomasyonu, Mikro CRM"
};

export default function CRMCozumleriPage() {
  const features = [
    {
      icon: Users,
      title: "Müteri Yönetimi",
      description: "Tüm müteri bilgilerini tek yerden yönetin, ili ki güçlendirin"
    },
    {
      icon: Target,
      title: "Sati Otomasyonu",
      description: "Sati süreçlerini otomatikle, verimliligi artir"
    },
    {
      icon: BarChart,
      title: "Raporlama ve Analiz",
      description: "Detayli raporlarla performansinizi takip edin"
    },
    {
      icon: MessageSquare,
      title: "Iletiim Yönetimi",
      description: "Müteri iletiimini merkezi yönetim sistemi"
    },
    {
      icon: TrendingUp,
      title: "Performans Takibi",
      description: "Sati ekibi performansini gerçek zamanli takip edin"
    },
    {
      icon: CheckCircle,
      title: "Entegrasyon",
      description: "Mikro ERP ve muhasebe sistemleriyle tam entegrasyon"
    }
  ];

  const benefits = [
    "Sati verimliliinde %40 arti",
    "Müteri memnuniyetinde %35 iyileme",
    "Sati döngüsünde %50 hizlanma",
    "Müteri kayip oraninda %25 azalma",
    "Ekip verimliliinde %30 arti",
    "ROI'de %200'e varan geri dönü"
  ];

  const crmSolutions = [
    {
      name: "Mikro CRM",
      description: "Mikro yazilim ürünleriyle tam uyumlu, entegre CRM çözümü",
      features: ["Mikro ERP entegrasyonu", "Otomatik veri senkronizasyonu", "Tekrarlayan otomasyonu", "Raporlama ve analiz"],
      price: "Özel Fiyat"
    },
    {
      name: "Özel CRM Yazilim",
      description: "Iletmenize özel olarak tasarlanan CRM çözümleri",
      features: ["Özel modül gelistirme", "Mevcut sistem entegrasyonu", "Mobil uyumlu arayüz", "Bulut tabanli altyapi"],
      price: "Proje Bazli"
    },
    {
      name: "Sati Otomasyon CRM",
      description: "Sati süreçlerini otomatikleiren akil CRM çözümü",
      features: ["Otomatik lead yönetimi", "Sati pipeline takibi", "E-posta otomasyonu", "Performans yönetimi"],
      price: "Aylik 750 TL'den baslayan fiyatlarla"
    }
  ];

  return (
    <>
      <Script
        id="crm-service-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CRM Çözümleri ile Müteri Ili ki Güçlendirin
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Anadolu Yakasi'nda profesyonel CRM çözümleri. Müteri yönetimi, sati otomasyonu ve performans takibi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+905398563578"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  CRM Demo Talebi: +90 539 856 35 78
                </a>
                <a 
                  href="https://wa.me/905398563578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all inline-flex items-center justify-center gap-2"
                >
                  WhatsApp ile Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CRM Çözümlerimizin Özellikleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Müteri ili ki yönetiminden sati otomasyonuna kadar tüm süreçlerinizi optimize edin
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CRM Çözümleriyle Elde Edeceiniz Faydalar
              </h2>
              <p className="text-xl text-gray-600">
                Isletmenize katacaii degeri görün
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CRM Çözüm Seçenekleri
              </h2>
              <p className="text-xl text-gray-600">
                Iletmenizin ihtiyacina uygun CRM çözümünü seçin
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {crmSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-300 transition-all">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.name}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-lg font-semibold text-purple-600 mb-4">{solution.price}</p>
                    <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all">
                      Detayli Bilgi
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neden CRM Çözümlerimizi Tercih Etmelisiniz?
              </h2>
              <p className="text-xl text-purple-100">
                Anadolu Yakasi'nda güvenilir CRM çözüm orta
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Uzman Ekip</h3>
                <p className="text-purple-100">Yillarin CRM deneyimiyle size özel çözümler sunuyoruz</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Yerel Destek</h3>
                <p className="text-purple-100">Anadolu Yakasi'nda yerel teknik destek ve hizmet</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ölçeklenebilir Çözümler</h3>
                <p className="text-purple-100">Iletmenizle birlikte büyüyen esnek CRM sistemleri</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CRM Çözümleri için Ücretsiz Demo Talebinde Bulunun
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Size özel CRM çözümlerimizi görün ve isletmeniz için potansiyeli keifedin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+905398563578"
                className="bg-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
              <a 
                href="https://wa.me/905398563578"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-600 transition-all inline-flex items-center justify-center gap-2"
              >
                WhatsApp Demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
