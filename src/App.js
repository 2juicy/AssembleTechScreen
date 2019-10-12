import React from "react";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Billing from "./pages/billing/Billing";
import Complete from "./pages/complete/Complete";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route path={process.env.PUBLIC_URL + "/billing"} component={Billing} />
      <Route path={process.env.PUBLIC_URL + "/complete"} component={Complete} />
    </>
  );
}
