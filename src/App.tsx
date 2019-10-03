import React from "react";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Trending from "./components/Trending";
import Coming from "./components/Coming";
import Info from "./components/Info";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/trending" component={Trending} />
            <Route path="/upcoming" component={Coming} />
            <Route path="/info/:id" component={Info} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
