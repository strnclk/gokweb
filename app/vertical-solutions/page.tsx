'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Factory, ShoppingCart, Truck, Users, Briefcase } from 'lucide-react';

export default function VerticalSolutionsPage() {
  const scrollToContact = () => {
    const message = 'Merhaba%20Dikey%20Çözümler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const industries = [
    {
      icon: Building2,
      name: 'İnşaat',
      description: 'Proje takibi, maliyet yönetimi, personel planlama'
    },
    {
      icon: Factory,
      name: 'Üretim',
      description: 'İş emri yönetimi, MRP planlama, kalite kontrol'
    },
    {
      icon: ShoppingCart,
      name: 'Perakende',
      description: 'Satış noktası yönetimi, stok takibi, müşteri analizi'
    },
    {
      icon: Truck,
      name: 'Lojistik',
      description: 'Fleet yönetimi, rota optimizasyonu, kargo takibi'
    },
    {
      icon: Users,
      name: 'Hizmet',
      description: 'CRM, proje yönetimi, personel takibi'
    },
    {
      icon: Briefcase,
      name: 'Finans',
      description: 'Muhasebe, bütçeleme, risk yönetimi'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Sektörel Uzmanlık',
      description: 'Her sektör için özel olarak geliştirilmiş çözümler'
    },
    {
      number: '02',
      title: 'Hızlı Entegrasyon',
      description: 'Mevcut sistemlerinizle kolay entegrasyon'
    },
    {
      number: '03',
      title: 'Sürekli Destek',
      description: '7/24 teknik destek ve danışmanlık hizmeti'
    },
    {
      number: '04',
      title: 'Ölçeklenebilirlik',
      description: 'İşletmenizin büyümesiyle birlikte ölçeklenir'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900"
          >
            Mikro Dikey
            <br />
            <span className="text-gray-600">Çözümler</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Her sektörün ihtiyacına özel olarak tasarlanmış ERP çözümleri
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Ücretsiz Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Sektörler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Her sektör için özel ERP çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Neden Dikey Çözümler?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              İşletmeniz için somut ve ölçülebilir faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {benefit.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Sektörünüze Uygun Çözümü Bulun</h2>
            <p className="text-base mb-6 text-gray-300">Uzmanlarımız size en uygun Mikro dikey çözümü seçmenize yardımcı olsun</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-gray-900 py-3 px-8 rounded-lg font-medium hover:bg-gray-100"
            >
              Teklif Al
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
