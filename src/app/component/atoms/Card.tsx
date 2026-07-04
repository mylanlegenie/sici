import Image from "next/image";
import { useRouter } from "next/navigation";

type SizePrices = {
  junior: number | null;
  medium: number | null;
  grand: number | null;
};

export default function Card({
  name,
  price,
  sizePrices,
  platType,
}: {
  name: string;
  price?: number | null;
  sizePrices?: SizePrices;
  platType: string;
}) {
  const router = useRouter();
  const formatPrice = (value: number | null | undefined) =>
    value == null ? "-" : `${value.toFixed(2)}€`;

  return (
    <article className="group mt-6 flex min-h-84 w-full flex-col items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="w-full">
        <button
          type="button"
          className="mx-auto mb-5 block rounded-full"
          onClick={() => {
            router.push(
              "?section=menu&plat=" +
                platType.toLowerCase() +
                "&name=" +
                name.toLowerCase(),
            );
          }}
          aria-label={`Voir le détail de ${name}`}
        >
          <Image
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23f5f5f5'/%3E%3Cstop offset='1' stop-color='%23e5e7eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='110' cy='110' r='108' fill='url(%23g)'/%3E%3C/svg%3E"
            alt={name}
            width={180}
            height={180}
            className="mx-auto rounded-full border border-zinc-200 object-cover p-1 transition duration-300 group-hover:scale-105"
          />
        </button>

        <h3 className="mb-2 line-clamp-2 text-lg font-semibold tracking-tight text-zinc-900">
          {name}
        </h3>
      </div>

      {sizePrices ? (
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
            <span>Grand</span>
            <span className="font-semibold text-red-600">
              {formatPrice(sizePrices.grand)}
            </span>
          </div>
        </div>
      ) : (
        <p className="text-base font-bold text-red-600">{formatPrice(price)}</p>
      )}
    </article>
  );
}
