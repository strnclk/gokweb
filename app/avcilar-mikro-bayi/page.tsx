import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Avcılar Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Avcılar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "avcilar mikro bayi, avcılar mikro program, avcılar erp, avcılar crm, avcılar yazılım, mikro bayi avcılar",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/avcilar-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Avcılar Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/avcilar-mikro-bayi",
  description: "Avcılar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Avcılar",
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
    name: "Avcılar"
  },
  priceRange: "$$",
};

export default function AvcilarMikroBayi() {
  return <IlceLayout ilce="Avcılar" jsonLd={jsonLd} />;
}
