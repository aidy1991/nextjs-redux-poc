import { useGetPokemonByNameQuery } from "@/api";
import Links from "./links";

export default function Page2() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  if (isLoading) return null;

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ marginBottom: 20 }}>page2</h1>
        <h2>Name: {data.name}</h2>
        <div>
          Types:{" "}
          {data.types.map((t: any) => (
            <div key={t.type.name}>{t.type.name}</div>
          ))}
        </div>
      </div>
      <Links />
    </div>
  );
}
