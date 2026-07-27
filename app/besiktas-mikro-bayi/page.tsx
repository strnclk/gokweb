import { Metadata } from "next";
import IlceLayout from "@/components/IlceLayout";

export const metadata: Metadata = {
  title: "Beşiktaş Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Beşiktaş'ta Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "besiktas mikro bayi, beşiktaş mikro program, beşiktaş erp, beşiktaş crm, beşiktaş yazılım, mikro bayi beşiktaş",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/besiktas-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Beşiktaş Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/besiktas-mikro-bayi",
  description: "Beşiktaş'ta Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beşiktaş",
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
    name: "Beşiktaş"
  },
  priceRange: "$$",
};

export default function BesiktasMikroBayi() {
  return <IlceLayout ilce="Beşiktaş" jsonLd={jsonLd} />;
}
