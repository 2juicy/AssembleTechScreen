import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Billing from "./pages/billing/Billing";
import Complete from "./pages/complete/Complete";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/billing" component={Billing} />
        <Route path="/complete" component={Complete} />
      </Switch>
    </Router>
  );
}

export default App;
