'use client';

import { motion } from 'framer-motion';

export default function CompaniesSection() {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Müşterilerimiz</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Birlikte başarıya ulaştığımız şirketler
          </p>
        </motion.div>
        
        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03,
                ease: "easeOut"
              }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-full h-20 flex items-center justify-center mb-3">
                <img
                  src={company.logo}
                  alt={`${company.name} logosu — Gökkuşağı Yazılım referans müşterisi`}
                  width={80}
                  height={64}
                  loading="lazy"
                  className="max-w-20 max-h-16 object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-800 text-center">{company.name}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-600 text-sm font-medium">
            Ve 100+ mutlu müşteri daha...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

