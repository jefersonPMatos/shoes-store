import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  const {
    setProducts,
    products,
  } = useContext(CartContext);

  const addProduct = (product) => {
    setProducts([...products, product]);
    console.log(products)
  }

  const removeProduct = (product) => {
    setProducts(products.filter(p => p.id !== product.id));
  }

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const totalItems = products.length;

  return {
    addProduct,
    removeProduct,
    products,
    totalPrice,
    totalItems,
  }
}