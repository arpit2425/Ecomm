import React from "react";
import logo from "./../assets/ecomm.svg";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";
import LoginLink from "../components/LoginLink";
import { UserContext } from "../context/user";
export default function Header() {
  let { user } = React.useContext(UserContext);
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
            {user.token ? (
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            ) : null}
          </div>
          <div>
            <li>
              <LoginLink />
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
