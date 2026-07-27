# Google Analytics ve Microsoft Clarity Entegrasyonu

Bu proje Next.js App Router ile Google Analytics (GA4) ve Microsoft Clarity entegrasyonu içerir. KVKK uyumlu çerez onay sistemi ile birlikte gelir.

## Kurulum

### 1. Environment Variables

`.env.local` dosyasini oluþturun ve aþaðýdaki deðiþkenleri ekleyin:

```bash
# Google Analytics (GA4) Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Microsoft Clarity Project ID
NEXT_PUBLIC_CLARITY_ID=abcdefg

# Google Search Console Verification (isteðe baðlý)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code

# Yandex Webmaster Verification (isteðe baðlý)
NEXT_PUBLIC_YANDEX_VERIFICATION=your_verification_code
```

### 2. Google Analytics Kurulumu

1. [Google Analytics](https://analytics.google.com/) hesabýnýzý açýn
2. Yeni bir GA4 özellik oluþturun
3. Measurement ID'yi kopyalayýn (`G-XXXXXXXXXX` formatýnda)
4. `.env.local` dosyasýna ekleyin

### 3. Microsoft Clarity Kurulumu

1. [Microsoft Clarity](https://clarity.microsoft.com/) hesabýnýzý açýn
2. Yeni bir proje oluþturun
3. Project ID'yi kopyalayýn
4. `.env.local` dosyasýna ekleyin

## Özellikler

### Google Analytics
- GA4 entegrasyonu
- Otomatik page view takibi
- Route deðiþimlerinde event tetikleme
- `next/script` ile performans dostu yükleme

### Microsoft Clarity
- Heatmap ve session recording
- Kullanýcý davranýþ analizi
- Mouse hareketleri ve click takibi
- Performans optimizasyonu

### Cookie Consent (KVKK Uyumu)
- Ziyaretçi onay sistemi
- LocalStorage ile tercih saklama
- Kabul/Reddet seçenekleri
- Minimalist tasarým
- Mobil uyumlu

## Dosya Yapýsý

```
components/
  Analytics.tsx          # GA ve Clarity component'leri
  AnalyticsProvider.tsx  # Ana analytics provider
  CookieConsent.tsx     # Çerez onay component'i
app/
  layout.tsx            # AnalyticsProvider entegrasyonu
```

## Kullaným

Analytics otomatik olarak çalýþýr:

1. Kullanýcý siteyi ziyaret ettiðinde çerez onay banner'ý görünür
2. Kullanýcý kabul ettiðinde GA ve Clarity script'leri yüklenir
3. Sayfa gezintilerinde otomatik page view event'leri gönderilir
4. Tüm route deðiþimleri takip edilir

## SEO Meta Tag'leri

Eklenen meta tag'ler:

- Open Graph (Facebook, LinkedIn)
- Twitter Card
- Robots meta
- Canonical URL
- Structured Data (JSON-LD)
- Site verification

## Performans

- `next/script` ile `afterInteractive` stratejisi
- Script'ler sadece onay alýndýðýnda yüklenir
- Route deðiþimlerinde duplicate loading önlenir
- TypeScript desteði

## Test

```bash
# Geliþtirme modunda test
npm run dev

# Production build test
npm run build
npm run start
```

## Google Analytics Kontrolü

1. Google Analytics hesabýnýza gidin
2. Realtime raporunu açýn
3. Sitenizi ziyaret edin
4. Event'lerin göründüðünü doðrulayýn

## Microsoft Clarity Kontrolü

1. Microsoft Clarity dashboard'a gidin
2. Live view'u açýn
3. Sitenizi ziyaret edin
4. Heatmap ve session recording'in çalýþtýðýný kontrol edin

## Güvenlik

- Çerezler sadece onay alýndýðýnda kullanýlýr
- LocalStorage kullanýmý
- GDPR/KVKK uyumlu
- No third-party cookies without consent

## Özelleþtirme

Component'leri özelleþtirme:

```typescript
// AnalyticsProvider.tsx
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Özelleþtirme mantýðý buraya
}
```

```typescript
// CookieConsent.tsx
export function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  // Banner tasarýmý özelleþtirme
}
```

## Sorun Giderme

### Script'ler Yüklenmiyor
- Environment variable'larý kontrol edin
- Çerez onayýný verin
- Browser console'u kontrol edin

### Page View Event'ler Çalýþmýyor
- Route deðiþimlerini test edin
- GA4 Measurement ID'yi doðrulayýn
- Realtime raporu kontrol edin

### Cookie Consent Görünmüyor
- LocalStorage temizleyin
- Browser cache temizleyin
- Component'i kontrol edin
