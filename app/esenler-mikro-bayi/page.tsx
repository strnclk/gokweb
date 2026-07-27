import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Esenler Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Esenler'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "esenler mikro bayi, esenler mikro program, esenler erp, esenler crm, esenler yazılım, mikro bayi esenler",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/esenler-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Esenler Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/esenler-mikro-bayi",
  description: "Esenler'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Esenler",
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
    name: "Esenler"
  },
  priceRange: "$$",
};

export default function EsenlerMikroBayi() {
  return <IlceLayout ilce="Esenler" jsonLd={jsonLd} />;
}
