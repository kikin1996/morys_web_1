"use client";

import Link from "next/link";
import StandardsSplitSection from "@/components/standards/StandardsSplitSection";

const STANDARDS = [
  { number: 1, text: "Rekuperace" },
  { number: 2, text: "Izolační trojskla" },
  { number: 3, text: "Předokenní žaluzie" },
  { number: 4, text: "Keramická dlažba" },
  { number: 5, text: "Dřevěná třívrstvá podlaha" },
  { number: 6, text: "Podlahové vytápění" },
  { number: 7, text: "Smart Home" },
  { number: 8, text: "Videotelefon" },
  { number: 9, text: "Klimatizace ve 4. NP" }
];

// Pozice číslovaných kruhů na obrázku (v procentech)
const NUMBERED_CIRCLES = [
  { number: 1, top: "25%", left: "75%" }, // Lustr
  { number: 2, top: "40%", left: "70%" }, // Jídelní stůl
  { number: 3, top: "50%", left: "85%" }, // Balkonové zábradlí
  { number: 4, top: "60%", left: "90%" }, // Venkovní prostor
  { number: 5, top: "45%", left: "95%" }, // Vestavěná skříň
  { number: 6, top: "50%", left: "30%" }, // Obývací pokoj
  { number: 7, top: "35%", left: "25%" }, // Nástěnné světlo
  { number: 8, top: "45%", left: "50%" }, // Dřevěná přepážka
  { number: 9, top: "20%", left: "35%" } // Stropní světlo
];

