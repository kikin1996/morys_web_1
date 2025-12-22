"use client";

import Link from "next/link";

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

  return (
    <div>
      <div className="mx-auto max-w-7xl">
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
              {apartments.map((apartment) => (
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
