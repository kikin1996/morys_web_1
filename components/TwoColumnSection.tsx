type TwoColumnSectionProps = {
  id?: string;
  title: string;
  text: string;
};

export function TwoColumnSection({ id, title, text }: TwoColumnSectionProps) {
  return (
    <section id={id} className="border-b border-neutral-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:flex lg:items-start lg:gap-16 lg:px-8 lg:py-16">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            {text}
          </p>
        </div>
        <div className="mt-8 h-40 flex-1 rounded-2xl bg-neutral-100 sm:h-56 lg:mt-0" />
      </div>
    </section>
  );
}


