import React from 'react';

import { Container } from './style';

export default function Button ({ disabled, onClick, children, type, width, height, fontSize, minWidth, background }) {
  return (
    <Container background={background} disabled={disabled} onClick={onClick} type={type} width={width} minWidth={minWidth} height={height} fontSize={fontSize}>
      {children || 'Generic Button'}
    </Container>
  )
}
