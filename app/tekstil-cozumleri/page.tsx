'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Briefcase, Check, Sparkles, ArrowRight, Phone, Scissors, Store, Shirt, Layers
} from 'lucide-react';
import { motion } from 'motion/react';

export default function TekstilCozumleriPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.png" alt="Rainbow Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} className="text-indigo-600" />
            Sektörel Çözümler
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
          >
            Tekstil Sektörü Çözümleri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
          >
            Tekstil ve hazır giyim şubelerinizde renk/beden matrisi takipleri ve mağazacılık POS uygulamaları ile satış hızınızı artırın.
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
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shirt size={28} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Tekstil & Mağazacılık Çözümü</h3>
                  <p className="text-gray-600">Varyant Matrisi ve Şube Satışlarınızı Kolayca İzleyin!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Mağazacılık Çözümleri:</strong> Tekstil şubelerinizde barkod okutarak hızlı hediye çeki, iade süreçleri ve müşteri sadakat puanı takipleri yapabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Renk ve Beden (Varyant) Matrisi:</strong> Tek ürün altında binlerce renk, beden ve kombinasyonu oluşturabilir, stokları pratik matrislerle sorgulayabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Fason İmalat Takibi:</strong> Atölyelere gönderilen kumaşların, dikim işçilik faturalarının ve standart dışı fire oranlarının kontrolünü gerçekleştirebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Mikro ERP Entegrasyonu:</strong> Koleksiyon kartlarını, fason atölye masraflarını ve mağaza POS cirolarını doğrudan Mikro veritabanına aktarabilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-indigo-600 font-semibold text-sm">
                    Entegre Çözümler: Mikro Fason Takip, Tekstil POS Perakende Çözümleri, Mikro Jump/Fly Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
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
