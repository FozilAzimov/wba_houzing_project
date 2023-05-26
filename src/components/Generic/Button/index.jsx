import React from 'react';

import { Container } from './style';

export default function Button ({ onClick, children, type, width, height, fontSize, minWidth }) {
  return (
    <Container onClick={onClick} type={type} width={width} minWidth={minWidth} height={height} fontSize={fontSize}>
      {children || 'Generic Button'}
    </Container>
  )
}
