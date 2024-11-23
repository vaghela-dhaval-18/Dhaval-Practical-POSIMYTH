import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
function ProductProvider({ children }) {
  const [Products, setProducts] = useState([]);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilterProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        Products,
        setProducts,
        FilterProducts,
        setFilterProducts,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
