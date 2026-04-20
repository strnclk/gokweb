import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

const ProductShowcase = dynamic(() => import('@/components/ProductShowcase'), { 
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});
const IndustryScenariosSection = dynamic(() => import('@/components/IndustryScenariosSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});
const ETransformationSection = dynamic(() => import('@/components/ETransformationSection'), {
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
  title: "Anadolu Yakası Mikro Bayii | ERP CRM Çözümleri | Gökkuşağı Yazılım",
  description: "Anadolu Yakası'nda resmi Mikro bayii. Mikro program satışı, ERP hizmeti, CRM çözümleri, e-fatura entegrasyonu. Ataşehir'den tüm Türkiye'ye hizmet.",
  keywords: "Anadolu yakası mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataşehir mikro bayii, İstanbul mikro bayii, e-fatura, e-defter, Mikro v3, Mikro 14, özel yazılım",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <IndustryScenariosSection />
      <ETransformationSection />
      <TrustSection />
      <CTASection />
      <SEOSection />
      <Footer />
    </div>
  );
}
