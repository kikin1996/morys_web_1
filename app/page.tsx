import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Na Blatnici – Nové byty ve Frýdku-Místku",
  description:
    "Rezidenční projekt Na Blatnici ve Frýdku-Místku. 14 bytů 2+kk až 4+kk s terasami, podlahovým vytápěním, rekuperací a Smart Home. Prohlédněte si nabídku.",
  alternates: { canonical: "https://www.nablatnici.cz" }
};
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
        primaryCta={{ href: "/vyber-bytu", label: "Vyberte si svůj nový domov" }}
      />

      <HomeStats />

      <UhrinevesSection />

      <HomeHighlights />

      <HomeChooseNowSection />

      <HomePhotoStrip />

      <HomeImportantSection />

      <CtaStrip
        primary={{ href: "/vyber-bytu", label: "Dispozice" }}
        secondary={{ href: "/standardy", label: "Standardy" }}
      />

      <ContactSection />
    </>
  );
}



