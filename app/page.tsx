import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { ContactSection } from "@/components/ContactSection";
import { HomeHighlights } from "@/components/HomeHighlights";
import { HomePhotoStrip } from "@/components/HomePhotoStrip";
import { HomeStats } from "@/components/HomeStats";
import { UhrinevesSection } from "@/components/UhrinevesSection";
import { HomeImportantSection } from "@/components/HomeImportantSection";
import { HomeChooseNowSection } from "@/components/HomeChooseNowSection";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Když bydlení znamená"
        highlightLine="životní styl"
        subtitle="Rezidenční projekt Na Blatnici ve Frýdku-Místku – moderní bydlení v klidné lokalitě s výhledem na kostelní věž a zeleň, připravené pro vaše vlastní příběhy."
        alignRight
        primaryCta={{ href: "/cenik", label: "Vyberte si svůj nový domov" }}
      />

      <HomeStats />

      <UhrinevesSection />

      <HomeHighlights />

      <HomeChooseNowSection />

      <HomePhotoStrip />

      <HomeImportantSection />

      <CtaStrip
        primary={{ href: "/cenik", label: "Dispozice" }}
        secondary={{ href: "/standardy", label: "Standardy" }}
      />

      <ContactSection />
    </>
  );
}



