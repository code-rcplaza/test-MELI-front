import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const [text, setText] = useState("");

  return (
    <Router>
      <header>
        <h1>Mercado Libre</h1>
        <Link to="/">Home</Link>
        <Link to="/adad">About</Link>
        <Link to="/users">Users</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/adad">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
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
