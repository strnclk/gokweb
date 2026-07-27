import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/insaat-cozumleri`;

export const metadata: Metadata = {
  title: 'İnşaat Sektörü ERP Çözümleri | Proje, Hakediş ve Maliyet Takibi | Gökkuşağı Yazılım',
  description:
    'İnşaat ve taahhüt firmalarına özel Mikro ERP: proje bazlı maliyet, hakediş, taşeron ve malzeme yönetimi tek platformda. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'inşaat ERP, proje maliyet takibi, hakediş, taşeron yönetimi, inşaat muhasebe, Mikro ERP inşaat, taahhüt yazılımı',
  alternates: { canonical: url },
  openGraph: {
    title: 'İnşaat Sektörü ERP Çözümleri | Proje, Hakediş ve Maliyet Takibi',
    description:
      'Proje bazlı maliyet, hakediş, taşeron ve malzeme yönetimini Mikro ERP ile tek platformda yönetin. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function InsaatCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
