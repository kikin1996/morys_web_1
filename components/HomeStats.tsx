export function HomeStats() {
  const items = [
    {
      label: "Počet bytů",
      value: "14"
    },
    {
      label: "Bytové jednotky",
      value: "2kk – 4kk"
    },
    {
      label: "Podlahová plocha",
      value: "78 – 182 m²"
    },
    {
      label: "Energetická náročnost",
      value: "PENB A"
    }
  ];

  return (
    <section className="border-b border-neutral-100 bg-neutral-50 py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-white px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 text-sm text-neutral-900 sm:grid-cols-4 sm:gap-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 sm:text-xs sm:tracking-[0.18em]">
              Počet bytů
            </p>
            <p className="mt-2 text-3xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-4xl lg:text-5xl">
              14
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 sm:text-xs sm:tracking-[0.18em]">
              Bytové jednotky
            </p>
            <p className="mt-2 text-3xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-4xl lg:text-5xl">
              2kk – 4kk
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 sm:text-xs sm:tracking-[0.18em]">
              Podlahová plocha
            </p>
            <p className="mt-2 text-3xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-4xl lg:text-5xl">
              78 – 182 m²
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 sm:text-xs sm:tracking-[0.18em]">
              Energetická náročnost
            </p>
            <p className="mt-2 text-3xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-4xl lg:text-5xl">
              PENB A
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

