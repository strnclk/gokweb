import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/sectoral-solutions`;

export const metadata: Metadata = {
  title: 'Sektörel Çözümler | İşletmenize Özel ERP ve Dijital Dönüşüm | Gökkuşağı Yazılım',
  description:
    'Sektörünüze özel ERP, e-dönüşüm ve yazılım çözümleri. İşletmenizin ihtiyaçlarına uygun dikey ve sektörel Mikro çözümleriyle verimliliğinizi artırın. Gökkuşağı Yazılım.',
  keywords:
    'sektörel çözümler, sektöre özel ERP, dijital dönüşüm, Mikro sektörel çözüm, sektörel yazılım',
  alternates: { canonical: url },
  openGraph: {
    title: 'Sektörel Çözümler | İşletmenize Özel ERP',
    description: 'Sektörünüze özel ERP, e-dönüşüm ve yazılım çözümleri.',
    url,
    type: 'website',
  },
};

export default function SectoralSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
