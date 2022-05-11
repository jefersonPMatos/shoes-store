import React from "react";

import { Header } from "../../components/Header";
import { Banner, H2, Img } from "./styles";
import { Section } from "../../components/Section";
import { Box } from "../../components/Box";
import { Row } from "../../components/Row";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Column } from "../../components/Column";
import { Footer } from "../../components/Footer";

import banner from "../../assets/banner.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import produto1 from "../../assets/product1.jpg";
import produto2 from "../../assets/product2.jpg";
import produto3 from "../../assets/product3.jpg";
import produto4 from "../../assets/product4.jpg";

const products = [
  {
    id: 1,
    title: "SCARPIN SALTO FINO BÁSICO",
    price: "R$ 100,00",
    image: produto1,
  },
  {
    id: 2,
    title: "SCARPIN SALTO FINO GOLD",
    price: "R$ 200,00",
    image: produto2,
  },
  {
    id: 3,
    title: "SCARPIN SALTO FINO DELUXE",
    price: "R$ 300,00",
    image: produto3,
  },
  {
    id: 4,
    title: "SCARPIN SALTO FINO FASHION",
    price: "R$ 400,00",
    image: produto4,
  },
];

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Section color="#DCBB99">
          <Banner src={banner} alt="banner" />
        </Section>
        <Section>
          <Box h="70px" />
          <h1>encontre seu estilo</h1>
          <Box h="70px" />
          <Row>
            <Img src={img1} alt="img1" />
            <Box w="60px" />
            <Img src={img2} alt="img2" />
          </Row>
          <Box h="80px" />
          <Button w="300px" h="99px" secondary>
            Ver mais
          </Button>
          <Box h="70px" />
        </Section>
        <Section color="#C2185B">
          <Box h="60px" />
          <H2>30% OFF</H2>
          <Box h="60px" />
          <Row>
            <Box h="400px">
              {products.map(({ id, title, price, image }) => (
                <Card
                  key={id}
                  title={title}
                  body={price}
                  header={<img src={image} alt="Produto" />}
                />
              ))}
            </Box>
          </Row>
          <Box h="60px" />
        </Section>
        <Section>
          <Box h="140px" />
          <Row>
            <Column aling="flex-start">
              <Box w="550px">
                <h3>SANDÁLIA PALMILHA MATELASSÊ TIRAS ROLOTÊ</h3>
              </Box>
              <Box h="20px" />
              <Button>ver detalhes</Button>
              <Box h="55px" />
              <img src={img3} alt="img3" />
            </Column>
            <Box w="140px" />
            <img src={img4} alt="img4" />
          </Row>
        </Section>
        <Box h="150px" />
        <Section color="#C2185B">
          <Box h="14px" />
          <Footer />
        </Section>
      </main>
    </>
  );
}
