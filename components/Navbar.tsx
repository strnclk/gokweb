'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, Package, Building, Zap, Briefcase, Factory, FileText, GitCompare, Workflow, FolderOpen, Star, TrendingUp, Phone, Mail, Layers, LifeBuoy, Route, Users, Settings, Receipt, Code2, Compass, GraduationCap, Wallet } from 'lucide-react';
import MikroHorseIcon from '@/components/MikroHorseIcon';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMikroDropdownOpen, setIsMikroDropdownOpen] = useState(false);
  const [isEflowDropdownOpen, setIsEflowDropdownOpen] = useState(false);
  const [isSectoralDropdownOpen, setIsSectoralDropdownOpen] = useState(false);
  const [isVerticalDropdownOpen, setIsVerticalDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(0);

  // Mobil menü açıldığında body scroll'u engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const contactInfo = [
    { type: 'phone', icon: Phone, text: '0539 856 35 78', link: 'tel:05398563578' },
    { type: 'phone2', icon: Phone, text: '0216 574 83 43', link: 'tel:+902165748343' },
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

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth >= 1280) {
        // Bir dropdown başlığına/menüsüne tıklanmışsa kapatma; toggle'ı butonun
        // kendi onClick'i yönetsin (aksi halde açılış anında tekrar kapanır).
        if ((e.target as HTMLElement).closest('[data-nav-dropdown]')) return;
        setIsMikroDropdownOpen(false);
        setIsEflowDropdownOpen(false);
        setIsSectoralDropdownOpen(false);
        setIsVerticalDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
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
                  className={`flex items-center gap-2 hover:scale-105 group absolute top-1/2 -translate-y-1/2 transition-opacity ${currentContact === index ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}`}
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
              data-nav-dropdown
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
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
              )}
              
              <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isMikroDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/mikro-run" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <MikroHorseIcon src="/mikro-run-horse.png" />
                  Mikro Run
                </Link>
                <Link href="/mikro-jump" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <MikroHorseIcon src="/mikro-jump-horse.png" />
                  Mikro Jump
                </Link>
                <Link href="/mikro-fly" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <MikroHorseIcon src="/mikro-fly-horse.png" />
                  Mikro Fly
                </Link>
                <Link href="/mikro-tablolari" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Layers className="w-4 h-4" />
                  Mikro Tablolar
                </Link>
                <Link href="/destek-baglantilari" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <LifeBuoy className="w-4 h-4" />
                  Destek Bağlantıları
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
              data-nav-dropdown
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
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
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
              data-nav-dropdown
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
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
              )}
              
              <div className={`absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isEflowDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/eflow" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Zap className="w-4 h-4" />
                  E-Flow
                </Link>
                <Link href="/eflow-surecleri" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Route className="w-4 h-4" />
                  E-Flow Süreçleri
                </Link>
                <Link href="/eflow-bpm" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Workflow className="w-4 h-4" />
                  BPM Çözümleri
                </Link>
                <Link href="/eflow-dms" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <FolderOpen className="w-4 h-4" />
                  DMS Çözümleri
                </Link>
                <Link href="/eflow-butce-merkezi" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Wallet className="w-4 h-4" />
                  Bütçe Merkezi
                </Link>
              </div>
            </div>

            {/* Sektörel Çözümler Dropdown */}
            <div 
              className="relative group py-2"
              data-nav-dropdown
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
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
              )}
              
              <div className={`absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isSectoralDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/sectoral-solutions" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 border-b border-gray-100">
                  <Factory className="w-4 h-4 text-gray-600" />
                  Sektörel Çözümler
                </Link>
                <Link href="/sectoral-solutions/solutions" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 border-b border-gray-100">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  Çözümleri Görüntüle
                </Link>
                <Link href="/crm-cozumleri" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Users className="w-4 h-4 text-orange-500" />
                  CRM Çözümleri
                </Link>
                <Link href="/wms-depo-yonetimi" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Package className="w-4 h-4 text-teal-500" />
                  Depo Yönetimi (WMS)
                </Link>
                <Link href="/hr-ik" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  HR (İK) Çözümleri
                </Link>
                <Link href="/mes-yonetim" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Settings className="w-4 h-4 text-amber-500" />
                  MES (Yönetim)
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link href="/featured-works" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Star className="w-4 h-4 text-gray-600" />
                  Öne Çıkan Çalışmalarımız
                </Link>
              </div>
            </div>

            {/* Hizmetler Dropdown */}
            <div 
              className="relative group py-2"
              data-nav-dropdown
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                }}
                className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <Briefcase className="w-4 h-4" />
                Hizmetler
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {!isActive('/services') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
              )}
              
              <div className={`absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 transition-all duration-200 ${isServicesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/services" className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 border-b border-gray-100">
                  <Briefcase className="w-4 h-4 text-gray-600" />
                  Tüm Hizmetlerimiz
                </Link>
                <Link href="/services/mikro-erp-kurulumu" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Layers className="w-4 h-4 text-blue-500" />
                  Mikro ERP Kurulumu
                </Link>
                <Link href="/services/e-donusum-entegrasyonu" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Receipt className="w-4 h-4 text-emerald-500" />
                  E-Dönüşüm Entegrasyonu
                </Link>
                <Link href="/services/ozel-yazilim-gelistirme" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Code2 className="w-4 h-4 text-orange-500" />
                  Özel Yazılım Geliştirme
                </Link>
                <Link href="/services/danismanlik" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <Compass className="w-4 h-4 text-amber-500" />
                  Danışmanlık Hizmetleri
                </Link>
                <Link href="/services/teknik-destek" className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <LifeBuoy className="w-4 h-4 text-sky-500" />
                  Teknik Destek ve Bakım
                </Link>
                <Link href="/services/egitim" className="flex items-center gap-3 px-5 py-2.5 text-slate-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  Eğitim Hizmetleri
                </Link>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className={`flex items-center gap-2 transition-all duration-300 font-medium text-sm relative group ${isActive('/blog') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
              <FileText className="w-4 h-4" />
              Blog
              {!isActive('/blog') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
              )}
            </Link>

            {/* Teklif Al Butonu */}
            <Link href="/contact" className="px-5 py-2.5 bg-white text-gray-800 rounded-full border border-gray-200 hover:shadow-xl hover:from-red-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:to-purple-500 hover:bg-gradient-to-r hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 text-sm font-semibold">
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
            className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 py-4 overflow-visible"
          >
            <div className="flex flex-col gap-3 relative z-10 overflow-visible">
              {/* Mikro Dropdown - Mobil */}
              <div className="px-6 relative z-20 overflow-visible">
                <div
                  onClick={() => {
                    setIsMikroDropdownOpen(!isMikroDropdownOpen);
                    setIsVerticalDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group z-40 cursor-pointer select-none active:opacity-70 py-2 -mx-2 px-2 rounded-lg touch-manipulation ${isActive('/products') ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  <Package className="w-4 h-4" />
                  Mikro
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMikroDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {!isActive('/products') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
                )}
                
                {isMikroDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1 relative z-30 overflow-visible"
                  >
                    <Link href="/mikro-run" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <MikroHorseIcon src="/mikro-run-horse.png" />
                      Mikro Run
                    </Link>
                    <Link href="/mikro-jump" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <MikroHorseIcon src="/mikro-jump-horse.png" />
                      Mikro Jump
                    </Link>
                    <Link href="/mikro-fly" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <MikroHorseIcon src="/mikro-fly-horse.png" />
                      Mikro Fly
                    </Link>
                    <Link href="/mikro-tablolari" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Layers className="w-4 h-4" />
                      Mikro Tablolar
                    </Link>
                    <Link href="/destek-baglantilari" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <LifeBuoy className="w-4 h-4" />
                      Destek Bağlantıları
                    </Link>
                    <div className="border-t border-gray-100 my-1 mx-4"></div>
                    <Link href="/compare" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-blue-600 hover:bg-blue-50/80 font-semibold transition-all duration-200 rounded-lg">
                      <GitCompare className="w-4 h-4" />
                      Ürünleri Karşılaştır
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Mikro Dikey Çözümler Dropdown - Mobil */}
              <div className="px-6 relative z-20 overflow-visible">
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVerticalDropdownOpen(!isVerticalDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    setIsVerticalDropdownOpen(!isVerticalDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group z-40 cursor-pointer ${isActive('/vertical-solutions') || isActive('/solutions') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Building className="w-4 h-4" />
                  Mikro Dikey Çözümler
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isVerticalDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {!isActive('/vertical-solutions') && !isActive('/solutions') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
                )}
                
                {isVerticalDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1 relative z-30 overflow-visible"
                  >
                    <Link href="/vertical-solutions" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Building className="w-4 h-4" />
                      Mikro Dikey Çözümler
                    </Link>
                    <Link href="/solutions" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <TrendingUp className="w-4 h-4" />
                      Çözümleri Görüntüle
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* E-Flow Dropdown - Mobil */}
              <div className="px-6 relative z-20 overflow-visible">
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEflowDropdownOpen(!isEflowDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsVerticalDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    setIsEflowDropdownOpen(!isEflowDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsVerticalDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group z-40 cursor-pointer ${isActive('/eflow') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Zap className="w-4 h-4" />
                  E-Flow
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isEflowDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {!isActive('/eflow') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
                )}
                
                {isEflowDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/eflow" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Zap className="w-4 h-4" />
                      E-Flow Ana Sayfa
                    </Link>
                    <Link href="/eflow-surecleri" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Route className="w-4 h-4" />
                      E-Flow Süreçleri
                    </Link>
                    <Link href="/eflow-bpm" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Workflow className="w-4 h-4" />
                      BPM Çözümleri
                    </Link>
                    <Link href="/eflow-dms" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <FolderOpen className="w-4 h-4" />
                      DMS Çözümleri
                    </Link>
                    <Link href="/eflow-butce-merkezi" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Wallet className="w-4 h-4" />
                      Bütçe Merkezi
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Sektörel Çözümler Dropdown - Mobil */}
              <div className="px-6 relative z-20 overflow-visible">
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSectoralDropdownOpen(!isSectoralDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsVerticalDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    setIsSectoralDropdownOpen(!isSectoralDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsVerticalDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group z-40 cursor-pointer ${isActive('/sectoral-solutions') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Factory className="w-4 h-4" />
                  Sektörel Çözümler
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSectoralDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {!isActive('/sectoral-solutions') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
                )}
                
                {isSectoralDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/sectoral-solutions" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Factory className="w-4 h-4 text-gray-600" />
                      Sektörel Çözümler
                    </Link>
                    <Link href="/sectoral-solutions/solutions" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                      Çözümleri Görüntüle
                    </Link>
                    <Link href="/crm-cozumleri" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Users className="w-4 h-4 text-orange-500" />
                      CRM Çözümleri
                    </Link>
                    <Link href="/wms-depo-yonetimi" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Package className="w-4 h-4 text-teal-500" />
                      Depo Yönetimi (WMS)
                    </Link>
                    <Link href="/hr-ik" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                      HR (İK) Çözümleri
                    </Link>
                    <Link href="/mes-yonetim" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Settings className="w-4 h-4 text-amber-500" />
                      MES (Yönetim)
                    </Link>
                    <div className="border-t border-gray-100 my-1 mx-4"></div>
                    <Link href="/featured-works" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Star className="w-4 h-4 text-gray-600" />
                      Öne Çıkan Çalışmalarımız
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Hizmetler Dropdown - Mobil */}
              <div className="px-6 relative z-20 overflow-visible">
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsVerticalDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                    setIsMikroDropdownOpen(false);
                    setIsVerticalDropdownOpen(false);
                    setIsEflowDropdownOpen(false);
                    setIsSectoralDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 transition-all duration-300 font-medium text-base w-full text-left relative group z-40 cursor-pointer ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Briefcase className="w-4 h-4" />
                  Hizmetler
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {!isActive('/services') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
                )}
                
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Briefcase className="w-4 h-4 text-gray-600" />
                      Tüm Hizmetlerimiz
                    </Link>
                    <Link href="/services/mikro-erp-kurulumu" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Layers className="w-4 h-4 text-blue-500" />
                      Mikro ERP Kurulumu
                    </Link>
                    <Link href="/services/e-donusum-entegrasyonu" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Receipt className="w-4 h-4 text-emerald-500" />
                      E-Dönüşüm Entegrasyonu
                    </Link>
                    <Link href="/services/ozel-yazilim-gelistirme" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Code2 className="w-4 h-4 text-orange-500" />
                      Özel Yazılım Geliştirme
                    </Link>
                    <Link href="/services/danismanlik" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <Compass className="w-4 h-4 text-amber-500" />
                      Danışmanlık Hizmetleri
                    </Link>
                    <Link href="/services/teknik-destek" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <LifeBuoy className="w-4 h-4 text-sky-500" />
                      Teknik Destek ve Bakım
                    </Link>
                    <Link href="/services/egitim" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 rounded-lg">
                      <GraduationCap className="w-4 h-4 text-purple-500" />
                      Eğitim Hizmetleri
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-2 transition-all duration-300 font-medium text-base px-6 relative group ${isActive('/blog') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
                <FileText className="w-4 h-4" />
                Blog
                {!isActive('/blog') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"></div>
                )}
              </Link>

              {/* İletişim - Mobil */}
              <div className="mx-6 mt-2 pt-4 border-t border-gray-100 flex flex-col gap-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.type}
                    href={contact.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2.5 group"
                  >
                    <contact.icon size={18} className="text-gray-700 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Teklif Al Butonu - Mobil */}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mx-6 px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 hover:shadow-xl hover:from-red-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:to-purple-500 hover:bg-gradient-to-r hover:text-white hover:border-transparent transition-all duration-300 text-base font-semibold">
                Teklif Al
              </Link>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Gökkuşağı Çizgisi */}
      <div className="h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" />
    </nav>
  );
}
