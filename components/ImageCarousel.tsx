'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    image: '/rainbow.jpg',
    title: 'Dijital Dönüşüm',
    description: 'İşletmenizi geleceğe taşıyan çözümler',
    features: ['Yapay Zeka Entegrasyonu', 'Bulut Tabanlı Altyapı', 'Gerçek Zamanlı Analitik', 'Otomasyon Süreçleri'],
    stats: ['5K+ İşletme', '%40 Verimlilik', '7/24 Destek'],
    link: '/services'
  },
  {
    image: '/rainbow.jpg',
    title: 'Mikro ERP',
    description: 'Kapsamlı iş yönetim sistemi',
    features: ['Finansal Yönetim', 'Stok Takibi', 'Üretim Planlama', 'Raporlama'],
    stats: ['15+ Modül', '1000+ Müşteri', '19+ Yıl Deneyim'],
    link: '/mikro-fly'
  },
  {
    image: '/rainbow.jpg',
    title: 'E-Dönüşüm',
    description: 'GİB uyumlu dijital çözümler',
    features: ['E-Fatura', 'E-Defter', 'E-Arşiv', 'E-İrsaliye'],
    stats: ['GİB Uyumlu', 'Sıfır Hata', 'Otomatik Entegrasyon'],
    link: '/services'
  },
  {
    image: '/rainbow.jpg',
    title: 'CRM Çözümleri',
    description: 'Müşteri ilişkileri yönetimi',
    features: ['Satış Yönetimi', 'Pazarlama Otomasyonu', 'Müşteri Analizi', 'Hedef Takibi'],
    stats: ['+20% Satış', '+35% Memnuniyet', 'Gerçek Zamanlı'],
    link: '/services'
  },
  {
    image: '/rainbow.jpg',
    title: 'Sektörel Çözümler',
    description: 'Her sektör için özelleştirilmiş ERP',
    features: ['İnşaat', 'Üretim', 'Perakende', 'Hizmet'],
    stats: ['10+ Sektör', 'Özel Modüller', 'Esnek Yapı'],
    link: '/sectoral-solutions'
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] bg-gray-900 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-xl text-gray-200 mb-6">
                  {slides[currentIndex].description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {slides[currentIndex].features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {slides[currentIndex].stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
