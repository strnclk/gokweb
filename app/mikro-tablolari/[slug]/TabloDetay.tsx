'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type {
  MikroTablo,
  MikroIndeks,
  MikroIliski,
  MikroFaq,
  MikroSqlOrnek,
} from '@/lib/mikro-tablolari';

interface Props {
  tablo: MikroTablo;
  fkSlugHaritasi: Record<string, string>;
  gidenLinkli: MikroIliski[];
  ayniModul: MikroIliski[];
  ayniModulFazla: number;
  faqlar: MikroFaq[];
  sqlOrnekleri: MikroSqlOrnek[];
}

const MONO = '[font-family:Consolas,monospace]';

// Tablo adını alt çizgilerden bölünebilir yapar.
function KirilabilirAd({ s }: { s: string }) {
  const parcalar = s.split('_');
  return (
    <>
      {parcalar.map((p, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              _<wbr />
            </>
          )}
          {p}
        </span>
      ))}
    </>
  );
}

function idxClass(x: MikroIndeks) {
  const oz = (x.ozellik || '').toUpperCase();
  if (oz.includes('PRIMARY')) return 'bg-rose-50 text-rose-600';
  if (oz.includes('UNIQUE')) return 'bg-blue-50 text-blue-600';
  return 'bg-gray-100 text-gray-500';
}

function idxLabel(x: MikroIndeks) {
  const oz = (x.ozellik || '').toUpperCase();
  if (oz.includes('PRIMARY')) return 'PRIMARY KEY';
  if (oz.includes('UNIQUE')) return 'UNIQUE';
  return 'INDEX';
}

