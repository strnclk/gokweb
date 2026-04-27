'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, Package, Building, Zap, Briefcase, Factory, FileText, GitCompare } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Gökkuşağı Yazılım" className="h-16 w-auto" />
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-6">
            {/* Mikro Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 transition font-semibold text-lg relative group ${isActive('/products') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}
              >
                <Package className="w-4 h-4" />
                Mikro
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {!isActive('/products') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
              )}
              
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                >
                  <Link href="/mikro-run" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition">
                    <Package className="w-4 h-4" />
                    Mikro Run
                  </Link>
                  <Link href="/mikro-jump" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition">
                    <Package className="w-4 h-4" />
                    Mikro Jump
                  </Link>
                  <Link href="/mikro-fly" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition">
                    <Package className="w-4 h-4" />
                    Mikro Fly
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link href="/compare" className="flex items-center gap-3 px-4 py-3 text-purple-600 hover:bg-purple-50 font-semibold transition">
                    <GitCompare className="w-4 h-4" />
                    Ürünleri Karşılaştır
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Mikro Dikey Çözümler */}
            <Link href="/vertical-solutions" className={`flex items-center gap-2 transition font-semibold text-lg relative group ${isActive('/vertical-solutions') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
              <Building className="w-4 h-4" />
              Mikro Dikey Çözümler
              {!isActive('/vertical-solutions') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* E-Flow */}
            <Link href="/eflow" className={`flex items-center gap-2 transition font-semibold text-lg relative group ${isActive('/eflow') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
              <Zap className="w-4 h-4" />
              E-Flow
              {!isActive('/eflow') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* Hizmetler */}
            <Link href="/services" className={`flex items-center gap-2 transition font-semibold text-lg relative group ${isActive('/services') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
              <Briefcase className="w-4 h-4" />
              Hizmetler
              {!isActive('/services') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* Sektörel Çözümler */}
            <Link href="/sectoral-solutions" className={`flex items-center gap-2 transition font-semibold text-lg relative group ${isActive('/sectoral-solutions') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
              <Factory className="w-4 h-4" />
              Sektörel Çözümler
              {!isActive('/sectoral-solutions') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* Blog */}
            <Link href="/blog" className={`flex items-center gap-2 transition font-semibold text-lg relative group ${isActive('/blog') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
              <FileText className="w-4 h-4" />
              Blog
              {!isActive('/blog') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* Teklif Al Butonu */}
            <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg font-semibold">
              Teklif Al
            </Link>
          </div>

          <button className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:hidden bg-white border-t py-4"
          >
            <div className="flex flex-col gap-4">
              {/* Mikro Dropdown - Mobil */}
              <div className="px-6">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-2 transition font-semibold text-xl w-full text-left relative group ${isActive('/products') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}
                >
                  <Package className="w-5 h-5" />
                  Mikro
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {!isActive('/products') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
                
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-2"
                  >
                    <Link href="/mikro-run" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition rounded">
                      <Package className="w-4 h-4" />
                      Mikro Run
                    </Link>
                    <Link href="/mikro-jump" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition rounded">
                      <Package className="w-4 h-4" />
                      Mikro Jump
                    </Link>
                    <Link href="/mikro-fly" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition rounded">
                      <Package className="w-4 h-4" />
                      Mikro Fly
                    </Link>
                    <div className="border-t border-gray-100 my-1 mx-4"></div>
                    <Link href="/compare" className="flex items-center gap-3 px-4 py-2 text-purple-600 hover:bg-purple-50 font-semibold transition rounded">
                      <GitCompare className="w-4 h-4" />
                      Ürünleri Karşılaştır
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Diğer Menü Öğeleri - Mobil */}
              <Link href="/vertical-solutions" className={`flex items-center gap-2 transition font-semibold text-xl px-6 relative group ${isActive('/vertical-solutions') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
                <Building className="w-5 h-5" />
                Mikro Dikey Çözümler
                {!isActive('/vertical-solutions') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              <Link href="/eflow" className={`flex items-center gap-2 transition font-semibold text-xl px-6 relative group ${isActive('/eflow') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
                <Zap className="w-5 h-5" />
                E-Flow
                {!isActive('/eflow') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              <Link href="/services" className={`flex items-center gap-2 transition font-semibold text-xl px-6 relative group ${isActive('/services') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
                <Briefcase className="w-5 h-5" />
                Hizmetler
                {!isActive('/services') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              <Link href="/sectoral-solutions" className={`flex items-center gap-2 transition font-semibold text-xl px-6 relative group ${isActive('/sectoral-solutions') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
                <Factory className="w-5 h-5" />
                Sektörel Çözümler
                {!isActive('/sectoral-solutions') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              <Link href="/blog" className={`flex items-center gap-2 transition font-semibold text-xl px-6 relative group ${isActive('/blog') ? 'text-purple-600 font-bold' : 'text-gray-800 hover:text-purple-600'}`}>
                <FileText className="w-5 h-5" />
                Blog
                {!isActive('/blog') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              {/* Teklif Al Butonu - Mobil */}
              <Link href="/contact" className="mx-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-xl font-semibold">
                Teklif Al
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
