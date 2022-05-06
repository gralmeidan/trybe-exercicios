import pokemons from './data'
import Card from './card'

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      {pokemons.map((poke) => <Card pokemon={poke} key={poke.id} />)}
    </div>
  );
}

export default App;
