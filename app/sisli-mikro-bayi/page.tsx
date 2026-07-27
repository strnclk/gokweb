import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Şişli Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Şişli'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "sisli mikro bayi, şişli mikro program, şişli erp, şişli crm, şişli yazılım, mikro bayi şişli",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/sisli-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Şişli Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/sisli-mikro-bayi",
  description: "Şişli'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Şişli",
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
    name: "Şişli"
  },
  priceRange: "$$",
};

export default function SisliMikroBayi() {
  return <IlceLayout ilce="Şişli" jsonLd={jsonLd} />;
}
