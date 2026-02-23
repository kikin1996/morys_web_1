"use client";

import { useState } from "react";
import EmbeddedSitePreview from "./EmbeddedSitePreview";
import AvailabilityTableOnly from "./AvailabilityTableOnly";

type House = {
  id: string;
  name: string;
  usableArea: number;
  plotArea: number;
  rooms: number;
  bathrooms: number;
  heroImage: string | null;
  floorplanImage: string | null;
  description: string;
  status: "Volný" | "Rezervováno" | "Prodáno";
  houseCardPdf?: string | null;
};

// Mock data - 12 domů s fotkami a půdorysy
const houses: House[] = [
  {
    id: "1",
    name: "Byt 01",
    usableArea: 120,
    plotArea: 450,
    rooms: 4,
    bathrooms: 2,
    heroImage: "/photos/web_f2.jpg",
    floorplanImage: "/photos/F1 resize.jpg",
    description:
      "Moderní dvojdům s velkou zahradou a kvalitním vybavením. Ideální pro rodinu, která hledá komfort a klidné prostředí.",
    status: "Volný",
    houseCardPdf: "/documents/dum-01-karta.pdf"
  },
  {
    id: "2",
    name: "Byt 02",
    usableArea: 135,
    plotArea: 500,
    rooms: 5,
    bathrooms: 2,
    heroImage: "/photos/F1 resize.jpg",
    floorplanImage: "/photos/web_f2.jpg",
    description:
      "Prostorný rodinný dům s garáží a velkorysou terasou orientovanou do zahrady.",
    status: "Rezervováno",
    houseCardPdf: "/documents/dum-02-karta.pdf"
  },
  {
    id: "3",
    name: "Byt 03",
    usableArea: 110,
    plotArea: 400,
    rooms: 3,
    bathrooms: 1,
    heroImage: null,
    floorplanImage: null,
    description:
      "Kompaktní dům ideální pro menší rodiny nebo pár, který ocení nízké provozní náklady.",
    status: "Volný",
    houseCardPdf: null
  },
  {
    id: "4",
    name: "Byt 04",
    usableArea: 145,
    plotArea: 550,
    rooms: 5,
    bathrooms: 3,
    heroImage: null,
    floorplanImage: null,
    description:
      "Luxusní dům s velkým pozemkem, bazénem a prémiovými materiály v interiéru.",
    status: "Volný",
    houseCardPdf: null
  },
  {
    id: "5",
    name: "Byt 05",
    usableArea: 100,
    plotArea: 380,
    rooms: 3,
    bathrooms: 1,
    heroImage: null,
    floorplanImage: null,
    description:
      "Úsporný dům s moderním designem a důrazem na přirozené osvětlení.",
    status: "Prodáno",
    houseCardPdf: null
  },
  {
    id: "6",
    name: "Byt 06",
    usableArea: 130,
    plotArea: 480,
    rooms: 4,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description:
      "Rodinný dům s velkou obývací plochou a přímým vstupem na terasu.",
    status: "Volný",
    houseCardPdf: null
  },
  {
    id: "7",
    name: "Byt 07",
    usableArea: 125,
    plotArea: 460,
    rooms: 4,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description:
      "Dům s otevřeným prostorem a prostornou zahradou pro rodinné aktivity.",
    status: "Rezervováno",
    houseCardPdf: null
  },
  {
    id: "8",
    name: "Byt 08",
    usableArea: 140,
    plotArea: 520,
    rooms: 5,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description:
      "Prostorný dům s garáží, sklepem a flexibilním dispozičním řešením.",
    status: "Volný",
    houseCardPdf: null
  },
  {
    id: "9",
    name: "Byt 09",
    usableArea: 115,
    plotArea: 420,
    rooms: 4,
    bathrooms: 2,
    heroImage: null,
    floorplanImage: null,
    description:
      "Moderní dům s energeticky úsporným řešením a chytrými technologiemi.",
    status: "Volný",
    houseCardPdf: null
  },
  {
    id: "10",
    name: "Byt 10",
    usableArea: 150,
    plotArea: 600,
    rooms: 6,
    bathrooms: 3,
    heroImage: null,
    floorplanImage: null,
    description:
      "Velkorysý dům pro vícegenerační bydlení nebo početnou rodinu.",
    status: "Volný",
    houseCardPdf: null
  },
  {
    id: "11",
    name: "Byt 11",
    usableArea: 105,
    plotArea: 390,
    rooms: 3,
    bathrooms: 1,
    heroImage: null,
    floorplanImage: null,
    description:
      "Kompaktní dům s malou zahradou, ideální jako startovací bydlení.",
    status: "Prodáno",
    houseCardPdf: null
  },
  {
    id: "12",
    name: "Byt 12",
    usableArea: 160,
    plotArea: 650,
    rooms: 6,
    bathrooms: 4,
    heroImage: null,
    floorplanImage: null,
    description:
      "Luxusní dům s velkým pozemkem, dostatkem soukromí a krásným výhledem.",
    status: "Volný",
    houseCardPdf: null
  }
];

