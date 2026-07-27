import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/mikro-fly`;

export const metadata: Metadata = {
  title: 'Mikro FLY | Büyük İşletmeler İçin Güçlü ERP Yazılımı | Gökkuşağı Yazılım',
  description:
    'Mikro FLY; büyük işletmeler için tasarlanmış güçlü ticari yazılım ve ERP çözümü. Tüm operasyonlarınızı tek platformda kârlı ve verimli yönetin. Resmi Mikro bayisi Gökkuşağı Yazılım.',
  keywords:
    'Mikro FLY, Mikro Fly fiyat, büyük işletme ERP, kurumsal ERP yazılımı, Mikro ERP programı, ticari yazılım, Mikro bayi',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mikro FLY - Büyük İşletmeler İçin Güçlü ERP Yazılımı',
    description:
      'Tüm operasyonlarınızı tek platformda kârlı ve verimli yönetin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function MikroFlyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
