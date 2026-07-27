import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Büyükçekmece Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Büyükçekmece'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "buyukcekmece mikro bayi, büyükçekmece mikro program, büyükçekmece erp, büyükçekmece crm, büyükçekmece yazılım, mikro bayi büyükçekmece",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/buyukcekmece-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Büyükçekmece Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/buyukcekmece-mikro-bayi",
  description: "Büyükçekmece'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Büyükçekmece",
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
    name: "Büyükçekmece"
  },
  priceRange: "$$",
};

export default function BuyukcekmeceMikroBayi() {
  return <IlceLayout ilce="Büyükçekmece" jsonLd={jsonLd} />;
}
