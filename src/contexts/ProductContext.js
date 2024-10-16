import React, { createContext, useState, useEffect } from 'react';
//create context
export const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  // Fetch de productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };
    // Invoca fetch
    fetchProducts();
  }, []); // array de dependencias vacío para que solo se ejecute una vez.

  
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
