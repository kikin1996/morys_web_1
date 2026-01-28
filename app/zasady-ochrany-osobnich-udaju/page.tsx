export default function PrivacyPolicyPage() {
  return (
    <div className="mt-16 bg-white py-12 sm:mt-20 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Zásady ochrany osobních údajů
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Tato stránka slouží jako informační dokument o tom, jak budou
          zpracovávány vaše osobní údaje v souvislosti s projektem Na
          Blatnici. Text zásad ochrany osobních údajů bude doplněn na základě
          finální právní úpravy a požadavků správce osobních údajů.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Pro podrobnější informace o zpracování osobních údajů se prosím
          obraťte na KURKO reality s.r.o., e‑mail{" "}
          <a
            href="mailto:info@kurko.cz"
            className="text-[#12351c] underline hover:no-underline"
          >
            info@kurko.cz
          </a>
          .
        </p>
      </div>
    </div>
  );
}

