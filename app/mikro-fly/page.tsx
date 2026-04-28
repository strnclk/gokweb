'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Globe, ShoppingCart, Star, TrendingUp, Award, Clock, FileText, Activity, Layers, CheckCircle, ArrowRight, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MikroFlyPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        setScrollProgress((scrollPosition / scrollableHeight) * 100);
      } else {
        setScrollProgress(0);
      }
      
      setShowScrollTop(scrollPosition > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const message = 'Merhaba%20Mikro%20FLY%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    { value: '85%', label: 'Verimlilik', icon: TrendingUp },
    { value: '60%', label: 'Maliyet Düşüşü', icon: Target },
    { value: '95%', label: 'Hız', icon: Zap },
    { value: '3x', label: 'Performans', icon: Award }
  ];

  const features = [
    {
      icon: Landmark,
      title: 'Muhasebe',
      description: 'Temel muhasebe işlemleri, defter kefi, mizan',
      descriptionDetail: 'Finansal raporlama ve analiz'
    },
    {
      icon: Package,
      title: 'Stok Takibi',
      description: 'Stok yönetimi, depo takibi, barkod sistemi',
      descriptionDetail: 'Otomatik stok bildirimleri'
    },
    {
      icon: Receipt,
      title: 'Fatura',
      description: 'Fatura kesme, e-fatura entegrasyonu',
      descriptionDetail: 'E-defter uyumluluğu'
    },
    {
      icon: BarChart,
      title: 'Raporlama',
      description: 'Detaylı raporlar, analizler, grafikler',
      descriptionDetail: 'Özel dashboard tasarımı'
    },
    {
      icon: Users,
      title: 'Cari Hesap',
      description: 'Müşteri ve tedarikçi takibi, borç alacak yönetimi',
      descriptionDetail: 'Otomatik vade takibi'
    },
    {
      icon: Wallet,
      title: 'Kasa',
      description: 'Kasa takibi, banka hesapları, para hareketleri',
      descriptionDetail: 'Çoklu para birimi desteği'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Dijital Dönüşüm',
      description: 'Muhasebe süreçlerinizi tamamen dijitalleştirin',
      icon: Zap
    },
    {
      number: '02',
      title: 'Verimlilik Artışı',
      description: 'Otomasyon ile %85 verimlilik artışı sağlayın',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Maliyet Optimizasyonu',
      description: 'Manuel işleri azaltarak maliyetlerinizi %60 düşürün',
      icon: Target
    },
    {
      number: '04',
      title: 'Yasal Uyum',
      description: 'Tüm yasal düzenlemelere tam uyumlu',
      icon: Award
    }
  ];

  const modules = [
    {
      name: 'Trendyol Entegrasyonu',
      icon: ShoppingCart,
      description: 'Otomatik sipariş senkronizasyonu',
      features: ['Sipariş senkronizasyonu', 'Stok güncellemesi', 'Faturalandırma']
    },
    {
      name: 'Hepsiburada Entegrasyonu',
      icon: ShoppingCart,
      description: 'Stok ve sipariş yönetimi',
      features: ['Çoklu mağaza yönetimi', 'Otomatik fiyat güncelleme', 'Kargo takibi']
    },
    {
      name: 'N11 Entegrasyonu',
      icon: Globe,
      description: 'Çoklu platform desteği',
      features: ['Merkezi stok yönetimi', 'Komisyon takibi', 'Performans analizi']
    },
    {
      name: 'Amazon Entegrasyonu',
      icon: Globe,
      description: 'Global pazar yeri entegrasyonu',
      features: ['Çoklu ülke desteği', 'Döviz kuru takibi', 'Gümrük yönetimi']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/mikro-fly-logo.png" alt="Mikro FLY" className="w-full h-full object-contain" />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900"
          >
            Mikro
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">FLY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            E-ticaret odaklı muhasebe çözümü - E-ticaret işletmeleri için tasarlanmış
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors font-medium"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Özellikler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro FLY'un e-ticaret işletmenizi nasıl hızlandıracağını keşfedin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                  <p className="text-gray-500 text-xs italic">{feature.descriptionDetail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pazar Yeri Entegrasyonları</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tüm popüler pazar yerleriyle otomatik senkronizasyon
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 min-h-[280px] flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{module.name}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">{module.description}</p>
                  <div className="space-y-2 flex-grow">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle size={12} className="mr-2 text-blue-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Avantajlar</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              E-ticaret işletmeniz için somut ve ölçülebilir faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
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
            className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Mikro FLY ile Tanışın</h2>
            <p className="text-base mb-6 text-blue-100">E-ticaret işletmenizi dijital dönüşüme hazırlayın</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-blue-900 py-3 px-8 rounded-lg font-medium hover:bg-blue-50"
            >
              Ücretsiz Demo İsteyin
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
