import React from "react";
import { CartProvider } from "./contexts/CartContext";
import { Home } from "./pages/Home";
import { Reset } from "./styles/reset";
import { Theme } from "./styles/theme";

function App() {
  return (
    <>
        <CartProvider>
          <Home />

          <Reset />
          <Theme />
        </CartProvider>
    </>
  );
}

export default App;
