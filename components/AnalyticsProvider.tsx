'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CookieConsent } from './CookieConsent';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    setConsent(stored === 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsent(true);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'false');
    setConsent(false);
  };

  return (
    <>
      {consent && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
      
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
