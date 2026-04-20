'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Factory, ShoppingCart, Truck, Building2, Users, CheckCircle2 } from 'lucide-react';

export default function IndustryScenariosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: ShoppingBag,
      title: 'Perakende',
      description: 'Çoklu mağaza yönetimi, stok senkronizasyonu ve satış analizi ile perakende işletmenizi dijitalleştirin.',
      features: ['Çoklu mağaza yönetimi', 'Stok senkronizasyonu', 'Satış analizi', 'Müşteri sadakati programları']
    },
    {
      icon: Factory,
      title: 'Üretim',
      description: 'Üretim planlama, maliyet hesaplama ve kalite kontrol ile üretim süreçlerinizi optimize edin.',
      features: ['Üretim planlama', 'Maliyet hesaplama', 'Kalite kontrol', 'Sipariş takibi']
    },
    {
      icon: ShoppingCart,
      title: 'E-ticaret',
      description: 'Tüm pazar yerlerini tek bir panelden yönetin, otomatik sipariş ve stok senkronizasyonu sağlayın.',
      features: ['Pazar yeri entegrasyonu', 'Otomatik sipariş', 'Stok senkronizasyonu', 'Fatura yönetimi']
    },
    {
      icon: Truck,
      title: 'Lojistik',
      description: 'Fleet yönetimi, rota optimizasyonu ve kargo takibi ile lojistik operasyonlarınızı verimli hale getirin.',
      features: ['Fleet yönetimi', 'Rota optimizasyonu', 'Kargo takibi', 'Depo yönetimi']
    },
    {
      icon: Building2,
      title: 'İnşaat',
      description: 'Proje yönetimi, malzeme takibi ve maliyet kontrolü ile inşaat projelerinizi profesyonelce yönetin.',
      features: ['Proje yönetimi', 'Malzeme takibi', 'Maliyet kontrolü', 'İşçi takibi']
    },
    {
      icon: Users,
      title: 'Hizmet Sektörleri',
      description: 'Randevu yönetimi, müşteri ilişkileri ve performans takibi ile hizmet işletmenizi büyütün.',
      features: ['Randevu yönetimi', 'Müşteri ilişkileri', 'Performans takibi', 'Raporlama']
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Sektörel Çözümler</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Her sektör için özel ERP ve dijital dönüşüm çözümleri ile işletmenizi bir sonraki seviyeye taşıyın
          </p>
        </motion.div>
      </div>

      <div
        className="flex gap-8 px-6 animate-scroll"
      >

        {[...industries, ...industries].map((industry, index) => (
          <article
            key={index}
            className="min-w-[350px] max-w-[350px] bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex-shrink-0"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <industry.icon className="w-7 h-7 text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">{industry.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

            <ul className="space-y-3">
              {industry.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-lg"
        >
          Sektörünüz için özel çözümler mi arıyorsunuz?
          <a href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 ml-2">
            Bizimle iletişime geçin →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
