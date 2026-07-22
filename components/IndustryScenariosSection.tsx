'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Building, Factory, ShoppingBag, Truck, Users, TrendingUp, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Building,
    title: 'İnşaat',
    description: 'Proje yönetimi ve maliyet kontrolü',
    color: 'from-gray-700 to-gray-800',
    features: ['Proje Takip', 'Maliyet Analizi', 'Raporlama']
  },
  {
    icon: Factory,
    title: 'Üretim',
    description: 'Üretim planlaması ve stok yönetimi',
    color: 'from-gray-700 to-gray-800',
    features: ['Üretim Planlama', 'Kalite Kontrol', 'Stok Yönetimi']
  },
  {
    icon: ShoppingBag,
    title: 'Perakende',
    description: 'Satış ve envanter yönetimi',
    color: 'from-gray-700 to-gray-800',
    features: ['Banka Entegrasyonu', 'Envanter', 'Müşteri Yönetimi']
  },
  {
    icon: Truck,
    title: 'Lojistik',
    description: 'Nakliye ve dağıtım yönetimi',
    color: 'from-gray-700 to-gray-800',
    features: ['Filo Yönetimi', 'Rota Optimizasyonu', 'Takip Sistemi']
  },
  {
    icon: Users,
    title: 'Hizmet',
    description: 'Müşteri hizmetleri ve destek yönetimi',
    color: 'from-gray-700 to-gray-800',
    features: ['CRM', 'Destek Sistemi', 'Performans Analizi']
  },
  {
    icon: TrendingUp,
    title: 'Finans',
    description: 'Muhasebe ve finansal yönetim',
    color: 'from-gray-700 to-gray-800',
    features: ['Muhasebe', 'Bütçeleme', 'Raporlama']
  }
];

export default function IndustryScenariosSection() {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 relative bg-cover bg-center sm:bg-fixed" style={{ backgroundImage: 'url(/rainbw.png)' }}>
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hangi sektörde olursanız olun <br /> her şirkete lazım.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Her sektörün ihtiyacına özel çözümler
          </p>
          <Link href="/sectoral-solutions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Tüm Sektörleri Gör
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndustry(index)}
              onMouseLeave={() => setHoveredIndustry(null)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl  cursor-pointer border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {industry.description}
              </p>

              <div className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
