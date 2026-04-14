"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Apartment = {
  id: string;
  name: string;
  floor: string;
  layout: string;
  area: number;
  price: number;
  status: "volný" | "prodaný" | "v přípravě";
};

// Data pro tabulku – byty A–N
const apartments: Apartment[] = [
  // 1. NP
  {
    id: "A",
    name: "A",
    floor: "1.NP",
    layout: "3+kk",
    area: 125.14,
    price: 999_999,
    status: "volný"
  },
  {
    id: "B",
    name: "B",
    floor: "1.NP",
    layout: "3+kk",
    area: 148.72,
    price: 999_999,
    status: "volný"
  },
  {
    id: "C",
    name: "C",
    floor: "1.NP",
    layout: "3+kk",
    area: 147.39,
    price: 999_999,
    status: "volný"
  },
  // 2. NP
  {
    id: "D",
    name: "D",
    floor: "2.NP",
    layout: "2+kk",
    area: 84.8,
    price: 999_999,
    status: "volný"
  },
  {
    id: "E",
    name: "E",
    floor: "2.NP",
    layout: "2+kk",
    area: 98.66,
    price: 999_999,
    status: "volný"
  },
  {
    id: "F",
    name: "F",
    floor: "2.NP",
    layout: "2+kk",
    area: 98.38,
    price: 999_999,
    status: "volný"
  },
  {
    id: "G",
    name: "G",
    floor: "2.NP",
    layout: "2+kk",
    area: 82.13,
    price: 999_999,
    status: "volný"
  },
  {
    id: "H",
    name: "H",
    floor: "2.NP",
    layout: "2+kk",
    area: 78.31,
    price: 999_999,
    status: "volný"
  },
  // 3. NP
  {
    id: "I",
    name: "I",
    floor: "3.NP",
    layout: "3+kk",
    area: 126.89,
    price: 999_999,
    status: "volný"
  },
  {
    id: "J",
    name: "J",
    floor: "3.NP",
    layout: "3+kk",
    area: 148.72,
    price: 999_999,
    status: "volný"
  },
  {
    id: "K",
    name: "K",
    floor: "3.NP",
    layout: "3+kk",
    area: 147.89,
    price: 999_999,
    status: "volný"
  },
  // 4. NP
  {
    id: "L",
    name: "L",
    floor: "4.NP",
    layout: "3+kk",
    area: 181.77,
    price: 999_999,
    status: "volný"
  },
  {
    id: "M",
    name: "M",
    floor: "4.NP",
    layout: "3+kk",
    area: 130.77,
    price: 999_999,
    status: "volný"
  },
  {
    id: "N",
    name: "N",
    floor: "4.NP",
    layout: "3+kk",
    area: 181.44,
    price: 999_999,
    status: "volný"
  }
];

