'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Users, Award, CheckCircle2 } from 'lucide-react';
import Counter from './Counter';

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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
    <section ref={ref} className="min-h-[60vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Güvenilir Çözüm Ortağınız
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <Counter
            icon={<Users className="w-12 h-12" />}
            endValue={500}
            suffix="+"
            label="Müşteri"
            isInView={isInView}
            delay={0.2}
          />
          <Counter
            icon={<Award className="w-12 h-12" />}
            endValue={19}
            suffix="+"
            label="Yıl Deneyim"
            isInView={isInView}
            delay={0.4}
          />
          <Counter
            icon={<CheckCircle2 className="w-12 h-12" />}
            endValue={100}
            suffix="%"
            label="Uzman Destek"
            isInView={isInView}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
