import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import brand from "./assets/Logo_ML.png";
import icon_search from "./assets/ic_Search.png";
import "./App.css";
import SearchState from "../context/Search/SearchState";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <Router>
      <SearchState>
        <header>
          <SearchBar URLBrand={brand} URLIcon={icon_search} />
        </header>
        <main>
          <div className="layout">
            <article className="display-switch">
              <Switch>
                <Route exact path="/items">
                  <SearchResults />
                </Route>
                <Route exact path="/items/:id">
                  <ProductDetails />
                </Route>
                <Route exact path="/"></Route>
                <Route path="/">404 - Not Found</Route>
              </Switch>
            </article>
          </div>
        </main>
      </SearchState>
    </Router>
  );
};

export default App;
