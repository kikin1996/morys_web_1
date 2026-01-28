import Link from "next/link";

export function ImportantAddressesSection() {
  return (
    <section className="border-t border-neutral-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Kde nás najdete
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Prodej bytů Na Blatnici zajišťuje KURKO reality s.r.o. Sídlíme na
            náměstí Svobody ve Frýdku-Místku, kde se s vámi rádi osobně potkáme
            a probereme všechny detaily projektu i financování.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Adresa projektu */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Projekt Na Blatnici
              </h3>
              <div className="mt-3 space-y-1 text-sm text-neutral-600">
                <p>Na Blatnici</p>
                <p>738 01 Frýdek-Místek 1</p>
              </div>
            </div>
          </div>

          {/* KURKO reality – kancelář */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-emerald-50 to-emerald-100" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                KURKO reality s.r.o.
              </h3>
              <div className="mt-3 space-y-1 text-sm text-neutral-600">
                <p>nám. Svobody 29</p>
                <p>738 01 Frýdek-Místek</p>
                <p>IČO: 07301626 · DIČ: CZ07301626</p>
                <p className="pt-2">E-mail: info@kurko.cz</p>
                <p>Telefon: +420 705 008 007</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







