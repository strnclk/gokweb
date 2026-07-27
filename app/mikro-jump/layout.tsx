import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/mikro-jump`;

export const metadata: Metadata = {
  title: 'Mikro JUMP | KOBİ\'ler İçin Sektörel ERP Çözümü | Gökkuşağı Yazılım',
  description:
    'Mikro JUMP ile KOBİ\'nizi rekabette öne çıkarın. Sektöre özel çözümler, e-Dönüşüm ve tüm iş süreçlerini tek platformda yönetin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'Mikro JUMP, Mikro Jump fiyat, KOBİ ERP, sektörel ERP çözümleri, Mikro ERP programı, KOBİ iş yönetimi, Mikro bayi',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mikro JUMP - KOBİ\'ler İçin Sektörel ERP Çözümü',
    description:
      'Sektöre özel çözümler ve tek platformda iş yönetimi ile KOBİ\'nizi rekabette öne çıkarın. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function MikroJumpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
