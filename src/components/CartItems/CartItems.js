import React from "react";
import "./CartItems.css";

export default function CartItems({ sku, name, unitPrice, quantity }) {
  const image = name.split(" ").join("-");

  return (
    <div className="cart-items">
      <div className="item-info">
        <div className="item-image">
          <img alt={name} src={`assets/${image}.png`} />
        </div>
        <div>
          <h4>{name}</h4>
          <p>SKU# {sku}</p>
        </div>
      </div>

      <h4>{quantity}</h4>

      <h4>${unitPrice.toFixed(2)}</h4>
    </div>
  );
}
