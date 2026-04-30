'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  { title: 'Mikro ERP Kurulumu', desc: 'İşletmenizin ihtiyaçlarına göre kurulum, konfigürasyon ve entegrasyon.', features: ['İhtiyaç Analizi', 'Özel Konfigürasyon', 'Veri Transferi', 'Kullanıcı Eğitimi', 'Test ve Devreye Alma', 'Sonrası Destek'], gradient: 'from-purple-600 to-purple-700', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', num: '01' },
  { title: 'E-Dönüşüm Entegrasyonu', desc: 'E-fatura, e-defter, e-arşiv ve e-imza entegrasyonları.', features: ['E-Fatura Kurulumu', 'E-Defter Entegrasyonu', 'E-Arşiv Sistemi', 'E-İmza Çözümü', 'Otomatik Akış'], gradient: 'from-blue-600 to-blue-700', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', num: '02' },
  { title: 'Özel Yazılım Geliştirme', desc: 'Web, mobil ve kurumsal yazılımlar geliştiriyoruz.', features: ['Web Uygulamaları', 'Mobil Çözümler', 'API Entegrasyonu', 'Kurumsal Yazılımlar', 'Bulut Altyapı', 'Özel Tasarım'], gradient: 'from-violet-600 to-violet-700', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', num: '03' },
  { title: 'Danışmanlık Hizmetleri', desc: 'ERP seçimi, süreç optimizasyonu ve dijital dönüşüm stratejisi.', features: ['ERP Seçim Danışmanlığı', 'Süreç Optimizasyonu', 'Dijital Dönüşüm Stratejisi', 'Proje Yönetimi', 'Değişim Yönetimi', 'Verimlilik Analizi'], gradient: 'from-emerald-600 to-emerald-700', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', num: '04' },
  { title: 'Teknik Destek ve Bakım', desc: 'Sistemlerinizin sorunsuz çalışması için sürekli destek ve bakım.', features: ['7/24 Teknik Destek', 'Uzaktan Bağlantı', 'Düzenli Bakım', 'Güncelleme Yönetimi', 'Yedekleme Hizmeti', 'Performans İzleme'], gradient: 'from-orange-600 to-orange-700', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', num: '05' },
  { title: 'Eğitim Hizmetleri', desc: 'Etkin kullanım için kapsamlı eğitim programları.', features: ['Kullanıcı Eğitimi', 'Yönetici Eğitimi', 'Raporlama Eğitimi', 'Sektörel Eğitimler', 'Online Eğitim', 'Sertifika Programı'], gradient: 'from-red-600 to-red-700', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', num: '06' },
];

export default function ServicesCarousel() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentServiceIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${services[currentServiceIndex].gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <span className="text-4xl md:text-6xl font-bold text-white/20">{services[currentServiceIndex].num}</span>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-md`}>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={services[currentServiceIndex].icon}/></svg>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4">
                    {services[currentServiceIndex].title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                    {services[currentServiceIndex].desc}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {services[currentServiceIndex].features.map((f,i)=>(<div key={i} className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-white"></div><span className="text-sm text-white font-medium">{f}</span></div>))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  <div className="bg-white/10 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-20 md:w-24 h-20 md:h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative">
                      <div className="text-6xl md:text-8xl font-bold text-white/20 mb-3 md:mb-4">{services[currentServiceIndex].num}</div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{services[currentServiceIndex].title}</h3>
                      <div className="space-y-2 md:space-y-3">
                        {services[currentServiceIndex].features.map((f,i)=>(<div key={i} className="flex items-center gap-2 md:gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0"><svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg></div><span className="text-xs md:text-sm text-white/90">{f}</span></div>))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevService}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextService}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentServiceIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentServiceIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
