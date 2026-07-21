import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Bahçelievler Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Bahçelievler'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "bahcelievler mikro bayi, bahçelievler mikro program, bahçelievler erp, bahçelievler crm, bahçelievler yazılım, mikro bayi bahçelievler",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/bahcelievler-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Bahçelievler Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/bahcelievler-mikro-bayi",
  description: "Bahçelievler'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bahçelievler",
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
    name: "Bahçelievler"
  },
  priceRange: "$$",
};

export default function BahcelievlerMikroBayi() {
  return <IlceLayout ilce="Bahçelievler" jsonLd={jsonLd} />;
}
