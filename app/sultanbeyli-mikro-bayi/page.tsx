import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Sultanbeyli Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Sultanbeyli'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "sultanbeyli mikro bayi, sultanbeyli mikro program, sultanbeyli erp, sultanbeyli crm, sultanbeyli yazılım, mikro bayi sultanbeyli",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/sultanbeyli-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Sultanbeyli Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/sultanbeyli-mikro-bayi",
  description: "Sultanbeyli'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sultanbeyli",
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
    name: "Sultanbeyli"
  },
  priceRange: "$$",
};

export default function SultanbeyliMikroBayi() {
  return <IlceLayout ilce="Sultanbeyli" jsonLd={jsonLd} />;
}
