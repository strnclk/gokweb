import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Ümraniye Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Ümraniye'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "umraniye mikro bayi, ümraniye mikro program, ümraniye erp, ümraniye crm, ümraniye yazılım, mikro bayi ümraniye",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/umraniye-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Ümraniye Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/umraniye-mikro-bayi",
  description: "Ümraniye'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ümraniye",
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
    name: "Ümraniye"
  },
  priceRange: "$$",
};

export default function UmraniyeMikroBayi() {
  return <IlceLayout ilce="Ümraniye" jsonLd={jsonLd} />;
}
