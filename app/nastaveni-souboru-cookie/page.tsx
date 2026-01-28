export default function CookieSettingsPage() {
  return (
    <div className="mt-16 bg-white py-12 sm:mt-20 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Nastavení souborů cookie
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Tato stránka bude sloužit pro detailní informace o používání
          souborů cookie na webu Na Blatnici a pro nastavení preferencí
          jednotlivých typů cookies (nezbytné, analytické, marketingové
          apod.).
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Finální znění cookie lišty a detailního nastavení bude doplněno
          podle platné legislativy a pokynů správce webu. V případě dotazů
          se prosím obraťte na KURKO reality s.r.o., e‑mail{" "}
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

