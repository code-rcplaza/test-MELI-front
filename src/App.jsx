import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import "./App.css";

import brand from "./assets/Logo_ML.png";
import icon_search from "./assets/ic_Search.png";

const App = () => {
  return (
    <Router>
      <header>
        <SearchBar URLBrand={brand} URLIcon={icon_search} />
      </header>
      <main>
        <div className="layout">
          <article className="display-switch">
            <Switch>
              <Route exact path="/items">
                <About />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/"></Route>
              <Route path="/">404 - Not Found</Route>
            </Switch>
          </article>
        </div>
      </main>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
