import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Şile Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Şile'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "sile mikro bayi, şile mikro program, şile erp, şile crm, şile yazılım, mikro bayi şile",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/sile-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Şile Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/sile-mikro-bayi",
  description: "Şile'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Şile",
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
    name: "Şile"
  },
  priceRange: "$$",
};

export default function SileMikroBayi() {
  return <IlceLayout ilce="Şile" jsonLd={jsonLd} />;
}
