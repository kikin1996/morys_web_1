export function Footer() {
  return (
    <footer className="bg-[#12351c] text-white">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-t-[32px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Newsletter Section - Left */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Buďte mezi prvními, kdo se dozví víc
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Získejte exkluzivní informace o nových bytech, cenových nabídkách
                a postupu výstavby. Nechte nám svůj e-mail a nic důležitého vám
                neunikne.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Zadejte e-mail"
                className="flex-1 rounded-xl bg-[#1e4a2d] px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1e4a2d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2a5a3d]"
              >
                Odběr
                <span>➜</span>
              </button>
            </form>
          </div>

          {/* Contact Section - Right */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight">Kontakt</h3>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">
                  Developer projektu
                </p>
                <p className="mt-1 text-lg font-semibold">vivere</p>
                <p className="text-sm text-white/80">real estate.</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">
                  Klientské centrum:
                </p>
                <p className="mt-1 text-white/90">
                  Karolinská 707/7, 186 00 Praha 8 - Karlín, Budova Missouri
                  park
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">
                  Specialista prodeje
                </p>
                <p className="mt-1 font-semibold">Josef Lebeda</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">
                  Prodej zajišťuje
                </p>
                <p className="mt-1 text-lg font-semibold">resimo</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">
                  Financující banka
                </p>
                <p className="mt-1 text-lg font-semibold">Raiffeisen BANK</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400/20">
                    <span className="text-blue-300">✉</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">E-mail</p>
                    <a
                      href="mailto:info@resimo.cz"
                      className="text-white hover:underline"
                    >
                      info@resimo.cz
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400/20">
                    <span className="text-blue-300">📞</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Telefon</p>
                    <a
                      href="tel:+420737347067"
                      className="text-white hover:underline"
                    >
                      +420 737 347 067
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>Webdesign & marketing: TRIUM.f</p>
            <p>© {new Date().getFullYear()} – Všechna práva vyhrazena</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Zásady ochrany osobních údajů
            </a>
            <a href="#" className="hover:text-white">
              Nastavení souborů cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


