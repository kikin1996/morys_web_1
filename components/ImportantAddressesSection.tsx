import Link from "next/link";

export function ImportantAddressesSection() {
  return (
    <section className="border-t border-neutral-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Dvě důležité adresy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Srdečně vás přivítáme v našem klientském centru, kde s vámi rádi
            projdeme všechny detaily projektu. Pokud se však chcete podívat přímo
            na místo, kde vzniká váš budoucí domov, rádi vás doprovodíme i na
            samotný pozemek bytového domu. Abychom vám mohli věnovat plnou
            pozornost, je důležité si schůzku vždy předem domluvit. Těšíme se na
            osobní setkání!
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Klientské centrum Card */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Klientské centrum
              </h3>
              <div className="mt-3 space-y-1 text-sm text-neutral-600">
                <p>Missouri Park</p>
                <p>Karolinská 707/7</p>
                <p>186 00 Praha 8 - Karlín</p>
              </div>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#12351c] hover:underline"
              >
                <span>📍</span>
                <span>Mapa</span>
              </Link>
            </div>
          </div>

          {/* ECOVILLA Uhříněves Card */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-emerald-50 to-emerald-100" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                ECOVILLA Uhříněves
              </h3>
              <div className="mt-3 space-y-1 text-sm text-neutral-600">
                <p>Bečovská 941</p>
                <p>Praha - Uhříněves</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


