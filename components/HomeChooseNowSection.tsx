import Link from "next/link";

export function HomeChooseNowSection() {
  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div
          className="grid min-h-[380px] md:min-h-[440px] lg:min-h-[500px] overflow-hidden rounded-[32px] bg-neutral-900 text-white shadow-lg md:grid-cols-2"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url('/images/vizualizace-interieru/c2%20(4).jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom"
          }}
        >
          {/* Levý sloupec prázdný pro kompozici obrázku */}
          <div className="hidden md:block" />

          {/* Pravý sloupec s textem a tlačítkem */}
          <div className="flex items-start px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
            <div className="max-w-md space-y-4 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#12351c] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                <span
                  aria-hidden
                  className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-xs"
                >
                  ★
                </span>
                <span>Na Blatnici</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Vyberte si ten pravý domov právě teď
              </h2>
              <p className="text-sm leading-relaxed text-neutral-100 sm:text-base">
                V přehledném ceníku najdete aktuálně dostupné jednotky včetně
                dispozic, výměr, cen a podlaží. Každý byt má balkón, terasu nebo
                předzahrádku, sklepní kóji a možnost parkování.
              </p>
              <div className="pt-2 flex justify-end">
                <Link
                  href="/cenik"
                  className="inline-flex items-center gap-3 rounded-full bg-[#f4f0e6] px-6 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-[#ece3d3] mr-3"
                >
                  Ceník
                  <span
                    aria-hidden
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#12351c] text-xs text-white"
                  >
                    ➜
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


