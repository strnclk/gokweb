import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Kartal Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Kartal'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "kartal mikro bayi, kartal mikro program, kartal erp, kartal crm, kartal yazılım, mikro bayi kartal",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/kartal-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Kartal Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/kartal-mikro-bayi",
  description: "Kartal'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kartal",
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
    name: "Kartal"
  },
  priceRange: "$$",
};

export default function KartalMikroBayi() {
  return <IlceLayout ilce="Kartal" jsonLd={jsonLd} />;
}