export default function TabloDetay({
  tablo,
  fkSlugHaritasi,
  gidenLinkli,
  ayniModul,
  ayniModulFazla,
  faqlar,
  sqlOrnekleri,
}: Props) {
  const [alanArama, setAlanArama] = useState('');
  const [acikEnum, setAcikEnum] = useState(-1);
  const [acikFaqlar, setAcikFaqlar] = useState<number[]>([]);
  const [kopyalanan, setKopyalanan] = useState(-1);

  const filtreliAlanlar = useMemo(() => {
    const q = alanArama.toLowerCase().trim();
    if (!q) return tablo.alanlar;
    return tablo.alanlar.filter(
      (a) => a.ad.toLowerCase().includes(q) || (a.ack || '').toLowerCase().includes(q),
    );
  }, [tablo, alanArama]);

  const faqToggle = (i: number) =>
    setAcikFaqlar((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const kopyala = (code: string, i: number) => {
    if (navigator.clipboard) navigator.clipboard.writeText(code);
    setKopyalanan(i);
    setTimeout(() => setKopyalanan((c) => (c === i ? -1 : c)), 1500);
  };

  return (
    <main className="max-w-[1080px] mx-auto px-5 pt-24 pb-16 text-gray-900">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[13px] text-gray-500 pt-4">
        <Link href="/mikro-tablolari" className="text-blue-600 no-underline hover:underline">
          Mikro Tablolar
        </Link>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[13px] h-[13px]">
          <path d="M9 6l6 6-6 6" />
        </svg>
        <Link
          href={`/mikro-tablolari?modul=${encodeURIComponent(tablo.modul)}`}
          className="text-blue-600 no-underline hover:underline"
        >
          {tablo.modul}
        </Link>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[13px] h-[13px]">
          <path d="M9 6l6 6-6 6" />
        </svg>
        <Link
          href={`/mikro-tablolari/${tablo.slug}`}
          className="text-gray-900 font-semibold no-underline hover:underline"
        >
          {tablo.db}
        </Link>
      </nav>

      {/* Başlık */}
      <header className="pt-6 pb-2 border-b border-gray-200 mb-7">
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 font-semibold text-[12.5px] px-3.5 py-1.5 rounded-full mb-3.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
            <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
            <path d="M3 8l9 5 9-5" />
          </svg>
          {tablo.modul} Modülü · Mikro V16
        </span>
        <h1 className="text-[27px] md:text-[36px] font-extrabold tracking-tight [overflow-wrap:anywhere]">
          <KirilabilirAd s={tablo.db} />
        </h1>
        <p className="text-[17px] text-gray-500 mt-1.5">{tablo.tr}</p>
      </header>

      {/* Giriş / özet */}
      <section className="[background:linear-gradient(120deg,#f7f9ff,#fdf7ff)] border-[1.5px] border-[#eceaf7] rounded-[18px] px-6 py-6 mb-7">
        <p className="text-[16.5px] text-gray-900 font-semibold leading-relaxed">
          {tablo.db}, Mikro V16 veritabanında {tablo.tr.toLowerCase()} verilerini tutan tablodur.
        </p>
        <p className="text-[15px] leading-relaxed text-gray-700 mt-3">
          Bu tablo Mikro&apos;nun <b className="text-gray-900">{tablo.modul}</b> modülüne aittir ve
          toplam <b className="text-gray-900">{tablo.alan_sayisi}</b> alan içerir.
          {tablo.gelen_sayi > 0 && (
            <>
              {' '}
              Mikro şemasında <b className="text-gray-900">{tablo.gelen_sayi}</b> farklı tablo
              doğrudan {tablo.db}&apos;a bağlanır, bu da onu entegrasyon ve raporlama projeleri için
              önemli bir referans noktası yapar.
            </>
          )}
        </p>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-3 mt-5">
          {[
            { k: String(tablo.alan_sayisi), l: 'Toplam alan', mono: false },
            { k: String(tablo.gelen_sayi), l: 'Bağlı tablo', mono: false },
            { k: String(tablo.indeksler.length), l: 'İndeks', mono: false },
            { k: tablo.pk || '—', l: 'Birincil anahtar', mono: true },
          ].map((h, i) => (
            <div key={i} className="bg-white border-[1.5px] border-gray-200 rounded-[13px] px-4 py-3.5">
              <div
                className={`font-extrabold leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                  h.mono ? `text-[15px] pt-1 ${MONO}` : 'text-[23px]'
                }`}
              >
                {h.k}
              </div>
              <div className="text-xs text-gray-500 mt-1.5">{h.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Alanlar */}
      <SecLabel baslik="Alanlar" cnt={`${filtreliAlanlar.length} / ${tablo.alan_sayisi} alan`} />
      <div className="relative mb-3.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="absolute left-[15px] top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-gray-400"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4-4" />
        </svg>
        <input
          value={alanArama}
          onChange={(e) => setAlanArama(e.target.value)}
          type="text"
          placeholder="Alan ara: kod, isim, fiyat..."
          className="w-full py-3 pl-[42px] pr-4 border-[1.5px] border-gray-200 rounded-xl text-sm bg-gray-50 outline-none focus:border-blue-600 focus:bg-white transition"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr>
              <th className="text-left px-3.5 py-2.5 bg-gray-50 text-gray-500 font-bold text-[12.5px] border-b-2 border-gray-200 w-[42px]">
                #
              </th>
              <th className="text-left px-3.5 py-2.5 bg-gray-50 text-gray-500 font-bold text-[12.5px] border-b-2 border-gray-200">
                Alan Adı
              </th>
              <th className="text-left px-3.5 py-2.5 bg-gray-50 text-gray-500 font-bold text-[12.5px] border-b-2 border-gray-200">
                Tip
              </th>
              <th className="text-left px-3.5 py-2.5 bg-gray-50 text-gray-500 font-bold text-[12.5px] border-b-2 border-gray-200">
                Açıklama
              </th>
              <th className="text-left px-3.5 py-2.5 bg-gray-50 text-gray-500 font-bold text-[12.5px] border-b-2 border-gray-200 w-[130px]">
                İlişki / Kod
              </th>
            </tr>
          </thead>
          <tbody>
            {filtreliAlanlar.map((a, i) => {
              const fkSlug = a.fk ? fkSlugHaritasi[a.fk] : undefined;
              return (
                <FieldRows
                  key={a.no + a.ad}
                  index={i}
                  ad={a.ad}
                  tip={a.tip}
                  no={a.no}
                  ack={a.ack}
                  fk={a.fk}
                  fkSlug={fkSlug}
                  poly={a.poly}
                  enumList={a.enum}
                  acik={acikEnum === i}
                  onToggle={() => setAcikEnum((p) => (p === i ? -1 : i))}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* İndeksler */}
      {tablo.indeksler.length > 0 && (
        <div className="mt-8">
          <SecLabel baslik="İndeksler ve Anahtarlar" cnt={`${tablo.indeksler.length} indeks`} />
          {tablo.indeksler.map((x, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-gray-200 rounded-xl mb-2 text-[13px]"
            >
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap ${idxClass(x)}`}>
                {idxLabel(x)}
              </span>
              <span className={`text-xs text-gray-600 ${MONO}`}>{x.alanlar || x.index_adi}</span>
            </div>
          ))}
        </div>
      )}

      {/* İlişkili tablolar (giden) */}
      {gidenLinkli.length > 0 && (
        <div className="mt-8">
          <SecLabel baslik="İlişkili Tablolar" />
          <p className="text-[13.5px] text-gray-500 mb-3">
            {tablo.db} aşağıdaki tablolara referans verir. Bir kayıt oluşturulurken bu tablolardan
            değer alınır.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {gidenLinkli.map((t) => (
              <RelLink key={t.slug} slug={t.slug} db={t.db} />
            ))}
          </div>
        </div>
      )}

      {/* Aynı modüldeki tablolar */}
      {ayniModul.length > 0 && (
        <div className="mt-8">
          <SecLabel baslik="Aynı Modüldeki Tablolar" cnt={tablo.modul} />
          <p className="text-[13.5px] text-gray-500 mb-3">
            {tablo.modul} modülüne ait diğer Mikro V16 tabloları:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ayniModul.map((t) => (
              <RelLink key={t.slug} slug={t.slug} db={t.db} />
            ))}
            {ayniModulFazla > 0 && (
              <Link
                href="/mikro-tablolari"
                className={`text-[12.5px] font-semibold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white no-underline ${MONO}`}
              >
                +{ayniModulFazla} tablo →
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Örnek SQL Sorguları */}
      {sqlOrnekleri.length > 0 && (
        <div className="mt-8">
          <SecLabel baslik="Örnek SQL Sorguları" cnt={`${sqlOrnekleri.length} sorgu`} />
          {sqlOrnekleri.map((s, i) => (
            <div key={i} className="border-[1.5px] border-gray-200 rounded-[14px] overflow-hidden mb-3.5">
              <div className="flex items-start justify-between gap-3.5 px-[18px] py-3.5 bg-gray-50 border-b border-gray-200">
                <div>
                  <h3 className="text-[15px] font-bold m-0">{s.baslik}</h3>
                  <p className="text-[13px] text-gray-500 mt-1 leading-snug">{s.aciklama}</p>
                </div>
                <button
                  onClick={() => kopyala(s.code, i)}
                  className={`flex-shrink-0 text-[12.5px] font-semibold rounded-lg px-3.5 py-1.5 border-[1.5px] whitespace-nowrap transition ${
                    kopyalanan === i
                      ? 'text-white bg-teal-500 border-teal-500'
                      : 'text-blue-600 bg-white border-gray-200 hover:border-blue-600'
                  }`}
                >
                  {kopyalanan === i ? 'Kopyalandı ✓' : 'Kopyala'}
                </button>
              </div>
              <pre className={`bg-[#1a1a2e] text-[#d4d4e8] px-[18px] py-4 m-0 text-[13px] leading-relaxed overflow-x-auto ${MONO}`}>
                {s.code}
              </pre>
            </div>
          ))}
        </div>
      )}

      {/* SSS */}
      <div className="mt-8">
        <SecLabel baslik="Sık Sorulan Sorular" />
        <div>
          {faqlar.map((f, i) => {
            const acik = acikFaqlar.includes(i);
            return (
              <div key={i} className="border-[1.5px] border-gray-200 rounded-[14px] mb-2.5 overflow-hidden">
                <button
                  onClick={() => faqToggle(i)}
                  className="flex items-center justify-between gap-3 w-full text-left px-[18px] py-[15px] font-bold text-[14.5px]"
                >
                  <span>{f.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${acik ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {acik && (
                  <div className="px-[18px] pb-[17px] text-[13.5px] text-gray-600 leading-relaxed">
                    <p
                      className="[&_code]:bg-gray-50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-purple-600 [&_code]:text-[12.5px] [&_code]:[font-family:Consolas,monospace]"
                      dangerouslySetInnerHTML={{ __html: f.a }}
                    />
                    {f.code && (
                      <pre className={`bg-[#1a1a2e] text-[#d4d4e8] px-3.5 py-3 rounded-[10px] text-[12.5px] overflow-x-auto mt-2 whitespace-pre-wrap ${MONO}`}>
                        {f.code}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 [background:linear-gradient(120deg,#f3f5ff,#faf3ff)] border-[1.5px] border-[#e9e3ff] rounded-[18px] p-7 flex items-center justify-between gap-5 flex-wrap">
        <div>
          <h3 className="text-[19px] font-extrabold mb-1.5">
            {tablo.db} ile entegrasyon mu yapıyorsunuz?
          </h3>
          <p className="text-gray-500 text-sm max-w-[440px]">
            Veri aktarımı, SQL raporlama veya Mikro API entegrasyonu için uzman ekibimizden destek
            alın.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[14.5px] px-6 py-3.5 rounded-xl no-underline whitespace-nowrap hover:opacity-90 transition"
        >
          Teklif Al
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}

function SecLabel({ baslik, cnt }: { baslik: string; cnt?: string }) {
  return (
    <div className="flex items-center gap-3 mt-2 mb-4">
      <h2 className="text-[20px] font-extrabold">{baslik}</h2>
      <div className="flex-1 h-px bg-gray-200" />
      {cnt && (
        <span className="text-[13px] text-gray-500 bg-gray-50 px-3 py-1 rounded-full font-semibold">
          {cnt}
        </span>
      )}
    </div>
  );
}

function RelLink({ slug, db }: { slug: string; db: string }) {
  return (
    <Link
      href={`/mikro-tablolari/${slug}`}
      className={`text-[12.5px] font-semibold px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-600 no-underline border border-transparent hover:border-blue-600 transition ${MONO}`}
    >
      {db}
    </Link>
  );
}

interface FieldRowsProps {
  index: number;
  no: string;
  ad: string;
  tip: string;
  ack: string;
  fk: string;
  fkSlug?: string;
  poly: boolean;
  enumList: { code: string; label: string }[];
  acik: boolean;
  onToggle: () => void;
}

function FieldRows({ no, ad, tip, ack, fk, fkSlug, poly, enumList, acik, onToggle }: FieldRowsProps) {
  return (
    <>
      <tr className="hover:[&>td]:bg-blue-50/40">
        <td className="px-3.5 py-2.5 align-top border-b border-gray-100 text-gray-400">{no}</td>
        <td className="px-3.5 py-2.5 align-top border-b border-gray-100">
          <span className={`font-semibold text-gray-900 ${MONO}`}>{ad}</span>
        </td>
        <td className="px-3.5 py-2.5 align-top border-b border-gray-100">
          <span className={`text-xs text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded whitespace-nowrap ${MONO}`}>
            {tip}
          </span>
        </td>
        <td className="px-3.5 py-2.5 align-top border-b border-gray-100 text-gray-600">{ack || '—'}</td>
        <td className="px-3.5 py-2.5 align-top border-b border-gray-100">
          {fk && fkSlug ? (
            <Link
              href={`/mikro-tablolari/${fkSlug}`}
              className={`inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 no-underline hover:underline ${MONO}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[11px] h-[11px]">
                <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
                <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
              </svg>
              {fk}
            </Link>
          ) : fk ? (
            <span className={`text-[11px] font-semibold text-gray-400 ${MONO}`}>{fk}</span>
          ) : poly ? (
            <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
              polimorfik
            </span>
          ) : enumList && enumList.length ? (
            <button
              onClick={onToggle}
              className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border-none cursor-pointer"
            >
              {enumList.length} kod {acik ? '▴' : '▾'}
            </button>
          ) : null}
        </td>
      </tr>
      {enumList && enumList.length > 0 && acik && (
        <tr>
          <td colSpan={5} className="bg-[#fffdf7] p-0 border-b border-gray-100">
            <div className="px-4 py-3 flex flex-wrap gap-1.5">
              {enumList.map((e) => (
                <span
                  key={e.code}
                  className="text-xs bg-white border border-[#f0e4cc] rounded-md px-2.5 py-1"
                >
                  <b className={`text-amber-600 ${MONO}`}>{e.code}</b> : {e.label}
                </span>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
