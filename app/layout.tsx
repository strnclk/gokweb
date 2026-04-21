import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayii | ERP CRM Çözümleri",
  description: "Anadolu Yakası'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazılım geliştirme hizmetleri. Ataşehir'den tüm Türkiye'ye hizmet.",
  keywords: "Anadolu yakası mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataşehir mikro bayii, İstanbul mikro bayii, ERP entegrasyonu, Mikro entegrasyon, özel yazılım, IT danışmanlık, e-dönüşüm, mikro yazılım bayii, mikro muhasebe programı, mikro v3, mikro 14, mikro ERP fiyat",
  authors: [{ name: "Gökkuşağı Yazılım ve Danışmanlık" }],
  creator: "Gökkuşağı Yazılım ve Danışmanlık",
  publisher: "Gökkuşağı Yazılım ve Danışmanlık",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayii | ERP CRM Çözümleri",
    description: "Anadolu Yakası'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri ve Mikro program entegrasyonu hizmetleri. Ataşehir'den hizmet veriyoruz.",
    url: "https://gokkusagiyazilim.com.tr",
    siteName: "Gökkuşağı Yazılım ve Danışmanlık",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://gokkusagiyazilim.com.tr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gökkuşağı Yazılım - Anadolu Yakası Mikro Bayii",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayii | ERP CRM Çözümleri",
    description: "Anadolu Yakası'nda resmi Mikro bayii. Mikro program satışı, ERP hizmeti, CRM çözümleri.",
    images: ["https://gokkusagiyazilim.com.tr/twitter-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
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
  description: "Anadolu Yakası'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazılım geliştirme hizmetleri.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    postalCode: "34746",
    addressCountry: "TR"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905398563578",
    contactType: "sales",
    availableLanguage: "Turkish"
  },
  areaServed: [
    "İstanbul",
    "Anadolu Yakası",
    "Ataşehir",
    "Kadıköy",
    "Üsküdar",
    "Maltepe",
    "Kartal",
    "Pendik",
    "Sancaktepe",
    "Sultanbeyli",
    "Tuzla",
    "Çekmeköy"
  ],
  serviceType: [
    "ERP hizmeti",
    "CRM çözümleri",
    "Mikro program satışı ve destek",
    "Özel yazılım geliştirme",
    "IT danışmanlık",
    "e-dönüşüm çözümleri"
  ],
  keywords: "Anadolu yakası mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataşehir mikro bayii",
  sameAs: [
    "https://www.linkedin.com/company/gokkusagiyazilim"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics - Statik Export için Doðru Yöntem */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PX95LTH6QB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-PX95LTH6QB');
          `}
        </Script>
        
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
