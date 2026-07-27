'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Hafif filtre adası — ağır tablo verisi taşımaz, hızlı hydrate olur.
// Tabloyu (sunucuda basılan statik #mikro-tablo) DOM üzerinden filtreler.
export default function TabloFiltre({
  toplam,
  moduller,
  modulSayilari,
}: {
  toplam: number;
  moduller: string[];
  modulSayilari: Record<string, number>;
}) {
  const router = useRouter();
  const [arama, setArama] = useState('');
  const [aktifModul, setAktifModul] = useState('all');
  const [gosterilen, setGosterilen] = useState(toplam);

  // Detay sayfasındaki breadcrumb'dan gelen ?modul=... ile ilgili modüle otomatik filtrele.
  // Statik export'ta useSearchParams yerine window.location kullanmak Suspense gerektirmez.
  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get('modul');
    if (m && moduller.includes(m)) {
      setAktifModul(m);
      document
        .getElementById('mikro-tablo-sarmal')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [moduller]);

  // Arama/sekme değişince statik tabloyu DOM üzerinden filtrele.
  useEffect(() => {
    const tablo = document.getElementById('mikro-tablo');
    if (!tablo) return;
    const q = arama.toLowerCase().trim();
    const satirlar = tablo.querySelectorAll<HTMLElement>('tbody tr[data-ara]');
    let n = 0;
    satirlar.forEach((r) => {
      const modulOk = aktifModul === 'all' || r.dataset.modul === aktifModul;
      const araOk = !q || (r.dataset.ara ?? '').includes(q);
      const goster = modulOk && araOk;
      r.hidden = !goster;
      if (goster) n++;
    });
    setGosterilen(n);
    const sarmal = document.getElementById('mikro-tablo-sarmal');
    const bos = document.getElementById('mikro-tablo-bos');
    if (sarmal) sarmal.hidden = n === 0;
    if (bos) bos.hidden = n !== 0;
  }, [arama, aktifModul]);

  // Tüm satır tıklanabilir (event delegation) — JS yokken hücredeki <a> linki çalışır.
  useEffect(() => {
    const tablo = document.getElementById('mikro-tablo');
    if (!tablo) return;
    const handler = (e: MouseEvent) => {
      // Yeni sekme / orta tık / kısayol tıklamaları doğal çalışsın.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const tr = (e.target as HTMLElement).closest('tr[data-slug]');
      if (!tr || !tablo.contains(tr)) return;
      const slug = (tr as HTMLElement).dataset.slug;
      if (!slug) return;
      e.preventDefault();
      router.push(`/mikro-tablolari/${slug}`);
    };
    tablo.addEventListener('click', handler);
    return () => tablo.removeEventListener('click', handler);
  }, [router]);

  const sekmeClass = (aktif: boolean) =>
    `inline-flex items-center gap-1.5 px-[17px] py-2.5 border-[1.5px] rounded-xl text-sm font-semibold whitespace-nowrap transition ${
      aktif
        ? 'bg-rose-500 border-rose-500 text-white'
        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
    }`;

  return (
    <>
      {/* Arama */}
      <div className="relative max-w-[620px] mx-auto mt-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="absolute left-[19px] top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4-4" />
        </svg>
        <input
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          type="text"
          placeholder="Tablo ara: Stoklar, Cari Hesap, Fiş..."
          className="w-full py-4 pl-[52px] pr-5 border-[1.5px] border-gray-200 rounded-2xl text-base bg-gray-50 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition"
        />
      </div>

      {/* Modül sekmeleri */}
      <div className="flex gap-2.5 flex-wrap justify-center mt-14 mb-1.5">
        <button onClick={() => setAktifModul('all')} className={sekmeClass(aktifModul === 'all')}>
          Tümü <span className="text-xs opacity-70 font-medium">{toplam}</span>
        </button>
        {moduller.map((m) => (
          <button key={m} onClick={() => setAktifModul(m)} className={sekmeClass(aktifModul === m)}>
            {m} <span className="text-xs opacity-70 font-medium">{modulSayilari[m]}</span>
          </button>
        ))}
      </div>

      <div className="text-center text-gray-500 text-[13.5px] my-4">
        {gosterilen} tablo gösteriliyor
      </div>
    </>
  );
}
