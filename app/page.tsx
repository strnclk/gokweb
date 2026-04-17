import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import CompaniesSection from '@/components/CompaniesSection';
import EFlowSection from '@/components/EFlowSection';
import ETransformationSection from '@/components/ETransformationSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import SEOSection from '@/components/SEOSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Anadolu Yakasi Mikro Bayii | ERP CRM Çözümleri | Gökkusagi Yazilim",
  description: "Anadolu Yakasi'nda resmi Mikro bayii. Mikro program sati, ERP hizmeti, CRM çözümleri, e-fatura entegrasyonu. Ataehir'den tüm Türkiye'ye hizmet.",
  keywords: "Anadolu yakasi mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataehir mikro bayii, Istanbul mikro bayii, e-fatura, e-defter, Mikro v3, Mikro 14, özel yazilim",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <CompaniesSection />
      <EFlowSection />
      <ETransformationSection />
      <TrustSection />
      <CTASection />
      <SEOSection />
      <Footer />
    </div>
  );
}
