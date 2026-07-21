'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Settings, FileText, BookOpen, Layers, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    icon: Settings,
    title: 'Mikro ERP Nedir ve Neden Önemlidir?',
    description: 'Mikro ERP (Enterprise Resource Planning), işletmelerin tüm kaynaklarını planlama, yönetme ve optimize etme süreçlerini tek bir entegre sistemde toplayan kurumsal kaynak planlaması yazılımıdır. Mikro muhasebe programı özelliği ile finans yönetiminden stok takibine, satış süreçlerinden insan kaynakları yönetimine kadar tüm operasyonları kolaylaştırır. Küçük ve orta ölçekli işletmeler için özel olarak tasarlanan mikro ERP çözümleri, büyük kurumsal sistemlerin güçlü özelliklerini daha erişilebilir ve uygun maliyetli bir şekilde sunar.'
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
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

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
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
        >
          Mikro ERP ve E-Dönüşüm Rehberi
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left 2/3: Accordion List */}
          <div className="lg:col-span-2 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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

          {/* Right 1/3: Glowing Dark Accent Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 p-[2px] bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] via-[#4361EE] to-[#FF007F] rounded-2xl shadow-[0_15px_40px_rgba(168,85,247,0.15)] overflow-visible lg:sticky lg:top-28"
          >
            <div className="w-full h-full bg-[#0E121F] rounded-[14px] p-8 text-white relative overflow-hidden flex flex-col justify-center">
              {/* Mesh & Glows */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-purple-500 rounded-full animate-pulse" />
                Neden Gökkuşağı Yazılım?
              </h3>
              <p className="text-slate-300 text-base leading-relaxed relative z-10 font-medium">
                19 yılı aşkın deneyimimiz ve 500'den fazla mutlu müşterimizle, Türkiye'nin lider mikro ERP ve e-dönüşüm çözümleri sağlayıcısıyız. Mikro Fly, Mikro Run ve Mikro Jump ürünlerimiz ile her ölçekteki işletmeye özel çözümler sunuyoruz. E-fatura, e-defter ve e-arşiv sistemlerimiz tamamen yerlidir. Uzman desteğimizle yanınızdayız.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
