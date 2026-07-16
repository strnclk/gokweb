import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/compare`;

export const metadata: Metadata = {
  title: 'Mikro Ürün Karşılaştırma | Size Uygun ERP Çözümünü Bulun | Gökkuşağı Yazılım',
  description:
    '3 soruda işletmenize en uygun Mikro çözümünü bulun. Mikro Run, Jump ve Fly karşılaştırması; özellik ve ihtiyaç bazlı akıllı öneri. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'Mikro karşılaştırma, Mikro Run Jump Fly, ERP karşılaştırma, hangi Mikro paketi, ERP seçimi, çözüm danışmanı',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mikro Ürün Karşılaştırma | Size Uygun ERP',
    description: '3 soruda işletmenize en uygun Mikro çözümünü bulun. Run, Jump ve Fly karşılaştırması.',
    url,
    type: 'website',
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
