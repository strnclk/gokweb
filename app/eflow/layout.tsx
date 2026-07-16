import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/eflow`;

export const metadata: Metadata = {
  title: 'E-Flow | İş Süreçleri Otomasyonu ve Dijital Dönüşüm Platformu | Gökkuşağı Yazılım',
  description:
    'E-Flow ile kodsuz iş akışı otomasyonu, ERP entegrasyonu, mobil ve SaaS iş süreçleri yönetimi. Süreçlerinizi hızlandırın. Resmi çözüm ortağı Gökkuşağı Yazılım.',
  keywords:
    'E-Flow, iş akışı otomasyonu, BPM, süreç yönetimi, dijital dönüşüm, ERP entegrasyonu, kodsuz otomasyon',
  alternates: { canonical: url },
  openGraph: {
    title: 'E-Flow | İş Süreçleri Otomasyonu Platformu',
    description: 'Kodsuz iş akışı otomasyonu, ERP entegrasyonu, mobil ve SaaS süreç yönetimi.',
    url,
    type: 'website',
  },
};

export default function EflowLayout({ children }: { children: React.ReactNode }) {
  return children;
}
