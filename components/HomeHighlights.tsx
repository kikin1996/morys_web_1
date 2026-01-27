export function HomeHighlights() {
  const items = [
    {
      title: "Historie na dosah",
      text: "Bydlení přímo pod kostelem sv. Jana Křtitele a v blízkosti původních městských hradeb – spojení genia loci a moderního standardu bydlení."
    },
    {
      title: "Nový park a zeleň",
      text: "Navazující klidová zóna s novým parkem, stromy a upraveným svažitým terénem vytváří příjemné prostředí pro odpočinek i každodenní život."
    },
    {
      title: "Město na dosah",
      text: "Jen pár kroků od historického centra Frýdku, služeb a občanské vybavenosti, přesto v klidnější části města stranou hlavních tahů."
    }
  ];

  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-base">
                {item.title === "Historie na dosah" && <span aria-hidden>🏰</span>}
                {item.title === "Nový park a zeleň" && <span aria-hidden>🌳</span>}
                {item.title === "Město na dosah" && <span aria-hidden>🏙️</span>}
              </div>
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