export default function StandardyPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-12 pt-20">
      {/* Hero section s obrázkem a číslovanými kruhy - ponecháno z původní verze */}
      <section className="relative w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto h-[80vh] min-h-[600px] max-w-7xl overflow-hidden rounded-[32px]">
          {/* Background image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')"
            }}
          />

          {/* Overlay s číslovanými kruhy */}
          <div className="absolute inset-0">
            {NUMBERED_CIRCLES.map((circle) => (
              <div
                key={circle.number}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-neutral-900 shadow-lg transition-all hover:scale-110 hover:bg-white"
                style={{
                  top: circle.top,
                  left: circle.left,
                  transform: "translate(-50%, -50%)"
                }}
              >
                {circle.number}
              </div>
            ))}
          </div>

          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-neutral-900 sm:text-6xl md:text-7xl">
              Standardy
            </h1>
          </div>
        </div>

        {/* Subtitles pod obrázkem */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 divide-x divide-neutral-200 bg-white">
            <div className="py-6 text-center">
              <h2 className="text-xl font-semibold text-neutral-900">
                Standardy interiéru
              </h2>
            </div>
            <div className="py-6 text-center">
              <h2 className="text-xl font-semibold text-neutral-900">
                Standardy exteriéru
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Dark green bar s číslovaným seznamem */}
      <section className="bg-[#12351c] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((standard) => (
              <div
                key={standard.number}
                className="flex items-center gap-4 text-white"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                  {standard.number}
                </div>
                <p className="text-lg">{standard.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zbytek stránky z původního projektu */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Jeden hlavní wrapper - jedna karta pro celou stránku */}
        <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="px-6 py-10 md:px-10">
            {/* Editorial Stack - všechny sekce s menšími mezerami */}
            <div className="space-y-6 md:space-y-8">
              {/* Sekce 1: Konstrukce a zdivo */}
              <div className="border-t border-slate-200/60 pt-8">
                <StandardsSplitSection
                  pillLabel="Kvalita"
                  title="Konstrukce a zdivo"
                  description="Projekt Luční háj využívá osvědčené stavební technologie a kvalitní materiály, které zajišťují dlouhodobou životnost a vynikající tepelné vlastnosti."
                  items={[
                    "Keramické zdivo Porotherm s vysokou tepelnou izolací",
                    "Zateplení kontaktním systémem tloušťky 200 mm",
                    "Střešní konstrukce s tepelnou izolací 300 mm",
                    "Hydroizolace a parozábrana podle norem",
                    "Základy z betonu C25/30 s hydroizolací"
                  ]}
                  image="/images/standardy-konstrukce.jpg"
                  imageAlt="Konstrukce a zdivo"
                  reverse={false}
                />
              </div>

              {/* Sekce 2: Vytápění a technologie */}
              <div className="border-t border-slate-200/60 pt-8">
                <StandardsSplitSection
                  pillLabel="Technologie"
                  title="Vytápění a energetika"
                  description="Moderní energeticky úsporné řešení zajišťuje komfortní bydlení s nízkými provozními náklady a šetrným přístupem k životnímu prostředí."
                  items={[
                    "Tepelné čerpadlo vzduch-voda pro vytápění a ohřev TUV",
                    "Podlahové topení v celém objektu s individuální regulací",
                    "Příprava na klimatizaci (chladící stropy)",
                    "Fotovoltaické panely na střeše (volitelné)",
                    "Rekuperační jednotka s účinností nad 85 %"
                  ]}
                  image="/images/standardy-vytapeni.jpg"
                  imageAlt="Vytápění a technologie"
                  reverse={true}
                />
              </div>

              {/* Sekce 3: Akustika a izolace */}
              <div className="border-t border-slate-200/60 pt-8">
                <StandardsSplitSection
                  pillLabel="Komfort"
                  title="Akustika a izolace"
                  description="Důraz na akustickou izolaci mezi jednotkami a vnějšími vlivy zajišťuje klidné a soukromé bydlení pro všechny obyvatele."
                  items={[
                    "Akustická izolace mezi byty minimálně 55 dB",
                    "Zvukově izolační podlahy s plovoucí podlahovou konstrukcí",
                    "Trojskla v oknech s akustickými vlastnostmi",
                    "Izolace proti hluku z exteriéru",
                    "Tlumené dveře mezi místnostmi"
                  ]}
                  image="/images/standardy-akustika.jpg"
                  imageAlt="Akustika a izolace"
                  reverse={false}
                />
              </div>

              {/* Sekce 4: Okna a stínění */}
              <div className="border-t border-slate-200/60 pt-8">
                <StandardsSplitSection
                  pillLabel="Dokončení"
                  title="Okna a stínění"
                  description="Kvalitní okenní systémy s moderním stíněním zajišťují optimální osvětlení, tepelnou izolaci a ochranu před sluncem."
                  items={[
                    "Plastová okna s trojskly (Uw ≤ 0,8 W/m²K)",
                    "Venkovní žaluzie s elektrickým ovládáním",
                    "Vnitřní rolety v ložnicích",
                    "Bezpečnostní kování a zámky",
                    "Okna s možností mikroventilace"
                  ]}
                  image="/images/standardy-okna.jpg"
                  imageAlt="Okna a stínění"
                  reverse={true}
                />
              </div>

              {/* Sekce 5: Koupelny a podlahy */}
              <div className="border-t border-slate-200/60 pt-8">
                <StandardsSplitSection
                  pillLabel="Interiér"
                  title="Koupelny a podlahy"
                  description="Kvalitní obklady a podlahové krytiny v moderním designu vytvářejí příjemné a praktické prostředí pro každodenní život."
                  items={[
                    "Obklady v koupelnách formátu 60x120 cm",
                    "Dřevěné podlahy v obytných místnostech (parkety nebo laminát)",
                    "Vinylové podlahy v kuchyni a koupelnách",
                    "Kvalitní sanitární keramika a baterie",
                    "Podlahové topení pod všemi podlahovými krytinami"
                  ]}
                  image="/images/standardy-interier.jpg"
                  imageAlt="Koupelny a podlahy"
                  reverse={false}
                />
              </div>

              {/* Sekce 6: Elektroinstalace */}
              <div className="border-t border-slate-200/60 pt-8">
                <StandardsSplitSection
                  pillLabel="Elektro"
                  title="Elektroinstalace a připojení"
                  description="Moderní elektroinstalace s přípravami na chytré technologie a vysokorychlostní internet zajišťuje připravenost na budoucnost."
                  items={[
                    "Datové zásuvky v každém pokoji (CAT 6)",
                    "Příprava na chytré ovládání osvětlení a žaluzií",
                    "Zásuvky USB-C v obývacím pokoji a ložnici",
                    "Elektrické přípojky pro pračku, sušičku a myčku",
                    "Příprava na nabíjecí stanici pro elektromobil (volitelné)"
                  ]}
                  image="/images/standardy-elektro.jpg"
                  imageAlt="Elektroinstalace"
                  reverse={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
