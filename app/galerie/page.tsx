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
  {
    id: 1,
    label: "Pohled na budovu z jihu",
    category: "exterior"
  },
  {
    id: 2,
    label: "Hlavní vstup do budovy",
    category: "exterior"
  },
  {
    id: 3,
    label: "Vzorový byt - obývací pokoj",
    category: "interior"
  },
  {
    id: 4,
    label: "Vzorový byt - kuchyň",
    category: "interior"
  },
  {
    id: 5,
    label: "Okolí projektu",
    category: "surroundings"
  },
  {
    id: 6,
    label: "Vybavení bytu",
    category: "equipment"
  },
  {
    id: 7,
    label: "Exteriér budovy",
    category: "exterior"
  },
  {
    id: 8,
    label: "Interiér bytu",
    category: "interior"
  }
];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeFilter);

  return (
    <>
      <div className="mt-16 sm:mt-20">
        {/* Top Section - 2 Columns */}
        <section className="border-b border-neutral-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Left - Image */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200" />

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
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-teal-500 text-white"
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
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="group aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center p-4">
                    <span className="mb-2 text-xs font-medium text-neutral-700">
                      Obrázek
                    </span>
                    <span className="text-center text-xs text-neutral-600">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


