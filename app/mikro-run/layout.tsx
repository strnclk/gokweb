import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/mikro-run`;

export const metadata: Metadata = {
  title: 'Mikro RUN | Esnaf ve Mikro İşletmeler İçin e-Dönüşüm Paketi | Gökkuşağı Yazılım',
  description:
    'Mikro RUN; esnaf, serbest meslek sahipleri ve mikro işletmeler için ideal e-Dönüşüm paketi. e-Fatura kesme, kolay kullanım ve anahtar teslim çözümler. Resmi Mikro bayisi Gökkuşağı Yazılım.',
  keywords:
    'Mikro RUN, Mikro Run fiyat, esnaf e-fatura, mikro işletme e-dönüşüm, e-fatura programı, Mikro RUN e-dönüşüm, Mikro bayi',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mikro RUN - Esnaf ve Mikro İşletmeler İçin e-Dönüşüm Paketi',
    description:
      'e-Fatura, kolay kullanım ve anahtar teslim e-Dönüşüm çözümleri. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function MikroRunLayout({ children }: { children: React.ReactNode }) {
  return children;
}
