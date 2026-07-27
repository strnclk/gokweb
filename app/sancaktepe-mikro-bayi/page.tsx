import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Sancaktepe Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Sancaktepe'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "sancaktepe mikro bayi, sancaktepe mikro program, sancaktepe erp, sancaktepe crm, sancaktepe yazılım, mikro bayi sancaktepe",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/sancaktepe-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Sancaktepe Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/sancaktepe-mikro-bayi",
  description: "Sancaktepe'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sancaktepe",
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
    name: "Sancaktepe"
  },
  priceRange: "$$",
};

export default function SancaktepeMikroBayi() {
  return <IlceLayout ilce="Sancaktepe" jsonLd={jsonLd} />;
}
