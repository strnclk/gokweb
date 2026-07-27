import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Arnavutköy Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Arnavutköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "arnavutkoy mikro bayi, arnavutköy mikro program, arnavutköy erp, arnavutköy crm, arnavutköy yazılım, mikro bayi arnavutköy",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/arnavutkoy-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Arnavutköy Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/arnavutkoy-mikro-bayi",
  description: "Arnavutköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arnavutköy",
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
    name: "Arnavutköy"
  },
  priceRange: "$$",
};

export default function ArnavutkoyMikroBayi() {
  return <IlceLayout ilce="Arnavutköy" jsonLd={jsonLd} />;
}