export default function AvailabilityTableOnly() {
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<Apartment["status"] | "vše">(
    "vše"
  );
  const [floorFilter, setFloorFilter] = useState<string | "vše">("vše");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("cs-CZ", {
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatArea = (area: number) => {
    return area.toFixed(1).replace(".", ",");
  };

  const getStatusColor = (status: Apartment["status"]) => {
    switch (status) {
      case "volný":
        return "bg-green-500";
      case "prodaný":
        return "bg-red-500";
      case "v přípravě":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status: Apartment["status"]) => {
    switch (status) {
      case "volný":
        return "Volný";
      case "prodaný":
        return "Prodaný";
      case "v přípravě":
        return "V přípravě";
      default:
        return status;
    }
  };

  const uniqueFloors = useMemo(
    () => Array.from(new Set(apartments.map((a) => a.floor))),
    []
  );

  const filteredApartments = useMemo(() => {
    return apartments.filter((apartment) => {
      if (selectedLayout && apartment.layout !== selectedLayout) return false;
      if (statusFilter !== "vše" && apartment.status !== statusFilter)
        return false;

      if (floorFilter !== "vše" && apartment.floor !== floorFilter)
        return false;

      return true;
    });
  }, [selectedLayout, statusFilter, floorFilter]);

  return (
    <div>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Filtrační panel */}
        <div className="overflow-hidden rounded-2xl bg-[#12351c] px-4 py-4 text-white shadow-md sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Dispozice */}
            <div className="flex flex-col gap-2 md:flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Dispozice
              </span>
              <div className="flex flex-wrap gap-2">
                {["2+kk", "3+kk"].map((layout) => {
                  const active = selectedLayout === layout;
                  return (
                    <button
                      key={layout}
                      type="button"
                      onClick={() =>
                        setSelectedLayout(active ? null : layout)
                      }
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                        active
                          ? "bg-white text-[#12351c]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {layout}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stav */}
            <div className="flex flex-col gap-2 md:w-40">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Stav
              </span>
              <select
                className="w-full rounded-full border-0 bg-white px-4 py-2 text-sm font-medium text-neutral-900 outline-none"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as Apartment["status"] | "vše")
                }
              >
                <option value="vše">Vyberte</option>
                <option value="volný">Volný</option>
                <option value="rezervováno" disabled>
                  Rezervováno (zatím není v datech)
                </option>
                <option value="prodaný">Prodaný</option>
                <option value="v přípravě">V přípravě</option>
              </select>
            </div>

            {/* Podlaží */}
            <div className="flex flex-col gap-2 md:w-40">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Podlaží
              </span>
              <select
                className="w-full rounded-full border-0 bg-white px-4 py-2 text-sm font-medium text-neutral-900 outline-none"
                value={floorFilter}
                onChange={(e) => setFloorFilter(e.target.value as string)}
              >
                <option value="vše">Všechna</option>
                {uniqueFloors.map((floor) => (
                  <option key={floor} value={floor}>
                    {floor}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Kartičky – mobil */}
        <div className="space-y-3 md:hidden">
          {filteredApartments.map((apartment) => (
            <div key={apartment.id} className="rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-neutral-900">Byt {apartment.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${getStatusColor(apartment.status)}`} />
                  <span className="text-sm text-neutral-600">{getStatusText(apartment.status)}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-neutral-500">Podlaží</span><p className="font-medium text-neutral-900">{apartment.floor}</p></div>
                <div><span className="text-neutral-500">Dispozice</span><p className="font-medium text-neutral-900">{apartment.layout}</p></div>
                <div><span className="text-neutral-500">Plocha</span><p className="font-medium text-neutral-900">{formatArea(apartment.area)} m²</p></div>
                <div><span className="text-neutral-500">Cena</span><p className="font-medium text-neutral-900">{formatPrice(apartment.price)} Kč</p></div>
              </div>
              <Link
                href={`/vyber-bytu/${apartment.id}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#12351c] px-4 py-3 text-sm font-semibold text-white"
              >
                Karta bytu
              </Link>
            </div>
          ))}
        </div>

        {/* Tabulka – desktop */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Byt</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Podlaží</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Dispozice</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Plocha</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Cena</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Stav</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Karta bytu</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">Parkování a sklady</th>
              </tr>
            </thead>
            <tbody>
              {filteredApartments.map((apartment) => (
                <tr key={apartment.id} className="border-b border-neutral-100 transition-colors hover:bg-neutral-50">
                  <td className="px-4 py-4 text-base font-medium text-neutral-900">{apartment.name}</td>
                  <td className="px-4 py-4 text-base text-neutral-700">{apartment.floor}</td>
                  <td className="px-4 py-4 text-base text-neutral-700">{apartment.layout}</td>
                  <td className="px-4 py-4 text-base text-neutral-700">{formatArea(apartment.area)} m²</td>
                  <td className="px-4 py-4"><span className="text-base text-neutral-700">{formatPrice(apartment.price)} Kč</span></td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${getStatusColor(apartment.status)}`} />
                      <span className="text-base text-neutral-700">{getStatusText(apartment.status)}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <a href="/documents/karta-bytu.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#12351c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a4a2d]">
                      <span>Karta bytu</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </td>
                  <td className="px-4 py-4">
                    <a href="/documents/parkovani-sklad.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#12351c] px-4 py-2 text-sm font-semibold text-[#12351c] transition-colors hover:bg-[#12351c] hover:text-white">
                      <span>Parkování a sklady</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
