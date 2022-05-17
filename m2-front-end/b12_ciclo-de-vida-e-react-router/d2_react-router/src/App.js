import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pokedex from "./pokedex";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Pokedex</h1>
        <Switch>
          <Route path="/" component={Pokedex}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
