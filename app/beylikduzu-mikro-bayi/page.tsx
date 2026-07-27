import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Beylikdüzü Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Beylikdüzü'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "beylikdüzü mikro bayi, beylikdüzü mikro program, beylikdüzü erp, beylikdüzü crm, beylikdüzü yazılım, mikro bayi beylikdüzü",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/beylikduzu-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Beylikdüzü Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/beylikduzu-mikro-bayi",
  description: "Beylikdüzü'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beylikdüzü",
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
    name: "Beylikdüzü"
  },
  priceRange: "$$",
};

export default function BeylikduzuMikroBayi() {
  return <IlceLayout ilce="Beylikdüzü" jsonLd={jsonLd} />;
}
