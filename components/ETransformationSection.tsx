'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Receipt, Database, Shield, CheckCircle, ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';

const eServices = [
  {
    icon: FileText,
    title: 'E-Fatura',
    description: 'Elektronik fatura gönderme ve alma sistemi',
    color: 'from-gray-700 to-gray-800',
    benefits: ['Kolay entegrasyon', 'Maliyet tasarrufu', 'Hızlı gönderim']
  },
  {
    icon: Receipt,
    title: 'E-Defter',
    description: 'Dijital defter tutma ve raporlama',
    color: 'from-gray-700 to-gray-800',
    benefits: ['Otomatik kayıt', 'Güvenli saklama', 'Anlık erişim']
  },
  {
    icon: Database,
    title: 'E-Arşiv',
    description: 'Belgelerin dijital arşivlenmesi',
    color: 'from-gray-700 to-gray-800',
    benefits: ['Uzun süreli saklama', 'Hızlı erişim', 'Güvenli yedekleme']
  },
  {
    icon: Shield,
    title: 'E-İmza',
    description: 'Dijital imza ve doğrulama sistemi',
    color: 'from-gray-700 to-gray-800',
    benefits: ['Hukuki geçerlilik', 'Güvenli doğrulama', 'Kolay kullanım']
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime', icon: TrendingUp },
  { value: '24/7', label: 'Destek', icon: Clock },
  { value: '2sn', label: 'Gönderim Süresi', icon: Zap }
];

export default function ETransformationSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            E-Dönüşüm Çözümleri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dijital dönüşümünüzü kolaylaştıran entegre çözümler
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Hizmetler */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {benefit}
                  </div>
                ))}
              </div>

              <motion.button
                className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                whileHover={{ x: 5 }}
              >
                Detayları Gör <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            E-Dönüşümünüzü Başlatın
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Size özel e-dönüşüm çözümleriyle dijital geleceğe adım atın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ücretsiz Danışmanlık
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo Talep Et
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
