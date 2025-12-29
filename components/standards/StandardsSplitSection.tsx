type StandardsSplitSectionProps = {
  pillLabel?: string;
  title: string;
  description?: string;
  items?: string[];
  image: string;
  imageAlt?: string;
  reverse?: boolean;
};

export default function StandardsSplitSection({
  pillLabel,
  title,
  description,
  items = [],
  image,
  imageAlt = "",
  reverse = false
}: StandardsSplitSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-10 lg:grid-cols-2 ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Text Content */}
      <div className={reverse ? "lg:col-start-2 lg:col-end-3" : ""}>
        {/* Pill Label */}
        {pillLabel && (
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full border border-slate-200/70 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {pillLabel}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="mb-4 text-2xl font-semibold text-slate-900 md:text-3xl">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="mb-6 leading-relaxed text-slate-600">{description}</p>
        )}

        {/* Items List */}
        {items && items.length > 0 && (
          <div>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start leading-relaxed text-slate-600"
                >
                  <span className="mr-3 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Image */}
      <div
        className={
          reverse
            ? "lg:col-start-1 lg:col-end-2 lg:row-start-1"
            : ""
        }
      >
        <div className="h-[220px] overflow-hidden rounded-2xl border border-slate-200/70 md:h-[280px]">
          <img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const nextSibling = target.nextElementSibling as HTMLElement;
              if (nextSibling) {
                nextSibling.style.display = "flex";
              }
            }}
          />
          {/* Gradient Placeholder */}
          <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <p className="text-sm text-slate-400">{imageAlt || title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


