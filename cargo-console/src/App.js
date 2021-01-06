/*  Main entry point of the app used for routing between pages */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Tracker from "../src/Pages/Tracker/Tracker.js";
import Delivery from "../src/Pages/Delivery/Delivery.js";
import Alert from "../src/Pages/Alert/Alert.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/tracker"></Redirect>
          </Route>
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/alert" component={Alert} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
