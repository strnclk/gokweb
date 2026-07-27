import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Çekmeköy Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Çekmeköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "cekmekoy mikro bayi, çekmeköy mikro program, çekmeköy erp, çekmeköy crm, çekmeköy yazılım, mikro bayi çekmeköy",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/cekmekoy-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Çekmeköy Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/cekmekoy-mikro-bayi",
  description: "Çekmeköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Çekmeköy",
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
    name: "Çekmeköy"
  },
  priceRange: "$$",
};

export default function CekmekoyMikroBayi() {
  return <IlceLayout ilce="Çekmeköy" jsonLd={jsonLd} />;
}
