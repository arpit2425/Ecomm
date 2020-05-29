import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);
  let display = true;
  if (cartItems === 0) {
    display = false;
  }

  return (
    <div className="cart-link-container">
      <Link to="/cart">cart</Link>
      {display && <span className="cart-link-total">{cartItems}</span>}
    </div>
  );
}
