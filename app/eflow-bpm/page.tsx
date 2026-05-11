'use client';

import { Workflow, Users, Settings, BarChart3, CheckCircle, TrendingUp, Zap, Shield, Database, Globe, Target, ArrowRight, Sparkles, Smartphone, Play, Layers, FileText, Clock, Award, Lock } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function EflowBpmPage() {
  const router = useRouter();

  const features = [
    {
      icon: Workflow,
      title: 'Sürükle-Bırak Teknolojisi',
      description: 'Hiçbir kodlama bilgisine sahip olmadan E-Flow\'un sürükle bırak yapısı ile iş süreçlerinizi tasarlayın ve yönetin.',
      hasVideo: true
    },
    {
      icon: Database,
      title: 'ERP Entegrasyonu',
      description: 'Hazır entegrasyon bileşenleri aracılığı ile en çok tercih edilen ERP uygulamaları ile kolay entegrasyon sağlayın.',
      hasVideo: true
    },
    {
      icon: Globe,
      title: 'Kiralama Modeli',
      description: 'Sunucu ve ilk yatırım maliyeti olmadan, SaaS modeliyle daima güncel sürüme sahip olun.',
      hasVideo: false
    },
    {
      icon: Sparkles,
      title: 'Yapay Zeka (AI) Entegrasyonu',
      description: 'E-Flow\'un ChatGPT entegrasyonu ile mevcut süreçlere kolayca erişin, süreç tasarımını hızla gerçekleştirin.',
      hasVideo: false
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulama',
      description: 'Süreçlerinizi herhangi bir ek operasyon gerektirmeden mobil uygulama üzerinden yönetin, işinize kesintisiz ulaşın.',
      hasVideo: true
    },
    {
      icon: Layers,
      title: 'Web ve Mobil Uyumlu',
      description: 'İşlerinizi her an ve her yerden kolaylıkla yönetin, iş süreçlerinize kesintisiz devam edin.',
      hasVideo: false
    }
  ];

  const benefits = [
    { title: 'Daha vizyoner bir bakış açısına sahip olun' },
    { title: 'Gelişmiş bir yönetim modeli elde edin' },
    { title: 'Firmanıza özel iş süreçleri tasarlayın' },
    { title: 'Masraflarınızı azaltın' },
    { title: 'Çalışan verimliliğinizi artırın' },
    { title: 'Onay süreçlerinizi ve karar mekanizmalarını hızlandırın' },
    { title: 'Zaman tasarrufu sağlayın' }
  ];

  const advantages = [
    { title: 'İş Süreçlerinin Otomasyonu', desc: 'Onay gerektiren manuel iş süreçlerinizi otomatikleştirin.', icon: Zap },
    { title: 'Verimlilik Artışı', desc: 'Optimize edilmiş iş süreçleri ile işletmenizi hızlı ve etkili bir şekilde yönetin.', icon: TrendingUp },
    { title: 'Analiz ve İzlenebilirlik', desc: 'İş süreçlerinde anlık raporlama avantajı ile doğru stratejik hedef geliştirme, hızlı karar verme ve kontrol imkanı elde edin.', icon: BarChart3 },
    { title: 'Güçlü Entegrasyon', desc: 'İş zekası (ChatGPT) ve hazır ERP entegrasyon bileşenleri aracılığı ile kolay entegrasyon sağlayın.', icon: Database },
    { title: 'Onay Mekanizması', desc: 'İş süreçlerine onay mekanızmasını dahil ederek, işlerin dijital ortamda doğru ve düzenli bir şekilde ilerlemesini sağlayın.', icon: CheckCircle },
    { title: 'Kullanıcı Yetkilendirmesi ve Güvenlik', desc: 'Kullanıcı yetkilendirme yönetimi ile güvenliğinizi bir üst seviyeye taşıyın.', icon: Lock },
    { title: 'Ölçeklenebilirlik', desc: 'İşletmenizin ölçeği ne olursa kullanıcı sayısına ve iş sürecine uyumlu bir iş akış süreci tasarlayın.', icon: Layers },
    { title: 'Kârlı Büyüme', desc: 'Daha etkin iş süreçleri, kaynakların verimli kullanımı ve yüksek performans ile kârlılığınızı artırın.', icon: Award }
  ];

  const processes = [
    'Masraf Süreci', 'Ödeme Takip Süreci', 'Evrak Takip Süreci', 'E-Fatura Entegrasyon Süreci', 'İşe Alım Süreci',
    'İzin Talep Süreci', 'SGK Giriş Süreci', 'Seyahat Talep Süreci', 'Hukuk Süreci', 'Gelen-Giden Evrak Süreci',
    'İdari Satın Alma Süreci', 'Depo Sevkiyat Süreci', 'Ürün Yönetimi Süreci', 'Müşteri Şikayet Süreci', 'Ürün Geliştirme Süreci',
    'Teklif Yönetimi Süreci', 'Ciro Hedefi Süreci', 'Rakip Durum Süreci', 'Sözleşme Süreçleri', 'Kurumsal Yönetim Süreci', 'KVKK Süreçleri'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-white pt-20 md:pt-0">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              No-Code BPM Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
            >
              E-Flow BPM ile
              <br />
              <span className="bg-gradient-to-r from-[#40949c] to-[#ed4f37] bg-clip-text text-transparent">dijital dönüşümü kodsuz yönlendirin!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              İş süreçlerinizi yönetmek için organizasyonunuzun ihtiyaçları ile örtüşen iş akış yönetimi uygulamanızı kendiniz tasarlayın.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#ed4f37] text-white rounded-xl hover:bg-[#d64530] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Teklif Al
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-[#40949c] to-[#ed4f37] rounded-3xl flex items-center justify-center">
                <Workflow size={64} className="text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#40949c] to-[#ed4f37] rounded-3xl blur-2xl opacity-40" />
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">E-Flow BPM Özellikleri</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              İş süreçlerinizi yönetmek için geliştirilmiş güçlü özellikler
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#ed4f37]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#ed4f37]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  {feature.hasVideo && (
                    <button className="inline-flex items-center gap-2 text-[#40949c] text-sm font-medium hover:text-[#40949c]/80">
                      <Play size={16} />
                      Video izle
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Esnek iş süreçleri parmaklarınızın ucunda</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-8 h-8 bg-[#ed4f37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-gray-900 font-medium">{benefit.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No-Code Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">No-code platformda geliştirme ve kullanım kolaylığı</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              E-Flow BPM'in "sürükle-bırak" yapısı ile iş süreçlerinizi yönetmek için organizasyonunuzun ihtiyaçları ile örtüşen iş akış yönetimi uygulamanızı kendiniz tasarlayın.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hiçbir kodlama bilgisine sahip olmadan, iş süreçlerinizi geliştirin ve kullanmaya başlayın. Değişen ihtiyaçlarınıza göre yeniden şekillendirin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              E-Flow BPM, farklı ölçekteki organizasyonlar için yatırım maliyeti düşük, kullanımı kolay bir üründür. E-Flow BPM'in çevik süreçleri ile iş dünyasının dinamik doğasına daha iyi uyum sağlayın ve rekabette öne çıkın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">E-Flow BPM: İşletmenize güç katan ayrıcalıklar</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#40949c]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processes Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">E-Flow BPM'de tasarlayabileceğiniz iş süreçleri</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#40949c] hover:shadow-md text-center"
              >
                <span className="text-gray-900 font-medium text-sm">{process}</span>
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
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 md:p-10 lg:p-16 rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#40949c]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-[#ed4f37]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Başlayın
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                E-Flow BPM ile İş Süreçlerinizi Dönüştürün
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                İş süreçlerinizi akıllı otomasyona dönüştürün, verimliliğinizi artırın.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 font-semibold shadow-xl"
              >
                İletişime Geç
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
