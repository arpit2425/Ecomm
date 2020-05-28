import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsContextProvider from "./context/products";

ReactDOM.render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>,
  document.getElementById("root")
);
