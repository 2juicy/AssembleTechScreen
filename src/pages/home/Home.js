import React from "react";
import CartItems from "../../components/CartItems/CartItems";
import Subtotal from "../../components/Subtotal/Subtotal";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const cart = [
    { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 },
    { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 },
    { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }
  ];

  const subtotal = cart.reduce((total, item) => {
    return item.unitPrice * item.quantity + total;
  }, 0);

  return (
    <section id="cart-page">
      <div className="cart-page-title">
        <h2>Your Cart</h2>
        <h4>Quantity</h4>
        <h4>Price</h4>
      </div>
      {cart.map((item, key) => (
        <CartItems
          key={key}
          sku={item.sku}
          name={item.name}
          unitPrice={item.unitPrice}
          quantity={item.quantity}
        />
      ))}
      <Subtotal subtotal={subtotal} />

      <Link to={"./billing"}>
        <button className="button right">Check Out</button>
      </Link>
    </section>
  );
}
