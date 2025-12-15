type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-neutral-100 bg-neutral-50/60">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}


