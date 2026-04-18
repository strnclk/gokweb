'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  image?: string;
  images?: string[];
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  gradient: string;
  delay: number;
  route?: string;
}

export default function ProductCard({ image, images, icon, title, subtitle, description, features, gradient, delay, route }: ProductCardProps) {
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
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.95,
            y: isInView ? 0 : 30
          }}
          transition={{ duration: 0.8, delay: delay * 0.2, ease: "easeOut" }}
          className="text-center"
        >
          {images ? (
            <div className="mb-10 flex justify-center items-center gap-4">
              {images.map((img, idx) => (
                <img key={idx} src={img} alt={title} className="w-32 h-32 object-contain filter drop-shadow-lg" />
              ))}
            </div>
          ) : image ? (
            <div className="mb-10">
              <img src={image} alt={title} className="w-40 h-40 mx-auto object-contain filter drop-shadow-lg" />
            </div>
          ) : (
            <div className={`inline-flex p-8 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-10 shadow-lg`}>
              {icon}
            </div>
          )}
          
          <h3 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 tracking-tight">{title}</h3>
          <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">{subtitle}</p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mb-10">{description}</p>

          {features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: delay * 0.2 + 0.1, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-white text-sm font-semibold">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: delay * 0.2 + 0.2, ease: "easeOut" }}
            className="mt-10"
          >
            <button 
              onClick={() => route && router.push(route)}
              className="px-10 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg border border-slate-800"
            >
              Daha Fazla Bilgi
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
