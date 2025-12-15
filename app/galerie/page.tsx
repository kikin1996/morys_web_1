import { PageHero } from "@/components/PageHero";

const IMAGES = Array.from({ length: 9 }).map((_, idx) => ({
  id: idx + 1,
  label: `Vizualizace ${idx + 1}`
}));

export default function GaleriePage() {
  return (
    <>
      <PageHero
        title="Galerie"
        description="Originální galerie je tvořena gridem vizualizací a fotografií. V naší cloně ukazujeme statický obrazový grid připravený pro napojení na skutečná média."
      />
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {IMAGES.map((img) => (
              <div
                key={img.id}
                className="group aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100"
              >
                <div className="flex h-full w-full items-end justify-between bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-3">
                  <span className="text-xs font-medium text-white/90">
                    {img.label}
                  </span>
                  <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-900">
                    Náhled
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


