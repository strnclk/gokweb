import { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim | ERP CRM Çözümleri | Gökkuşağı Yazılım',
  description: 'Gökkuşağı Yazılım ile iletişime geçin. Mikro ERP, CRM ve e-dönüşüm çözümleri için ücretsiz danışmanlık alın. Ataşehir ofisimizle irtibata geçin.',
  keywords: 'Gökkuşağı Yazılım iletişim, ERP danışmanlık, Mikro bayii iletişim, Ataşehir iletişim, İstanbul iletişim, ERP fiyat teklifi, CRM danışmanlık, e-fatura danışmanlık',
  openGraph: {
    title: 'İletişim | ERP CRM Çözümleri | Gökkuşağı Yazılım',
    description: 'Gökkuşağı Yazılım ile iletişime geçin. Mikro ERP, CRM ve e-dönüşüm çözümleri için ücretsiz danışmanlık alın.',
    type: 'website',
  },
};

const whatsappNumber = '905398563578';
const email = 'satis@gokkusagiyazilim.com.tr';
const address = 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefon',
    value: whatsappNumber,
    link: `tel:+90${whatsappNumber}`
  },
  {
    icon: Mail,
    title: 'E-posta',
    value: email,
    link: `mailto:${email}`
  },
  {
    icon: MapPin,
    title: 'Adres',
    value: 'Ataşehir, İstanbul',
    link: null
  }
];

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center mb-8">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-slate-900">
            İletişim
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Projelerinizi konuşalım, birlikte başaralım
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">İletişim Bilgileri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Size nasıl yardımcı olabiliriz?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{method.title}</h3>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-slate-600 text-sm">{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Mesaj Gönderin</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Size en kısa sürede dönüş yapacağız
            </p>
          </div>

          <ContactForm />
        </div>
      </section>


      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Konum</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Bizi ziyaret edin
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Eryilmazlar+Sokak+No:2+Icerenkoy+Atasehir+Istanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
