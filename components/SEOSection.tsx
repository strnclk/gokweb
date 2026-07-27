'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Settings, FileText, BookOpen, Layers, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    icon: Settings,
    title: 'Mikro ERP Nedir ve Neden Önemlidir?',
    description: 'Mikro ERP (Enterprise Resource Planning), işletmelerin tüm kaynaklarını planlama, yönetme ve optimize etme süreçlerini tek bir entegre sistemde toplayan kurumsal kaynak planlaması yazılımıdır. Mikro muhasebe programı özelliği ile finans yönetiminden stok takibine, satış süreçlerinden insan kaynakları yönetimine kadar tüm operasyonları kolaylaştırır. Her ölçekteki işletme için tasarlanan mikro ERP çözümleri, güçlü kurumsal özellikleri erişilebilir ve uygun maliyetli bir şekilde sunar.'
  },
  {
    icon: FileText,
    title: 'E-Fatura Nedir?',
    description: 'E-fatura nedir sorusunun cevabı oldukça basittir: Kağıt fatura yerine elektronik ortamda oluşturulan, Gelir İdaresi Başkanlığı tarafından onaylanan ve yasal geçerliliği olan dijital faturalardır. E-fatura sistemi, işletmelerin fatura süreçlerini hızlandırır, maliyetleri azaltır ve arşivleme işlemlerini kolaylaştırır. Gökkuşağı Yazılım\'ın e-fatura çözümleri ile faturalarınızı saniyeler içinde oluşturabilir, gönderebilir ve takip edebilirsiniz.'
  },
  {
    icon: BookOpen,
    title: 'E-Defter Nedir ve Avantajları',
    description: 'E-defter nedir diye sorduğunuzda, yasal defterlerin elektronik ortamda tutulması ve saklanması sistemi olarak tanımlanabilir. E-defter sistemi ile yevmiye defteri, büyük defter ve envanter defterlerinizi dijital ortamda tutabilir, kağıt kullanımını ortadan kaldırabilirsiniz. Bu sistem hem çevre dostu hem de maliyet tasarrufu sağlayan bir çözümdür. Ayrıca denetim süreçlerini hızlandırır ve arşivleme için fiziksel alan ihtiyacını ortadan kaldırır.'
  },
  {
    icon: Layers,
    title: 'Mikro Muhasebe Programı Özellikleri',
    description: 'Mikro muhasebe programı, işletmelerin finansal işlemlerini kolayca yönetmelerine olanak tanıyan kapsamlı bir yazılımdır. Gelir-gider takibi, banka hareketleri, cari hesap takibi ve detaylı raporlama özellikleriyle muhasebe süreçlerinizi otomatikleştirir. Mikro ERP sistemiyle entegre çalışan muhasebe modülü, tüm finansal verilerinizi gerçek zamanlı olarak takip etmenizi sağlar.'
  }
];

export default function SEOSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All items closed by default

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
    <section ref={ref} className="px-4 sm:px-6 py-16 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
        >
          Mikro ERP ve E-Dönüşüm Rehberi
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Accordion List (side card removed; its text now lives at the bottom of the About section) */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Outline Icon Container */}
                      <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                        {item.title}
                      </span>
                    </div>
                    {/* Rotating chevron */}
                    <div className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}>
                      <ChevronDown size={22} />
                    </div>
                  </button>

                  {/* Height animated accordion description - text size increased to text-lg md:text-xl, line-height set to leading-relaxed md:leading-loose */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-lg md:text-xl text-slate-700 leading-relaxed md:leading-loose pl-6 md:pl-20 font-medium">
                      {item.description}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
