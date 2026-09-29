const fs = require('fs');
const path = require('path');

/**
 * Next.js 16 statik export'ta RSC prefetch dosyalarını iç içe klasör olarak yazıyor
 * (`__next.services/egitim/__PAGE__.txt`), ancak client router bunları düz, noktayla
 * ayrılmış tek dosya adı olarak istiyor (`__next.services.egitim.__PAGE__.txt`).
 * Bu uyuşmazlık prefetch isteklerinin 404 dönmesine yol açıyor.
 *
 * Bkz. https://github.com/vercel/next.js/issues/85374
 *
 * Adapter export tamamlandıktan sonra çalışır ve dosyaları client'ın beklediği
 * isimlere taşır. Upstream düzeltme yayınlandığında bu dosya kaldırılabilir.
 */

/**
 * `.../__next.services/egitim/__PAGE__.txt` -> `.../__next.services.egitim.__PAGE__.txt`
 * Zaten düz olan yollar için null döner.
 */
function flattenPath(filePath) {
  const parts = filePath.split(path.sep);
  const idx = parts.findIndex((part) => part.startsWith('__next.'));

  // Segment bulunamadıysa ya da zaten son bileşense taşınacak bir şey yok.
  if (idx === -1 || idx >= parts.length - 1) {
    return null;
  }

  return [...parts.slice(0, idx), parts.slice(idx).join('.')].join(path.sep);
}

/** Taşıma sonrası boşalan `__next.*` klasörlerini kökten yukarı doğru temizler. */
async function pruneEmptyDirs(dirs) {
  for (const dir of [...dirs].sort((a, b) => b.length - a.length)) {
    try {
      await fs.promises.rmdir(dir);
    } catch {
      // Klasör boş değilse ya da zaten silinmişse sorun yok.
    }
  }
}

const adapter = {
  name: 'flatten-rsc-prefetch-paths',

  async onBuildComplete({ outputs }) {
    const emptiedDirs = new Set();
    let moved = 0;

    for (const file of outputs.staticFiles) {
      const target = flattenPath(file.filePath);
      if (!target) continue;

      await fs.promises.rename(file.filePath, target);
      emptiedDirs.add(path.dirname(file.filePath));
      moved++;
    }

    await pruneEmptyDirs(emptiedDirs);

    console.log(`  ✓ ${moved} RSC prefetch dosyası düz isimlendirmeye taşındı`);
  },
};

module.exports = adapter;
