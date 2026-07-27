'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Users, Award, CheckCircle2 } from 'lucide-react';
import Counter from './Counter';

export default function TrustSection({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [compact]);

  // compact (ilçe sayfaları): tasarım ana sayfadakiyle birebir aynı;
  // yalnızca dikey boşluk daraltılır (min-h ve büyük py kaldırılır).
  return (
    <section
      ref={ref}
      className={`${
        compact
          ? 'py-12 sm:py-16'
          : 'min-h-[60vh] sm:min-h-screen py-16 sm:py-32'
      } flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className={`${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'} font-bold text-center mb-20`}
        >
          Güvenilir Çözüm Ortağınız
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <Counter
            compact={compact}
            icon={<Users className={compact ? 'w-10 h-10' : 'w-12 h-12'} />}
            endValue={500}
            suffix="+"
            label="Müşteri"
            isInView={isInView}
            delay={0.05}
          />
          <Counter
            compact={compact}
            icon={<Award className={compact ? 'w-10 h-10' : 'w-12 h-12'} />}
            endValue={20}
            suffix="+"
            label="Yıl Deneyim"
            isInView={isInView}
            delay={0.1}
          />
          <Counter
            compact={compact}
            icon={<CheckCircle2 className={compact ? 'w-10 h-10' : 'w-12 h-12'} />}
            endValue={100}
            suffix="%"
            label="Uzman Destek"
            isInView={isInView}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
