'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Zap, Shield, TrendingUp, BarChart, Smartphone, Users, Target, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import Image from 'next/image';

export default function EFlowPage() {
  const router = useRouter();

  const whyEflow = [
    { title: "Kod yazma bilgisine gerek olmadan iş süreci tasarla", desc: "Teknik bilgi gerektirmeden iş süreçlerinizi kolayca tasarlayın" },
    { title: "İhtiyaçlar değiştikçe süreç üzerinde kolaylıkla uyarla", desc: "Esnek yapı ile değişen gereksinimlere hızlıca uyum sağlayın" },
    { title: "Geliştiricilere veya BT ekiplerine bağımlı kalma", desc: "Citizen Developer olarak süreçlere aktif katılım sağlayın" }
  ];

  const advantages = [
    { title: "Kolay kurulum ve entegrasyon", icon: Zap },
    { title: "Ölçeklenebilir ve esnek yapı", icon: TrendingUp },
    { title: "Yüksek güvenlik ve veri koruma", icon: Shield },
    { title: "Mobil erişim ve kullanıcı dostu arayüz", icon: Smartphone },
    { title: "Güçlü raporlama ve analiz araçları", icon: BarChart },
    { title: "İş ve BT uyumunu sağlayın", icon: Users }
  ];

  const features = [
    { title: "Esnek tasarım imkanı", desc: "Limitlerinizi kendiniz belirleyin", icon: Target },
    { title: "Akıllıca süreç tasarımı", desc: "Görsel modelleme ile verileri hızla işleyin", icon: Zap },
    { title: "Tekrar kullanılabilir bileşenler", desc: "Tasarlanan süreçleri tekrar kullanarak zaman kazanın", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white pt-16 md:pt-0">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              No-Code Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
            >
              Neden E-Flow?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Kendi iş süreçlerinizi yaratmak, işte bu kadar kolay!
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ed4f37] text-white rounded-xl hover:bg-[#d64530] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Teklif Al
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <Image 
                src="/eflow3-logo.png" 
                alt="E-Flow BPM ve DMS İş Süreç Yönetim Platformu" 
                width={320}
                height={320}
                className="w-80 h-80 object-contain" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-40" />
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Why E-Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Neden mi E-Flow?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              E-Flow'un sağladığı en büyük avantajlardan biri, kullanıcı dostu arayüzü ile herkesin kolayca adapte olabilmesidir. İş süreçlerinizi dijitalleştirirken, teknik bilgiye gerek kalmadan sorunsuz bir geçiş yapabilirsiniz.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whyEflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is E-Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Farklı ölçekteki organizasyonlar için iş süreçleri geliştirme platformu</h2>
            <p className="text-2xl font-semibold text-[#40949c] mb-4">"E-Flow BPM"</p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Çoğu BPM uygulamasındaki bileşenlerde kodlamaya ihtiyaç vardır. Netoloji'nin No-code platform geliştiricileri, kullanıcıların görsel modelleme ögeleri olarak kullanacağı temel kodları yazmıştır. E-Flow ile bir süreç tasarlamaya başladığınızda aslında zaten yazılmış olan kodları derler ve kullanırsınız. İşte bu nedenle E-Flow kullanırken kod bilgisine ihtiyacınız olmaz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">İş süreçlerinizi akıllıca tasarlayın</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Görsel modelleme ile veriler hızla işlenir ve yönetilir. Sürükle-bırak arayüzü kodlama gereksinimini tamamen ortadan kaldırır. Bu sayede sınırsız olasılıkların kapıları açılır. Karmaşık veri modellerini oluşturmak kolaylaşır.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#40949c]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-[#40949c]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Tasarlanan süreçleri tekrar kullanarak zaman kazanın</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tasarlanan süreçlerin bileşenleri, yenilerini oluştururken tekrar kullanılabilir. Oluşturulan süreçler başkalarının kullanımı için paylaşıma açılabilir. Geleneksel geliştirme modellerinin saatler süren işleri sadece iki tıklamayla gerçekleşir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">E-Flow'un Avantajları</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <advantage.icon size={24} className="text-[#40949c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{advantage.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 md:p-16 rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#40949c]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ed4f37]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Başlayın
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                E-Flow ile Verimliliğinizi
                <br />
                <span className="bg-gradient-to-r from-[#40949c] to-[#ed4f37] bg-clip-text text-transparent">Zirveye Taşıyın.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                İş süreçlerinizi dijitalleştirerek daha verimli, hızlı ve hatasız bir çalışma ortamı yaratın. E-flow, size sadece zaman kazandırmakla kalmaz, aynı zamanda işlerinizi daha etkili bir şekilde yönetmenize olanak tanır. Hedeflerinize ulaşırken size güçlü bir dijital partner sunar.
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
