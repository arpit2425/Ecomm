import React from "react";
import url from "../utils/URL";
import axios from "axios";
import { featuredProducts } from "../utils/helpers";
export const ProductsContext = React.createContext();
function ProductsContextProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://cors-anywhere.herokuapp.com/${url}/products`, {})
      .then((response) => {
        // const featured = featuredProducts(response.data);
        setProducts(response.data);
        // setFeatured(featured);
        setLoading(false);
      });

    return () => {};
  }, []);

  return (
    <ProductsContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
