'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronUp, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  
  const getImage = (id: number) => {
    const images: { [key: number]: string } = {
      1: '/mikro-fly-logo.png',
      2: '/mikro-run-logo.png',
      3: '/mikro-jump-logo.png',
      4: '/eflow3-logo.png',
      5: '/eflow3-logo.png',
      6: '/logo.png'
    };
    return images[id];
  };

  const products = [
    {
      id: 1,
      name: 'Mikro FLY',
      tagline: 'Hızlı ve pratik muhasebe çözümü',
      description: 'Küçük ve orta ölçekli işletmeler için tasarlanmış, hızlı kurulum ve kolay kullanım özellikli temel muhasebe programı.',
      features: ['Hızlı kurulum', 'Kolay kullanım', 'Temel muhasebe', 'Stok takibi', 'Raporlama'],
      image: '/mikro-fly-logo.png',
      route: '/mikro-fly'
    },
    {
      id: 2,
      name: 'Mikro RUN',
      tagline: 'Performans odaklı muhasebe programı',
      description: 'Büyüyen işletmeler için gelişmiş muhasebe özellikleri ve performans analizi sunan kapsamlı çözüm.',
      features: ['Gelişmiş muhasebe', 'Performans analizi', 'Çoklu kullanıcı', 'Banka entegrasyonu', 'Detaylı raporlar'],
      image: '/mikro-run-logo.png',
      route: '/mikro-run'
    },
    {
      id: 3,
      name: 'Mikro JUMP',
      tagline: 'Gelişmiş özellikli kapsamlı muhasebe çözümü',
      description: 'Web tabanlı, mobil uyumlu ve yapay zeka destekli en kapsamlı muhasebe ve yönetim çözümü.',
      features: ['Kapsamlı muhasebe', 'Gelişmiş analiz', 'Web tabanlı', 'Mobil uyumlu', 'Yapay zeka destek'],
      image: '/mikro-jump-logo.png',
      route: '/mikro-jump'
    },
    {
      id: 4,
      name: 'E-Flow',
      tagline: 'E-ticaret ve pazar yeri yönetim sistemi',
      description: 'Tüm e-ticaret platformlarınızı tek bir yerden yönetin, otomatik sipariş ve stok senkronizasyonu sağlayın.',
      features: ['Pazar yeri entegrasyonu', 'Otomatik sipariş', 'Stok senkronizasyonu', 'Fatura yönetimi', 'Raporlama ve analiz'],
      image: '/eflow3-logo.png',
      route: '/eflow-detail'
    }
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
            Mikro ERP
            <br />
            <span className="text-gray-600">Çözümleri</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            İşletmeniz için tasarlanmış kapsamlı muhasebe ve yönetim çözümleri.
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

     


      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tüm Ürünler</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına uygun kapsamlı çözümler
            </p>
          </motion.div>
          
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className="p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h3>
                    <p className="text-lg text-gray-600 mb-6">{product.tagline}</p>
                    <p className="text-gray-500 mb-8 leading-relaxed">{product.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-3">Özellikler:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => router.push('/contact')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      >
                        Teklif Al
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-12 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full max-w-sm h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Doğru çözümü
            <br />
            <span className="text-gray-600">birlikte bulalım</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            İşletmenizin ihtiyaçlarını dinleyin, size en uygun Mikro ERP çözümünü önerelim.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
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
