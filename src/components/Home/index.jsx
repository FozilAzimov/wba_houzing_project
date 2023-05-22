import React from 'react';

import { Container } from './style';

import HomeCrousel from '../Corousel';
import Category from '../Category';
import Recommended from '../Recomended';
import WhyChooseUs from '../WhyChooseUs';
import Recent from '../Recent';
import Banner from '../Banner';

export default function Home () {

  return (
    <Container>
      <HomeCrousel />
      <Recommended />
      <WhyChooseUs />
      <Category />
      <Banner />
      <Recent />
    </Container>
  )
}
