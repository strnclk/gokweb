import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Esenyurt Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Esenyurt'ta Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "esenyurt mikro bayi, esenyurt mikro program, esenyurt erp, esenyurt crm, esenyurt yazılım, mikro bayi esenyurt",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/esenyurt-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Esenyurt Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/esenyurt-mikro-bayi",
  description: "Esenyurt'ta Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Esenyurt",
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
    name: "Esenyurt"
  },
  priceRange: "$$",
};

export default function EsenyurtMikroBayi() {
  return <IlceLayout ilce="Esenyurt" jsonLd={jsonLd} />;
}
