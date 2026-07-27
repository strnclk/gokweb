'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface GoogleReviewQRProps {
  /** QR kodun yönlendireceği adres */
  url: string;
  /** Piksel cinsinden kutu boyutu */
  size?: number;
  /** QR modüllerinin rengi (marka rengi) */
  color?: string;
}

export default function GoogleReviewQR({
  url,
  size = 104,
  color = '#1e3a8a',
}: GoogleReviewQRProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, url, {
      width: size,
      margin: 1,
      color: {
        dark: color,
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    }).catch(() => {
      /* sessizce yut: QR üretimi kritik değil */
    });
  }, [url, size, color]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      aria-label="Google Yorumları için QR kod"
      role="img"
      className="block rounded-lg"
      style={{ width: size, height: size }}
    />
  );
}
