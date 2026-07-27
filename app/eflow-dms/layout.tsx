import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/eflow-dms`;

export const metadata: Metadata = {
  title: 'E-Flow DMS | Doküman Yönetim Sistemi ve Dijital Arşiv | Gökkuşağı Yazılım',
  description:
    'E-Flow DMS ile belge yönetimi, dijital arşivleme, sürüm ve erişim kontrolü. Kağıt süreçlerini dijitalleştirin, evraklarınıza her yerden ulaşın. Gökkuşağı Yazılım.',
  keywords:
    'E-Flow DMS, doküman yönetim sistemi, DMS, dijital arşiv, belge yönetimi, evrak yönetimi, döküman arşivleme',
  alternates: { canonical: url },
  openGraph: {
    title: 'E-Flow DMS | Doküman Yönetim Sistemi',
    description: 'Belge yönetimi, dijital arşivleme, sürüm ve erişim kontrolü.',
    url,
    type: 'website',
  },
};

export default function EflowDmsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
