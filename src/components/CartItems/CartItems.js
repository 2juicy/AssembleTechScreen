import React from "react";
import "./CartItems.css";

export default function CartItems({ sku, name, unitPrice, quantity }) {
  return (
    <div className="cart-items">
      <div className="image-placeholder"></div>

      <div>
        <h4>{name}</h4>
        <p>SKU# {sku}</p>
      </div>

      <h4>{quantity}</h4>

      <h4>${unitPrice.toFixed(2)}</h4>
    </div>
  );
}
