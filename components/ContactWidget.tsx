'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { trackWhatsApp } from './ConversionTracking';

// Sağ altta sabit duran genel iletişim butonu. Tıklanınca iletişim
// seçenekleri (WhatsApp, Telefon, E-posta, İletişim formu) açılır.
// İleride canlı destek / chatbot bu menüye eklenebilir.
export default function ContactWidget() {
  const [acik, setAcik] = useState(false);
  const kapsayici = useRef<HTMLDivElement>(null);

  // Menü açıkken dışarı tıklanınca veya ESC ile kapat
  useEffect(() => {
    if (!acik) return;
    const disariTikla = (e: MouseEvent) => {
      if (kapsayici.current && !kapsayici.current.contains(e.target as Node)) {
        setAcik(false);
      }
    };
    const escBas = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAcik(false);
    };
    document.addEventListener('mousedown', disariTikla);
    document.addEventListener('keydown', escBas);
    return () => {
      document.removeEventListener('mousedown', disariTikla);
      document.removeEventListener('keydown', escBas);
    };
  }, [acik]);

  const secenekler = [
    {
      ad: 'WhatsApp',
      aciklama: 'Anında mesaj gönderin',
      href: 'https://wa.me/905398563578',
      dis: true,
      onClick: () => trackWhatsApp(),
      icon: MessageCircle,
      renk: 'bg-green-500',
    },
    {
      ad: 'Telefonla Ara',
      aciklama: '+90 539 856 35 78',
      href: 'tel:+905398563578',
      dis: false,
      icon: Phone,
      renk: 'bg-blue-500',
    },
    {
      ad: 'E-posta Gönder',
      aciklama: 'satis@gokkusagiyazilim.com.tr',
      href: 'mailto:satis@gokkusagiyazilim.com.tr',
      dis: false,
      icon: Mail,
      renk: 'bg-purple-500',
    },
  ];

  return (
    <div ref={kapsayici} className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Seçenek menüsü */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${
          acik ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {secenekler.map((s) => {
          const Icon = s.icon;
          const icerik = (
            <>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 leading-tight">{s.ad}</div>
                <div className="text-xs text-gray-500 leading-tight">{s.aciklama}</div>
              </div>
              <div className={`flex items-center justify-center w-11 h-11 rounded-full text-white flex-shrink-0 ${s.renk}`}>
                <Icon className="w-5 h-5" />
              </div>
            </>
          );
          const ortakClass =
            'flex items-center gap-3 bg-white rounded-full shadow-lg pl-5 pr-2 py-2 hover:shadow-xl hover:-translate-x-0.5 transition-all';

          return s.dahili ? (
            <Link key={s.ad} href={s.href} className={ortakClass} onClick={() => setAcik(false)}>
              {icerik}
            </Link>
          ) : (
            <a
              key={s.ad}
              href={s.href}
              target={s.dis ? '_blank' : undefined}
              rel={s.dis ? 'noopener noreferrer' : undefined}
              onClick={() => {
                s.onClick?.();
                setAcik(false);
              }}
              className={ortakClass}
            >
              {icerik}
            </a>
          );
        })}
      </div>

      {/* Ana iletişim butonu */}
      <button
        type="button"
        onClick={() => setAcik((v) => !v)}
        aria-expanded={acik}
        aria-label={acik ? 'İletişim menüsünü kapat' : 'İletişim seçeneklerini aç'}
        className={`pointer-events-auto flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 ${
          acik ? 'bg-slate-800 rotate-90' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {acik ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>
    </div>
  );
}
