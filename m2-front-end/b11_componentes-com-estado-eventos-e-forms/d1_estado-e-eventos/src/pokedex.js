import pokemons from "./data";
import Card from "./card";
import { useState } from "react";

function Pokedex() {
  const [ index, setIndex ] = useState(0)

  return (
    <div className="flex flex-col p-2 items-center">
      <Card pokemon={pokemons[index]} />
      <button 
        className="bg-white font-sans font-semibold w-fit p-3 rounded-md
        transition-all hover:bg-cyan-700 hover:text-white"

        onClick={() => {
          setIndex(index + 1 === pokemons.length ? 0 : index + 1)
        }}
      >Próximo Pokemon</button>
    </div>
  );
}

export default Pokedex;
