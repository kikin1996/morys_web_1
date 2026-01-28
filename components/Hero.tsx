import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  highlightLine?: string;
  alignRight?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  highlightLine,
  alignRight
}: HeroProps) {
  return (
    <section className="bg-neutral-50 pb-6 pt-24 sm:pt-28 -mt-20 sm:-mt-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-4">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-neutral-900 text-white shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1)), url('/fotky/fotografie-exterier/ex%20(3).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left center"
        }}
      >
        {/* Kostelní věž před textem a tlačítkem – zarovnaná přes původní fotku */}
        <div className="pointer-events-none absolute inset-0 z-50 show-spire-xl">
          <img
            src="/fotky/fotografie-exterier/vez2.png"
            alt="Kostelní věž"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-20 flex min-h-[70vh] flex-col px-6 pb-16 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <div
            className={`max-w-xl space-y-6 ${
              alignRight ? "ml-auto text-right lg:mr-24" : ""
            }`}
          >
            {eyebrow && !alignRight && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">{title}</span>
              {highlightLine && (
                <span className="block text-[#f4f0e6]">{highlightLine}</span>
              )}
            </h1>
          {subtitle && (
            <p className="text-sm leading-relaxed text-neutral-100 sm:text-base">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={`flex flex-wrap items-center gap-3 pt-2 ${
                alignRight ? "justify-end" : ""
              }`}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-3 rounded-full bg-[#f4f0e6] px-7 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-[#ece3d3]"
                >
                  <span>{primaryCta.label}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#12351c] text-xs text-white">
                    ➜
                  </span>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}


