import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IlceSEOContent from "@/components/IlceSEOContent";
import dynamic from 'next/dynamic';

const ImageCarousel = dynamic(() => import('@/components/ImageCarousel'), {
  loading: () => <div className="h-[600px] animate-pulse bg-gray-100" />
});
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});
const IndustryScenariosSection = dynamic(() => import('@/components/IndustryScenariosSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});
const TrustSection = dynamic(() => import('@/components/TrustSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});
const CTASection = dynamic(() => import('@/components/CTASection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});
const SEOSection = dynamic(() => import('@/components/SEOSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});

export const metadata: Metadata = {
  title: "Bakırköy Mikro Bayi | Gökkuşağı Yazılım - ERP ve CRM Çözümleri",
  description: "Bakırköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri. Ücretsiz demo talep edin.",
  keywords: "bakirkoy mikro bayi, bakırköy mikro program, bakırköy erp, bakırköy crm, bakırköy yazılım, mikro bayi bakırköy",
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr/bakirkoy-mikro-bayi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık - Bakırköy Mikro Bayi",
  url: "https://gokkusagiyazilim.com.tr/bakirkoy-mikro-bayi",
  description: "Bakırköy'de Mikro program, ERP ve CRM çözümleri. Resmi Mikro bayi olarak satış, kurulum, eğitim ve destek hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bakırköy",
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
    name: "Bakırköy"
  },
  priceRange: "$$",
};

export default function BakirkoyMikroBayi() {
  return (
    <div className="relative" style={{ backgroundColor: '#ffffff', backgroundImage: 'url(/ilce-wash.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
      <div className="relative z-10 bg-white/40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <HeroSection district="Bakırköy" />
        <ImageCarousel />
        <AboutSection />
        <IndustryScenariosSection />
        <TrustSection />
        <CTASection />
        <SEOSection />
        <IlceSEOContent ilce="Bakırköy" />
        <Footer />
      </div>
    </div>
  );
}
