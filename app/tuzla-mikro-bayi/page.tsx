import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Tuzla Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Tuzla'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "tuzla mikro bayi, tuzla mikro program, tuzla erp, tuzla crm, tuzla yazılım, mikro bayi tuzla",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/tuzla-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Tuzla Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/tuzla-mikro-bayi",
  description: "Tuzla'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tuzla",
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
    name: "Tuzla"
  },
  priceRange: "$$",
};

export default function TuzlaMikroBayi() {
  return <IlceLayout ilce="Tuzla" jsonLd={jsonLd} />;
}
