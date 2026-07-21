import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Adalar Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Adalar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "adalar mikro bayi, adalar mikro program, adalar erp, adalar crm, adalar yazılım, mikro bayi adalar",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/adalar-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Adalar Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/adalar-mikro-bayi",
  description: "Adalar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adalar",
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
    name: "Adalar"
  },
  priceRange: "$$",
};

export default function AdalarMikroBayi() {
  return <IlceLayout ilce="Adalar" jsonLd={jsonLd} />;
}
