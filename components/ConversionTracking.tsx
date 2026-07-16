'use client';

import { useEffect } from 'react';

// Google Ads Conversion Tracking Functions
export function trackWhatsApp() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-1036040582/nwmJCKjHKQCeIBezg4D',
      value: 1.0,
      currency: 'TRY'
    });
  }
}

// Legacy function for backward compatibility
export function trackWhatsAppClick() {
  trackWhatsApp();
}

export default function ConversionTracking() {
  return null;
}
