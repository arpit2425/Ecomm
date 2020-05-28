import React, { useContext } from "react";
import { ProductsContext } from "../context/products";

export default function Products() {
  console.log(useContext(ProductsContext));
  return <h1>hello from products page</h1>;
}
