import Link from "next/link";

export function HomeBytProVasSection() {
  const cards = [
    {
      title: "Chytré bydlení pro mladý pár",
      body: [
        "Hledáte místo, kde začít společný život? Tento projekt nabízí ideální start – moderní byty s chytrým řešením prostoru, výbornou dostupností do centra a dostupnou cenou.",
        "Klidná lokalita, kompletní občanská vybavenost a vysoký standard bydlení vám poskytnou pohodlí, které si zasloužíte hned od začátku.",
        "Skvělá volba pro první společný domov, který má styl i smysl."
      ]
    },
    {
      title: "Investice, která dává ekonomický smysl",
      body: [
        "Díky atraktivní ceně za m² a dispozicím s vysokou efektivitou prostoru je projekt ideální volbou pro investory.",
        "Menší počet jednotek zajišťuje klidné prostředí a zároveň nižší konkurenční tlak při pronájmu.",
        "Lokalita s výbornou dostupností do centra a kompletní vybaveností zvyšuje poptávku po dlouhodobém i střednědobém bydlení."
      ]
    },
    {
      title: "Prostor pro celou rodinu",
      body: [
        "Hledáte domov, kde bude mít každý své místo – i vlastní klid? Větší byty s terasou nebo předzahrádkou nabízejí dostatek prostoru pro rodinný život i každodenní pohodlí.",
        "Klidná lokalita s výbornou dostupností, školkami, hřišti i zelení vytváří ideální zázemí pro rodiny s dětmi."
      ]
    }
  ];

  return (
    <section className="border-b border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Byt pro vás
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
            Najděte svůj byt za 3, 2, 1...
          </h2>
          <Link
            href="/cenik"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Volné byty
            <span aria-hidden></span>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-5 text-sm text-neutral-700"
            >
              <h3 className="text-sm font-semibold text-neutral-900">
                {card.title}
              </h3>
              <div className="mt-3 space-y-2">
                {card.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


