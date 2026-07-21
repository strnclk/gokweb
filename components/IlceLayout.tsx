import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import IlceSEOContent from '@/components/IlceSEOContent';
import IlceIletisim from '@/components/IlceIletisim';
import dynamic from 'next/dynamic';

const IndustryScenariosSection = dynamic(() => import('@/components/IndustryScenariosSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});
const TrustSection = dynamic(() => import('@/components/TrustSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

// İlçe (*-mikro-bayi) sayfalarının ORTAK gövdesi. Diziliş tek yerde tanımlıdır;
// 39 ilçe sayfası da bunu çağırır → bölüm ekle/çıkar yalnızca burada yapılır.
//
// Ana sayfayla birebir tekrar eden bölümler (ImageCarousel, AboutSection,
// SEOSection, CTASection) buradan çıkarıldı; yerine ilçeye özgü IlceSEOContent
// ve IlceIletisim (konum + iletişim) kondu. metadata ve JSON-LD sayfa-özel
// kaldığı için her page.tsx kendi verisini taşır ve jsonLd'yi buraya geçirir.
export default function IlceLayout({
  ilce,
  jsonLd,
}: {
  ilce: string;
  jsonLd: object;
}) {
  return (
    <div
      className="relative"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: 'url(/ilce-wash.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <div className="relative z-10 bg-white/40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <HeroSection district={ilce} />
        <TrustSection />
        <IndustryScenariosSection />
        <IlceSEOContent ilce={ilce} />
        <IlceIletisim ilce={ilce} />
        <Footer />
      </div>
    </div>
  );
}
