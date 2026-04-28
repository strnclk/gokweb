'use client';

import { FolderOpen, FileText, Shield, Search, Clock, Users, Settings, Database, Cloud, Lock, Share2, Download, Upload, CheckCircle, AlertCircle, TrendingUp, Target, Award, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EflowDmsPage() {
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
    const message = 'Merhaba%20E-Flow%20DMS%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    { value: '70%', label: 'Depolama Tasarrufu', icon: Database },
    { value: '90%', label: 'Hız Artışı', icon: Zap },
    { value: '100%', label: 'Güvenlik', icon: Shield },
    { value: '24/7', label: 'Erişim', icon: Cloud }
  ];

  const features = [
    {
      icon: FolderOpen,
      title: 'Doküman Yönetimi',
      description: 'Tüm dokümanlarınızı merkezi bir sistemde yönetin ve organize edin',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Search,
      title: 'Akıllı Arama',
      description: 'Dokümanları içinde metin arama ile saniyeler içinde bulun',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Güvenli Depolama',
      description: 'Banka düzeyinde şifreleme ile dokümanlarınızı güvende tutun',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Yetki Yönetimi',
      description: 'Kullanıcı bazlı yetkilendirme ile erişimi kontrol edin',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Versiyon Kontrolü',
      description: 'Doküman versiyonlarını takip edin ve geri dönebilirsiniz',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Share2,
      title: 'Paylaşım ve İşbirliği',
      description: 'Dokümanları güvenli bir şekilde paylaşın ve işbirliği yapın',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Kağıtsız Ofis',
      description: 'Kağıt kullanımını %70 azaltarak çevre dostu bir ofis oluşturun',
      icon: Target
    },
    {
      number: '02',
      title: 'Hızlı Erişim',
      description: 'Dokümanlara saniyeler içinde erişin ve verimliliği artırın',
      icon: Zap
    },
    {
      number: '03',
      title: 'Güvenlik',
      description: 'Tüm dokümanlarınızı en üst düzey güvenlik ile koruyun',
      icon: Shield
    },
    {
      number: '04',
      title: 'Maliyet Tasarrufu',
      description: 'Depolama ve baskı maliyetlerinden %70 tasarruf edin',
      icon: TrendingUp
    }
  ];

  const industries = [
    {
      name: 'Hukuk',
      description: 'Dava dosyaları, sözleşmeler, yasal belgeler',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Sağlık',
      description: 'Hasta dosyaları, tıbbi raporlar, laboratuvar sonuçları',
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Eğitim',
      description: 'Öğrenci dosyaları, ders materyalleri, sınav belgeleri',
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'İnsan Kaynakları',
      description: 'Personel dosyaları, iş sözleşmeleri, performans değerlendirmeleri',
      icon: Award,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center">
              <FolderOpen size={64} className="text-white" />
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
            <span className="text-slate-600">DMS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Doküman Yönetim Sistemi - Dokümanlarınızı dijitalleştirin, güvenli bir şekilde saklayın ve kolayca erişin
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Demo İsteyin
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">DMS Özellikleri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Doküman yönetimini dönüştürecek güçlü özellikler
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
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">DMS Avantajları</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              İşletmeniz için somut faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300"
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

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Sektörel Çözümler</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Her sektörün ihtiyacına özel DMS çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 text-center"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Dokümanlarınızı Dönüştürün</h2>
            <p className="text-base mb-6 text-slate-300">E-Flow DMS ile doküman yönetimini dijitalleştirin</p>
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
