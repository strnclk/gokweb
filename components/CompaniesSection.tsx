'use client';

import { motion, useScroll } from 'framer-motion';

export default function CompaniesSection() {
  const { scrollX } = useScroll();
  
  const companies = [
    { name: 'Midas', logo: '/company-logos/midas.png' },
    { name: 'Belusso', logo: '/company-logos/belusso.png' },
    { name: 'Bostancıoglu', logo: '/company-logos/bostancıoglu.png' },
    { name: 'Fenac', logo: '/company-logos/fenac.png' },
    { name: 'Haksan', logo: '/company-logos/haksan.png' },
    { name: 'Lely', logo: '/company-logos/lely.png' },
    { name: 'Lidio', logo: '/company-logos/lidio.png' },
    { name: 'Liebherr', logo: '/company-logos/liebher.png' },
    { name: 'Nova', logo: '/company-logos/nova.png' },
    { name: 'Palajans', logo: '/company-logos/palajans.png' },
    { name: 'Quantum', logo: '/company-logos/quantum.png' },
    { name: 'Teknokon', logo: '/company-logos/teknokon.png' }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Müşterilerimiz</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Birlikte başarıya ulaştığımız şirketler
          </p>
        </motion.div>
        
        {/* Companies Carousel */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: scrollX * -0.5 }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white/95 transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-24 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-24 max-h-20 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{company.name}</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-3"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Ve 100+ mutlu müsteri daha...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

