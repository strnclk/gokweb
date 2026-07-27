import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Çatalca Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Çatalca'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "catalca mikro bayi, çatalca mikro program, çatalca erp, çatalca crm, çatalca yazılım, mikro bayi çatalca",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/catalca-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Çatalca Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/catalca-mikro-bayi",
  description: "Çatalca'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Çatalca",
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
    name: "Çatalca"
  },
  priceRange: "$$",
};

export default function CatalcaMikroBayi() {
  return <IlceLayout ilce="Çatalca" jsonLd={jsonLd} />;
}
