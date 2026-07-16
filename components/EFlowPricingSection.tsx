'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function EFlowPricingSection() {
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
          <h2 className="text-5xl md:text-7xl mb-6">Sistem Seçenekleri</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">İhtiyacınıza Uygun Fiyatlandırma Modeli</p>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            İşletmenizin büyüklüğüne ve işlem hacminize göre en uygun sistemi seçin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Kontörlü Sistem</h3>
              <p className="text-xl text-gray-600">Esnek kullanım, işlem başına ödeme</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Kontör Sistemi Nedir?</h4>
              <p className="text-gray-600 mb-6">
                Kontörlü sistemde, yaptığınız her işlem (sipariş, ürün ekleme, entegrasyon vb) için belirli miktarlarda kontör harcarsınız. Sadece kullandığınız kadar ödeme yaparsınız.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Esnek kullanım - ihtiyacınız kadar kontör yükleyin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">İşlem başına maliyet - bütçe kontrolü kolay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Başlangıç için düşük maliyet</span>
                </li>
              </ul>
            </div>
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Lisans Sistemi</h3>
              <p className="text-xl text-gray-600">Sabit aylık ücret, sınırsız kullanım</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Lisans Sistemi Nedir?</h4>
              <p className="text-gray-600 mb-6">
                Lisans sisteminde, yıllık sabit ücret ödeyerek tüm özellikleri sınırsız kullanabilirsiniz. Yüksek işlem hacmi olan işletmeler için ekonomiktir.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Sınırsız işlem - ek maliyet yok</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Tüm özellikler tam erişim</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Öncelikli teknik destek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Kurulum ve eğitim dahil</span>
                </li>
              </ul>
            </div>
            
             
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 p-12 rounded-3xl text-white"
        >
          <h3 className="text-4xl font-bold mb-4">E-Flow ile Firma Gücünüzü Arttırın</h3>
          <p className="text-xl mb-8">Ücretsiz demo talep edin ve E-Flow'un gücünü keşfedin</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 py-4 px-12 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            İletişime Geç
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
