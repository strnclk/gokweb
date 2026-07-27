'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const IFADELER = ['Bilgi Merkezi', 'Tablo Kütüphanesi', 'Entegrasyon Rehberi', 'SQL Referansı'];

// Hafif hero adası — ağır tablo verisi taşımaz, ana paketle birlikte hemen
// hydrate olur. Böylece daktilo, ana sayfadaki HeroSection gibi anında başlar.
export default function MikroHero({
  tabloSayisi,
  toplamAlan,
  modulSayisi,
}: {
  tabloSayisi: number;
  toplamAlan: string;
  modulSayisi: number;
}) {
  // Ana sayfadaki HeroSection ile aynı desen: yazar, bekler, siler, sıradaki
  // ifadeye geçer. İlk ifade BAŞLANGIÇ değeri olarak verilir; böylece statik
  // HTML'de anında görünür ve daktilo, sayfanın hydrate hızından bağımsız olarak
  // (ağır tablo sayfasında bile) gecikmeden başlamış gibi durur — ana sayfayla
  // aynı hız hissi. İlk turdan sonra bu ifade de normal şekilde harf harf yazılır.
  const [yazilan, setYazilan] = useState(IFADELER[0]);
  const [ifadeIndex, setIfadeIndex] = useState(0);
  const [siliniyor, setSiliniyor] = useState(false);

  useEffect(() => {
    const tam = IFADELER[ifadeIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!siliniyor) {
      if (yazilan.length < tam.length) {
        t = setTimeout(() => setYazilan(tam.slice(0, yazilan.length + 1)), 80);
      } else {
        t = setTimeout(() => setSiliniyor(true), 2000);
      }
    } else {
      if (yazilan.length > 0) {
        t = setTimeout(() => setYazilan(yazilan.slice(0, -1)), 50);
      } else {
        setSiliniyor(false);
        setIfadeIndex((i) => (i + 1) % IFADELER.length);
      }
    }
    return () => clearTimeout(t);
  }, [yazilan, siliniyor, ifadeIndex]);

  return (
    <div className="text-center pt-28 [background:radial-gradient(900px_420px_at_50%_0,rgba(147,51,234,0.08),transparent_70%)]">
      <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 font-semibold text-[13px] px-4 py-1.5 rounded-full mb-5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[15px] h-[15px]">
          <path d="M13 2L3 14h9l-1 8 10-12h-9z" />
        </svg>
        Mikro V16 · Teknik Dokümantasyon
      </span>
      <h1
        className="animate-fade-up text-[40px] md:text-[56px] font-extrabold leading-tight tracking-tight min-h-[2.2em]"
        style={{ animationDelay: '0.1s' }}
      >
        Mikro Tablolar
        <br />
        <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          {yazilan}
        </span>
        <span
          aria-hidden
          className="inline-block w-[3px] h-[0.8em] ml-[3px] bg-purple-600 rounded-sm animate-pulse align-middle"
        />
      </h1>
      <p className="text-gray-500 text-[16.5px] max-w-[620px] mx-auto mt-4 leading-relaxed">
        Mikro V16 veritabanı tablolarını modüllere göre keşfedin. Alan yapıları, ilişkiler ve
        entegrasyon detaylarıyla {tabloSayisi} tablo tek noktada.
      </p>
      <div className="flex gap-9 justify-center mt-6 flex-wrap">
        <div>
          <b className="block text-[26px] font-extrabold leading-none">{tabloSayisi}</b>
          <span className="text-[13px] text-gray-500">Tablo</span>
        </div>
        <div>
          <b className="block text-[26px] font-extrabold leading-none">{toplamAlan}</b>
          <span className="text-[13px] text-gray-500">Alan</span>
        </div>
        <div>
          <b className="block text-[26px] font-extrabold leading-none">{modulSayisi}</b>
          <span className="text-[13px] text-gray-500">Modül</span>
        </div>
      </div>
    </div>
  );
}
