# Analytics Verification - Gerçek Dünya Testi

## Google Analytics Testi

### 1. Realtime Kontrolü
```
1. https://analytics.google.com/ aç
2. Sol menüden "Realtime" tla
3. "Number of Users" > 0 görüyorsan BAARILI
```

### 2. Page View Tracking Testi
```
1. Siteyi aç (ana sayfa)
2. /eflow sayfasna git
3. /anadolu-yakasi-mikro-bayii sayfasna git
4. Analytics'te "Top Events" kontrol et
5. page_view event'lerini görüyorsan ROUTE TRACKING ÇALIYOR
```

### 3. Console Debug
```javascript
// Browser console'a yaz:
window.gtag('event', 'test_event', { 'test_parameter': 'working' });
// Analytics'te "test_event" görüyorsan gtag çalyor
```

## Microsoft Clarity Testi

### 1. Dashboard Kontrolü
```
1. https://clarity.microsoft.com/ aç
2. Projeni seç
3. "Dashboard"'da "Sessions" > 0 görüyorsan BAARILI
```

### 2. Heatmap Testi
```
1. 2-3 dakika bekle (data processing zaman)
2. "Heatmaps" sekmesine git
3. Sayfa seç ve heatmap görüyorsan CLARITY ÇALIYOR
```

### 3. Session Recording Testi
```
1. "Recordings" sekmesine git
2. Kendi session'ini görüyorsan RECORDING ÇALIYOR
3. Oynat ve mouse hareketlerini kontrol et
```

## KVKK/GDPR Testi (KRKTK)

### 1. Cookie Consent Bloklama Testi
```
1. Browser'da "Clear Storage" (localStorage temizle)
2. Siteyi yenile
3. Cookie banner görünmeli
4. KABUL ETME
5. Network tab'a git
6. google-analytics.com ve clarity.ms istekleri OLMAMALI
```

### 2. Kabul Sonras Test
```
1. "Kabul Et" butonuna tla
2. Network tab'da yenile
3. google-analytics.com ve clarity.ms istekleri GÖRÜNMEL
4. LocalStorage'da "cookie-consent: accepted" olmal
```

## Performance Testi

### 1. Script Load Timing
```
1. Chrome DevTools -> Performance tab
2. Recording bas
3. Siteyi yükle
4. "afterInteractive" stratejisi için:
   - gtag.js script'inin DOMContentLoaded SONRA yüklendiði
   - Sayfa performansý etkilemediði
```

### 2. Core Web Vitals
```
1. Lighthouse testi çaly
2. Performance skoru < 90 ise script optimizasyon gerekli
3. CLS (Cumulative Layout Shift) 0 olmal
```

## SEO Testi

### 1. Meta Tags Kontrolü
```bash
curl -s https://gokkusagiyazilim.com.tr | grep -E "(title|description|og:|twitter:)"
```

### 2. Sitemap Testi
```
1. https://gokkusagiyazilim.com.tr/sitemap.xml aç
2. Tüm URL'ler görünüyor mu?
3. lastModified tarihleri güncel mi?
```

### 3. Robots.txt Testi
```
1. https://gokkusagiyazilim.com.tr/robots.txt aç
2. Sitemap referansý doðru mu?
3. Google Search Console'da "robots.txt test" et
```

## Route Change Tracking Detay Testi

### 1. SPA Navigation Testi
```
1. Ana sayfada iken console'a:
   window.gtag && console.log('GA loaded')
2. /eflow sayfasina navigation ile git
3. Console'a:
   window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: '/eflow' })
4. Analytics Realtime'da page path deðiþimini gör
```

### 2. Query Parameters Testi
```
1. /eflow?utm_source=test&utm_medium=web git
2. Analytics'te utm parametreleri takip ediliyor mu?
3. Campaign tracking çalyor mu?
```

## Hata Ayklama (Troubleshooting)

### Google Analytics Çalmazsa:
```javascript
// Console kontrolü:
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_ID);
console.log('gtag function:', window.gtag);
console.log('dataLayer:', window.dataLayer);
```

### Microsoft Clarity Çalmazsa:
```javascript
// Console kontrolü:
console.log('Clarity ID:', process.env.NEXT_PUBLIC_CLARITY_ID);
console.log('Clarity loaded:', window.clarity);
```

### Cookie Consent Sorunlarý:
```javascript
// localStorage kontrolü:
console.log('Cookie consent:', localStorage.getItem('cookie-consent'));
// Consent state kontrolü:
console.log('Consent given:', document.cookie.includes('analytics'));
```

## Senior Level Checklist

- [ ] Route change tracking usePathname ile çalyor
- [ ] Cookie consent GERÇEKTEN blokluyor (fake deil)
- [ ] Script'ler afterInteractive ile yükleniyor
- [ ] Sitemap ve robots.txt mevcut
- [ ] Realtime analytics görünüyor
- [ ] Heatmap ve session recording çalyor
- [ ] Core Web Vitals etkilenmiyor
- [ ] GDPR/KVKK compliant
- [ ] Mobile uyumlu cookie banner
- [ ] Production build hatalar yok

## Baarý Kriterleri

### Minimum (Working):
- [ ] GA real-time user görünüyor
- [ ] Clarity sessions > 0
- [ ] Cookie banner gösteriliyor

### Professional (Good):
- [ ] Route tracking çalyor
- [ ] Cookie consent gerçekten blokluyor
- [ ] Performance etkisi minimal

### Senior Level (Excellent):
- [ ] Tüm checkbox'lar tikli
- [ ] Lighthouse performance > 90
- [ ] GDPR fully compliant
- [ ] Advanced tracking (events, campaigns)
- [ ] Error handling ve monitoring

---

**Not:** Bu testleri production ortamda çaly. Development ortamda analytics script'leri bazen düzgün çalyamayabilir.
