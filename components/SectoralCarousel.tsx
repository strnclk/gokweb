'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sectors = [
  {
    title: 'İnşaat',
    description: 'Proje planlama, şantiye yönetimi, maliyet analizi ve sözleşme takibi ile inşaat süreçlerinizi uçtan uca yönetin.',
    features: ['Proje Planlama', 'Şantiye Yönetimi', 'Maliyet Analizi', 'Sözleşme Takibi', 'İlerleme Raporu', 'İş Programı'],
    gradient: 'from-blue-600 to-blue-700',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    clients: '120+ işletme',
  },
  {
    title: 'Üretim',
    description: 'İş emri yönetimi, MRP planlama, kalite kontrol ve verimlilik analizi ile üretim süreçlerinizi optimize edin.',
    features: ['İş Emri Yönetimi', 'MRP Planlama', 'Kalite Kontrol', 'Verimlilik Analizi', 'Malzeme Takibi', 'Üretim Raporlama'],
    gradient: 'from-green-600 to-green-700',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    clients: '85+ işletme',
  },
  {
    title: 'Perakende',
    description: 'POS entegrasyonu, çoklu şube yönetimi ve müşteri sadakat programları ile perakende operasyonlarınızı güçlendirin.',
    features: ['POS Entegrasyonu', 'Çoklu Şube', 'Envanter Takibi', 'Sadakat Programı', 'Satış Analizi', 'Kampanya Yönetimi'],
    gradient: 'from-purple-600 to-purple-700',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    clients: '95+ işletme',
  },
];

export default function SectoralCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSector = () => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length);
  };

  const prevSector = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  const getCardStyle = (index: number) => {
    if (index === currentIndex) {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 20,
        x: 0,
        rotateY: 0,
      };
    }
    
    const diff = (index - currentIndex + sectors.length) % sectors.length;
    if (diff === 1) {
      return {
        scale: 0.85,
        opacity: 0.7,
        zIndex: 15,
        x: 200,
        rotateY: -10,
      };
    }
    if (diff === sectors.length - 1) {
      return {
        scale: 0.85,
        opacity: 0.7,
        zIndex: 15,
        x: -200,
        rotateY: 10,
      };
    }
    
    return {
      scale: 0.6,
      opacity: 0.2,
      zIndex: 5,
      x: diff < sectors.length / 2 ? diff * 150 : (diff - sectors.length) * 150,
      rotateY: diff < sectors.length / 2 ? -diff * 3 : (diff - sectors.length) * 3,
    };
  };

  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Çözümlerimiz</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Sektörel ERP Çözümleri</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">Her sektörün kendine özgü ihtiyaçlarına yönelik olarak geliştirilmiş, deneyimli ekibimizle desteklediğimiz çözümler.</p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevSector}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSector}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="relative w-full h-full">
            {sectors.map((sector, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={index}
                  initial={style}
                  animate={style}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[480px] bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-shadow"
                  onClick={() => setCurrentIndex(index)}
                  style={{ zIndex: style.zIndex as number }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center flex-shrink-0 shadow-md mb-4`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sector.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.title}</h3>
                  <span className="text-sm text-gray-400 mb-3">{sector.clients}</span>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">{feature}</span>
                    ))}
                    {sector.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-400 rounded-md text-xs font-medium">+{sector.features.length - 3}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {sectors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
