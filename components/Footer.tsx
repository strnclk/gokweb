import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import ChatBot from './ChatBot';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Gökkuşağı Yazılım
              </h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                2005'ten beri dijital dönüşümün öncüsü. 19+ yıllık deneyimimizle işletmelere özel teknoloji çözümleri sunuyoruz.
              </p>
            </div>
            
            {/* Professional indicators */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-400">Mikro Yazılım Yetkili Bayisi</span>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Ürünler</h4>
            <ul className="space-y-3">
              <li><Link href="/mikro-fly" className="text-slate-400 hover:text-white transition-colors duration-200">Mikro Fly</Link></li>
              <li><Link href="/mikro-run" className="text-slate-400 hover:text-white transition-colors duration-200">Mikro Run</Link></li>
              <li><Link href="/mikro-jump" className="text-slate-400 hover:text-white transition-colors duration-200">Mikro Jump</Link></li>
              <li><Link href="/eflow" className="text-slate-400 hover:text-white transition-colors duration-200">E-Flow</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Hizmetler</h4>
            <ul className="space-y-3">
              <li><span className="text-slate-400">ERP Entegrasyonları</span></li>
              <li><span className="text-slate-400">Web Uygulamaları</span></li>
              <li><span className="text-slate-400">Mobil Çözümler</span></li>
              <li><span className="text-slate-400">E-ticaret</span></li>
              <li><span className="text-slate-400">Mikro Destek</span></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors duration-200">Ana Sayfa</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200">Hakkımızda</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">İletişim</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">Destek</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact information */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h5 className="font-semibold text-white mb-3">Adres</h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                İçerenköy Mah. Eryılmazlar Sokak No:2<br />
                Kemal Bey İş Merkezi Kat:4 Daire:18<br />
                Ataşehir/İstanbul
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Telefon</h5>
              <p className="text-sm text-slate-400">0539 856 35 78</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">E-posta</h5>
              <p className="text-sm text-slate-400">satis@gokkusagiyazilim.com.tr</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Sosyal Medya</h5>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/company/gokkusagiyazilim/?originalSubdomain=tr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm block flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://instagram.com/gokkusagiyazilim" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm block flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Çalışma Saatleri</h5>
              <p className="text-sm text-slate-400">Pazartesi - Cuma: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                &copy; 2026 Gökkuşağı Yazılım. Tüm hakları saklıdır.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Mikro Yazılım Yetkili Bayisi • 19+ Yıllık Deneyim
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-slate-400 hover:text-white transition-colors">Gizlilik Politikası</Link>
              <Link href="/kullanim" className="text-slate-400 hover:text-white transition-colors">Kullanım Koşulları</Link>
              <Link href="/kvkk" className="text-slate-400 hover:text-white transition-colors">KVKK</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/905398563578"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
    
    {/* ChatBot */}
    <ChatBot />
    </>
  );
}
