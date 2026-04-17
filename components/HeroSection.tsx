'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import GravityParticles from './GravityParticles';
import TypingAnimation from './TypingAnimation';

export default function HeroSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <GravityParticles />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl tracking-tight text-gray-900">
            <TypingAnimation 
              texts={[
                "İşletmenizin\nDijital Geleceği",
                "Şirketinizin\nTeknolojik Dönüşümü",
                "Kurumunuzun\nYenilikçi Çözümleri",
                "Firmanızın\nDijitalleşmesi"
              ]} 
              speed={80} 
              deleteSpeed={40}
              pauseDuration={2000}
            />
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto"
        >
          Mikro ERP ve E-Dönüşüm çözümleriyle tanışın
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => router.push('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => router.push('/contact')}
            className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            İletişime Geç
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
