import React from "react";

import { Container, Body, Header, Title } from "./styles";

import { Box } from "../Box";
import { Button } from "../Button";
import { useCart } from "../../hooks/useCart";

import produto1 from "../../assets/product1.jpg";
import produto2 from "../../assets/product2.jpg";
import produto3 from "../../assets/product3.jpg";
import produto4 from "../../assets/product4.jpg";

export function Card() {
  const { addProduct } = useCart();

  const products = [
    {
      id: 1,
      title: "SCARPIN SALTO FINO BÁSICO",
      price: 59.6,
      image: produto1,
    },
    {
      id: 2,
      title: "SCARPIN SALTO FINO GOLD",
      price: 99.9,
      image: produto2,
    },
    {
      id: 3,
      title: "SCARPIN SALTO FINO LUXO",
      price: 149.9,
      image: produto3,
    },
    {
      id: 4,
      title: "SCARPIN SALTO FINO STONE",
      price: 449.9,
      image: produto4,
    },
  ];

  return (
    <>
      {products.map((product) => {
        return (
          <Container key={product.id}>
            <Header>{<img src={product.image} alt={product.title} />}</Header>
            <Body>
              <Title>{product.title}</Title>
                <p>R$ {product.price.toFixed(2)}</p>
              <Box h="15px" />
              <Button
                w="90px"
                h="40px"
                fs="18px"
                secondary={false}
                onClick={() => addProduct(product)}
              >
                comprar
              </Button>
            </Body>
          </Container>
        );
      })}
    </>
  );
}
