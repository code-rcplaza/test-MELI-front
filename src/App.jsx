import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  return (
    <Router>
      <header>
        <SearchBar />
      </header>
      <main>
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
