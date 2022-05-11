import React from 'react';

import { Container } from './styles';

export function Row({ justify, aling, children }) {
  return (
    <Container justify={justify} aling={aling}>
      {children}
    </Container>
  );
}