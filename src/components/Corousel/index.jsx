import React, { useRef } from 'react';

import { Carousel } from 'antd';

import img1 from '../../assets/imgs/house1.png';
import img2 from '../../assets/imgs/house2.png';

import {
  Arrow,
  Blur,
  Container,
  Content,
  Details,
  Icons,
  Img,
} from './style';
import Button from '../Generic/Button';

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
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Description>112 Glenwood Ave Hyde Park, Boston, MA</Content.Description>
        <Details>
          <Details.Item>
            <Icons.Bed />Bed
          </Details.Item>
          <Details.Item>
            <Icons.Bath />Bath
          </Details.Item>
          <Details.Item>
            <Icons.Garage />Garage
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />Ruler
          </Details.Item>
        </Details>
        <Content.Price>$5,250/mo</Content.Price>
        <Button type='dark' minWidth={180}>Read More</Button>
      </Content>
      <Arrow arrow='right' onClick={onMove} data-name='right' />
    </Container>
  )
}
