'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Check, Sparkles, ArrowRight, Phone, Heart, Stethoscope, ShieldCheck, Activity
} from 'lucide-react';

export default function SaglikCozumleriPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="/rainbw.webp" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
          <div
            className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-200 rounded-full text-rose-700 text-sm font-medium mb-6"
            style={{ animationDelay: '0s' }}
          >
            <Sparkles size={14} className="text-rose-600" />
            Sektörel Çözümler
          </div>
          
          <h1
            className="animate-fade-up text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
            style={{ animationDelay: '0.1s' }}
          >
            Sağlık & Medikal Çözümleri
          </h1>

          <p
            className="animate-fade-up text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            Sağlık Bakanlığı Ürün Takip Sistemi (ÜTS) bildirimlerini ve medikal depolarınızdaki lot/reload takibini yasal uyumlulukla yönetin.
          </p>
        </div>
      </section>

      {/* Main Solution Card - Exactly like /solutions/ page format */}
      <section className="px-4 sm:px-6 pb-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="animate-fade-up bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: '0s' }}
          >
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope size={28} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Medikal Takip & ÜTS Entegrasyonu</h3>
                  <p className="text-gray-600">ÜTS Bildirimlerini ve Steril Lot/Reload Süreçlerini Otomatikleştirin!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-rose-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>ÜTS Bildirimi:</strong> Tıbbi cihazların alma, verme, kullanım ve imha bildirimlerini Sağlık Bakanlığı Ürün Takip Sistemi portalına tek tuşla otomatik gönderebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Lot ve Reload Takibi:</strong> Steril cerrahi malzemelerin, sarfların ve implantların lot numaralarını ve reload (tekrar yükleme) partilerini anlık olarak takip edebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Sterilizasyon ve Miad Kontrolü:</strong> Medikal depolarınızdaki ürünlerin sterilizasyon son kullanım tarihlerini izleyebilir, miadı dolmaya yakın ürünleri otomatik kilitleyebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Mikro ERP Entegrasyonu:</strong> Tüketilen medikal sarfları ve ÜTS lot hareket kayıtlarını doğrudan Mikro stok fişlerine anlık olarak senkronize edebilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-rose-600 font-semibold text-sm">
                    Entegre Çözümler: Mikro Sağlık ÜTS Entegrasyonu, Ussoft Medikal Takip Çözümü, Mikro Jump/Fly Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact?sector=saglik"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
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
