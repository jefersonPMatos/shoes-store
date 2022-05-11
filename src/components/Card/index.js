import React from 'react';

import { Container, Body, Header, Title } from './styles';

export function Card({ title, header, body }) {
  return (
    <Container>
        <Header>{header}</Header>
        <Body>
            <Title>{title}</Title>
            {body}
        </Body>
    </Container>
  );
}