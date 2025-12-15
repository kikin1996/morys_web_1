export function HomeStats() {
  const items = [
    {
      label: "Počet bytů",
      value: "26"
    },
    {
      label: "Bytové jednotky",
      value: "1kk – 4kk"
    },
    {
      label: "Ordinace",
      value: "103 m²"
    },
    {
      label: "Energetická náročnost",
      value: "PENB A"
    }
  ];

  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-t border-neutral-200 pt-8 text-sm text-neutral-900 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                {item.label}
              </p>
              <p className="mt-3 text-4xl font-semibold leading-none tracking-tight text-[#12351c] sm:text-5xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

