import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Bayrampaşa Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Bayrampaşa'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "bayrampasa mikro bayi, bayrampaşa mikro program, bayrampaşa erp, bayrampaşa crm, bayrampaşa yazılım, mikro bayi bayrampaşa",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/bayrampasa-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Bayrampaşa Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/bayrampasa-mikro-bayi",
  description: "Bayrampaşa'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayrampaşa",
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
    name: "Bayrampaşa"
  },
  priceRange: "$$",
};

export default function BayrampasaMikroBayi() {
  return <IlceLayout ilce="Bayrampaşa" jsonLd={jsonLd} />;
}
