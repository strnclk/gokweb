'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleTeklifAlClick = () => {
    router.push('/contact');
  };

  const highlights = [
    { icon: Zap, text: 'Hızlı Entegrasyon' },
    { icon: Shield, text: 'Güvenli Altyapı' },
    { icon: TrendingUp, text: 'Verimlilik Artışı' }
  ];

  const words = ['Dijital Geleceği', 'ERP Çözümü', 'E-Dönüşümü', 'Büyüme Yolculuğu', 'Rekabet Gücünü'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8"
          >
            <Zap size={14} />
            Resmi Mikro Bayii
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            İşletmenizin
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {displayText}
              <span className="inline-block w-[2px] h-[0.8em] bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-pulse align-middle ml-0.5 shadow-[0_0_8px_2px_rgba(168,85,247,0.5),0_0_16px_4px_rgba(59,130,246,0.3),0_0_24px_6px_rgba(34,197,94,0.2)]" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Mikro ERP ve E-Dönüşüm çözümleriyle işletmenizi dijital çağa hazırlayın. 19+ yıllık deneyimle yanınızdayız.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={handleTeklifAlClick}
              aria-label="Teklif Al - İletişim sayfasına gidin"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 font-medium"
            >
              Teklif Al
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-blue-600" />
                {item.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src="/yetkili.png" alt="Mikro Yetkili Bayii" className="h-16 mx-auto opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
