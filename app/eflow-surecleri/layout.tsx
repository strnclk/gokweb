import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/eflow-surecleri`;

const ogImage = `${SITE}/og-image.png`;

export const metadata: Metadata = {
  title: 'E-Flow Süreçleri | Satın Alma ve Fatura Onay | Gökkuşağı Yazılım',
  description:
    'E-Flow ile satın alma, fatura onay, izin yönetimi, masraf ve daha birçok iş sürecinizi kodsuz şekilde otomatikleştirin. ERP entegrasyonu ve mobil onay akışları.',
  keywords:
    'E-Flow süreçleri, satın alma süreci, fatura onay süreci, e-fatura onay, izin yönetimi süreci, masraf yönetimi, iş akış otomasyonu, Logo entegrasyonu',
  alternates: { canonical: url },
  // Not: metadata sığ birleşir; burada openGraph tanımlandığı an root layout'un
  // openGraph'ı tamamen ezilir. Bu yüzden images/siteName/locale burada da
  // yeniden verilmek zorunda, yoksa sayfa og görselsiz kalır.
  openGraph: {
    title: 'E-Flow Süreçleri | İş Akışı ve Süreç Otomasyonları',
    description:
      'Satın alma, fatura onay, İK ve diğer kritik iş süreçlerinizi E-Flow ile dijitalleştirin.',
    url,
    siteName: 'Gökkuşağı Yazılım',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'E-Flow Süreçleri - Satın Alma, Fatura Onay ve İK Akışları',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Flow Süreçleri | İş Akışı ve Süreç Otomasyonları',
    description: 'Satın alma, fatura onay, İK ve masraf süreçlerinizi E-Flow ile dijitalleştirin.',
    images: [ogImage],
  },
};

export default function EflowSurecleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
