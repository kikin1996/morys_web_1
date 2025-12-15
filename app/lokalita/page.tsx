import { PageHero } from "@/components/PageHero";

const TABS = [
  {
    id: "schools",
    label: "Školy a školky",
    description:
      "Blok popisující vzdělávací instituce v docházkové vzdálenosti. Zde ho nahrazujeme generickým obsahem, ale zachováváme tab-like strukturu."
  },
  {
    id: "leisure",
    label: "Volnočasové aktivity",
    description:
      "Originál uvádí kroužky, sportoviště a komunitní aktivity. V implementaci necháváme prostor pro budoucí dynamický obsah."
  },
  {
    id: "services",
    label: "Služby a občanská vybavenost",
    description:
      "Zdravotnická zařízení, obchody a kultura v okolí projektu shrnuté v samostatném panelu."
  }
];

export default function LokalitaPage() {
  return (
    <>
      <PageHero
        title="Lokalita"
        description="Stránka využívá více obsahových bloků a sekci s taby popisujícími klíčové výhody lokality."
      />
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Výhody lokality
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                V původním řešení lze mezi sekcemi přepínat pomocí tabů. V naší
                cloně ukazujeme statickou variantu, která může být snadno
                převedena na interaktivní komponentu s využitím klientského
                stavu.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-50"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="space-y-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-5 text-sm text-neutral-700">
                {TABS.map((tab) => (
                  <div key={tab.id}>
                    <p className="font-semibold">{tab.label}</p>
                    <p className="mt-1 text-neutral-600">{tab.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


