import React from 'react';

import { Container } from './style';

export default function Button ({ onClick, children, type, width, height }) {
  return (
    <Container onClick={onClick} type={type} width={width} height={height}>
      {children || 'Generic Button'}
    </Container>
  )
}
