import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotogalerie",
  description:
    "Fotogalerie projektu Na Blatnici ve Frýdku-Místku. Prohlédněte si fotografie exteriéru, vizualizace interiéru a okolí projektu.",
  alternates: { canonical: "https://www.nablatnici.cz/galerie" }
};

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
