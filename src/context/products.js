import React from "react";
export const ProductsContext = React.createContext();
function ProductsContextProvider({ children }) {
  return (
    <ProductsContext.Provider value="Hello">
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
