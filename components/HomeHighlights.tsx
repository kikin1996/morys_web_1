export function HomeHighlights() {
  const items = [
    {
      title: "Klidná rezidenční čtvrť",
      text: "Projekt je zasazený do etablované městské části s navazující zelení, službami i dobrou dopravní dostupností."
    },
    {
      title: "Promyšlené dispozice",
      text: "Nabídka bytů od 1+kk po rodinné 4+kk, s důrazem na funkční využití prostoru, úložné prostory a venkovní plochy."
    },
    {
      title: "Soukromí a komunita",
      text: "Architektonické řešení podporuje soukromí obyvatel, zároveň nabízí sdílené prostory pro setkávání sousedů."
    }
  ];

  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5"
            >
              <div className="mb-3 h-8 w-8 rounded-full bg-primary/10" />
              <h2 className="text-sm font-semibold text-neutral-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


