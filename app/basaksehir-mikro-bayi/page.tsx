import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Başakşehir Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Başakşehir'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "basaksehir mikro bayi, başakşehir mikro program, başakşehir erp, başakşehir crm, başakşehir yazılım, mikro bayi başakşehir",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/basaksehir-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Başakşehir Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/basaksehir-mikro-bayi",
  description: "Başakşehir'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Başakşehir",
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
    name: "Başakşehir"
  },
  priceRange: "$$",
};

export default function BasaksehirMikroBayi() {
  return <IlceLayout ilce="Başakşehir" jsonLd={jsonLd} />;
}
