import pokemons from "./data";
import Card from "./card";
import { useState } from "react";
import Button from "./button";

function Pokedex() {
  const [ index, setIndex ] = useState(0)
  const [ filter, setFilter ] = useState('Fire')
  const filtered = pokemons.filter(({ type }) => type === filter)
  return (
    <div className="flex flex-col p-2 items-center">
      <Card pokemon={filtered[index]} />
      <div className="flex">
        <Button 
          onClick={() => {
            setIndex(index + 1 === filtered.length ? 0 : index + 1)
          }}
        >Próximo Pokemon</Button>
        <Button
          onClick={() => {setFilter('Fire')}}
        >Fire</Button>
        <Button
          onClick={() => {setFilter('Psychic')}}
        >Psychic</Button>
      </div>
    </div>
  );
}

export default Pokedex;
