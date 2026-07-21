import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Kadıköy Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Kadıköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "kadikoy mikro bayi, kadıköy mikro program, kadıköy erp, kadıköy crm, kadıköy yazılım, mikro bayi kadıköy",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/kadikoy-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Kadıköy Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/kadikoy-mikro-bayi",
  description: "Kadıköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kadıköy",
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
    name: "Kadıköy"
  },
  priceRange: "$$",
};

export default function KadikoyMikroBayi() {
  return <IlceLayout ilce="Kadıköy" jsonLd={jsonLd} />;
}
