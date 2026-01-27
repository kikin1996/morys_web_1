import Link from "next/link";

export function HomeImportantSection() {
  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f4f0e6] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12351c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12351c]" aria-hidden />
              <span>Důležité</span>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
              ECOVILLA nabízí vše, co od svého bydlení očekáváte
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Dům je navržen s důrazem na ekologii, úspornost a moderní
              technologie – od fotovoltaiky na střeše přes centrální
              rekuperaci až po chytrou domácnost. Kvalitní materiály, podlahové
              vytápění, sklep ke každému bytu i příprava na elektromobilitu
              jsou samozřejmostí.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Díky promyšlenému řešení ušetříte nejen energii, ale i na
              měsíčních poplatcích. Zjistěte více o standardech vybavení bytů.
            </p>
            <Link
              href="/standardy"
              className="inline-flex items-center gap-3 rounded-full bg-[#12351c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c2614]"
            >
              Standardy
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-[#12351c]"
              >
                ➜
              </span>
            </Link>
          </div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-primary/10 via-neutral-100 to-primary/30" />
        </div>
      </div>
    </section>
  );
}