export default function HousePickerLayout() {
  // Defaultně vybrán Dům 01
  const [selectedHouseId, setSelectedHouseId] = useState("1");
  const selectedHouse = houses.find((house) => house.id === selectedHouseId);

  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-20">
      <div className="mx-auto max-w-[1792px] px-4 py-12">
        {/* Jeden hlavní white card wrapper */}
        <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:p-10 lg:p-12">
          {/* Horní část: nadpis + 2 sloupce (dům / patro) */}
          <div className="space-y-6">
            {/* Nadpis */}
            <div>
              <h1 className="mb-2 text-4xl font-semibold text-slate-900">
                Vyberte byt
              </h1>
              <p className="mt-2 text-slate-600">
                Klikněte na byt v mapě nebo zvolte ze seznamu.
              </p>
            </div>

            {/* 2 sloupce: vlevo dům (patra), vpravo půdorys patra */}
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              {/* Sloupec 1 – dům s patry */}
              <div className="relative">
                <EmbeddedSitePreview
                  selectedHouseId={selectedHouseId}
                  onSelectHouse={setSelectedHouseId}
                />
              </div>

              {/* Sloupec 2 – půdorys patra podle vybraného patra v levém obrázku (1.–4. NP) */}
              <div className="overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-50">
                <div className="border-b border-slate-100 px-5 py-3">
                  <p className="text-sm font-semibold text-slate-900">
                    Půdorys {selectedHouseId}. patra
                  </p>
                  <p className="text-xs text-slate-500">
                    Klikněte na patro v levém obrázku – zobrazí se půdorys příslušného podlaží.
                  </p>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={`/images/2d-pudorysy/p${selectedHouseId}.jpg`}
                    alt={`Půdorys ${selectedHouseId}. patra`}
                    className="h-full w-full object-contain"
                  />
                  {/* Overlay – viewBox 1920×1358 (aktuální rozměr fotky 1. patra) */}
                  {selectedHouseId === "1" && (
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 1920 1358"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Sekce A – Byt A */}
                      <g className="group/apartment">
                        <polygon
                          points="118,1092 410,1069 410,1090 565,1078 565,404 118,404"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="342"
                          y="788"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt A
                        </text>
                      </g>
                      {/* Sekce B – Byt B */}
                      <g className="group/apartment">
                        <polygon
                          points="565,1078 683,1068 683,1089 955,1067 955,1090 1232,1067 1232,401 964,401 964,658 565,658"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="899"
                          y="788"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt B
                        </text>
                      </g>
                      {/* Sekce C – Byt C */}
                      <g className="group/apartment">
                        <polygon
                          points="1232,1091 1502,1068 1502,1091 1790,1067 1790,401 1339,401 1339,658 1232,658"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="1511"
                          y="788"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt C
                        </text>
                      </g>
                    </svg>
                  )}
                  {/* Overlay pro 2. patro – Byty D, E, F, G, H (viewBox pro 1920×1358 px) */}
                  {selectedHouseId === "2" && (
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 1920 1358"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Sekce D – Byt D */}
                      <g className="group/apartment">
                        <polygon
                          points="117,1087 410,1066 410,959 425,959 425,403 117,403"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="271"
                          y="785"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt D
                        </text>
                      </g>
                      {/* Sekce E – Byt E */}
                      <g className="group/apartment">
                        <polygon
                          points="410,1091 684,1068 684,1089 825,1076 825,667 664,664 664,401 425,401 425,959 410,959"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="588"
                          y="786"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt E
                        </text>
                      </g>
                      {/* Sekce F – Byt F */}
                      <g className="group/apartment">
                        <polygon
                          points="825,1076 959,1065 959,1088 1234,1063 1234,954 1222,954 1222,401 964,401 964,667 825,667"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="1030"
                          y="789"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt F
                        </text>
                      </g>
                      {/* Sekce G – Byt G */}
                      <g className="group/apartment">
                        <polygon
                          points="1234,1091 1511,1065 1511,954 1521,954 1524,635 1508,635 1508,401 1222,401 1222,954 1234,954"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="1373"
                          y="790"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt G
                        </text>
                      </g>
                      {/* Sekce H – Byt H */}
                      <g className="group/apartment">
                        <polygon
                          points="1511,1089 1800,1065 1800,401 1508,401 1508,635 1524,635 1521,954 1511,954"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="1654"
                          y="790"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt H
                        </text>
                      </g>
                    </svg>
                  )}
                  {/* Overlay pro 3. patro – Byty I, J, K (viewBox 1920×1358 px) */}
                  {selectedHouseId === "3" && (
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 1920 1358"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Sekce I – Byt I */}
                      <g className="group/apartment">
                        <polygon
                          points="108,1089 401,1066 401,1089 558,1075 558,401 108,401"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="333"
                          y="785"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt I
                        </text>
                      </g>

                      {/* Sekce J – Byt J */}
                      <g className="group/apartment">
                        <polygon
                          points="558,1075 677,1064 677,1086 952,1064 952,1086 1241,1061 1241,401 960,401 960,662 558,662"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="900"
                          y="784"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt J
                        </text>
                      </g>

                      {/* Sekce K – Byt K */}
                      <g className="group/apartment">
                        <polygon
                          points="1231,1064 1231,1087 1505,1064 1505,1087 1798,1062 1798,401 1344,401 1344,658 1241,658 1241,1061"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="1520"
                          y="787"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt K
                        </text>
                      </g>
                    </svg>
                  )}
                  {/* Overlay pro 4. patro – Byty L, M, N (viewBox 1920×1358 px) */}
                  {selectedHouseId === "4" && (
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 1920 1358"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Sekce L – Byt L */}
                      <g className="group/apartment">
                        <polygon
                          points="119,1087 410,1067 410,1088 686,1066 686,952 671,952 671,408 530,408 530,323 118,337 408,332 408,310 118,337"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="400"
                          y="740"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt L
                        </text>
                      </g>

                      {/* Sekce M – Byt M */}
                      <g className="group/apartment">
                        <polygon
                          points="686,1087 959,1063 959,1085 1236,1062 1236,958 1250,958 1250,406 963,406 963,655 677,655 671,952 686,952"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="968"
                          y="787"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt M
                        </text>
                      </g>

                      {/* Sekce N – Byt N */}
                      <g className="group/apartment">
                        <polygon
                          points="1236,1086 1510,1064 1510,1086 1798,1061 1798,311 1507,333 1507,310 1385,322 1385,410 1250,406 1250,958 1236,958"
                          fill="transparent"
                          stroke="#12351C"
                          strokeWidth="2"
                          className="cursor-pointer transition group-hover/apartment:fill-[rgba(18,53,28,0.35)]"
                        />
                        <text
                          x="1517"
                          y="739"
                          fill="#12351C"
                          fontSize="55"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="pointer-events-none select-none opacity-0 transition group-hover/apartment:opacity-100"
                        >
                          Byt N
                        </text>
                      </g>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Spodní část: 2 sloupce – půdorys bytu + informace o bytu */}
          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            {/* Sloupec 1: Půdorys bytu */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Půdorys bytu
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {selectedHouse?.floorplanImage ? (
                    <img
                      src={selectedHouse.floorplanImage}
                      alt={`${selectedHouse.name} – půdorys bytu`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
                      <p className="text-sm text-slate-400">
                        Půdorys bytu bude doplněn
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sloupec 2: Informace o bytu */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Informace o bytu
              </h3>
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-6">
                {/* Status badge */}
                {selectedHouse?.status && (
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                        selectedHouse.status === "Volný"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : selectedHouse.status === "Rezervováno"
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-slate-200 bg-slate-100 text-slate-600"
                      }`}
                    >
                      {selectedHouse.status}
                    </span>
                  </div>
                )}

                {/* Název bytu */}
                <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                  {selectedHouse?.name}
                </h2>

                {/* Popis */}
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {selectedHouse?.description}
                </p>

                {/* Tlačítko Karta domu */}
                {selectedHouse?.houseCardPdf && (
                  <div className="mb-6">
                    <a
                      href={selectedHouse.houseCardPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#12351C] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(18,53,28,0.3)] transition-all duration-200 hover:bg-[#102c18] hover:shadow-[0_6px_16px_rgba(18,53,28,0.4)]"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Karta bytu (PDF)
                    </a>
                  </div>
                )}

                {/* Metriky bytu */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                    <p className="mb-1 text-xs text-slate-500">Užitná plocha</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.usableArea} m²
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                    <p className="mb-1 text-xs text-slate-500">Patro</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {/* Demo hodnota patra – v reálné aplikaci přijde z dat */}
                      3. NP
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                    <p className="mb-1 text-xs text-slate-500">Počet pokojů</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {selectedHouse?.rooms}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200/70 bg-white p-4">
                    <p className="mb-1 text-xs text-slate-500">Velikost terasy</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {/* Demo hodnota terasy – v reálné aplikaci přijde z dat */}
                      12 m²
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider před tabulkou */}
          <div className="mt-12 border-t border-slate-100" />

          {/* Tabulka dostupnosti (bez mapy) */}
          <div className="mt-12">
            <AvailabilityTableOnly />
          </div>
        </div>
      </div>
    </div>
  );
}






