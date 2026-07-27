'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Factory, Cpu, Settings, BarChart3, Sparkles, ArrowRight, Phone
} from 'lucide-react';

export default function UretimCozumleriPage() {
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
            className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-6"
            style={{ animationDelay: '0s' }}
          >
            <Sparkles size={14} className="text-amber-600" />
            Sektörel Çözümler
          </div>
          
          <h1
            className="animate-fade-up text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
            style={{ animationDelay: '0.1s' }}
          >
            Üretim Sektörü Çözümleri
          </h1>

          <p
            className="animate-fade-up text-base sm:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            Fabrika sahanızdaki anlık üretim durumlarını, makine duruşlarını ve operatör bildirimlerini MES entegrasyonu ile canlı yönetin.
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
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Factory size={28} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Üretim & MES Çözümü</h3>
                  <p className="text-gray-600">Sahadan Veri Toplayın, Üretim Süreçlerinizi Doğru Yönetin!</p>
                </div>
              </div>

              <div className="text-left space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Özellikler:</h4>
                  <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>MES Çözümleri:</strong> Makine başındaki operatör terminalleri, barkod okuyucular ve endüstriyel panolar aracılığıyla üretim sahasını anlık olarak dijitalleştirip izleyebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>Anlık Makine İzleme:</strong> Fabrikadaki makinelerin çalışma, duruş, arıza ve ayar durumlarını canlı dashboard ekranlarından takip edebilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>OEE ve Verimlilik Raporu:</strong> Ekipman etkinliğinizi (Kullanılabilirlik, Performans, Kalite) anlık ölçebilir ve OEE skorlarınızı otomatik alabilirsiniz.
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-2.5 mt-0.5">•</span>
                      <strong>İş Emri Entegrasyonu:</strong> Mikro ERP üzerinde planlanan iş emirlerini doğrudan sahadaki operatör ekranlarına yansıtabilir ve fire/üretim miktarlarını otomatik geri bildirebilirsiniz.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-amber-600 font-semibold text-sm">
                    Entegre Çözümler: Ussoft Üretim Yönetimi, Mikro Jump Üretim, Mikro Fly Üretim Entegrasyonu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Direct Call Action */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact?sector=uretim"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
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
