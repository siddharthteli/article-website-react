import logo from "./logo.svg";

import React from "react";
import Content from "./Pages/Content.js";
import Cards from "./components/Cards/Cards";

import { auto } from "async";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" extact component={Home} />
            <Route exact path="/article" component={Content} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
