export function ContactSection() {
  return (
    <section className="border-t border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-[1400px] gap-6 px-4 py-10 sm:gap-10 sm:px-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8 lg:py-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#12351c] sm:text-4xl lg:text-6xl">
            <span className="block">Váš nový</span>
            <span className="block">domov začíná</span>
            <span className="block">otázkou</span>
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Prodej bytů Na Blatnici zajišťuje realitní kancelář KURKO reality
            s.r.o. Ozvěte se nám – rádi vám poskytneme veškeré informace,
            poradíme s financováním a pomůžeme vám s výběrem bytu přesně pro
            vás.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                <span className="text-lg">✉</span>
              </div>
              <a
                href="mailto:info@kurko.cz"
                className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
              >
                info@kurko.cz
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                <span className="text-lg">📞</span>
              </div>
              <a
                href="tel:+420705008007"
                className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
              >
                +420 705 008 007
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                <span className="text-lg">👤</span>
              </div>
              <div className="text-sm text-neutral-600">
                <p className="font-semibold">
                  Robert Goryl – specialista na trh s nemovitostmi
                </p>
                <p>
                  Mobil:{" "}
                  <a
                    href="tel:+420770610020"
                    className="hover:text-neutral-900 hover:underline"
                  >
                    +420 770 610 020
                  </a>
                </p>
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:robert.goryl@kurko.cz"
                    className="hover:text-neutral-900 hover:underline"
                  >
                    robert.goryl@kurko.cz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-4 rounded-[28px] border border-[#ece1cf] bg-[#f8f3e7] p-4 shadow-sm sm:rounded-[32px] sm:p-6">
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-neutral-800">
              Jméno a příjmení
            </label>
            <input
              type="text"
              placeholder="Jan Novák"
              className="w-full rounded-xl border border-neutral-200 px-3 py-3 text-base outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label className="block font-medium text-neutral-800">
                Telefon
              </label>
              <input
                type="tel"
                placeholder="+420 777 555 666"
                className="w-full rounded-xl border border-neutral-200 px-3 py-3 text-base outline-none ring-primary/40 focus:ring-2"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block font-medium text-neutral-800">
                E-mail
              </label>
              <input
                type="email"
                placeholder="jmeno@email.cz"
                className="w-full rounded-xl border border-neutral-200 px-3 py-3 text-base outline-none ring-primary/40 focus:ring-2"
              />
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-neutral-800">Text</label>
            <textarea
              rows={4}
              placeholder="Vaše zpráva"
              className="w-full resize-none rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          <p className="text-xs text-neutral-500">
            Odesláním formuláře souhlasíte se zpracováním osobních údajů pro
            účely zpětného kontaktování.
          </p>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#12351c] px-6 py-3 text-base font-semibold text-white hover:bg-[#0c2614]"
          >
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}


