export function HomePhotoStrip() {
  const items = [
    {
      label: "Ložnice",
      badge: "Interiér 1",
      image: "/images/vizualizace-interieru/a%20(3).jpg"
    },
    {
      label: "Kuchyně a jídelna",
      badge: "Interiér 2",
      image: "/images/vizualizace-interieru/c2%20(2).jpg"
    },
    {
      label: "Koupelna",
      badge: "Interiér 3",
      image: "/images/vizualizace-interieru/d%20(3).jpg"
    }
  ];

  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 sm:text-lg">
              Náhled do interiérů Na Blatnici
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Vybrané vizualizace interiérů ukazují atmosféru ložnice, kuchyně i
              koupelny v projektu Na Blatnici – práci se světlem, materiály a
              návaznost na terasy a balkóny.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-200"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0)), url('${item.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="font-medium">{item.label}</span>
                <span className="rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-900">
                  {item.badge ?? `Interiér ${idx + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


