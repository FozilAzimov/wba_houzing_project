import React, { useRef } from 'react';

import { Carousel } from 'antd';

import img1 from '../../assets/imgs/house1.png';
import img2 from '../../assets/imgs/house2.png';

import {
  Arrow,
  Blur,
  Container,
  Content,
  Img,
} from './style';

export default function HomeCrousel () {

  const slider = useRef();

  const onMove = ({ target: { dataset: { name } } }) => {
    if (name === 'left') slider.current.prev();
    if (name === 'right') slider.current.next();
  }

  return (
    <Container>
      <Arrow arrow='left' onClick={onMove} data-name='left' />
      <Carousel ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Description>112 Glenwood Ave Hyde Park, Boston, MA</Content.Description>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow arrow='right' onClick={onMove} data-name='right' />
    </Container>
  )
}
