'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function EFlowPage() {
  const router = useRouter();

  const features = [
    'Otomatik Entegrasyon',
    'Gerçek Zamanlı Takip',
    'Güvenli Altyapı',
    'Kolay Kullanım',
    'Bulut Tabanlı',
    'Detaylı Raporlama'
  ];

  const benefits = [
    'Zaman tasarrufu',
    'Hata azaltma',
    'Maliyet optimizasyonu',
    'Verimlilik artışı',
    'Şeffaflık',
    'Kolay yönetim'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight mb-6"
          >
            E-Flow
            <br />
            <span className="text-gray-600">E-Dönüşüm Çözümü</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Mikro ERP sistemleriniz ile GİB portalı arasında tam entegrasyon sağlayan güçlü e-fatura ve e-defter çözümü.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">E-Flow Nedir?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Mikro ERP sistemleriniz ile GİB portalı arasında tam entegrasyon sağlayan, e-fatura ve e-arşiv işlemlerinizi otomatize eden güçlü bir çözümdür.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Zaman Tasarrufu', desc: 'Manuel işlemleri ortadan kaldırın' },
              { title: 'Doğruluk', desc: 'Hataları minimuma indirin' },
              { title: 'Maliyet', desc: 'İşletme maliyetlerinizi düşürün' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:bg-white/80 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Özellikler</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Güçlü özelliklerle iş süreçlerinizi optimize edin
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:bg-white/80 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Faydalar</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              İşletmenize sağladığımız avantajlar
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-blue-100 hover:bg-white/80 transition-all hover:shadow-lg"
              >
                <span className="text-lg font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            E-Flow ile
            <br />
            <span className="text-gray-600">tanışın</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            E-fatura işlemlerinizi kolaylaştırın
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all hover:shadow-lg"
          >
            İletişime Geç
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
