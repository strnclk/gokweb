'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics Component
export function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && gaId) {
      window.gtag('config', gaId, {
        page_path: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams, gaId]);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Microsoft Clarity Component
export function MicrosoftClarity({ clarityId }: { clarityId?: string }) {
  if (!clarityId) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            c[l]=classList.contains('clarity-loaded')?'':c[l].add('clarity-loaded');
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
}

// Combined Analytics Component with Cookie Consent
export function Analytics({ 
  googleAnalyticsId, 
  microsoftClarityId,
  consent 
}: { 
  googleAnalyticsId?: string;
  microsoftClarityId?: string;
  consent: boolean;
}) {
  if (!consent) {
    return null;
  }

  return (
    <>
      <GoogleAnalytics gaId={googleAnalyticsId} />
      <MicrosoftClarity clarityId={microsoftClarityId} />
    </>
  );
}

// Type declarations for global gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
