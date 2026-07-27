import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/vertical-solutions`;

export const metadata: Metadata = {
  title: 'Mikro Dikey Çözümler | Sektöre Özel ERP Çözümleri | Gökkuşağı Yazılım',
  description:
    'Her sektörün ihtiyacına özel Mikro dikey çözümler: hızlı satış, üretim, kalite, depo ve lojistik, B2B, restoran ve daha fazlası. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'Mikro dikey çözümler, sektörel ERP, dikey çözüm, Mikro sektörel, üretim ERP, perakende ERP, depo yönetimi',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mikro Dikey Çözümler | Sektöre Özel ERP',
    description: 'Hızlı satış, üretim, kalite, depo/lojistik, B2B ve restoran için sektörel Mikro çözümler.',
    url,
    type: 'website',
  },
};

export default function VerticalSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
