export function UhrinevesSection() {
  return (
    <section className="border-b border-neutral-100 bg-neutral-50 py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#f4f0e6] px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Na Blatnici jinak
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
              Na Blatnici Frýdek-Místek trochu jinak
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Domov, který má styl, smysl i místo. Takový, ve kterém se budete
              cítit jako doma. Projekt Na Blatnici přináší moderní bydlení ve
              Frýdku-Místku s vlastním charakterem a příjemným okolím.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Lokalita Na Blatnici leží přímo pod návrším s farním kostelem sv.
              Jana Křtitele, v historické části Frýdku. Kombinuje atmosféru
              původního městského jádra, dochované hradby a kapli Panny Marie
              Bolestné s nově vznikajícím parkem, zelení a moderní úpravou
              veřejného prostoru – ideální místo pro klidné městské bydlení.
            </p>
          </div>
          <div
            className="aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-sm"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.15), rgba(0,0,0,0.05)), url('/fotky/fotografie-exterier/ex%20(4).jpg')"
            }}
          />
        </div>
      </div>
    </section>
  );
}


