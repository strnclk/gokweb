import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Beyoğlu Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Beyoğlu'nda Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "beyoglu mikro bayi, beyoğlu mikro program, beyoğlu erp, beyoğlu crm, beyoğlu yazılım, mikro bayi beyoğlu",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/beyoglu-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Beyoğlu Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/beyoglu-mikro-bayi",
  description: "Beyoğlu'nda Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beyoğlu",
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
    name: "Beyoğlu"
  },
  priceRange: "$$",
};

export default function BeyogluMikroBayi() {
  return <IlceLayout ilce="Beyoğlu" jsonLd={jsonLd} />;
}
