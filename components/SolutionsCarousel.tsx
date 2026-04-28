'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const solutions = [
  {
    title: 'Mikro İnşaat',
    subtitle: 'İnşaat sektörüne özel ERP çözümü',
    description: 'İnşaat projelerinin tüm aşamalarını yönetebileceğiniz kapsamlı ERP çözümü. Proje yönetimi, maliyet kontrolü ve sözleşme takibi.',
    features: ['Proje Yönetimi', 'Maliyet Kontrolü', 'Raporlama ve Analiz', 'Sözleşme Takibi', 'Şantiye Yönetimi', 'İlerleme Takibi'],
    gradient: 'from-gray-700 to-gray-800',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Mikro Üretim',
    subtitle: 'Üretim süreçlerinizi optimize edin',
    description: 'Üretim süreçlerinizi optimize eden modern üretim planlama sistemi. Kalite kontrol, stok yönetimi ve verimlilik analizi.',
    features: ['Üretim Planlama', 'Kalite Kontrol', 'Stok Yönetimi', 'Verimlilik Analizi', 'Malzeme Takibi', 'İş Emri Yönetimi'],
    gradient: 'from-gray-700 to-gray-800',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Mikro Perakende',
    subtitle: 'Perakende satış yönetiminizi kolaylaştırın',
    description: 'Perakende satış ve envanter yönetiminizi kolaylaştıran çözüm. POS entegrasyonu, müşteri yönetimi ve kampanya yönetimi.',
    features: ['POS Entegrasyonu', 'Envanter Yönetimi', 'Müşteri Yönetimi', 'Kampanya Yönetimi', 'Satış Raporlama', 'Çoklu Şube'],
    gradient: 'from-gray-700 to-gray-800',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  },
  {
    title: 'Mikro Lojistik',
    subtitle: 'Lojistik süreçlerinizi yönetin',
    description: 'Lojistik ve dağıtım süreçlerinizi yöneten kapsamlı sistem. Filo yönetimi, rota optimizasyonu ve kargo takibi.',
    features: ['Filo Yönetimi', 'Rota Optimizasyonu', 'Kargo Takibi', 'Depo Yönetimi', 'Sevkiyat Planlama', 'Teslimat Takibi'],
    gradient: 'from-gray-700 to-gray-800',
    icon: 'M8 17l4 4 4-4m-4-5v9M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29',
  },
  {
    title: 'Mikro Hizmet',
    subtitle: 'Hizmet sektörüne özel çözüm',
    description: 'Hizmet sektörlerinin yönetim ihtiyaçlarına özel çözüm. CRM entegrasyonu, servis yönetimi ve performans analizi.',
    features: ['CRM Entegrasyonu', 'Servis Yönetimi', 'Personel Takibi', 'Performans Analizi', 'Randevu Sistemi', 'Müşteri Memnuniyeti'],
    gradient: 'from-gray-700 to-gray-800',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Mikro Finans',
    subtitle: 'Finansal yönetiminizi optimize edin',
    description: 'Finansal yönetim ve muhasebe süreçlerinizi optimize eden sistem. Muhasebe yönetimi, bütçeleme ve finansal raporlama.',
    features: ['Muhasebe Yönetimi', 'Bütçeleme', 'Finansal Raporlama', 'Vergi Yönetimi', 'Cari Hesap Takibi', 'Banka Entegrasyonu'],
    gradient: 'from-gray-700 to-gray-800',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export default function SolutionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSolution = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSolution = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const currentSolution = solutions[currentIndex];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className={`inline-flex p-8 rounded-2xl bg-gradient-to-br ${currentSolution.gradient} text-white mb-10 shadow-lg`}>
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={currentSolution.icon} />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 tracking-tight">{currentSolution.title}</h3>
            <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">{currentSolution.subtitle}</p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mb-10">{currentSolution.description}</p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
              {currentSolution.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentSolution.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-white text-sm font-semibold">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <button className="px-10 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg border border-slate-800">
              Daha Fazla Bilgi
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSolution}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button
          onClick={nextSolution}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
