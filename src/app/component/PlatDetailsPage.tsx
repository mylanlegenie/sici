import { desserts, pizzas, salades } from "../plat";

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

  return (
    <section className="w-[80vw] mx-auto mt-20 rounded-2xl border-2 border-white bg-white p-8 text-center">
      {item ? (
        <>
          <h2 className="text-3xl font-bold text-red-500">{item.name}</h2>
          {"description" in item ? (
            <p className="mt-4 text-lg text-gray-800">{item.description}</p>
          ) : null}
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
