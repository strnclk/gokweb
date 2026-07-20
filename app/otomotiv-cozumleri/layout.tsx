import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/otomotiv-cozumleri`;

export const metadata: Metadata = {
  title: 'Otomotiv ve Teknik Servis ERP Çözümleri | Mikro Entegre | Gökkuşağı Yazılım',
  description:
    'Otomotiv ve teknik servisler için Mikro ERP: servis yönetimi, iş emri, yedek parça ve stok takibi tek platformda. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'otomotiv ERP, teknik servis yazılımı, servis yönetimi, iş emri, yedek parça takibi, Mikro ERP otomotiv',
  alternates: { canonical: url },
  openGraph: {
    title: 'Otomotiv ve Teknik Servis ERP Çözümleri',
    description:
      'Servis yönetimi, iş emri, yedek parça ve stok takibini Mikro ERP ile tek platformda yönetin. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function OtomotivCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
