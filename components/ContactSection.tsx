export function ContactSection() {
  return (
    <section className="border-t border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8 lg:py-16">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
            Váš nový domov začíná otázkou
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Originální web využívá několik kontaktních formulářů s integrační
            logikou ve Webflow. Zde stavíme jednoduchý, plně kontrolovaný
            formulář připravený pro napojení na API.
          </p>
          <div className="space-y-1 text-sm text-neutral-700">
            <p className="font-semibold">Ukázkový prodejce</p>
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
        <form className="space-y-4 rounded-[32px] border border-[#ece1cf] bg-[#f8f3e7] p-6 shadow-sm">
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-neutral-800">
              Jméno a příjmení
            </label>
            <input
              type="text"
              placeholder="Jan Novák"
              className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
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
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block font-medium text-neutral-800">
                E-mail
              </label>
              <input
                type="email"
                placeholder="jmeno@email.cz"
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
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
            className="inline-flex w-full items-center justify-center rounded-full bg-[#12351c] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0c2614]"
          >
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}


