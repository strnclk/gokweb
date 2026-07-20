import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/uretim-cozumleri`;

export const metadata: Metadata = {
  title: 'Üretim ve MES Çözümleri | Saha Veri, Makine İzleme ve OEE | Gökkuşağı Yazılım',
  description:
    'Üretim firmalarına özel Mikro ERP + MES: sahadan veri toplama, anlık makine izleme, OEE ve verimlilik raporlarıyla üretiminizi doğru yönetin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'üretim ERP, MES, üretim takibi, makine izleme, OEE, verimlilik, reçete, iş emri, Mikro ERP üretim',
  alternates: { canonical: url },
  openGraph: {
    title: 'Üretim ve MES Çözümleri | Saha Veri, Makine İzleme ve OEE',
    description:
      'Sahadan veri toplama, anlık makine izleme, OEE ve verimlilik raporlarıyla doğru üretim yönetimi. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function UretimCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
