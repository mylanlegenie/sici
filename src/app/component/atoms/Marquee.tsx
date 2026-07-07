import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "../../../magicui/marquee";
import { pizzas, salades } from "../../plat";

const reviews = [...pizzas, ...salades].filter((x) => x.bestsellers === true);
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  image,
  category,
  prix,
  body,
}: {
  name: string;
  image?: string;
  category: string;
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
        "relative flex min-h-60 w-56 flex-col items-center rounded-[1.75rem] border border-neutral-200 bg-white px-5 py-5 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ring-black/4 sm:w-64",
      )}
    >
      <div className="flex flex-col items-center">
        <Image
          src={image || "/pizza-facade-1.png"}
          alt={name}
          width={88}
          height={88}
          className="h-22 w-22 rounded-full border border-neutral-200 object-cover shadow-sm"
        />
        <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
          {category}
        </p>
        <figcaption className="mt-2 text-xl font-semibold leading-tight text-neutral-950">
          {name}
        </figcaption>
        <p className="mt-3 rounded-full border border-neutral-200 px-3 py-1 text-sm font-medium text-neutral-700">
          {prix?.junior != null ? `${prix.junior.toFixed(2)} €` : "N/A"}
        </p>
      </div>
      <blockquote className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-600">
        {description}
      </blockquote>
    </figure>
  );
};

export default function MarqueeHome() {
  return (
    <div className="relative flex h-[34rem] w-full max-w-2xl flex-row items-center justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-white/95 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
      <Marquee pauseOnHover vertical className="[--duration:10s] [--gap:1.25rem]">
        {firstRow.map((review) => (
          <ReviewCard
            key={review.name}
            name={review.name}
            image={review.image}
            category={"prices" in review ? "Pizza" : "Salade"}
            prix={"prices" in review ? review.prices : undefined}
            body={"description" in review ? review.description : undefined}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:10s] [--gap:1.25rem]"
      >
        {secondRow.map((review) => (
          <ReviewCard
            key={review.name}
            name={review.name}
            image={review.image}
            category={"prices" in review ? "Pizza" : "Salade"}
            prix={"prices" in review ? review.prices : undefined}
            body={"description" in review ? review.description : undefined}
          />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
    </div>
  );
}
