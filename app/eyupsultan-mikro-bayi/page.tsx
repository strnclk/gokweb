import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Eyüpsultan Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Eyüpsultan'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "eyupsultan mikro bayi, eyüpsultan mikro program, eyüpsultan erp, eyüpsultan crm, eyüpsultan yazılım, mikro bayi eyüpsultan",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/eyupsultan-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Eyüpsultan Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/eyupsultan-mikro-bayi",
  description: "Eyüpsultan'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eyüpsultan",
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
    name: "Eyüpsultan"
  },
  priceRange: "$$",
};

export default function EyupsultanMikroBayi() {
  return <IlceLayout ilce="Eyüpsultan" jsonLd={jsonLd} />;
}
