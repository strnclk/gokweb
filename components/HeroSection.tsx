'use client';

import { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GravityParticles = lazy(() => import('./GravityParticles'));

export default function HeroSection() {
  const router = useRouter();

  const handleTeklifAlClick = () => {
    router.push('/contact');
  };

  const handleIletisimClick = () => {
    router.push('/contact');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Suspense fallback={null}>
        <GravityParticles />
      </Suspense>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl tracking-tight text-gray-900">
            İşletmenizin<br />Dijital Geleceği
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-900 mb-12 max-w-3xl mx-auto">
          Mikro ERP ve E-Dönüşüm çözümleriyle tanışın
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleTeklifAlClick}
            aria-label="Teklif Al - İletişim sayfasına gidin"
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleIletisimClick}
            aria-label="İletişime Geç - İletişim sayfasına gidin"
            className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            İletişime Geç
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
