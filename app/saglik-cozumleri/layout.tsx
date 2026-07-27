import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/saglik-cozumleri`;

export const metadata: Metadata = {
  title: 'Sağlık ve Medikal ERP Çözümleri | ÜTS Entegrasyonu ve Lot Takibi | Gökkuşağı Yazılım',
  description:
    'Medikal ve sağlık firmalarına özel Mikro ERP: ÜTS bildirimleri, steril lot/UTS takibi ve stok yönetimini otomatikleştirin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'sağlık ERP, medikal yazılım, ÜTS entegrasyonu, lot takibi, medikal stok, Mikro ERP sağlık, medikal takip',
  alternates: { canonical: url },
  openGraph: {
    title: 'Sağlık ve Medikal ERP Çözümleri | ÜTS Entegrasyonu',
    description:
      'ÜTS bildirimleri, steril lot takibi ve medikal stok yönetimini Mikro ERP ile otomatikleştirin. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function SaglikCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
