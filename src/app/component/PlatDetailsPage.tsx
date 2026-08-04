import { desserts, pizzas, salades } from "../plat";
import Image from "next/image";
interface PlatPageProps {
  name: string;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export default function PlatPage({ name }: PlatPageProps) {
  const item = [...pizzas, ...salades, ...desserts].find(
    (plat) => normalize(plat.name) === normalize(name),
  );
  const allergenes = item?.allergenes ?? [];

  return (
    <section className="mx-auto mb-12 mt-10 flex w-[90vw] flex-col md:mb-20 md:mt-20 md:w-[80vw] md:flex-row">
      {item ? (
        <>
          <div className="mx-auto w-full md:w-[40vw]">
            <Image
              className="mx-auto h-auto w-full max-w-125 rounded-2xl bg-black"
              src=""
              width={500}
              height={500}
              alt={item.name}
            />
          </div>
          <div className="my-8 h-0.5 w-full rounded-full bg-white md:mx-10 md:my-0 md:h-130 md:w-0.5" />
          <div className="mx-auto flex w-full flex-col justify-center md:w-[30vw]">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {item.name}
            </h2>
            <strong className="mt-4 text-base font-semibold text-white/90">
              5€
            </strong>
            <p className="mt-5 text-base leading-8 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              hendrerit lacus, nec dictum neque. Maecenas id turpis eu metus
              malesuada fermentum quis non sem. Cras vel mi elit. Nullam
              condimentum turpis ut est pulvinar, suscipit vulputate eros
              fringilla. Praesent at lacus gravida, porttitor risus mattis,
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Allergenes
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {allergenes.length > 0 ? (
                  allergenes.map((allergene) => (
                    <span
                      key={allergene}
                      className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white/90"
                    >
                      {allergene}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-white/75">
                    Aucun allergene renseigne.
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-red-500">{name}</h2>
          <p className="mt-4 text-lg text-gray-800">
            Aucun plat ne correspond à ce nom.
          </p>
        </>
      )}
    </section>
  );
}
