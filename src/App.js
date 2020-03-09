import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Weather from "./Weather";
import Search from "./Search";
import Landing from "./Landing";
//import Weather from './Weather';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">
          <h1 className="Title">Welcome to The Weather Trip</h1>
        </Link>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
