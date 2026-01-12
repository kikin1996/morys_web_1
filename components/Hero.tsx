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
        className="flex min-h-[120vh] w-full flex-col overflow-hidden rounded-[32px] bg-neutral-900 text-white shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-20 sm:px-10 sm:pt-24 lg:px-14 lg:pt-28">
          <div
            className={`max-w-xl space-y-6 ${
              alignRight ? "ml-auto text-right" : ""
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


