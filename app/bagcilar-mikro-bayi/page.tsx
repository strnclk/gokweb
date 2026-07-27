import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Bağcılar Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Bağcılar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "bagcilar mikro bayi, bağcılar mikro program, bağcılar erp, bağcılar crm, bağcılar yazılım, mikro bayi bağcılar",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/bagcilar-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Bağcılar Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/bagcilar-mikro-bayi",
  description: "Bağcılar'da Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bağcılar",
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
    name: "Bağcılar"
  },
  priceRange: "$$",
};

export default function BagcilarMikroBayi() {
  return <IlceLayout ilce="Bağcılar" jsonLd={jsonLd} />;
}
