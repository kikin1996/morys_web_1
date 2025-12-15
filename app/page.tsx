import { Hero } from "@/components/Hero";
import { TwoColumnSection } from "@/components/TwoColumnSection";
import { CtaStrip } from "@/components/CtaStrip";
import { ContactSection } from "@/components/ContactSection";
import { HomeHighlights } from "@/components/HomeHighlights";
import { HomePhotoStrip } from "@/components/HomePhotoStrip";
import { HomeStats } from "@/components/HomeStats";
import { UhrinevesSection } from "@/components/UhrinevesSection";
import { HomeImportantSection } from "@/components/HomeImportantSection";
import { HomeChooseNowSection } from "@/components/HomeChooseNowSection";
import { HomeBytProVasSection } from "@/components/HomeBytProVasSection";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Když bydlení znamená"
        highlightLine="životní styl"
        subtitle="Technická kopie marketingového webu Ecovilla – stejné routy a rozložení sekcí, připravené pro napojení na reálná data a vlastní fotografie."
        alignRight
        primaryCta={{ href: "/cenik", label: "Vyberte si svůj nový domov" }}
      />

      <HomeStats />

      <UhrinevesSection />

      <HomeHighlights />

      <TwoColumnSection
        id="about"
        title="Proč právě Ecovilla"
        text="Originální homepage zdůrazňuje klidnou lokalitu, propojení s přírodou a promyšlené dispozice bytů. Tuto strukturu zrcadlíme – text, vizuální blok a jasné CTA – aby bylo snadné nahradit demo obsah produkčními texty."
      />

      <HomePhotoStrip />

      <HomeImportantSection />

      <HomeChooseNowSection />

      <HomeBytProVasSection />

      <CtaStrip
        primary={{ href: "/cenik", label: "Start exploring" }}
        secondary={{ href: "/standardy", label: "Standardy" }}
      />

      <ContactSection />
    </>
  );
}



