# Next.js Projesi Sunucuda Yayınlama Kılavuzu

## Vue/Quasar'daki `dist` klasörüne benzer yapı

Next.js'te Vue/Quasar'daki `dist` klasörü yerine `.next` klasörü kullanılır. Ancak statik yayın için iki farklı yöntem vardır:

---

## Yöntem 1: Statik Export (Önerilen)

Projenizi tamamen statik dosyalara dönüştürerek sunucuya koyabilirsiniz.

### Adım 1: Next.js'i Statik Export için yapılandırma

`next.config.ts` dosyasına aşağıdaki satırı ekleyin:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu satırı ekleyin
  images: {
    unoptimized: true // Statik export için gerekli
  }
};

export default nextConfig;
```

### Adım 2: Statik build oluşturma

```bash
npm run build
```

Bu komut sonucunda `out` klasörü oluşur. Bu `out` klasörü Vue'daki `dist` klasörüne denktir.

### Adım 3: Sunucuya yükleme

`out` klasörünün içindeki tüm dosyaları sunucunuzun ana dizinine kopyalayın.

---

## Yöntem 2: Node.js Server ile Yayınlama

Dinamik özellikleri kullanmak istiyorsanız:

### Adım 1: Production build

```bash
npm run build
```

### Adım 2: Sunucuda çalıştırma

Sunucuda aşağıdaki komutları çalıştırın:

```bash
npm install
npm run start
```

### Adım 3: PM2 ile sürekli çalıştırma (önerilen)

```bash
npm install -g pm2
pm2 start npm --name "gokweb" -- start
pm2 save
pm2 startup
```

---

## Sunucuda Gerekli Dosyalar

### Statik Export için:
- ✅ `out/` klasörü ve içindeki tüm dosyalar
- ❌ `.next/` klasörü gerekmez
- ❌ `node_modules/` gerekmez
- ❌ Kaynak kod dosyaları gerekmez

### Node.js Server için:
- ✅ `.next/` klasörü
- ✅ `public/` klasörü  
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `node_modules/` (sunucuda npm install ile)

---

## Nginx Ayarları (Statik Export için)

```nginx
server {
    listen 80;
    server_name alanadiniz.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Apache Ayarları (Statik Export için)

`.htaccess` dosyası:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]
```

---

## Özet

Vue/Quasar'daki `dist` → Next.js'te `out` (statik export) veya `.next` (server)

**En basit yöntem:** Statik export kullanarak `out` klasörünü sunucuya kopyalamak.
