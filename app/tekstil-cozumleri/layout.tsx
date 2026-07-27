import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/tekstil-cozumleri`;

export const metadata: Metadata = {
  title: 'Tekstil ve Mağazacılık ERP Çözümleri | Mikro Entegre | Gökkuşağı Yazılım',
  description:
    'Tekstil üretim ve mağazacılığına özel Mikro ERP: renk-beden varyant, koleksiyon, mağaza ve stok yönetimi tek platformda. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'tekstil ERP, mağazacılık yazılımı, renk beden, koleksiyon yönetimi, tekstil stok, Mikro ERP tekstil',
  alternates: { canonical: url },
  openGraph: {
    title: 'Tekstil ve Mağazacılık ERP Çözümleri',
    description:
      'Renk-beden varyant, koleksiyon, mağaza ve stok yönetimini Mikro ERP ile tek platformda yönetin. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function TekstilCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
