import React from "react";
import "./Subtotal.css";

export default function Subtotal({ subtotal }) {
  return (
    <div className="subtotal">
      <h4>Subtotal</h4>
      <h4>${subtotal.toFixed(2)}</h4>
    </div>
  );
}
