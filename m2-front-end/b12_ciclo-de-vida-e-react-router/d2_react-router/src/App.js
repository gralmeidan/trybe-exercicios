import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Info from "./Info";
import Pokedex from "./pokedex";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="flex items-center mt-3">
          <h1>Pokedex</h1>
          <div className="border-[1px] h-8 ml-5 mr-2"/>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/pokemons/:id" component={Info}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Pokedex}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
