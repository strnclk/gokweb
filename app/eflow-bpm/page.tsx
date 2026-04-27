'use client';

import { Workflow, Users, Settings, BarChart3, Clock, CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Database, Globe, Target, ArrowRight, Star, Award, GitBranch, Activity, PieChart, FileText, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EflowBpmPage() {
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
    const message = 'Merhaba%20E-Flow%20BPM%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    { value: '85%', label: 'Süreç Optimizasyonu', icon: TrendingUp },
    { value: '60%', label: 'Maliyet Düşüşü', icon: Target },
    { value: '95%', label: 'Şeffaflık', icon: Shield },
    { value: '3x', label: 'Hızlanma', icon: Zap }
  ];

  const features = [
    {
      icon: Workflow,
      title: 'İş Akış Otomasyonu',
      description: 'Manuel süreçleri otomatikleştirerek verimliliği maksimuma çıkarın',
      color: 'from-orange-500 to-red-600',
      descriptionDetail: 'Talep, onay, raporlama gibi süreçleri otomatikleştirin'
    },
    {
      icon: Users,
      title: 'Görev Yönetimi',
      description: 'Atanan görevleri takip edin ve süreçleri optimize edin',
      color: 'from-blue-500 to-indigo-600',
      descriptionDetail: 'Görev atama, takip ve performans değerlendirme'
    },
    {
      icon: Settings,
      title: 'Süreç Tasarımı',
      description: 'İş süreçlerinizi görsel olarak tasarlayın ve optimize edin',
      color: 'from-purple-500 to-pink-600',
      descriptionDetail: 'Drag-and-drop süreç tasarım aracı'
    },
    {
      icon: BarChart3,
      title: 'Performans Analizi',
      description: 'Süreç performansını gerçek zamanlı olarak izleyin ve analiz edin',
      color: 'from-green-500 to-teal-600',
      descriptionDetail: 'KPI takibi ve performans dashboard'
    },
    {
      icon: CheckCircle,
      title: 'Kalite Yönetimi',
      description: 'Kalite standartlarına uygunluğu otomatik olarak denetleyin',
      color: 'from-yellow-500 to-orange-600',
      descriptionDetail: 'ISO kalite yönetimi ve denetim'
    },
    {
      icon: AlertCircle,
      title: 'Risk Yönetimi',
      description: 'Potansiyel riskleri önceden tespit edin ve yönetin',
      color: 'from-red-500 to-pink-600',
      descriptionDetail: 'Risk değerlendirme ve önlemler'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Dijital Dönüşüm',
      description: 'İş süreçlerinizi tamamen dijitalleştirerek geleceğe hazırlanın',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    },
    {
      number: '02',
      title: 'Verimlilik Artışı',
      description: 'Süreç otomasyonu ile %85 verimlilik artışı sağlayın',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-600'
    },
    {
      number: '03',
      title: 'Maliyet Optimizasyonu',
      description: 'Manuel işleri azaltarak operasyonel maliyetlerinizi %60 düşürün',
      icon: Target,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      number: '04',
      title: 'Şeffaflık ve Denetim',
      description: 'Tüm süreçleri şeffaf hale getirerek denetimi kolaylaştırın',
      icon: Shield,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const modules = [
    {
      name: 'Talep Yönetimi',
      icon: FileText,
      description: 'Satın alma, izin, bütçe taleplerini dijitalleştirin',
      color: 'from-blue-500 to-indigo-600',
      features: ['Talep oluşturma', 'Onay akışları', 'Takip ve raporlama']
    },
    {
      name: 'Performans Yönetimi',
      icon: Activity,
      description: 'Çalışan performansını ölçün ve yönetin',
      color: 'from-green-500 to-teal-600',
      features: ['Hedef belirleme', 'Değerlendirme', '360° feedback']
    },
    {
      name: 'Proje Yönetimi',
      icon: Layers,
      description: 'Projeleri planlayın, takip edin ve tamamlayın',
      color: 'from-purple-500 to-pink-600',
      features: ['Planlama', 'Kaynak yönetimi', 'İlerleme takibi']
    },
    {
      name: 'Finansal Yönetim',
      icon: PieChart,
      description: 'Bütçe ve finansal süreçleri yönetin',
      color: 'from-orange-500 to-red-600',
      features: ['Bütçeleme', 'Gider takibi', 'Raporlama']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section - E-Flow BPM Specific */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
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
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <Workflow size={100} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-orange-100 backdrop-blur-md rounded-full text-sm font-semibold text-orange-600 mb-4">
                  E-Flow Platform
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                E-Flow
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">BPM</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">İş Süçleri Yönetim Platformu</p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">İş süreçlerinizi akıllı otomasyonla dönüştürün. Verimliliği maksimize edin, maliyetleri minimize edin.</p>
              
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
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={scrollToContact}
                className="inline-block px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2"
              >
                Süreç Analizi Başlat
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Akıllı BPM Özellikleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş süreçlerinizi dönüştürecek güçlü ve akıllı özellikler
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
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <p className="text-sm text-gray-500 italic">{feature.descriptionDetail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section - New */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                BPM Modülleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyacına özel modüler çözümler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{module.name}</h3>
                    <p className="text-gray-600 mb-4 text-center text-sm">{module.description}</p>
                    <div className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500">
                          <CheckCircle size={12} className="mr-2 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                BPM Avantajları
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmeniz için somut ve ölçülebilir faydalar
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
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0`}>
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

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              İş Süçlerinizi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Dönüştürün
              </span>
            </h2>
            <p className="text-xl  mb-10 max-w-3xl mx-auto">
              E-Flow BPM ile iş süreçlerinizi akıllı otomasyona dönüştürün ve rekabette öne geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={scrollToContact}
                className="inline-block px-12 py-5 bg-white text-orange-600 font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2"
              >
                Ücretsiz Demo İsteyin
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block px-12 py-5 bg-white/20 backdrop-blur-md text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 border-2 border-white/30"
              >
                Süreç Analizi
              </motion.button>
            </div>
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
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl hover:shadow-3xl hover:-translate-y-1 overflow-hidden z-50"
        >
          <div className="absolute inset-0 bg-white/15 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-yellow-400 via-orange-400 via-red-400 to-pink-400"
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
