'use client';

import { usePathname } from 'next/navigation';
import Breadcrumb, { Crumb } from './Breadcrumb';

// Site geneli breadcrumb'ı TEK yerden yönetir ve sayfa tepesinden SABİT bir
// offset'e (navbar altı, top-[88px]) konumlar. Böylece breadcrumb her sayfada
// tam olarak aynı yerdedir (dikey ortalanan hero içeriğinden bağımsız), şerit
// kullanılmaz (temalı arka plan üstünde), kaydırınca doğal olarak yukarı kayar.
//
// İlçe sayfaları (*-mikro-bayi) kendi breadcrumb'ını HeroSection'dan aynı
// konumda üretir; burada tekrar üretilmez. Blog yazıları ve mikro-tablo detay
// sayfaları kendi düzenlerini korur.

const HOME: Crumb = { label: 'Anasayfa', href: '/' };

// pathname (sondaki '/' hariç) -> son seviyelere kadar ara kırıntılar
const MAP: Record<string, Crumb[]> = {
  '/services': [{ label: 'Hizmetlerimiz' }],
  '/services/teknik-destek': [{ label: 'Hizmetlerimiz', href: '/services' }, { label: 'Teknik Destek ve Bakım' }],
  '/services/egitim': [{ label: 'Hizmetlerimiz', href: '/services' }, { label: 'Eğitim Hizmetleri' }],
  '/services/danismanlik': [{ label: 'Hizmetlerimiz', href: '/services' }, { label: 'Danışmanlık Hizmetleri' }],
  '/services/e-donusum-entegrasyonu': [{ label: 'Hizmetlerimiz', href: '/services' }, { label: 'E-Dönüşüm Entegrasyonu' }],
  '/services/mikro-erp-kurulumu': [{ label: 'Hizmetlerimiz', href: '/services' }, { label: 'Mikro ERP Kurulumu' }],
  '/services/ozel-yazilim-gelistirme': [{ label: 'Hizmetlerimiz', href: '/services' }, { label: 'Özel Yazılım Geliştirme' }],

  '/solutions': [{ label: 'Çözümler' }],
  '/vertical-solutions': [{ label: 'Çözümler', href: '/solutions' }, { label: 'Mikro Dikey Çözümler' }],

  '/sectoral-solutions': [{ label: 'Sektörel Çözümler' }],
  '/sectoral-solutions/solutions': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Çözüm Detayları' }],
  '/crm-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'CRM Çözümleri' }],
  '/gida-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Gıda' }],
  '/hr-ik': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'HR (İK) Çözümleri' }],
  '/insaat-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'İnşaat' }],
  '/lojistik-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Lojistik' }],
  '/mes-yonetim': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'MES Yönetim' }],
  '/otomotiv-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Otomotiv' }],
  '/perakende-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Perakende' }],
  '/saglik-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Sağlık' }],
  '/tekstil-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Tekstil' }],
  '/uretim-cozumleri': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'Üretim' }],
  '/wms-depo-yonetimi': [{ label: 'Sektörel Çözümler', href: '/sectoral-solutions' }, { label: 'WMS Depo Yönetimi' }],

  '/eflow': [{ label: 'E-Flow' }],
  '/eflow-bpm': [{ label: 'E-Flow', href: '/eflow' }, { label: 'E-Flow BPM' }],
  '/eflow-dms': [{ label: 'E-Flow', href: '/eflow' }, { label: 'E-Flow DMS' }],
  '/eflow-surecleri': [{ label: 'E-Flow', href: '/eflow' }, { label: 'E-Flow Süreçleri' }],
  '/eflow-butce-merkezi': [{ label: 'E-Flow', href: '/eflow' }, { label: 'Bütçe Merkezi' }],

  '/mikro-fly': [{ label: 'Mikro Fly' }],
  '/mikro-run': [{ label: 'Mikro Run' }],
  '/mikro-jump': [{ label: 'Mikro Jump' }],
  '/compare': [{ label: 'Ürünleri Karşılaştır' }],
  '/destek-baglantilari': [{ label: 'Destek Bağlantıları' }],

  '/custom-software': [{ label: 'Özel Yazılım' }],
  '/featured-works': [{ label: 'Referanslar' }],
  '/blog': [{ label: 'Blog' }],
  '/contact': [{ label: 'İletişim' }],
  '/gizlilik': [{ label: 'Gizlilik Politikası' }],
  '/kullanim': [{ label: 'Kullanım Şartları' }],
  '/cerezler': [{ label: 'Çerez Politikası' }],
};

// Koyu/renkli hero ile açılan sayfalar — breadcrumb açık renk (light) basılır.
const LIGHT_ROUTES = new Set(['/custom-software']);

export default function SiteBreadcrumb() {
  const pathname = usePathname();
  if (!pathname) return null;

  // Sondaki '/' varsa temizle (trailingSlash: true ile uyum)
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  // Mikro tablo LİSTE sayfası ortak breadcrumb taşır; detay sayfaları
  // (/mikro-tablolari/[slug]) kendi breadcrumb'ını üretir (TabloDetay), burada
  // tekrar üretilmez — aksi halde iki breadcrumb üst üste biner.
  const tail = key === '/mikro-tablolari' ? [{ label: 'Mikro Tabloları' }] : MAP[key];

  if (!tail) return null; // eşleşmeyen rota (anasayfa, ilçe, blog yazısı vb.)

  return (
    <div className="absolute left-0 top-[100px] w-full z-30 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pointer-events-auto inline-block">
          <Breadcrumb items={[HOME, ...tail]} className="justify-start" light={LIGHT_ROUTES.has(key)} />
        </div>
      </div>
    </div>
  );
}
