import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Sultangazi Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Sultangazi'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "sultangazi mikro bayi, sultangazi mikro program, sultangazi erp, sultangazi crm, sultangazi yazılım, mikro bayi sultangazi",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/sultangazi-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Sultangazi Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/sultangazi-mikro-bayi",
  description: "Sultangazi'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sultangazi",
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
    name: "Sultangazi"
  },
  priceRange: "$$",
};

export default function SultangaziMikroBayi() {
  return <IlceLayout ilce="Sultangazi" jsonLd={jsonLd} />;
}
