import React from 'react';

import HomeCrousel from '../Corousel';
import HouseCard from '../HouseCard';

import {
  Container,
} from './style';

export default function Home () {
  return (
    <Container>
      <HomeCrousel />
      <HouseCard />
    </Container>
  )
}
