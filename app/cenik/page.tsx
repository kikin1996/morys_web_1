import { PageHero } from "@/components/PageHero";

type FlatRow = {
  id: string;
  layout: string;
  floor: string;
  size: string;
  terrace?: string;
  price?: string;
  status: "volný" | "rezervovaný" | "prodáno";
};

const MOCK_FLATS: FlatRow[] = [
  {
    id: "A1.1",
    layout: "2+kk",
    floor: "1.NP",
    size: "58 m²",
    terrace: "8 m²",
    price: "8 950 000 Kč",
    status: "volný"
  },
  {
    id: "A2.4",
    layout: "3+kk",
    floor: "2.NP",
    size: "82 m²",
    terrace: "12 m²",
    price: "12 400 000 Kč",
    status: "rezervovaný"
  },
  {
    id: "B3.7",
    layout: "4+kk",
    floor: "3.NP",
    size: "105 m²",
    terrace: "20 m²",
    price: undefined,
    status: "prodáno"
  }
];

export default function CenikPage() {
  return (
    <div className="pb-16">
      <PageHero
        title="Ceník bytů"
        description="Původní stránka obsahuje interaktivní tabulku jednotek napojenou na backend. Zde ukazujeme statickou, ale rozšiřitelnou tabulku s podobnou strukturou."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-neutral-100">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3 text-left">Jednotka</th>
                <th className="px-4 py-3 text-left">Dispozice</th>
                <th className="px-4 py-3 text-left">Podlaží</th>
                <th className="px-4 py-3 text-left">Plocha</th>
                <th className="px-4 py-3 text-left">Terasa / balkon</th>
                <th className="px-4 py-3 text-left">Cena</th>
                <th className="px-4 py-3 text-left">Stav</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_FLATS.map((flat) => (
                <tr
                  key={flat.id}
                  className="border-t border-neutral-100 hover:bg-neutral-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-neutral-900">
                    {flat.id}
                  </td>
                  <td className="px-4 py-3">{flat.layout}</td>
                  <td className="px-4 py-3">{flat.floor}</td>
                  <td className="px-4 py-3">{flat.size}</td>
                  <td className="px-4 py-3">{flat.terrace ?? "—"}</td>
                  <td className="px-4 py-3">{flat.price ?? "Na dotaz"}</td>
                  <td className="px-4 py-3">
                    <StatusPill status={flat.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatusPill({ status }: { status: FlatRow["status"] }) {
  const map: Record<
    FlatRow["status"],
    { label: string; className: string }
  > = {
    volný: {
      label: "Volný",
      className: "bg-emerald-50 text-emerald-700"
    },
    rezervovaný: {
      label: "Rezervovaný",
      className: "bg-amber-50 text-amber-700"
    },
    prodáno: {
      label: "Prodáno",
      className: "bg-neutral-100 text-neutral-500"
    }
  };

  const cfg = map[status];

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${cfg.className}`}
    >
      {cfg.label}
    </span>
  );
}


