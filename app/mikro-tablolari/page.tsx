import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTabloOzetListesi } from '@/lib/mikro-tablolari';
import MikroHero from './MikroHero';
import TabloFiltre from './TabloFiltre';
import TabloStatik from './TabloStatik';

export const metadata: Metadata = {
  title: 'Mikro Tablolar | Mikro V16 Tablo Kütüphanesi | Gökkuşağı Yazılım',
  description:
    'Mikro V16 veritabanı tablolarını cari, stok, sipariş, muhasebe ve üretim modüllerine göre inceleyin. 438 tablo, alan yapıları ve entegrasyon desteği.',
  alternates: { canonical: 'https://gokkusagiyazilim.com.tr/mikro-tablolari' },
};

// Çekirdek modüller — sekme sıralamasında öne alınır.
const CORE = ['Stok', 'Cari', 'Muhasebe/Finans', 'Sipariş', 'Üretim', 'Banka/Kasa', 'İK/Bordro'];

export default function MikroTablolariPage() {
  const tablolar = getTabloOzetListesi();

  // --- İstatistikler ve modüller sunucuda hesaplanır ---
  const toplamAlanNum = tablolar.reduce((s, t) => s + t.alan_sayisi, 0);
  // Türkçe binlik ayıracı (nokta): 22000 → "22.000"
  const toplamAlan = toplamAlanNum.toLocaleString('tr-TR');

  // Modül başına sayı (düz nesne — prop olarak serileştirilebilir)
  const modulSayilari: Record<string, number> = {};
  for (const t of tablolar) modulSayilari[t.modul] = (modulSayilari[t.modul] ?? 0) + 1;

  // Modül listesi: çekirdekler önce, "Diğer" sayısı yüksek olsa da en sonda, gerisi sayıya göre.
  const moduller = [...new Set(tablolar.map((t) => t.modul))].sort((a, b) => {
    const aDiger = a === 'Diğer' ? 1 : 0;
    const bDiger = b === 'Diğer' ? 1 : 0;
    if (aDiger !== bDiger) return aDiger - bDiger;
    const ca = CORE.includes(a) ? 0 : 1;
    const cb = CORE.includes(b) ? 0 : 1;
    if (ca !== cb) return ca - cb;
    return modulSayilari[b] - modulSayilari[a];
  });

  // Statik tablo, tablo_no'ya göre sıralı basılır (filtre yalnızca gizler, sırayı bozmaz).
  const sirali = [...tablolar].sort((a, b) => a.tablo_no - b.tablo_no);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-[1180px] mx-auto px-5 pb-16 text-gray-900">
        {/* Hafif hero adası — ana paketle hemen hydrate olur, daktilo anında başlar */}
        <MikroHero
          tabloSayisi={tablolar.length}
          toplamAlan={toplamAlan}
          modulSayisi={moduller.length}
        />

        {/* Hafif filtre (arama + sekmeler + sayaç) — tabloyu DOM üzerinden filtreler */}
        <TabloFiltre toplam={tablolar.length} moduller={moduller} modulSayilari={modulSayilari} />

        {/* Ağır tablo SUNUCUDA statik HTML olarak basılır: hydrate edilmez (hız),
            satırlar HTML'de hazır gelir (SEO). */}
        <TabloStatik tablolar={sirali} />

        {/* CTA */}
        <div className="mt-12 [background:linear-gradient(120deg,#f3f5ff,#faf3ff)] border-[1.5px] border-[#e9e3ff] rounded-[20px] p-8 text-center">
          <h3 className="text-[23px] font-extrabold mb-2">Mikro entegrasyonu mu yapacaksınız?</h3>
          <p className="text-gray-500 mb-5 max-w-[520px] mx-auto">
            20+ yıllık Mikro ERP deneyimimizle özel entegrasyon, raporlama ve veri aktarımı
            projelerinizde yanınızdayız.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl hover:opacity-90 transition"
          >
            Ücretsiz Teklif Al
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-[17px] h-[17px]">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
