'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CTASection() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const handleTeklifAlClick = () => {
    router.push('/contact');
  };

  const handleDemoClick = () => {
    router.push('/contact');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-[60vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-gray-900"
        >
          İşinizi dijitalleştirmeye<br />hazır mısınız?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-900 mb-12"
        >
          Size özel çözümlerimiz hakkında bilgi almak için hemen iletişime geçin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleTeklifAlClick}
            className="px-10 py-5 bg-gray-900 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center gap-2"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleDemoClick}
            className="px-10 py-5 border-2 border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-lg"
          >
            Demo İsteyin
          </button>
        </motion.div>
      </div>
    </section>
  );
}
