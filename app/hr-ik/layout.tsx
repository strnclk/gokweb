import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/hr-ik`;

export const metadata: Metadata = {
  title: 'HR / İK Çözümleri | Mikro Entegre Personel ve Puantaj Yönetimi | Gökkuşağı Yazılım',
  description:
    'İnsan kaynakları için Mikro entegre çözümler: personel, puantaj, izin ve bordro süreçlerini hatasız yönetin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'İK çözümleri, HR yazılımı, personel yönetimi, puantaj, bordro, insan kaynakları, Mikro ERP İK entegrasyonu',
  alternates: { canonical: url },
  openGraph: {
    title: 'HR / İK Çözümleri | Mikro Entegre Personel ve Puantaj Yönetimi',
    description:
      'Personel, puantaj, izin ve bordro süreçlerini Mikro ile entegre, hatasız yönetin. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function HrIkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
