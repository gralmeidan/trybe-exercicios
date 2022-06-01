import pokemons from "./data";
import Card from "./card";


function MapCard(props) {
  const { location, map } = props
  return(
    <div className="flex flex-col text-center flex-grow min-w-fit max-w-sm my-2 basis-1">
      <img src={map} alt=""/>
      <p className="font-sans font-semibold">{location}</p>
    </div>
  )
}

function Info(props) {

  const { id } = props.match.params
  const pokemon = pokemons.find(({ id: pid }) => pid.toString() === id)

  return (
    <div className="flex flex-col p-2 items-center">
      <Card pokemon={pokemon} />
      <div className="align-middle border-2 rounded-lg justify-center
    bg-white m-3 px-4 py-2 min-w-fit">
        <h2>Summary</h2>
        <p>{pokemon.summary}</p>
        <h2>Found At</h2>
        <div className="flex flex-wrap justify-around">
          {pokemon.foundAt.map((props, index) => <MapCard {...props} key={index}/>)}
        </div>
      </div>
    </div>
  );
}

export default Info;
