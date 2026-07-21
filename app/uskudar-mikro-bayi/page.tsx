import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Üsküdar Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Üsküdar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "uskudar mikro bayi, üsküdar mikro program, üsküdar erp, üsküdar crm, üsküdar yazılım, mikro bayi üsküdar",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/uskudar-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Üsküdar Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/uskudar-mikro-bayi",
  description: "Üsküdar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Üsküdar",
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
    name: "Üsküdar"
  },
  priceRange: "$$",
};

export default function UskudarMikroBayi() {
  return <IlceLayout ilce="Üsküdar" jsonLd={jsonLd} />;
}
