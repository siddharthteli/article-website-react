import React from "react";
import Content from "./Pages/Content.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" extact component={Home} />
            <Route exact path="/article/:id" component={Content} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
