import React from "react";

import {
  InstagramLogo,
  TwitterLogo,
  FacebookLogo,
  YoutubeLogo,
  WhatsappLogo,
  Tag,
} from "phosphor-react";

import { Container, Link, List, ListItem, Paragraph, H1 } from "./styles";

import logo from "../../assets/logo.png";
import { Column } from "../Column";
import { Box } from "../Box";

export function Footer() {
  return (
    <Container>
      <nav>
        <List>
          <ListItem>
            permaneça conectado
            <Box h="15px" />
            <List>
              <ListItem>
                <Link href="https://www.instagram.com/">
                  <InstagramLogo size={40} />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.facebook.com/">
                  <FacebookLogo size={40} />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://twitter.com/home">
                  <TwitterLogo size={40} />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.youtube.com/">
                  <YoutubeLogo size={40} />
                </Link>
              </ListItem>
            </List>
          </ListItem>
          <Box w="35px" />
          <ListItem>
            fale conosco
            <Box h="15px" />
            <Link href="#">
              <Paragraph>
                (82) 99152-1468
                <WhatsappLogo size={14} />
              </Paragraph>
            </Link>
            <Link href="#">
              <Paragraph>2878-1349</Paragraph>
            </Link>
            <Link href="#">
              <Paragraph>shoes@email.com</Paragraph>
            </Link>
          </ListItem>
          <Box h="15px" w="40px" />
          <ListItem>
            sobre a shoes
            <Box h="15px" />
            <Link href="#">
              <Paragraph>nossas lojas</Paragraph>
            </Link>
            <Link href="#">
              <Paragraph>investidores</Paragraph>
            </Link>
            <Link href="#">
              <Paragraph>política de privacidade</Paragraph>
            </Link>
          </ListItem>
          <Box h="15px" w="40px" />
          <List>
            <Link href="#">
              <ListItem>
                <H1>outlet<Tag size={50} /></H1>
              </ListItem>
            </Link>
          </List>
        </List>
      </nav>
    </Container>
  );
}
