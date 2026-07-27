'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CookieConsent } from './CookieConsent';

// Tek kaynak: Google Analytics (GA4) ve Google Ads etiket kimlikleri
const GA_ID = 'G-PX95LTH6QB';
const ADS_ID = 'AW-1036040582';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // CookieConsent, localStorage'a 'accepted' / 'rejected' yazar — onunla tutarlı okuyoruz.
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'accepted') setConsent(true);
    else if (stored === 'rejected') setConsent(false);
    else setConsent(null); // ilk giriş → banner göster
  }, []);

  // CookieConsent zaten localStorage'a yazıyor; burada yalnızca React state'ini güncelliyoruz.
  const handleAccept = () => setConsent(true);
  const handleReject = () => setConsent(false);

  return (
    <>
      {/* Analytics + reklam etiketleri YALNIZCA açık rıza sonrası yüklenir (KVKK/GDPR).
          Kütüphane bir kez yüklenir; GA4 ve Google Ads tek gtag üzerinden yapılandırılır. */}
      {consent === true && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              gtag('config', '${ADS_ID}');
            `}
          </Script>
        </>
      )}

      {/* Çerez banner'ı yalnızca henüz seçim yapılmadıysa gösterilir (tek banner). */}
      {consent === null && (
        <CookieConsent onAccept={handleAccept} onReject={handleReject} />
      )}

      {children}
    </>
  );
}
