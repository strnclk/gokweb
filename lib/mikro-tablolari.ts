// Mikro Teknik Bilgi Merkezi — sunucu tarafı veri yardımcıları.
// 2.8MB'lık tablo verisi YALNIZCA sunucuda okunur; client bileşenlerine
// sadece ihtiyaç duyulan küçük dilimler prop olarak geçer. Bu dosyayı
// bir client bileşeninde import ETMEYİN (aksi halde veri tarayıcıya iner).

import fs from 'node:fs';
import path from 'node:path';

export interface MikroEnum {
  code: string;
  label: string;
}

export interface MikroAlan {
  no: string;
  ad: string;
  tip: string;
  ack: string;
  enum: MikroEnum[];
  fk: string;
  poly: boolean;
}

export interface MikroIndeks {
  index_adi: string;
  ozellik: string;
  alanlar: string;
}

export interface MikroTablo {
  db: string;
  tr: string;
  slug: string;
  modul: string;
  alan_sayisi: number;
  pk: string;
  alanlar: MikroAlan[];
  indeksler: MikroIndeks[];
  giden: string[];
  gelen: string[];
  gelen_sayi: number;
  tablo_no: number;
}

// Liste sayfası için hafif özet (alanlar/indeksler hariç) — client'a bu iner.
export interface MikroTabloOzet {
  db: string;
  tr: string;
  slug: string;
  modul: string;
  alan_sayisi: number;
  tablo_no: number;
}

export interface MikroIliski {
  db: string;
  slug: string;
}

export interface MikroFaq {
  q: string;
  a: string;
  code?: string;
}

export interface MikroSqlOrnek {
  baslik: string;
  aciklama: string;
  code: string;
}

interface MikroVeri {
  liste: MikroTablo[];
  bySlug: Map<string, MikroTablo>;
  byDb: Map<string, MikroTablo>;
}

let _veri: MikroVeri | null = null;

function veri(): MikroVeri {
  if (_veri) return _veri;
  const dosya = path.join(process.cwd(), 'data', 'mikro-tablolari.json');
  const liste = JSON.parse(fs.readFileSync(dosya, 'utf-8')) as MikroTablo[];
  _veri = {
    liste,
    bySlug: new Map(liste.map((t) => [t.slug, t])),
    byDb: new Map(liste.map((t) => [t.db, t])),
  };
  return _veri;
}

export function getTabloOzetListesi(): MikroTabloOzet[] {
  return veri().liste.map(({ db, tr, slug, modul, alan_sayisi, tablo_no }) => ({
    db,
    tr,
    slug,
    modul,
    alan_sayisi,
    tablo_no,
  }));
}

export function getTabloBySlug(slug: string): MikroTablo | null {
  return veri().bySlug.get(slug) ?? null;
}

export function getTumSluglar(): string[] {
  return veri().liste.map((t) => t.slug);
}

// Bu tablonun alanlarındaki FK'lerden yalnızca gerçek bir tabloya işaret
// edenleri slug'a haritalar — detay sayfasında alan → ilişki linki için.
// (Tüm 438 tabloyu değil yalnızca gerekenleri taşıdığından statik çıktı küçülür.)
export function getFkSlugHaritasi(t: MikroTablo): Record<string, string> {
  const { byDb } = veri();
  const harita: Record<string, string> = {};
  for (const a of t.alanlar) {
    if (a.fk && !harita[a.fk]) {
      const hedef = byDb.get(a.fk);
      if (hedef) harita[a.fk] = hedef.slug;
    }
  }
  return harita;
}

// Giden ilişkilerden sadece sitede sayfası olan tabloları döndürür.
export function getGidenLinkli(t: MikroTablo): MikroIliski[] {
  const { byDb } = veri();
  return t.giden
    .map((db) => byDb.get(db))
    .filter((x): x is MikroTablo => Boolean(x))
    .map((x) => ({ db: x.db, slug: x.slug }));
}

const AYNI_MODUL_LIMIT = 18;

// Aynı modüldeki diğer tablolar (iç linkleme).
export function getAyniModul(t: MikroTablo): { liste: MikroIliski[]; fazla: number } {
  const tumu = veri()
    .liste.filter((x) => x.modul === t.modul && x.slug !== t.slug)
    .map((x) => ({ db: x.db, slug: x.slug }));
  return {
    liste: tumu.slice(0, AYNI_MODUL_LIMIT),
    fazla: Math.max(0, tumu.length - AYNI_MODUL_LIMIT),
  };
}

