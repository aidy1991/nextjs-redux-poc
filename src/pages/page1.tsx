import { useGetPokemonByNameQuery } from "@/api";
import Links from "./links";
import styles from "@/styles/Home.module.css";

export default function Page1() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  if (isLoading) return null;

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ marginBottom: 20 }}>page1</h1>
        <h2>Name: {data.name}</h2>
        <div>Weight: {data.weight}</div>
        <div>Height: {data.height}</div>
      </div>
      <Links />
    </div>
  );
}
