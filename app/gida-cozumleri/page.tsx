'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Users, Check, Sparkles, ArrowRight, Phone, Apple, ShieldCheck, Scale, History
} from 'lucide-react';
import { motion } from 'motion/react';

export default function GidaCozumleriPage() {
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
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} className="text-emerald-600" />
            Sektörel Çözümler
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
          >
            Gıda Sektörü Çözümleri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
          >
            Gıda güvenliği, son tüketim tarihi (SKT) kontrolü ve geriye dönük lot/parti izlenebilirliğini yasal standartlara uygun yönetin.
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
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Apple size={28} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Gıda Güvenliği & İzlenebilirlik</h3>
                  <p className="text-gray-600">Hammadde Girişinden Nihai Tüketiciye Kadar Lot İzleme!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Parti ve Lot Takibi:</strong> Hammadde mal kabulünde atanan lot numaralarını tüm üretim aşamalarında izleyebilir, hangi hammaddeyle hangi ürünün üretildiğini raporlayabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Kalite Yönetimi:</strong> Gıda imalatındaki kritik kontrol noktalarında kimyasal, fiziksel ve laboratuvar test sonuçlarını sisteme girip, kalitesiz ürünün sevkini otomatik engelleyebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Uçtan Uca İzlenebilirlik:</strong> Olası bir ürün geri çağırma (recall) durumunda, hatalı hammaddeden üretilen tüm parti kodlarını ve satılan müşterileri saniyeler içinde tespit edebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>FEFO ve Raf Ömrü:</strong> Depodaki ürünleri son tüketim tarihine (STT) göre takip edebilir, SKT'si yaklaşan ürünlerin kasadan veya depodan sevk edilmesini engelleyebilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-emerald-600 font-semibold text-sm">
                    Entegre Çözümler: Mikro Gıda Lot Entegrasyonu, Ussoft Gıda Barkod Takibi, Mikro Jump/Fly Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
            >
              Hemen Teklif Al
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
