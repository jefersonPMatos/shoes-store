import React from 'react';

import { Container } from './styles';

export function Section({ color, children }) {
  return (
    <Container color={color}>
        {children}
    </Container>
  );
}