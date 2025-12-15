export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#10140f] text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="space-y-2 text-sm text-neutral-300">
            <p className="font-semibold text-white">
              Ecovilla – technická klonovací ukázka
            </p>
            <p>
              Tento projekt replikuje informační architekturu a interakce
              originálního webu, nikoliv originální texty či grafiku.
            </p>
          </div>
          <div className="space-y-1 text-sm text-neutral-300">
            <p className="font-semibold text-white">Developer projektu</p>
            <p>Ukázkový developer</p>
            <p>IČO 00000000</p>
          </div>
          <div className="space-y-2 text-sm text-neutral-300">
            <p className="font-semibold text-white">Kontakt</p>
            <p>
              E-mail:{" "}
              <a
                href="mailto:info@example.com"
                className="text-primary hover:underline"
              >
                info@example.com
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a
                href="tel:+420123456789"
                className="text-primary hover:underline"
              >
                +420 123 456 789
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Ecovilla clone. Všechna práva
            vyhrazena.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-200">
              Zásady ochrany osobních údajů
            </a>
            <a href="#" className="hover:text-neutral-200">
              Nastavení cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


