import type { Metadata } from "next";
import GalerieClient from "@/components/GalerieClient";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Fotogalerie projektu Na Blatnici ve Frýdku-Místku. Prohlédněte si exteriér, vizualizace interiéru a okolí nových bytů 2+kk až 4+kk.",
  alternates: { canonical: "https://www.nablatnici.cz/galerie" },
  openGraph: {
    title: "Galerie | Na Blatnici",
    description: "Fotogalerie projektu Na Blatnici – exteriér, vizualizace interiéru a okolí.",
    url: "https://www.nablatnici.cz/galerie",
    images: [{ url: "/fotky/fotografie-exterier/prechod.webp", width: 1200, height: 630, alt: "Projekt Na Blatnici – galerie" }],
  },
};

export default function GaleriePage() {
  return <GalerieClient />;
}
