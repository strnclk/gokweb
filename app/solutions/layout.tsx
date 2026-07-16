import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/solutions`;

export const metadata: Metadata = {
  title: 'ERP Çözümleri | Hızlı Satış, Üretim, Depo, B2B ve Restoran | Gökkuşağı Yazılım',
  description:
    'Hızlı satış, üretim yönetimi, kalite, depo ve lojistik, B2B bayi, süreç yönetimi, raporlama ve restoran çözümleri. Mikro API ile güvenli entegrasyon. Resmi Mikro iş ortağı, Anadolu Yakası / İstanbul.',
  keywords:
    'ERP çözümleri, hızlı satış, üretim yönetimi, depo yönetimi, B2B bayi yönetimi, restoran yönetimi, Mikro entegrasyon, WMS, MRP',
  alternates: { canonical: url },
  openGraph: {
    title: 'ERP Çözümleri | Gökkuşağı Yazılım',
    description:
      'Hızlı satış, üretim, depo/lojistik, B2B, süreç, raporlama ve restoran çözümleri. Mikro API ile entegrasyon.',
    url,
    type: 'website',
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
