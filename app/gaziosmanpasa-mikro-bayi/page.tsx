import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Gaziosmanpaşa Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Gaziosmanpaşa'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "gaziosmanpasa mikro bayi, gaziosmanpaşa mikro program, gaziosmanpaşa erp, gaziosmanpaşa crm, gaziosmanpaşa yazılım, mikro bayi gaziosmanpaşa",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/gaziosmanpasa-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Gaziosmanpaşa Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/gaziosmanpasa-mikro-bayi",
  description: "Gaziosmanpaşa'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gaziosmanpaşa",
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
    name: "Gaziosmanpaşa"
  },
  priceRange: "$$",
};

export default function GaziosmanpasaMikroBayi() {
  return <IlceLayout ilce="Gaziosmanpaşa" jsonLd={jsonLd} />;
}
