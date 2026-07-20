import type { Metadata } from 'next';

const SITE = 'https://gokkusagiyazilim.com.tr';
const url = `${SITE}/crm-cozumleri`;

export const metadata: Metadata = {
  title: 'CRM Çözümleri | Mikro Entegre Müşteri İlişkileri Yönetimi | Gökkuşağı Yazılım',
  description:
    'Mikro ERP ile tam entegre CRM: müşteri, teklif, satış ve aktivite yönetimini tek panelde toplayın. Çift veri girişine son verin, satış süreçlerinizi otomatikleştirin. Resmi Mikro iş ortağı Gökkuşağı Yazılım.',
  keywords:
    'CRM çözümleri, Mikro CRM, müşteri ilişkileri yönetimi, satış yönetimi, teklif yönetimi, Mikro ERP entegrasyonu, CRM yazılımı',
  alternates: { canonical: url },
  openGraph: {
    title: 'CRM Çözümleri | Mikro Entegre Müşteri İlişkileri Yönetimi',
    description:
      'Müşteri, teklif, satış ve aktiviteleri tek panelde yönetin; Mikro ERP ile tam entegre çalışın. Gökkuşağı Yazılım.',
    url,
    type: 'website',
  },
};

export default function CrmCozumleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
