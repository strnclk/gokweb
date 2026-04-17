'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  delay: number;
  route?: string;
}

export default function ProductCard({ image, icon, title, subtitle, description, gradient, delay, route }: ProductCardProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.9,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.4, delay }}
          className="text-center"
        >
          {image ? (
            <div className="mb-8">
              <img src={image} alt={title} className="w-48 h-48 mx-auto object-contain" />
            </div>
          ) : (
            <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${gradient} text-white mb-8 shadow-2xl`}>
              {icon}
            </div>
          )}
          
          <h3 className="text-5xl md:text-6xl mb-4">{title}</h3>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">{subtitle}</p>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{description}</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
            className="mt-12"
          >
            <button 
              onClick={() => route && router.push(route)}
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Daha Fazla Bilgi
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
