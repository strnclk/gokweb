'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GoogleReviewQR from '@/components/GoogleReviewQR';
import { GOOGLE_REVIEWS_URL } from '@/lib/constants';

type Slide = {
  image: string;
  title: string;
  description: string;
  features?: string[];
  stats?: string[];
  link: string;
  isReview?: boolean;
  qrUrl?: string;
};

export default function ImageCarousel() {
  const slides = useMemo<Slide[]>(() => [
    {
      image: '/rainbow.jpg',
      title: 'Deneyiminizi Bizimle Paylaşın',
      description: 'Görüşleriniz bizim için çok değerli. Kodu okutun ya da tıklayın, Google’da bizi değerlendirerek deneyiminizi diğer işletmelerle paylaşın.',
      link: GOOGLE_REVIEWS_URL,
      isReview: true,
      qrUrl: GOOGLE_REVIEWS_URL,
    },
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
      description: '25 yılın bilgi birikimi ve onlarca müşterinin kullanım deneyimi ile geliştiriyor; servislerimizi abonelerimizin ihtiyaçlarına göre şekillendiriyoruz.',
      features: ['25 Yıl Deneyim', 'Müşteri Odaklı', 'Güvenilir', 'Özelleştirilebilir'],
      stats: ['25+ Yıl', 'Onlarca Müşteri', 'Kanıtlanmış Başarı'],
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
              <div className="flex items-center gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="min-w-0 max-w-full sm:max-w-3xl"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  {currentSlide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6">
                  {currentSlide.description}
                </p>

                {currentSlide.isReview ? (
                  /* Müşteri Deneyim Köşesi - CTA solda; QR sağda (aşağıda absolute) */
                  <div className="mb-6 sm:mb-8">
                    {/* CTA - Google logosu ve marka renkli buton, sola hizalı ve büyütülmüş */}
                    <a
                      href={currentSlide.qrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-white text-blue-800 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:bg-blue-50 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" aria-hidden="true">
                        <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.26-2.09 3.58-5.17 3.58-8.87z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24z" />
                        <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l3.99-3.09z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.28 6.63l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
                      </svg>
                      Google&apos;da bizi değerlendirin
                    </a>

                    {/* Mobil QR - sağ boşluk olmadığından küçük ekranda CTA'nın altında */}
                    <a
                      href={currentSlide.qrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:hidden mt-5 inline-block rounded-2xl bg-white p-2.5 shadow-lg ring-1 ring-white/20"
                      aria-label="Google Yorumları sayfasını aç"
                    >
                      <GoogleReviewQR url={currentSlide.qrUrl!} size={140} />
                    </a>
                  </div>
                ) : (
                  <>
                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {currentSlide.features?.map((feature, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {currentSlide.stats?.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>

              {/* Büyük QR - metin bloğunun sağında, kapsayıcı içinde akar (yalnızca lg+).
                  ml-auto ile sağ kenara yaslanır; gap sayesinde metinle asla çakışmaz. */}
              {currentSlide.isReview && (
                <motion.a
                  href={currentSlide.qrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hidden lg:block ml-auto flex-shrink-0 z-20 rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-105"
                  aria-label="Google Yorumları sayfasını aç"
                >
                  <GoogleReviewQR url={currentSlide.qrUrl!} size={240} />
                </motion.a>
              )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
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
