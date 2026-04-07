"use client";

import { useState } from "react";
import AvailabilityTableOnly from "./AvailabilityTableOnly";

type ApartmentInfo = {
  code: string;
  usableArea: string;
  floor: string;
  rooms: number;
  outdoorLabel: string;
  outdoorSize: string;
};

const APARTMENT_INFO_BY_CODE: Record<string, ApartmentInfo> = {
  A: { code: "A", usableArea: "125,14 m²", floor: "1. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "24,72 m²" },
  B: { code: "B", usableArea: "148,72 m²", floor: "1. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "52,16 m²" },
  C: { code: "C", usableArea: "147,39 m²", floor: "1. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "45,32 m²" },
  D: { code: "D", usableArea: "84,80 m²",  floor: "2. NP", rooms: 2, outdoorLabel: "Balkon", outdoorSize: "17,07 m²" },
  E: { code: "E", usableArea: "98,66 m²",  floor: "2. NP", rooms: 2, outdoorLabel: "Balkon", outdoorSize: "24,06 m²" },
  F: { code: "F", usableArea: "98,38 m²",  floor: "2. NP", rooms: 2, outdoorLabel: "Balkon", outdoorSize: "23,34 m²" },
  G: { code: "G", usableArea: "82,13 m²",  floor: "2. NP", rooms: 2, outdoorLabel: "Balkon", outdoorSize: "82,13 m²" },
  H: { code: "H", usableArea: "78,31 m²",  floor: "2. NP", rooms: 2, outdoorLabel: "Balkon", outdoorSize: "16,67 m²" },
  I: { code: "I", usableArea: "126,89 m²", floor: "3. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "26,47 m²" },
  J: { code: "J", usableArea: "148,72 m²", floor: "3. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "52,16 m²" },
  K: { code: "K", usableArea: "147,89 m²", floor: "3. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "45,82 m²" },
  L: { code: "L", usableArea: "181,77 m²", floor: "4. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "80,18 m²" },
  M: { code: "M", usableArea: "130,77 m²", floor: "4. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "31,69 m²" },
  N: { code: "N", usableArea: "181,44 m²", floor: "4. NP", rooms: 3, outdoorLabel: "Velikost terasy", outdoorSize: "80,56 m²" },
};

const FLOOR_LABELS: Record<string, string> = {
  "1": "1. NP",
  "2": "2. NP",
  "3": "3. NP",
  "4": "4. NP",
};

export default function HousePickerLayout() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedApartmentCode, setSelectedApartmentCode] = useState<string | null>(null);
  const [floorplanLightbox, setFloorplanLightbox] = useState(false);
  const [animDir, setAnimDir] = useState<"right" | "left">("right");

  const resolved3dCode =
    selectedApartmentCode === "A" ? "I"
    : selectedApartmentCode === "B" ? "J"
    : selectedApartmentCode === "C" ? "K"
    : selectedApartmentCode ?? null;

  const selectedApartmentInfo = selectedApartmentCode
    ? APARTMENT_INFO_BY_CODE[selectedApartmentCode] ?? null
    : null;

  const DEFAULT_APARTMENT: Record<string, string> = { "1": "A", "2": "D", "3": "I", "4": "L" };
  const aptG = (code: string) => `group/apartment${selectedApartmentCode === code ? " selected-apt" : ""}`;

  const handleSelectFloor = (id: string) => {
    setAnimDir("right");
    setSelectedFloor(id);
    setSelectedApartmentCode(DEFAULT_APARTMENT[id] ?? null);
  };

  const handleBackToBuilding = () => {
    setAnimDir("left");
    setSelectedFloor(null);
    setSelectedApartmentCode(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-20">
      <div className="mx-auto w-full px-4 py-6 sm:py-10 md:w-[90%] lg:w-[80%]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:p-10 lg:p-12">

          {/* Nadpis */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="mb-1 text-4xl font-semibold text-slate-900">Vyberte byt</h1>
              <p className="text-slate-600">
                {selectedFloor
                  ? `${FLOOR_LABELS[selectedFloor]} – klikněte na byt v půdorysu.`
                  : "Klikněte na patro nebo přejděte rovnou na tabulku níže."}
              </p>
            </div>
            {selectedFloor && (
              <button
                onClick={handleBackToBuilding}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zpět na budovu
              </button>
            )}
          </div>

          {/* Foto budovy nebo půdorys patra – přes celou šířku */}
          <div key={selectedFloor ?? "building"} className={animDir === "right" ? "animate-slide-right" : "animate-slide-left"}>
          {!selectedFloor ? (
            /* ── Foto budovy ── */
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
              <svg
                viewBox="0 0 742 556"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <image
                  href="/fotky/fotografie-exterier/drone2.webp"
                  x="0" y="0" width="742" height="556"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* 1. NP */}
                <g className="group/floor">
                  <polygon
                    points="275,478 652,337 652,277 275,410 78,323 78,368"
                    fill="rgba(18,53,28,0.15)"
                    stroke="#12351C"
                    strokeWidth="1.5"
                    className="cursor-pointer transition group-hover/floor:fill-[rgba(18,53,28,0.4)]"
                    onClick={() => handleSelectFloor("1")}
                  />
                  <text x="365" y="415" fill="#12351C" fontSize="16" fontWeight="700" textAnchor="middle" dominantBaseline="middle" className="pointer-events-none select-none">1. NP</text>
                </g>

                {/* 2. NP */}
                <g className="group/floor">
                  <polygon
                    points="275,410 652,277 652,225 275,332 78,268 78,323"
                    fill="rgba(18,53,28,0.15)"
                    stroke="#12351C"
                    strokeWidth="1.5"
                    className="cursor-pointer transition group-hover/floor:fill-[rgba(18,53,28,0.4)]"
                    onClick={() => handleSelectFloor("2")}
                  />
                  <text x="365" y="348" fill="#12351C" fontSize="16" fontWeight="700" textAnchor="middle" dominantBaseline="middle" className="pointer-events-none select-none">2. NP</text>
                </g>

                {/* 3. NP */}
                <g className="group/floor">
                  <polygon
                    points="275,332 652,225 652,154 275,237 78,187 78,268"
                    fill="rgba(18,53,28,0.15)"
                    stroke="#12351C"
                    strokeWidth="1.5"
                    className="cursor-pointer transition group-hover/floor:fill-[rgba(18,53,28,0.4)]"
                    onClick={() => handleSelectFloor("3")}
                  />
                  <text x="365" y="275" fill="#12351C" fontSize="16" fontWeight="700" textAnchor="middle" dominantBaseline="middle" className="pointer-events-none select-none">3. NP</text>
                </g>

                {/* 4. NP */}
                <g className="group/floor">
                  <polygon
                    points="275,237 610,166 611,130 637,127 637,114 474,98 133,129 133,145 156,147 158,173 78,186"
                    fill="rgba(18,53,28,0.15)"
                    stroke="#12351C"
                    strokeWidth="1.5"
                    className="cursor-pointer transition group-hover/floor:fill-[rgba(18,53,28,0.4)]"
                    onClick={() => handleSelectFloor("4")}
                  />
                  <text x="365" y="195" fill="#12351C" fontSize="16" fontWeight="700" textAnchor="middle" dominantBaseline="middle" className="pointer-events-none select-none">4. NP</text>
                </g>
              </svg>
            </div>
          ) : (
            /* ── Půdorys patra ── */
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
              <img
                src={`/images/2d-pudorysy/p${selectedFloor}.jpg`}
                alt={`Půdorys ${FLOOR_LABELS[selectedFloor]}`}
                className="w-full object-contain"
              />

              {/* SVG overlay byty – 1. NP */}
              {selectedFloor === "1" && (
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1358" preserveAspectRatio="xMidYMid meet">
                  <g className={aptG("A")}>
                    <polygon points="118,1092 410,1069 410,1090 565,1078 565,404 118,404" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("A")} />
                    <text x="342" y="788" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt A</text>
                  </g>
                  <g className={aptG("B")}>
                    <polygon points="565,1078 683,1068 683,1089 955,1067 955,1090 1232,1067 1232,401 964,401 964,658 565,658" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("B")} />
                    <text x="899" y="788" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt B</text>
                  </g>
                  <g className={aptG("C")}>
                    <polygon points="1232,1091 1502,1068 1502,1091 1790,1067 1790,401 1339,401 1339,658 1232,658" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("C")} />
                    <text x="1511" y="788" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt C</text>
                  </g>
                </svg>
              )}

              {/* SVG overlay byty – 2. NP */}
              {selectedFloor === "2" && (
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1358" preserveAspectRatio="xMidYMid meet">
                  <g className={aptG("D")}>
                    <polygon points="117,1087 410,1066 410,959 425,959 425,403 117,403" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("D")} />
                    <text x="271" y="785" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt D</text>
                  </g>
                  <g className={aptG("E")}>
                    <polygon points="410,1091 684,1068 684,1089 825,1076 825,667 664,664 664,401 425,401 425,959 410,959" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("E")} />
                    <text x="588" y="786" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt E</text>
                  </g>
                  <g className={aptG("F")}>
                    <polygon points="825,1076 959,1065 959,1088 1234,1063 1234,954 1222,954 1222,401 964,401 964,667 825,667" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("F")} />
                    <text x="1030" y="789" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt F</text>
                  </g>
                  <g className={aptG("G")}>
                    <polygon points="1234,1091 1511,1065 1511,954 1521,954 1524,635 1508,635 1508,401 1222,401 1222,954 1234,954" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("G")} />
                    <text x="1373" y="790" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt G</text>
                  </g>
                  <g className={aptG("H")}>
                    <polygon points="1511,1089 1800,1065 1800,401 1508,401 1508,635 1524,635 1521,954 1511,954" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("H")} />
                    <text x="1654" y="790" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt H</text>
                  </g>
                </svg>
              )}

              {/* SVG overlay byty – 3. NP */}
              {selectedFloor === "3" && (
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1358" preserveAspectRatio="xMidYMid meet">
                  <g className={aptG("I")}>
                    <polygon points="108,1089 401,1066 401,1089 558,1075 558,401 108,401" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("I")} />
                    <text x="333" y="785" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt I</text>
                  </g>
                  <g className={aptG("J")}>
                    <polygon points="558,1075 677,1064 677,1086 952,1064 952,1086 1241,1061 1241,401 960,401 960,662 558,662" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("J")} />
                    <text x="900" y="784" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt J</text>
                  </g>
                  <g className={aptG("K")}>
                    <polygon points="1231,1064 1231,1087 1505,1064 1505,1087 1798,1062 1798,401 1344,401 1344,658 1241,658 1241,1061" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("K")} />
                    <text x="1520" y="787" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt K</text>
                  </g>
                </svg>
              )}

              {/* SVG overlay byty – 4. NP */}
              {selectedFloor === "4" && (
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1358" preserveAspectRatio="xMidYMid meet">
                  <g className={aptG("L")}>
                    <polygon points="119,1087 410,1067 410,1088 686,1066 686,952 671,952 671,408 530,408 530,323 118,337 408,332 408,310 118,337" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("L")} />
                    <text x="400" y="740" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt L</text>
                  </g>
                  <g className={aptG("M")}>
                    <polygon points="686,1087 959,1063 959,1085 1236,1062 1236,958 1250,958 1250,406 963,406 963,655 677,655 671,952 686,952" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("M")} />
                    <text x="968" y="787" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt M</text>
                  </g>
                  <g className={aptG("N")}>
                    <polygon points="1236,1086 1510,1064 1510,1086 1798,1061 1798,311 1507,333 1507,310 1385,322 1385,410 1250,406 1250,958 1236,958" fill="transparent" stroke="#12351C" strokeWidth="2"
                      className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                      onClick={() => setSelectedApartmentCode("N")} />
                    <text x="1517" y="739" fill="#12351C" fontSize="55" fontWeight="600" textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100">Byt N</text>
                  </g>
                </svg>
              )}
            </div>
          )}
          </div>{/* konec animovaného wrapperu */}

          {/* 2 sloupce – Informace o bytu + Půdorys bytu (jen pokud je vybráno patro a byt) */}
          {selectedFloor && selectedApartmentCode && (
            <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">

              {/* Informace o bytu */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Informace o bytu</h3>
                <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-6">
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Volný
                    </span>
                  </div>
                  <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                    {selectedApartmentInfo ? `Byt ${selectedApartmentInfo.code}` : "—"}
                  </h2>
                  <div className="mb-6">
                    <a
                      href={selectedApartmentInfo ? `/documents/karta-bytu-${selectedApartmentInfo.code}.pdf` : "/documents/karta-bytu.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#12351C] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(18,53,28,0.3)] transition-all duration-200 hover:bg-[#102c18] hover:shadow-[0_6px_16px_rgba(18,53,28,0.4)]"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Karta bytu (PDF)
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                      <p className="mb-1 text-xs text-slate-500">Užitná plocha</p>
                      <p className="text-lg font-semibold text-slate-900">{selectedApartmentInfo?.usableArea ?? "—"}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                      <p className="mb-1 text-xs text-slate-500">Patro</p>
                      <p className="text-lg font-semibold text-slate-900">{selectedApartmentInfo?.floor ?? "—"}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                      <p className="mb-1 text-xs text-slate-500">Počet pokojů</p>
                      <p className="text-lg font-semibold text-slate-900">{selectedApartmentInfo?.rooms ?? "—"}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                      <p className="mb-1 text-xs text-slate-500">{selectedApartmentInfo?.outdoorLabel ?? "Terasa"}</p>
                      <p className="text-lg font-semibold text-slate-900">{selectedApartmentInfo?.outdoorSize ?? "—"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Půdorys bytu */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Půdorys bytu</h3>
                <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
                  <div className="relative h-[240px] w-full overflow-hidden sm:h-[340px] lg:h-[420px]">
                    {resolved3dCode ? (
                      <button
                        type="button"
                        className="group h-full w-full"
                        onClick={() => setFloorplanLightbox(true)}
                      >
                        <img
                          src={`/3d-pudorysy/3d_pudorysy_byt${resolved3dCode}.jpg`}
                          alt={`3D půdorys bytu ${resolved3dCode}`}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                          <span className="rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white">Zvětšit</span>
                        </div>
                      </button>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
                        <p className="text-sm text-slate-400">Půdorys bytu bude doplněn</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tabulka dostupnosti – vždy dole */}
          <div className="mt-10">
            <AvailabilityTableOnly />
          </div>

        </div>
      </div>

      {/* Lightbox půdorysu bytu */}
      {floorplanLightbox && resolved3dCode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setFloorplanLightbox(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white hover:bg-black/80"
              onClick={() => setFloorplanLightbox(false)}
            >
              Zavřít
            </button>
            <img
              src={`/3d-pudorysy/3d_pudorysy_byt${resolved3dCode}.jpg`}
              alt={`3D půdorys bytu ${resolved3dCode}`}
              className="max-h-[85vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
