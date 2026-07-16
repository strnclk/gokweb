import { Metadata } from 'next';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'İletişim | ERP CRM Çözümleri | Gökkuşağı Yazılım',
  description: 'Gökkuşağı Yazılım ile iletişime geçin. Mikro ERP, CRM ve e-dönüşüm çözümleri için ücretsiz danışmanlık alın. Ataşehir ofisimizle irtibata geçin.',
  keywords: 'Gökkuşağı Yazılım iletişim, ERP danışmanlık, Mikro bayii iletişim, Ataşehir iletişim, İstanbul iletişim, ERP fiyat teklifi, CRM danışmanlık, e-fatura danışmanlık',
  alternates: { canonical: 'https://gokkusagiyazilim.com.tr/contact' },
  openGraph: {
    title: 'İletişim | ERP CRM Çözümleri | Gökkuşağı Yazılım',
    description: 'Gökkuşağı Yazılım ile iletişime geçin. Mikro ERP, CRM ve e-dönüşüm çözümleri için ücretsiz danışmanlık alın.',
    type: 'website',
  },
};

const whatsappNumber = '0539 856 35 78';
const email = 'satis@gokkusagiyazilim.com.tr';
const address = 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gökkuşağı Yazılım ve Danışmanlık',
  url: 'https://gokkusagiyazilim.com.tr/contact',
  email: email,
  telephone: '+905398563578',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18',
    addressLocality: 'Ataşehir',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+905398563578',
    contactType: 'sales',
    email: email,
    areaServed: 'TR',
    availableLanguage: 'Turkish',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  areaServed: { '@type': 'City', name: 'İstanbul' },
};

const contactMethods = [
  {
    iconName: 'Phone',
    title: 'Telefon',
    value: whatsappNumber,
    link: `tel:+90${whatsappNumber}`
  },
  {
    iconName: 'Mail',
    title: 'E-posta',
    value: email,
    link: `mailto:${email}`
  },
  {
    iconName: 'MapPin',
    title: 'Adres',
    value: 'Ataşehir, İstanbul',
    link: null
  }
];

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ContactContent
        whatsappNumber={whatsappNumber}
        email={email}
        contactMethods={contactMethods}
      />      <Footer />
    </div>
  );
}
