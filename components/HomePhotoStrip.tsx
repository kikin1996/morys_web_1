export function HomePhotoStrip() {
  // Zde záměrně používáme pouze barevné bloky jako placeholdery.
  // Ty můžeš nahradit vlastními <Image> komponentami nebo <img> tagy
  // s konkrétními fotografiemi, ke kterým máš práva.
  const items = [
    { label: "Vizuál domu" },
    { label: "Interiér bytu" },
    { label: "Zeleň v okolí" }
  ];

  return (
    <section className="border-b border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 sm:text-lg">
              Náhled do života v Ecoville
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Na originálním webu jsou zde velké fotografie exteriéru, interiéru
              a okolní zeleně. Zde je nahrazujeme neutrálními bloky připravenými
              pro tvoje vlastní obrázky.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="font-medium">{item.label}</span>
                <span className="rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-900">
                  {`Foto ${idx + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


