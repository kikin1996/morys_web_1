export function ContactSection() {
  return (
    <section className="border-t border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8 lg:py-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#12351c] sm:text-5xl lg:text-6xl">
            <span className="block">Váš nový</span>
            <span className="block">domov začíná</span>
            <span className="block">otázkou</span>
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Jsme tu pro vás. Obraťte se na nás s jakýmikoli dotazy – rádi vám
            poskytneme veškeré informace a osobně vás provedeme výběrem bytu,
            který naplní vaše očekávání.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                <span className="text-lg">✉</span>
              </div>
              <a
                href="mailto:josef.lebeda@resimo.cz"
                className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
              >
                josef.lebeda@resimo.cz
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                <span className="text-lg">📞</span>
              </div>
              <a
                href="tel:+420737347067"
                className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline"
              >
                +420 737 347 067
              </a>
            </div>
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


