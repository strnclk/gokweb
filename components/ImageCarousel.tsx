'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GoogleReviewQR from '@/components/GoogleReviewQR';
import { GOOGLE_REVIEWS_URL } from '@/lib/constants';

type Slide = {
  image: string;
  title: string;
  description: string;
  features: string[];
  stats: string[];
  link: string;
};

export default function ImageCarousel() {
  const slides = useMemo<Slide[]>(() => [
    {
      image: '/rainbow.jpg',
      title: 'Yazılımdan Daha Fazlası',
      description: 'Yazılım bağımlılığının olmadığı, abonelik ve kiralama modeline sayesinde, düşük ilk yatırım maliyeti ile kullanmanın keyfini sunuyoruz.',
      features: ['Abonelik Modeli', 'Kiralama Seçeneği', 'Düşük Yatırım Maliyeti', 'Yazılım Bağımsız'],
      stats: ['Esnek Ödeme', 'Kolay Kullanım', 'Hızlı Kurulum'],
      link: '/services'
    },
    {
      image: '/rainbow.jpg',
      title: 'Uzman Destek Hizmeti',
      description: 'Yaşadığınız soruna kolayca çare bulabileceğiniz bir altyapıya ve dilediğinizde bizden daima yardım alabileceğiniz destek hizmetlerine sahibiz.',
      features: ['Sürekli Destek', 'Hızlı Çözüm', 'Uzman Ekip', 'Kolay Erişim'],
      stats: ['Kolay Ulaşılabilir', 'Anlık Yanıt', 'Profesyonel'],
      link: '/contact'
    },
    {
      image: '/rainbow.jpg',
      title: 'Deneyime Dayalı Güven',
      description: '20 yılın bilgi birikimi ve onlarca müşterinin kullanım deneyimi ile geliştiriyor; servislerimizi abonelerimizin ihtiyaçlarına göre şekillendiriyoruz.',
      features: ['20 Yıl Deneyim', 'Müşteri Odaklı', 'Güvenilir', 'Özelleştirilebilir'],
      stats: ['20+ Yıl', 'Onlarca Müşteri', 'Kanıtlanmış Başarı'],
      link: '/about'
    }
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // currentIndex bağımlılığı sayesinde her slayt değişiminde (manuel ok/nokta
  // tıklaması dahil) otomatik timer sıfırlanır; böylece manuel geçişten hemen
  // sonra timer'ın da tetiklenip bir slayt fazla atlaması (off-by-one) önlenir.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];
  if (!currentSlide) return null;

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-full sm:max-w-3xl lg:max-w-[40rem] xl:max-w-3xl"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  {currentSlide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6">
                  {currentSlide.description}
                </p>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentSlide.features.map((feature, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {currentSlide.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Sağ ok: lg+'ta yüzen QR kartı ile ekran kenarı arasındaki boşluğa sığacak
          şekilde hafif küçültülüp içeri alınır; kartla çakışmaz. */}
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-3 xl:right-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Floating Glassmorphism Customer Feedback QR Card (Sabit Yüzen Kart) */}
      <div className="hidden lg:block absolute right-16 xl:right-28 2xl:right-36 top-1/2 -translate-y-1/2 z-30">
        <div className="w-64 xl:w-72 backdrop-blur-xl bg-slate-900/60 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-4 xl:p-5 text-white transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:bg-slate-900/75 group">
          {/* Header & Rating */}
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <h4 className="text-[11px] font-black uppercase tracking-wider text-blue-200">
                Geri Bildirim
              </h4>
            </div>
            <div className="flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/40 text-[11px] font-extrabold">
              <span>★ 5.0</span>
            </div>
          </div>

          <h3 className="text-sm font-bold text-white text-center mb-3">
            Deneyiminizi Bizimle Paylaşın!
          </h3>

          {/* QR Code Box */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Değerlendirmeleri"
            className="w-28 h-28 xl:w-32 xl:h-32 bg-white rounded-xl p-1.5 shadow-2xl border-2 border-blue-400/60 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-105 relative overflow-hidden block"
          >
            <GoogleReviewQR url={GOOGLE_REVIEWS_URL} size={100} />
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-[10px] font-extrabold text-blue-950 bg-white/85 backdrop-blur-[1px] text-center px-1">
              Taramak İçin Tıklayın
            </div>
          </a>

          {/* CTA Link Button */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Google Color G Icon */}
            <svg className="w-3.5 h-3.5 shrink-0 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Google&apos;da Bizi Değerlendirin</span>
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
