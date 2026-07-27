import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/blog`;

export const metadata: Metadata = {
  title: 'Blog | ERP ve Dijital Dönüşüm Rehberi | Gökkuşağı Yazılım',
  description:
    'ERP sistemleri, e-dönüşüm, Mikro ürünleri ve dijital dönüşüm üzerine kapsamlı rehberler, güncel yazılar ve ipuçları. İşletmenizi dijitalleştirin. Gökkuşağı Yazılım blog.',
  keywords:
    'ERP blog, dijital dönüşüm, e-fatura, Mikro ERP, e-dönüşüm rehberi, ERP yazıları, KOBİ dijitalleşme',
  alternates: { canonical: url },
  openGraph: {
    title: 'Blog | ERP ve Dijital Dönüşüm Rehberi',
    description: 'ERP, e-dönüşüm ve Mikro ürünleri üzerine kapsamlı rehberler ve güncel yazılar.',
    url,
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
