'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CounterProps {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}

export default function Counter({ icon, endValue, suffix, label, isInView, delay }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      <div className="flex justify-center mb-6 text-purple-400">
        {icon}
      </div>
      <div className="text-6xl md:text-7xl mb-4">
        {count}{suffix}
      </div>
      <div className="text-xl text-gray-300">{label}</div>
    </motion.div>
  );
}
