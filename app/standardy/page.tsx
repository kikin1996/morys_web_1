import { PageHero } from "@/components/PageHero";
import { TwoColumnSection } from "@/components/TwoColumnSection";

const GROUPS = [
  {
    title: "Interiér",
    items: ["Podlahy", "Dveře", "Sanita", "Obklady a dlažby"]
  },
  {
    title: "Technologie",
    items: ["Vytápění", "Rekuperace", "Chytrá domácnost", "Bezpečnost"]
  },
  {
    title: "Exteriér a společné prostory",
    items: ["Fasáda", "Okna", "Společné prostory", "Parkování"]
  }
];

export default function StandardyPage() {
  return (
    <>
      <PageHero
        title="Standardy bytů"
        description="Originál členěně popisuje standardy v několika sekcích a sloupcích. Zde vytváříme rozšiřitelný blok s kartami a dvousloupcovou strukturou."
      />
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5"
              >
                <h2 className="text-sm font-semibold tracking-tight text-neutral-900">
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TwoColumnSection
        title="Detailní standardy na míru projektu"
        text="Ve výrobním nasazení by tato sekce byla napojena na CMS nebo datový soubor se specifikací jednotlivých bytů a standardů. Architektura Next.js aplikace je připravena na doplnění dynamických dat."
      />
    </>
  );
}


