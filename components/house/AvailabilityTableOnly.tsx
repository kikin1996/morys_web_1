"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Apartment = {
  id: string;
  name: string;
  floor: string;
  layout: string;
  area: number;
  balcony: boolean;
  terrace: boolean;
  frontGarden: boolean;
  price?: number;
  status: "volný" | "prodaný" | "v přípravě";
};

// Mock data - v reálném projektu by toto přišlo z API nebo databáze
const apartments: Apartment[] = [
  {
    id: "1",
    name: "1C",
    floor: "1.NP",
    layout: "2+kk",
    area: 47.4,
    balcony: false,
    terrace: false,
    frontGarden: true,
    status: "prodaný"
  },
  {
    id: "2",
    name: "2C",
    floor: "2.NP",
    layout: "4+kk",
    area: 80,
    balcony: true,
    terrace: false,
    frontGarden: false,
    price: 13434364,
    status: "volný"
  },
  {
    id: "3",
    name: "3F",
    floor: "3.NP",
    layout: "2+kk",
    area: 44.6,
    balcony: true,
    terrace: false,
    frontGarden: false,
    status: "v přípravě"
  },
  {
    id: "4",
    name: "3H",
    floor: "3.NP",
    layout: "1+kk",
    area: 30.6,
    balcony: true,
    terrace: false,
    frontGarden: false,
    status: "v přípravě"
  },
  {
    id: "5",
    name: "ATELIER",
    floor: "1.NP",
    layout: "2+kk",
    area: 57.8,
    balcony: false,
    terrace: false,
    frontGarden: true,
    price: 9420000,
    status: "volný"
  }
];

export default function AvailabilityTableOnly() {
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<Apartment["status"] | "vše">(
    "vše"
  );
  const [outdoorFilter, setOutdoorFilter] = useState<
    "vše" | "balkon" | "terasa" | "predzahrada"
  >("vše");
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

      if (outdoorFilter === "balkon" && !apartment.balcony) return false;
      if (outdoorFilter === "terasa" && !apartment.terrace) return false;
      if (outdoorFilter === "predzahrada" && !apartment.frontGarden)
        return false;

      if (floorFilter !== "vše" && apartment.floor !== floorFilter)
        return false;

      return true;
    });
  }, [selectedLayout, statusFilter, outdoorFilter, floorFilter]);

  return (
    <div>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Filtrační panel */}
        <div className="overflow-hidden rounded-full bg-[#12351c] px-4 py-4 text-white shadow-md sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Dispozice */}
            <div className="flex flex-col gap-2 md:flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Dispozice
              </span>
              <div className="flex flex-wrap gap-2">
                {["1+kk", "2+kk", "3+kk", "4+kk"].map((layout) => {
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

            {/* Venkovní dispozice */}
            <div className="flex flex-col gap-2 md:w-56">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Venkovní dispozice
              </span>
              <select
                className="w-full rounded-full border-0 bg-white px-4 py-2 text-sm font-medium text-neutral-900 outline-none"
                value={outdoorFilter}
                onChange={(e) =>
                  setOutdoorFilter(
                    e.target.value as "vše" | "balkon" | "terasa" | "predzahrada"
                  )
                }
              >
                <option value="vše">Vyberte</option>
                <option value="balkon">Balkon</option>
                <option value="terasa">Terasa</option>
                <option value="predzahrada">Předzahrádka</option>
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

        {/* Tabulka */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">
                  Byt
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">
                  Podlaží
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">
                  Dispozice
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">
                  Plocha
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-neutral-900">
                  Balkon
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-neutral-900">
                  Terasa
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-neutral-900">
                  Předzahrada
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">
                  Cena
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-neutral-900">
                  Stav
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredApartments.map((apartment) => (
                <tr
                  key={apartment.id}
                  className="border-b border-neutral-100 transition-colors hover:bg-neutral-50"
                >
                  <td className="px-4 py-4 text-base font-medium text-neutral-900">
                    {apartment.name}
                  </td>
                  <td className="px-4 py-4 text-base text-neutral-700">
                    {apartment.floor}
                  </td>
                  <td className="px-4 py-4 text-base text-neutral-700">
                    {apartment.layout}
                  </td>
                  <td className="px-4 py-4 text-base text-neutral-700">
                    {formatArea(apartment.area)} m²
                  </td>
                  <td className="px-4 py-4 text-center">
                    {apartment.balcony ? (
                      <svg
                        className="mx-auto h-5 w-5 text-[#12351c]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-neutral-300">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {apartment.terrace ? (
                      <svg
                        className="mx-auto h-5 w-5 text-[#12351c]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-neutral-300">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {apartment.frontGarden ? (
                      <svg
                        className="mx-auto h-5 w-5 text-[#12351c]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-neutral-300">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {apartment.price ? (
                      <span className="text-base text-neutral-700">
                        {formatPrice(apartment.price)} Kč
                      </span>
                    ) : (
                      <Link
                        href={`/vyber-bytu/${apartment.id}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#12351c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a4a2d]"
                      >
                        <span>Detail bytu</span>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${getStatusColor(
                          apartment.status
                        )}`}
                      />
                      <span className="text-base text-neutral-700">
                        {getStatusText(apartment.status)}
                      </span>
                    </div>
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
