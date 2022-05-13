import React from "react";

import { useCart } from "../../hooks/useCart";

import { Button } from "../Button";
import { Row } from "../Row";
import { Column } from "../Column";
import { Box } from "../Box";

import { Container, Img, P, Title } from "./styles";

export function Cart() {
  const { products, totalPrice, totalItems, removeProduct } = useCart();

  return (
    <Container>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Box>
                <Row aling="flex-start">
                <Box h="10px" />
                  <Img src={product.image} alt={product.title} />
                  <Box w="10px" />
                  <Title fs="26px">{product.title}</Title>
                  <Box h="10px" />
                  <P fs="16px">
                    R$ {product.price.toFixed(2)}
                    <Box h="10px" />
                    <Button
                      w="90px"
                      h="30px"
                      fs="14px"
                      secondary
                      onClick={() => removeProduct(product)}
                    >
                      Remover
                    </Button>
                  </P>
                </Row>
              </Box>
              <Box h="15px" />
            </div>
          );
        })}
      </div>
      <Column aling="flex-start">
        <Box h="20px" />
        <P fs="16px">Items: {totalItems}</P>
        <Box h="15px" />
        <P fs="16px">Valor total: R$ {totalPrice.toFixed(2)}</P>
      </Column>
      <Box h="15px" />
      <Button w="350px" h="60px" fs="30px">
        Finalizar compra
      </Button>
      <Box h="20px" />
    </Container>
  );
}
