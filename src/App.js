import React from "react";
import Header from "./components/Header/Header";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Billing from "./pages/billing/Billing";
import Complete from "./pages/complete/Complete";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route path="/billing" component={Billing} />
      <Route path="/complete" component={Complete} />
    </Router>
  );
}
