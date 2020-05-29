import React from "react";
import logo from "./../assets/ecomm.svg";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <CartLink />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
