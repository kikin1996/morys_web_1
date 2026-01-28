"use client";

import { useState } from "react";

const FILTERS = [
  { id: "all", label: "Všechny" },
  { id: "exterior", label: "Exteriér" },
  { id: "interior", label: "Interiér" },
  { id: "surroundings", label: "Okolí" },
  { id: "equipment", label: "Vybavení" }
];

const IMAGES = [
  // Exteriér – všechny fotky z /fotky/fotografie-exterier
  {
    id: 1,
    label: "Exteriér – pohled z parku",
    category: "exterior",
    src: "/fotky/fotografie-exterier/ex%20(1).jpg"
  },
  {
    id: 2,
    label: "Exteriér – hlavní fasáda",
    category: "exterior",
    src: "/fotky/fotografie-exterier/ex%20(2).jpg"
  },
  {
    id: 3,
    label: "Exteriér – pohled na dům",
    category: "exterior",
    src: "/fotky/fotografie-exterier/ex%20(3).jpg"
  },
  {
    id: 4,
    label: "Exteriér – detail fasády",
    category: "exterior",
    src: "/fotky/fotografie-exterier/ex%20(4).jpg"
  },
  {
    id: 5,
    label: "Exteriér – pohled z ulice",
    category: "exterior",
    src: "/fotky/fotografie-exterier/ex%20(5).jpg"
  },
  {
    id: 6,
    label: "Interiér – ložnice A1",
    category: "interior",
    src: "/images/vizualizace-interieru/a%20(1).jpg"
  },
  // Interiér – všechny fotky z /images/vizualizace-interieru
  {
    id: 7,
    label: "Interiér – ložnice A1",
    category: "interior",
    src: "/images/vizualizace-interieru/a%20(1).jpg"
  },
  {
    id: 8,
    label: "Interiér – ložnice A2",
    category: "interior",
    src: "/images/vizualizace-interieru/a%20(2).jpg"
  },
  {
    id: 9,
    label: "Interiér – ložnice A3",
    category: "interior",
    src: "/images/vizualizace-interieru/a%20(3).jpg"
  },
  {
    id: 10,
    label: "Interiér – obývací pokoj B1",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(1).jpg"
  },
  {
    id: 11,
    label: "Interiér – obývací pokoj B2",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(2).jpg"
  },
  {
    id: 12,
    label: "Interiér – obývací pokoj B3",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(3).jpg"
  },
  {
    id: 13,
    label: "Interiér – obývací pokoj B4",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(4).jpg"
  },
  {
    id: 14,
    label: "Interiér – obývací pokoj B5",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(5).jpg"
  },
  {
    id: 15,
    label: "Interiér – obývací pokoj B6",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(6).jpg"
  },
  {
    id: 16,
    label: "Interiér – obývací pokoj B7",
    category: "interior",
    src: "/images/vizualizace-interieru/b%20(7).jpg"
  },
  {
    id: 17,
    label: "Interiér – kuchyně C2-1",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(1).jpg"
  },
  {
    id: 18,
    label: "Interiér – kuchyně C2-2",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(2).jpg"
  },
  {
    id: 19,
    label: "Interiér – kuchyně C2-3",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(3).jpg"
  },
  {
    id: 20,
    label: "Interiér – kuchyně C2-4",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(4).jpg"
  },
  {
    id: 21,
    label: "Interiér – kuchyně C2-5",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(5).jpg"
  },
  {
    id: 22,
    label: "Interiér – kuchyně C2-6",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(6).jpg"
  },
  {
    id: 23,
    label: "Interiér – kuchyně C2-7",
    category: "interior",
    src: "/images/vizualizace-interieru/c2%20(7).jpg"
  },
  {
    id: 24,
    label: "Interiér – koupelna D1",
    category: "interior",
    src: "/images/vizualizace-interieru/d%20(1).jpg"
  },
  {
    id: 25,
    label: "Interiér – koupelna D2",
    category: "interior",
    src: "/images/vizualizace-interieru/d%20(2).jpg"
  },
  {
    id: 26,
    label: "Interiér – koupelna D3",
    category: "interior",
    src: "/images/vizualizace-interieru/d%20(3).jpg"
  },
  {
    id: 27,
    label: "Interiér – koupelna D4",
    category: "interior",
    src: "/images/vizualizace-interieru/d%20(4).jpg"
  }
];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeFilter);

  const currentImage =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <>
      <div className="mt-16 sm:mt-20">
        {/* Top Section - 2 Columns */}
        <section className="border-b border-neutral-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Left - Image */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200">
                <img
                  src="/fotky/fotografie-exterier/ex%20(5).jpg"
                  alt="Vizualizace exteriéru projektu Na Blatnici"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right - Text */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                  <span>Galerie</span>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  Fotogalerie projektu
                </h1>
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Prohlédněte si fotografie exteriéru, interiéru a vybavení projektu
                  ECOVILLA Uhříněves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="border-b border-neutral-100 bg-white py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setLightboxIndex(null);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-[#12351c] text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="border-b border-neutral-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {filteredImages.map((img, index) => (
                <button
                  key={img.id}
                  type="button"
                  className="group aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#12351c]"
                  onClick={() => img.src && setLightboxIndex(index)}
                >
                  {img.src ? (
                    <img
                      src={img.src}
                      alt={img.label}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-4">
                      <span className="mb-2 text-xs font-medium text-neutral-700">
                        Obrázek
                      </span>
                      <span className="text-center text-xs text-neutral-600">
                        {img.label}
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox overlay */}
      {currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white hover:bg-black/80"
              onClick={() => setLightboxIndex(null)}
            >
              Zavřít
            </button>

            {/* Previous arrow */}
            {lightboxIndex !== null && lightboxIndex > 0 && (
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
              >
                ‹
              </button>
            )}

            {/* Next arrow */}
            {lightboxIndex !== null &&
              lightboxIndex < filteredImages.length - 1 && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null && prev < filteredImages.length - 1
                        ? prev + 1
                        : prev
                    )
                  }
                >
                  ›
                </button>
              )}

            <img
              src={currentImage.src!}
              alt={currentImage.label}
              className="max-h-[85vh] w-full rounded-2xl object-contain bg-neutral-900"
            />
            <p className="mt-3 text-center text-sm text-neutral-100">
              {currentImage.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}


