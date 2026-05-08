'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CookieConsent } from './CookieConsent';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');

    if (stored === null) {
      setConsent(null); // 👈 ilk giriş → banner göster
    } else {
      setConsent(stored === 'true'); // true / false
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsent(true);

    // 👇 Analytics’i anında tetikle (çok önemli)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-PX95LTH6QB');
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'false');
    setConsent(false);
  };

  return (
    <>
      {/* ✅ Analytics sadece kabul edilince */}
      {consent === true && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PX95LTH6QB"
            strategy="afterInteractive"
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-PX95LTH6QB');
            `}
          </Script>
        </>
      )}

      {/* ✅ İlk girişte cookie */}
      {consent === null && (
        <CookieConsent
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}

      {children}
    </>
  );
}