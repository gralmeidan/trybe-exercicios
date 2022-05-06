import pokemons from "./data";
import Card from "./card";

function Pokedex() {
  return (
    <div className="flex flex-wrap p-2">
      {pokemons.map(poke => (
        <Card pokemon={poke} key={poke.id} />
      ))}
    </div>
  );
}

export default Pokedex;
