import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "../../../magicui/marquee";
import { pizzas, salades } from "../../plat";
import Link from "next/link";
import { toSlug } from "@/lib/slug";
const reviews = [...pizzas, ...salades].filter((x) => x.bestsellers === true);
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  image,
  type,
  category,
  prix,
  body,
}: {
  name: string;
  image?: string;
  category: string;
  type: string;
  prix?: {
    junior: number | null;
    senior: number | null;
    mega: number | null;
  };
  body?: string;
}) => {
  const description = body?.trim() || `${category} signature de la maison`;

  return (
    <figure
      className={cn(
        "relative flex min-h-44 max-w-50 cursor-pointer flex-col items-center rounded-xl border border-neutral-200 bg-white px-2 py-3 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ring-black/4 sm:w-36 md:min-h-60 md:w-64 md:max-w-64 md:rounded-[1.75rem] md:px-5 md:py-5",
      )}
    >
      <Link
        href={`/menu/${type}/${toSlug(name)}`}
        className="flex flex-col items-center"
        prefetch={false}
      >
        <div className="flex flex-col items-center">
          <Image
            src={image || "/pizza-slide-1.webp"}
            alt={name}
            width={88}
            height={88}
            className="h-14 w-14 rounded-full border border-neutral-200 object-cover shadow-sm md:h-22 md:w-22"
          />
          <p className="mt-2 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-neutral-500 md:mt-4 md:text-[0.65rem] md:tracking-[0.22em]">
            {category}
          </p>
          <figcaption className="mt-1 text-sm font-semibold leading-tight text-neutral-950 md:mt-2 md:text-xl">
            {name}
          </figcaption>
          <p className="mt-2 rounded-full border border-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700 md:mt-3 md:px-3 md:py-1 md:text-sm">
            {prix?.junior != null ? `${prix.junior.toFixed(2)} €` : "N/A"}
          </p>
        </div>
        <blockquote className="mt-2 line-clamp-2 text-[0.65rem] leading-4 text-neutral-600 md:mt-4 md:line-clamp-3 md:text-sm md:leading-6">
          {description}
        </blockquote>
      </Link>
    </figure>
  );
};

export default function MarqueeHome() {
  return (
    <div className="relative flex h-96 w-full max-w-2xl flex-row items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/95 p-1 shadow-[0_24px_80px_rgba(15,23,42,0.18)] ring-1 ring-black/5 md:h-136 md:rounded-4xl md:p-3">
      <Marquee
        pauseOnHover
        vertical
        repeat={2}
        className="p-1 [--duration:10s] [--gap:0.75rem] md:p-2 md:[--gap:1.25rem]"
      >
        {firstRow.map((review) => (
          <ReviewCard
            type={review.type}
            key={review.name}
            name={review.name}
            image={review.image}
            category={review.type}
            prix={"prices" in review ? review.prices : undefined}
            body={"description" in review ? review.description : undefined}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        repeat={2}
        className="p-1 [--duration:10s] [--gap:0.75rem] md:p-2 md:[--gap:1.25rem]"
      >
        {secondRow.map((review) => (
          <ReviewCard
            type={review.type}
            key={review.name}
            name={review.name}
            image={review.image}
            category={"prices" in review ? "Pizza" : "Salade"}
            prix={"prices" in review ? review.prices : undefined}
            body={"description" in review ? review.description : undefined}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-white"></div>
    </div>
  );
}
