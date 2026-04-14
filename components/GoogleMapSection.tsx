export function GoogleMapSection() {
  return (
    <section className="border-t border-neutral-100 bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Adresa projektu – mapa
          </h2>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Na+Blatn%C3%ADci,+738+01+Fr%C3%BDdek-M%C3%ADstek+1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#12351c] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0c2614]"
          >
            <span>Trasa</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
              ➜
            </span>
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <iframe
            title="Mapa projektu Na Blatnici, Frýdek-Místek"
            src="https://www.google.com/maps?q=Na+Blatn%C3%ADci,+738+01+Fr%C3%BDdek-M%C3%ADstek+1&output=embed&z=17"
            width="100%"
            height="600"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-2 text-sm text-neutral-600">
          Na Blatnici, 738 01 Frýdek-Místek 1
        </p>
      </div>
    </section>
  );
}
