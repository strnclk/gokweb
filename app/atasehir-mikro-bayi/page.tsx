import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Ataşehir Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Ataşehir'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "atasehir mikro bayi, ataşehir mikro program, ataşehir erp, ataşehir crm, ataşehir yazılım, mikro bayi ataşehir",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/atasehir-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Ataşehir Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/atasehir-mikro-bayi",
  description: "Ataşehir'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ataşehir",
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
    name: "Ataşehir"
  },
  priceRange: "$$",
};

export default function AtasehirMikroBayi() {
  return <IlceLayout ilce="Ataşehir" jsonLd={jsonLd} />;
}
