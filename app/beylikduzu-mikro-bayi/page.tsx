import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Beylikdüzü Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Beylikdüzü'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "beylikdüzü mikro bayi, beylikdüzü mikro program, beylikdüzü erp, beylikdüzü crm, beylikdüzü yazılım, mikro bayi beylikdüzü",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/beylikduzu-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Beylikdüzü Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/beylikduzu-mikro-bayi",
  description: "Beylikdüzü'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beylikdüzü",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905398563578",
    contactType: "sales",
  },
  areaServed: {
    "@type": "City",
    name: "Beylikdüzü"
  },
  priceRange: "$$",
};

export default function BeylikduzuMikroBayi() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Beylikdüzü Mikro Bayi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gökkuşağı Yazılım olarak Beylikdüzü'de Mikro program, ERP ve CRM çözümleri sunuyoruz. 
              Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri ile işletmenizi dijital dönüşüme hazırlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hemen İletişime Geçin</h3>
              <p className="text-gray-600 mb-4">Ücretsiz danışmanlık ve demo talebi için bize ulaşın.</p>
              <a href="tel:+905398563578" className="text-blue-600 font-semibold hover:underline">
                +90 539 856 35 78
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beylikdüzü Hizmeti</h3>
              <p className="text-gray-600 mb-4">Beylikdüzü ve çevre bölgelere yerinde kurulum ve destek.</p>
              <p className="text-gray-800 font-semibold">Tüm Beylikdüzü mahalleleri</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">7/24 Destek</h3>
              <p className="text-gray-600 mb-4">Uzaktan destek ve acil müdahale hizmetleri.</p>
              <p className="text-gray-800 font-semibold">Hızlı Çözüm Garantisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Beylikdüzü'de Sunduğumuz Hizmetler
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Mikro Program Satışı</h3>
              <p className="text-gray-600 mb-4">
                Mikro FLY, Mikro RUN ve Mikro JUMP ürünlerinin satışı ve lisanslama işlemleri.
                İşletmenizin ihtiyacına uygun Mikro ürününü seçmeniz için danışmanlık sağlıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Mikro FLY - KOBİ'ler için</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Mikro RUN - Orta ölçekli işletmeler için</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Mikro JUMP - Büyük işletmeler için</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Kurulum ve Entegrasyon</h3>
              <p className="text-gray-600 mb-4">
                Mikro programlarının kurulumu, yapılandırması ve mevcut sistemlerinizle entegrasyonu.
                Beylikdüzü'de yerinde kurulum hizmeti sunuyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Yerinde kurulum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Mevcut sistem entegrasyonu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Veri transferi</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Eğitim ve Destek</h3>
              <p className="text-gray-600 mb-4">
                Mikro programlarının kullanımı konusunda kapsamlı eğitim ve sürekli teknik destek.
                Beylikdüzü'deki işletmeler için özel eğitim programları.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Kullanıcı eğitimi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Yönetici eğitimi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>7/24 teknik destek</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">E-Dönüşüm Çözümleri</h3>
              <p className="text-gray-600 mb-4">
                E-fatura, e-defter, e-irsaliye gibi e-dönüşüm uygulamalarının entegrasyonu.
                GİB uyumlu çözümler ile yasal gereklilikleri karşılamanızı sağlıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>E-fatura entegrasyonu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>E-defter entegrasyonu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>GİB portal yönetimi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Neden Gökkuşağı Yazılım?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resmi Mikro Bayi</h3>
              <p className="text-gray-600">
                Mikro Yazılım tarafından yetkili resmi bayi olarak hizmet veriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">30 Yıllık Deneyim</h3>
              <p className="text-gray-600">
                30 yılı aşkın deneyim ile Mikro programlarında uzmanlaşmış ekip.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Yerinde Hizmet</h3>
              <p className="text-gray-600">
                Beylikdüzü'de yerinde kurulum, eğitim ve destek hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ücretsiz Demo Talep Edin
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mikro programlarını yakından incelemek için ücretsiz demo talep edin.
            Beylikdüzü'deki ofisimizde sizi ağırlamaktan memnuniyet duyarız.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            İletişim Bilgileri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">İletişim</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a href="tel:+905398563578" className="text-gray-600 hover:text-blue-600">
                      +90 539 856 35 78
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">E-posta</p>
                    <a href="mailto:info@gokkusagiyazilim.com.tr" className="text-gray-600 hover:text-blue-600">
                      info@gokkusagiyazilim.com.tr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p className="text-gray-600">Ataşehir, İstanbul</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Çalışma Saatleri</p>
                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Hizmet Bölgeleri</h3>
              
              <p className="text-gray-600 mb-4">
                Beylikdüzü ve çevre bölgelere hizmet veriyoruz:
              </p>

              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <div>• Beylikdüzü Merkez</div>
                <div>• Gürpınar</div>
                <div>• Kavaklı</div>
                <div>• Adnan Kahveci</div>
                <div>• Büyükçekmece</div>
                <div>• Esenyurt</div>
                <div>• Avcılar</div>
                <div>• Kıraç</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
