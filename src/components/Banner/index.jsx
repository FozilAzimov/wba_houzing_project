import React from 'react';

import img from '../../assets/imgs/banner.png';

import {
  Blur,
  Container,
  Content,
  DefaultHeight,
  Img,
} from './style';

import { Carousel } from 'antd';
import Button from '../Generic/Button';

export default function Banner () {
  return (
    <Container>
      <Carousel>
        <Img src={img} />
      </Carousel>

      <Blur />

      <Content>
        <Content.Price>Vermont Farmhouse With Antique Jail Is</Content.Price>
        <Content.Price>the Week's Most Popular Home</Content.Price>
        <DefaultHeight />
        <Button type='primary' width='180'>Read more</Button>
      </Content>
    </Container>
  )
}
