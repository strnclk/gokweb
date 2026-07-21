import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Bakırköy Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Bakırköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "bakirkoy mikro bayi, bakırköy mikro program, bakırköy erp, bakırköy crm, bakırköy yazılım, mikro bayi bakırköy",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/bakirkoy-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Bakırköy Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/bakirkoy-mikro-bayi",
  description: "Bakırköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bakırköy",
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
    name: "Bakırköy"
  },
  priceRange: "$$",
};

export default function BakirkoyMikroBayi() {
  return <IlceLayout ilce="Bakırköy" jsonLd={jsonLd} />;
}
