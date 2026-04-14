import type { Metadata } from "next";
import HousePickerLayout from "@/components/house/HousePickerLayout";

export const metadata: Metadata = {
  title: "Výběr bytu",
  description:
    "Vyberte si byt v projektu Na Blatnici ve Frýdku-Místku. Byty 2+kk až 4+kk v 1.–4. patře s přehledným interaktivním půdorysem a detailními informacemi.",
  alternates: { canonical: "https://www.nablatnici.cz/vyber-bytu" },
  openGraph: {
    title: "Výběr bytu | Na Blatnici",
    description: "Vyberte si byt v projektu Na Blatnici ve Frýdku-Místku. Byty 2+kk až 4+kk s interaktivním půdorysem.",
    url: "https://www.nablatnici.cz/vyber-bytu",
    images: [{ url: "/fotky/fotografie-exterier/prechod.webp", width: 1200, height: 630, alt: "Výběr bytu – Na Blatnici" }],
  },
};

export default function VyberBytuPage() {
  return <HousePickerLayout />;
}
