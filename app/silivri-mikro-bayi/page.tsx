import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Silivri Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Silivri'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "silivri mikro bayi, silivri mikro program, silivri erp, silivri crm, silivri yazılım, mikro bayi silivri",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/silivri-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Silivri Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/silivri-mikro-bayi",
  description: "Silivri'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Silivri",
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
    name: "Silivri"
  },
  priceRange: "$$",
};

export default function SilivriMikroBayi() {
  return <IlceLayout ilce="Silivri" jsonLd={jsonLd} />;
}
