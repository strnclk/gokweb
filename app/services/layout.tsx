import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Mikro ERP Kurulumu, E-Dönüşüm ve Özel Yazılım | Gökkuşağı Yazılım',
  description:
    'Resmi Mikro iş ortağı olarak; Mikro ERP kurulumu, e-Dönüşüm entegrasyonu, özel yazılım geliştirme, danışmanlık, teknik destek ve eğitim hizmetleri sunuyoruz.',
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    title: 'Hizmetlerimiz | Gökkuşağı Yazılım',
    description:
      'Mikro ERP kurulumu, e-Dönüşüm entegrasyonu, özel yazılım, danışmanlık, teknik destek ve eğitim hizmetleri.',
    url: `${SITE}/services`,
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
