import { PageHero } from "@/components/PageHero";

const POSTS = [
  {
    title: "Zahájení prodeje bytů",
    date: "Q1 2025",
    summary:
      "Na originálním webu by zde byly konkrétní termíny a novinky k projektu. Ukazujeme jen strukturu pro budoucí CMS napojení."
  },
  {
    title: "Postup výstavby",
    date: "Průběžně",
    summary:
      "Aktuality často zobrazují stav výstavby a důležité milníky. Stránka je připravena pro dynamické generování karet."
  }
];

export default function AktualityPage() {
  return (
    <>
      <PageHero
        title="Aktuality"
        description="Struktura jednoduchého blog/novinkového přehledu pro projekt Ecovilla."
      />
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="space-y-4">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {post.date}
                </p>
                <h2 className="mt-2 text-base font-semibold text-neutral-900 sm:text-lg">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


