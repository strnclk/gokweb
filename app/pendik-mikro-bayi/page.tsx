import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Pendik Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Pendik'te Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "pendik mikro bayi, pendik mikro program, pendik erp, pendik crm, pendik yazılım, mikro bayi pendik",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/pendik-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Pendik Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/pendik-mikro-bayi",
  description: "Pendik'te Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pendik",
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
    name: "Pendik"
  },
  priceRange: "$$",
};

export default function PendikMikroBayi() {
  return <IlceLayout ilce="Pendik" jsonLd={jsonLd} />;
}
