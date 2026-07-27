'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Truck, Package, ScanBarcode, QrCode, Sparkles, ArrowRight, Phone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LojistikCozumleriPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} className="text-teal-600" />
            Sektörel Çözümler
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
          >
            Lojistik & Depo Çözümleri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
          >
            Deponuzda barkodlu mal kabul, adresleme ve sevk süreçlerini akıllı el terminalleriyle sıfır hatalı olarak yönetin.
          </motion.p>
        </div>
      </section>

      {/* Main Solution Card - Exactly like /solutions/ page format */}
      <section className="px-4 sm:px-6 pb-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package size={28} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Lojistik & Depo Yönetimi</h3>
                  <p className="text-gray-600">Deponuzun Tüm Giriş ve Çıkış Hareketlerini Kontrol Edin!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Barkod Yönetimi:</strong> Malzeme, paket, koli ve palet düzeyinde benzersiz barkod veya karekod etiketleri oluşturup el terminalleriyle okutarak hızlı işlem yapabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Depo Yönetimi (WMS):</strong> Deponuzu raf, göz ve koridor bazında adresleyebilir, mal yerleştirme ve toplama süreçlerini sistem yönlendirmesiyle yürütebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Sipariş Toplama ve Sevk:</strong> Sevkiyat emirlerine göre en kısa toplama rotalarını çıkarabilir, paketleme masası doğrulamalarıyla yanlış teslimatları önleyebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Mikro ERP Entegrasyonu:</strong> Yapılan tüm mal kabul, sayım, transfer ve sevk irsaliyelerini doğrudan Mikro stok fişlerine anlık yazabilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-teal-600 font-semibold text-sm">
                    Entegre Çözümler: Mikro WMS Depo, Ussoft Depo Yönetimi, Mikro Jump/Fly Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact?sector=lojistik" 
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
            >
              Hemen Teklif Al
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
