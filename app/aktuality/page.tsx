const MILESTONES = [
  {
    id: 2,
    title: "Zahájení stavby",
    date: "Únor 2026",
    status: "Plánováno",
    description:
      "Plánované zahájení stavebních prací na bytovém domě včetně přípravy staveniště.",
    side: "right"
  },
  {
    id: 1,
    title: "Vydání stavebního povolení",
    date: "Prosinec 2025",
    status: "Plánováno",
    description:
      "Předpokládané vydání pravomocného stavebního povolení pro projekt Na Blatnici.",
    side: "left"
  }
];

export default function AktualityPage() {
  return (
    <>
      <div className="mt-16 sm:mt-20">
        {/* Top Section - 2 Columns */}
        <section className="border-b border-neutral-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Left - Image */}
              <div
                className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0)), url('/fotky/fotografie-exterier/ex%20(2).jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              />

              {/* Right - Text */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#12351c]/10 px-3 py-1 text-xs font-semibold text-[#12351c]">
                  <span>⚡</span>
                  <span>Aktuality stavby</span>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  Průběh výstavby
                </h1>
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Sledujte aktuální postup výstavby od zahájení až po dokončení.
                </p>
                <p className="text-xs text-neutral-500">
                  Aktualizováno: Červen 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="border-b border-neutral-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-neutral-200" />

              {/* Milestones */}
              <div className="space-y-12">
                {MILESTONES.map((milestone, index) => (
                  <div
                    key={milestone.id}
                    className={`relative flex items-start ${
                      milestone.side === "left" ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Marker */}
                    <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-[#12351c]" />

                    {/* Content Card */}
                    <div
                      className={`w-[calc(50%-2rem)] ${
                        milestone.side === "left" ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div
                          className={`mb-2 flex ${
                            milestone.side === "left"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                            {milestone.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                          {milestone.description}
                        </p>
                      </div>
                      {/* Date Tag */}
                      <div
                        className={`mt-3 ${
                          milestone.side === "left" ? "text-right" : "text-left"
                        }`}
                      >
                        <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                          {milestone.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


