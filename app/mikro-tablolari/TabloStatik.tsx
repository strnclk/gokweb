import type { MikroTabloOzet } from '@/lib/mikro-tablolari';

// SUNUCU bileşeni — 'use client' YOK. 438 satır statik HTML olarak basılır,
// React tarafından hydrate EDİLMEZ; bu yüzden hero/daktiloyu yavaşlatmaz.
// Arama/filtre ve satır tıklaması TabloFiltre (client) tarafından DOM üzerinden
// uygulanır; satırlardaki data-* öznitelikleri filtre için kullanılır.

// Tablo adını alt çizgilerden bölünebilir yapar (rastgele harf ortasından kırılmasın).
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

export default function TabloStatik({ tablolar }: { tablolar: MikroTabloOzet[] }) {
  return (
    <>
      <div id="mikro-tablo-sarmal" className="overflow-x-auto border-[1.5px] border-gray-200 rounded-2xl">
        <table id="mikro-tablo" className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              <th className="text-left px-[18px] py-[13px] bg-gray-50 text-gray-500 font-bold text-[13px] border-b-2 border-gray-200 whitespace-nowrap w-24">
                Tablo No
              </th>
              <th className="text-left px-[18px] py-[13px] bg-gray-50 text-gray-500 font-bold text-[13px] border-b-2 border-gray-200 whitespace-nowrap">
                Tablo Adı
              </th>
              <th className="text-left px-[18px] py-[13px] bg-gray-50 text-gray-500 font-bold text-[13px] border-b-2 border-gray-200 whitespace-nowrap w-[42%]">
                Tablo Açıklaması
              </th>
            </tr>
          </thead>
          <tbody>
            {tablolar.map((t) => (
              <tr
                key={t.slug}
                data-slug={t.slug}
                data-modul={t.modul}
                data-ara={`${t.db} ${t.tr} ${t.modul}`.toLowerCase()}
                className="cursor-pointer transition-colors hover:bg-blue-50/60 border-b border-gray-100 last:border-b-0"
              >
                <td className="px-[18px] py-3 align-top text-gray-400 tabular-nums">{t.tablo_no}</td>
                <td className="px-[18px] py-3 align-top font-bold text-gray-900 [overflow-wrap:anywhere]">
                  <KirilabilirAd s={t.db} />
                </td>
                <td className="px-[18px] py-3 align-top">
                  <a
                    href={`/mikro-tablolari/${t.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {t.tr}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Arama sonuç yoksa gösterilir (filtre tarafından açılır/kapanır) */}
      <div id="mikro-tablo-bos" hidden className="text-center py-12 text-gray-500">
        Aramanızla eşleşen tablo bulunamadı.
      </div>
    </>
  );
}
