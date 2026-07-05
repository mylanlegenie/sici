import { cn } from "@/lib/utils";
import { Marquee } from "../../../magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-52 cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:w-56",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900">
          {name.slice(0, 1)}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-neutral-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-neutral-500 dark:text-white/50">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-6 text-neutral-700 dark:text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeHome() {
  return (
    <div className="relative flex h-120 w-lg flex-row items-center justify-center overflow-hidden rounded-3xl border-2 border-neutral-900 bg-white/95 p-1.5 shadow-lg shadow-neutral-950/5 ring-1 ring-inset ring-neutral-200">
      <Marquee pauseOnHover vertical className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
    </div>
  );
}
