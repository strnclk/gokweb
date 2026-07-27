import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/lojistik-cozumleri`;

export const metadata: Metadata = {
  title: 'Lojistik ve Depo Yönetimi (WMS) Çözümleri | Mikro ERP | Gökkuşağı Yazılım',
  description:
    'Lojistik ve depo operasyonlarına özel Mikro ERP + WMS: tüm giriş/çıkış hareketleri, adresleme, sevkiyat ve stok kontrolü tek platformda. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'lojistik ERP, depo yönetimi, WMS, depo yazılımı, sevkiyat takibi, stok yönetimi, Mikro ERP lojistik',
  alternates: { canonical: url },
  openGraph: {
    title: 'Lojistik ve Depo Yönetimi (WMS) Çözümleri',
    description:
      'Tüm depo giriş/çıkış hareketleri, adresleme, sevkiyat ve stok kontrolü için Mikro ERP + WMS. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function LojistikCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