// SSS — her tablo için otomatik üretilir (hem görünür akordeon hem JSON-LD için).
export function faqUret(t: MikroTablo): MikroFaq[] {
  const pk = t.pk || '—';
  const ornekAlan = t.alanlar
    .filter((a) => a.ack)
    .slice(0, 4)
    .map((a) => a.ad);

  const list: MikroFaq[] = [
    {
      q: `${t.db} tablosu Mikro ERP'de ne işe yarar?`,
      a: `${t.db}, Mikro V16'da ${t.tr.toLowerCase()} verilerini tutan tablodur. ${t.modul} modülüne aittir ve toplam ${t.alan_sayisi} alan içerir.`,
    },
    {
      q: `${t.db} tablosunun birincil anahtarı (primary key) nedir?`,
      a: `${t.db} tablosunun birincil anahtarı <code>${pk}</code> alanıdır. Entegrasyon yaparken kayıt eşleştirmesini bu alan üzerinden yapmanız önerilir.`,
    },
  ];

  if (ornekAlan.length) {
    list.push({
      q: `Mikro SQL ile ${t.db} tablosundan nasıl veri çekilir?`,
      a: `En sık kullanılan sorgu, ilgili alanları listeler:`,
      code: `SELECT ${ornekAlan.join(', ')}\nFROM ${t.db}`,
    });
  }

  if (t.gelen_sayi > 0) {
    list.push({
      q: `${t.db} hangi tablolarla ilişkilidir?`,
      a: `${t.db}, Mikro şemasında ${t.gelen_sayi} farklı tablo tarafından referans alınır${
        t.giden.length ? ` ve kendisi ${t.giden.length} tabloya referans verir` : ''
      }. Bu ilişkiler "İlişkili Tablolar" bölümünde listelenmiştir.`,
    });
  }

  return list;
}

// Her tabloya özgü SQL örnekleri — gerçek alan adları, PK ve ilişkilerle üretilir.
export function sqlOrnekleriUret(t: MikroTablo): MikroSqlOrnek[] {
  const { byDb } = veri();
  const ilk = t.alanlar.slice(0, 5).map((a) => a.ad);
  const pk = t.pk;
  const list: MikroSqlOrnek[] = [];

  list.push({
    baslik: 'Temel veri listeleme',
    aciklama: `${t.db} tablosundan başlıca alanları, en güncel kayıtlardan başlayarak çeker.`,
    code: `SELECT TOP 100 ${ilk.join(', ')}\nFROM ${t.db}${pk ? `\nORDER BY ${pk} DESC` : ''}`,
  });

  if (pk) {
    list.push({
      baslik: 'Belirli bir kaydı getirme',
      aciklama: `Birincil anahtar (${pk}) üzerinden tek bir kaydı sorgular.`,
      code: `SELECT ${ilk.join(', ')}\nFROM ${t.db}\nWHERE ${pk} = @kayit_no`,
    });
  }

  const fkAlan = t.alanlar.find((a) => a.fk && byDb.has(a.fk));
  if (fkAlan) {
    const rel = byDb.get(fkAlan.fk)!;
    const relPk = rel.pk || 'kod';
    list.push({
      baslik: `${rel.db} ile birleştirme (JOIN)`,
      aciklama: `${t.db} kayıtlarını ilişkili ${rel.db} tablosuyla eşleştirir.`,
      code: `SELECT a.${fkAlan.ad}, b.${relPk}\nFROM ${t.db} a\nINNER JOIN ${rel.db} b\n  ON a.${fkAlan.ad} = b.${relPk}`,
    });
  }

  const sayisal = t.alanlar.find((a) =>
    /TUTAR|MIKTAR|BORC|ALACAK|FIYAT|BAKIYE|ADET|TOPLAM/i.test(a.ad),
  );
  if (sayisal) {
    list.push({
      baslik: 'Toplam / özet hesaplama',
      aciklama: `Kayıt sayısını ve ${sayisal.ad} alanının toplamını hesaplar.`,
      code: `SELECT COUNT(*) AS kayit_sayisi,\n       SUM(${sayisal.ad}) AS toplam\nFROM ${t.db}`,
    });
  }

  return list;
}
