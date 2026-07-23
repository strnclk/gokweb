'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function EFlowProcessesSection() {
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
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6">E-Flow Süreçleri</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">E-ticaret ve Pazar Yeri Entegrasyonu</p>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            Tüm pazar yerleri ve e-ticaret sitenizi tek bir panelden yönetin, otomatik süreçlerle verimliliği artırın.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: "🔄 Çoklu Kanal Yönetimi", 
              desc: "Tüm pazar yerleri ve e-ticaret sitenizi tek bir panelden yönetin" 
            },
            { 
              title: "🤖 Otomatik Sipariş Yönetimi", 
              desc: "Siparişleri otomatik olarak işleyin ve kargo takibi yapın" 
            },
            { 
              title: "📦 Envanter Takibi", 
              desc: "Gerçek zamanlı envanter yönetimi ve stok optimizasyonu" 
            },
            { 
              title: "💰 Fiyat Yönetimi", 
              desc: "Dinamik fiyatlandırma ve kampanya yönetimi" 
            },
            { 
              title: "👥 Müşteri İlişkileri", 
              desc: "CRM entegrasyonu ve müşteri memnuniyet takibi" 
            },
            { 
              title: "📊 Raporlama ve Analiz", 
              desc: "Detaylı satış raporları ve performans analizleri" 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-2xl mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl mb-12">E-Flow Avantajları</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "%85", 
                subtitle: "Zaman Tasarrufu",
                desc: "Manuel işlemleri otomatikleştirerek zamanınızı %85 oranında tasarruf edin"
              },
              { 
                title: "3x", 
                subtitle: "Satış Artışı",
                desc: "Çoklu kanal satış ile gelirlerinizi 3 katına kadar artırın"
              },
              { 
                title: "%99.9", 
                subtitle: "Sistem Uptime",
                desc: "Güvenilir altyapı ile iş sürekliliği sağlayın"
              },
              { 
                title: "0", 
                subtitle: "İnsan Hatası",
                desc: "Otomatik süreçlerle insan hatasını minimum seviyeye indirin"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-3xl text-center"
              >
                <div className="text-5xl font-bold mb-2">{item.title}</div>
                <div className="text-xl font-semibold mb-3">{item.subtitle}</div>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
