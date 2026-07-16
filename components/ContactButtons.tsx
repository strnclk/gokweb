'use client';

import { Phone } from 'lucide-react';
import { trackWhatsApp } from './ConversionTracking';

export default function ContactButtons() {
  const handleWhatsAppClick = () => {
    trackWhatsApp();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="tel:+905398563578"
        className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" />
        Hemen Ara: +90 539 856 35 78
      </a>
      <a
        href="https://wa.me/905398563578"
        onClick={handleWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all inline-flex items-center justify-center gap-2"
      >
        WhatsApp ile Teklif Al
      </a>
    </div>
  );
}
