import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Beykoz Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Beykoz'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "beykoz mikro bayi, beykoz mikro program, beykoz erp, beykoz crm, beykoz yazılım, mikro bayi beykoz",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/beykoz-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Beykoz Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/beykoz-mikro-bayi",
  description: "Beykoz'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beykoz",
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
    name: "Beykoz"
  },
  priceRange: "$$",
};

export default function BeykozMikroBayi() {
  return <IlceLayout ilce="Beykoz" jsonLd={jsonLd} />;
}
