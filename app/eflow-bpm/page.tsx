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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center">
              <Workflow size={64} className="text-white" />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-slate-900"
          >
            E-Flow
            <br />
            <span className="text-slate-600">BPM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            İş Süreçleri Yönetim Platformu - İş süreçlerinizi akıllı otomasyonla dönüştürün
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Süreç Analizi Başlat
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">BPM Özellikleri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              İş süreçlerinizi yönetmek için geliştirilmiş güçlü özellikler
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
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{feature.description}</p>
                  <p className="text-slate-500 text-xs italic">{feature.descriptionDetail}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">BPM Modülleri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              İşletmenizin ihtiyacına özel modüler çözümler
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
                  className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-300"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 text-center">{module.name}</h3>
                  <p className="text-slate-600 text-center text-sm mb-4">{module.description}</p>
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-600">
                        <CheckCircle size={12} className="mr-2 text-slate-900" />
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">BPM Avantajları</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {benefit.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
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
            className="bg-slate-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">İş Süreçlerinizi Dönüştürün</h2>
            <p className="text-base mb-6 text-slate-300">E-Flow BPM ile iş süreçlerinizi akıllı otomasyona dönüştürün</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-slate-900 py-3 px-8 rounded-lg font-medium hover:bg-slate-100"
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
