import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});

export const metadata: Metadata = {
  title: "Anadolu Yakası Mikro Bayi | ERP CRM Çözümleri | Gökkuşağı Yazılım",
  description: "Anadolu Yakası'nda resmi Mikro bayi. Mikro program satışı, ERP hizmeti, CRM çözümleri, e-fatura entegrasyonu. Ataşehir'den tüm Türkiye'ye hizmet.",
  keywords: "Anadolu yakası mikro bayi, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataşehir mikro bayi, İstanbul mikro bayi, e-fatura, e-defter, Mikro v3, Mikro 14, özel yazılım",
};

export default function Home() {
  return (
    <div className="relative" style={{ backgroundColor: '#ffffff', backgroundImage: 'url(/rainbow-lines.svg)', backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ImageCarousel />
        <AboutSection />
        <IndustryScenariosSection />
        <TrustSection />
        <SEOSection />
        <Footer />
      </div>
    </div>
  );
}
