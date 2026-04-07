import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardy",
  description:
    "Standardy projektu Na Blatnici – rekuperace, izolační trojskla, předokenní žaluzie, podlahové vytápění, Smart Home, dřevěná podlaha a další prémiové vybavení.",
  alternates: { canonical: "https://www.nablatnici.cz/standardy" }
};

export default function StandardyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
