import { ContactSection } from "@/components/ContactSection";
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


