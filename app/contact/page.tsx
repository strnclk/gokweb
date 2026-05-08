import { Metadata } from 'next';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import ContactContent from '@/components/ContactContent';

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

const whatsappNumber = '0539 856 35 78';
const email = 'satis@gokkusagiyazilim.com.tr';
const address = 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

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
      <ContactContent
        whatsappNumber={whatsappNumber}
        email={email}
        contactMethods={contactMethods}
      />
      <ScrollIndicator />
      <Footer />
    </div>
  );
}
