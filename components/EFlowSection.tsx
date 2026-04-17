'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

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
            <img src="/eflow3-logo.png" alt="E-Flow" className="w-48 h-48 mx-auto object-contain" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">E-Flow</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">Süreçlerinizi yönetin, zaman kazanın</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Onay Süreçleri", desc: "Hızlı ve güvenli onay akışları" },
            { title: "Otomasyon", desc: "Tekrarlayan işleri otomatikleştirin" },
            { title: "İzleme", desc: "Tüm süreçleri gerçek zamanlı takip edin" }
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
      </div>
    </section>
  );
}
