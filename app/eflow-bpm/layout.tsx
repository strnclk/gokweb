import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/eflow-bpm`;

export const metadata: Metadata = {
  title: 'E-Flow BPM | Kodsuz İş Akışı ve Süreç Yönetimi (BPM) | Gökkuşağı Yazılım',
  description:
    'E-Flow BPM ile sürükle-bırak iş akışı tasarımı, ERP entegrasyonu, mobil uygulama ve SaaS modeli. Süreçlerinizi kodsuz otomatikleştirin. Gökkuşağı Yazılım.',
  keywords:
    'E-Flow BPM, BPM, iş akışı, süreç otomasyonu, sürükle bırak, kodsuz, workflow, iş süreçleri yönetimi',
  alternates: { canonical: url },
  openGraph: {
    title: 'E-Flow BPM | Kodsuz İş Akışı ve Süreç Yönetimi',
    description: 'Sürükle-bırak iş akışı tasarımı, ERP entegrasyonu, mobil ve SaaS BPM çözümü.',
    url,
    type: 'website',
  },
};

export default function EflowBpmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
