import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Fatih Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Fatih'te Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "fatih mikro bayi, fatih mikro program, fatih erp, fatih crm, fatih yazılım, mikro bayi fatih",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/fatih-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Fatih Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/fatih-mikro-bayi",
  description: "Fatih'te Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fatih",
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
    name: "Fatih"
  },
  priceRange: "$$",
};

export default function FatihMikroBayi() {
  return <IlceLayout ilce="Fatih" jsonLd={jsonLd} />;
}
