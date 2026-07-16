import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/featured-works`;

export const metadata: Metadata = {
  title: 'Öne Çıkan Çalışmalarımız | Referans Projeler ve Başarı Hikayeleri | Gökkuşağı Yazılım',
  description:
    'Finansal yönetim, nakit akışı ve raporlama alanında gerçekleştirdiğimiz başarılı ERP projelerimiz ve referanslarımız. 20+ yıl deneyim, 500+ tamamlanan proje. Gökkuşağı Yazılım.',
  keywords:
    'referanslar, öne çıkan çalışmalar, ERP projeleri, başarı hikayeleri, Gökkuşağı Yazılım referans, finansal yönetim projeleri',
  alternates: { canonical: url },
  openGraph: {
    title: 'Öne Çıkan Çalışmalarımız | Referans Projeler',
    description: 'Finansal yönetim ve raporlama alanındaki başarılı ERP projelerimiz. 500+ proje.',
    url,
    type: 'website',
  },
};

export default function FeaturedWorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
