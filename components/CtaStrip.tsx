import Link from "next/link";

type CtaStripProps = {
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaStrip({ primary, secondary }: CtaStripProps) {
  return (
    <section className="bg-[#12351c] text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Další krok
          </p>
          <p className="mt-2 text-lg font-semibold">
            Prozkoumejte dispoziční řešení a standardy vybavení.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={primary.href}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-neutral-100"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}


