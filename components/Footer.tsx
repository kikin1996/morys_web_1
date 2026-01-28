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
                <p className="mt-1 text-lg font-semibold">Ing. Radovan Morys</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/60">
                  Specialista prodeje
                </p>
                <p className="mt-1 font-semibold">Robert Goryl</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400/20">
                    <span className="text-blue-300">✉</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">E-mail</p>
                    <a
                      href="mailto:info@kurko.cz"
                      className="text-white hover:underline"
                    >
                      info@kurko.cz
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
                      href="tel:+420705008007"
                      className="text-white hover:underline"
                    >
                      +420 705 008 007
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
            <p>Web vytvořili Tours-3d.com</p>
            <p>© {new Date().getFullYear()} – Všechna práva vyhrazena</p>
          </div>
          <div className="flex gap-4">
            <a
              href="/zasady-ochrany-osobnich-udaju"
              className="hover:text-white"
            >
              Zásady ochrany osobních údajů
            </a>
            <a
              href="/nastaveni-souboru-cookie"
              className="hover:text-white"
            >
              Nastavení souborů cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


