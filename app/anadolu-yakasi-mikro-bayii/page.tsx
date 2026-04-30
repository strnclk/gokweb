import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactButtons from '@/components/ContactButtons';
import { MapPin, Clock, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "Anadolu Yakası Resmi Mikro Bayi | ERP CRM Çözümleri | Gökkuşağı Yazılım",
  description: "Anadolu Yakası'nda resmi Mikro Bayi olarak Mikro program satışı, ERP hizmeti, CRM çözümleri, teknik destek ve kurulum hizmetleri. Ataşehir'den tüm Anadolu Yakası'na hizmet.",
  keywords: "Anadolu yakası mikro Bayi, Ataşehir mikro Bayi, Kadıköy mikro Bayi, Üsküdar mikro Bayi, Maltepe mikro Bayi, Kartal mikro Bayi, Pendik mikro Bayi, Mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP satışı, Mikro v3, Mikro 14",
  openGraph: {
    title: "Anadolu Yakası Resmi Mikro Bayi | Gökkuşağı Yazılım",
    description: "Anadolu Yakası'nda resmi Mikro Bayi. Mikro program satışı, ERP hizmeti, CRM çözümleri ve teknik destek.",
    url: "https://gokkusagiyazilim.com.tr/anadolu-yakasi-mikro-Bayi",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Anadolu Yakası Mikro Bayi",
  description: "Anadolu Yakası'nda resmi Mikro Bayi olarak Mikro program satışı, ERP hizmeti, CRM çözümleri ve teknik destek hizmetleri.",
  url: "https://gokkusagiyazilim.com.tr/anadolu-yakasi-mikro-Bayi",
  telephone: "+905398563578",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    postalCode: "34746",
    addressCountry: "TR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.9925",
    longitude: "29.1244"
  },
  areaServed: [
    "Ataşehir",
    "Kadıköy", 
    "Üsküdar",
    "Maltepe",
    "Kartal",
    "Pendik",
    "Sancaktepe",
    "Sultanbeyli",
    "Tuzla",
    "Çekmeköy",
    "Beykoz",
    "Ümraniye"
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  serviceType: [
    "Mikro program satışı",
    "ERP hizmeti",
    "CRM çözümleri",
    "Teknik destek",
    "Kurulum ve eğitim",
    "Özel yazılım geliştirme"
  ],
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  priceRange: "$$$"
};

export default function AnadoluYakasiMikroBayiPage() {
  const services = [
    {
      icon: CheckCircle,
      title: "Mikro Program Satışı",
      description: "Mikro v3, Mikro 14, Mikro ERP gibi tüm Mikro yazılım ürünlerinin resmi satışı ve lisanslama"
    },
    {
      icon: Users,
      title: "Teknik Destek",
      description: "7/24 teknik destek hizmeti, uzman ekip ile sorunlarınıza anında çözüm"
    },
    {
      icon: TrendingUp,
      title: "ERP Hizmeti",
      description: "İşletmenize özel ERP çözümleri, süreç optimizasyonu ve verimlilik artışı"
    },
    {
      icon: Award,
      title: "CRM Çözümleri",
      description: "Müşteri ilişki yönetimi, satış otomasyonu ve CRM entegrasyon hizmetleri"
    }
  ];

  const areas = [
    "Ataşehir Mikro Bayi",
    "Kadıköy Mikro Bayi", 
    "Üsküdar Mikro Bayi",
    "Maltepe Mikro Bayi",
    "Kartal Mikro Bayi",
    "Pendik Mikro Bayi",
    "Sancaktepe Mikro Bayi",
    "Sultanbeyli Mikro Bayi",
    "Tuzla Mikro Bayi",
    "Çekmeköy Mikro Bayi"
  ];

  const products = [
    "Mikro v3 Muhasebe Programı",
    "Mikro 14 ERP",
    "Mikro CRM",
    "Mikro e-Fatura",
    "Mikro e-Defter",
    "Mikro Bordro",
    "Mikro Stok Takip",
    "Mikro Sipariş Yönetimi"
  ];

  return (
    <>
      <Script
        id="local-business-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Anadolu Yakası Resmi Mikro Bayi
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Ataşehir merkezden tüm Anadolu Yakası'na Mikro program satışı, ERP hizmeti ve CRM çözümler
              </p>
              <ContactButtons />
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Konum</h3>
                <p className="text-gray-600">
                  İçerenköy Mah. Eryılmazlar Sokak No:2<br />
                  Kemal Bey İş Merkezi Kat:4 Daire:18<br />
                  Ataşehir/İstanbul
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-600">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mikro Bayi Hizmetlerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Anadolu Yakası'nda resmi Mikro Bayi olarak kapsamlı hizmetler sunuyoruz
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hizmet Verdiğimiz Bölgeler
              </h2>
              <p className="text-xl text-gray-600">
                Anadolu Yakası'nın tüm ilçelerine hizmet veriyoruz
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mikro Ürünleri
              </h2>
              <p className="text-xl text-gray-600">
                Tüm Mikro yazılım ürünlerinin resmi satışı ve destek hizmeti
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-lg font-medium text-gray-900">{product}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-xl text-gray-600">
                Anadolu Yakası'nda güvenilir Mikro Bayi
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resmi Bayi</h3>
                <p className="text-gray-600">Mikro yazılım yetkili resmi Bayi olarak orijinal ürünler ve güncel lisanslar</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uzman Ekip</h3>
                <p className="text-gray-600">Yılların deneyimiyle Mikro yazılım uzman kadrosu</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Destek</h3>
                <p className="text-gray-600">7/24 teknik destek ve anında müdahale imkanı</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Anadolu Yakası'nda Mikro Çözümleri için Bize Ulaşın
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Size özel çözümlerimiz ve rekabetçi fiyatlarla hizmet vermek için buradayız
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+905398563578"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all"
              >
                Hemen Ara
              </a>
              <a 
                href="https://wa.me/905398563578"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                WhatsApp Teklif
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
