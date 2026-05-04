'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function EFlowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <Image 
              src="/eflow3-logo.png" 
              alt="E-Flow BPM ve DMS İş Süreç Yönetim Sistemi" 
              width={192}
              height={192}
              className="w-48 h-48 mx-auto object-contain" 
            />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">E-Flow</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">No-Code İş Süreçleri Yönetim Platformu</p>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            Sürükle-bırak teknolojisi ile iş süreçlerinizi tasarlayın, yapay zeka entegrasyonu ile hızlandırın, ERP sistemleriyle entegre edin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "🖱️ Sürükle-Bırak Teknolojisi", desc: "Hiçbir kodlama bilgisine sahip olmadan E-Flow'un sürükle bırak yapısı ile iş süreçlerinizi tasarlayın ve yönetin." },
            { title: "🤖 Yapay Zeka Entegrasyonu", desc: "E-Flow'un ChatGPT entegrasyonu ile mevcut süreçlere kolayca erişin, süreç tasarımını hızla gerçekleştirin." },
            { title: "🔗 ERP Entegrasyonu", desc: "Hazır entegrasyon bileşenleri aracılığı ile en çok tercih edilen ERP uygulamaları ile kolay entegrasyon sağlayın." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-2xl mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "📱 Mobil Uygulama", desc: "Süreçlerinizi herhangi bir ek operasyon gerektirmeden mobil uygulama üzerinden yönetin, işinize kesintisiz ulaşın." },
            { title: "☁️ Kiralama Modeli", desc: "Sunucu ve ilk yatırım maliyeti olmadan, SaaS modeliyle daima güncel sürüme sahip olun." },
            { title: "💻 Web ve Mobil Uyumlu", desc: "İşlerinizi her an ve her yerden kolaylıkla yönetin, iş süreçlerinize kesintisiz devam edin." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-2xl mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
