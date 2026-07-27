'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  ShoppingCart, Zap, Store, CreditCard, Sparkles, ArrowRight, Phone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PerakendeCozumleriPage() {
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} className="text-orange-600" />
            Sektörel Çözümler
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
          >
            Perakende Sektörü Çözümleri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
          >
            Mağazalarınızda ve şubelerinizde barkodlu satış, banka entegrasyonu ve hızlı ödeme altyapıları ile müşteri kuyruklarına son verin.
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
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShoppingCart size={28} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Perakende & Hızlı Satış</h3>
                  <p className="text-gray-600">Satış Süreçlerinizi Hızlandırın, Kasada Zaman Kazanın!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Hızlı Satış:</strong> Dokunmatik ekran uyumlu pratik arayüz ile ürün barkodlarını okutabilir, ödemeyi saniyeler içinde nakit veya kredi kartıyla tamamlayabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Kampanya ve Sadakat Yönetimi:</strong> Merkezden tanımlanan indirimleri, puan kazanımlarını veya sepet kampanyalarını şubelerdeki kasalarda eş zamanlı uygulayabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>ÖKC ve Banka Entegrasyonu:</strong> Yeni nesil ödeme kaydedici yazar kasa cihazları ve banka sistemleriyle yasal mevzuatlara %100 uyumlu haberleşebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Canlı Şube ve Stok İzleme:</strong> Mağazalarda satılan ürünlerin stoklarını Mikro ERP envanterinden canlı düşebilir, şubeler arası ürün transferleri yapabilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-orange-600 font-semibold text-sm">
                    Entegre Çözümler: Mikro Hızlı Satış, Fastsell Hızlı Satış, Mizan Hızlı Satış, Mikro ERP Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact?sector=perakende" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
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
