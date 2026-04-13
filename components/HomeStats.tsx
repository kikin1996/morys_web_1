export function HomeStats() {
  const row1 = [
    { label: "Počet bytů", value: "14" },
    { label: "Bytové jednotky", value: "2kk – 4kk" },
    { label: "Podlahová plocha", value: "78 – 182 m²" },
  ];

  const row2 = [
    { label: "Energetická náročnost", value: "PENB A" },
    { label: "Počet parkovacích míst", value: "20" },
    { label: "Počet skladů", value: "20" },
  ];

  return (
    <section className="border-b border-neutral-100 bg-neutral-50 pt-2 pb-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-white px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 text-sm text-neutral-900 sm:gap-4">
          {row1.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 sm:text-xs sm:tracking-[0.18em]">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-4xl lg:text-5xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-neutral-100 pt-6 grid grid-cols-3 gap-6 text-sm text-neutral-900 sm:gap-4">
          {row2.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-600 sm:text-xs sm:tracking-[0.18em]">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-4xl lg:text-5xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
