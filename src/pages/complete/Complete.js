import React from "react";
import "./Complete.css";

export default function Complete() {
  return (
    <section id="order-complete-page">
      <div className="complete-title">
        <h2>Order Complete</h2>
      </div>

      <h4 className="order-text center">
        Hooray! Way to order those products.
      </h4>

      <div className="center">
        <a className="button" href="/">
          Go Home
        </a>
      </div>
    </section>
  );
}
