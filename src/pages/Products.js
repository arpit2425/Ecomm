import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import ProductList from "../components/Products/ProductList";
import Loading from "../components/Loading";
export default function Products() {
  const { products, loading } = useContext(ProductsContext);

  return loading ? (
    <Loading />
  ) : (
    <ProductList title="Our products" products={products}></ProductList>
  );
}
