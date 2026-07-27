'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Building2, Calculator, ShoppingBag, Landmark, Sparkles, ArrowRight, Phone
} from 'lucide-react';

export default function InsaatCozumleriPage() {
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
            className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
            style={{ animationDelay: '0s' }}
          >
            <Sparkles size={14} className="text-blue-600" />
            Sektörel Çözümler
          </div>
          
          <h1
            className="animate-fade-up text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
            style={{ animationDelay: '0.1s' }}
          >
            İnşaat Sektörü Çözümleri
          </h1>

          <p
            className="animate-fade-up text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            Şantiyelerinizin hak-ediş hesaplamalarından satın alma taleplerine kadar tüm inşaat ve şantiye yönetim süreçlerinizi Mikro ile entegre yönetin.
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
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 size={28} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">İnşaat ve Şantiye Yönetimi</h3>
                  <p className="text-gray-600">Şantiye Süreçlerinizi Tek Merkezden Kolayca Yönetin!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Hak-Ediş Hesaplama:</strong> Taşeron sözleşme şartları, yapılan iş miktarları, stopaj ve cezaları otomatik harmanlayarak hatasız hak-ediş raporları hazırlayabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Satın Alma Süreci:</strong> Şantiyeden gelen malzeme taleplerinden tedarikçi teklif toplamaya, onay mekanizmasından faturalandırmaya kadar tüm satın alma döngüsünü kontrol edebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Proje Maliyet Takibi:</strong> Şantiyelerinizin nakit akışını, taşeron borçlarını, malzeme stok durumlarını ve bütçe gerçekleşmelerini anlık izleyebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Sözleşme ve Taşeron Yönetimi:</strong> Projelerinizde çalışan her taşeron için özel sözleşme şartları ve birim fiyat tanımlamalarını saklayabilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-blue-600 font-semibold text-sm">
                    Entegre Çözümler: Mikro Run İnşaat, Mikro Jump İnşaat, Mikro Fly İnşaat Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact?sector=insaat"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
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
