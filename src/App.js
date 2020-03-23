import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { SearchContainer, store } from "./Store";
import Weather from "./Weather";
import Search from "./Search";
import Landing from "./Landing";
//import Weather from './Weather';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/">
            <h1 className="Title">Welcome to The Weather Trip</h1>
          </Link>
          <Switch>
            <Route path="/search">
              <SearchContainer />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
