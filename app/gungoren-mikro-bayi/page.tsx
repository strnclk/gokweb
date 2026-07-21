import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Güngören Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Güngören'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "gungoren mikro bayi, güngören mikro program, güngören erp, güngören crm, güngören yazılım, mikro bayi güngören",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/gungoren-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Güngören Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/gungoren-mikro-bayi",
  description: "Güngören'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Güngören",
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
    name: "Güngören"
  },
  priceRange: "$$",
};

export default function GungorenMikroBayi() {
  return <IlceLayout ilce="Güngören" jsonLd={jsonLd} />;
}
