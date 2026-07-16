'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// Kullanıcı sayfada aşağı indikçe görünen, tıklanınca sayfanın başına
// yumuşak geçişle dönen "yukarı çık" butonu. Global olarak tüm sayfalarda
// çalışır (layout içinde bir kez render edilir).
export default function ScrollToTop() {
  const [gorunur, setGorunur] = useState(false);

  useEffect(() => {
    const kontrol = () => setGorunur(window.scrollY > 400);
    kontrol();
    window.addEventListener('scroll', kontrol, { passive: true });
    return () => window.removeEventListener('scroll', kontrol);
  }, []);

  const yukariCik = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={yukariCik}
      aria-label="Sayfanın başına dön"
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 text-gray-500 border border-gray-200 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-800 ${
        gorunur ? 'opacity-60 scale-100 pointer-events-auto hover:opacity-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
