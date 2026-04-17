'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FileText, BookOpen, Archive } from 'lucide-react';

export default function ETransformationSection() {
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
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6">E-Dönüşüm</h2>
          <p className="text-2xl text-gray-600">Dijital dönüşümünüzü tamamlayın</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FileText className="w-12 h-12" />, title: "E-Fatura", desc: "Elektronik faturalama sistemi", gradient: "from-blue-500 to-cyan-500" },
            { icon: <BookOpen className="w-12 h-12" />, title: "E-Defter", desc: "Dijital defter tutma çözümü", gradient: "from-purple-500 to-pink-500" },
            { icon: <Archive className="w-12 h-12" />, title: "E-Arşiv", desc: "Güvenli elektronik arşivleme", gradient: "from-green-500 to-teal-500" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30,
                scale: isInView ? 1 : 0.9
              }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6`}>
                {item.icon}
              </div>
              <h4 className="text-3xl mb-3">{item.title}</h4>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
