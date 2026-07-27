import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Sarıyer Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Sarıyer'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "sariyer mikro bayi, sarıyer mikro program, sarıyer erp, sarıyer crm, sarıyer yazılım, mikro bayi sarıyer",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/sariyer-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Sarıyer Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/sariyer-mikro-bayi",
  description: "Sarıyer'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarıyer",
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
    name: "Sarıyer"
  },
  priceRange: "$$",
};

export default function SariyerMikroBayi() {
  return <IlceLayout ilce="Sarıyer" jsonLd={jsonLd} />;
}
