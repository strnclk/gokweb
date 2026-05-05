'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, Package, Building, Zap, Briefcase, Factory, FileText, GitCompare, Workflow, FolderOpen, Star, TrendingUp, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMikroDropdownOpen, setIsMikroDropdownOpen] = useState(false);
  const [isEflowDropdownOpen, setIsEflowDropdownOpen] = useState(false);
  const [isSectoralDropdownOpen, setIsSectoralDropdownOpen] = useState(false);
  const [isVerticalDropdownOpen, setIsVerticalDropdownOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(0);

  const contactInfo = [
    { type: 'phone', icon: Phone, text: '0539 856 35 78', link: 'tel:05398563578' },
    { type: 'email', icon: Mail, text: 'satis@gokkusagiyazilim.com.tr', link: 'mailto:satis@gokkusagiyazilim.com.tr' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContact((prev) => (prev + 1) % contactInfo.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMikroDropdownOpen(false);
      setIsEflowDropdownOpen(false);
      setIsSectoralDropdownOpen(false);
      setIsVerticalDropdownOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Gökkuşağı Yazılım" className="h-16 w-auto" />
            </Link>
            
            {/* Animated Contact Info */}
            <div className="hidden lg:flex items-center h-16 relative">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: currentContact === index ? 1 : 0,
                    x: currentContact === index ? 0 : -10
                  }}
                  className="flex items-center gap-2 hover:scale-105 transition-transform  group absolute top-1/2 -translate-y-1/2"
                >
                  <contact.icon size={18} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-8">
            {/* Mikro Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsMikroDropdownOpen(true)}
              onMouseLeave={() => setIsMikroDropdownOpen(false)}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMikroDropdownOpen(!isMikroDropdownOpen);
                }}
                className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/products') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <Package className="w-4 h-4" />
                Mikro
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMikroDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {!isActive('/products') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
              
              <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isMikroDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/mikro-run" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Package className="w-4 h-4" />
                  Mikro Run
                </Link>
                <Link href="/mikro-jump" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Package className="w-4 h-4" />
                  Mikro Jump
                </Link>
                <Link href="/mikro-fly" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Package className="w-4 h-4" />
                  Mikro Fly
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link href="/compare" className="flex items-center gap-3 px-5 py-3 text-blue-600 hover:bg-blue-50/80 font-semibold transition-all duration-200">
                  <GitCompare className="w-4 h-4" />
                  Ürünleri Karşılaştır
                </Link>
              </div>
            </div>

            {/* Mikro Dikey Çözümler Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsVerticalDropdownOpen(true)}
              onMouseLeave={() => setIsVerticalDropdownOpen(false)}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVerticalDropdownOpen(!isVerticalDropdownOpen);
                }}
                className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/vertical-solutions') || isActive('/solutions') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <Building className="w-4 h-4" />
                Mikro Dikey Çözümler
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isVerticalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {!isActive('/vertical-solutions') && !isActive('/solutions') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
              
              <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isVerticalDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/vertical-solutions" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Building className="w-4 h-4" />
                  Mikro Dikey Çözümler
                </Link>
                <Link href="/solutions" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <TrendingUp className="w-4 h-4" />
                  Çözümleri Görüntüle
                </Link>
              </div>
            </div>

            {/* E-Flow Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsEflowDropdownOpen(true)}
              onMouseLeave={() => setIsEflowDropdownOpen(false)}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEflowDropdownOpen(!isEflowDropdownOpen);
                }}
                className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/eflow') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <Zap className="w-4 h-4" />
                E-Flow
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isEflowDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {!isActive('/eflow') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
              
              <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isEflowDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/eflow" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Zap className="w-4 h-4" />
                  E-Flow
                </Link>
                <Link href="/eflow-bpm" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Workflow className="w-4 h-4" />
                  BPM Çözümleri
                </Link>
                <Link href="/eflow-dms" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <FolderOpen className="w-4 h-4" />
                  DMS Çözümleri
                </Link>
              </div>
            </div>

            {/* Hizmetler */}
            <Link href="/services" className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
              <Briefcase className="w-4 h-4" />
              Hizmetler
              {!isActive('/services') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* Sektörel Çözümler Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsSectoralDropdownOpen(true)}
              onMouseLeave={() => setIsSectoralDropdownOpen(false)}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSectoralDropdownOpen(!isSectoralDropdownOpen);
                }}
                className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/sectoral-solutions') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <Factory className="w-4 h-4" />
                Sektörel Çözümler
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSectoralDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {!isActive('/sectoral-solutions') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
              
              <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isSectoralDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/sectoral-solutions" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Factory className="w-4 h-4" />
                  Sektörel Çözümler
                </Link>
                <Link href="/featured-works" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Star className="w-4 h-4" />
                  Öne Çıkan Çalışmalarımız
                </Link>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/blog') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
              <FileText className="w-4 h-4" />
              Blog
              {!isActive('/blog') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </Link>

            {/* Teklif Al Butonu */}
            <Link href="/contact" className="px-5 py-2.5 bg-white text-gray-800 rounded-full border border-gray-200 hover:shadow-xl hover:from-purple-600 hover:via-pink-500 hover:to-blue-600 hover:bg-gradient-to-r hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 text-sm font-semibold">
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
            className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 py-4"
          >
            <div className="flex flex-col gap-3">
              {/* Mikro Dropdown - Mobil */}
              <div className="px-6">
                <button 
                  onClick={() => setIsMikroDropdownOpen(!isMikroDropdownOpen)}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group ${isActive('/products') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Package className="w-4 h-4" />
                  Mikro
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMikroDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {!isActive('/products') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
                
                {isMikroDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/mikro-run" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Package className="w-4 h-4" />
                      Mikro Run
                    </Link>
                    <Link href="/mikro-jump" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Package className="w-4 h-4" />
                      Mikro Jump
                    </Link>
                    <Link href="/mikro-fly" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Package className="w-4 h-4" />
                      Mikro Fly
                    </Link>
                    <div className="border-t border-gray-100 my-1 mx-4"></div>
                    <Link href="/compare" className="flex items-center gap-3 px-4 py-2.5 text-blue-600 hover:bg-blue-50/80 font-semibold transition-all duration-200 rounded-lg">
                      <GitCompare className="w-4 h-4" />
                      Ürünleri Karşılaştır
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Mikro Dikey Çözümler Dropdown - Mobil */}
              <div className="px-6">
                <button 
                  onClick={() => setIsVerticalDropdownOpen(!isVerticalDropdownOpen)}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group ${isActive('/vertical-solutions') || isActive('/solutions') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Building className="w-4 h-4" />
                  Mikro Dikey Çözümler
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isVerticalDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {!isActive('/vertical-solutions') && !isActive('/solutions') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
                
                {isVerticalDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/vertical-solutions" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Building className="w-4 h-4" />
                      Mikro Dikey Çözümler
                    </Link>
                    <Link href="/solutions" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <TrendingUp className="w-4 h-4" />
                      Çözümleri Görüntüle
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* E-Flow Dropdown - Mobil */}
              <div className="px-6">
                <button 
                  onClick={() => setIsEflowDropdownOpen(!isEflowDropdownOpen)}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group ${isActive('/eflow') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Zap className="w-4 h-4" />
                  E-Flow
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isEflowDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {!isActive('/eflow') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
                
                {isEflowDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/eflow" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Zap className="w-4 h-4" />
                      E-Flow Ana Sayfa
                    </Link>
                    <Link href="/eflow-bpm" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Workflow className="w-4 h-4" />
                      BPM Çözümleri
                    </Link>
                    <Link href="/eflow-dms" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <FolderOpen className="w-4 h-4" />
                      DMS Çözümleri
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link href="/services" className={`flex items-center gap-2 transition-all duration-300 font-medium text-base px-6 relative group ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
                <Briefcase className="w-4 h-4" />
                Hizmetler
                {!isActive('/services') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              {/* Sektörel Çözümler Dropdown - Mobil */}
              <div className="px-6">
                <button 
                  onClick={() => setIsSectoralDropdownOpen(!isSectoralDropdownOpen)}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group ${isActive('/sectoral-solutions') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Factory className="w-4 h-4" />
                  Sektörel Çözümler
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSectoralDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {!isActive('/sectoral-solutions') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
                
                {isSectoralDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/sectoral-solutions" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Factory className="w-4 h-4" />
                      Sektörel Çözümler
                    </Link>
                    <Link href="/featured-works" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Star className="w-4 h-4" />
                      Öne Çıkan Çalışmalarımız
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link href="/blog" className={`flex items-center gap-2 transition-all duration-300 font-medium text-base px-6 relative group ${isActive('/blog') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
                <FileText className="w-4 h-4" />
                Blog
                {!isActive('/blog') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>

              {/* Teklif Al Butonu - Mobil */}
              <Link href="/contact" className="mx-6 px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 hover:shadow-xl hover:from-purple-600 hover:via-pink-500 hover:to-blue-600 hover:bg-gradient-to-r hover:text-white hover:border-transparent transition-all duration-300 text-base font-semibold">
                Teklif Al
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
