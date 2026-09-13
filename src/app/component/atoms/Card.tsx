import Image from "next/image";
import Link from "next/link";

type SizePrices = {
  junior: number | null;
  medium: number | null;
  grand: number | null;
};
type PriceOption = {
  label: string;
  price: number;
};
import toSlug from "../../slug";

export default function Card({
  name,
  ingredients,
  description,
  options,
  price,
  platType,
  sizePrices,
}: {
  name: string;
  ingredients?: string[];
  description?: string;
  options?: PriceOption[];
  price?: number | null;
  sizePrices?: SizePrices;
  platType: string;
}) {
  const formatPrice = (value: number | null | undefined) =>
    value == null ? "-" : `${value.toFixed(2)}€`;
  const hasMultiplePrices = Boolean(
    sizePrices || (options && options.length > 0),
  );
  const cardDescription =
    ingredients && ingredients.length > 0
      ? ingredients.join(", ")
      : description;

  return (
    <Link href={`/menu/${platType}/${toSlug(name)}`}>
      <article className="product-card cursor-pointer group mt-6 flex min-h-96 sm:w-full w-[90%] sm:mx-0 mx-auto flex-col items-center justify-between rounded-2xl border border-zinc-200 bg-white px-3 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5 sm:py-6">
        <div
          className={`w-full ${hasMultiplePrices ? "" : "flex flex-1 flex-col"}`}
        >
          <Image
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23f5f5f5'/%3E%3Cstop offset='1' stop-color='%23e5e7eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='110' cy='110' r='108' fill='url(%23g)'/%3E%3C/svg%3E"
            alt={name}
            width={180}
            height={180}
            className="product-card-image mx-auto cursor-pointer rounded-full border border-zinc-200 object-cover p-1 transition duration-300 group-hover:scale-105"
          />

          <h3 className="mb-2 line-clamp-2 text-lg font-semibold tracking-tight text-zinc-900">
            {name}
          </h3>
          {cardDescription && (
            <p
              className={`w-full text-xs leading-5 text-zinc-600 sm:text-sm ${hasMultiplePrices ? "mb-4 truncate" : "my-auto line-clamp-2 py-3"}`}
              title={cardDescription}
            >
              {cardDescription}
            </p>
          )}
        </div>

        {options && options.length > 0 ? (
          <div className="w-full space-y-1 rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
            {options.map((option) => (
              <div
                key={option.label}
                className="flex items-center justify-between gap-3"
              >
                <span>{option.label}</span>
                <span className="font-semibold text-red-600">
                  {formatPrice(option.price)}
                </span>
              </div>
            ))}
          </div>
        ) : sizePrices ? (
          <div className="w-full rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
            <div className="flex items-center justify-between">
              <span>Junior</span>
              <span className="font-semibold text-red-600">
                {formatPrice(sizePrices.junior)}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span>Medium</span>
              <span className="font-semibold text-red-600">
                {formatPrice(sizePrices.medium)}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span>Grande</span>
              <span className="font-semibold text-red-600">
                {formatPrice(sizePrices.grand)}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-base font-bold text-red-600">
            {formatPrice(price)}
          </p>
        )}
      </article>
    </Link>
  );
}
