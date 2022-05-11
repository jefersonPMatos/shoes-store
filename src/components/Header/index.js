import React from "react";

import logo from "../../assets/logo.png";

import { Container, Link, Logo, List, ListItem } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <nav>
        <List>
          <ListItem>
            <Link href="#">TODOS OS PRODUTOS</Link>
          </ListItem>
          <ListItem>
            <Link href="#">COLEÇÕES</Link>
          </ListItem>
          <ListItem>
            <Link href="#">OUTLET</Link>
          </ListItem>
        </List>
      </nav>
    </Container>
  );
}
