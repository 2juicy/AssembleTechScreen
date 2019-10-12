import React from "react";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router";
import Home from "./pages/home/Home";
import Billing from "./pages/billing/Billing";
import Complete from "./pages/complete/Complete";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/billing" component={Billing} />
        <Route path="/complete" component={Complete} />
      </Switch>
    </>
  );
}
