import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Billing from "./pages/billing/Billing";
import Complete from "./pages/complete/Complete";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/billing">
          <Billing />
        </Route>
        <Route path="/complete">
          <Complete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
