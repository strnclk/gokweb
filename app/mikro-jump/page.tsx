'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Brain, Cpu, Globe, Star, TrendingUp, Award, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MikroJumpPage() {
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
    const message = 'Merhaba%20Mikro%20JUMP%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    { value: '10', label: 'Dakika Kurulum', icon: Clock },
    { value: '100+', label: 'Kullanıcı', icon: Star },
    { value: '99.9%', label: 'Performans', icon: Award },
    { value: '24/7', label: 'Destek', icon: Clock }
  ];

  const features = [
    {
      icon: Landmark,
      title: 'Muhasebe',
      description: 'Temel muhasebe işlemleri, defter kefi, mizan',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Package,
      title: 'Stok Takibi',
      description: 'Stok yönetimi, depo takibi, barkod sistemi',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Receipt,
      title: 'Fatura',
      description: 'Fatura kesme, e-fatura entegrasyonu',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BarChart,
      title: 'Raporlama',
      description: 'Detaylı raporlar, analizler, grafikler',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Cari Hesap',
      description: 'Müşteri ve tedarikçi takibi, borç alacak yönetimi',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Wallet,
      title: 'Kasa',
      description: 'Kasa takibi, banka hesapları, para hareketleri',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Yapay Zeka',
      description: 'AI destekli tahminleme ve analiz',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cpu,
      title: 'Otomasyon',
      description: 'Otomatik süreç yönetimi',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Bulut',
      description: 'Bulut tabanlı erişim ve yedekleme',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Kolay Kullanım',
      description: 'Sezgisel arayüzü ile kısa sürede adapte olabilirsiniz',
      icon: Star
    },
    {
      number: '02',
      title: 'Hızlı Kurulum',
      description: '10 dakikada kurulum, hemen kullanmaya başlayın',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Uygun Fiyat',
      description: 'Bütçenize uygun fiyat seçenekleri',
      icon: Award
    },
    {
      number: '04',
      title: 'Yasal Uyum',
      description: 'Tüm yasal düzenlemelere uyumlu',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="w-[350px] h-[350px] rounded-3xl overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-md border-2 border-white/30 p-6 shadow-2xl">
                <img src="/mikro-jump-logo.png" alt="Mikro JUMP" className="w-full h-full object-contain rounded-2xl hover:scale-105 transition-transform duration-300" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                Mikro
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">JUMP</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">Gelişmiş muhasebe ve ERP çözümü</p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">Büyük ve orta ölçekli işletmeler için tasarlanmış, kapsamlı özelliklere sahip muhasebe ve ERP programı.</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={scrollToContact}
                className="inline-block px-12 py-5 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2"
              >
                Teklif Al
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Özellikler
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mikro JUMP'un işletmenizi nasıl dönüştüreceğini keşfedin
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Teknoloji Avantajları
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En güncel teknoloji ile geleceğe hazır
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <Icon size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Neden Mikro JUMP?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmeniz için özel avantajlar
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mikro JUMP ile Tanışın</h2>
            <p className="text-xl text-white/90 mb-10">İşletmenizi dijital dönüşüme hazırlayın</p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={scrollToContact}
              className="inline-block px-12 py-5 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2"
            >
              Ücretsiz Demo İsteyin
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl hover:shadow-3xl hover:-translate-y-1 overflow-hidden z-50"
        >
          <div className="absolute inset-0 bg-white/15 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-red-400 via-yellow-400 via-sky-400 via-pink-400 to-blue-400"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <span className="relative z-10 text-2xl">↑</span>
        </motion.button>
      )}
      
      <Footer />
    </div>
  );
}
