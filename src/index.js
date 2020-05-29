import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsContextProvider from "./context/products";
import { CartContext, CartProvider } from "./context/cart";

ReactDOM.render(
  <ProductsContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsContextProvider>,
  document.getElementById("root")
);
