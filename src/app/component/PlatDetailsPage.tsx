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
    <section className="w-[80vw] mx-auto mt-20 flex flex-row  mb-20">
      {item ? (
        <>
          <div className="w-[40vw] mx-auto">
            <Image
              className="bg-black rounded-2xl"
              src=""
              width={500}
              height={500}
              alt={item.name}
            />
          </div>
          <div className="h-130 w-0.5 bg-white mx-10  rounded-full" />
          <div className="w-[30vw] mx-auto flex flex-col justify-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white">
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
