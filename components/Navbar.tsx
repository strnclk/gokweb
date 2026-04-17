'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Gökkuşağı Yazılım" className="h-14 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className={`transition font-medium text-lg ${isActive('/products') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Ürünler</Link>
            <Link href="/eflow" className={`transition font-medium text-lg ${isActive('/eflow') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>E-Dönüşüm</Link>
            <Link href="/about" className={`transition font-medium text-lg ${isActive('/about') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Hakkımızda</Link>
            <Link href="/contact" className={`transition font-medium text-lg ${isActive('/contact') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>İletişim</Link>
            <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg">
              Teklif Al
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t py-4"
          >
            <div className="flex flex-col gap-4">
              <Link href="/products" className={`transition font-medium text-lg px-6 ${isActive('/products') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Ürünler</Link>
              <Link href="/eflow" className={`transition font-medium text-lg px-6 ${isActive('/eflow') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>E-Dönüşüm</Link>
              <Link href="/about" className={`transition font-medium text-lg px-6 ${isActive('/about') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Hakkımızda</Link>
              <Link href="/contact" className={`transition font-medium text-lg px-6 ${isActive('/contact') ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>İletişim</Link>
              <Link href="/contact" className="mx-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg">
                Teklif Al
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
