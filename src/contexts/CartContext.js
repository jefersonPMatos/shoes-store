import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  setProducts: () => {},
  products: [],
});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const globals = {
    setProducts,
    products,
  };

  return (
    <CartContext.Provider value={globals}>
      {children}
    </CartContext.Provider>
  )
}