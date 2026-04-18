'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function EFlowPage() {
  const router = useRouter();

  const bpmFeatures = [
    { title: "Sürükle-Bırak Teknolojisi", desc: "Hiçbir kodlama bilgisine sahip olmadan E-Flow'un sürükle bırak yapısı ile iş süreçlerinizi tasarlayın ve yönetin." },
    { title: "Yapay Zeka Entegrasyonu", desc: "E-Flow'un ChatGPT entegrasyonu ile mevcut süreçlere kolayca erişin, süreç tasarımını hızla gerçekleştirin." },
    { title: "ERP Entegrasyonu", desc: "Hazır entegrasyon bileşenleri aracılığı ile en çok tercih edilen ERP uygulamaları ile kolay entegrasyon sağlayın." },
    { title: "Mobil Uygulama", desc: "Süreçlerinizi herhangi bir ek operasyon gerektirmeden mobil uygulama üzerinden yönetin, işinize kesintisiz ulaşın." },
    { title: "Kiralama Modeli", desc: "Sunucu ve ilk yatırım maliyeti olmadan, SaaS modeliyle daima güncel sürüme sahip olun." },
    { title: "Web ve Mobil Uyumlu", desc: "İşlerinizi her an ve her yerden kolaylıkla yönetin, iş süreçlerinize kesintisiz devam edin." }
  ];

  const processes = [
    { title: "Çoklu Kanal Yönetimi", desc: "Tüm pazar yerleri ve e-ticaret sitenizi tek bir panelden yönetin" },
    { title: "Otomatik Sipariş Yönetimi", desc: "Siparişleri otomatik olarak işleyin ve kargo takibi yapın" },
    { title: "Envanter Takibi", desc: "Gerçek zamanlı envanter yönetimi ve stok optimizasyonu" },
    { title: "Fiyat Yönetimi", desc: "Dinamik fiyatlandırma ve kampanya yönetimi" },
    { title: "Müşteri İlişkileri", desc: "CRM entegrasyonu ve müşteri memnuniyet takibi" },
    { title: "Raporlama ve Analiz", desc: "Detaylı satış raporları ve performans analizleri" }
  ];

  const advantages = [
    { title: "%85", subtitle: "Zaman Tasarrufu", desc: "Manuel işlemleri otomatikleştirerek zamanınızı %85 oranında tasarruf edin" },
    { title: "3x", subtitle: "Satış Artışı", desc: "Çoklu kanal satış ile gelirlerinizi 3 katına kadar artırın" },
    { title: "%99.9", subtitle: "Sistem Uptime", desc: "Kesintisiz hizmet ile iş sürekliliği sağlayın" },
    { title: "0", subtitle: "İnsan Hatası", desc: "Otomatik süreçlerle insan hatasını minimum seviyeye indirin" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <img src="/eflow3-logo.png" alt="E-Flow" className="w-40 h-40 mx-auto object-contain" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-slate-900"
          >
            E-Flow
            <br />
            <span className="text-slate-600">No-Code İş Süreçleri Yönetim Platformu</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Sürükle-bırak teknolojisi ile iş süreçlerinizi tasarlayın, yapay zeka entegrasyonu ile hızlandırın, ERP sistemleriyle entegre edin.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* What is E-Flow Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">E-Flow Nedir?</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              E-Flow (E-Flow Workflows) bir no-code platform olup, özellikle iş süreçlerinin dijitalleştirilmesi ve otomasyonu için geliştirilmiştir. 
              No-code platformlar, yazılım geliştirme konusunda teknik bilgi gerektirmeyen, kullanıcı dostu arayüzlerle iş süreçlerini oluşturmayı ve yönetmeyi sağlar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BPM Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">EFLOW BPM Özellikleri</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              İş süreçlerinizi yönetmek için geliştirilmiş güçlü özellikler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bpmFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Processes Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">E-Flow Süreçleri</h2>
            <p className="text-lg text-slate-600 mb-2">E-ticaret ve Pazar Yeri Entegrasyonu</p>
            <p className="text-base text-slate-500 max-w-4xl mx-auto">
              Tüm pazar yerleri ve e-ticaret sitenizi tek bir panelden yönetin, otomatik süreçlerle verimliliği artırın.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2 text-slate-900">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-slate-900">E-Flow Avantajları</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-900 text-white p-6 rounded-xl text-center"
              >
                <div className="text-4xl font-bold mb-2">{advantage.title}</div>
                <div className="text-base font-semibold mb-2">{advantage.subtitle}</div>
                <p className="text-slate-300 text-sm">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Sistem Seçenekleri</h2>
            <p className="text-lg text-slate-600 mb-2">İhtiyacınıza Uygun Fiyatlandırma Modeli</p>
            <p className="text-base text-slate-500 max-w-4xl mx-auto">
              İşletmenizin büyüklüğüne ve işlem hacminize göre en uygun sistemi seçin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Kontörlü Sistem</h3>
                <p className="text-base text-slate-600">Esnek kullanım, işlem başına ödeme</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-slate-900">Kontör Sistemi Nedir?</h4>
                <p className="text-slate-600 mb-4 text-sm">
                  Kontörlü sistemde, yaptığınız her işlem (sipariş, ürün ekleme, entegrasyon vb) için belirli miktarlarda kontör harcarsınız. Sadece kullandığınız kadar ödeme yaparsınız.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">Esnek kullanım - ihtiyacınız kadar kontör yükleyin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">İşlem başına maliyet - bütçe kontrolü kolay</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">Başlangıç için düşük maliyet</span>
                  </li>
                </ul>
              </div>
              
           
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Lisans Sistemi</h3>
                <p className="text-base text-slate-600">Sabit aylık ücret, sınırsız kullanım</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-slate-900">Lisans Sistemi Nedir?</h4>
                <p className="text-slate-600 mb-4 text-sm">
                  Lisans sisteminde, yıllık sabit ücret ödeyerek tüm özellikleri sınırsız kullanabilirsiniz. Yüksek işlem hacmi olan işletmeler için ekonomiktir.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">Sınırsız işlem - ek maliyet yok</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">Tüm özellikler tam erişim</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">Öncelikli teknik destek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-900 mr-2 text-sm">✓</span>
                    <span className="text-slate-700 text-sm">Kurulum ve eğitim dahil</span>
                  </li>
                </ul>
              </div>
              
             
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center bg-slate-900 p-8 rounded-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">E-Flow ile Firma Gücünüzü Arttırın</h3>
            <p className="text-base mb-6 text-slate-300">Ücretsiz demo talep edin ve E-Flow'un gücünü keşfedin</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/contact')}
              className="bg-white text-slate-900 py-3 px-8 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300"
            >
              İletişime Geç
            </motion.button>
          </motion.div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
