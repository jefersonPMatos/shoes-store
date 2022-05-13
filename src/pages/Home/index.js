import React from "react";


import { Header } from "../../components/Header";
import { Banner, H2 } from "./styles";
import { Section } from "../../components/Section";
import { Box } from "../../components/Box";
import { Row } from "../../components/Row";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Column } from "../../components/Column";
import { Footer } from "../../components/Footer";
import { Cart } from "../../components/Cart";
import { Popup } from "../../components/Popup";

import banner from "../../assets/banner.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

export function Home() {
  
  return (
    <>
      <Popup>
        <Cart />
      </Popup>
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
            <img src={img1} alt="img1" />
            <Box w="60px" />
            <img src={img2} alt="img2" />
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
            <Card />
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
