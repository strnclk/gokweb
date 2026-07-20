import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/perakende-cozumleri`;

export const metadata: Metadata = {
  title: 'Perakende ve Hızlı Satış (POS) Çözümleri | Mikro ERP | Gökkuşağı Yazılım',
  description:
    'Perakende ve mağazalara özel Mikro ERP: hızlı satış (POS), çok şubeli stok, kampanya ve kasa yönetimi tek platformda. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'perakende ERP, hızlı satış, POS yazılımı, mağaza yönetimi, çok şubeli stok, kasa yönetimi, Mikro ERP perakende',
  alternates: { canonical: url },
  openGraph: {
    title: 'Perakende ve Hızlı Satış (POS) Çözümleri',
    description:
      'Hızlı satış (POS), çok şubeli stok, kampanya ve kasa yönetimi için Mikro ERP çözümleri. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function PerakendeCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
