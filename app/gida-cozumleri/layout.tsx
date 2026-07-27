import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/gida-cozumleri`;

export const metadata: Metadata = {
  title: 'Gıda Sektörü ERP Çözümleri | İzlenebilirlik ve Lot Takibi | Gökkuşağı Yazılım',
  description:
    'Gıda üretim ve ticaretine özel Mikro ERP: uçtan uca izlenebilirlik, parti/lot takibi, gıda güvenliği ve e-dönüşüm süreçleri. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'gıda ERP, gıda izlenebilirlik, lot takibi, parti takibi, gıda güvenliği yazılımı, Mikro ERP gıda, gıda sektörü çözümleri',
  alternates: { canonical: url },
  openGraph: {
    title: 'Gıda Sektörü ERP Çözümleri | İzlenebilirlik ve Lot Takibi',
    description:
      'Uçtan uca izlenebilirlik, parti/lot takibi ve gıda güvenliği için Mikro ERP çözümleri. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function GidaCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
