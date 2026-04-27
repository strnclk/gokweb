import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import GravityParticlesClient from "@/components/GravityParticlesClient";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayii | ERP CRM Çözümleri",
  description:
    "Anadolu Yakası'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazılım geliştirme hizmetleri. Ataşehir'den tüm Türkiye'ye hizmet.",
  keywords:
    "Anadolu yakası mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataşehir mikro bayii, İstanbul mikro bayii, ERP entegrasyonu, Mikro entegrasyon, özel yazılım, IT danışmanlık, e-dönüşüm",
  authors: [{ name: "Gökkuşağı Yazılım ve Danışmanlık" }],
  creator: "Gökkuşağı Yazılım ve Danışmanlık",
  publisher: "Gökkuşağı Yazılım ve Danışmanlık",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  openGraph: {
    title:
      "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayii",
    description:
      "ERP, CRM ve Mikro entegrasyon çözümleri. Ataşehir merkezli hizmet.",
    url: "https://gokkusagiyazilim.com.tr",
    siteName: "Gökkuşağı Yazılım",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://gokkusagiyazilim.com.tr/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gökkuşağı Yazılım",
    description: "ERP ve Mikro çözümleri",
    images: ["https://gokkusagiyazilim.com.tr/twitter-image.jpg"],
  },

  verification: {
    google: "OpgQfaWMQ_GN6TYB-YpXrkzGPFqvUYVc1MVMg1MgHT4",
  },

  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gökkuşağı Yazılım ve Danışmanlık",
  url: "https://gokkusagiyazilim.com.tr",
  logo: "https://gokkusagiyazilim.com.tr/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905398563578",
    contactType: "sales",
  },
  sameAs: ["https://www.linkedin.com/company/gokkusagiyazilim"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-screen font-poppins antialiased">
        {/* ✅ JSON-LD doğru yerde */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Geçici olarak devre dışı - test için */}
        {children}
      </body>
    </html>
  );
}