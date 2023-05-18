import React from 'react';

import { Container } from './style';

import HomeCrousel from '../Corousel';
import Category from '../Category';

export default function Home () {

  return (
    <Container>
      <HomeCrousel />
      <Category />
    </Container>
  )
}
