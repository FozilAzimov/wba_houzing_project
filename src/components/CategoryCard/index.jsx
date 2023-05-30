import React from 'react';

import noImg from '../../assets/imgs/noimg.jpeg'
import categoryImg from '../../assets/imgs/category.png'

import {
  BlurCategory,
  Container,
  Content,
  Img,
} from './style';

export default function CategoryCard ({ onClick, data = {} }) {

  const { name } = data;

  return (
    <Container onClick={onClick}>
      <Img src={categoryImg || noImg} />
      <BlurCategory />
      <Content top>
        {(name === 'string' || !name) ? 'Hovli' : name}
      </Content>
    </Container>
  )
}
