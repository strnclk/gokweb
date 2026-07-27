import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Maltepe Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Maltepe'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "maltepe mikro bayi, maltepe mikro program, maltepe erp, maltepe crm, maltepe yazılım, mikro bayi maltepe",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/maltepe-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Maltepe Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/maltepe-mikro-bayi",
  description: "Maltepe'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maltepe",
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
    name: "Maltepe"
  },
  priceRange: "$$",
};

export default function MaltepeMikroBayi() {
  return <IlceLayout ilce="Maltepe" jsonLd={jsonLd} />;
}
