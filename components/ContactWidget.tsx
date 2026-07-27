'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { trackWhatsApp } from './ConversionTracking';

// Marka WhatsApp ikonu (lucide'de bulunmadığından inline SVG).
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Sağ altta sabit duran genel iletişim butonu. Tıklanınca iletişim
// seçenekleri (WhatsApp, Telefon, E-posta, İletişim formu) açılır.
// İleride canlı destek / chatbot bu menüye eklenebilir.
export default function ContactWidget() {
  const [acik, setAcik] = useState(false);
  const [telefonAcik, setTelefonAcik] = useState(false);
  const kapsayici = useRef<HTMLDivElement>(null);

  // Menü kapandığında telefon alt seçeneklerini de sıfırla
  useEffect(() => {
    if (!acik) setTelefonAcik(false);
  }, [acik]);

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
      icon: WhatsAppIcon,
      renk: 'bg-green-500',
    },
    {
      ad: 'Telefonla Ara',
      aciklama: 'Numara seçin',
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

  const telefonNumaralari = [
    { no: '0216 574 83 43', href: 'tel:+902165748343' },
    { no: '0539 856 35 78', href: 'tel:+905398563578' },
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

          // Telefon: tıklanınca sola doğru numara seçenekleri açılır
          if (s.ad === 'Telefonla Ara') {
            return (
              <div key={s.ad} className="flex flex-wrap items-center justify-end gap-2.5">
                <div className={`items-center justify-end gap-2 ${telefonAcik ? 'flex flex-wrap' : 'hidden'}`}>
                  {telefonNumaralari.map((t) => (
                    <a
                      key={t.href}
                      href={t.href}
                      onClick={() => {
                        setTelefonAcik(false);
                        setAcik(false);
                      }}
                      className="flex items-center gap-2 bg-white rounded-full shadow-lg pl-4 pr-1.5 py-1.5 hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold text-gray-800">{t.no}</span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </span>
                    </a>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setTelefonAcik((v) => !v)}
                  aria-expanded={telefonAcik}
                  className={ortakClass}
                >
                  {icerik}
                </button>
              </div>
            );
          }

          return (
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
