'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Building2, Factory, ShoppingCart, Truck, Users, Briefcase, Sparkles, Target, Zap, Shield, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

export default function VerticalSolutionsPage() {
  const scrollToContact = () => {
    const message = 'Merhaba%20Dikey%20Çözümler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const industries = [
    {
      icon: ShoppingCart,
      name: 'Hızlı Satış Çözümleri',
      description: 'Hızlı sipariş alma, mobil satış, POS entegrasyonu',
      color: 'from-blue-600 to-blue-700',
      features: ['Mobil POS', 'Sipariş Yönetimi', 'Ödeme Entegrasyonu']
    },
    {
      icon: Factory,
      name: 'Üretim Yönetimi Çözümleri',
      description: 'İş emri yönetimi, MRP planlama, üretim takibi',
      color: 'from-blue-600 to-blue-700',
      features: ['MRP Planlama', 'İş Emri', 'Kapasite Planlama']
    },
    {
      icon: Shield,
      name: 'Kalite Yönetimi Çözümleri',
      description: 'Kalite kontrol, uyum yönetimi, denetim takibi',
      color: 'from-blue-600 to-blue-700',
      features: ['Kalite Kontrol', 'Uyum Yönetimi', 'Denetim Takibi']
    },
    {
      icon: Truck,
      name: 'Depo ve Lojistik Yönetimi',
      description: 'Stok yönetimi, rota optimizasyonu, kargo takibi',
      color: 'from-blue-600 to-blue-700',
      features: ['Stok Yönetimi', 'Rota Optimizasyonu', 'Kargo Takibi']
    },
    {
      icon: Users,
      name: 'B2B Bayi Yönetimi',
      description: 'Bayi ağ yönetimi, sipariş otomasyonu, performans analizi',
      color: 'from-blue-600 to-blue-700',
      features: ['Bayi Ağ Yönetimi', 'Sipariş Otomasyonu', 'Performans Analizi']
    },
    {
      icon: Briefcase,
      name: 'Süreç Yönetimi Çözümü',
      description: 'İş akışı otomasyonu, süreç optimizasyonu, BPM',
      color: 'from-blue-600 to-blue-700',
      features: ['İş Akışı Otomasyonu', 'Süreç Optimizasyonu', 'BPM']
    },
    {
      icon: TrendingUp,
      name: 'Raporlama ve Analiz Çözümleri',
      description: 'Dashboard, BI raporlama, veri analitiği',
      color: 'from-blue-600 to-blue-700',
      features: ['Dashboard', 'BI Raporlama', 'Veri Analitiği']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Sektörel Uzmanlık',
      description: 'Her sektör için özel olarak geliştirilmiş çözümler',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Hızlı Entegrasyon',
      description: 'Mevcut sistemlerinizle kolay entegrasyon',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Sürekli Destek',
      description: '7/24 teknik destek ve danışmanlık hizmeti',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Ölçeklenebilirlik',
      description: 'İşletmenizin büyümesiyle birlikte ölçeklenir',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-white pt-16 md:pt-0">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900"
            >
              Mikro Dikey
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Çözümler</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2"
            >
              Her sektörün ihtiyacına özel olarak tasarlanmış ERP çözümleri ile işletmenizi dijitalleştirin
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { label: 'Sektör', value: '20+' },
                { label: 'Müşteri', value: '500+' },
                { label: 'Yıl', value: '20+' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center hidden lg:flex"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Mikro Run Logo */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl rotate-6 shadow-lg flex items-center justify-center p-4">
                <img 
                  src="/mikro-run-logo.png" 
                  alt="Mikro Run" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Mikro Jump Logo */}
              <div className="absolute top-20 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl -rotate-6 shadow-lg flex items-center justify-center p-4">
                <img 
                  src="/mikro-jump-logo.png" 
                  alt="Mikro Jump" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Mikro Fly Logo */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl rotate-3 shadow-lg flex items-center justify-center p-4">
                <img 
                  src="/mikro-fly-logo.png" 
                  alt="Mikro Fly" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Dikey Çözümler</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              İşletmeniz için özel olarak tasarlanmış çözümler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isLastCard = index === industries.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={isLastCard ? 'lg:col-start-2' : ''}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-gray-300 group hover:scale-105">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                          <Icon size={20} className="sm:size-24 text-gray-700 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-900">{industry.name}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{industry.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <CheckCircle2 size={12} className="sm:size-14" />
              Neden Dikey Çözümler?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Neden Dikey Çözümler?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              İşletmeniz için somut ve ölçülebilir faydalar
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-gray-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                        <benefit.icon size={20} className="sm:size-24 text-gray-700 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles size={12} className="sm:size-14" />
                Başlayın
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Sektörünüze Uygun Çözümü Bulun
              </h2>
              <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Uzmanlarımız size en uygun Mikro dikey çözümü seçmenize yardımcı olsun
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 font-semibold shadow-xl text-sm sm:text-base"
                >
                  Teklif Al
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 border-white/30 text-white rounded-xl hover:bg-white/20 font-semibold text-sm sm:text-base"
                  >
                    İletişime Geç
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
