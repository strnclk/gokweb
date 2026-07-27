import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/mes-yonetim`;

export const metadata: Metadata = {
  title: 'MES Yönetim | Üretim Yürütme ve Saha Veri Toplama Sistemi | Gökkuşağı Yazılım',
  description:
    'Mikro entegre MES: sahadan anlık veri toplama, makine izleme, OEE ve verimlilik raporlaması ile üretiminizi kayıpsız yönetin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'MES, üretim yürütme sistemi, saha veri toplama, OEE, makine izleme, üretim takibi, Mikro ERP MES',
  alternates: { canonical: url },
  openGraph: {
    title: 'MES Yönetim | Üretim Yürütme ve Saha Veri Toplama Sistemi',
    description:
      'Sahadan anlık veri, makine izleme, OEE ve verimlilik raporlamasıyla kayıpsız üretim. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function MesYonetimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
