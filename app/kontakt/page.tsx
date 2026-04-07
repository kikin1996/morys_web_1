import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás ohledně projektu Na Blatnici ve Frýdku-Místku. Jsme vám k dispozici pro zodpovězení vašich dotazů.",
  alternates: { canonical: "https://www.nablatnici.cz/kontakt" }
};
import { ImportantAddressesSection } from "@/components/ImportantAddressesSection";
import { GoogleMapSection } from "@/components/GoogleMapSection";

export default function KontaktPage() {
  return (
    <>
      <div className="mt-16 sm:mt-20">
        <ContactSection />
        <ImportantAddressesSection />
        <GoogleMapSection />
      </div>
    </>
  );
}


