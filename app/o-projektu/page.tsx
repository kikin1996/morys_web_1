import { PageHero } from "@/components/PageHero";
import { TwoColumnSection } from "@/components/TwoColumnSection";
import { ContactSection } from "@/components/ContactSection";

export default function OProjektuPage() {
  return (
    <>
      <PageHero
        title="O projektu"
        description="Stránka shrnuje koncept rezidenčního projektu, hlavní benefity lokality a životního stylu. Zde replikujeme pouze strukturu a kompozici."
      />
      <TwoColumnSection
        title="Koncept bydlení"
        text="Originál využívá několik obsahových bloků s obrázky, ikonami a bullet pointy. V naší cloně necháváme obsah obecný, ale zachováváme dvousloupcové bloky, call-to-action a vertikální rytmus."
      />
      <ContactSection />
    </>
  );
}


