import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Zeytinburnu Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Zeytinburnu'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "zeytinburnu mikro bayi, zeytinburnu mikro program, zeytinburnu erp, zeytinburnu crm, zeytinburnu yazılım, mikro bayi zeytinburnu",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/zeytinburnu-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Zeytinburnu Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/zeytinburnu-mikro-bayi",
  description: "Zeytinburnu'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zeytinburnu",
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
    name: "Zeytinburnu"
  },
  priceRange: "$$",
};

export default function ZeytinburnuMikroBayi() {
  return <IlceLayout ilce="Zeytinburnu" jsonLd={jsonLd} />;
}
