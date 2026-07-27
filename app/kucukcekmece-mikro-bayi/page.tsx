import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Küçükçekmece Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Küçükçekmece'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "kucukcekmece mikro bayi, küçükçekmece mikro program, küçükçekmece erp, küçükçekmece crm, küçükçekmece yazılım, mikro bayi küçükçekmece",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/kucukcekmece-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Küçükçekmece Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/kucukcekmece-mikro-bayi",
  description: "Küçükçekmece'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Küçükçekmece",
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
    name: "Küçükçekmece"
  },
  priceRange: "$$",
};

export default function KucukcekmeceMikroBayi() {
  return <IlceLayout ilce="Küçükçekmece" jsonLd={jsonLd} />;
}
