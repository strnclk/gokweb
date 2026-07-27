import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Kağıthane Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Kağıthane'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "kagithane mikro bayi, kağıthane mikro program, kağıthane erp, kağıthane crm, kağıthane yazılım, mikro bayi kağıthane",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/kagithane-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Kağıthane Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/kagithane-mikro-bayi",
  description: "Kağıthane'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kağıthane",
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
    name: "Kağıthane"
  },
  priceRange: "$$",
};

export default function KagithaneMikroBayi() {
  return <IlceLayout ilce="Kağıthane" jsonLd={jsonLd} />;
}
